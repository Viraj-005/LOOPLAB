import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';

export default function Layout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname === '/candidate-dashboard';

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Projects' },
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
        <footer className="w-full mt-auto py-12 bg-slate-100 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 max-w-7xl mx-auto font-body text-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-slate-900 font-headline tracking-tighter">LoopLab</span>
              </div>
              <p className="text-slate-500">© 2026 LoopLab (Private) Limited. All rights reserved. Precision in every cycle.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface">Company</h4>
              <ul className="space-y-2">
                <li><Link className="text-slate-500 hover:text-purple-500 transition-colors" to="/about">About Us</Link></li>
                <li><Link className="text-slate-500 hover:text-purple-500 transition-colors" to="/careers">Careers</Link></li>
                <li><a className="text-slate-500 hover:text-purple-500 transition-colors" href="#">Global Impact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface">Legal</h4>
              <ul className="space-y-2">
                <li><a className="text-slate-500 hover:text-purple-500 transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="text-slate-500 hover:text-purple-500 transition-colors" href="#">Terms of Service</a></li>
                <li><a className="text-slate-500 hover:text-purple-500 transition-colors" href="#">Articles of Association</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface">Connect</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-on-primary transition-all" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-on-primary transition-all" href="#">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
              </div>
              <p className="text-xs text-slate-400 font-medium">Headquarters: Colombo, Sri Lanka</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
