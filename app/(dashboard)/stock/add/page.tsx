"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, Search, Check, Camera, Upload, AlertCircle } from "lucide-react";

export default function AddVehiclePage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => step > 1 ? setStep(step - 1) : router.back()}
          className="p-2 hover:bg-white/5 rounded-lg border border-dms-border text-slate-brand hover:text-white transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold mb-1">Add New Vehicle</h1>
          <p className="text-slate-brand">Step {step} of 5 · {
            step === 1 ? "Registration Lookup" :
            step === 2 ? "Vehicle Details" :
            step === 3 ? "Pricing & Costs" :
            step === 4 ? "Photos & Media" : "Publishing"
          }</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 h-1.5 w-full bg-dms-surface rounded-full overflow-hidden border border-dms-border">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`flex-1 transition-all duration-500 ${i <= step ? "bg-green-data" : "bg-transparent"}`} />
        ))}
      </div>

      <div className="bg-dms-surface rounded-2xl border border-dms-border p-8 lg:p-12 min-h-[500px] flex flex-col">
        {step === 1 && <Step1Lookup onNext={() => setStep(2)} />}
        {step === 2 && <Step2Details onNext={() => setStep(3)} />}
        {step === 3 && <Step3Pricing onNext={() => setStep(4)} />}
        {step === 4 && <Step4Photos onNext={() => setStep(5)} />}
        {step === 5 && <Step5Publishing />}
      </div>
    </div>
  );
}

function Step1Lookup({ onNext }: { onNext: () => void }) {
  const [reg, setReg] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleLookup = async () => {
    setLoading(true);
    // Mocking DVLA API response
    setTimeout(() => {
      setResult({
        make: "BMW",
        model: "3 Series",
        colour: "Portimao Blue",
        year: 2021,
        fuel: "Diesel",
        mot: "2025-10-14"
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold mb-8">Enter Registration Plate</h2>
      
      <div className="relative w-full max-w-md mb-12 group">
        <div className="bg-yellow-400 p-2 rounded shadow-2xl flex items-center gap-4 border-2 border-black">
           <div className="w-12 h-full flex flex-col justify-between items-center py-2 border-r border-black/20">
              <div className="w-4 h-4 rounded-full border border-black/40" />
              <span className="text-[10px] font-black text-black/60">UK</span>
           </div>
           <input 
             value={reg}
             onChange={(e) => setReg(e.target.value.toUpperCase())}
             placeholder="REG MARK"
             className="bg-transparent border-0 text-5xl font-black font-mono text-black w-full text-center focus:ring-0 placeholder:text-black/10 uppercase"
           />
        </div>
        <div className="absolute -inset-1 bg-yellow-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      </div>

      {!result ? (
        <button 
          onClick={handleLookup}
          disabled={!reg || loading}
          className="btn-primary w-full max-w-sm flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? "SEARCHING DVLA..." : "LOOK UP VEHICLE"}
          <Search className="w-5 h-5" />
        </button>
      ) : (
        <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div className="grid grid-cols-2 gap-4 p-6 bg-white/5 border border-white/5 rounded-xl text-left">
              <div>
                <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest mb-1">Make / Model</p>
                <p className="text-lg font-bold">{result.make} {result.model}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest mb-1">Colour / Fuel</p>
                <p className="text-lg font-bold">{result.colour} · {result.fuel}</p>
              </div>
           </div>
           <button onClick={onNext} className="btn-primary w-full flex items-center justify-center gap-2">
             CONFIRM & PROCEED <ChevronRight className="w-5 h-5" />
           </button>
        </div>
      )}
    </div>
  );
}

function Step2Details({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Make", value: "BMW" },
          { label: "Model", value: "3 Series" },
          { label: "Variant", value: "320d M Sport" },
          { label: "Year", value: "2021" },
          { label: "Mileage", placeholder: "e.g. 24500" },
          { label: "Transmission", value: "Automatic" },
          { label: "Body Type", value: "Saloon" },
          { label: "Fuel Type", value: "Diesel" },
          { label: "Engine Size", value: "2.0L" },
        ].map((field) => (
          <div key={field.label} className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">{field.label}</label>
            <input 
              defaultValue={field.value} 
              placeholder={field.placeholder}
              className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-green-data outline-none"
            />
          </div>
        ))}
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">Description</label>
        <textarea rows={5} className="w-full bg-dms-bg border border-dms-border rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-green-data outline-none" />
      </div>

      <div className="flex justify-end pt-8">
        <button onClick={onNext} className="btn-primary flex items-center gap-2">
          CONTINUE TO PRICING <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function Step3Pricing({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
          {[
            { label: "Purchase Price", prefix: "£", value: "19800" },
            { label: "Asking Price", prefix: "£", value: "24950" },
            { label: "Prep Cost", prefix: "£", value: "450" },
            { label: "Transport Cost", prefix: "£", value: "120" },
          ].map((field) => (
            <div key={field.label} className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-brand">{field.label}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-brand font-mono">{field.prefix}</span>
                <input 
                  defaultValue={field.value}
                  className="w-full bg-dms-bg border border-dms-border rounded-lg pl-10 pr-4 py-3 text-sm font-mono focus:ring-1 focus:ring-green-data outline-none"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-green-data/5 border border-green-data/20 p-8 rounded-2xl flex flex-col justify-center text-center">
           <p className="text-[10px] text-green-data font-bold uppercase tracking-widest mb-4">LIVE MARGIN ESTIMATE</p>
           <p className="text-5xl font-mono font-bold text-green-data mb-2">£4,580</p>
           <p className="text-sm font-bold text-green-data/60">18.4% Gross Margin</p>
           <div className="mt-8 pt-8 border-t border-green-data/10 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-slate-brand">Trade Value</span>
                <span className="font-mono">£20,100</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-brand">Retail Value (Avg)</span>
                <span className="font-mono">£25,400</span>
              </div>
           </div>
        </div>
      </div>

      <div className="flex justify-end pt-8">
        <button onClick={onNext} className="btn-primary flex items-center gap-2">
          CONTINUE TO PHOTOS <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function Step4Photos({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-2 border-dashed border-dms-border rounded-2xl p-16 flex flex-col items-center justify-center text-center hover:border-green-data/50 transition-all group cursor-pointer">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Upload className="w-8 h-8 text-slate-brand group-hover:text-green-data" />
        </div>
        <h3 className="text-xl font-bold mb-2">Drag and drop vehicle photos</h3>
        <p className="text-slate-brand mb-8 max-w-sm">Upload up to 40 high-resolution images. Minimum 1 required for publishing.</p>
        <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
          SELECT FILES
        </button>
      </div>

      <div className="flex justify-end pt-8">
        <button onClick={onNext} className="btn-primary flex items-center gap-2">
          CONTINUE TO PUBLISHING <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function Step5Publishing() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center mb-12">Select Publishing Channels</h2>
        
        {[
          { name: "AutoTrader", status: "Connected", live: false },
          { name: "eBay Motors", status: "Connected", live: false },
          { name: "CarGurus", status: "Not Connected", disabled: true },
          { name: "Motors.co.uk", status: "Connected", live: false },
        ].map((p) => (
          <div key={p.name} className={`flex items-center justify-between p-6 rounded-xl border ${p.disabled ? 'opacity-50 border-dms-border' : 'border-white/5 bg-white/5'}`}>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-navy flex items-center justify-center text-xs font-black">
                  {p.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{p.name}</h4>
                  <p className="text-[10px] text-slate-brand font-bold uppercase tracking-widest">{p.status}</p>
                </div>
             </div>
             <button disabled={p.disabled} className={`w-14 h-8 rounded-full relative p-1 transition-colors ${p.live ? 'bg-green-data' : 'bg-white/10'}`}>
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${p.live ? 'translate-x-6' : 'translate-x-0'}`} />
             </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pt-12">
        <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
          SAVE AS DRAFT
        </button>
        <button className="btn-primary px-10 py-4">
          PUBLISH TO FORECOURT
        </button>
      </div>
    </div>
  );
}
