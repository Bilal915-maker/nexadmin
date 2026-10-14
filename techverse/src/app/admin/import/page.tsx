import { ImportPanel } from '@/components/admin/ImportPanel'
import { adminCatalog } from '@/lib/admin/data'
import { CSV_TEMPLATE_HEADER } from '@/lib/catalog/importer'

export default async function AdminImport() {
  await adminCatalog()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold">Import JSON / CSV</h1>
        <p className="mt-2 max-w-3xl text-sm text-graphite-300">
          JSON : tableau de fiches au format complet (identique à l’export). CSV : champs principaux, listes séparées par « | », couleurs « Nom:#hex »,
          prix « US:799:128 Go:2023-09-12 ». Chaque import est d’abord analysé (créations, mises à jour, erreurs, doublons) puis appliqué sur
          confirmation.
        </p>
        <p className="mt-2 font-mono text-[11px] text-graphite-500 break-all">En-tête CSV : {CSV_TEMPLATE_HEADER}</p>
      </div>
      <ImportPanel />
    </div>
  )
}
