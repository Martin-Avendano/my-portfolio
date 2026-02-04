// src/components/layout/Footer.jsx
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-pop-red text-white pt-24 pb-12 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 mb-24">
          
          {/* 1. Left Block: Brand, Tagline, Social Icons */}
          <div className="max-w-sm space-y-8">
            <div>
              <span className="text-4xl md:text-5xl font-black tracking-tighter uppercase block">
                MARTIN<span className="text-white/30">.</span>
              </span>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                Crafting digital experiences that blend technical logic with creative aesthetics.
              </p>
            </div>

            {/* Social Icons Row (Matching the reference style) */}
            <div className="flex gap-4">
              <a 
                href="mailto:martinavendano205@gmail.com" 
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white hover:text-pop-red transition-all border border-white/10"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/martin-avendaño-86785b330" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white hover:text-pop-red transition-all border border-white/10"
              >
                <Linkedin size={20} />
              </a>
               {/* Phone Icon (Non-clickable for display) */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <Phone size={20} />
              </div>
            </div>
          </div>

          {/* 2. Right Block: Two Columns of Links */}
          <div className="flex gap-16 md:gap-32">
            
            {/* Column 1: Navigation */}
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-lg">Explore</h4>
              <nav className="flex flex-col gap-4 text-white/70">
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </nav>
            </div>

            {/* Column 2: Contact Info Text */}
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-lg">Get in touch</h4>
              <div className="flex flex-col gap-4 text-white/70">
                <p>martinavendano205@gmail.com</p>
                <p>+63 960 441 9440</p>
                <p>Taguig City, Philippines</p>
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM SECTION (Separator & 3-Column Layout) --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-white/40">
          
          {/* Left: Status Pill */}
          <div className="flex items-center gap-3">
             <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-white">Ready for Internship • Feb 09</span>
          </div>

          {/* Center: Designer Credit */}
          <div className="text-center md:text-left">
            Visioned & Crafted by Martin Avendano
          </div>

          {/* Right: Copyright */}
          <div className="text-right">
            © {currentYear} All right reserved
          </div>

        </div>

      </div>
    </footer>
  );
}