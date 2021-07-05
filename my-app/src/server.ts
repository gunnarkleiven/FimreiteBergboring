//import dotenv from 'dotenv';
export { }


const express = require('express');
const router = express.Router();
const cors = require("cors");

const nodemailer = require("nodemailer");

const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())
app.use("/", router);
app.listen(5000, () => console.log("server running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    //port: 465,
    // secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});


// Takes the needed parameters, and constructs a nice looking string to be displayed in the email
const constructMessage = (name: string, number: string, company: string, email: string, message: string) => {
    return (
        `Ny melding frå nettsida.\nNavn: ${name}\nTelefonnummer: ${number}\nFirma: ${company}\nE-post: ${email}\nMelding:\n${message}`
    );
}

contactEmail.verify((error: any) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready to send");
    }
});

router.post("/contact", (req: any, res: any) => {
    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message;

    const { name, number, company, email, message } = req.body;

    const mailMessage = constructMessage(name, number, company, email, message);

    const mail = {
        //from: "gunnarkleiventest@gmail.com",
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Melding frå: ${name}`,
        text: mailMessage,
    };

    contactEmail.sendMail(mail, (error: any) => {
        if (error) {
            res.json({ status: "Error" });
        }
        else {
            res.json({ status: "Message Sent" });
        }
    });
});

