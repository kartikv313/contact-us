require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on connection error
  });

// Create a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  topic: String,
  message: String
});

// Create a model for the contact form data
const Contact = mongoose.model('Contact', contactSchema);

// Route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, topic, message } = req.body;

  // Basic validation
  if (!name || !email) {
    console.log('Validation error: Name and email are required');
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    const newContact = new Contact({ name, email, phone, topic, message });
    await newContact.save();
    console.log('Contact saved:', newContact);

    // Send response indicating successful form submission
    res.status(200).json({ message: 'Form submission received' });
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(500).json({ message: 'Error saving form submission' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
