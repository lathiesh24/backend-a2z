// controllers/userController.js

// Assuming User model is already imported

exports.updateTopicProgress = async (req, res) => {
  const { userId, topicId } = req.params;
  const { completedQuestions, totalQuestions } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const progressIndex = user.topicsProgress.findIndex(p => p.topicId === topicId);
    if (progressIndex > -1) {
      user.topicsProgress[progressIndex].completedQuestions = completedQuestions;
      user.topicsProgress[progressIndex].totalQuestions = totalQuestions;
    } else {
      user.topicsProgress.push({ topicId, completedQuestions, totalQuestions });
    }

    await user.save();
    res.json({ message: "Progress updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

exports.getProgress = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId, 'topicsProgress');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.topicsProgress);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};
