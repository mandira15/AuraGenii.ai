import "./Order.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Order() {
  const location = useLocation();
  const tailor = location.state?.tailor;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
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

    try {
      await axios.post("http://localhost:5000/api/orders", {
        customerName: formData.name,
        phone: formData.phone,
        address: formData.address,
        measurements: formData.measurements,
        deliveryDate: formData.deliveryDate,
        instructions: formData.instructions,
        tailorName: tailor?.name,
      });

      alert("Order Placed Successfully!");
    } catch (error) {
      console.log(error);

      alert("Failed to place order");
    }
  };

  return (
    <div className="order-page">
      <div className="order-card">
        <h1>Place Your Order</h1>

        <p>Fill in your details and connect with your selected tailor.</p>

        {tailor && (
          <div className="selected-tailor">
            <h2>Selected Tailor</h2>

            <p>
              <strong>Name:</strong> {tailor.name}
            </p>

            <p>
              <strong>City:</strong> {tailor.city}
            </p>

            <p>
              <strong>Speciality:</strong> {tailor.speciality}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {tailor.rating}
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
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
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
            placeholder="Special Instructions"
            value={formData.instructions}
            onChange={handleChange}
          />

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}
