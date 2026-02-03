// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-pop-red flex items-center pt-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
        
        {/* Left Side: Text Content */}
        <div className="text-white z-10 space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
            Hi, I’m Martin
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">
            UI/UX Designer & Front-end Developer
          </p>
          <p className="text-lg max-w-md leading-relaxed opacity-80">
            I craft intuitive interfaces and build dynamic websites to create something amazing.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-pop-red transition-all">
              View My Work
            </button>
          </div>
        </div>

        {/* Right Side: Image/Avatar with Hover Effect */}
        <div className="relative flex justify-center md:justify-end group cursor-pointer">
          
          {/* The "Hi!" Text Pop-up */}
        <div className="absolute top-10 right-10 md:right-0 bg-white text-pop-red px-6 py-2 rounded-full font-black text-2xl shadow-2xl 
          opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-12 transition-all duration-300 z-20">
          Hi! 👋
        </div>

          {/* The Avatar Image */}
          <img 
            src="/images/figure.png" 
            alt="Martin Avatar" 
            className="w-full max-w-[450px] h-auto object-contain drop-shadow-2xl 
            transform group-hover:scale-105 transition-transform duration-500 z-10"
          />
          
          {/* Optional: Design Circle Background */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 group-hover:bg-white/20 transition-colors"></div>
        </div>

      </div>
    </section>
  );
}