const express = require('express');
const router = express.Router();
const { GetGoal, SetGoal, UpdateGoal, DeleteGoal } = require("../controller/GoalController");
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, GetGoal).post(protect, SetGoal);
router.route('/:id').delete(protect, DeleteGoal).put(protect, UpdateGoal);

module.exports = router;