import { LucideIcon } from "lucide-react";

export default function KPICard({ 
  title, 
  value, 
  delta, 
  icon: Icon, 
  trend = "up",
  status = "default" 
}: { 
  title: string; 
  value: string; 
  delta: string; 
  icon: LucideIcon;
  trend?: "up" | "down";
  status?: "default" | "warning" | "danger" | "success";
}) {
  const statusColors = {
    default: "text-white",
    warning: "text-warning",
    danger: "text-danger",
    success: "text-green-data",
  };

  return (
    <div className="bg-dms-surface p-6 rounded-2xl border border-dms-border hover:border-green-data/30 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-green-data/10 transition-colors">
          <Icon className="w-5 h-5 text-slate-brand group-hover:text-green-data" />
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-bold ${trend === "up" ? "text-green-data" : "text-danger"}`}>
          {trend === "up" ? "↑" : "↓"} {delta}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-slate-brand uppercase tracking-widest mb-1">{title}</p>
        <p className={`text-3xl font-mono font-bold tracking-tight ${statusColors[status]}`}>{value}</p>
      </div>
    </div>
  );
}
