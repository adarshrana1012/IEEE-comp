import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navBar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6a/AIT_Pune_logo.gif"
            alt="AIT Pune Logo"
          />
        </div>

        {/* Desktop Links */}
        <ul className="nav-link">
          {[
            ["/",               "Home"],
            ["/brochure",       "Brochure"],
            ["/about",          "About"],
            ["/Highlights",     "Highlights"],
            ["/callForPapers",  "Papers"],
            ["/committee",      "Committee"],
            ["/registration",   "Registration"],
            ["/contactUs",      "Contact Us"],
          ].map(([path, label]) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-link">
          {[
            ["/",               "Home"],
            ["/brochure",       "Brochure"],
            ["/about",          "About"],
            ["/Highlights",     "Highlights"],
            ["/callForPapers",  "Papers"],
            ["/committee",      "Committee"],
            ["/registration",   "Registration"],
            ["/contactUs",      "Contact Us"],
          ].map(([path, label]) => (
            <li key={path}>
              <Link to={path} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;