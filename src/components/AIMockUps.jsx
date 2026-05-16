import React, { useEffect, useState } from "react";
import "./AiMockupSlider.css";

const slides = [
  {
    image: "/images/red-lehenga.png",
    prompt: "Red bridal lehenga with gold zari work and heavy flare.",
  },
  {
    image: "/images/navy-blazer.png",
    prompt: "Modern slim-fit navy blazer with subtle geometric pattern.",
  },
  {
    image: "/images/kids-ethnic.png",
    prompt: "Cute festive outfit for a 5-year-old girl in pastel floral theme.",
  },
  {
    image: "/images/western-party.png",
    prompt: "Bodycon party dress with metallic sheen and balloon sleeves.",
  },
  {
    image: "/images/saree.png",
    prompt: "Elegant silk saree with embroidered border and royal drape.",
  },
];

export default function AiMockupSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500); // fade-out duration
    }, 4000); // 4-second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className={`slider-image-wrapper ${fade ? "fade-in" : "fade-out"}`}>
        <img
          src={slides[index].image}
          alt="AI Outfit"
          className="slider-image"
        />
      </div>

      <div className="prompt-box">
        <span className="prompt-icon">🪄</span>
        <span className="prompt-text">{slides[index].prompt}</span>
      </div>
    </div>
  );
}
