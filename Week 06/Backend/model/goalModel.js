const moogoose = require('mongoose');

const goalSchema = moogoose.Schema({
    text:{
        type: String,
        require: [true, 'Please add a text value']
    }
},{
    timestamps: true,
})

module.exports = moogoose.model('Goal', goalSchema)