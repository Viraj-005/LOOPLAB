import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">
              Our <span className="text-primary italic">Deployed Capabilities</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
              We focus on building modules and fully integrated systems that drive progress. From comprehensive sales intelligence to cutting-edge healthcare AI solutions.
            </p>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-24 px-8 bg-surface">
         <div className="max-w-7xl mx-auto">
            <div className="mb-12">
               <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">Ongoing Development</span>
               <h2 className="font-headline text-4xl font-bold">Sales Incentive System</h2>
               <p className="text-on-surface-variant text-lg mt-4 max-w-3xl">A comprehensive 9-module incentive calculation logic system meant to optimize operational efficiency and dynamic commissions tracking.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <div className="bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-4">
                         <h3 className="font-bold text-lg text-on-surface">Completed Modules (3/9)</h3>
                         <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>
                      </div>
                      <p className="text-sm text-on-surface-variant mb-4">Fully tested and operational calculation endpoints.</p>
                      <div className="flex gap-2 flex-wrap">
                         <span className="bg-surface-container px-3 py-1.5 rounded-lg text-xs font-bold text-on-surface">Sales Incentive</span>
                         <span className="bg-surface-container px-3 py-1.5 rounded-lg text-xs font-bold text-on-surface">Dealer Commission</span>
                         <span className="bg-surface-container px-3 py-1.5 rounded-lg text-xs font-bold text-on-surface">Manager Incentive</span>
                      </div>
                   </div>
                   <div className="bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-outline shadow-sm opacity-90">
                      <div className="flex justify-between items-center mb-4">
                         <h3 className="font-bold text-lg text-on-surface">Development Pipeline (6/9)</h3>
                         <span className="material-symbols-outlined text-primary animate-spin font-bold">sync</span>
                      </div>
                      <p className="text-sm text-on-surface-variant">The remaining six modules are currently undergoing engineering cycles and testing phases.</p>
                   </div>
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 border-4 border-white/20 rounded-[2rem] z-10 pointer-events-none"></div>
                    <img alt="Sales Framework" className="w-full object-cover aspect-square md:aspect-auto" src="/projects_hero_1775744290672.png" />
                </div>
            </div>
         </div>
      </section>

      {/* Completed Portfolio */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
            <h2 className="font-headline text-4xl font-bold mb-12 border-b border-outline-variant/20 pb-6">Completed Projects & AI Models</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Healthcare AI Admin */}
               <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all md:flex gap-8 items-center border border-outline-variant/10">
                  <div className="flex-1 mb-6 md:mb-0">
                     <div className="bg-tertiary/10 w-max px-3 py-1 rounded-full mb-4">
                        <p className="text-tertiary text-xs font-bold tracking-widest uppercase">Healthcare Strategy</p>
                     </div>
                     <h3 className="font-headline text-3xl font-bold mb-4">Hospital AI Admin Panel</h3>
                     <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Integrated an administrative suite backed by predictive forecasting models to optimize hospital resource management and drug pipelines.</p>
                     <p className="text-xs font-bold text-primary mb-3 uppercase tracking-widest">Integrated Models:</p>
                     <ul className="text-sm font-semibold text-on-surface-variant space-y-3 mb-4">
                        <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-[20px] text-green-500 font-bold">done</span> Drug Expiry Prediction</li>
                        <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-[20px] text-green-500 font-bold">done</span> Drug Buying Forecasting</li>
                        <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-[20px] text-green-500 font-bold">done</span> Patient Forecasting</li>
                        <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-[20px] text-green-500 font-bold">done</span> Medical Equipment Buying Models</li>
                     </ul>
                  </div>
                  <div className="w-full md:w-72 h-72 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                     <img alt="Healthcare Admin Panel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/projects_completed_1775744418460.png" />
                  </div>
               </div>

               {/* YOLO Projects */}
               <div className="bg-surface-container-lowest rounded-[2rem] border border-outline-variant/10 hover:shadow-lg transition-all group overflow-hidden flex flex-col">
                  <div className="h-48 w-full overflow-hidden shrink-0">
                     <img alt="YOLO Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/services_hero_1775744004322.png" />
                  </div>
                  <div className="p-8 grow flex flex-col">
                     <span className="material-symbols-outlined text-4xl mb-3 text-on-surface">visibility</span>
                     <h3 className="font-headline text-2xl font-bold mb-2">YOLO Vision Systems</h3>
                     <p className="text-on-surface-variant text-sm mb-4">Real-time object detection and alerting nodes.</p>
                     <ul className="space-y-3 mt-auto">
                        <li className="font-bold text-xs bg-surface-container px-3 py-2 rounded-lg text-primary text-center">Patient Monitoring</li>
                        <li className="font-bold text-xs bg-surface-container px-3 py-2 rounded-lg text-primary text-center">Patient Alerting</li>
                     </ul>
                  </div>
               </div>

               {/* Gem App */}
               <div className="bg-surface-container-lowest rounded-[2rem] border border-outline-variant/10 hover:shadow-lg transition-all group overflow-hidden flex flex-col">
                  <div className="h-48 w-full overflow-hidden shrink-0 border-b border-surface-variant">
                     <img alt="Gem App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/proj_gemtech_1775745712003.png" />
                  </div>
                  <div className="p-8 grow flex flex-col">
                     <h3 className="font-headline text-2xl font-bold mb-3 mt-2">GemTech App</h3>
                     <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">A complete Flutter mobile application fueled by AI models to identify and predict structures.</p>
                     <div className="space-y-2 mt-auto text-[11px] font-bold text-secondary text-center">
                        <div className="bg-secondary/10 px-3 py-2 rounded-lg">Gem Cut Type Recommendation</div>
                        <div className="bg-secondary/10 px-3 py-2 rounded-lg">Gem Stone Prediction</div>
                     </div>
                  </div>
               </div>

               {/* Classification AI */}
               <div className="bg-surface-container-lowest rounded-[2rem] border border-outline-variant/10 hover:shadow-lg transition-all group overflow-hidden flex flex-col">
                  <div className="h-48 w-full overflow-hidden shrink-0 border-b border-surface-variant">
                     <img alt="Cognitive Bots" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/proj_cognitive_1775745549923.png" />
                  </div>
                  <div className="p-8 grow flex flex-col">
                     <h3 className="font-headline text-2xl font-bold mb-3 mt-2">Cognitive Bots</h3>
                     <p className="text-on-surface-variant text-sm mt-2 leading-relaxed"><b>AI Chatbot</b> designed to securely interact, detect, and classify user stress levels based on NLP inputs.</p>
                  </div>
               </div>

               {/* Image AI */}
               <div className="bg-surface-container-lowest rounded-[2rem] border border-outline-variant/10 hover:shadow-lg transition-all group overflow-hidden flex flex-col">
                  <div className="h-48 w-full overflow-hidden shrink-0 border-b border-surface-variant">
                     <img alt="Fidelity Engine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/proj_fidelity_1775745441889.png" />
                  </div>
                  <div className="p-8 grow flex flex-col">
                     <h3 className="font-headline text-2xl font-bold mb-3 mt-2">Fidelity Engine</h3>
                     <p className="text-on-surface-variant text-sm mt-2 leading-relaxed"><b>Real vs Fake Image Detection</b> system utilizing deep convolutional networks to differentiate digital media.</p>
                  </div>
               </div>
            </div>
        </div>
      </section>
    </main>
  );
}
