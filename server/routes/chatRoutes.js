import express from 'express';
import Groq from 'groq-sdk';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

// We'll initialize groq inside the route to ensure process.env.GROQ_API_KEY is loaded
router.post('/', async (req, res) => {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: "Message is required" });
    }

    const portfolio = await Portfolio.findOne();
    const portfolioContext = portfolio ? JSON.stringify(portfolio) : "No data available";

    const systemPrompt = `You are an AI assistant for Mahmudur Rahman's portfolio website. 
Your goal is to answer questions *only* about Mahmudur Rahman based on the provided portfolio data.
Keep your answers short, concise, and professional. 
If a user asks about anything unrelated to Mahmudur or the portfolio, politely decline to answer and state you can only answer questions about Mahmudur Rahman.

Portfolio Data Context:
${portfolioContext}
`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query }
      ],
      model: 'llama-3.3-70b-versatile',
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";

    res.json({ reply });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Failed to communicate with AI Assistant" });
  }
});

export default router;

