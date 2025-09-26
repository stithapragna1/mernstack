import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterStudent from "./pages/RegisterStudent";
import RegisterMentor from "./pages/RegisterMentor";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register/student" element={<RegisterStudent />} />
          <Route path="/register/mentor" element={<RegisterMentor />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
