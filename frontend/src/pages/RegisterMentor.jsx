import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function RegisterMentor() {
  const [form, setForm] = useState({ name: "", email: "", password: "", expertise: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register/mentor", form);
    alert("Mentor Registered!");
    navigate("/");
  };/auth/register/mentor

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Mentor</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input name="expertise" placeholder="Expertise" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}
