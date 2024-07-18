const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

// Register User /api/user
const registerUser =asyncHandler( async(req, res) => {
    const { name, email , password} = req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error('All Field are Compulastary!');
    }

    // Check whether the user exist or not!
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('You Already have account on this mail!');
    }

    // HAshing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    // Create new user
    const user = await User.create( {
        name,
        email,
        password: hashedPassword,
    })

    if(user){
        res.status(201).json({
            _id : user.id,
            name: user.name,
            email: user.email,
            token: generateTWT(user._id)
        })
    } else {
        res.status(400);
        throw new Error('User Invalid!');
    }

    res.json({ message: 'Register User' });
})

// Authenticate User /api/users/login
const loginUser =asyncHandler( async(req, res) => {
    const {email, password} = req.body;
    // Check mail
    const user = await User.findOne({email})
    

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id : user.id,
            name: user.name,
            email: user.email,
            token: generateTWT(user._id)
        })
    } else{
        res.status(400);
        throw new Error('User not Register against this mail!');
    }
})

// User Data /api/users/myself
const getMyself =asyncHandler( async(req, res) => {
    const {_id,name,email} = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// Generate JWT
require('dotenv').config();
const generateTWT = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMyself,
}