/**
 * NEXADMIN — Calcul des tarifs
 * Basé sur la valeur réelle créée pour le client
 * Formule: heures libérées × SMIC net horaire × nombre salariés × 4.33
 */

const SMIC_HORAIRE_NET = 9.74; // €/h — source: legisocial.fr juin 2026
const HOURS_SAVED_PER_WEEK_PER_EMPLOYEE = 5;
const WEEKS_PER_MONTH = 4.33;
const MINIMUM_MARGIN_RATIO = 3; // Minimum ×3 entre valeur client et notre prix

export const PLANS = {
  starter: {
    name: "Starter",
    price: 297,
    max_employees: 5,
    emails_per_month: 2000,
    features: [
      "Génération devis & factures automatique",
      "Relances impayés automatiques",
      "Réponse clients 24h/24",
      "Dashboard trésorerie temps réel",
      "Rapport hebdomadaire",
      "Conformité facturation électronique 2026",
    ],
  },
  pro: {
    name: "Pro",
    price: 497,
    max_employees: 15,
    emails_per_month: 8000,
    features: [
      "Tout Starter +",
      "Multi-utilisateurs (jusqu'à 5)",
      "CRM clients avancé",
      "Modules sectoriels BTP",
      "Intégration agenda chantiers",
      "Priorité support",
    ],
  },
  business: {
    name: "Business",
    price: 897,
    max_employees: 50,
    emails_per_month: 25000,
    features: [
      "Tout Pro +",
      "Multi-sites",
      "API personnalisée",
      "Onboarding dédié",
      "SLA 99,9%",
      "Account manager",
    ],
  },
} as const;

export function calculateClientROI(employees: number): {
  value_per_month: number;
  our_price: number;
  ratio: number;
  recommended_plan: keyof typeof PLANS;
  hours_saved_monthly: number;
} {
  const hours_saved_monthly =
    HOURS_SAVED_PER_WEEK_PER_EMPLOYEE * employees * WEEKS_PER_MONTH;
  const value_per_month =
    Math.round(hours_saved_monthly * SMIC_HORAIRE_NET * 100) / 100;

  let recommended_plan: keyof typeof PLANS;
  if (employees <= 5) recommended_plan = "starter";
  else if (employees <= 15) recommended_plan = "pro";
  else recommended_plan = "business";

  const our_price = PLANS[recommended_plan].price;
  const ratio = Math.round((value_per_month / our_price) * 10) / 10;

  return {
    value_per_month,
    our_price,
    ratio,
    recommended_plan,
    hours_saved_monthly: Math.round(hours_saved_monthly),
  };
}

// Surcoût emails au-delà du quota
export const EMAIL_OVERAGE_PRICE_PER_1000 = 15; // € par 1000 emails
export const EMAIL_COST_PER_1000_SES = 0.094; // $ Amazon SES EU
export const EMAIL_MARGIN_PER_1000 = EMAIL_OVERAGE_PRICE_PER_1000 - EMAIL_COST_PER_1000_SES;
