//HOW TO SEND MAIL USING NODE JS


var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abhishek17jmt@gmail.com',
        pass: '#time1pass'
    }
});

var mailoptions = {
    from: 'abhishek17jmt@gmail.com',
    to: 'abhishek2001jmt@gmail.com',
    subject: 'This GMAIL IS SENT WITH THE  HELP OF NODE.JS',
    Text: 'HI this is abhi and waiting from a long time for my onboarding'
};

transporter.sendMail(mailoptions, function (error, info) {
    if (error) { console.log(error) }
    else {
        console.log("gmail sent")
    }
});