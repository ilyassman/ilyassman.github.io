const metrics = [
  ['95,8', '%', 'Réponses correctes', 'Évaluation LangSmith sur 24 questions'],
  ['100', '%', 'Exécutions sans erreur', 'Assistant administratif RAG'],
  ['03', '', 'Certifications', 'Oracle Java · AWS Academy · SQL'],
  ['03', '', 'Langues', 'Arabe · Français · Anglais B2'],
]

export function Proof() {
  return (
    <section className="proof section-dark" aria-labelledby="proof-title">
      <div className="proof-kicker reveal">MESURER CE QUI COMPTE</div>
      <h2 id="proof-title" className="reveal">LA RIGUEUR<br /><span>EN CHIFFRES.</span></h2>
      <div className="metric-grid">
        {metrics.map(([value, suffix, title, description]) => <article className="metric reveal" key={title}><div><strong>{value}</strong><sup>{suffix}</sup></div><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </section>
  )
}
