import { Link } from 'react-router-dom';
import aiVideo from '../assets/ai.mp4';
import ParticleBackground from '../components/ParticleBackground';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-8">
        <ParticleBackground />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              Future-Ready Technology
            </div>
            <h1 className="font-headline text-6xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[1.05]">
              <span className="text-primary italic">LoopLab</span> (Private) Limited
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl">
              Developing technology-driven solutions and software applications that address real-world problems through artificial intelligence and intelligent systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <button className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:translate-y-[-2px] transition-transform">
                  Explore Services
                </button>
              </Link>
              <Link to="/careers">
                <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-xl font-bold text-lg border border-outline-variant/15 hover:bg-tertiary-fixed-dim transition-colors">
                  Join Our Team
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              >
                <source src={aiVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-8 -left-8 glass-effect bg-white/60 p-6 rounded-2xl shadow-xl max-w-xs border border-white/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cycle</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Impact</p>
                  <p className="text-lg font-bold text-on-surface font-headline leading-none">1.2M+ Cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Gradient Blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Our Core Competencies</h2>
            <p className="text-on-surface-variant max-w-2xl">We bridge the gap between complex data and actionable intelligence through three primary pillars of innovation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:translate-y-[-4px] transition-all duration-300 group">
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
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:translate-y-[-4px] transition-all duration-300 group">
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
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:translate-y-[-4px] transition-all duration-300 group">
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
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 relative order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <img
                    alt="Smart Farming"
                    className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMmFSbZ7gsXGS1rBwYYeDvOf1c6mZjhADlXZPbH3ahORBmFSPSMiPPnd02elBOsxq9RErc5T46aVWdiwyj35F8frG7Zk1aFNtxJ04jvLeJo0Te_Hi2JW7-xGPH_lJLYEZ8KRy65XRw_MNlwrHkTprlvsXrAXlud75kjb2GOMY4RzpUlMUko4Bza8BTqVx3rMlAyWF_YKBSs-Op07xPgWK0naKNJumeZ2baJ_fkHZhtzsTydSedpLOz6N1JNqDyex3NYWTIfZ9Dns"
                  />
                </div>
                <div>
                  <img
                    alt="Data Monitoring"
                    className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2NYF46EacWPBpMj4nQ4de345Am5owLp-0IwV9N7BQV_b1CzkSqz5_GNfsaFe1dIwX0E3XpSKiXosVlCF9KxsVOycHuuog1rS068y_SUdnOxAvkbrPxQWr7mlNQq1l6vRwyD4kRf-zzHeFmVFw4XGrIr_zPOLdMmp_EL3mkdVvoxqcZBV9xX0qDX8TTDeWQxe5UJ0pk8_uxf8YlzwOHinRrZQUMqdsmHVFiUJPiYvQkpyRRJfyzNmoBC5DRsBLPWIrtzoZftGVvc"
                  />
                </div>
              </div>
              <div className="absolute -z-10 -right-20 top-20 w-80 h-80 border-[40px] border-tertiary-fixed-dim/20 rounded-full"></div>
            </div>
            <div className="flex-1 order-1 md:order-2 space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Industrial Impact</span>
              <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface leading-tight">Revolutionizing Agriculture with Data Precision</h2>
              <p className="text-on-surface-variant text-lg">Our LoopLab ecosystems are currently optimizing yield cycles for over 50,000 hectares of smart farms. By integrating AI with environmental sensors, we've increased water efficiency by 40%.</p>
              <div className="space-y-4 pt-4">
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
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold mb-4 tracking-tight">Become a Part of the Lab</h2>
            <p className="text-on-primary-container text-lg">We are looking for engineers, designers, and scientists who are obsessed with precision and the ethereal beauty of high-end code.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <Link to="/careers">
              <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-xl font-black text-lg hover:bg-on-primary-container transition-colors shadow-lg">
                View Open Roles
              </button>
            </Link>
            <p className="text-sm text-on-primary-container opacity-80 italic">Precision in every cycle. Growth in every career.</p>
          </div>
        </div>
      </section>
    </>
  );
}
