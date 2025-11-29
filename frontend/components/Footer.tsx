export default function Footer() {
  return (
    <footer className="py-4 bg-white border-top mt-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="text-muted">© {new Date().getFullYear()} ISBHI. Tous droits réservés.</div>
        <div className="d-flex align-items-center gap-3">
          <a className="text-decoration-none" href="#"><i className="bi bi-facebook"></i></a>
          <a className="text-decoration-none" href="#"><i className="bi bi-instagram"></i></a>
          <a className="text-decoration-none" href="#"><i className="bi bi-linkedin"></i></a>
          <a className="text-decoration-none" href="#"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}
