const express = require('express');
const router = express.Router();
const { GetGoal, SetGoal, UpdateGoal, DeleteGoal } = require("../controller/GoalController");

router.route('/').get(GetGoal).post(SetGoal);
router.route('/:id').delete(DeleteGoal).put(UpdateGoal);

module.exports = router;