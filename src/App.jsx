import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutVision from './pages/AboutVision';
import Services from './pages/Services';
import Projects from './pages/Projects';
import CareersHub from './pages/CareersHub';
import JobDetails from './pages/JobDetails';
import CandidateDashboard from './pages/CandidateDashboard';
import ResearchBlog from './pages/ResearchBlog';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-slate-500">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutVision />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/careers" element={<CareersHub />} />
            <Route path="/careers/job-details" element={<JobDetails />} />
            <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
            <Route path="/blog" element={<ResearchBlog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
