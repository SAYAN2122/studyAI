import StudySession from "../models/StudySession.js";

// ==========================================
// Save Study Session
// ==========================================
export const saveStudySession = async (req, res) => {
  try {
    const {
      pdfName,
      summary,
      notes,
      quiz,
      flashcards,
    } = req.body;

    const session = await StudySession.create({
      user: req.user._id,
      pdfName,
      summary,
      notes,
      quiz,
      flashcards,
    });

    return res.status(201).json({
      success: true,
      message: "Study Session Saved",
      session,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get All Sessions
// ==========================================
export const getStudySessions = async (req, res) => {
  try {

    const sessions = await StudySession.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      sessions,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Get Single Session
// ==========================================
export const getStudySession = async (req, res) => {
  try {

    const session = await StudySession.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    return res.status(200).json({
      success: true,
      session,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Delete Session
// ==========================================
export const deleteStudySession = async (req, res) => {
  try {

    const session = await StudySession.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Study Session Deleted",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};