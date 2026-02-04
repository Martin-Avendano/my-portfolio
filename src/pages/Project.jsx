import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react'; // Make sure to install: npm install lucide-react
import ScrollFloat from '../components/common/ScrollFloat';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const myProjects = [
    {
      title: "PopQuery",
      category: "UI/UX Design & Branding",
      tag: "Ongoing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      desc: "A startup website for an IT industry brand focusing on clean data queries.",
      // Extra details for the popup
      longDescription: "PopQuery is a comprehensive branding and web solution designed for a data-centric startup. The project focuses on translating complex data structures into an intuitive visual language. The design prioritizes clarity, trust, and modern aesthetics to appeal to enterprise clients.",
      technologies: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
      features: [
        "Modern, dark-mode first UI design",
        "Interactive data visualization components",
        "Responsive landing page architecture",
        "Brand identity system creation"
      ]
    },
    {
      title: "ODRMS",
      category: "System Analysis & UI/UX",
      tag: "Capstone",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      desc: "Online Document Request and Management System for academic institutions.",
      // Extra details for the popup
      longDescription: "ODRMS addresses the inefficiency of manual document processing in academic institutions. This system streamlines the request, tracking, and release of student records, significantly reducing wait times and administrative workload.",
      technologies: ["PHP", "MySQL", "Bootstrap", "Laravel", "Figma", "PWA"],
      features: [
        "Student & Admin Portals",
        "Real-time request tracking status",
        "Automated email notifications",
        "Secure document verification system"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-[#0f172a] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-pop-red font-bold uppercase tracking-[0.2em] mb-2 text-sm">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.05}
            >
              Featured Projects
            </ScrollFloat>
          </h3>
        </div>

        <div className="flex flex-col gap-20">
          {myProjects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
              
              {/* --- LEFT SIDE: Picture --- */}
              <div 
                className="relative rounded-3xl overflow-hidden border border-slate-800 group-hover:border-pop-red/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(217,34,0,0.15)] aspect-video cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* --- RIGHT SIDE: Description --- */}
              <div className="flex flex-col items-start space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-pop-red font-black text-sm uppercase tracking-widest">
                      {project.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-black group-hover:text-pop-red transition-colors duration-300">
                    {project.title}
                  </h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.desc}
                </p>
                
                {/* BUTTON: Now opens the Modal */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-3 font-black text-sm uppercase tracking-widest text-white group-hover:text-pop-red transition-all pt-2"
                >
                  View Project Details 
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL POPUP --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)} // Close when clicking background
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#1e293b] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking card
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-pop-red transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent z-10" />
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 md:left-10 z-20">
                  <span className="px-3 py-1 bg-pop-red text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-2 inline-block">
                    {selectedProject.tag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 space-y-8">
                
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">About the Project</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Two Columns: Tech & Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-bold text-slate-300 uppercase tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                          <CheckCircle2 size={16} className="text-pop-red mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}