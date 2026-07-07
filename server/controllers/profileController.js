import User from "../models/user.js";
import StudySession from "../models/StudySession.js";

export const getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id).select("-password");

    const sessions = await StudySession.find({
      user: req.user._id,
    });

    const stats = {
      totalPDFs: sessions.length,

      totalNotes: sessions.filter(
        (s) => s.notes?.trim()
      ).length,

      totalQuizzes: sessions.filter(
        (s) => s.quiz?.trim()
      ).length,

      totalFlashcards: sessions.filter(
        (s) => s.flashcards?.trim()
      ).length,

      totalSessions: sessions.length,
    };

    res.status(200).json({
      success: true,
      user,
      stats,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};