"use strict";

const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: process.env.USER_MAIL_SMTP,
        pass: process.env.PASS_MAIL_SMTP
    },
    secure: true
});

module.exports = transporter;
