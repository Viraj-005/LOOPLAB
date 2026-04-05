import { Link } from 'react-router-dom';

export default function AboutVision() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold uppercase tracking-widest mb-6">Our Legacy</span>
            <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 text-glow">
              Our Journey into the <span className="text-primary">Future</span>
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              LoopLab (Private) Limited is a powerhouse of engineering excellence. We are dedicated to driving global innovation through technology-driven solutions that address real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                  Explore Our Tech <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                className="w-full h-full object-cover"
                alt="Futuristic digital network visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfWqdAZ9gzNmse1GE6LWqfs3Kx7mwHaw0zy2J37qhFZ42gKmT6NHzIXLRTkfHC2tkREnmjUEKvqlyQAhSvJp3Gjrcq7fH7-omFq_xQ2aeEXL1QckFNH1AJsTqooSEpOE7p_zKNZwTYud1IiFIa6kkRknmQeUu7Pvx1mg1VJiUp6XqKHIvdZKHG_XJLNzeZAgGZVhw0PdWx4TzHnNsefQ8Vyo2BuDMqH-P77j1I6Dbrih0iE5QZpIylkbs6JGLo2NUfkAhfSFqD1C0"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-8 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-10 lg:p-16 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">Mission</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To develop technology-driven solutions and software applications that address real-world problems, promoting ethical and responsible project development through intelligent systems.
              </p>
            </div>
            <div className="hero-gradient p-10 lg:p-16 rounded-[2rem] text-on-primary shadow-xl">
              <div className="w-14 h-14 bg-white/20 flex items-center justify-center rounded-2xl mb-8">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To bridge the gap between research and implementation, reducing digital inequality and empowering communities through data-driven innovation and social impact initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Milestones */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Global Projects' },
            { value: '10+', label: 'Countries Served' },
            { value: '1M+', label: 'Lives Impacted' },
            { value: '24/7', label: 'Neural Support' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-headline text-5xl lg:text-6xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-on-surface-variant font-medium uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-8 py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold mb-4">The Architects of Innovation</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">A collective of visionaries, engineers, and designers dedicated to the LoopLab philosophy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'S. H. Dinusha Madhujith', role: 'Chief Executive Officer & Founder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmfwkVdLVcA9oslGzO4J8KlT6otnB-3upSIqrP-5a96DzUkQIairPZA9hCBcYygX-sNrj5UiEOFbqXOVmvKLQj8x-2TH995fW5Tc2_JaETlq2AqjJkyosOiQpFspd4bYh3mv23QmWczcnhOwTA-gkyJI4k9llrQb6xejbs6KwFwPz6WYa0iWlo_nVrBYTxa5InBN6xK9zWxM1JCk0LEZItnemUxSHuDeEG41hhxQaz3hwW14fb2Mkzkt4jwtJo3W_Qj9obH9KgJRM' },
              { name: 'W. Pawani Nimasha', role: 'Director of Social Impact & Founder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnSGjZ7kZaIA4-UZO3NoWlDMr2Ty73Qu0aEXl1bRtJGnfuqdMzWQ2HjUJATz6Yxm6kCEkFoA4Z9Q2XPlvn2hxoHhHx8XETDW0Z8LHLiRTmWny7C2T5tCAn0X2gUoPKw629xUEZhTW9rKzgoleXk-vmJ0tvfKBKKmwFBsUd-TV4MmSc4ueXmdGT8Z8eLbPJ61jOz0cxGa8Ro3VjTjw5VmNR_GMMbcDYs-yQnCqLnE_iHP8RxJH6yw0ZJPJq0jHBgFQyHBEPfVUQlwo' },
              { name: 'I. A. Viraj Piumal Sangeeth', role: 'Chief Technology Officer & Founder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG1_CkvoI2V5qw0mxRHHxKwM8Se3icoD2GBtfhYDZsZYxe6bxe5xd5bERu2HojcazEh56psTrguyi8t70O4Q5BW8-Kg5EQhQH7PpBry22QldtHPD09wGeKl5Ij_ZT0wXyKnnsGZSbPKhBxv81aYoHE6rP26R6rwGMjllvnBTZ1ZoPSLL-Smf5VUOPwefhYGVKtvVxlYJWmWhKYGSInMPWewgQ2SePrkzqII6M7eOiZmyteOy9PLAHGCnACg7MAmoSwdNJJcOz3Qjg' },
            ].map((person) => (
              <div key={person.name} className="group bg-surface-container-lowest p-6 rounded-3xl hover:bg-surface-container-low transition-colors duration-300">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={person.img} alt={person.name} />
                </div>
                <h4 className="font-headline text-xl font-bold">{person.name}</h4>
                <p className="text-primary text-sm font-semibold mb-3">{person.role}</p>
                <div className="flex gap-3 text-tertiary-fixed-dim group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                  <span className="material-symbols-outlined text-sm">share</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/about/leadership" className="inline-flex items-center text-primary font-bold gap-2 hover:gap-3 transition-all">
              See extended leadership <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/40">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-[0.2em] text-xs mb-4 uppercase">Beyond Code</span>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-8">Technology for a <span className="text-primary">Sustainable Earth</span></h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                LoopLab is committed to a social impact model that prioritizes the planet. Our flagship 'AgriLoop' initiative uses satellite AI to help small-scale farmers optimize crop yields while reducing water usage by 40%.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { icon: 'eco', text: 'Precision irrigation for sustainable farming' },
                  { icon: 'solar_power', text: 'Carbon footprint tracking for global logistics' },
                  { icon: 'psychology', text: 'Open-source AI training for rural education' },
                ].map((item) => (
                  <li key={item.icon} className="flex items-center gap-3 font-medium">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 min-h-[400px]">
              <img
                className="w-full h-full object-cover"
                alt="Lush green agricultural terrace field"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5GL_NPb61ZCGcTZnDoQ1ZXITaQk8JVYfju2JMIUaj1m1yeVKwyRurTPdjIWb_24bEiuCgObu9Eu1-w-8cTm6B7R3NW0DYX8fu8PQBw9wgcoGu2ozWKJj_GsENu391qPOPuDyxRQ4z9vN4DlUW6up5cRZAO_ginyS8EO5--MK_3phP4bsPrFFdrnFXaagFtDyG0FaHMZ3EmbjtUy0PnWs0LLgGbEgoheEjxsjn6-eH0M7vRYC--jsp9qMdQzjGcAdJk9vj-PER8w"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-6">Build the Core with Us</h2>
          <p className="text-on-surface-variant text-lg mb-10">
            We're looking for thinkers, dreamers, and relentless problem-solvers. If you want to define the future of technology, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95">Join Our Team</button>
            </Link>
            <Link to="/contact">
              <button className="bg-tertiary-fixed text-on-tertiary-fixed border border-outline-variant/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-tertiary-fixed-dim transition-all">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
