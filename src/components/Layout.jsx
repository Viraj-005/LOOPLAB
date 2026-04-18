import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';

export default function Layout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname === '/candidate-dashboard';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/projects', label: 'Projects' },
    { to: '/careers', label: 'Careers' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && (
        <nav className="sticky top-0 w-full z-50 bg-white/60 backdrop-blur-xl shadow-sm">
          <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-full">
            <div className="navbar-brand">
              <Link to="/">
                <img loading="lazy"
                  src={logo}
                  alt="Company Logo"
                  className="logo h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-label text-md font-bold transition-all ${isActive(link.to)
                    ? 'text-purple-700 font-bold border-b-2 border-purple-600'
                    : 'text-slate-500 hover:text-purple-600'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/careers">
                <button className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold tracking-tight hover:scale-95 duration-200 transition-all shadow-md">
                  Join Our Team
                </button>
              </Link>
            </div>

            {/* Mobile Loop Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary hover:text-purple-700 focus:outline-none group bg-primary/10 p-2 rounded-xl transition-all hover:bg-primary/20 hover:shadow-inner"
              >
                <span className={`material-symbols-outlined text-3xl transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'rotate-[360deg] scale-90' : 'hover:rotate-180 scale-100'}`}>
                  {isMobileMenuOpen ? 'close' : 'all_inclusive'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col pt-2 pb-6 px-4 gap-4 z-40">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg font-label text-md font-bold transition-all ${isActive(link.to)
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-purple-600'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 px-4">
                <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full py-3 rounded-lg bg-primary text-on-primary font-bold tracking-tight shadow-md">
                    Join Our Team
                  </button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      )}

      <main className="flex-1">{children}</main>

      {!isDashboard && (
        <footer className="w-full mt-auto py-10 bg-[#0B0514] relative overflow-hidden border-t border-white/5">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="px-6 md:px-8 max-w-7xl mx-auto font-body relative z-10 w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-10">
              {/* Brand Section */}
              <div className="space-y-5 lg:w-[35%] xl:w-[30%] lg:pr-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-white/10 shadow-lg backdrop-blur-md">
                    <span className="material-symbols-outlined text-white text-xl">all_inclusive</span>
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-white font-headline">LoopLab</span>
                </div>
                <p className="text-white/50 leading-relaxed text-sm font-medium pt-1">
                  Empowering the future with precision engineering and innovative digital solutions. We transform complex problems into beautiful, scalable realities.
                </p>
                <div className="flex gap-4 pt-2">
                  <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#0077b5] hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(0,119,181,0.4)] transition-all duration-300 border border-white/10" 
                     href="https://www.linkedin.com/company/looplab888/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     title="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between lg:w-[65%] xl:w-[70%] gap-12 sm:gap-8 pt-4 lg:pt-0">
                {/* Quick Links */}
                <div className="space-y-4">
                  <h4 className="font-bold text-white uppercase tracking-widest text-[11px] mb-4">Exploration</h4>
                  <ul className="space-y-2.5 text-left">
                    {['Services', 'Projects', 'Careers', 'Blog'].map((item) => (
                      <li key={item}>
                        <Link 
                          className="text-white/60 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2 transition-all duration-300 text-sm font-medium group" 
                          to={`/${item.toLowerCase()}`}
                        >
                          <span className="w-1 h-1 rounded-full bg-purple-500/0 group-hover:bg-purple-500 transition-colors"></span>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Links */}
                <div className="space-y-4">
                  <h4 className="font-bold text-white uppercase tracking-widest text-[11px] mb-4 text-left">Legal</h4>
                  <ul className="space-y-2.5 text-left">
                    <li>
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2 transition-all duration-300 text-sm font-medium group"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-colors"></span>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/terms-of-service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2 transition-all duration-300 text-sm font-medium group"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-colors"></span>
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 lg:max-w-xs">
                  <h4 className="font-bold text-white uppercase tracking-widest text-[11px] mb-4 text-left">Headquarters</h4>
                  <div className="space-y-4 text-sm text-white/60 font-medium text-left">
                    <p className="flex items-start gap-2.5 group">
                      <span className="material-symbols-outlined text-purple-400 text-lg mt-0.5 group-hover:scale-110 transition-transform">location_on</span>
                      <span className="leading-relaxed">No. 74/1, Neelammahara,<br/>Buthpitiya, Mahara</span>
                    </p>
                    <p className="flex items-center pt-1">
                       <Link to="/contact" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-semibold border-b border-purple-500/30 hover:border-purple-500 pb-0.5 group">
                         Reach out to our team 
                         <span className="material-symbols-outlined text-[13px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                       </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium tracking-wide">
              <p>© {new Date().getFullYear()} LoopLab (PVT) LTD. All rights reserved. Precision in every cycle.</p>
              <div className="flex gap-8">
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
