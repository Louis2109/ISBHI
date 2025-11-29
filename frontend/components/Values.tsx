export default function Values() {
  return (
    <section id="valeurs" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "var(--color-primary)" }}>Nos valeurs</h2>
          <p className="text-muted">Un cadre d'excellence guidé par l'éthique et l'esprit entrepreneurial.</p>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="p-4 bg-white rounded-xl shadow-soft card-hover h-100">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 64, height: 64, background: "var(--color-neutral)" }}>
                <i className="bi bi-shield-check fs-4" style={{ color: "var(--color-primary)" }}></i>
              </div>
              <h5 className="mt-3 fw-semibold">Éthique</h5>
              <p className="text-muted mb-0">Intégrité et responsabilité au cœur de la formation.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 bg-white rounded-xl shadow-soft card-hover h-100">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 64, height: 64, background: "var(--color-neutral)" }}>
                <i className="bi bi-stars fs-4" style={{ color: "var(--color-primary)" }}></i>
              </div>
              <h5 className="mt-3 fw-semibold">Excellence</h5>
              <p className="text-muted mb-0">Exigence académique et accompagnement personnalisé.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-4 bg-white rounded-xl shadow-soft card-hover h-100">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 64, height: 64, background: "var(--color-neutral)" }}>
                <i className="bi bi-rocket-takeoff fs-4" style={{ color: "var(--color-primary)" }}></i>
              </div>
              <h5 className="mt-3 fw-semibold">Entrepreneuriat</h5>
              <p className="text-muted mb-0">Esprit d'initiative et projets concrets pour apprendre en faisant.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
