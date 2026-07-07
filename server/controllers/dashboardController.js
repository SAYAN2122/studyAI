import StudySession from "../models/StudySession.js";

export const getDashboardStats = async (req, res) => {
  try {
    const sessions = await StudySession.find({
      user: req.user._id,
    }); 

    const stats = {
      totalPDFs: sessions.length,

      totalNotes: sessions.filter(
        (session) => session.notes && session.notes.trim() !== ""
      ).length,

      totalQuizzes: sessions.filter(
        (session) => session.quiz && session.quiz.trim() !== ""
      ).length,

      totalFlashcards: sessions.filter(
        (session) => session.flashcards && session.flashcards.trim() !== ""
      ).length,
    };

    res.status(200).json({
      success: true,
      stats,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ==========================================
// Study Progress (Last 7 Days)
// ==========================================
export const getStudyProgress = async (req, res) => {
  try {
    const sessions = await StudySession.find({
      user: req.user._id,
    });

    const last7Days = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date();

      date.setDate(date.getDate() - i);

      const day = date.toLocaleDateString("en-US", {
        weekday: "short",
      });

      const count = sessions.filter((session) => {
        const sessionDate = new Date(session.createdAt);

        return (
          sessionDate.toDateString() ===
          date.toDateString()
        );
      }).length;

      last7Days.push({
        day,
        sessions: count,
      });
    }

    res.status(200).json({
      success: true,
      progress: last7Days,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};