import { AlertTriangle, TrendingDown } from "lucide-react";

export default function AlertsPanel() {
  const alerts = [
    {
      type: "aging",
      title: "Price Review Required",
      desc: "BMW 3 Series (LJ71 XYZ) has been in stock for 48 days. Suggested price: £24,950 (-£500).",
      priority: "high"
    },
    {
      type: "lead",
      title: "Dormant Lead",
      desc: "No contact with Sarah Miller for 48h. Follow-up scheduled for today.",
      priority: "medium"
    },
    {
      type: "stock",
      title: "Low Demand Stock",
      desc: "Audi A4 (AV19 KLR) matches low local demand. Consider trade disposal.",
      priority: "medium"
    }
  ];

  return (
    <div className="bg-dms-surface rounded-2xl border border-dms-border overflow-hidden h-full">
      <div className="p-6 border-b border-dms-border">
        <h3 className="text-lg font-bold">Operational Alerts</h3>
      </div>
      <div className="p-4 space-y-4">
        {alerts.map((alert, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-green-data/30 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-1.5 rounded-lg ${alert.priority === 'high' ? 'bg-danger/10 text-danger' : 'bg-warning/10 text-warning'}`}>
                {alert.type === 'aging' ? <TrendingDown className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
              </div>
              <p className="text-sm font-bold">{alert.title}</p>
            </div>
            <p className="text-xs text-slate-brand leading-relaxed">{alert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
