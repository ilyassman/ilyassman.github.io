import { useState } from 'react'

const nav = [
  ['Profil', '#about'],
  ['Expériences', '#experience'],
  ['Compétences', '#skills'],
  ['Formation', '#education'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header" data-hero-ui>
      <a className="brand magnetic" href="#top" aria-label="Retour en haut">
        <span className="brand-mark">IM</span>
        <span>ILYASS<br />MANDOUR</span>
      </a>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navigation principale">
        {nav.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</a>)}
      </nav>
      <a className="header-cta magnetic" href="#contact">Me contacter <span>↗</span></a>
      <button className="menu-button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /> <span />
      </button>
    </header>
  )
}
