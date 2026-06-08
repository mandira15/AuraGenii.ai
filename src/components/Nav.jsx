import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const navigate = useNavigate(); // ✅ add this

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShow(current < lastScroll || current < 80);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`navbar ${show ? "nav-show" : "nav-hide"}`}>
      <div className="nav-container">
        <div className="logo">AuraGenie.AI</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How it Works</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/tailors">Tailors</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="nav-buttons">
          <button className="login-btn" onClick={() => navigate("/auth/login")}>
            Login
          </button>

          <button className="start-btn" onClick={() => navigate("/auth")}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
