import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navBar">
      <div className="navbar-container">
        <div className="logo">AIT</div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Links */}
        <div  className="link ">
        <ul className={`nav-link ${menuOpen ? "active" : ""}`}>
          {[
            ["/",   "Home"],
            ["/brochure", "Brochure"],
            ["/about", "About"],
            ["/Highlights", "HighLights"],
            ["/callForPapers", "Papers"],
            ["/committee", "Committee"],
            ["/registration", "Registration"],
            ["/contactUs", "Contact Us"],
          ].map(([path, label]) => (
            <li key={path}>
              <Link to={path} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;