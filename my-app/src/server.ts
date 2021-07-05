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

console.log(process.env.EMAIL_USERNAME);


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

contactEmail.verify((error: any) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready to send");
    }
});

router.post("/contact", (req: any, res: any) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        //from: "gunnarkleiventest@gmail.com",
        from: name,
        to: "gunnarkleiven98@gmail.com",
        subject: "TEST",
        text: "This is another test email",
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

