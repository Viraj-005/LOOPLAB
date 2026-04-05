import { Link } from 'react-router-dom';

const leaders = [
  {
    name: 'S. H. Dinusha Madhujith', role: 'Chief Executive Officer & Founder',
    bio: 'Visionary leader driving LoopLab\'s mission to solve real-world problems through technology-driven solutions and ethical software architecture.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmfwkVdLVcA9oslGzO4J8KlT6otnB-3upSIqrP-5a96DzUkQIairPZA9hCBcYygX-sNrj5UiEOFbqXOVmvKLQj8x-2TH995fW5Tc2_JaETlq2AqjJkyosOiQpFspd4bYh3mv23QmWczcnhOwTA-gkyJI4k9llrQb6xejbs6KwFwPz6WYa0iWlo_nVrBYTxa5InBN6xK9zWxM1JCk0LEZItnemUxSHuDeEG41hhxQaz3hwW14fb2Mkzkt4jwtJo3W_Qj9obH9KgJRM',
  },
  {
    name: 'W. Pawani Nimasha', role: 'Director of Social Impact & Founder',
    bio: 'Dedicated to reducing digital inequality and supporting small-scale producers with innovative social media branding and technology-enabled solutions.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnSGjZ7kZaIA4-UZO3NoWlDMr2Ty73Qu0aEXl1bRtJGnfuqdMzWQ2HjUJATz6Yxm6kCEkFoA4Z9Q2XPlvn2hxoHhHx8XETDW0Z8LHLiRTmWny7C2T5tCAn0X2gUoPKw629xUEZhTW9rKzgoleXk-vmJ0tvfKBKKmwFBsUd-TV4MmSc4ueXmdGT8Z8eLbPJ61jOz0cxGa8Ro3VjTjw5VmNR_GMMbcDYs-yQnCqLnE_iHP8RxJH6yw0ZJPJq0jHBgFQyHBEPfVUQlwo',
  },
  {
    name: 'I. A. Viraj Piumal Sangeeth', role: 'Chief Technology Officer & Founder',
    bio: 'Architecting high-performance AI systems and data analytics frameworks that improve efficiency and decision-making for enterprise-scale operations.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG1_CkvoI2V5qw0mxRHHxKwM8Se3icoD2GBtfhYDZsZYxe6bxe5xd5bERu2HojcazEh56psTrguyi8t70O4Q5BW8-Kg5EQhQH7PpBry22QldtHPD09wGeKl5Ij_ZT0wXyKnnsGZSbPKhBxv81aYoHE6rP26R6rwGMjllvnBTZ1ZoPSLL-Smf5VUOPwefhYGVKtvVxlYJWmWhKYGSInMPWewgQ2SePrkzqII6M7eOiZmyteOy9PLAHGCnACg7MAmoSwdNJJcOz3Qjg',
  },
];

export default function AboutLeadership() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden px-8 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold uppercase tracking-widest mb-6">Our Legacy</span>
            <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 text-glow">
              Our Journey into the <span className="text-primary">Future</span>
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              LoopLab is a private powerhouse of engineering excellence. We are dedicated to driving global innovation through cutting-edge AI and bespoke software architecture.
            </p>
            <Link to="/services">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                Explore Our Tech <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                alt="Futuristic digital network"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfWqdAZ9gzNmse1GE6LWqfs3Kx7mwHaw0zy2J37qhFZ42gKmT6NHzIXLRTkfHC2tkREnmjUEKvqlyQAhSvJp3Gjrcq7fH7-omFq_xQ2aeEXL1QckFNH1AJsTqooSEpOE7p_zKNZwTYud1IiFIa6kkRknmQeUu7Pvx1mg1VJiUp6XqKHIvdZKHG_XJLNzeZAgGZVhw0PdWx4TzHnNsefQ8Vyo2BuDMqH-P77j1I6Dbrih0iE5QZpIylkbs6JGLo2NUfkAhfSFqD1C0"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: '50+', l: 'Global Projects' }, { v: '10+', l: 'Countries Served' }, { v: '1M+', l: 'Lives Impacted' }, { v: '24/7', l: 'Neural Support' }].map(s => (
            <div key={s.l}>
              <p className="font-headline text-5xl lg:text-6xl font-bold text-primary mb-2">{s.v}</p>
              <p className="text-on-surface-variant font-medium uppercase tracking-widest text-xs">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Glass Cards */}
      <section className="px-8 py-24 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold mb-4 tracking-tight">The Architects of Innovation</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">A collective of visionaries, engineers, and designers dedicated to the LoopLab philosophy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((person) => (
              <div key={person.name} className="group glass-card p-6 rounded-[2.5rem] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-white/60">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-8 shadow-inner bg-slate-200">
                  <img
                    alt={`Portrait of ${person.name}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    src={person.img}
                  />
                </div>
                <div className="px-2">
                  <h4 className="font-headline text-2xl font-bold mb-1">{person.name}</h4>
                  <p className="text-primary text-sm font-bold uppercase tracking-wider mb-4">{person.role}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{person.bio}</p>
                  <div className="flex gap-4 border-t border-outline-variant/20 pt-6">
                    <a className="w-10 h-10 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                      <span className="material-symbols-outlined text-lg">alternate_email</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                      <span className="material-symbols-outlined text-lg">share</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-6">Build the Core with Us</h2>
          <p className="text-on-surface-variant text-lg mb-10">
            We're looking for thinkers, dreamers, and relentless problem-solvers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers"><button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95">Join Our Team</button></Link>
            <Link to="/contact"><button className="bg-tertiary-fixed text-on-tertiary-fixed border border-outline-variant/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-tertiary-fixed-dim transition-all">Contact Us</button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
