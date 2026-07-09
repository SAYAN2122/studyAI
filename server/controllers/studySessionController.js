// ==========================================
// Get Single Study Session
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
        message: "Study Session not found",
      });
    }

    // Update last opened time
    session.lastOpened = new Date();
    await session.save();

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
// Delete Study Session
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
        message: "Study Session not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Study Session deleted successfully",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};