import { TrendingUp, Car, Inbox, Calculator } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import StockAgingChart from "@/components/dashboard/StockAgingChart";
import LeadSourceChart from "@/components/dashboard/LeadSourceChart";
import RecentLeads from "@/components/dashboard/RecentLeads";
import AlertsPanel from "@/components/dashboard/AlertsPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">Intelligence Overview</h1>
        <p className="text-slate-brand">Live operational metrics for your forecourt.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Total Stock" 
          value="42" 
          delta="+3" 
          icon={Car} 
          trend="up"
        />
        <KPICard 
          title="New Leads (MTD)" 
          value="128" 
          delta="+12%" 
          icon={Inbox} 
          trend="up"
        />
        <KPICard 
          title="Avg. Days in Stock" 
          value="32" 
          delta="-2" 
          icon={TrendingUp} 
          trend="down"
          status="warning"
        />
        <KPICard 
          title="Gross Profit (MTD)" 
          value="£48,250" 
          delta="+£5,400" 
          icon={Calculator} 
          trend="up"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-dms-surface p-6 rounded-2xl border border-dms-border">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            Stock Aging <span className="text-[10px] bg-white/5 px-2 py-1 rounded">DAYS IN STOCK</span>
          </h3>
          <div className="h-[300px]">
             <StockAgingChart />
          </div>
        </div>
        <div className="bg-dms-surface p-6 rounded-2xl border border-dms-border">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            Lead Pipeline <span className="text-[10px] bg-white/5 px-2 py-1 rounded">BY STATUS</span>
          </h3>
          <div className="h-[300px]">
             <LeadSourceChart />
          </div>
        </div>
      </div>

      {/* Lower Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentLeads />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
}
