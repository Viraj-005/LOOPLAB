import { Link } from 'react-router-dom';

export default function ServicesProjects() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-headline text-6xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-[1.1]">
              Precision Engineering for the <span className="text-primary italic">Digital Frontier</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              LoopLab (Private) Limited delivers technology-driven solutions and software applications that address real-world problems and improve decision-making.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">Explore Services</button>
              <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-xl font-bold text-lg border border-outline-variant/15">View Our Work</button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img alt="Futuristic Tech" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLm6Q7Hvppb0Ra5IuboazCGNjYbDpn1SJnc5Sc80zAQRbH8u5UjDoB9YBYMbTDW8o9Gk1gejjavlqNSllHI4bCgM7fAfQM-Vo8cNMN1P2bK4F9UZp8iRFOdLQXF-1q-2y8diyMpN1EU_nG0Wtrqc178g2R8R8zeTFQarIvTmDaVOqvbnQVnJX7TxxlHCv5yJgXl-fVCwyV8BO0R9kOOsaK1KN4NDIYoTX8Iik7l-uNFWBWzrpCPuftCXMiRQevM3BBNCJ8Lh8_0SA" />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-panel bg-surface-variant/60 p-8 rounded-2xl shadow-xl z-20 border border-outline-variant/15 max-w-xs">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">hub</span>
              <h4 className="font-headline font-bold text-lg mb-2">Interconnected Logic</h4>
              <p className="text-sm text-on-surface-variant">Proprietary neural frameworks designed for 99.9% cycle efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold mb-4">Core Competencies</h2>
            <p className="text-on-surface-variant">Specialized technical divisions driving global impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all border border-outline-variant/10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">neurology</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold mb-4">AI Systems</h3>
                  <p className="text-on-surface-variant mb-6 leading-relaxed">Architecting autonomous neural networks and predictive modeling engines. We build cognitive infrastructures that learn from every interaction.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm font-semibold"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Machine Learning Ops (MLOps)</li>
                    <li className="flex items-center gap-3 text-sm font-semibold"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Natural Language Architectures</li>
                  </ul>
                  <button className="text-primary font-bold flex items-center gap-2 group">Deep Dive <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span></button>
                </div>
                <div className="w-full md:w-64 h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img alt="AI Research" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwHzxBPr403DF90DHdsCgj_YB9QOWXrzY9z5w2vw5_b8KIMltU8HorxmEsnZDGCYnPxYIhpazkHoFpaNGi5KkPXeY0XlnUemeWZfplm5kS5skKsvurFnVt4UbVvc3dX4ev3kQFh5C3i0WvECWzGyh5cUFulZQaXqG8LEpC5vyQv0H2Jr9JDcoKKdd00uh49bBjJAdB4zbdti4NiKpO1SlIka_cf56XuWERcfOWKZE_1Ts3CWCE_Ot0VXKYykE-VvQYwhC6CwukgF4" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-[1.5rem] text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-6 block">monitoring</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Data Analytics</h3>
              <p className="text-on-primary-container/80 mb-8 text-sm leading-relaxed">Turning raw data noise into actionable strategic signals. Real-time telemetry for enterprise-scale operations.</p>
              <div className="mt-auto pt-4 border-t border-white/20">
                <p className="text-xs font-medium uppercase tracking-widest opacity-60">Status</p>
                <p className="font-headline text-lg font-bold">14.2B Points Analyzed/Day</p>
              </div>
            </div>
            <div className="md:col-span-3 bg-surface-container-lowest p-8 rounded-[1.5rem] border border-outline-variant/10">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">code</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-on-surface-variant text-sm mb-6">Custom enterprise solutions built on high-concurrency architectures. Scalable, secure, and designed for perpetual uptime.</p>
              <div className="flex gap-2">
                {['RUST', 'GO', 'REACT'].map(t => <span key={t} className="px-3 py-1 bg-surface-container text-[10px] font-bold rounded-full">{t}</span>)}
              </div>
            </div>
            <div className="md:col-span-3 bg-surface-container-lowest p-8 rounded-[1.5rem] border border-outline-variant/10 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-tertiary">ads_click</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Digital Services</h3>
                <p className="text-on-surface-variant text-sm mb-6">Expert branding, social media marketing, and online promotion strategies designed to bridge the gap between innovation and the market.</p>
                <a className="inline-flex items-center text-primary font-bold text-sm" href="#">Our Approach <span className="material-symbols-outlined text-sm ml-1">north_east</span></a>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects: Agriculture & Social Impact */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-5xl font-bold mb-6 tracking-tight">Active Deployments</h2>
              <p className="text-on-surface-variant text-lg">From sustainable agriculture to societal equity, our projects focus on deploying advanced technology where it matters most.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 relative overflow-hidden">
                <img alt="AgriTech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtFgaXsYuZZ9b6eqLuepV57njCa69MZQ2YD21T2Pgi5IbyknQOX45inmEe5eGG_o4Cl7qjxpxgrjJv0Y0_sdGstQfoqJoTW-FKR0ObcEMRe6R5YBFFlMGnK88nt6U0HEvF0sDK8SI2rUl4SWKqKCbwaAz0_Q3QiFW2PtGoqp1_mUAkOJpF5bo0q7GUUcm1-XDbXt8OSTWKcInGWgLAKqhBF_O3nrdrr-VYlGLfiC2iZ0p3KUITEgpcZt2WrPXlk7sXldIWikqOMMw" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 glass-panel px-4 py-2 rounded-full text-xs font-bold text-primary tracking-widest uppercase">Agriculture</span>
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="font-headline text-3xl font-bold mb-4 leading-tight">AgriLoop Initiative</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Supporting farmers and small-scale producers with technology-enabled solutions, including AI-driven irrigation telemetry and yield optimization.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-headline font-bold text-2xl">40%</span>
                    <span className="text-xs text-on-surface-variant uppercase font-bold">Water Saved</span>
                  </div>
                  <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[40%]"></div>
                  </div>
                </div>
                <button className="bg-primary text-on-primary py-3 rounded-xl font-bold hover:shadow-lg transition-all">Read Case Study</button>
              </div>
            </div>
            <div className="group bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 relative overflow-hidden">
                <img alt="Social Impact" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ubjJ1S5apuyfWSGeBbA604OKrW14DJxIXr_StaBH-h8E9JCPpCQ1tYpSXeUlMIFhBp_MMdcBGILmXTp_V5Lv24Hsrcn9fI8Ss-3GP-5KiToWy27OPx719AlTEseeLSC8wR17MQOMGTQLOScgdRTiRP9OapoKL3gRZ1uxwqfQZVayvcYU9OeYyh8ssGZOdkMjrtJD2leawUvrUsmkvGhRAcyuajoBALGxSBbEf174ZFb4eQpxW43mKYNAIzZe4xzzHnGPlG2oquI" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 glass-panel px-4 py-2 rounded-full text-xs font-bold text-secondary tracking-widest uppercase">Social Impact</span>
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="font-headline text-3xl font-bold mb-4 leading-tight">Digital Equity Project</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Conducting social impact initiatives to reduce digital and educational inequality through low-latency connectivity and open-access learning nodes.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-secondary font-headline font-bold text-2xl">85k</span>
                    <span className="text-xs text-on-surface-variant uppercase font-bold">Users Connected</span>
                  </div>
                  <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[85%]"></div>
                  </div>
                </div>
                <button className="bg-secondary text-on-secondary py-3 rounded-xl font-bold hover:shadow-lg transition-all">Project Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-16 text-center text-on-primary relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">Ready to initiate the next cycle?</h2>
            <p className="text-on-primary-container/80 text-xl mb-12 max-w-2xl mx-auto">Partner with our labs to transform your infrastructure into a high-precision, AI-enabled asset.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-on-primary-container transition-colors">Start a Project</button></Link>
              <Link to="/contact"><button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">Contact Sales</button></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
