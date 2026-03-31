import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Target,
  Eye,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award
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

const values = [
  {
    icon: Shield,
    title: 'Accuracy Over Exaggeration',
    description: 'We believe in presenting you authentically. Our AI enhances your existing strengths without fabricating experience or skills you don\'t have.',
  },
  {
    icon: Eye,
    title: 'No Fake Experience',
    description: 'Your resume should reflect who you truly are. We optimize how you present your real experience, never inventing qualifications that aren\'t yours.',
  },
  {
    icon: Heart,
    title: 'Ethical AI Use',
    description: 'We use AI as a tool to help you articulate your value, not to deceive employers. Trust and transparency are at the core of everything we build.',
  },
  {
    icon: Target,
    title: 'Career-Focused Results',
    description: 'Every feature we build serves one purpose: helping you land the job you deserve. We measure success by your career outcomes, not vanity metrics.',
  },
];

const teamValues = [
  { value: '50K+', label: 'Users Helped' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '10M+', label: 'Resumes Processed' },
  { value: '500+', label: 'Companies Matched' },
];

const AboutPage = () => {
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-crimson/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Our Story
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-offwhite leading-tight mb-6">
              Built for Candidates,{' '}
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-crimson via-crimson-400 to-crimson">
                  By Candidates
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

            <motion.p variants={fadeInUp} className="text-xl text-softgray mb-10 max-w-3xl mx-auto leading-relaxed">
              ResumeForge was created to level the playing field in job applications. 
              We believe everyone deserves a fair chance to showcase their skills and 
              land their dream career — regardless of who they know or where they come from.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Join Our Community
              </Button>
            </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal/50 border-y border-charcoal/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamValues.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-offwhite mb-2">
                  {stat.value}
                </div>
                <div className="text-softgray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Why We Exist
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-4">
              The Problem We Solve
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 left-0 w-16 h-16 rounded-2xl bg-crimson/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-crimson">1</span>
              </div>
              
              <div className="pl-20 mb-8">
                <h3 className="text-2xl font-bold text-offwhite mb-4">The Challenge</h3>
                <p className="text-softgray leading-relaxed mb-6">
                  Job applications have become overwhelmingly difficult. Great candidates get 
                  rejected daily not because they lack skills, but because their resumes 
                  fail to pass ATS systems or fail to communicate their value effectively.
                </p>
              </div>

              <div className="space-y-4 pl-20">
                {[
                  'Up to 75% of resumes are rejected by ATS before human review',
                  'Most job seekers don\'t know what keywords to include',
                  'Writing and optimizing resumes takes hours of frustrating work',
                  'Professional resume services are expensive and time-consuming',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0" />
                    <span className="text-offwhite">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 left-0 w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              
              <div className="pl-20 mb-8">
                <h3 className="text-2xl font-bold text-offwhite mb-4">Our Solution</h3>
                <p className="text-softgray leading-relaxed mb-6">
                  We built ResumeForge to democratize career success. Our AI-powered platform 
                  helps you create resumes that not only pass ATS systems but genuinely 
                  represent your skills and potential.
                </p>
              </div>

              <div className="space-y-4 pl-20">
                {[
                  'AI analyzes job descriptions to suggest optimized content',
                  'Real-time ATS scoring shows exactly how you\'ll perform',
                  'Intelligent rewriting helps you articulate value clearly',
                  'Beautiful templates make strong first impressions',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <span className="text-offwhite">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Philosophy Section */}
      <section className="py-24 bg-charcoal/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-4">
              Built on Strong Principles
            </h2>
            <p className="text-xl text-softgray max-w-2xl mx-auto">
              Every decision we make is guided by these core beliefs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-charcoal rounded-2xl p-8 border border-charcoal/50 hover:border-crimson/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-crimson/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-crimson/20">
                  <value.icon className="w-7 h-7 text-crimson" />
                </div>
                <h3 className="text-xl font-semibold text-offwhite mb-3">{value.title}</h3>
                <p className="text-softgray leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-charcoal to-charcoal/50 rounded-3xl p-12 md:p-16 border border-charcoal/50 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-crimson/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-crimson/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-crimson/10 flex items-center justify-center mx-auto mb-8 border border-crimson/20"
              >
                <Award className="w-8 h-8 text-crimson" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-6 leading-tight">
                Our Mission
              </h2>
              
              <p className="text-xl text-softgray leading-relaxed mb-8">
                To empower every job seeker with the tools and insights they need to 
                present their authentic self confidently. We believe great careers 
                shouldn't be reserved for those who can afford expensive resume writers 
                or who have connections in high places.
              </p>

              <div className="flex items-center justify-center gap-2 text-crimson">
                <span className="text-lg font-medium">Your skills matter. Your experience counts.</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-offwhite mt-2">
                <span className="text-lg font-medium">Let us help you prove it.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Who It's For
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-6 leading-tight">
                Built for Ambitious{' '}
                <span className="text-crimson">Professionals</span>
              </h2>
              <p className="text-lg text-softgray mb-8 leading-relaxed">
                Whether you're a recent graduate starting your career journey, a seasoned 
                professional seeking new opportunities, or someone pivoting to a new industry, 
                ResumeForge is designed for you.
              </p>
              
              <div className="space-y-4">
                {[
                  'Job seekers who want to stand out from the crowd',
                  'Career changers looking to highlight transferable skills',
                  'Professionals aiming for promotions or new roles',
                  'Anyone tired of generic, ineffective resumes',
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Main visual */}
                <motion.div
                  className="bg-charcoal rounded-2xl shadow-2xl border border-charcoal/50 overflow-hidden"
                  whileHover={{ y: -8, rotateY: 3, rotateX: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 bg-gradient-to-br from-charcoal to-black">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 rounded-2xl bg-crimson/10 flex items-center justify-center mx-auto mb-4 border border-crimson/20">
                        <TrendingUp className="w-10 h-10 text-crimson" />
                      </div>
                      <h3 className="text-xl font-bold text-offwhite">Your Career Trajectory</h3>
                    </div>
                    
                    {/* Visual journey */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-green-500 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-crimson/20 flex items-center justify-center border border-crimson/30">
                          <span className="text-xs font-bold text-crimson">2</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '70%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.7 }}
                              className="h-full bg-gradient-to-r from-crimson to-crimson-400 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-charcoal/50 flex items-center justify-center border border-charcoal">
                          <span className="text-xs font-bold text-softgray">3</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                            <div className="h-full w-0 bg-charcoal/30 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-charcoal/50 text-center">
                      <p className="text-sm text-softgray">Your journey to success</p>
                      <p className="text-lg font-semibold text-crimson">Starts here</p>
                    </div>
                  </div>
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
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who have taken control of their job search with ResumeForge.
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

export default AboutPage;
