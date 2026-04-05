import { Link } from 'react-router-dom';

export default function CandidateDashboard() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 border-r border-transparent flex flex-col p-6 space-y-4 z-40">
        <div className="mb-8 px-2 flex items-center gap-3">
          <span className="text-lg font-black text-purple-800 tracking-tighter font-headline">LoopLab</span>
        </div>
        <div className="mb-10 px-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              alt="Candidate Profile"
              className="w-10 h-10 rounded-full border-2 border-primary-container"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRWHXV_AxcFX0j6VczBwag9IVevfGvtZ5L-2z9HzRZ0mm7BpnppyEEfh8iZtpg3-QhUgh5eIHvKB8L8lkgGv2sKdbRYnOO_5DpvOOnSiAg5QZDkWbLrmXy0dvDAPBZ5uK1NUboebMsS3pcnJ9bSGlFjLhc5-ZfE7c2IXHvtzjNfNC1GsmhIR8bCgtvTLF8UsWZRaZI9CExneC4LQwe9WFKOOAKwJ8dIyvqzFtM0wxxiO6O3o74nW9LnHYtSx7dsCzDHgkFGoFLf-4"
            />
            <div>
              <p className="text-sm font-bold text-on-surface">Alex Rivera</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Candidate Portal</p>
            </div>
          </div>
          <button className="w-full bg-primary text-on-primary py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20">
            <span className="material-symbols-outlined text-sm">cloud_upload</span>
            Upload New CV
          </button>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 bg-purple-100 text-purple-900 font-semibold rounded-lg transition-transform hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </a>
          {[
            { icon: 'description', label: 'Applications' },
            { icon: 'person', label: 'Profile' },
            { icon: 'bookmark', label: 'Saved Jobs' },
            { icon: 'settings', label: 'Settings' },
          ].map((item) => (
            <a key={item.label} className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-lg transition-transform hover:translate-x-1" href="#">
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="pt-6 border-t border-slate-200/50">
          <p className="text-[10px] text-slate-400 font-medium px-4">SYSTEM STATUS: OPTIMAL</p>
        </div>
        <Link to="/" className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Site
        </Link>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-8 lg:p-12 flex-1">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-on-surface font-headline">Precision Dashboard</h1>
            <p className="text-on-surface-variant font-medium">Welcome back, Alex. Your career cycle is 84% complete.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="p-3 bg-surface-container-low rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <span className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-surface"></span>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Stats Section */}
          <section className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-6">
            {/* Applied Jobs Counter */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between h-48 border border-white/40">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">work_history</span>
                <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/5 rounded-full">+12% this week</span>
              </div>
              <div>
                <p className="text-4xl font-bold text-on-surface">24</p>
                <p className="text-sm text-on-surface-variant font-medium uppercase tracking-widest">Active Applications</p>
              </div>
            </div>

            {/* CV Strength Loop Component */}
            <div className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-xl shadow-lg flex items-center justify-between h-48 text-on-primary">
              <div className="flex flex-col justify-between h-full">
                <p className="text-sm font-medium uppercase tracking-widest opacity-80">Profile Strength</p>
                <p className="text-3xl font-bold">Expert Tier</p>
              </div>
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="opacity-20" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                  <circle cx="48" cy="48" fill="transparent" r="40" stroke="white" strokeDasharray="251.2" strokeDashoffset="37.6" strokeWidth="8"></circle>
                </svg>
                <span className="absolute text-lg font-bold">85%</span>
              </div>
            </div>

            {/* Notifications */}
            <div className="col-span-2 bg-surface-container-low p-8 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-on-surface">Recent Notifications</h3>
                <button className="text-sm font-bold text-primary hover:underline">Mark all as read</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl transition-all hover:bg-white">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">Application Accepted: Senior UX Researcher</p>
                    <p className="text-xs text-on-surface-variant">Quantos Labs requested an interview for next Tuesday.</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">2h ago</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl transition-all hover:bg-white">
                  <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">Status Update: Lead Product Designer</p>
                    <p className="text-xs text-on-surface-variant">Application was rejected. Review feedback in portal.</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">1d ago</span>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar: Profile & CVs */}
          <section className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-white/40">
              <h3 className="text-xl font-bold text-on-surface mb-6">Candidate Profile</h3>
              <div className="space-y-6">
                {[
                  { label: 'Primary Role', value: 'Senior Interaction Designer' },
                  { label: 'Location', value: 'Remote / San Francisco' },
                  { label: 'Experience', value: '8+ Years Lab Certified' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.label}</span>
                    <p className="text-on-surface font-semibold">{item.value}</p>
                  </div>
                ))}
                <div className="pt-4">
                  <button className="w-full py-2 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg text-sm font-bold hover:bg-tertiary-fixed-dim transition-colors">Edit Detailed Profile</button>
                </div>
              </div>
            </div>

            {/* CVs */}
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl border border-white/60">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-on-surface">Uploaded CVs</h3>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">more_horiz</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Alex_Rivera_CV_2024.pdf', meta: 'Primary Document • 2.4 MB', border: 'border-primary', icon: 'picture_as_pdf', iconColor: 'text-primary' },
                  { name: 'Creative_Portfolio_V2.pdf', meta: 'Supplemental • 14.8 MB', border: 'border-slate-300', icon: 'description', iconColor: 'text-slate-400' },
                ].map((cv) => (
                  <div key={cv.name} className={`p-4 bg-white rounded-lg flex items-center justify-between border-l-4 ${cv.border}`}>
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${cv.iconColor}`}>{cv.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-on-surface">{cv.name}</p>
                        <p className="text-[10px] text-on-surface-variant">{cv.meta}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 text-sm">download</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Application Table */}
          <section className="col-span-12 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-white/40">
            <div className="p-8 border-b border-surface-container flex justify-between items-center bg-white/20">
              <h3 className="text-2xl font-bold text-on-surface">Application Cycle History</h3>
              <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-sm text-slate-400 mr-2">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-48 p-0" placeholder="Filter applications..." type="text" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50">
                  <tr>
                    {['Company / Position', 'Applied Date', 'Status', 'Action'].map((h, i) => (
                      <th key={h} className={`px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest ${i === 3 ? 'text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { co: 'QL', coName: 'Quantos Labs', role: 'Senior UX Researcher', date: 'Oct 12, 2024', status: 'Accepted', statusStyle: 'bg-green-100 text-green-700', action: 'View Interview Details', actionStyle: 'text-primary', bg: 'bg-slate-900' },
                    { co: 'NS', coName: 'Neural Systems', role: 'Visual Interaction Lead', date: 'Oct 08, 2024', status: 'Pending', statusStyle: 'bg-amber-100 text-amber-700', action: 'Review Underway', actionStyle: 'text-slate-400 cursor-not-allowed', bg: 'bg-purple-600' },
                    { co: 'V-', coName: 'V-Tech Solutions', role: 'Product Designer', date: 'Sep 28, 2024', status: 'Rejected', statusStyle: 'bg-slate-100 text-slate-500', action: 'View Feedback', actionStyle: 'text-slate-500', bg: 'bg-slate-200' },
                  ].map((row) => (
                    <tr key={row.coName} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded ${row.bg} flex items-center justify-center`}>
                            <span className="text-white text-xs font-bold">{row.co}</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">{row.coName}</p>
                            <p className="text-xs text-on-surface-variant font-medium">{row.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">{row.date}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${row.statusStyle}`}>{row.status}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className={`text-sm font-bold hover:underline ${row.actionStyle}`}>{row.action}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
