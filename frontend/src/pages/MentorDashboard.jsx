import { useState, useEffect } from "react";
import api from "../api/axios";

export default function MentorDashboard() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    api.get("/sessions").then(res => setSessions(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await api.put(`/sessions/${id}`, { status });
    setSessions(sessions.map(s => s._id === id ? { ...s, status } : s));
  };

  return (
    <div>
      <h2>Mentor Dashboard</h2>
      <ul>
        {sessions.map(s => (
          <li key={s._id}>
            {s.topic} – {s.status}
            <button onClick={() => updateStatus(s._id, "accepted")}>Accept</button>
            <button onClick={() => updateStatus(s._id, "declined")}>Decline</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
