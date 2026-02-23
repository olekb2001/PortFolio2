import { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Close mob menu when going to desk
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* logo might change later*/}
        <Link to="/" className="logo">
          Ole Kristian Berge
        </Link>
        {/* Desk menu */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        {/* Mob Ham */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>
      </nav>

      {/* mob slide meny */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
      </div>
    </>
  );
}
