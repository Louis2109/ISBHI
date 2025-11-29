import Image from "next/image";

export default function Testimonials() {
  const items = [
    {
      name: "Mireille T.",
      role: "Licence Informatique",
      quote: "Des enseignants attentifs et un cadre moderne. J'ai trouvé un vrai accompagnement.",
      avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Daniel K.",
      role: "BTS Gestion",
      quote: "Les stages m'ont permis d'entrer rapidement sur le marché local.",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Aïcha N.",
      role: "Master Data Science",
      quote: "Excellent niveau et projets concrets. Très fière du parcours!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section id="temoignages" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "var(--color-primary)" }}>Témoignages</h2>
          <p className="text-muted">Ce que disent nos étudiants.</p>
        </div>
        <div className="row g-4">
          {items.map((t) => (
            <div className="col-12 col-md-4" key={t.name}>
              <div className="p-4 bg-white rounded-xl shadow-soft card-hover h-100">
                <div className="d-flex align-items-center gap-3">
                  <Image src={t.avatar} alt={t.name} width={56} height={56} className="rounded-circle" />
                  <div>
                    <div className="fw-semibold">{t.name}</div>
                    <div className="text-muted small">{t.role}</div>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-muted">“{t.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
