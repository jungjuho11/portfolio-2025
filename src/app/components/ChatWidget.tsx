'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface ChatMessage {
   id: string;
   text: string;
   isUser: boolean;
   timestamp: Date | string;
}

const ChatWidget = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [messages, setMessages] = useState<ChatMessage[]>(() => {
      // Initialize from sessionStorage or use default welcome message
      if (typeof window !== 'undefined') {
         const saved = sessionStorage.getItem('chatMessages');
         if (saved) {
            try {
               return JSON.parse(saved);
            } catch (e) {
               console.error('Failed to parse saved messages:', e);
            }
         }
      }

      return [{
         id: '1',
         text: "Hi! I'm Juho's AI assistant. Ask me anything about my experience, skills, background, hobbies, or interesting facts!",
         isUser: false,
         timestamp: new Date()
      }];
   });
   const [inputValue, setInputValue] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const messagesEndRef = useRef<HTMLDivElement>(null);
   const inputRef = useRef<HTMLInputElement>(null);

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
   };

   useEffect(() => {
      scrollToBottom();
   }, [messages]);

   // Save messages to sessionStorage whenever they change
   useEffect(() => {
      if (typeof window !== 'undefined') {
         sessionStorage.setItem('chatMessages', JSON.stringify(messages));
      }
   }, [messages]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!inputValue.trim() || isLoading) return;

      const userMessage: ChatMessage = {
         id: Date.now().toString(),
         text: inputValue.trim(),
         isUser: true,
         timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);

      try {
         const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               message: inputValue.trim(),
               conversationHistory: messages.slice(-10) // Send last 10 messages for context
            }),
         });

         const data = await response.json();

         const aiMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            text: data.reply || "I'm sorry, I couldn't process that request.",
            isUser: false,
            timestamp: new Date()
         };

         setMessages(prev => [...prev, aiMessage]);
      } catch {
         const errorMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            text: "Sorry, I&apos;m having trouble connecting right now. Please try again later.",
            isUser: false,
            timestamp: new Date()
         };
         setMessages(prev => [...prev, errorMessage]);
      } finally {
         setIsLoading(false);
      }
   };

   const formatTime = (date: Date | string) => {
      // Handle both Date objects and date strings from sessionStorage
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   };

   return (
      <>
         {/* Floating Chat Button */}
         <motion.button
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
               }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
         >
            <MessageCircle size={24} />
         </motion.button>

         {/* Chat Widget */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
               >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                           <Bot size={20} />
                        </div>
                        <div>
                           <h3 className="font-semibold">Juho&apos;s AI Assistant</h3>
                           <p className="text-xs text-white/80">Ask me about my experience!</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <button
                           onClick={() => {
                              setMessages([{
                                 id: Date.now().toString(),
                                 text: "Hi! I'm Juho's AI assistant. Ask me anything about my experience, skills, background, hobbies, or interesting facts!",
                                 isUser: false,
                                 timestamp: new Date()
                              }]);
                              sessionStorage.removeItem('chatMessages');
                           }}
                           className="p-1 hover:bg-white/20 rounded-full transition-colors text-xs"
                           title="Clear conversation"
                        >
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                           </svg>
                        </button>
                        <button
                           onClick={() => setIsOpen(false)}
                           className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                           <X size={20} />
                        </button>
                     </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                     {messages.map((message) => (
                        <motion.div
                           key={message.id}
                           className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.3 }}
                        >
                           <div
                              className={`max-w-[80%] p-3 rounded-2xl ${message.isUser
                                 ? 'bg-blue-600 text-white rounded-br-md'
                                 : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                                 }`}
                           >
                              <p className="text-sm">{message.text}</p>
                              <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'
                                 }`}>
                                 {formatTime(message.timestamp)}
                              </p>
                           </div>
                        </motion.div>
                     ))}

                     {isLoading && (
                        <motion.div
                           className="flex justify-start"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                        >
                           <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm p-3">
                              <div className="flex space-x-1">
                                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                           </div>
                        </motion.div>
                     )}

                     <div ref={messagesEndRef} />
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
                     <div className="flex gap-2">
                        <input
                           ref={inputRef}
                           type="text"
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           placeholder="Ask me about my experience..."
                           className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
                           disabled={isLoading}
                        />
                        <button
                           type="submit"
                           disabled={!inputValue.trim() || isLoading}
                           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
                        >
                           <Send size={16} />
                        </button>
                     </div>
                  </form>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default ChatWidget;
