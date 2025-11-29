export default function Programs() {
  const programs = [
    { title: "BTS Informatique", duration: "2 ans", desc: "Développement web, bases de données, réseaux.", color: "#E8F0FE" },
    { title: "HND Business Management", duration: "2 ans", desc: "Gestion, marketing, finance de base.", color: "#FFF7E6" },
    { title: "Licence Génie Civil", duration: "3 ans", desc: "Structures, matériaux, chantier.", color: "#F0FFF8" },
    { title: "Master Data Science", duration: "2 ans", desc: "Machine learning, BI, cloud.", color: "#F7F7F7" },
  ];

  return (
    <section id="programmes" className="py-5 section-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "var(--color-primary)" }}>Nos Programmes</h2>
          <p className="text-muted">Des formations professionnalisantes pour accéder rapidement au marché.</p>
        </div>
        <div className="row g-4">
          {programs.map((p) => (
            <div className="col-12 col-md-6 col-lg-3" key={p.title}>
              <div className="p-4 bg-white rounded-xl shadow-soft card-hover h-100" style={{ background: p.color }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-semibold mb-0">{p.title}</h5>
                  <span className="badge bg-light text-dark border">{p.duration}</span>
                </div>
                <p className="text-muted mt-2">{p.desc}</p>
                <a className="btn btn-outline-primary rounded-pill px-3 fw-semibold" href="#contact">En savoir plus</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
