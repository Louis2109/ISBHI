import Link from "next/link";

export default function Header() {
  return (
    <header className="border-bottom bg-white">
      <nav className="navbar navbar-expand-lg container py-3">
        <Link className="navbar-brand fw-bold" href="#">
          <span className="text-primary">ISBHI</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" href="#hero">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#valeurs">Valeurs</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#programmes">Programmes</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#temoignages">Témoignages</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#contact">Contact</Link></li>
          </ul>
          <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <a
              className="btn btn-secondary-premium rounded-pill px-4 fw-semibold"
              href="https://wa.me/237691413728"
              target="_blank"
              rel="noreferrer"
            >
              Postulez maintenant
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
