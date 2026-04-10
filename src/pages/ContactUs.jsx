import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using Formspree ID from .env file
      const formId = import.meta.env.VITE_FORMSPREE_ID;
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Message from ${formData.name}: ${formData.subject}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <main className="pt-24 sm:pt-32 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="mb-12 md:mb-20 text-center md:text-left">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">Get in Touch</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto md:mx-0 text-base sm:text-lg font-light leading-relaxed">
          Connect with our research team to explore the next frontier of digital innovation.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="lg:col-span-4 space-y-6 md:space-y-8">
          <div className="bg-surface-container-low p-6 sm:p-8 rounded-2xl space-y-8 border border-outline-variant/10 shadow-sm">
            {[
              { icon: 'location_on', title: 'Global HQ', detail: 'No. 74/1, Neelammahara,\nButhpitiya, Mahara' },
              { icon: 'alternate_email', title: 'Email Us', detail: 'looplab888@gmail.com' },
              { icon: 'call', title: 'Phone', detail: '+94 764146712' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm border border-outline-variant/5">
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
              <a key={icon} className="w-12 h-12 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 border border-outline-variant/10 shadow-sm" href="#">
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/10 relative overflow-hidden">
            {status === 'success' ? (
              <div className="py-8 sm:py-12 flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                  <span className="material-symbols-outlined text-4xl sm:text-5xl relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div>
                  <h2 className="font-headline text-2xl sm:text-4xl font-bold text-on-surface mb-4">Message Deployed Successfully</h2>
                  <p className="text-on-surface-variant text-base sm:text-lg max-w-sm mx-auto">
                    Your transmission has been received. Our intelligence team will analyze and respond within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="w-full sm:w-auto bg-surface-container-low text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-all shadow-sm border border-primary/20"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all" 
                      placeholder="john@example.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Subject</label>
                  <input 
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all" 
                    placeholder="Inquiry about..." 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none resize-none transition-all" 
                    placeholder="How can we help you?" 
                    rows={5}
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <div className="bg-error-container text-on-error-container p-4 rounded-xl text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <span className="material-symbols-outlined text-[20px]">error</span>
                    Something went wrong. Please try again or email us directly at looplab888@gmail.com
                  </div>
                )}

                <button 
                  disabled={status === 'submitting'}
                  className="w-full hero-gradient text-on-primary py-5 rounded-2xl font-headline font-bold text-lg hover:shadow-2xl hover:translate-y-[-2px] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:pointer-events-none"
                  type="submit"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Encrypting Transmission...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <section className="mt-16 md:mt-24">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-surface-container-low border border-outline-variant/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63383.769104953535!2d79.8416537046432!3d6.832234802946894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bbec8dcb3cf%3A0xc4098ad103334b6b!2sLoopLab!5e0!3m2!1sen!2slk!4v1775747899895!5m2!1sen!2slk" 
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[8px] sm:border-[12px] border-white/5 rounded-[2.5rem] sm:rounded-[3rem]"></div>
        </div>
      </section>
    </main>
  );
}

