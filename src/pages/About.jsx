import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About AuraGenie.AI</h1>

        <p>
          AuraGenie.AI is an AI-powered fashion platform that transforms ideas
          into personalized clothing designs and connects users with skilled
          tailors to bring those designs to life.
        </p>
      </div>

      <div className="about-section">
        <div className="about-card">
          <h2>Our Vision</h2>

          <p>
            We aim to make fashion design accessible to everyone. Whether you
            can sketch or simply describe your idea, AuraGenie helps turn your
            imagination into wearable fashion.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Do</h2>

          <p>
            AuraGenie combines Artificial Intelligence, fashion creativity, and
            tailoring services into a single platform. Users can explore
            designs, discover styles, and connect with nearby tailors for custom
            stitching.
          </p>
        </div>

        <div className="about-card">
          <h2>Why AuraGenie?</h2>

          <p>
            Traditional tailoring often lacks digital accessibility and
            personalization. AuraGenie bridges this gap by creating a seamless
            journey from inspiration to a finished outfit.
          </p>
        </div>
      </div>
      <div className="contact-section">
        <h2>Get In Touch</h2>

        <p>
          Have questions, suggestions, or partnership inquiries? We'd love to
          hear from you.
        </p>

        <div className="contact-card">
          <p>
            📧 <strong>Email: </strong>
            auragenie.ai@gmail.com , mandirasingh15@outlook.com
          </p>

          <p>
            🌐 <strong>Platform: </strong>
            AuraGenie.AI
          </p>

          <p>
            📍 <strong>Location: </strong>
            Bhopal, India
          </p>
        </div>
        <div className="social-section">
          <h3>Follow AuraGenie</h3>

          <div className="social-links">
            <a
              href="https://x.com/auragenie_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              𝕏 @auragenie_ai
            </a>

            <a
              href="https://instagram.com/auragenie.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              📷 auragenie.ai
            </a>
          </div>
          <p className="social-note">
            Follow our journey as we build AuraGenie.AI.
          </p>
        </div>
      </div>
    </div>
  );
}
