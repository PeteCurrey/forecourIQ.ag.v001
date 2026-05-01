"use client";

import { useState } from "react";

export default function DemoPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-light">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl text-navy mb-8">
            See the Future of Your Forecourt.
          </h1>
          <p className="text-xl text-slate-brand mb-12">
            In 20 minutes, we'll show you how ForecourIQ can reduce your days-to-sell and 
            surface the most profitable stock for your location.
          </p>

          <div className="space-y-8">
            {[
              { 
                title: "Live Market Scan", 
                desc: "We'll run a live scan of your local area and show you what's actually selling." 
              },
              { 
                title: "Website Audit", 
                desc: "A quick look at your current site's performance and SEO gaps." 
              },
              { 
                title: "Custom Proposal", 
                desc: "Tailored pricing based on your stock volume and goals." 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-green-data/10 flex items-center justify-center flex-shrink-0 text-green-data font-bold border border-green-data/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-brand">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-navy text-white rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-green-data font-bold text-sm mb-4">TRUSTED BY THE BEST</p>
              <p className="text-xl italic mb-6">"The best 20 minutes I've spent on the business this year. The data doesn't lie."</p>
              <p className="font-bold">Mark Thompson, Heritage Motors</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-data/10 blur-3xl" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-navy/5">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-data rounded-full flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">Demo Requested!</h2>
              <p className="text-slate-brand text-lg">One of our specialists will be in touch within 2 hours to book your slot.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-navy font-bold underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-navy mb-8">Request a Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-brand">Full Name</label>
                    <input required name="name" type="text" className="w-full bg-slate-light border-0 p-4 text-navy focus:ring-2 focus:ring-green-data" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-brand">Dealership Name</label>
                    <input required name="dealership" type="text" className="w-full bg-slate-light border-0 p-4 text-navy focus:ring-2 focus:ring-green-data" placeholder="Peak Cars Ltd" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-brand">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-slate-light border-0 p-4 text-navy focus:ring-2 focus:ring-green-data" placeholder="john@peakcars.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-brand">Phone Number</label>
                    <input required name="phone" type="tel" className="w-full bg-slate-light border-0 p-4 text-navy focus:ring-2 focus:ring-green-data" placeholder="07123 456 789" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-brand">Stock Volume</label>
                  <select required name="stock" className="w-full bg-slate-light border-0 p-4 text-navy focus:ring-2 focus:ring-green-data">
                    <option value="">Select volume...</option>
                    <option value="1-20">1-20 Vehicles</option>
                    <option value="21-50">21-50 Vehicles</option>
                    <option value="51-100">51-100 Vehicles</option>
                    <option value="100+">100+ Vehicles</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-brand">Anything specific?</label>
                  <textarea name="message" rows={4} className="w-full bg-slate-light border-0 p-4 text-navy focus:ring-2 focus:ring-green-data" placeholder="Tell us what you're struggling with most..."></textarea>
                </div>

                <button 
                  disabled={status === "loading"}
                  type="submit" 
                  className="w-full bg-navy text-white py-5 font-bold text-lg hover:bg-navy/90 transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Book My Demo"}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center font-bold">Something went wrong. Please try again.</p>
                )}
                
                <p className="text-slate-brand text-[10px] text-center leading-relaxed">
                  By clicking "Book My Demo", you agree to our Privacy Policy. We'll only contact you regarding your request and occasional dealer intelligence updates.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
