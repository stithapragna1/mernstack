import { useState, useEffect } from "react";
import api from "../api/axios";

export default function StudentDashboard() {
  const [sessions, setSessions] = useState([]);
  const [form, setForm] = useState({ mentor: "", topic: "", date: "" });

  useEffect(() => {
    api.get("/sessions").then(res => setSessions(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/sessions", form);
    alert("Session requested!");
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input name="mentor" placeholder="Mentor ID" onChange={handleChange} />
        <input name="topic" placeholder="Topic" onChange={handleChange} />
        <input type="datetime-local" name="date" onChange={handleChange} />
        <button type="submit">Request Session</button>
      </form>

      <h3>Sessions</h3>
      <ul>
        {sessions.map(s => (
          <li key={s._id}>{s.topic} – {s.status}</li>
        ))}
      </ul>
    </div>
  );
}
