require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware — allow any origin so Vercel frontend can reach Render backend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
  res.send('Delice Portfolio Backend is running!');
});

// Routes
app.use('/api', apiRoutes);

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('❌  MONGODB_URI environment variable is not set!');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('✅  MongoDB Connected'))
  .catch(err => {
    console.error('❌  MongoDB Connection Error:', err.message);
    process.exit(1);
  });

// Start Server
app.listen(PORT, () => {
  console.log(`🚀  Server running on port ${PORT}`);
});
