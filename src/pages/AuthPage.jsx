import { useState } from "react";
import { registerUser } from "../api/auth";
import "./AuthPage.css";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();

  const [role, setRole] = useState("customer");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Tailor Fields
  const [shopName, setShopName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [specialization, setSpecialization] = useState("");

  const signup = async () => {
    try {
      if (!name || !email || !password) {
        alert("Please fill all required fields.");
        return;
      }

      const data = {
        name,
        email,
        password,
        role,
      };

      if (role === "tailor") {
        data.shopName = shopName;
        data.phone = phone;
        data.city = city;
        data.address = address;
        data.experience = experience;
        data.specialization = specialization;
      }

      const res = await registerUser(data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      alert("Account Created Successfully!");

      if (role === "tailor") {
        navigate("/tailors");
      } else {
        navigate("/how-it-works");
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>AuraGenie AI</h1>
        <p>Create your account and start designing</p>

        {/* Role Selection */}

        <div className="role-selection">
          <label>
            <input
              type="radio"
              value="customer"
              checked={role === "customer"}
              onChange={(e) => setRole(e.target.value)}
            />
            Customer
          </label>

          <label>
            <input
              type="radio"
              value="tailor"
              checked={role === "tailor"}
              onChange={(e) => setRole(e.target.value)}
            />
            Designer / Tailor
          </label>
        </div>

        {/* Common Fields */}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Tailor Fields */}

        {role === "tailor" && (
          <>
            <input
              type="text"
              placeholder="Shop / Brand Name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              type="number"
              placeholder="Experience (Years)"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <input
              type="text"
              placeholder="Specialization (e.g. Bridal, Men's Wear)"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />

            <small style={{ color: "#777" }}>
              A professional profile avatar will be assigned automatically.
            </small>
          </>
        )}

        <button className="signup-btn" onClick={signup}>
          Create Account
        </button>
      </div>
    </div>
  );
}
