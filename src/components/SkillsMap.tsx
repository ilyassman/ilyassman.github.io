import { useState } from 'react'
import { skillGroups } from '../data'

export function SkillsMap() {
  const [active, setActive] = useState(0)
  return (
    <section className="skills section-dark" id="skills" aria-labelledby="skills-title">
      <div className="section-label reveal"><span>03</span> CARTE DES COMPÉTENCES</div>
      <div className="skills-heading">
        <h2 id="skills-title" className="reveal">DE <span className="lime">L’IDÉE</span><br />AU <span className="outline">SYSTÈME.</span></h2>
        <p className="reveal">Une chaîne de compétences qui relie l’expérience utilisateur, les services, la donnée et l’intelligence appliquée.</p>
      </div>
      <div className="skills-console reveal">
        <div className="console-visual" aria-hidden="true">
          <svg viewBox="0 0 720 500" role="img" aria-label="Carte abstraite des compétences techniques">
            <defs><linearGradient id="signal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c7ff45"/><stop offset="1" stopColor="#92a7ff"/></linearGradient></defs>
            <path className="signal-path" d="M65 92 C175 92 155 240 274 240 S387 86 498 106 S569 305 658 404" />
            <path className="signal-path ghost" d="M42 408 C174 370 210 429 315 352 S442 200 680 200" />
            {[[65,92],[274,240],[498,106],[658,404],[42,408],[315,352],[680,200]].map(([x,y], i) => <g key={i} className={`map-node n-${i}`}><circle cx={x} cy={y} r="8"/><circle cx={x} cy={y} r="20" className="pulse"/></g>)}
          </svg>
          <div className="console-readout"><span>ÉTAT DU SYSTÈME</span><strong>PRÊT</strong><i /></div>
          <div className="code-fragment"><span>01</span> architecture_fiable<br/><span>02</span> intelligence_utile<br/><span>03</span> livraison_continue</div>
        </div>
        <div className="skill-accordion">
          {skillGroups.map((group, i) => (
            <button key={group.id} className={i === active ? 'skill-row active' : 'skill-row'} onClick={() => setActive(i)} aria-expanded={i === active}>
              <span>{group.id}</span><strong>{group.label}</strong><i>{i === active ? '−' : '+'}</i>
              <span className="skill-items">{group.items.join(' · ')}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="cert-strip reveal" aria-label="Certifications">
        <span>CERTIFICATIONS /</span><b>Oracle Java SE 17</b><b>AWS Academy Graduate</b><b>SQL — HackerRank</b>
      </div>
    </section>
  )
}
