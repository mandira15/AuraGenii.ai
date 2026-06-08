console.log("AuthPage loaded");
import { useState } from "react";
import { registerUser, loginUser } from "../api/auth";
import "./AuthPage.css";
import { useNavigate } from "react-router-dom";
export default function AuthPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signup = async () => {
    try {
      const res = await registerUser({
        name,
        email,
        password,
      });

      console.log(res.data);

      localStorage.setItem("token", res.data.token);

      navigate("/how-it-works");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const login = async () => {
    try {
      const res = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      console.log(res.data);

      alert("Login successful");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>AuraGenie AI</h1>
        <p>Create your account and start designing</p>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-btn" onClick={signup}>
          Create Account
        </button>

        <div className="divider"></div>

        {/* <button className="login-btn" onClick={login}>
          Login
        </button> */}
      </div>
    </div>
  );
}
