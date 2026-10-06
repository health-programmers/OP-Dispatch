const features = [
  {
    title: 'Comptes',
    description: 'Gestion des comptes et des accès.',
  },
  {
    title: 'Gestion et planification',
    description: 'Organisation des activités et des plannings.',
  },
  {
    title: 'Communication mains-libres',
    description: 'Communication temps réel entre les utilisateurs.',
  },
];

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <p className="eyebrow">Architecture de l’application</p>
        <h1>OP-Dispatch</h1>
        <p className="intro">
          Base de travail : interface web, API et service temps réel séparés.
        </p>
      </header>
      <section className="features" aria-label="Fonctionnalités prévues">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
