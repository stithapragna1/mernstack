const Session = require("../models/Session");

exports.createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate("student mentor", "name email");
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSessionStatus = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
