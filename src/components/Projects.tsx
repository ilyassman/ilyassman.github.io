import { experiences } from '../data'
import { ArrowUpRight } from './Icons'

export function Projects() {
  return (
    <section className="work" id="experience" aria-labelledby="work-title">
      <div className="work-intro">
        <div className="section-label"><span>02</span> PARCOURS PROFESSIONNEL</div>
        <h2 id="work-title"><span>EXPÉRIENCES</span><br /><span className="outline-dark">EN ACTION.</span></h2>
        <p>Cinq expériences distinctes, de la plus récente à la plus ancienne : contexte, rôle, réalisation et technologies.</p>
      </div>
      <div className="project-list">
        {experiences.map((project) => (
          <article className="project-card" key={project.index} style={{ '--accent': project.accent } as React.CSSProperties}>
            <div className="project-topline"><span>{project.index} / 05</span><span>{project.eyebrow}</span></div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <div className="project-details">
                <p>{project.description}</p>
                <strong>{project.impact}</strong>
              </div>
            </div>
            <div className="project-footer">
              <ul aria-label={`Technologies de ${project.title}`}>{project.stack.map(item => <li key={item}>{item}</li>)}</ul>
              {project.href ? <a className="project-link magnetic" href={project.href} target="_blank" rel="noreferrer" aria-label={`Voir ${project.title} sur GitHub`}><ArrowUpRight size={30} /></a> : <span className="project-mark" aria-hidden="true">{project.index}</span>}
            </div>
            <div className="project-scan" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
