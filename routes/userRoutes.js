// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.patch('/:userId/progress/:topicId', userController.updateTopicProgress);
router.get('/:userId/progress', userController.getProgress);

module.exports = router;
