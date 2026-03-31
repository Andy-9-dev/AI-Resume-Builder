import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  FileText, 
  Target,
  FileCheck,
  Mail,
  History,
  Download,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const coreFeatures = [
  {
    icon: Brain,
    title: 'AI Resume Parsing',
    description: 'Our advanced AI instantly extracts and understands your resume content, identifying key skills, experience, and achievements with precision.',
    highlight: 'Real-time parsing'
  },
  {
    icon: Target,
    title: 'Job Description Matching',
    description: 'Compare your resume against any job posting to see exactly how well your skills align and what keywords you might be missing.',
    highlight: 'Keyword analysis'
  },
  {
    icon: Sparkles,
    title: 'Resume Rewrite Engine',
    description: 'Let our AI rewrite and optimize your resume content for maximum impact, ensuring every word works in your favor.',
    highlight: 'Smart suggestions'
  },
  {
    icon: FileCheck,
    title: 'ATS Scoring System',
    description: 'Know exactly how your resume will perform in Applicant Tracking Systems before you apply. Get actionable insights to improve your score.',
    highlight: '90%+ accuracy'
  },
  {
    icon: Mail,
    title: 'Cover Letter Generator',
    description: 'Create compelling, personalized cover letters in seconds. Each one is tailored to match the job description and your unique qualifications.',
    highlight: 'One-click generation'
  },
  {
    icon: FileText,
    title: 'Resume Templates & Editor',
    description: 'Choose from dozens of professionally designed templates. Our drag-and-drop editor makes customization effortless.',
    highlight: '50+ templates'
  },
  {
    icon: History,
    title: 'Version History & Dashboard',
    description: 'Track all your resume versions in one place. Compare changes, restore previous versions, and manage multiple career profiles.',
    highlight: 'Unlimited versions'
  },
  {
    icon: Download,
    title: 'Export & Sharing',
    description: 'Download your resume in multiple formats including PDF and DOCX. Share via unique links or directly to job applications.',
    highlight: 'Multiple formats'
  },
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Upload Your Resume',
    description: 'Upload your existing resume or start fresh with our templates. We support all major formats.',
    icon: FileText
  },
  {
    step: '02',
    title: 'Add Job Description',
    description: 'Paste the job posting you\'re targeting. Our AI will analyze it to understand exactly what employers want.',
    icon: Target
  },
  {
    step: '03',
    title: 'AI Optimizes & Scores',
    description: 'Watch as our AI rewrites your resume, improves keyword matching, and calculates your ATS compatibility score.',
    icon: Zap
  },
  {
    step: '04',
    title: 'Download & Apply',
    description: 'Export your optimized resume and matching cover letter. Apply with confidence knowing you\'re ATS-ready.',
    icon: Download
  },
];

const FeaturesPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-charcoal/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-offwhite">ResumeForge</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/features' 
                  ? 'text-crimson' 
                  : 'text-softgray hover:text-offwhite'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/pricing' 
                  ? 'text-crimson' 
                  : 'text-softgray hover:text-offwhite'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-crimson' 
                  : 'text-softgray hover:text-offwhite'
              }`}
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="shadow-md shadow-crimson/40 font-bold">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-red-glow opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Powerful AI Features
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-offwhite leading-tight mb-6">
              Everything You Need to{' '}
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-crimson via-crimson-400 to-crimson">
                  Land Your Dream Job
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.path
                    d="M0,6 Q50,0 100,6 T200,6"
                    fill="none"
                    stroke="#E10600"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-softgray mb-10 max-w-2xl mx-auto">
              Our comprehensive suite of AI-powered tools helps you create, optimize, 
              and perfect your resume to stand out in today's competitive job market.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Try All Features Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('core-features').scrollIntoView({ behavior: 'smooth' })}>
                Explore Features
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="core-features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              AI-Powered Core Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-4">
              Built for Career Success
            </h2>
            <p className="text-xl text-softgray max-w-2xl mx-auto">
              Each feature is designed with one goal in mind: helping you get hired faster.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-charcoal rounded-2xl p-6 border border-charcoal/50 hover:border-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-crimson/5 hover:-translate-y-1"
                whileHover={{ y: -8, rotateY: 2, rotateX: -2 }}
              >
                {/* Red accent on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-crimson/20">
                    <feature.icon className="w-6 h-6 text-crimson" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-offwhite mb-2">{feature.title}</h3>
                  <p className="text-sm text-softgray mb-4 leading-relaxed">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-crimson font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>{feature.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-charcoal/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-crimson/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-4">
              How It Works
            </h2>
            <p className="text-xl text-softgray max-w-2xl mx-auto">
              Get from upload to apply-ready in four simple steps
            </p>
          </motion.div>

          {/* Steps with timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-charcoal -translate-y-1/2" />
            <div className="hidden lg:block absolute top-1/2 left-0 w-0 h-0.5 bg-gradient-to-r from-crimson to-charcoal -translate-y-1/2" 
                 style={{ width: '0%' }} />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-charcoal rounded-2xl p-8 border border-charcoal/50 hover:border-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-crimson/5 h-full">
                    {/* Step number and icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20">
                        <span className="text-xl font-bold text-white">{item.step}</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-charcoal/80 flex items-center justify-center border border-charcoal/50">
                        <item.icon className="w-5 h-5 text-crimson" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-offwhite mb-3">{item.title}</h3>
                    <p className="text-softgray leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Connector arrow for desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-charcoal border border-charcoal/50 rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-crimson/50" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Callout Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium mb-6">
                <FileCheck className="w-4 h-4" />
                ATS Optimization
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-6 leading-tight">
                Beat the ATS with{' '}
                <span className="text-crimson">Confidence</span>
              </h2>
              <p className="text-lg text-softgray mb-8 leading-relaxed">
                Up to 75% of resumes are rejected by ATS before a human sees them. 
                Our AI ensures your resume not only passes these systems but shines 
                in the eyes of hiring managers.
              </p>
              
              <div className="space-y-4">
                {[
                  'Keyword optimization based on job descriptions',
                  'Format compatibility with all major ATS systems',
                  'Real-time scoring and improvement suggestions',
                  'Industry-specific terminology enhancement'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-crimson/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-crimson" />
                    </div>
                    <span className="text-offwhite">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/register">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Start Optimizing Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-lg">
                {/* Main card */}
                <motion.div
                  className="bg-charcoal rounded-2xl shadow-2xl border border-charcoal/50 overflow-hidden"
                  whileHover={{ y: -8, rotateY: 3, rotateX: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 bg-gradient-to-br from-charcoal to-black">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-softgray">ATS Compatibility Score</span>
                      <span className="text-2xl font-bold text-crimson">94%</span>
                    </div>
                    {/* Score bar */}
                    <div className="h-3 bg-black rounded-full overflow-hidden mb-6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '94%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-crimson to-crimson-400 rounded-full"
                      />
                    </div>
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black rounded-xl p-4 border border-charcoal/50">
                        <div className="text-xs text-softgray mb-1">Keywords Matched</div>
                        <div className="text-xl font-bold text-green-400">24/28</div>
                      </div>
                      <div className="bg-black rounded-xl p-4 border border-charcoal/50">
                        <div className="text-xs text-softgray mb-1">Format Score</div>
                        <div className="text-xl font-bold text-green-400">100%</div>
                      </div>
                      <div className="bg-black rounded-xl p-4 border border-charcoal/50">
                        <div className="text-xs text-softgray mb-1">Readability</div>
                        <div className="text-xl font-bold text-green-400">Excellent</div>
                      </div>
                      <div className="bg-black rounded-xl p-4 border border-charcoal/50">
                        <div className="text-xs text-softgray mb-1">Structure</div>
                        <div className="text-xl font-bold text-green-400">Optimal</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    ATS Ready
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-crimson to-crimson-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Resume?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who have landed their dream jobs with ResumeForge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="shadow-md shadow-white/20 font-bold"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Started Free
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/15 shadow-md shadow-white/20 font-bold"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-charcoal/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-crimson flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-offwhite">ResumeForge</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-softgray">
              <Link to="/features" className="hover:text-offwhite transition-colors">Features</Link>
              <Link to="/pricing" className="hover:text-offwhite transition-colors">Pricing</Link>
              <Link to="/about" className="hover:text-offwhite transition-colors">About</Link>
              <Link to="/login" className="hover:text-offwhite transition-colors">Sign In</Link>
            </div>
            <p className="text-sm text-softgray">
              © 2024 ResumeForge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;
