import { useState } from "react";
import "../styles/navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* logo might change later*/}
        <div className="logo"> Ole Kristian Berge</div>

         {/* Desk menu */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Mob Ham */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </nav>

      {/* mob slide meny */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
}
