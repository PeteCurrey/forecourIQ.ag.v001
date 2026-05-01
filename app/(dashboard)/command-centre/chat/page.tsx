"use client";
// @ts-nocheck

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { 
  Send, 
  Sparkles, 
  User, 
  MessageSquarePlus,
  RefreshCcw,
  Loader2
} from "lucide-react";

const starterPrompts = [
  "What should I be buying right now given my current stock?",
  "Analyse my pricing — am I leaving money on the table?",
  "Which of my current stock is at risk of sitting too long?",
  "What's happening with the EV market in the East Midlands?",
  "Give me a full assessment of my dealership's performance this month"
];

export default function ChatPage() {
  const chat = useChat({
    api: "/api/command-centre/chat"
  } as any) as any;
  const { messages, input, handleInputChange, handleSubmit, setInput, isLoading } = chat;
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStarterPrompt = (prompt: string) => {
    setInput(prompt);
    // Submit immediately would require a mock event or custom handler since we use useChat.
    // For now we just set the input.
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] -mt-4 -mb-10 overflow-hidden border border-dms-border rounded-2xl">
      {/* Sidebar - History */}
      <div className="hidden lg:flex w-64 flex-col bg-dms-bg border-r border-dms-border">
         <div className="p-4 border-b border-dms-border">
            <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm">
               <MessageSquarePlus className="w-4 h-4" />
               New Analysis
            </button>
         </div>
         <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <p className="text-[10px] font-bold text-slate-brand uppercase tracking-widest px-2 mb-2">Previous Chats</p>
            {[
              { title: "Pricing strategy for Q3", time: "2h ago" },
              { title: "Electric vehicle sourcing", time: "Yesterday" },
              { title: "Weekly performance review", time: "Last Week" },
            ].map((c, i) => (
               <button key={i} className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group">
                  <p className="text-sm font-bold text-slate-brand group-hover:text-white truncate">{c.title}</p>
                  <p className="text-[10px] text-slate-brand/50 mt-1">{c.time}</p>
               </button>
            ))}
         </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-dms-surface relative">
         <div className="p-4 border-b border-dms-border bg-dms-surface/80 backdrop-blur flex justify-between items-center absolute top-0 w-full z-10">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-green-data/10 rounded-lg flex items-center justify-center text-green-data">
                  <Sparkles className="w-4 h-4" />
               </div>
               <div>
                  <h2 className="text-sm font-bold">ForecourIQ Analyst</h2>
                  <p className="text-[10px] text-slate-brand font-mono flex items-center gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-data animate-pulse" />
                     ONLINE · MODEL: CLAUDE 3.5
                  </p>
               </div>
            </div>
         </div>

         <div className="flex-1 overflow-y-auto pt-20 p-6 space-y-6">
            {messages.length === 0 ? (
               <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">
                  <div className="w-20 h-20 bg-green-data/5 border border-green-data/20 rounded-2xl flex items-center justify-center text-green-data shadow-[0_0_30px_rgba(0,212,170,0.1)]">
                     <Sparkles className="w-10 h-10" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-syne font-bold mb-2">How can I help optimise your forecourt?</h2>
                     <p className="text-slate-brand">I have real-time access to your live stock, historical sales, and regional market demand data.</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                     {starterPrompts.map((p, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleStarterPrompt(p)}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-brand hover:text-white hover:border-green-data/30 hover:bg-green-data/5 transition-all text-left"
                        >
                           {p}
                        </button>
                     ))}
                  </div>
               </div>
            ) : (
               messages.map((m: any) => (
                  <div key={m.id} className={`flex gap-4 max-w-4xl ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-navy border border-white/10' : 'bg-green-data/10 text-green-data'}`}>
                        {m.role === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                     </div>
                     <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user' 
                          ? 'bg-navy border border-white/10 text-white rounded-tr-sm' 
                          : 'bg-white/5 border border-white/5 text-slate-light rounded-tl-sm'
                     }`}>
                        {m.content}
                     </div>
                  </div>
               ))
            )}
            
            {isLoading && (
               <div className="flex gap-4 max-w-4xl">
                  <div className="w-8 h-8 rounded-lg bg-green-data/10 text-green-data flex items-center justify-center shrink-0">
                     <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 rounded-tl-sm flex items-center gap-2">
                     <Loader2 className="w-4 h-4 text-green-data animate-spin" />
                     <span className="text-xs text-slate-brand font-mono">Analysing live data...</span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
         </div>

         <div className="p-6 bg-dms-surface">
            <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
               <textarea 
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about pricing, sourcing, or market trends..."
                  className="w-full bg-dms-bg border border-dms-border rounded-xl pl-4 pr-16 py-4 text-sm outline-none focus:ring-1 focus:ring-green-data resize-none"
                  rows={2}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (input.trim()) handleSubmit(e as any);
                     }
                  }}
               />
               <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-green-data text-navy rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
               >
                  <Send className="w-4 h-4" />
               </button>
            </form>
            <p className="text-center mt-3 text-[10px] font-mono text-slate-brand">
               AI responses are generated based on regional market signals. Always verify pricing.
            </p>
         </div>
      </div>
    </div>
  );
}
