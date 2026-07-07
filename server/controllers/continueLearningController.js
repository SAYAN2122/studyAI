import StudySession from "../models/StudySession.js";

export const getLatestSession = async (req, res) => {
  try {
    const session = await StudySession.findOne({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      session,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};