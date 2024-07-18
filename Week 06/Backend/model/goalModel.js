const moogoose = require('mongoose');

const goalSchema = moogoose.Schema({
    user: {
        type: moogoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text:{
        type: String,
        require: [true, 'Please add a text value']
    }
},{
    timestamps: true,
})

module.exports = moogoose.model('Goal', goalSchema)