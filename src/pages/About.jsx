// src/components/sections/About.jsx
import { motion } from "framer-motion";
import ScrollFloat from '../components/common/ScrollFloat';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Design/Image Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-pop-red/10 rounded-2xl blur-xl group-hover:bg-pop-red/20 transition duration-500"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200">
               {/* Added Placeholder Image: A clean, aesthetic workspace shot */}
               <img 
                 src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop" 
                 alt="Workspace" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-pop-red font-bold uppercase tracking-widest mb-2">About Me</h2>
              <h3 className="flex flex-wrap text-4xl md:text-6xl font-black tracking-tight leading-tight">
                <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.05}
                >
                  Crafting Digital Experience with Purpose.
                </ScrollFloat>
              </h3>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              I am a 4th-year IT student at PUP Taguig, specializing in UI/UX Design and Front-end Development. My journey is driven by the goal of blending technical logic with creative aesthetics.
            </p>

            {/* Quick Stats/Interests Grid */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* UI/UX Card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group/card">
                <div className="flex items-center gap-3 mb-2">
                  {/* Figma Logo */}
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                    alt="Figma" 
                    className="w-8 h-8 group-hover/card:scale-110 transition-transform"
                  />
                  <h4 className="font-bold text-pop-red text-xl">UI/UX</h4>
                </div>
                <p className="text-sm text-slate-500">Figma, Prototyping</p>
              </div>

              {/* Dev Card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group/card">
                <div className="flex items-center gap-3 mb-2">
                  {/* React Logo */}
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                    alt="React" 
                    className="w-8 h-8 group-hover/card:spin-slow transition-transform animate-[spin_10s_linear_infinite]"
                  />
                  <h4 className="font-bold text-pop-red text-xl">Tech Stack</h4>
                </div>
                <p className="text-sm text-slate-500">React, Javascript, Tailwind, Laravel, PHP, Bootstrap</p>
              </div>

            </div>

            <p className="text-slate-600 italic border-l-4 border-pop-red pl-4">
              Currently working on PopQuery a tech start up as a UI/UX Designer and finalizing the ODRMS capstone project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}