import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-headline text-6xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-[1.1]">
              Providing Software Solutions for <span className="text-primary italic">Real World Problems</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              At LoopLab, we leverage modern, robust tech stacks to architect autonomous neural networks, enterprise scalable software, and high-performance digital services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">View Our Work</button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative z-10 bg-surface-variant border-4 border-white">
              <img alt="Our Services" className="w-full h-full object-cover" src="/services_hero_1775744004322.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b border-outline-variant/20 pb-8">
            <h2 className="font-headline text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-on-surface-variant text-lg">We use industry-leading frameworks and platforms to ensure 99.9% cycle efficiency.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
              { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
              { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
              { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
              { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
              { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
              { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
              { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
              { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
              { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' }
            ].map(stack => (
               <div key={stack.name} className="px-6 py-4 bg-surface-container-lowest border border-outline-variant/10 shadow-sm text-[17px] font-semibold text-primary rounded-xl hover:bg-primary hover:text-on-primary hover:border-primary transition-all cursor-default flex items-center gap-3">
                  <img src={stack.icon} alt={stack.name} className="w-7 h-7 object-contain" />
                  <span>{stack.name}</span>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 px-8 bg-surface">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all border border-outline-variant/10">
               <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">api</span>
               </div>
               <h3 className="font-headline text-2xl font-bold mb-4">Backend & APIs</h3>
               <p className="text-on-surface-variant">We build resilient backend systems using high-concurrency technologies like Python, Django, and FastAPI, integrating seamlessly with SQL and NoSQL databases.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all border border-outline-variant/10">
               <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                  <span className="material-symbols-outlined text-3xl">devices</span>
               </div>
               <h3 className="font-headline text-2xl font-bold mb-4">Web & Cloud</h3>
               <p className="text-on-surface-variant">Designing stunning user interfaces with React, Vite, TSX, and Tailwind CSS, deployed reliably on scalable cloud infrastructure like AWS and Azure.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all border border-outline-variant/10">
               <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-6 text-tertiary">
                  <span className="material-symbols-outlined text-3xl">smartphone</span>
               </div>
               <h3 className="font-headline text-2xl font-bold mb-4">Mobile Solutions</h3>
               <p className="text-on-surface-variant">Creating cross-platform mobile experiences that run beautifully natively. We leverage Flutter to launch your product efficiently everywhere.</p>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-16 text-center text-on-primary relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">Ready to build your next big idea?</h2>
            <p className="text-on-primary-container/80 text-xl mb-12 max-w-2xl mx-auto">Partner with our labs to transform your idea into a high-precision, robust reality.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-on-primary-container transition-colors">Start a Project</button></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
