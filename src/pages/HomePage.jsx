import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [, setIsVideoMounted] = useState(false);

  useEffect(() => {
    // Defer video loading until after the initial DOM paint 
    // to ensure the 32MB video doesn't block page load.
    const timer = setTimeout(() => {
      setIsVideoMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 md:px-8 border-b border-white/10">
        {/* Full Section Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-surface/70 mix-blend-multiply z-10 pointer-events-none"></div>
          {/* Primary color wash for a premium tech feel */}
          <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 pointer-events-none"></div>
          {/* Bottom fade out to smoothly transition to next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent pointer-events-none z-10"></div>
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70 transform scale-100 hover:scale-105 transition-transform duration-[10s] ease-out"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Particles floating over the video */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
          <ParticleBackground />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-20 flex flex-col items-center gap-6 md:gap-8 py-20 md:py-32 mt-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-white/20 shadow-2xl">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-primary-container">auto_awesome</span>
              Future-Ready Technology
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">LoopLab</span> (PVT) LTD
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl drop-shadow-md px-2">
              Developing technology-driven solutions and software applications that address real-world problems through artificial intelligence and intelligent systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4 md:mt-6">
              <Link to="/services">
                <button className="bg-primary text-on-primary px-7 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(var(--color-primary),0.5)] hover:bg-primary-container hover:text-on-primary-container hover:scale-105 transition-all outline outline-1 outline-white/20">
                  Explore Services
                </button>
              </Link>
              <Link to="/careers">
                <button className="bg-white/5 backdrop-blur-md text-white px-7 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all shadow-xl">
                  Join Our Team
                </button>
              </Link>
            </div>
            
            {/* Centered stat badge */}
            <div className="mt-6 md:mt-8 inline-flex items-center gap-3 md:gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-2xl">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-container border border-primary/30">
                  <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>cycle</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest">Global Impact</p>
                  <p className="text-base md:text-lg font-bold text-white font-headline leading-none">1.2M+ Cycles</p>
                </div>
            </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Competencies</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto md:mx-0">We bridge the gap between complex data and actionable intelligence through three primary pillars of innovation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] hover:translate-y-[-4px] transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed mb-6 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">AI Intelligence</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Neural networks and machine learning models designed for high-performance automation and predictive analysis.</p>
              <Link to="/services" className="inline-flex items-center text-primary font-bold gap-2 group/link">
                Learn more
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] hover:translate-y-[-4px] transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-secondary-fixed mb-6 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">Software Architecture</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Robust, scalable systems built on modern frameworks to ensure precision in every execution cycle.</p>
              <Link to="/services" className="inline-flex items-center text-primary font-bold gap-2 group/link">
                Learn more
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] hover:translate-y-[-4px] transition-all duration-300 group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed mb-6 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-3xl">database</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">Data Visualization</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Transforming complex datasets into ethereal, intuitive dashboards that reveal hidden industrial opportunities.</p>
              <Link to="/services" className="inline-flex items-center text-primary font-bold gap-2 group/link">
                Learn more
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section: Agriculture */}
      <section className="py-20 md:py-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 relative order-2 md:order-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="pt-0 sm:pt-12">
                  <img loading="lazy"
                    alt="Smart Farming"
                    className="rounded-3xl shadow-lg w-full h-[250px] sm:h-[400px] object-cover"
                    src="/smart_farming.png"
                  />
                </div>
                <div>
                  <img loading="lazy"
                    alt="Data Monitoring"
                    className="rounded-3xl shadow-lg w-full h-[250px] sm:h-[400px] object-cover"
                    src="/data_monitoring.png"
                  />
                </div>
              </div>
              <div className="absolute -z-10 -right-10 md:-right-20 top-20 w-40 h-40 md:w-80 md:h-80 border-[20px] md:border-[40px] border-tertiary-fixed-dim/20 rounded-full"></div>
            </div>
            <div className="flex-1 order-1 md:order-2 space-y-6 text-center md:text-left">
              <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">Industrial Impact</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface leading-tight">Revolutionizing Agriculture with Data Precision</h2>
              <p className="text-on-surface-variant text-base sm:text-lg">Our LoopLab ecosystems are currently optimizing yield cycles for over 50,000 hectares of smart farms. By integrating AI with environmental sensors, we've increased water efficiency by 40%.</p>
              <div className="space-y-4 pt-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>
                  <div>
                    <p className="font-bold text-on-surface">Predictive Harvest Timing</p>
                    <p className="text-on-surface-variant text-sm">AI models predicting optimal picking windows down to the hour.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>
                  <div>
                    <p className="font-bold text-on-surface">Resource Loop Management</p>
                    <p className="text-on-surface-variant text-sm">Automated systems that recycle nutrients within closed-loop cycles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Preview Section */}
      <section className="py-20 md:py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 tracking-tight">Become a Part of the Lab</h2>
            <p className="text-on-primary-container text-base sm:text-lg opacity-90">We are looking for engineers, designers, and scientists who are obsessed with precision and the ethereal beauty of high-end code.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 md:gap-4 shrink-0">
            <Link to="/careers" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-surface-container-lowest text-primary px-8 py-4 sm:px-10 sm:py-4 rounded-xl font-black text-lg hover:bg-on-primary-container transition-colors shadow-lg active:scale-95">
                View Open Roles
              </button>
            </Link>
            <p className="text-[10px] md:text-sm text-on-primary-container opacity-80 italic">Precision in every cycle. Growth in every career.</p>
          </div>
        </div>
      </section>
    </>
  );
}
