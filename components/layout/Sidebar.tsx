"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Car, 
  Inbox, 
  BarChart3, 
  Settings, 
  LogOut,
  Sparkles
} from "lucide-react";
import { createBrowserClient } from "@/lib/supabase";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Command Centre", href: "/command-centre", icon: Sparkles, badge: "AI" },
  { name: "Stock", href: "/stock", icon: Car, badge: 12 }, // Mock count
  { name: "Leads", href: "/leads", icon: Inbox, badge: 4 }, // Mock count
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ profile }: { profile: any }) {
  const pathname = usePathname();
  const supabase = createBrowserClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-dms-surface border-r border-dms-border">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="font-syne text-xl font-bold tracking-tight">
            Forecour<span className="text-green-data">IQ</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-green-data/10 text-green-data" 
                  : "text-slate-brand hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                {item.name}
              </div>
              {item.badge && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isActive ? "bg-green-data text-navy" : "bg-white/10 text-white"
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-dms-border mt-auto">
        <div className="flex items-center gap-3 mb-6 p-2 rounded-lg bg-white/5">
          <div className="w-10 h-10 rounded-full bg-green-data/20 flex items-center justify-center text-green-data font-bold">
            {profile?.full_name?.charAt(0) || "U"}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold truncate">{profile?.full_name || "User"}</p>
            <p className="text-[10px] text-slate-brand truncate">{profile?.dealerships?.name || "Dealership"}</p>
          </div>
        </div>
        
        <button 
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-danger hover:bg-danger/10 w-full rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
