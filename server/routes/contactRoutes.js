import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    console.log(`[New Contact Inbound] From: ${name} <${email}> | Subject: ${subject || 'General Inquiry'}`);
    console.log(`Message: ${message}`);

    // If Telegram Bot credentials exist, forward notification instantly to Telegram
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      const tgUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
      const text = `📬 *New Portfolio Inbound*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject || 'N/A'}\n\n*Message:*\n${message}`;
      
      try {
        await fetch(tgUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'Markdown'
          })
        });
      } catch (tgErr) {
        console.error('Telegram notification error:', tgErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Message dispatched successfully. Mahmudur will get back to you within 24 hours.'
    });
  } catch (error) {
    console.error('Contact route error:', error);
    return res.status(500).json({ error: 'Failed to process message.' });
  }
});

export default router;
