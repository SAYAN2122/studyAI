import StudySession from "../models/StudySession.js";

// ==========================================
// Dashboard Analytics
// ==========================================
export const getDashboardStats = async (req, res) => {
  try {

    const sessions = await StudySession.find({
      user: req.user._id,
    }).sort({
      updatedAt: -1,
    });

    const totalPDFs = sessions.length;

    const totalNotes = sessions.filter(
      (session) => session.notes
    ).length;

    const totalQuiz = sessions.filter(
      (session) =>
        session.quiz &&
        session.quiz.length > 0
    ).length;

    const totalFlashcards = sessions.filter(
      (session) =>
        session.flashcards &&
        session.flashcards.length > 0
    ).length;

    const recentSessions = sessions.slice(0, 5);

    return res.status(200).json({
      success: true,

      stats: {
        totalPDFs,
        totalNotes,
        totalQuiz,
        totalFlashcards,
      },

      recentSessions,

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};