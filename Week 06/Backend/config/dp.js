const mangoose = require('mongoose')
require('dotenv').config();
const connectDB = async () => {
    try {
        const conn = await mangoose.connect(process.env.MONGO_URI)


        console.log(`MongoDB Connected to you! ${conn.connection.host}`.yellow.underline)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB