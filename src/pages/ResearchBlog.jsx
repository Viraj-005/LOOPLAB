import { Link } from 'react-router-dom';

export default function ResearchBlog() {
  const articles = [
    { title: 'Sentience or Simulation? The Neural Turing Test', category: 'AI', date: 'MARCH 14, 2024', read: '8 MIN READ', desc: 'Investigating the boundary between complex pattern matching and true cognitive emergence in large scale models.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHUKqOILSjl27HEIhdm3WvEMm6NLPDQMwtdanQ2d80c2BXgsYF87VK3zvWBCpuH-D_lp8e2qtRnB9VYHkvefJh-4Bhwc6JcTyhdTbOjmD74PKprFVH7f5PVoYPaCRJAJGT2NaktLXJYjuvaEr-wmyZC75IAtz12TtjJu1TJU8Iow8g3mwD382xEOI39vEuGKTcUBjytflbTTJNUKi3sEk9vKM39PlLwBdocWbjPc3GVsLtvTkvthT-zh8vWil6WIWYc0ISnBZr-1A' },
    { title: 'The Zero-Waste Datacenter Myth', category: 'Sustainability', date: 'MARCH 09, 2024', read: '5 MIN READ', desc: 'Analyzing the environmental footprint of global compute and how we are building the first circular economy for heat waste.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNVyIPT8T-_Olru16b07EhM_Oq4VoYhR94jg6d2j3uYP1AxfTjjmhv92mPNEFTnH1UD5G2umubiNRvhQBqCJv5iFdQDgyjQvEae8_3I8gAcG7a99tvg1Ws6JyJiVDRZwDos6K836Vc1ESegEstASz16WV8TFgCTllG3tZG4pa9TqH7bZsrrXyH7vn88oB78CB8ZYCvTsj_hhpRInPCgLaqKmspXyoQb569Ro36u4SijoKS2b1R7_K5m_YVh-hhwaXNJV2FZ_WZ9vc' },
    { title: 'Etherealism: The New Era of Human-Centric UI', category: 'Tech Trends', date: 'MARCH 02, 2024', read: '15 MIN READ', desc: 'Why the next decade of software will be defined by depth, tactility, and intentional asymmetry.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGOo1YrZCtJmzh7GjMcY73shqIdWee4zWoBK-93i9SDxzg8VwWmu6JB3yN9RMmxqkPenejGmS50fP3bmiZIXGUU6E-yVhI4O5DjvXQZrB2k1bwAEfaP-QN3Um93uJi79-JvC0DRBh9bVLN2NlDRPGxN1HA_3KYR4tJ3evmJRkjXJEltDABdq-eQYEG2IYf4mv3XOTTC0usMLy9euXokVmW7ToMqYYRMwH-b6ho5zs4DObzg-Eve7_T07TKQoJQrkEAtQUBFXeG4zo' },
    { title: 'Mechanical Empathy: Designing Robot Ethics', category: 'AI', date: 'FEB 28, 2024', read: '10 MIN READ', desc: 'Exploring how we embed moral frameworks into low-latency robotic decision engines.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb4vDwOStRmhDXUUVPU-eQi-JmvIxmimozubamQaFEz-qQR5Afg2OVhihFT5BYtZSDlaaqNSeJxca9AaX0TqIlWunYPqIAUgkPoJd88JLCNd6RhfZ0sCEzYLQ9H6wgDpyzk7kwaPH1c7AZfS9oTjvsykYALmejEPBi2ZbMjJbi3F6Om1PrAKgHZU7KRst3cAjC7s0Li8V9PuO_SUfftqK9BYRYLBVTS71zTfDKmn2CcYjVy3eaB4VNwQGMZMldbPeu11KuYMTWRLc' },
  ];

  return (
    <main className="pt-24 pb-20 px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20 relative overflow-hidden rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[500px]">
          <div className="md:col-span-7 z-10">
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-on-background mb-6">
              Insights &amp; <br /><span className="text-primary italic">Innovations</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md font-light leading-relaxed mb-8">
              Exploring the convergence of artificial intelligence, planetary sustainability, and the digital frontier.
            </p>
            <div className="flex gap-4">
              <button className="kinetic-gradient text-on-primary px-8 py-4 rounded-xl font-medium shadow-xl shadow-primary/20">Latest Research</button>
              <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-medium hover:bg-surface-container-highest transition-colors">Global Trends</button>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="w-full aspect-square rounded-full kinetic-gradient opacity-10 blur-3xl absolute -top-20 -right-20"></div>
            <img loading="lazy"
              alt="Neural network visualization"
              className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCb74IhWiFTMD_anAfQ94EmWeK61bj7rt_8Juzx61Vv2tJr-GSPy6KPElzB-4EtCWRyMXNlVskEK7lORz3366tRh5fiIu6amvKnRw8QR3dr0PgbhzZJmF606eE_imwQfeyZqTOtneJTXs0jjf2-hPLLUTm8Heeo0ssedJyPyNCJrIrVrDsmYwde_jDgLbAFwpU44tGarAYsY1LGrQKFSDJ6BnzAkg7u1GDRV3qdX54UArXdB-eEGW5cQ4dveewry1w6wFKZ1dzTS4"
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="mb-20">
        <h2 className="font-headline text-xs font-bold tracking-widest uppercase text-primary mb-6">Featured Research</h2>
        <div className="group relative bg-surface-container-low rounded-xl overflow-hidden flex flex-col md:flex-row items-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
          <div className="w-full md:w-3/5 h-[450px] overflow-hidden">
            <img loading="lazy"
              alt="Aerial view of sustainable city"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArU2Tomqa-VZpCRkdbG77D-9ilhVIMvBWVirv8hQMNDE373yMLnVXGyqdP7HHfvKRgQlfxHasFX7wyMvZ1yh6wEgRMYlv3Gsb5kWTtIoLlbosEUlxTLYAcasWH7ol-i3p_oq-AeekOfAM_D9FenzGodxKDMkpbhB4dBSoNs98itgss64UBeQDi46JDeAIgqxS7lkcHnQZQfRnI8-tNZ6NFNW64ArHIuD6eTf1XAoFDHpHwohzmf1tPJYpgz4s1PL88vnVRtDl7_9M"
            />
          </div>
          <div className="w-full md:w-2/5 p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">Sustainability</span>
              <span className="text-tertiary text-xs">12 Min Read</span>
            </div>
            <h3 className="font-headline text-4xl font-bold text-on-background mb-6 leading-tight">
              The Loop Synthesis: How AI manages Carbon Cycles
            </h3>
            <p className="text-on-surface-variant mb-8 line-clamp-3">
              A deep dive into our latest laboratory results showing a 40% increase in sequestration efficiency through algorithmic optimization of biological reactors.
            </p>
            <div className="flex items-center gap-4">
              <img loading="lazy"
                alt="Researcher profile"
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEUOnLnZHlEN0QdqvKrY2Wi2EsB9K4sJQT9jR3sLDTy0jFwFJ9P6z-a-dTlPmzC2K5AsmJNTR-DLdRyZ-f1437yANwXW7JiNOtTqFLrsa_YYzR1g347eOvfbTpuZISoUfY7j_hZne79QuPMbjmtOH2ZMbz7EsYdkWrqz5wb4WhX5Vpi3bJN2koh5ogOXeWytc7EJ7ndwE0SEvg3THoomUktAnMI3RCm1QmaMdDMRKsBYEJnJfBoT0WwmBugCvtncwioqWBXSnc_Dk"
              />
              <div>
                <p className="text-sm font-bold text-on-background">Dr. Elena Vance</p>
                <p className="text-xs text-tertiary">Lead Researcher, Bio-Tech Division</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-sm font-medium">All Posts</button>
          {['AI & Robotics', 'Sustainability', 'Tech Trends', 'Ethical Design'].map((cat) => (
            <button key={cat} className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface text-sm font-medium hover:bg-surface-container-highest transition-colors whitespace-nowrap">{cat}</button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary" style={{ fontSize: '20px' }}>search</span>
          <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 font-label text-sm" placeholder="Filter by keyword..." type="text" />
        </div>
      </div>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {articles.map((article) => (
          <div key={article.title} className="group bg-surface-container-lowest rounded-xl p-4 transition-all hover:bg-surface-container-low border border-transparent hover:border-outline-variant/10">
            <div className="relative mb-6 rounded-lg overflow-hidden h-56">
              <img loading="lazy" alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={article.img} />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 glass-effect text-white text-[10px] font-bold rounded-full uppercase tracking-widest bg-black/20">{article.category}</span>
              </div>
            </div>
            <p className="text-xs text-tertiary mb-3">{article.date} • {article.read}</p>
            <h4 className="font-headline text-xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors">{article.title}</h4>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">{article.desc}</p>
            <a className="inline-flex items-center text-primary text-sm font-bold gap-2" href="#">
              Read Report <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>
        ))}

        {/* Wide card (Quantum) */}
        <div className="group md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center border border-transparent hover:border-outline-variant/20 transition-all order-first md:order-none">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>science</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Lab Notes</span>
            </div>
            <h4 className="font-headline text-3xl font-bold mb-4 leading-tight">Quantum Entanglement in Cloud Architecture</h4>
            <p className="text-on-surface-variant mb-6">Our engineering team has achieved a breakthrough in data synchronization using quantum-inspired tunneling protocols.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] text-white font-bold">JD</div>
              <span className="text-sm text-tertiary">Julian Draxler, Systems Architect</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full min-h-[250px] rounded-lg overflow-hidden order-1 md:order-2">
            <img loading="lazy"
              alt="Server room bokeh"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAimQZ7s1QNTbwmwKmC-BnMK2_rg0RplAxHqs_VJRry4wOQPHkZk6AMippvWPqkyHzUdvFyNYhZHV4aSACxh_Yb3emWFBBzjATS4T6JLMu4vv5dbmugEZ49SQlu1JK3R86YpkYyfJJRqWyDXVtk3B-5BHhJrQkv3c0rlMV_fGUUzt_xGq3nkVFhHpRUmmEsFOH_3p94Y0-mMYwmSTC1Kb1FRDW8EPj7sM8iK7ZuqlId0rIjCrkOs3qrmtttR4BTHGHeeILsDTkKes"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-container rounded-xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 border-8 border-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="relative z-10 max-w-lg">
          <h2 className="font-headline text-4xl font-bold text-white mb-4">Stay at the edge of innovation.</h2>
          <p className="text-primary-fixed-dim text-lg">Weekly briefings on the research, philosophy, and technology shaping our tomorrow.</p>
        </div>
        <div className="relative z-10 w-full md:w-auto">
          <form className="flex flex-col sm:flex-row gap-3">
            <input className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40 outline-none w-full sm:w-80" placeholder="Your work email" type="email" />
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all active:scale-95" type="submit">Subscribe</button>
          </form>
          <p className="text-xs text-primary-fixed-dim mt-4 opacity-60">No spam. Only deep technical insights once a week.</p>
        </div>
      </section>
    </main>
  );
}
