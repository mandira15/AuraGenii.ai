import "./Order.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();

  const tailor = location.state?.tailor;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    outfitType: "",
    occasion: "",
    budget: "",
    fabric: "",
    measurements: "",
    deliveryDate: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tailor) {
      alert("Please select a tailor first.");
      navigate("/tailors");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/orders", {
        tailorId: tailor._id,
        tailorName: tailor.user?.name,
        tailorEmail: tailor.user?.email,

        customerName: formData.name,
        phone: formData.phone,
        address: formData.address,

        outfitType: formData.outfitType,
        occasion: formData.occasion,
        budget: formData.budget,
        fabric: formData.fabric,

        measurements: formData.measurements,
        deliveryDate: formData.deliveryDate,
        instructions: formData.instructions,
      });

      alert(
        "🎉 Your stitching request has been sent successfully! The tailor will contact you soon."
      );

      navigate("/tailors");
    } catch (error) {
      console.error(error);

      alert("Failed to send your request. Please try again.");
    }
  };

  return (
    <div className="order-page">
      <div className="order-card">
        <h1>Request Custom Stitching</h1>

        <p>
          Share your requirements with your selected tailor and begin your
          customization journey.
        </p>

        {tailor && (
          <div className="selected-tailor">
            <h2>Selected Tailor</h2>

            <p>
              <strong>Name:</strong>{" "}
              {tailor.user?.name || "Unknown Tailor"}
            </p>

            <p>
              <strong>Studio:</strong>{" "}
              {tailor.shopName || "Independent Tailor"}
            </p>

            <p>
              <strong>City:</strong> {tailor.city}
            </p>

            <p>
              <strong>Specialization:</strong>{" "}
              {tailor.specialization?.length
                ? tailor.specialization.join(", ")
                : "Custom Stitching"}
            </p>

            <p>
              <strong>Experience:</strong>{" "}
              {tailor.experience || 0} Years
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {tailor.rating || "New"}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="outfitType"
            placeholder="Outfit Type (Lehenga, Suit, Kurta, Sherwani...)"
            value={formData.outfitType}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="occasion"
            placeholder="Occasion (Wedding, Office, Party...)"
            value={formData.occasion}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="budget"
            placeholder="Estimated Budget"
            value={formData.budget}
            onChange={handleChange}
          />

          <input
            type="text"
            name="fabric"
            placeholder="Preferred Fabric (Cotton, Silk, Linen...)"
            value={formData.fabric}
            onChange={handleChange}
          />

          <textarea
            name="measurements"
            placeholder="Measurements (Chest, Waist, Length, Shoulder, etc.)"
            value={formData.measurements}
            onChange={handleChange}
          />

          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
          />

          <textarea
            name="instructions"
            placeholder="Describe your design requirements, embroidery, color preferences, reference ideas, etc."
            value={formData.instructions}
            onChange={handleChange}
            rows="5"
          />

          <button type="submit">
            Send Stitching Request
          </button>
        </form>
      </div>
    </div>
  );
}