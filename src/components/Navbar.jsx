import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#" className="logo">
          KES <span>EDUTECH</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#enroll">Enroll</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <a
          href="#enroll"
          className="btn btn-primary"
        >
          Enroll Now
        </a>

      </div>
    </header>
  );
}

export default Navbar;