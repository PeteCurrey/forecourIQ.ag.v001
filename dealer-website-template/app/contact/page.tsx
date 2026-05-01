import { dealerAPI } from "@/lib/api";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default async function ContactPage() {
  const dealership = await dealerAPI.getDealership();
  const { seo } = dealership.settings;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-syne font-bold tracking-tight">Contact Us</h1>
          <p className="text-xl text-white/60">Have a question? We'd love to hear from you. Use the form below or find our contact details.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                     <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1">Visit Our Forecourt</h4>
                     <p className="text-sm text-white/60 leading-relaxed">{seo.address}</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1">Call Us</h4>
                     <p className="text-xl font-bold">{seo.phone}</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1">Email Us</h4>
                     <p className="text-sm text-white/60">{seo.email}</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                     <Clock className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1">Opening Hours</h4>
                     <p className="text-sm text-white/60">Mon-Fri: 09:00 - 18:00</p>
                     <p className="text-sm text-white/60">Sat: 09:00 - 17:00</p>
                  </div>
               </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="aspect-video bg-surface rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center text-white/10 font-black text-2xl uppercase italic">
               Google Map
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 lg:p-12 rounded-3xl border border-white/5">
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">First Name</label>
                      <input type="text" className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Last Name</label>
                      <input type="text" className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary" placeholder="Doe" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                   <input type="email" className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                   <input type="tel" className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary" placeholder="07123 456 789" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                   <textarea rows={4} className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-primary w-full py-4">
                   <Send className="w-4 h-4" />
                   Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
