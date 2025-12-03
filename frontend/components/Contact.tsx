'use client';

import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Merci ! Votre message a été enregistré (mock). Nous vous recontactons bientôt.");
    }, 800);
  };

  return (
    <section id="contact" className="py-5 section-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "var(--color-primary)" }}>Contact</h2>
          <p className="text-muted">Une question ? Écrivez-nous ou contactez-nous via WhatsApp.</p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <div className="p-4 bg-white rounded-xl shadow-soft">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nom complet</label>
                  <input type="text" className="form-control" placeholder="Ex: Jean Dupont" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="vous@mail.com" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={4} placeholder="Votre message…" required />
                </div>
                <button type="submit" className="btn btn-primary-premium rounded-pill px-4 fw-semibold" disabled={loading}>
                  {loading ? 'Envoi…' : 'Envoyer'}
                </button>
              </form>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="p-4 bg-white rounded-xl shadow-soft h-100 d-flex flex-column justify-content-between">
              <div>
                <h5 className="fw-semibold">Coordonnées</h5>
                <p className="text-muted mb-2">Adresse: Santchou, Cameroun</p>
                <p className="text-muted mb-2">Email: contact@isbhi.example</p>
                <p className="text-muted mb-2">Téléphone: +237 691 413 728</p>
              </div>
              <div>
                <a className="btn btn-success rounded-pill px-4 fw-semibold" href="https://wa.me/237691413728" target="_blank" rel="noreferrer">
                  <i className="bi bi-whatsapp me-2"></i>Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
