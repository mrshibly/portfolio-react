import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "SYSTEM ONLINE: I am Mahmudur's Cognitive Core. I can provide details on his Agentic AI research, RAG pipeline architectures, or full-stack automation expertise. How may I assist?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuery = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userQuery }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userQuery }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Connection to AI core lost.');
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `CRITICAL ERROR: ${error.message}. Please re-initialize or contact the administrator.` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-electric/20 backdrop-blur-xl border border-electric/50 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] z-50 flex items-center justify-center group"
        whileHover={{ scale: 1.1, boxShadow: '0_0_30px_rgba(37,99,235,0.5)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X size={28} className="text-electric" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <Bot size={28} className="text-electric group-hover:animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-electric/20 animate-ping pointer-events-none" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            className="fixed bottom-28 right-8 w-[380px] h-[550px] max-h-[80vh] bg-obsidian/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col z-50 overflow-hidden"
          >
            {/* Technical Header */}
            <div className="p-5 border-b border-white/10 bg-white/5 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-electric/20 flex items-center justify-center border border-electric/30">
                    <Bot size={20} className="text-electric" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-obsidian" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase">Cognitive Core</h3>
                  <p className="text-[10px] text-electric/70 font-mono">STATUS: OPERATIONAL</p>
                </div>
              </div>
            </div>

            {/* Terminal-style Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Bot size={14} className="text-electric" />
                    </div>
                  )}
                  <div 
                    className={`px-4 py-3 rounded-2xl text-sm font-sans leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-electric/90 text-white rounded-tr-none shadow-[0_5px_15px_rgba(37,99,235,0.2)]' 
                        : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Bot size={14} className="text-electric" />
                  </div>
                  <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-electric rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-electric rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-electric rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Field */}
            <form onSubmit={handleSend} className="p-5 bg-white/5 border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Execute query..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-all font-mono"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-10 h-10 rounded-lg bg-electric text-white disabled:opacity-30 flex items-center justify-center hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="mt-3 text-[10px] text-center text-white/30 font-mono tracking-tighter uppercase">
                End-to-end encrypted cognitive bridge
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
