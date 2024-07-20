const asyncHandler = require('express-async-handler');

const Goal = require('../model/goalModel');
const User = require('../model/userModel');

// Get Method
const GetGoal = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
})

// Post Method
const SetGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Their is no goals set")
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal);
})

// Update Method
const UpdateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not founded!');
    }
    // Check the user
    if (!req.user) {
        res.status(401);
        throw new Error('User Not Founded!');
    }

    // Make sure the same user goal updates
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User Not Authorized!');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal);
})

// Delete Method
const DeleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error('Goal not founded!');
    }
    // Check the user
    if (!req.user) {
        res.status(401);
        throw new Error('User Not Founded!');
    }

    // Make sure the same user goal updates
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User Not Authorized!');
    }

    await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
})

module.exports = {
    GetGoal,
    SetGoal,
    UpdateGoal,
    DeleteGoal,
}