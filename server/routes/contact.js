const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use a proper email service like Gmail or others
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password', // Your email password or app-specific password
    },
});

router.post('/send-email', async (req, res) => {
    const { name, email, contactNumber, message, renterEmail } = req.body;

    const mailOptions = {
        from: email,
        to: renterEmail,
        subject: `New Booking Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

module.exports = router;
