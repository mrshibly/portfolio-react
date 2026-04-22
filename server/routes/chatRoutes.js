import express from 'express';
import Groq from 'groq-sdk';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

// We'll initialize groq inside the route to ensure process.env.GROQ_API_KEY is loaded
router.post('/', async (req, res) => {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY is missing from environment variables.");
      return res.status(500).json({ error: "AI Assistant is not configured properly." });
    }

    const groq = new Groq({ apiKey });
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: "Message is required" });
    }

    let portfolioContext = "No specific data available.";
    try {
      // Set a short timeout for the DB query
      const portfolio = await Portfolio.findOne().maxTimeMS(2000);
      if (portfolio) {
        // Only take the most relevant parts to keep context size manageable
        const contextObj = {
          name: portfolio.hero?.name,
          title: portfolio.hero?.title,
          bio: portfolio.hero?.bio,
          projects: portfolio.projects?.map(p => ({ title: p.title, desc: p.desc, tags: p.tags })),
          competencies: portfolio.competencies?.map(c => ({ title: c.title, desc: c.desc })),
          contact: portfolio.contact
        };
        portfolioContext = JSON.stringify(contextObj);
      }
    } catch (dbError) {
      console.warn("Database context unavailable for chat:", dbError.message);
      portfolioContext = "The AI assistant is currently operating with limited information because the database is unreachable. However, I can still tell you about Mahmudur Rahman's general background as an AI Systems Architect.";
    }

    const systemPrompt = `You are an AI assistant for Mahmudur Rahman's portfolio website. 
Your goal is to answer questions *only* about Mahmudur Rahman based on the provided portfolio data.
Keep your answers short, concise, and professional. 
If the user asks about anything unrelated to Mahmudur or the portfolio, politely decline to answer.

Portfolio Data Context:
${portfolioContext}
`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query }
      ],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
    res.json({ reply });

  } catch (error) {
    console.error("AI Assistant Error:", error.message);
    res.status(200).json({ 
      reply: "I'm having a bit of trouble connecting to my brain right now. Please try asking again in a moment!" 
    });
  }
});

export default router;

