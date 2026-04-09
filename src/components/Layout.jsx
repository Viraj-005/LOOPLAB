import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';

export default function Layout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname === '/candidate-dashboard';

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
          <div className="flex justify-between items-center px-8 py-4 max-w-full">
            <div className="navbar-brand">
              <Link to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="logo"
                />
              </Link>
            </div>
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
            <div className="flex items-center gap-4">
              <Link to="/careers">
                <button className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold tracking-tight hover:scale-95 duration-200 transition-all shadow-md">
                  Join Our Team
                </button>
              </Link>
            </div>
          </div>
        </nav>
      )}

      <main className="flex-1">{children}</main>

      {!isDashboard && (
        <footer className="w-full mt-auto py-16 bg-[#0B0514] relative overflow-hidden border-t border-primary/20">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto font-body text-sm relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(97,51,128,0.5)]">
                   <span className="material-symbols-outlined text-primary text-xl">all_inclusive</span>
                </div>
                <span className="text-2xl font-bold text-white font-headline tracking-tighter">LoopLab</span>
              </div>
              <p className="text-white/60 leading-relaxed text-[13px]">© 2026 LoopLab (PVT) LTD. All rights reserved. Precision in every cycle.</p>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" to="/about">About Us</Link></li>
                <li><Link className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" to="/careers">Careers</Link></li>
                <li><a className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Global Impact</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Privacy Policy</a></li>
                <li><a className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Terms of Service</a></li>
                <li><a className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Articles of Association</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Connect</h4>
              <div className="flex gap-4">
                <a className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(97,51,128,0.6)] transition-all border border-white/10" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-secondary hover:text-white hover:shadow-[0_0_20px_rgba(60,97,132,0.6)] transition-all border border-white/10" href="#">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
              </div>
              <p className="text-xs text-white/40 font-medium pt-2 uppercase tracking-widest">No. 74/1, Neelammahara, Buthpitiya, Mahara</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
