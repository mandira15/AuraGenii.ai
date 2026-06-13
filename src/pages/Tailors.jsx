import "./Tailors.css";

const tailors = [
  {
    id: 1,
    name: "Royal Stitch",
    city: "Bhopal",
    speciality: "Sherwani & Suits",
    rating: 4.8,
    image: "/tailors/tailor1.jpg",
  },
  {
    id: 2,
    name: "Elegant Threads",
    city: "Indore",
    speciality: "Lehenga & Bridal Wear",
    rating: 4.7,
    image: "/tailors/tailor2.jpg",
  },
  {
    id: 3,
    name: "Fashion Hub",
    city: "Delhi",
    speciality: "Designer Gowns",
    rating: 4.9,
    image: "/tailors/tailor3.jpg",
  },
  {
    id: 4,
    name: "Modern Fit",
    city: "Mumbai",
    speciality: "Western Wear",
    rating: 4.6,
    image: "/tailors/tailor4.jpg",
  },
  {
    id: 5,
    name: "Classic Creations",
    city: "Jaipur",
    speciality: "Traditional Outfits",
    rating: 4.8,
    image: "/tailors/tailor5.jpg",
  },
  {
    id: 6,
    name: "Aura Tailoring Studio",
    city: "Bhopal",
    speciality: "Custom AI Designs",
    rating: 5.0,
    image: "/tailors/tailor6.jpg",
  },
];

export default function Tailors() {
  return (
    <div className="tailors-page">

      <div className="tailors-header">
        <h1>Choose Your Tailor</h1>
        <p>
          Connect with skilled tailors and bring your AI-generated
          fashion designs to life.
        </p>
      </div>

      <div className="tailors-grid">

        {tailors.map((tailor) => (
          <div key={tailor.id} className="tailor-card">

            <img
              src={tailor.image}
              alt={tailor.name}
              className="tailor-image"
            />

            <div className="tailor-info">

              <h3>{tailor.name}</h3>

              <p>
                📍 <strong>City:</strong> {tailor.city}
              </p>

              <p>
                ✂️ <strong>Speciality:</strong>{" "}
                {tailor.speciality}
              </p>

              <p>
                ⭐ <strong>Rating:</strong>{" "}
                {tailor.rating}
              </p>

              <button className="book-btn">
                Book Tailor
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}