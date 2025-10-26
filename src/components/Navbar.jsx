import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ปิดเมนูเมื่อเปลี่ยนขนาดจอเกิน breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // เงาเพิ่มเมื่อเลื่อนลง
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo" aria-label="Home">
            {/* ใส่โลโก้ถ้าต้องการ */}
            {/* <img className="logo-img" src="/logo.png" alt="Logo" /> */}
            <span className="logo-text">Shuttle</span>
          </Link>

          {/* Desktop menu */}
          <div className="nav-links-desktop">
            <NavLink to="map" className={linkClass}>
              แผนที่
            </NavLink>
            <NavLink to="buses" className={linkClass}>
              รวมสถานะรถ
            </NavLink>
          </div>
        </div>

        {/* Right (desktop) */}
        <div className="navbar-right">
          <NavLink to="login" className="login-button">
            Login
          </NavLink>

          {/* Hamburger (mobile) */}
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`nav-links-mobile ${open ? "open" : ""}`}
      >
        <NavLink to="map" className={linkClass} onClick={() => setOpen(false)}>
          แผนที่
        </NavLink>
        <NavLink
          to="buses"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          รวมสถานะรถ
        </NavLink>
        <NavLink
          to="login"
          className="login-button mobile"
          onClick={() => setOpen(false)}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
