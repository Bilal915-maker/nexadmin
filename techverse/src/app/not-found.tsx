import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="page-x flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="display-lg mt-4">Cette page n’existe pas dans le catalogue.</h1>
      <p className="mt-4 max-w-xl text-graphite-300">La fiche a peut-être été renommée, ou le produit n’a jamais été commercialisé.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/catalogue" className="btn-primary">Rechercher un produit</Link>
        <Link href="/" className="btn-ghost">Accueil</Link>
      </div>
    </div>
  )
}
