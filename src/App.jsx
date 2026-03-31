import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppProvider } from './context/AppContext';
import { useLocation } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import { LoginPage, RegisterPage } from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ResumeUploadPage from './pages/ResumeUploadPage';
import ResumeEditorPage from './pages/ResumeEditorPage';
import JobMatchPage from './pages/JobMatchPage';
import CoverLetterPage from './pages/CoverLetterPage';

// Simple placeholder pages for routes not yet implemented
import ResumeOptimizePage from './pages/ResumeOptimizePage';
import TemplatesPage from './pages/TemplatesPage';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-offwhite mb-2">{title}</h1>
      <p className="text-softgray">This page is coming soon.</p>
    </div>
  </div>
);

// Animated Routes wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes - redirects to login if not authenticated */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resumes" element={<PlaceholderPage title="My Resumes" />} />
        <Route path="/resumes/upload" element={<ResumeUploadPage />} />
        <Route path="/resumes/1/edit" element={<ResumeEditorPage />} />
        <Route path="/resumes/1/optimize" element={<ResumeOptimizePage />} />
        <Route path="/cover-letters" element={<PlaceholderPage title="Cover Letters" />} />
        <Route path="/cover-letters/new" element={<CoverLetterPage />} />
        <Route path="/ai-tools" element={<PlaceholderPage title="AI Tools" />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/job-match" element={<JobMatchPage />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
