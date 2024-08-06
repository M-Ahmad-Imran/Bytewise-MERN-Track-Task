const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect('dummy')

const Cron = require('./cron')

Cron.sendMails()

app.listen(5000, () => {
    console.log("Server is Listen at port!")
})