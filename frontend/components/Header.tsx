"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState<string>("hero");

  // Met à jour l'onglet actif quand on clique
  const handleClick = (id: string) => {
    setActive(id);
  };

  // Scroll spy simple pour encadrer l'élément selon la section visible
  useEffect(() => {
    const sections = ["hero", "valeurs", "programmes", "temoignages", "contact"];
    const onScroll = () => {
      const y = window.scrollY + 120; // marge pour navbar fixe
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-white border-bottom shadow-sm fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="#hero" className="navbar-brand fw-bold text-primary fs-4">
            ISBHI
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href="#hero"
                  onClick={() => handleClick("hero")}
                  className={`nav-link px-3 ${active === "hero" ? "active border border-primary border-2 rounded" : ""}`}
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#valeurs"
                  onClick={() => handleClick("valeurs")}
                  className={`nav-link px-3 ${active === "valeurs" ? "active border border-primary border-2 rounded" : ""}`}
                >
                  Valeurs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#programmes"
                  onClick={() => handleClick("programmes")}
                  className={`nav-link px-3 ${active === "programmes" ? "active border border-primary border-2 rounded" : ""}`}
                >
                  Programmes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#temoignages"
                  onClick={() => handleClick("temoignages")}
                  className={`nav-link px-3 ${active === "temoignages" ? "active border border-primary border-2 rounded" : ""}`}
                >
                  Témoignages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#contact"
                  onClick={() => handleClick("contact")}
                  className={`nav-link px-3 ${active === "contact" ? "active border border-primary border-2 rounded" : ""}`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item ms-lg-3">
                <a
                  className="btn btn-secondary-premium rounded-pill px-4 fw-semibold"
                  href="https://wa.me/237691413728?text=Bonjour%2C%20je%20souhaite%20m'inscrire%20%C3%A0%20l'ISBHI."
                  target="_blank"
                  rel="noreferrer"
                >
                  S'inscrire
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
