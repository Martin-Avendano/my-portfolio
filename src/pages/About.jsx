// src/components/sections/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Design/Image Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-pop-red/10 rounded-2xl blur-xl group-hover:bg-pop-red/20 transition duration-500"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200">
               {/* Replace with a professional photo or a shot of your Figma designs */}
              <div className="flex items-center justify-center h-full bg-slate-100 text-slate-400 font-bold uppercase tracking-widest">
                Portfolio Image
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-pop-red font-bold uppercase tracking-widest mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Crafting Digital Experiences with Purpose.
              </h3>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              I am a 4th-year IT student at PUP Taguig, specializing in UI/UX Design and Front-end Development. My journey is driven by the goal of blending technical logic with creative aesthetics.
            </p>

            {/* Quick Stats/Interests Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-pop-red text-xl">UI/UX</h4>
                <p className="text-sm text-slate-500">Figma, Prototyping</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-pop-red text-xl">Dev</h4>
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