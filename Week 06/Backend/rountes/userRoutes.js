const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMyself } = require('../controller/userController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/myself', protect, getMyself);

module.exports = router;