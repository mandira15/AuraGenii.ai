import api from "./api";

// REGISTER
export const registerUser = (data) =>
  api.post("/api/auth/register", data);

// LOGIN
export const loginUser = (data) =>
  api.post("/api/auth/login", data);