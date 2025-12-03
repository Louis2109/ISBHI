import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="section-light py-5">
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 animate-fadeInUp">
            <span className="badge-premium shadow-soft"> Institut supérieur bilingue </span>
            <h1 className="display-5 fw-bold mt-3" style={{ color: "var(--color-primary)" }}> Institut Supérieur Bilingue des Hautes Innovations (ISBHI) </h1>
            <p className="lead text-muted mt-3">
              Formations de qualité en BTS, HND, Licence et Master. Un environnement d&apos;excellence pour développer vos compétences et devenir acteur de l&apos;innovation.
            </p>
            <div className="d-flex gap-3 mt-4">
              <div className="badge-premium">+300 étudiants</div>
              <div className="badge-premium">Depuis 2023</div>
            </div>
            <div className="mt-4 d-flex gap-3">
              <a className="btn btn-primary-premium rounded-pill px-4 fw-semibold" href="#programmes">
                Découvrir nos programmes
              </a>
              <a className="btn btn-outline-primary rounded-pill px-4 fw-semibold" href="#contact">
                Contacter nous
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center animate-fadeInUp">
            <div className="position-relative rounded-xl overflow-hidden shadow-soft bg-white p-2">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
                alt="Campus et étudiants"
                width={1200}
                height={800}
                className="img-fluid rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
