"use client";

import { useState } from "react";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import { blogPosts } from "@/lib/seo-data/blog-posts";
import { Clock, Calendar, Tag } from "lucide-react";

const categories = ["All", "SEO", "Compliance", "Stock Management", "Market Intelligence", "Platforms"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
           <h1 className="text-5xl lg:text-7xl font-syne font-bold text-navy mb-6 tracking-tight">Dealer Intelligence Hub</h1>
           <p className="text-xl text-slate-brand leading-relaxed">
             Market insights, dealership success strategies, and the latest in automotive retail technology.
           </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                 activeCategory === cat 
                   ? "bg-navy text-green-data shadow-lg scale-105" 
                   : "bg-slate-light text-slate-brand hover:bg-navy/5 hover:text-navy"
               }`}
             >
               {cat}
             </button>
           ))}
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col h-full bg-slate-light rounded-2xl overflow-hidden border border-navy/5 hover:border-green-data/50 hover:shadow-xl transition-all">
              <div className="p-8 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-navy font-bold text-xs tracking-wider shadow-sm">
                       <Tag className="w-3 h-3 text-green-data" />
                       {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-brand font-bold uppercase tracking-widest">
                       <Clock className="w-3 h-3" />
                       {post.readTime}
                    </span>
                 </div>
                 
                 <h2 className="text-2xl font-syne font-bold text-navy mb-4 group-hover:text-green-data transition-colors line-clamp-3">
                   <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                 </h2>
                 
                 <p className="text-slate-brand leading-relaxed mb-8 flex-1 line-clamp-4">
                    {post.excerpt}
                 </p>
                 
                 <div className="flex items-center justify-between pt-6 border-t border-navy/5 mt-auto">
                    <span className="flex items-center gap-2 text-xs text-slate-brand font-medium">
                       <Calendar className="w-3 h-3" />
                       {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-navy font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform text-sm">
                       Read Article <span className="text-green-data text-lg">→</span>
                    </Link>
                 </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
