const pillars = [
  ['01', 'Construire des systèmes fiables', 'Architectures serveur, API sécurisées et flux distribués pensés pour durer.'],
  ['02', 'Relier données et intelligence', 'Des chaînes de traitement aux assistants RAG, la donnée devient une capacité produit.'],
  ['03', 'Livrer des produits utiles', 'Comprendre le besoin, collaborer, tester et livrer avec une attention constante à l’usage.'],
]

export function About() {
  return (
    <section className="about section-dark" id="about" aria-labelledby="about-title">
      <div className="section-label reveal"><span>01</span> PROFIL / MANIFESTE</div>
      <div className="about-grid">
        <h2 className="about-statement" id="about-title">
          <span className="reveal-line">INGÉNIEUR PAR</span>
          <span className="reveal-line outline">FORMATION.</span>
          <span className="reveal-line accent">BÂTISSEUR</span>
          <span className="reveal-line">PAR CONVICTION.</span>
        </h2>
        <div className="about-copy reveal">
          <span className="coordinate">49.4432° N / 1.0993° E</span>
          <p>Étudiant ingénieur en dernière année, en double diplôme entre l’INSA Rouen Normandie et l’ENSA d’El Jadida, je conçois des applications côté serveur et complètes où robustesse technique et utilité métier avancent ensemble.</p>
          <p>Mon terrain de jeu va de Java / Spring Boot aux systèmes distribués, jusqu’à l’intégration de l’intelligence artificielle dans des expériences concrètes.</p>
        </div>
      </div>
      <div className="pillars">
        {pillars.map(([index, title, text]) => (
          <article className="pillar reveal" key={index}>
            <span>{index}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i>
          </article>
        ))}
      </div>
    </section>
  )
}
