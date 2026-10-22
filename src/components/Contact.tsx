import { ArrowUpRight, Download } from './Icons'

export function Contact() {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-grid" aria-hidden="true" />
      <div className="section-label"><span>05</span> PROCHAIN SIGNAL</div>
      <div className="availability"><span className="live-dot" /> Recherche un stage PFE de 4 à 6 mois · Janvier / Février 2027</div>
      <h2 id="contact-title"><span>CONSTRUISONS</span><br /><span className="outline-dark">QUELQUE CHOSE</span><br /><span>DE FIABLE.</span></h2>
      <div className="contact-bottom">
        <p>Une opportunité, un projet ou simplement une conversation technique ? Mon canal est ouvert.</p>
        <div className="contact-links">
          <a className="contact-primary magnetic" href="mailto:ilyassmandour2002@gmail.com">Écrire un message <ArrowUpRight size={28} /></a>
          <a href="https://linkedin.com/in/ilyass-mandour-83627321b" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href="https://github.com/ilyassman" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          <a href="/CV_MANDOUR_Ilyass.pdf" download>CV <Download /></a>
        </div>
      </div>
      <div className="footer-meta"><span>© 2026 ILYASS MANDOUR</span><span>ROUEN · FRANCE</span><a href="#top">RETOUR EN HAUT ↑</a></div>
    </footer>
  )
}
