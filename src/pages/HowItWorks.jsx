import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <div className="how-page">

      {/* HEADER */}
      <div className="how-header">
        <h1>How AuraGenie.AI Works</h1>
        <p>From imagination to a fully stitched outfit — powered by AI.</p>
      </div>

      {/* 3 STEP SECTION */}
      <div className="steps-section">

        <div className="step-card">
          <h2>1. Describe Your Outfit</h2>
          <p>Write your idea, record your voice, or upload a sketch. Our AI understands your style, color, event and fabric preference.</p>
        </div>

        <div className="step-card">
          <h2>2. AI Generates Designs</h2>
          <p>AuraGenie creates multiple outfit variations instantly. Customize neckline, sleeves, patterns, embroidery and colors.</p>
        </div>

        <div className="step-card">
          <h2>3. Choose Tailor & Get It Stitched</h2>
          <p>Select from expert tailors, place a stitching order, track progress and get doorstep delivery.</p>
        </div>

      </div>

      {/* AI GENERATOR SECTION */}
      <div className="ai-section">
        <h2>Try It Yourself</h2>

        <div className="ai-box">
          <textarea placeholder="Describe your outfit idea..."></textarea>

          <div className="button-row">
            <button className="ai-btn">Upload Sketch</button>
            <button className="ai-btn">Record Voice</button>
            <button className="gen-btn">Generate Outfit</button>
          </div>

          <div className="output-area">
            <p>Your AI-generated designs will appear here...</p>
          </div>
        </div>
      </div>

    </div>
  );
}
