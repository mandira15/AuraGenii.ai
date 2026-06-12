import "./HowItWorks.css";
import { useState } from "react";
import axios from "axios";

export default function HowItWorks() {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGenerate = async () => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/api/designs/generate",
      {
        prompt,
        category: "Custom",
        style: "AI Generated",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setGeneratedImage(res.data.generatedImage);

  } catch (error) {

    console.log(error.response?.data || error.message);

  } finally {

    setLoading(false);

  }
};

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
          <p>
            Write your idea, record your voice, or upload a sketch. Our AI
            understands your style, color, event and fabric preference.
          </p>
        </div>

        <div className="step-card">
          <h2>2. AI Generates Designs</h2>
          <p>
            AuraGenie creates multiple outfit variations instantly. Customize
            neckline, sleeves, patterns, embroidery and colors.
          </p>
        </div>

        <div className="step-card">
          <h2>3. Choose Tailor & Get It Stitched</h2>
          <p>
            Select from expert tailors, place a stitching order, track progress
            and get doorstep delivery.
          </p>
        </div>
      </div>

      {/* AI GENERATOR SECTION */}
      <div className="ai-section">
        <h2>Try It Yourself</h2>

        <div className="ai-box">
          <textarea
            placeholder="Describe your outfit idea..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>

          <div className="button-row">
            <button className="ai-btn">Upload Sketch</button>
            <button className="ai-btn">Record Voice</button>
            <button className="gen-btn" onClick={handleGenerate}>
              Generate Outfit
            </button>
          </div>

          <div className="output-area">
            {loading && <p>Generating design...</p>}

            {!loading && generatedImage && (
              <img src={generatedImage} alt="Generated Design" width="350" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
