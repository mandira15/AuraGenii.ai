console.log("AuthPage loaded");
import { useState } from "react";
import { registerUser, loginUser } from "../api/auth";

export default function AuthPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const res = await registerUser({
        name,
        email,
        password,
      });

      console.log(res.data);

      alert("Signup successful");
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
    <div>
      <h2>Signup</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => signup()}>Signup</button>

      <hr />

      <h2>Login</h2>

      <button onClick={login}>Login</button>
    </div>
  );
}
