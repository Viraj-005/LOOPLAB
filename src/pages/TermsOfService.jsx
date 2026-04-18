export default function TermsOfService() {
  return (
    <div className="bg-slate-50 min-h-screen py-24 font-body">
      <div className="max-w-4xl mx-auto px-6 md:px-12 bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-slate-100">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-8 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-slate-500 mb-12 text-sm font-medium uppercase tracking-wider">
          Last Updated: April 2026
        </p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this site. The materials contained in this website are protected
              by applicable copyright and trademark law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on LoopLab website for
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
              of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display;</li>
              <li>Attempt to decompile or reverse engineer any software contained on LoopLab website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or mirror the materials on any other server.</li>
            </ul>
            <p className="mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be
              terminated by LoopLab at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">3. Disclaimer</h2>
            <p>
              The materials on LoopLab website are provided on an as-is basis. LoopLab makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">4. Limitations</h2>
            <p>
              In no event shall LoopLab or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on LoopLab website, even if LoopLab or an authorized representative
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">5. Revisions and Errata</h2>
            <p>
              The materials appearing on LoopLab website could include technical, typographical, or photographic
              errors. LoopLab does not warrant that any of the materials on its website are accurate, complete or
              current. LoopLab may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka
              and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
