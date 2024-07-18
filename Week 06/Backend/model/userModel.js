const moogoose = require('mongoose');

const userSchema = moogoose.Schema({
    name:{
        type: String,
        required: [true, 'Please Add a name']
    },
    email:{
        type: String,
        required: [true, 'Please Add an email'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'Please Add a password']
    },
},{
    timestamps: true
})

module.exports = moogoose.model('User',userSchema);