export default function Header() {
  return (
    <header className="border-bottom bg-white shadow-sm"> 
    
      <nav className="navbar navbar-expand-lg container py-3">
        <span className="navbar-brand fw-bold text-primary">ISBHI</span>

        <div >
          <ul >
            <li href="#hero">Accueil</li>
            <li href="#values">Valeurs</li>
            <li href="#programs">Programmes</li>
            <li href="#testimonials">Témoignages</li>
            <li href="#contact">Contact</li>
          </ul>
        </div>

        <button  type="button" >
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </nav>
    </header>
  );
}
