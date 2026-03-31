import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Users,
  Briefcase,
  FileCheck,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Optimization',
    description: 'Let our AI analyze and enhance your resume with industry-specific suggestions.',
  },
  {
    icon: Target,
    title: 'Job Match Analysis',
    description: 'See exactly how well your resume matches any job description with detailed insights.',
  },
  {
    icon: Shield,
    title: 'ATS-Friendly',
    description: 'All our templates are optimized to pass Applicant Tracking Systems.',
  },
  {
    icon: Clock,
    title: 'Instant Results',
    description: 'Get AI suggestions and cover letters in seconds, not hours.',
  },
  {
    icon: FileCheck,
    title: 'Smart Scoring',
    description: 'Understand your resume strengths and weaknesses with comprehensive scoring.',
  },
  {
    icon: Mail,
    title: 'Cover Letters',
    description: 'Generate personalized cover letters tailored to each job application.',
  },
];

const stats = [
  { value: '50K+', label: 'Resumes Optimized' },
  { value: '95%', label: 'Success Rate' },
  { value: '4.9', label: 'User Rating', suffix: '★' },
  { value: '10x', label: 'Faster Than Traditional' },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Senior Software Engineer',
    company: 'Google',
    content: 'ResumeForge helped me land my dream job at Google. The AI suggestions were incredibly insightful.',
    avatar: 'S',
  },
  {
    name: 'James Chen',
    role: 'Product Manager',
    company: 'Stripe',
    content: 'The job matching feature is a game-changer. I could see exactly what needed improvement.',
    avatar: 'J',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'Airbnb',
    content: 'Beautiful templates and the cover letter generator saved me hours of work.',
    avatar: 'E',
  },
];

export const LandingPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-offwhite">ResumeForge</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 sm:gap-8">
            <Link 
              to="/features" 
              className={`text-xs sm:text-sm font-medium transition-colors ${
                location.pathname === '/features' 
                  ? 'text-crimson' 
                  : 'text-softgray hover:text-offwhite'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-xs sm:text-sm font-medium transition-colors ${
                location.pathname === '/pricing' 
                  ? 'text-crimson' 
                  : 'text-softgray hover:text-offwhite'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-xs sm:text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-crimson' 
                  : 'text-softgray hover:text-offwhite'
              }`}
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="shadow-md shadow-crimson/40 font-bold text-xs sm:text-sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-red-glow opacity-30" />
        <div className="absolute top-20 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-crimson/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-crimson/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-xs sm:text-sm font-medium">
                <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
                AI-Powered Resume Builder
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-offwhite leading-tight mb-4 sm:mb-6">
              Build Resumes That{' '}
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-crimson via-crimson-400 to-crimson">
                  Get You Hired
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-2 sm:h-3"
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

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-softgray mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
              Transform your resume with AI-powered optimization, ATS-friendly templates, 
              and intelligent job matching. Land your dream job faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
              <Link to="/register" className="w-full sm:w-auto">
                <Button size="lg" className="shadow-md shadow-crimson/40 font-bold w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />}>
                  Start Building Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="shadow-md shadow-white/20 font-bold w-full sm:w-auto" leftIcon={<Play className="w-4 sm:w-5 h-4 sm:h-5" />}>
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeInUp} className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-softgray/70 px-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                <span>Free tier available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 sm:mt-16 lg:mt-20 relative"
          >
            <div className="relative mx-auto max-w-5xl px-2 sm:px-0">
              {/* Main dashboard card */}
              <motion.div
                className="bg-charcoal rounded-xl sm:rounded-2xl shadow-2xl shadow-black/50 border border-charcoal/50 overflow-hidden"
                whileHover={{ y: -8, boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Browser chrome */}
                <div className="h-10 sm:h-12 bg-black/50 flex items-center gap-2 px-3 sm:px-4 border-b border-charcoal/50">
                  <div className="flex gap-1">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-crimson/60" />
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 h-6 bg-black rounded-md mx-2 sm:mx-4 px-2 sm:px-3 flex items-center text-xs text-softgray/50 truncate">
                    app.resumeforge.com/dashboard
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="p-3 sm:p-6 bg-gradient-to-br from-charcoal to-black">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {/* Score card */}
                    <div className="col-span-1 bg-black rounded-lg sm:rounded-xl p-3 sm:p-4 border border-charcoal/50">
                      <div className="text-xs text-softgray mb-1 sm:mb-2">Overall Score</div>
                      <div className="text-xl sm:text-3xl font-bold text-offwhite">87</div>
                      <div className="text-xs text-green-400 font-medium">+12 this week</div>
                    </div>
                    {/* Match card */}
                    <div className="col-span-1 bg-black rounded-lg sm:rounded-xl p-3 sm:p-4 border border-charcoal/50">
                      <div className="text-xs text-softgray mb-1 sm:mb-2">Job Match</div>
                      <div className="text-xl sm:text-3xl font-bold text-offwhite">94%</div>
                      <div className="text-xs text-crimson font-medium">Great fit</div>
                    </div>
                    {/* Views card */}
                    <div className="col-span-1 bg-black rounded-lg sm:rounded-xl p-3 sm:p-4 border border-charcoal/50">
                      <div className="text-xs text-softgray mb-1 sm:mb-2">Views</div>
                      <div className="text-xl sm:text-3xl font-bold text-offwhite">156</div>
                      <div className="text-xs text-softgray font-medium">Last 7 days</div>
                    </div>
                    {/* Downloads card */}
                    <div className="col-span-1 bg-black rounded-lg sm:rounded-xl p-3 sm:p-4 border border-charcoal/50">
                      <div className="text-xs text-softgray mb-1 sm:mb-2">Downloads</div>
                      <div className="text-xl sm:text-3xl font-bold text-offwhite">23</div>
                      <div className="text-xs text-softgray font-medium">This month</div>
                    </div>
                  </div>
                  {/* Resume preview */}
                  <div className="bg-black rounded-lg sm:rounded-xl border border-charcoal/50 p-3 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg sm:rounded-xl bg-crimson/10 flex items-center justify-center border border-crimson/20 flex-shrink-0">
                        <Users className="w-8 sm:w-10 h-8 sm:h-10 text-crimson" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-offwhite">Alexandra Chen</h3>
                        <p className="text-xs sm:text-sm text-softgray">Senior Software Engineer</p>
                        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
                          <span className="px-2 py-1 bg-crimson/10 text-crimson text-xs rounded-md border border-crimson/20">React</span>
                          <span className="px-2 py-1 bg-crimson/10 text-crimson text-xs rounded-md border border-crimson/20">Node.js</span>
                          <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-md border border-green-500/20">AWS</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <div className="w-16 sm:w-24 h-6 sm:h-8 bg-crimson rounded-lg" />
                        <div className="w-16 sm:w-24 h-6 sm:h-8 bg-charcoal rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards - hidden on mobile */}
              <motion.div
                className="hidden sm:block absolute -left-4 sm:-left-8 top-1/4 bg-charcoal rounded-xl shadow-lg p-3 sm:p-4 border border-charcoal/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 flex-shrink-0">
                    <FileCheck className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-softgray">ATS Check</p>
                    <p className="text-xs sm:text-sm font-semibold text-green-400">Passed ✓</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hidden sm:block absolute -right-4 sm:-right-8 top-1/3 bg-charcoal rounded-xl shadow-lg p-3 sm:p-4 border border-charcoal/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-crimson/10 flex items-center justify-center border border-crimson/20 flex-shrink-0">
                    <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-crimson" />
                  </div>
                  <div>
                    <p className="text-xs text-softgray">Match Score</p>
                    <p className="text-xs sm:text-sm font-semibold text-offwhite">94% → 97%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-charcoal/50 border-y border-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-offwhite mb-1 sm:mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-softgray">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />
              Powerful Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite mb-3 sm:mb-4 px-2">
              Everything You Need to Succeed
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-softgray max-w-2xl mx-auto px-2">
              Our AI-powered tools help you create resumes and cover letters that stand out and get noticed.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-charcoal rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-charcoal/50 hover:border-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-crimson/5"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-crimson/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform border border-crimson/20">
                  <feature.icon className="w-6 sm:w-7 h-6 sm:h-7 text-crimson" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-offwhite mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-softgray leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite mb-3 sm:mb-4 px-2">
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-softgray px-2">
              Get your professional resume in three simple steps
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Upload Your Resume', desc: 'Upload your existing resume or start from scratch with our templates.' },
              { step: '02', title: 'AI Analysis', desc: 'Our AI analyzes your content and matches it against job descriptions.' },
              { step: '03', title: 'Get Results', desc: 'Download your optimized resume and matching cover letters instantly.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-charcoal rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-charcoal/50 h-full">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-crimson/20 mb-3 sm:mb-4">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-offwhite mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-softgray">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 lg:-right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8 text-crimson/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Star className="w-3 sm:w-4 h-3 sm:h-4" />
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite mb-3 sm:mb-4 px-2">
              Loved by Professionals
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-charcoal rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-charcoal/50"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-softgray mb-4 sm:mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-crimson flex items-center justify-center text-white font-semibold text-sm sm:text-base flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-offwhite text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-softgray truncate">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-crimson to-crimson-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
              Join thousands of professionals who have transformed their careers with ResumeForge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
              <Link to="/register" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="shadow-md shadow-white/20 font-bold w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />}
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 bg-black text-softgray border-t border-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-crimson flex items-center justify-center">
                  <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-offwhite">ResumeForge</span>
              </div>
              <p className="text-xs sm:text-sm text-softgray">
                AI-powered resume builder helping professionals land their dream jobs.
              </p>
            </div>
            <div>
              <h4 className="text-offwhite font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><Link to="/features" className="hover:text-offwhite transition-colors">Features</Link></li>
                <li><Link to="/templates" className="hover:text-offwhite transition-colors">Templates</Link></li>
                <li><Link to="/pricing" className="hover:text-offwhite transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-offwhite font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><Link to="/about" className="hover:text-offwhite transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-offwhite transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-offwhite transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-offwhite font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><Link to="/privacy" className="hover:text-offwhite transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-offwhite transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-charcoal/50 text-xs sm:text-sm text-center">
            <p>© 2024 ResumeForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
