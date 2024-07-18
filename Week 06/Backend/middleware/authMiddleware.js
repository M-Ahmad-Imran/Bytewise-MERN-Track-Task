const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
require('dotenv').config();

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            // Token from Header
            token = req.headers.authorization.split(' ')[1];

            // Verification
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            // Fetch User from the Token
            req.user = await User.findById(decoded.id).select('-password');

            next()
        }catch(error){
            console.log(error);
            res.status(401)
            throw new Error('Not Authorized');
        }
    }
    if(!token){
        res.status(401);
        throw new Error('Not Authorized, No TOKEN..')
    }
})

module.exports = { protect }