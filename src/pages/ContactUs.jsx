import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-20 text-center md:text-left">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">Get in Touch</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg font-light leading-relaxed">
          Connect with our research team to explore the next frontier of digital innovation.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low p-8 rounded-2xl space-y-8">
            {[
              { icon: 'location_on', title: 'Global HQ', detail: 'No. 74/1, Neelammahara,\nButhpitiya, Mahara' },
              { icon: 'alternate_email', title: 'Email Us', detail: 'looplab888@gmail.com' },
              { icon: 'call', title: 'Phone', detail: '+94 764146712' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary ambient-shadow">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-line">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            {['share', 'public', 'hub'].map((icon) => (
              <a key={icon} className="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl ambient-shadow">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Subject</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Inquiry about..." type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none resize-none" placeholder="How can we help you?" rows={5}></textarea>
              </div>
              <button className="w-full ethereal-gradient text-on-primary py-5 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group" type="submit">
                Send Message
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden ambient-shadow bg-surface-container-low">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63383.769104953535!2d79.8416537046432!3d6.832234802946894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bbec8dcb3cf%3A0xc4098ad103334b6b!2sLoopLab!5e0!3m2!1sen!2slk!4v1775747899895!5m2!1sen!2slk" 
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
