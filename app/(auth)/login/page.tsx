"use client";

import { useState } from "react";
import Link from "next/link";
import { createBrowserClient } from "@/lib/supabase";
import { AlertCircle, Key, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createBrowserClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-dms-bg flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block mb-12">
            <span className="font-syne text-4xl font-bold tracking-tight text-white">
              Forecour<span className="text-green-data">IQ</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Dealer Portal Login</h1>
          <p className="text-slate-brand">Enter your credentials to access your forecourt.</p>
        </div>

        <div className="bg-dms-surface p-8 rounded-2xl border border-dms-border shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-brand" />
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-dms-bg border border-dms-border rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-green-data outline-none"
                  placeholder="name@dealership.co.uk"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">Password</label>
                <Link href="#" className="text-[10px] font-bold text-green-data hover:underline uppercase tracking-widest">Forgot?</Link>
              </div>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-brand" />
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-dms-bg border border-dms-border rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-green-data outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-danger/10 border border-danger/20 rounded-lg flex gap-3 text-danger text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {error}
              </div>
            )}

            <button 
              disabled={loading}
              type="submit" 
              className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "AUTHENTICATING..." : "SIGN IN TO DMS"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-dms-border text-center">
            <p className="text-sm text-slate-brand mb-4">New dealership?</p>
            <Link href="/register" className="text-white font-bold hover:text-green-data transition-colors">
              Create an account
            </Link>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-brand uppercase tracking-widest">
          Secure enterprise-grade access · ForecourIQ v1.2
        </p>
      </div>
    </div>
  );
}
