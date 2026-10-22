import { education } from '../data'

export function Journey() {
  return (
    <section className="journey" id="education" aria-labelledby="journey-title">
      <div className="journey-head">
        <div className="section-label"><span>04</span> FORMATION / 2022—2027</div>
        <h2 id="journey-title">UN DOUBLE DIPLÔME.<br /><span>UNE TRAJECTOIRE.</span></h2>
      </div>
      <div className="education-note reveal">
        <span>PARCOURS EN COURS</span>
        <p>Les cycles INSA et ENSA se chevauchent dans le cadre d’un même parcours de double diplôme.</p>
      </div>
      <div className="timeline education-timeline">
        <svg className="timeline-line" preserveAspectRatio="none" viewBox="0 0 100 1000" aria-hidden="true"><path d="M50 0V1000" pathLength="1" /></svg>
        {education.map((item, i) => (
          <article className="timeline-item education-item" key={item.school}>
            <span className="timeline-year">{item.period}</span>
            <span className="timeline-dot" aria-hidden="true"><i /></span>
            <div className="education-card">
              <div className="education-meta"><span>0{i + 1}</span><span>{item.country}</span><span>{item.status}</span></div>
              <h3>{item.school}</h3>
              <h4>{item.degree}</h4>
              <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
