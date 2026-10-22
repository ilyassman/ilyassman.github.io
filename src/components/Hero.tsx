import javaIcon from 'devicon/icons/java/java-original.svg'
import springIcon from 'devicon/icons/spring/spring-original.svg'
import pythonIcon from 'devicon/icons/python/python-original.svg'
import reactIcon from 'devicon/icons/react/react-original.svg'
import angularIcon from 'devicon/icons/angular/angular-original.svg'
import flutterIcon from 'devicon/icons/flutter/flutter-original.svg'
import postgresIcon from 'devicon/icons/postgresql/postgresql-original.svg'
import dockerIcon from 'devicon/icons/docker/docker-original.svg'
import awsIcon from 'devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
import langChainIcon from '../assets/langchain.svg'
import langGraphIcon from '../assets/langgraph.svg'
import { ArrowDown, Download } from './Icons'

const technologies = [
  ['Java', javaIcon], ['Spring Boot', springIcon], ['Python', pythonIcon],
  ['React', reactIcon], ['Angular', angularIcon], ['Flutter', flutterIcon],
  ['PostgreSQL', postgresIcon], ['Docker', dockerIcon], ['AWS', awsIcon],
  ['LangChain', langChainIcon], ['LangGraph', langGraphIcon],
] as const

function SpecialtyIcon({ kind }: { kind: 'api' | 'network' | 'ai' | 'apps' }) {
  const paths = {
    api: <><path d="M8 7h8M8 12h8M8 17h5" /><path d="M5 4h14v16H5z" /></>,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="17" r="2" /><path d="m11 7-4 8m6-8 4 8M8 17h8" /></>,
    ai: <><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5v1a3 3 0 0 0 4 3 3 3 0 0 0 6 0 3 3 0 0 0 4-3v-1a3 3 0 0 0-1-5V7a3 3 0 0 0-3-3 3 3 0 0 0-6 0Z" /><path d="M9 4v14m6-14v14M6 11h12" /></>,
    apps: <><rect x="4" y="3" width="11" height="16" rx="2" /><path d="M8 7h3m-3 4h3m7-3h2v13H9v-2" /></>,
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</svg>
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" data-hero-surface>
        <div className="hero-orbit orbit-a" aria-hidden="true" />
        <div className="hero-orbit orbit-b" aria-hidden="true" />

        <div className="hero-primary" data-hero-copy>
          <div className="hero-kicker"><span className="live-dot" /> Disponible pour un stage PFE · 2027</div>
          <p className="hero-role">Ingénieur logiciel</p>
          <h2 className="hero-specialty">Java · Développement<br /><span>complet · IA appliquée</span></h2>
          <p className="hero-description">Je transforme des problèmes métier en solutions fiables, de l’API à l’interface — avec l’IA quand elle donne plus d’impact aux produits que je construis.</p>
          <div className="hero-actions">
            <a className="button button-dark magnetic" href="#experience">Explorer mon parcours <ArrowDown size={17} /></a>
            <a className="button button-ghost magnetic" href="/CV_MANDOUR_Ilyass.pdf" download>Télécharger mon CV <Download size={17} /></a>
          </div>
          <div className="technology-block" aria-label="Technologies principales">
            <span className="technology-label">Technologies principales</span>
            <div className="technology-row">
              {technologies.map(([name, icon]) => (
                <div className="technology-card" key={name} tabIndex={0} aria-label={name} data-tooltip={name}>
                  <img src={icon} width="25" height="25" alt="" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" data-portrait>
          <div className="portrait-halo" aria-hidden="true" />
          <div className="technical-note note-engineer" aria-hidden="true">Ingénieur<br />logiciel <i /></div>
          <div className="technical-note note-impact" aria-hidden="true">Concevoir<br />pour le réel <i /></div>
          <h1 className="hero-name" id="hero-title" aria-label="Ilyass Mandour"><span>ILYASS</span><span>MANDOUR</span></h1>
          <div className="portrait-depth">
            <figure className="portrait-cutout">
              <img src="/images/profile-cutout.png" width="1086" height="1448" alt="Portrait professionnel détouré d’Ilyass Mandour" fetchPriority="high" />
            </figure>
          </div>
          <div className="portrait-badge" aria-hidden="true"><span className="live-dot" /> ROUEN · FR</div>

          <aside className="specialties-panel" aria-label="Spécialisations" data-specialties>
            <div className="specialties-title"><span className="live-dot" /> Spécialisations</div>
            <ul>
              <li><span><SpecialtyIcon kind="api" /></span>Backend et API</li>
              <li><span><SpecialtyIcon kind="network" /></span>Systèmes distribués</li>
              <li><span><SpecialtyIcon kind="ai" /></span>Intelligence artificielle</li>
              <li><span><SpecialtyIcon kind="apps" /></span>Applications web et mobile</li>
            </ul>
          </aside>
        </div>

        <aside className="hero-meta" aria-label="Informations professionnelles" data-hero-meta>
          <div className="meta-card">
            <div><span className="meta-icon">●</span><p><strong>Rouen, France</strong><small>Mobilité France entière</small></p></div>
            <div><span className="meta-icon">◇</span><p><strong>INSA Rouen Normandie</strong><small>Double diplôme</small></p></div>
            <div><span className="meta-icon">□</span><p><strong>Stage de fin d’études</strong><small>Janvier / Février 2027</small></p></div>
            <div><span className="meta-icon">↗</span><p><strong>Mobilité</strong><small>France entière</small></p></div>
          </div>
          <div className="meta-signal"><span>01</span><i /><p>Architecture<br />Données<br />Intelligence</p></div>
          <a className="scroll-cue" href="#about" aria-label="Faire défiler vers le profil">
            <span>Défiler pour découvrir</span><span className="scroll-circle"><ArrowDown /></span>
          </a>
        </aside>
      </div>
    </section>
  )
}
