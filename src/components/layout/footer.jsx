// src/components/layout/Footer.jsx
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#D92200] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section: Brand, Contacts, Nav */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-12">
          
          {/* 1. Brand Identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-3xl font-black tracking-tighter uppercase">
              MARTIN<span className="opacity-50">.</span>
            </span>
            <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
              UI/UX Designer • PUP Taguig
            </p>
          </div>

          {/* 2. Connect Section - Cleanly Stacked & Aligned */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* Gmail */}
            <a href="mailto:martinavendano205@gmail.com" className="group flex items-center gap-4 transition-all">
              <div className="bg-white p-2.5 rounded-xl shadow-lg group-hover:rotate-6 transition-transform">
                <Mail size={18} className="text-[#D92200]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Gmail</span>
                <span className="text-sm font-bold">martinavendano205@gmail.com</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/martin-avendaño-86785b330" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-4 transition-all"
            >
              <div className="bg-white p-2.5 rounded-xl shadow-lg group-hover:rotate-6 transition-transform">
                <Linkedin size={18} className="text-[#0077B5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">LinkedIn</span>
                <span className="text-sm font-bold">Martin Avendano</span>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-4 transition-all">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <Phone size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Contact</span>
                <span className="text-sm font-bold">+63 960 441 9440</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Nav, Copyright, Status */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Navigation */}
          <nav className="flex gap-8 text-[11px] font-black uppercase tracking-widest">
            <a href="#about" className="hover:text-black/30 transition-colors">About</a>
            <a href="#projects" className="hover:text-black/30 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-black/30 transition-colors">Contact</a>
          </nav>

          {/* Status & Year */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2.5 bg-black/10 px-4 py-2 rounded-full border border-white/5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-tighter">
                Ready for Internship • Feb 09
              </span>
            </div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
              © {currentYear} MARTIN AVENDANO
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}