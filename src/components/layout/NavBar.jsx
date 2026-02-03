import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-pop-red text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Left Section: Logo */}
        <div className="flex justify-start">
          <span className="text-2xl font-extrabold tracking-tight uppercase">
            Martin
          </span>
        </div>

        {/* Center Section: Links (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center gap-10 text-sm font-semibold uppercase tracking-widest">
          <a href="#home" className="hover:text-slate-200 transition-all">Home</a>
          <a href="#about" className="hover:text-slate-200 transition-all">About</a>
          <a href="#projects" className="hover:text-slate-200 transition-all">Projects</a>
        </div>

        {/* Right Section: Button */}
        <div className="hidden md:flex justify-end">
          {/* Wrap the button in an anchor tag pointing to your footer's ID */}
          <a href="#footer">
            <button className="px-5 py-2 border-2 border-white rounded-full font-bold text-xs uppercase hover:bg-white hover:text-pop-red transition-all active:scale-95">
              Let's Talk
            </button>
          </a>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMenu} className="p-2 z-50">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-pop-red transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 text-2xl font-bold uppercase tracking-widest`}>
        <a href="#home" onClick={toggleMenu} className="hover:text-slate-200 transition-all">Home</a>
        <a href="#about" onClick={toggleMenu} className="hover:text-slate-200 transition-all">About</a>
        <a href="#projects" onClick={toggleMenu} className="hover:text-slate-200 transition-all">Projects</a>
        <button onClick={toggleMenu} className="mt-4 px-8 py-3 border-2 border-white rounded-full text-lg">
          Let's Talk
        </button>
      </div>
    </nav>
  );
}