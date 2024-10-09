const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

// @route   GET api/user
// @desc    Get user data
// @access  Private
router.get('/', auth, userController.getUser);

// @route   PUT api/user
// @desc    Update user data
// @access  Private
router.put('/', auth, userController.updateUser);

module.exports = router;