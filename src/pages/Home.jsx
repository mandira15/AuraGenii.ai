import AIMockUps from "../components/AIMockUps.jsx";
import Navbar from "../components/Nav.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <div className="main-content">

        <h1>
          Welcome to <br />
          <span>AuraGenie.AI</span>
        </h1>

        <p>
          Design stunning AI-powered fashion with elegance,
          creativity, and futuristic style.
        </p>

        <button className="hero-btn">
          Get Started
        </button>

      </div>

      {/* MOCKUPS */}
      <div className="mock-ups">

        <div className="mock-up-card glass-card">
          <AIMockUps />
        </div>

        <div className="mock-up-card glass-card">
          <AIMockUps />
        </div>

        <div className="mock-up-card glass-card">
          <AIMockUps />
        </div>

      </div>

      {/* FOOTER */}
      <div className="footer">
        <p>&copy; 2026 AuraGenie.AI. All rights reserved.</p>
      </div>

    </div>
  );
}