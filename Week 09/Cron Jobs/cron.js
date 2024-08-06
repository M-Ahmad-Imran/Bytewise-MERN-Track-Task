const user = require('./models/userModel')
const config = require('./config/config')
const nodeMailer = require('nodemailer')
const cron = require('node-cron')

const sendMailToUsers = async (Email) => {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: config.emailUser,
            email: config.emailPassword
        }
    })
    const mailOptions = {
        from: 'Cron Jobs Task',
        to: Email,
        subject: 'Task one of week 09',
        html: '<h1>Working on "Cron Jobs"</h1><p>This is the testing mail</p>'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Error Occur")
        } else {
            console.log("Mail has been sent:",info.response)
        }
    })
}

const sendMails = async () => {
    try {
        cron.schedule('*/10 * * * * *', async () => {
            let userData = await user.find({})
            if (userData.length > 0) {
                let emails = []
                userData.map((key) => {
                    emails.push(key.email)
                })
                sendMailToUsers(emails)
            }
        })
    } catch (error) {

    }
}

module.exports = {
    sendMails,
}