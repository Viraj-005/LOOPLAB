import { Link } from 'react-router-dom';

export default function AboutVision() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 pt-24 pb-20 lg:pb-32 max-w-7xl mx-auto">
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
              <img loading="lazy"
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

      {/* Stats / Milestones */}
      <section className="px-8 py-16 bg-surface-container-low border-y border-outline-variant/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-7xl mx-auto">
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

      {/* Mission & Vision */}
      <section className="px-8 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-10 lg:p-16 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:border-primary/20 transition-colors duration-500">
              <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">Mission</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To develop technology-driven solutions and software applications that address real-world problems, promoting ethical and responsible project development through intelligent systems.
              </p>
            </div>
            <div className="hero-gradient p-10 lg:p-16 rounded-[2rem] text-on-primary shadow-xl hover:shadow-2xl transition-shadow duration-500">
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

      {/* Social Impact */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-xl border border-outline-variant/10 hover:border-primary/20 transition-colors duration-500">
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
              <img loading="lazy"
                className="w-full h-full object-cover"
                alt="Lush green agricultural terrace field"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5GL_NPb61ZCGcTZnDoQ1ZXITaQk8JVYfju2JMIUaj1m1yeVKwyRurTPdjIWb_24bEiuCgObu9Eu1-w-8cTm6B7R3NW0DYX8fu8PQBw9wgcoGu2ozWKJj_GsENu391qPOPuDyxRQ4z9vN4DlUW6up5cRZAO_ginyS8EO5--MK_3phP4bsPrFFdrnFXaagFtDyG0FaHMZ3EmbjtUy0PnWs0LLgGbEgoheEjxsjn6-eH0M7vRYC--jsp9qMdQzjGcAdJk9vj-PER8w"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Registration */}
      <section className="px-8 py-24 bg-surface relative overflow-hidden">
        {/* Decorative background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-surface-container-lowest p-8 lg:p-16 rounded-[3rem] shadow-2xl border border-outline-variant/10 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden backdrop-blur-xl hover:border-primary/20 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>

            <div className="lg:w-1/2 relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">Legal Entity</span>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-6">Official Company Registration</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                LoopLab (Private) Limited is officially recognized and incorporated as a Private Company with Limited Liability under the Companies Act No. 7 of 2007 of the Democratic Socialist Republic of Sri Lanka. We operate with full compliance and transparency to ensure trust and reliability for all our global partners and clients.
              </p>
              <div className="bg-surface-container/50 backdrop-blur-md p-8 rounded-[2rem] border border-outline-variant/10 shadow-inner hover:shadow-md transition-shadow duration-300">
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                    <span className="font-medium text-on-surface-variant flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[20px]">tag</span> Registration No.</span>
                    <span className="font-bold text-on-surface text-lg tracking-wide">P V 00356201</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                    <span className="font-medium text-on-surface-variant flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[20px]">event_available</span> Incorporated</span>
                    <span className="font-bold text-on-surface text-lg">18 February 2026</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-on-surface-variant flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[20px]">location_on</span> Jurisdiction</span>
                    <span className="font-bold text-on-surface text-lg">Colombo, Sri Lanka</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center relative z-10">
              <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60 bg-white/40 backdrop-blur-sm p-4 hover:border-primary/30 transition-all duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-tertiary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute top-8 right-8 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none flex items-center gap-2 border border-black/5 transform -translate-y-2 group-hover:translate-y-0">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span className="text-xs font-bold text-on-surface uppercase tracking-wider">Verified Document</span>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-inner">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-color z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  <img loading="lazy"
                    src="/company_certificate.jpg" 
                    alt="LoopLab Certificate of Incorporation"
                    className="w-[400px] h-[600px] object-contain rounded-xl relative z-0 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-8 py-24 bg-surface-container relative overflow-hidden">
        {/* Decorative background Elements */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-tertiary-container/30 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-widest mb-4">Executive Team</span>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold mb-6">The Architects of <span className="text-primary">Innovation</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">A collective of visionaries, engineers, and designers dedicated to the LoopLab philosophy.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: 'Dinusha Madhujith', role: 'Chief Executive Officer & Founder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmfwkVdLVcA9oslGzO4J8KlT6otnB-3upSIqrP-5a96DzUkQIairPZA9hCBcYygX-sNrj5UiEOFbqXOVmvKLQj8x-2TH995fW5Tc2_JaETlq2AqjJkyosOiQpFspd4bYh3mv23QmWczcnhOwTA-gkyJI4k9llrQb6xejbs6KwFwPz6WYa0iWlo_nVrBYTxa5InBN6xK9zWxM1JCk0LEZItnemUxSHuDeEG41hhxQaz3hwW14fb2Mkzkt4jwtJo3W_Qj9obH9KgJRM' },
              { name: 'Pawani Nimasha', role: 'Director of Social Impact & Founder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnSGjZ7kZaIA4-UZO3NoWlDMr2Ty73Qu0aEXl1bRtJGnfuqdMzWQ2HjUJATz6Yxm6kCEkFoA4Z9Q2XPlvn2hxoHhHx8XETDW0Z8LHLiRTmWny7C2T5tCAn0X2gUoPKw629xUEZhTW9rKzgoleXk-vmJ0tvfKBKKmwFBsUd-TV4MmSc4ueXmdGT8Z8eLbPJ61jOz0cxGa8Ro3VjTjw5VmNR_GMMbcDYs-yQnCqLnE_iHP8RxJH6yw0ZJPJq0jHBgFQyHBEPfVUQlwo' },
              { name: 'Viraj Induruwa', role: 'Chief Technology Officer & Founder', img: '/founder_viraj.jpg' },
            ].map((person) => (
              <div key={person.name} className="group relative bg-surface-container-lowest p-5 lg:p-6 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-outline-variant/20 hover:-translate-y-2 hover:border-primary/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative">
                  {/* Image Color Filter Effect overlay */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  <img loading="lazy" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src={person.img} alt={person.name} />
                  
                  {/* Social links hover overlay */}
                  <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <button className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
                      <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
                      <span className="material-symbols-outlined text-[20px]">share</span>
                    </button>
                  </div>
                </div>
                
                <h4 className="font-headline text-2xl font-bold mb-2 text-on-surface">{person.name}</h4>
                <p className="text-primary font-semibold text-sm tracking-wide uppercase">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 text-center bg-surface">
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
