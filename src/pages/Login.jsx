import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";


export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/how-it-works");

    } catch (err) {

      alert("Invalid email or password");

    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>
          Login to continue designing with AuraGenie
        </p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={login}
        >
          Login
        </button>

      </div>

    </div>

  );
}