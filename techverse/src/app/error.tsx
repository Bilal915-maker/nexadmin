'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="page-x flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="eyebrow">Erreur</p>
      <h1 className="display-md mt-4">Le catalogue n’a pas pu être chargé.</h1>
      <p className="mt-4 max-w-xl text-graphite-300">Si la base de données est indisponible, le site peut fonctionner en mode fichiers (CATALOG_SOURCE=files).</p>
      <button onClick={reset} className="btn-primary mt-8">Réessayer</button>
    </div>
  )
}
