"use client";

import { useState, useEffect } from "react";
import { 
  Palette, 
  Layout, 
  Search, 
  Settings2, 
  Save, 
  ExternalLink, 
  Globe,
  Upload,
  Plus,
  Trash2,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function WebsiteBuilderPage() {
  const [activeTab, setActiveTab] = useState("appearance");
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function loadSettings() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: dealer } = await supabase
        .from("dealerships")
        .select("website_settings, website_status, website_url")
        .single();

      if (dealer) {
        setSettings(dealer.website_settings);
      }
      setLoading(false);
    }
    loadSettings();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from("dealerships")
      .update({ website_settings: settings })
      .eq("owner_id", user?.id);

    if (error) {
      alert("Failed to save settings: " + error.message);
    } else {
      alert("Settings saved successfully!");
    }
    setIsSaving(false);
  };

  if (loading) return <div className="p-8 text-slate-brand">Loading website builder...</div>;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-syne font-bold mb-1">Website Builder</h1>
          <p className="text-slate-brand">Customise and deploy your branded dealer website.</p>
        </div>
        <div className="flex items-center gap-3">
           <button 
             className="bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
           >
             <ExternalLink className="w-4 h-4" />
             Preview Site
           </button>
           <button 
             onClick={handleSave}
             disabled={isSaving}
             className="bg-green-data text-navy px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50"
           >
             <Save className="w-4 h-4" />
             {isSaving ? "Saving..." : "Save Changes"}
           </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:w-64 space-y-2">
           {[
             { id: "appearance", label: "Appearance", icon: Palette },
             { id: "content", label: "Page Content", icon: Layout },
             { id: "seo", label: "SEO & Business", icon: Search },
             { id: "integrations", label: "Integrations", icon: Settings2 },
           ].map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                 activeTab === tab.id 
                   ? "bg-green-data text-navy" 
                   : "text-slate-brand hover:text-white hover:bg-white/5"
               }`}
             >
               <tab.icon className="w-4 h-4" />
               {tab.label}
             </button>
           ))}

           <div className="pt-8 mt-8 border-t border-dms-border">
              <button 
                className="w-full flex items-center justify-center gap-2 bg-navy border border-green-data/30 text-green-data py-4 rounded-xl font-bold hover:bg-green-data/5 transition-all text-sm"
              >
                <Globe className="w-4 h-4" />
                Publish Website
              </button>
           </div>
        </div>

        {/* Builder Panel */}
        <div className="flex-1 bg-dms-surface rounded-2xl border border-dms-border overflow-hidden">
           {activeTab === "appearance" && <AppearanceTab settings={settings} setSettings={setSettings} />}
           {activeTab === "content" && <ContentTab settings={settings} setSettings={setSettings} />}
           {activeTab === "seo" && <SEOTab settings={settings} setSettings={setSettings} />}
           {activeTab === "integrations" && <IntegrationsTab settings={settings} setSettings={setSettings} />}
        </div>
      </div>
    </div>
  );
}

function AppearanceTab({ settings, setSettings }: any) {
  const updateAppearance = (key: string, value: string) => {
    setSettings({
      ...settings,
      appearance: { ...settings.appearance, [key]: value }
    });
  };

  return (
    <div className="p-8 space-y-12">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h3 className="text-xl font-bold">Brand Colours</h3>
             <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Primary Colour</label>
                   <div className="flex items-center gap-3">
                      <input 
                        type="color" 
                        value={settings.appearance.primary_color} 
                        onChange={(e) => updateAppearance("primary_color", e.target.value)}
                        className="w-12 h-12 rounded-lg bg-dms-bg border border-dms-border cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={settings.appearance.primary_color} 
                        onChange={(e) => updateAppearance("primary_color", e.target.value)}
                        className="flex-1 bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 text-sm font-mono outline-none focus:ring-1 focus:ring-green-data"
                      />
                   </div>
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Secondary Colour</label>
                   <div className="flex items-center gap-3">
                      <input 
                        type="color" 
                        value={settings.appearance.secondary_color} 
                        onChange={(e) => updateAppearance("secondary_color", e.target.value)}
                        className="w-12 h-12 rounded-lg bg-dms-bg border border-dms-border cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={settings.appearance.secondary_color} 
                        onChange={(e) => updateAppearance("secondary_color", e.target.value)}
                        className="flex-1 bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 text-sm font-mono outline-none focus:ring-1 focus:ring-green-data"
                      />
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-6">
             <h3 className="text-xl font-bold">Media</h3>
             <div className="space-y-6">
                <div className="p-6 border-2 border-dashed border-dms-border rounded-2xl text-center space-y-3 hover:border-green-data/30 transition-all cursor-pointer">
                   <Upload className="w-8 h-8 text-slate-brand mx-auto" />
                   <p className="text-sm font-bold">Upload Dealer Logo</p>
                   <p className="text-[10px] text-slate-brand">SVG, PNG or JPG (Max 2MB)</p>
                </div>
                <div className="p-6 border-2 border-dashed border-dms-border rounded-2xl text-center space-y-3 hover:border-green-data/30 transition-all cursor-pointer">
                   <Upload className="w-8 h-8 text-slate-brand mx-auto" />
                   <p className="text-sm font-bold">Upload Favicon</p>
                </div>
             </div>
          </div>
       </div>

       <div className="space-y-6">
          <h3 className="text-xl font-bold">Hero Background</h3>
          <div className="aspect-[21/9] bg-dms-bg border border-dms-border rounded-3xl overflow-hidden relative flex items-center justify-center group cursor-pointer">
             {settings.appearance.hero_image ? (
               <img src={settings.appearance.hero_image} className="object-cover w-full h-full opacity-50" />
             ) : (
               <p className="text-slate-brand font-bold text-sm">No image selected</p>
             )}
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-navy px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2">
                   <Upload className="w-4 h-4" />
                   Change Hero Image
                </button>
             </div>
          </div>
       </div>
    </div>
  );
}

function ContentTab({ settings, setSettings }: any) {
  const updateContent = (key: string, value: any) => {
    setSettings({
      ...settings,
      content: { ...settings.content, [key]: value }
    });
  };

  const updateUSP = (index: number, field: string, value: string) => {
    const newUSPs = [...settings.content.usps];
    newUSPs[index] = { ...newUSPs[index], [field]: value };
    updateContent("usps", newUSPs);
  };

  return (
    <div className="p-8 space-y-12">
       <div className="space-y-8">
          <h3 className="text-xl font-bold">Homepage Hero</h3>
          <div className="grid grid-cols-1 gap-6">
             <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Hero Headline</label>
                <input 
                  type="text" 
                  value={settings.content.hero_headline}
                  onChange={(e) => updateContent("hero_headline", e.target.value)}
                  className="w-full bg-dms-bg border border-dms-border rounded-xl px-6 py-4 text-xl font-bold outline-none focus:ring-1 focus:ring-green-data"
                  placeholder="e.g. Premium Used Cars in Leicester"
                />
             </div>
             <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Subheading</label>
                <textarea 
                  rows={2}
                  value={settings.content.hero_subheading}
                  onChange={(e) => updateContent("hero_subheading", e.target.value)}
                  className="w-full bg-dms-bg border border-dms-border rounded-xl px-6 py-4 text-slate-brand outline-none focus:ring-1 focus:ring-green-data resize-none"
                  placeholder="Tell customers why they should buy from you..."
                />
             </div>
          </div>
       </div>

       <div className="space-y-8">
          <div className="flex items-center justify-between">
             <h3 className="text-xl font-bold">Why Buy From Us (USPs)</h3>
             <p className="text-[10px] text-slate-brand font-mono">MAX 4 USPs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {settings.content.usps.map((usp: any, i: number) => (
               <div key={i} className="p-6 bg-dms-bg border border-dms-border rounded-2xl space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-black uppercase tracking-widest text-green-data">USP {i + 1}</span>
                     <Trash2 className="w-4 h-4 text-danger cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                  <input 
                    type="text" 
                    value={usp.title}
                    onChange={(e) => updateUSP(i, "title", e.target.value)}
                    className="w-full bg-navy border border-dms-border rounded-lg px-4 py-2.5 font-bold outline-none focus:ring-1 focus:ring-green-data"
                    placeholder="USP Heading"
                  />
                  <textarea 
                    rows={2}
                    value={usp.desc}
                    onChange={(e) => updateUSP(i, "desc", e.target.value)}
                    className="w-full bg-navy border border-dms-border rounded-lg px-4 py-2.5 text-sm text-slate-brand outline-none focus:ring-1 focus:ring-green-data resize-none"
                    placeholder="Short description..."
                  />
               </div>
             ))}
          </div>
       </div>

       <div className="space-y-8">
          <h3 className="text-xl font-bold">Finance & Legal</h3>
          <div className="p-8 bg-dms-bg border border-dms-border rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <input 
                     type="checkbox" 
                     checked={settings.content.finance_enabled}
                     onChange={(e) => updateContent("finance_enabled", e.target.checked)}
                     className="w-5 h-5 accent-green-data" 
                   />
                   <span className="font-bold">Enable Finance Banners</span>
                </div>
                <p className="text-xs text-slate-brand leading-relaxed">This will show finance calculation estimates and banners across your stock listing and detail pages.</p>
             </div>
             <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Representative APR (%)</label>
                <input 
                  type="text" 
                  value={settings.content.finance_apr}
                  onChange={(e) => updateContent("finance_apr", e.target.value)}
                  className="w-full bg-navy border border-dms-border rounded-lg px-4 py-2.5 font-mono outline-none focus:ring-1 focus:ring-green-data"
                  placeholder="9.9"
                />
             </div>
          </div>
       </div>
    </div>
  );
}

function SEOTab({ settings, setSettings }: any) {
  const updateSEO = (key: string, value: any) => {
    setSettings({
      ...settings,
      seo: { ...settings.seo, [key]: value }
    });
  };

  const updateHours = (day: string, field: string, value: any) => {
    const newHours = { ...settings.seo.opening_hours };
    newHours[day] = { ...newHours[day], [field]: value };
    updateSEO("opening_hours", newHours);
  };

  return (
    <div className="p-8 space-y-12">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
             <h3 className="text-xl font-bold">Business Information</h3>
             <div className="space-y-4">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Public Business Name</label>
                   <input 
                     type="text" 
                     value={settings.seo.business_name}
                     onChange={(e) => updateSEO("business_name", e.target.value)}
                     className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 outline-none focus:ring-1 focus:ring-green-data"
                   />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">City / Town</label>
                      <input 
                        type="text" 
                        value={settings.seo.city}
                        onChange={(e) => updateSEO("city", e.target.value)}
                        className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 outline-none focus:ring-1 focus:ring-green-data"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">County</label>
                      <input 
                        type="text" 
                        value={settings.seo.county}
                        onChange={(e) => updateSEO("county", e.target.value)}
                        className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 outline-none focus:ring-1 focus:ring-green-data"
                      />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Full Display Address</label>
                   <textarea 
                     rows={3} 
                     value={settings.seo.address}
                     onChange={(e) => updateSEO("address", e.target.value)}
                     className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-2.5 outline-none focus:ring-1 focus:ring-green-data resize-none"
                   />
                </div>
             </div>
          </div>

          <div className="space-y-6">
             <h3 className="text-xl font-bold text-center">Opening Hours</h3>
             <div className="bg-dms-bg border border-dms-border rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                   <tbody className="divide-y divide-dms-border">
                      {Object.entries(settings.seo.opening_hours).map(([day, hours]: [string, any]) => (
                        <tr key={day}>
                           <td className="px-6 py-3 font-bold capitalize">{day}</td>
                           <td className="px-6 py-3">
                              <div className="flex items-center gap-2">
                                 <input 
                                   type="checkbox" 
                                   checked={hours.open}
                                   onChange={(e) => updateHours(day, "open", e.target.checked)}
                                   className="w-4 h-4 accent-green-data" 
                                 />
                                 <span className="text-xs text-slate-brand">{hours.open ? 'Open' : 'Closed'}</span>
                              </div>
                           </td>
                           <td className="px-6 py-3">
                              <div className="flex items-center gap-2">
                                 <input 
                                   type="time" 
                                   value={hours.start}
                                   disabled={!hours.open}
                                   onChange={(e) => updateHours(day, "start", e.target.value)}
                                   className="bg-navy border border-dms-border rounded px-2 py-1 text-xs outline-none disabled:opacity-20" 
                                 />
                                 <span className="text-slate-brand">-</span>
                                 <input 
                                   type="time" 
                                   value={hours.end}
                                   disabled={!hours.open}
                                   onChange={(e) => updateHours(day, "end", e.target.value)}
                                   className="bg-navy border border-dms-border rounded px-2 py-1 text-xs outline-none disabled:opacity-20" 
                                 />
                              </div>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
       </div>
    </div>
  );
}

function IntegrationsTab({ settings, setSettings }: any) {
  const updateInt = (key: string, value: any) => {
    setSettings({
      ...settings,
      integrations: { ...settings.integrations, [key]: value }
    });
  };

  return (
    <div className="p-8 space-y-12">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
             <h3 className="text-xl font-bold flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-green-data" />
                Marketing & Analytics
             </h3>
             <div className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Google Analytics ID (G-XXXX)</label>
                   <input 
                     type="text" 
                     value={settings.integrations.google_analytics_id}
                     onChange={(e) => updateInt("google_analytics_id", e.target.value)}
                     className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-3 font-mono outline-none focus:ring-1 focus:ring-green-data"
                     placeholder="G-12345678"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Meta Pixel ID</label>
                   <input 
                     type="text" 
                     value={settings.integrations.meta_pixel_id}
                     onChange={(e) => updateInt("meta_pixel_id", e.target.value)}
                     className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-3 font-mono outline-none focus:ring-1 focus:ring-green-data"
                   />
                </div>
             </div>
          </div>

          <div className="space-y-8">
             <h3 className="text-xl font-bold flex items-center gap-2">
                <Plus className="w-5 h-5 text-green-data" />
                Widgets & Embeds
             </h3>
             <div className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Google Maps API Key</label>
                   <input 
                     type="password" 
                     value={settings.integrations.google_maps_key}
                     onChange={(e) => updateInt("google_maps_key", e.target.value)}
                     className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-3 font-mono outline-none focus:ring-1 focus:ring-green-data"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-brand">Live Chat Embed Code</label>
                   <textarea 
                     rows={4} 
                     value={settings.integrations.live_chat_code}
                     onChange={(e) => updateInt("live_chat_code", e.target.value)}
                     className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-3 font-mono text-xs outline-none focus:ring-1 focus:ring-green-data resize-none"
                     placeholder="Paste your Tidio, Intercom or Zendesk code here..."
                   />
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
