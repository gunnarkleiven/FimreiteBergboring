"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var cors = require("cors");
var nodemailer = require("nodemailer");
var dotenv = require('dotenv');
dotenv.config();
var app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, function () { return console.log("server running"); });
var contactEmail = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    //port: 465,
    // secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
// Takes the needed parameters, and constructs a nice looking string to be displayed in the email
var constructMessage = function (name, number, company, email, message) {
    return ("Ny melding fr\u00E5 nettsida.\nNavn: " + name + "\nTelefonnummer: " + number + "\nFirma: " + company + "\nE-post: " + email + "\nMelding:\n" + message);
};
contactEmail.verify(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready to send");
    }
});
router.post("/contact", function (req, res) {
    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message;
    var _a = req.body, name = _a.name, number = _a.number, company = _a.company, email = _a.email, message = _a.message;
    var mailMessage = constructMessage(name, number, company, email, message);
    var mail = {
        //from: "gunnarkleiventest@gmail.com",
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: "Melding fr\u00E5: " + name,
        text: mailMessage
    };
    contactEmail.sendMail(mail, function (error) {
        if (error) {
            res.json({ status: "Error" });
        }
        else {
            res.json({ status: "Message Sent" });
        }
    });
});
