import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutVision from './pages/AboutVision';
import AboutLeadership from './pages/AboutLeadership';
import Services from './pages/Services';
import Projects from './pages/Projects';
import CareersHub from './pages/CareersHub';
import JobDetails from './pages/JobDetails';
import CandidateDashboard from './pages/CandidateDashboard';
import ResearchBlog from './pages/ResearchBlog';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutVision />} />
          <Route path="/about/leadership" element={<AboutLeadership />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<CareersHub />} />
          <Route path="/careers/job-details" element={<JobDetails />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/blog" element={<ResearchBlog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
