import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import portfolioRoutes from './routes/portfolioRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/chat', chatRoutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route to serve the React app
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Connect to MongoDB
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
} else {
  console.warn('MONGO_URI is missing. Server will run with local data fallback only.');
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment Check:');
  console.log(`- MONGO_URI: ${process.env.MONGO_URI ? 'LOADED' : 'MISSING (Backend will use defaults)'}`);
  console.log(`- GROQ_API_KEY: ${process.env.GROQ_API_KEY ? 'LOADED' : 'MISSING (AI Assistant will be disabled)'}`);
  console.log(`- ADMIN_PASSWORD: ${process.env.ADMIN_PASSWORD ? 'LOADED' : 'MISSING (Admin panel will be locked)'}`);
});

