/**
 * NEXADMIN — AGENT ADMINISTRATIF PRINCIPAL
 * 
 * L'agent central qui orchestre tous les autres.
 * Reçoit les instructions, délègue aux agents spécialisés.
 * Utilise Claude claude-sonnet-4-6 avec accès aux outils.
 */

import Anthropic from "@anthropic-ai/sdk";
import { tripleVerifyCalculation } from "./calculator";
import { sendEmail, emailTemplates } from "./email-agent";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export interface AdminTask {
  tenant_id: string;
  type:
    | "generate_quote"
    | "generate_invoice"
    | "send_reminder"
    | "weekly_report"
    | "analyze_request"
    | "qualify_prospect";
  input: Record<string, unknown>;
}

export interface AdminResult {
  success: boolean;
  output: Record<string, unknown>;
  pending_human_validation?: boolean;
  validation_url?: string;
  agent_log: {
    actions_taken: string[];
    duration_ms: number;
    warnings: string[];
  };
}

// Outils disponibles pour l'agent administratif
const tools: Anthropic.Tool[] = [
  {
    name: "calculate_amount",
    description:
      "Calcule un montant financier avec triple vérification automatique. Toujours utiliser cet outil pour les calculs.",
    input_schema: {
      type: "object" as const,
      properties: {
        amounts: {
          type: "array",
          items: { type: "number" },
          description: "Liste des montants HT à calculer",
        },
        vat_rate: {
          type: "number",
          description: "Taux de TVA en pourcentage (0 pour franchise TVA)",
        },
        type: {
          type: "string",
          enum: ["total", "vat", "quote", "invoice"],
          description: "Type de calcul à effectuer",
        },
      },
      required: ["amounts", "type"],
    },
  },
  {
    name: "prepare_email",
    description:
      "Prépare un email pour envoi. L'envoi ne sera effectif qu'après validation humaine pour les documents officiels.",
    input_schema: {
      type: "object" as const,
      properties: {
        to_email: { type: "string", description: "Adresse email du destinataire" },
        to_name: { type: "string", description: "Nom du destinataire" },
        email_type: {
          type: "string",
          enum: ["quote", "invoice", "reminder", "report", "onboarding"],
        },
        subject: { type: "string" },
        content: { type: "string", description: "Contenu de l'email en français" },
        requires_validation: {
          type: "boolean",
          description:
            "True pour documents officiels, False pour notifications automatiques",
        },
      },
      required: ["to_email", "email_type", "subject", "content"],
    },
  },
  {
    name: "flag_for_human_review",
    description:
      "Signale qu'une action nécessite une vérification humaine avant d'être exécutée.",
    input_schema: {
      type: "object" as const,
      properties: {
        reason: { type: "string", description: "Raison nécessitant review humaine" },
        action_blocked: { type: "string", description: "Action qui a été bloquée" },
        priority: {
          type: "string",
          enum: ["low", "medium", "high", "critical"],
        },
      },
      required: ["reason", "action_blocked", "priority"],
    },
  },
  {
    name: "log_action",
    description: "Enregistre une action dans le journal d'audit",
    input_schema: {
      type: "object" as const,
      properties: {
        action: { type: "string" },
        result: { type: "string" },
        details: { type: "string" },
      },
      required: ["action", "result"],
    },
  },
];

/**
 * Exécute un outil appelé par l'agent
 */
async function executeTool(
  toolName: string,
  toolInput: Record<string, unknown>,
  tenantId: string,
  actionsLog: string[]
): Promise<string> {
  switch (toolName) {
    case "calculate_amount": {
      const result = await tripleVerifyCalculation(
        {
          type: (toolInput.type as string) as "total" | "vat" | "quote" | "invoice",
          amounts: toolInput.amounts as number[],
          vat_rate: toolInput.vat_rate as number | undefined,
        },
        tenantId,
        "admin_task",
        Date.now().toString()
      );

      if (!result.consensus) {
        actionsLog.push("⚠️ Discordance détectée dans le calcul — intervention humaine requise");
        return JSON.stringify({
          error: "Discordance détectée entre les agents de calcul",
          blocked: true,
          agents: {
            agent1: result.agent1,
            agent2: result.agent2,
            agent3: result.agent3,
          },
        });
      }

      actionsLog.push(`✅ Calcul vérifié (×3): ${result.result}€`);
      return JSON.stringify({ result: result.result, verified: true });
    }

    case "prepare_email": {
      actionsLog.push(
        `📧 Email préparé: ${toolInput.email_type} → ${toolInput.to_email}`
      );
      return JSON.stringify({
        prepared: true,
        pending_validation: toolInput.requires_validation ?? true,
        message:
          "Email en attente de validation humaine avant envoi",
      });
    }

    case "flag_for_human_review": {
      actionsLog.push(
        `🚨 Action bloquée pour review humaine [${toolInput.priority}]: ${toolInput.reason}`
      );
      return JSON.stringify({
        flagged: true,
        reason: toolInput.reason,
        priority: toolInput.priority,
      });
    }

    case "log_action": {
      actionsLog.push(`📝 ${toolInput.action}: ${toolInput.result}`);
      return JSON.stringify({ logged: true });
    }

    default:
      return JSON.stringify({ error: `Outil inconnu: ${toolName}` });
  }
}

/**
 * AGENT PRINCIPAL: Traite une tâche administrative
 */
export async function processAdminTask(task: AdminTask): Promise<AdminResult> {
  const startTime = Date.now();
  const actionsLog: string[] = [];
  const warnings: string[] = [];

  const systemPrompt = `Tu es NexAdmin, un agent IA administratif professionnel pour les TPE françaises.

RÈGLES ABSOLUES:
1. Tu ne fais JAMAIS de calcul mental — utilise TOUJOURS l'outil calculate_amount
2. Tu ne modifies JAMAIS des données sans validation humaine pour les documents officiels
3. Tu utilises flag_for_human_review si tu as le moindre doute
4. Tes réponses sont en français, professionnelles et précises
5. Tu logs TOUTES tes actions avec log_action
6. Zéro erreur est acceptable — en cas de doute, bloquer et alerter

CONTEXTE CLIENT (tenant_id: ${task.tenant_id}):
Tu travailles pour ce client en mode 100% isolé. Tu n'as accès qu'à ses données.`;

  const userMessage = `Tâche à accomplir: ${task.type}
Données: ${JSON.stringify(task.input, null, 2)}

Accomplis cette tâche en respectant scrupuleusement les règles de sécurité.`;

  const messages: Anthropic.MessageParam[] = [
    { role: "user", content: userMessage },
  ];

  let finalOutput: Record<string, unknown> = {};
  let pendingValidation = false;

  // Boucle agentique avec gestion des appels d'outils
  let maxIterations = 10;
  while (maxIterations > 0) {
    maxIterations--;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system: systemPrompt,
      tools,
      messages,
    });

    // Traiter la réponse
    if (response.stop_reason === "end_turn") {
      // L'agent a terminé
      const textContent = response.content
        .filter((c) => c.type === "text")
        .map((c) => (c as Anthropic.TextBlock).text)
        .join("\n");

      finalOutput = { summary: textContent, actions: actionsLog };
      break;
    }

    if (response.stop_reason === "tool_use") {
      // Exécuter les outils demandés
      const assistantMessage: Anthropic.MessageParam = {
        role: "assistant",
        content: response.content,
      };
      messages.push(assistantMessage);

      const toolResults: Anthropic.ToolResultBlockParam[] = [];

      for (const block of response.content) {
        if (block.type === "tool_use") {
          const toolResult = await executeTool(
            block.name,
            block.input as Record<string, unknown>,
            task.tenant_id,
            actionsLog
          );

          const parsed = JSON.parse(toolResult);
          if (parsed.pending_validation) pendingValidation = true;

          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: toolResult,
          });
        }
      }

      messages.push({ role: "user", content: toolResults });
    } else {
      break;
    }
  }

  const duration = Date.now() - startTime;
  actionsLog.push(`⏱️ Tâche terminée en ${duration}ms`);

  return {
    success: true,
    output: finalOutput,
    pending_human_validation: pendingValidation,
    agent_log: {
      actions_taken: actionsLog,
      duration_ms: duration,
      warnings,
    },
  };
}

