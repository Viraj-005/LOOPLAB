import { Link } from 'react-router-dom';

export default function JobDetails() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <header className="relative overflow-hidden pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 mb-6 text-sm text-secondary font-medium">
                <Link to="/careers">Careers</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Design</span>
              </nav>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-on-surface">
                Senior Product <br /><span className="text-primary">Designer</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: 'work', label: 'Full-time' },
                  { icon: 'public', label: 'Remote' },
                  { icon: 'groups', label: 'Design Department' },
                ].map((tag) => (
                  <div key={tag.label} className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
                    <span className="material-symbols-outlined text-secondary text-xl">{tag.icon}</span>
                    <span className="text-sm font-semibold">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4">
          <div className="w-[800px] h-[800px] rounded-full hero-gradient blur-[120px]"></div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-16">
            <article>
              <h2 className="font-headline text-3xl font-bold mb-8">About the Role</h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                <p>LoopLab is redefining how high-growth teams visualize and interact with complex data ecosystems. As our Senior Product Designer, you will be at the heart of our Ethereal Core design philosophy—transforming technical sophistication into seamless, intuitive human experiences.</p>
                <p>You won't just be pushing pixels; you'll be architecting workflows for some of the world's most advanced engineering teams. You'll join a small, high-impact design squad that values technical precision, kinetic depth, and editorial clarity over standard UI templates.</p>
              </div>
            </article>

            <article>
              <h2 className="font-headline text-3xl font-bold mb-8">What You'll Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: 'auto_awesome_motion', title: 'Systems Thinking', desc: 'Lead the evolution of our design system, ensuring kinetic depth and precision-milled glass aesthetics remain consistent.' },
                  { icon: 'architecture', title: 'Interface Architecture', desc: 'Design complex data-dense interfaces that feel spacious and editorial, leveraging asymmetry and white space.' },
                  { icon: 'hub', title: 'End-to-End Ownership', desc: 'Drive features from early research and conceptual sketches through to high-fidelity prototyping and engineering handoff.' },
                  { icon: 'diversity_3', title: 'Collaborative Loops', desc: 'Work side-by-side with product and engineering to ensure the technical soul of LoopLab is never lost.' },
                ].map((item) => (
                  <div key={item.title} className="p-8 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-200">
                    <span className="material-symbols-outlined text-primary mb-4 text-3xl block">{item.icon}</span>
                    <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            <article>
              <h2 className="font-headline text-3xl font-bold mb-8">What We're Looking For</h2>
              <ul className="space-y-6">
                {[
                  { title: '5+ Years of Experience', desc: 'Proven track record in SaaS or deep-tech product design with a portfolio that showcases high-end editorial aesthetics.' },
                  { title: 'Mastery of Tooling', desc: 'Expertise in Figma, including advanced variables, prototyping, and design system management.' },
                  { title: 'Visual Authority', desc: 'A keen eye for typography, layout, and tonal layering. You understand why we don\'t use 1px borders.' },
                  { title: 'Research Fluency', desc: 'Ability to translate complex user needs and technical requirements into simplified, elegant flows.' },
                ].map((req) => (
                  <li key={req.title} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-container text-xs">done</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{req.title}</h4>
                      <p className="text-on-surface-variant text-sm">{req.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="p-12 rounded-xl bg-surface-container-low">
              <h2 className="font-headline text-3xl font-bold mb-8">Perks &amp; Benefits</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: 'volunteer_activism', label: 'Health & Dental' },
                  { icon: 'laptop_mac', label: 'Home Office Kit' },
                  { icon: 'travel', label: 'Unlimited PTO' },
                  { icon: 'savings', label: 'Equity Grants' },
                ].map((perk) => (
                  <div key={perk.label} className="text-center">
                    <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-white">{perk.icon}</span>
                    </div>
                    <span className="text-sm font-bold block">{perk.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="p-8 rounded-xl bg-surface-container-lowest ambient-shadow">
                <h3 className="font-headline text-2xl font-bold mb-4">Apply for this position</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Join our remote-first team and help shape the future of high-end digital laboratory environments.</p>
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Department', value: 'Design' },
                    { label: 'Location', value: 'Worldwide (Remote)' },
                    { label: 'Job Type', value: 'Full-time' },
                  ].map((item, i) => (
                    <div key={item.label} className={`flex justify-between items-center py-3 ${i < 2 ? 'border-b border-outline-variant/10' : ''}`}>
                      <span className="text-tertiary text-sm">{item.label}</span>
                      <span className="font-bold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 hero-gradient text-white rounded-lg font-bold shadow-lg shadow-primary/30 transition-transform active:scale-95 mb-4">Apply Now</button>
                <button className="w-full py-4 text-primary font-bold hover:bg-surface-container-low transition-colors rounded-lg flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">share</span>
                  Share Job
                </button>
              </div>

              <div className="p-6 rounded-xl bg-surface-container-low flex items-center gap-4">
                <img loading="lazy"
                  className="w-14 h-14 rounded-full object-cover"
                  alt="Sarah Jenkins"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf3z71D6ANw1_7ZPIXFi5MYtC1zeDBKWGQZihgrPhGdXq4eY532407bYWhsEtAGyD8o5EvtW1JOZUa71yx8_x-5EpcEyWoZU4qIVkLjB1_TUBULhraYwnvqY6phdw_JbsFR13IMcnJI0MgWza-Uln0YdKakSDhtdVL-0pMSJAo4t_GS86izDqXliMcWZxRmssuP6S8Lu18SqDgUzhN1b4W3jHE6NMb2UaX4Xj9UPYjn4UVywujbEX-ITfwhv0I8oyymlvC8S7qfUY"
                />
                <div>
                  <h4 className="font-bold text-sm">Sarah Jenkins</h4>
                  <p className="text-xs text-on-surface-variant">Head of Design at LoopLab</p>
                  <a className="text-xs text-primary font-bold hover:underline mt-1 block" href="#">Connect on LinkedIn</a>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden relative aspect-square group">
                <img loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Modern office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnIGpXkJLvWbT_cRwFibF49CMmHGHz9nBVO38OEqt3e_JYwtI0O88kiixZuJNvttezBEV3b9dOp6Ds59GXBvdwxn67EeaB8Fg6eENVZeHhuGbbAiio4FhKAgteyQOYmUx0kRtDXDAbO4fl8z8F0gT3uIKWPYy1BiFSftHQvwtHxs7mssN_hrCQhhmTRDGts8Hnm5EVJmncLCHTXoL7BzNGazXSpEKBT5q_tj_dmVXlon5WFY-n7IhPZNvndHSvRY7K7cSa203_wns"
                />
                <div className="absolute inset-0 bg-primary/40 flex flex-col justify-end p-6">
                  <p className="text-white text-sm font-medium leading-tight">Explore our culture and the lab behind the loops.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
