const nodemailer = require('nodemailer');

// Step 1: Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' or another email service provider (e.g., Outlook, Yahoo)
  auth: {
    user: 'ap6356617@gmail.com', // Replace with your email
    pass: 'vzjl vbtq hfme tvqh', // Replace with your email password or app-specific password
  },
});

// Step 2: Set email options
const mailOptions = {
  from: 'ap6356617@gmail.com', // Sender's email
  to: 'imajaypatil27@gmail.com', // Receiver's email
  subject: 'Hello from Nodemailer!',
  text: 'This is a test email sent using Nodemailer.',
  html: '<p>This is a <b>test email</b> sent using Nodemailer.</p>', // Optional HTML content
};

// Step 3: Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
