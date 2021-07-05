import nodemailer from 'nodemailer';
// import smtpTransport from 

export function main() {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'gunnarkleiventest@gmail.com',
            pass: 'Eg5KtPfMEzbpyZ2'
        }
    });

    let mailOptions = {
        from: "gunnarkleiventest@gmail.com",
        to: "gunnarkleiven98@gmail.com",
        subject: "TEST",
        text: "This is a test message"
    }

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log("error");
        }
        else {
            console.log("I think it went alright?");
        }
    })
}
