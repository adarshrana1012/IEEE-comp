import { useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
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
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link aria-current="page" to={"/"}>
                  Home
            </Link>
          </li>
          <li>
            <Link aria-current="page" to={"/brochure"}>
                  Brochure
            </Link>
          </li>
          <li>
            <Link aria-current="page" to={"/about"}>
                  About
            </Link>
          </li>
          <li>
            <Link aria-current="page" to={"/Highlights"}>
                  HighLights
            </Link>
          </li>
          <li>
            <Link aria-current="page" to={"/callForPapers"}>
                  Call For Papers
            </Link>
          </li>
          <li>
            <Link aria-current="page" to={"/committee"}>
                  committee
            </Link>
          </li>
          <li>
            <Link aria-current="page" to={"/registration"}>
                  Registration
            </Link>
          </li>
          <li>
            <Link aria-current="page" to={"/contactUs"}>
                  Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;