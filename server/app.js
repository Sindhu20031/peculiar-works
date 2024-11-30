require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import express
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Import bodyParser for parsing incoming requests
const cors = require('cors'); // Import CORS

const app = express(); // Create an instance of express app

// CORS Configuration - Allow only your frontend to make requests
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests only from http://localhost:3000

// Middleware
app.use(bodyParser.json()); // Parse incoming requests as JSON

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Use the EMAIL variable from the .env file
    pass: process.env.PASSWORD, // Use the PASSWORD variable from the .env file
  },
});

// Define the root GET route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Define the route for handling the form submission
app.post('/api/submit-query', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'Peculiarworks10@gmail.com', // Replace with recipient email
    subject: 'New Digital Marketing Inquiry',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

