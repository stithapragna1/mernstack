import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function RegisterStudent() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/register/student", form);
    alert("Student Registered!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Student</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}
