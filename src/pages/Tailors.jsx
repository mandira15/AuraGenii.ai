import "./Tailors.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/api";

export default function Tailors() {
  const navigate = useNavigate();

  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const res = await axios.get("/api/tailors");
        setTailors(res.data);
      } catch (error) {
        console.error("Error fetching tailors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTailors();
  }, []);

  if (loading) {
    return (
      <div className="tailors-page">
        <h2>Loading Tailors...</h2>
        <p>Please wait while we find the best tailors for you.</p>
      </div>
    );
  }

  return (
    <div className="tailors-page">
      <div className="tailors-header">
        <h1>Choose Your Tailor</h1>

        <p>
          Browse experienced tailors, compare their expertise, and send your
          customization request directly. AuraGenie helps you connect with the
          right tailor for your dream outfit.
        </p>
      </div>

      {tailors.length === 0 ? (
        <div className="no-tailors">
          <h2>No Tailors Available</h2>
          <p>
            There are currently no registered tailors. Please check back later.
          </p>
        </div>
      ) : (
        <div className="tailors-grid">
          {tailors.map((tailor) => (
            <div key={tailor._id} className="tailor-card">
              <img
                src={
                  tailor.profileImage ||
                  "https://via.placeholder.com/300x200?text=Tailor"
                }
                alt={tailor.user?.name || "Tailor"}
                className="tailor-image"
              />

              <div className="tailor-info">
                <h3>{tailor.user?.name || "Unknown Tailor"}</h3>

                <p>
                  📍 <strong>City:</strong> {tailor.city || "Not Provided"}
                </p>

                <p>
                  🏪 <strong>Studio:</strong>{" "}
                  {tailor.shopName || "Independent Tailor"}
                </p>

                <p>
                  ✂️ <strong>Specialization:</strong>{" "}
                  {tailor.specialization?.length
                    ? tailor.specialization.join(", ")
                    : "Custom Stitching"}
                </p>

                <p>
                  💼 <strong>Experience:</strong>{" "}
                  {tailor.experience || 0} Years
                </p>

                <p>
                  ⭐ <strong>Rating:</strong> {tailor.rating || "New"}
                </p>

                <button
                  className="book-btn"
                  onClick={() =>
                    navigate("/order", {
                      state: { tailor },
                    })
                  }
                >
                  Request Stitching
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}