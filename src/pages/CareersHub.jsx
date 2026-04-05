import { Link } from 'react-router-dom';

export default function CareersHub() {
  const jobs = [
    { title: 'Senior Product Designer', type: 'FULL-TIME', typeColor: 'bg-primary-fixed text-on-primary-fixed-variant', location: 'Remote', desc: 'Lead the design system evolution for our core laboratory operating platform.' },
    { title: 'Distributed Systems Engineer', type: 'FULL-TIME', typeColor: 'bg-secondary-container text-on-secondary-container', location: 'London, UK', desc: 'Architect high-throughput data processing pipelines. Proficiency in Rust or Go required.' },
    { title: 'Growth Marketing Lead', type: 'INTERNSHIP', typeColor: 'bg-tertiary-fixed text-on-tertiary-fixed', location: 'San Francisco, US', desc: 'Define our user acquisition strategy for the North American market.' },
    { title: 'QA Automation Specialist', type: 'FULL-TIME', typeColor: 'bg-primary-fixed text-on-primary-fixed-variant', location: 'Remote', desc: 'Develop end-to-end testing frameworks for high-reliability lab environments.' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      {/* Hero */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">
              Shape the future of <span className="text-primary italic">Digital Cycles.</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-light max-w-xl">
              We're building the next generation of laboratory automation. Join a team where precision meets imagination.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 rounded-full border-4 border-primary-container border-t-transparent animate-spin flex items-center justify-center" style={{ animationDuration: '3000ms' }}>
              <div className="w-24 h-24 rounded-full border-4 border-secondary-container border-b-transparent animate-spin flex items-center justify-center" style={{ animationDuration: '2000ms' }}>
                <span className="material-symbols-outlined text-primary text-4xl">cycle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface-container-low rounded-xl p-6 flex flex-wrap gap-4 items-center ambient-shadow">
          <div className="flex-1 min-w-[240px]">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="Search roles (e.g. UX Designer)" type="text" />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {['Location', 'Category', 'Job Type'].map((label) => (
              <select key={label} className="bg-surface-container-lowest border-none rounded-lg px-4 py-3 text-on-surface-variant focus:ring-2 focus:ring-primary/20">
                <option>{label}</option>
              </select>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Job Listings */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-headline text-2xl font-bold">Open Positions <span className="text-outline-variant font-light ml-2">(12)</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div key={job.title} className="group bg-surface-container-lowest p-8 rounded-xl ambient-shadow hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className={`${job.typeColor} text-xs font-bold px-3 py-1 rounded-full tracking-wider`}>{job.type}</span>
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">bookmark</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                <p className="text-on-surface-variant text-sm mb-8 line-clamp-2">{job.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-outline text-sm">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{job.location}</span>
                  </div>
                  <Link to="/careers/job-details" className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                    Apply Now <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Urgent/Featured Card */}
            <div className="md:col-span-2 group bg-surface-container-lowest p-8 rounded-xl ambient-shadow border-l-4 border-primary hover:translate-y-[-4px] transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-md">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-error-container text-on-error-container text-xs font-bold px-3 py-1 rounded-full tracking-wider">URGENT</span>
                    <span className="bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold px-3 py-1 rounded-full tracking-wider">CONTRACT</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Lead Robotics Researcher</h3>
                  <p className="text-on-surface-variant text-sm">Join our R&amp;D wing to prototype autonomous liquid handling systems using advanced kinematics and computer vision.</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="text-right">
                    <div className="text-sm font-bold text-on-surface">$140k – $180k</div>
                    <div className="text-xs text-outline">Equity options included</div>
                  </div>
                  <button className="hero-gradient text-on-primary px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/20">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CV Submission Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28">
            <div className="bg-surface-container-low rounded-2xl p-8 ambient-shadow overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="font-headline text-2xl font-bold mb-2">Can't find a fit?</h2>
                <p className="text-on-surface-variant text-sm mb-8">Submit your CV to our general talent database and we'll reach out when a matching cycle opens.</p>
                <form className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2">Full Name</label>
                    <input className="w-full px-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="John Doe" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2">Email Address</label>
                    <input className="w-full px-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="john@company.com" type="email" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2">Phone</label>
                      <input className="w-full px-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="+1..." type="tel" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2">Position</label>
                      <select className="w-full px-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface-variant">
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Operations</option>
                        <option>Sales</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2">Upload CV</label>
                    <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center bg-white/40 hover:bg-white/60 hover:border-primary transition-all cursor-pointer group">
                      <span className="material-symbols-outlined text-outline group-hover:text-primary text-4xl mb-3 block">cloud_upload</span>
                      <p className="text-sm text-on-surface-variant"><span className="font-bold text-primary">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-outline mt-1">PDF, DOCX (Max 10MB)</p>
                    </div>
                  </div>
                  <button className="w-full py-4 hero-gradient text-on-primary font-bold rounded-xl shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity" type="submit">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-6 bg-primary-container p-6 rounded-2xl flex items-center gap-4 text-on-primary-container">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              </div>
              <div>
                <div className="text-sm font-bold">Top Startup 2024</div>
                <div className="text-xs opacity-70">Recognized for lab-tech innovation</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
