// src/components/sections/Projects.jsx
export default function Projects() {
  const myProjects = [
    {
      title: "PopQuery",
      category: "UI/UX Design & Branding",
      desc: "A startup website for an IT industry brand focusing on clean data queries.",
      tag: "Ongoing"
    },
    {
      title: "ODRMS",
      category: "System Analysis & UI/UX",
      desc: "Online Document Request and Management System for academic institutions.",
      tag: "Capstone"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-pop-red font-bold uppercase tracking-[0.2em] mb-2 text-sm">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {myProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#1e293b] rounded-3xl p-10 border border-slate-800 hover:border-pop-red/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(217,34,0,0.15)]"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1 bg-pop-red text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                  {project.tag}
                </span>
              </div>
              
              <h4 className="text-3xl font-black mb-2 group-hover:text-pop-red transition-colors duration-300">
                {project.title}
              </h4>
              
              <p className="text-slate-400 font-bold mb-4 text-xs uppercase tracking-widest">
                {project.category}
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-10 text-lg">
                {project.desc}
              </p>
              
              <button className="flex items-center gap-3 font-black text-sm uppercase tracking-widest text-white group-hover:text-pop-red transition-all">
                View Project Details 
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}