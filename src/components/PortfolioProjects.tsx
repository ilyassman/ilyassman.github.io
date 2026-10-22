import { portfolioProjects } from '../data'
import { ArrowUpRight } from './Icons'

function PublicationIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function PortfolioProjects() {
  return (
    <section className="work portfolio-projects" id="projects" aria-labelledby="projects-title">
      <div className="work-intro">
        <div className="section-label"><span>+</span> PROJETS ACADÉMIQUES ET PERSONNELS</div>
        <h2 id="projects-title"><span>SYSTÈMES</span><br /><span className="outline-dark">EN PRATIQUE.</span></h2>
        <p>Quatre réalisations où architecture logicielle, données et intelligence artificielle deviennent des produits concrets.</p>
      </div>

      <div className="project-list">
        {portfolioProjects.map((project) => (
          <article className="project-card portfolio-project-card" key={project.title} style={{ '--accent': project.accent } as React.CSSProperties}>
            <div className="project-topline"><span>{project.index} / 04</span><span>{project.subtitle}</span></div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <div className="project-details">
                <p>{project.description}</p>
                <ul className="project-feature-list" aria-label={`Fonctionnalités de ${project.title}`}>
                  {project.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>

                {project.publication && (
                  <div className="publication-block">
                    <span className="publication-badge"><PublicationIcon /> {project.publication.badge}</span>
                    <cite>{project.publication.title}</cite>
                    <p>{project.publication.journal} · {project.publication.publisher} · Volume {project.publication.volume} · Article {project.publication.article} · {project.publication.year}</p>
                    <p>DOI : {project.publication.doi}</p>
                    <a
                      className="publication-link magnetic"
                      href={project.publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Lire l’article scientifique EnviScan+ sur SoftwareX"
                    >
                      <PublicationIcon /> Lire l’article scientifique <ArrowUpRight size={17} />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="project-footer">
              <ul aria-label={`Technologies de ${project.title}`}>{project.stack.map(item => <li key={item}>{item}</li>)}</ul>
              <span className="project-mark" aria-hidden="true">{project.index}</span>
            </div>
            <div className="project-scan" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
