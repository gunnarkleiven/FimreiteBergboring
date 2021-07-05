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
console.log(process.env.EMAIL_USERNAME);
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
contactEmail.verify(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready to send");
    }
});
router.post("/contact", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var mail = {
        from: "gunnarkleiventest@gmail.com",
        to: "gunnarkleiven98@gmail.com",
        subject: "TEST",
        text: "This is another test email"
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
