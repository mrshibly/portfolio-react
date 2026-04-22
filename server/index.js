require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const portfolioRoutes = require('./routes/portfolioRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/chat', chatRoutes);

const path = require('path');
// Serve static frontend files
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route to serve the React app
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
