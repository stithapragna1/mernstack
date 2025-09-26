const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const Mentor = require("../models/Mentor");

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Student Register
exports.registerStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({ token: generateToken(student._id, "student"), student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Mentor Register
exports.registerMentor = async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.json({ token: generateToken(mentor._id, "mentor"), mentor });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login for both roles
exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = role === "student"
      ? await Student.findOne({ email })
      : await Mentor.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({ token: generateToken(user._id, role), user });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
