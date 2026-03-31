import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Check, 
  X,
  ArrowRight,
  Zap,
  Crown,
  FileText,
  Mail,
  Target,
  History,
  Download,
  FileCheck
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

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with basic resume optimization.',
    icon: FileText,
    features: [
      { text: 'Resume upload', included: true },
      { text: 'Basic AI rewrite', included: true },
      { text: 'Basic resume score', included: true },
      { text: '1 cover letter generation', included: true },
      { text: 'PDF export only', included: true },
      { text: 'AI resume optimization', included: false },
      { text: 'Advanced ATS scoring', included: false },
      { text: 'Job-specific tailoring', included: false },
      { text: 'Unlimited cover letters', included: false },
      { text: 'Premium templates', included: false },
      { text: 'DOCX + PDF export', included: false },
      { text: 'Resume version history', included: false },
    ],
    cta: 'Get Started Free',
    ctaLink: '/register',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$12',
    period: '/month',
    description: 'Everything you need to land your dream job faster.',
    icon: Crown,
    features: [
      { text: 'Resume upload', included: true },
      { text: 'Basic AI rewrite', included: true },
      { text: 'Basic resume score', included: true },
      { text: '1 cover letter generation', included: true },
      { text: 'PDF export only', included: true },
      { text: 'AI resume optimization', included: true },
      { text: 'Advanced ATS scoring', included: true },
      { text: 'Job-specific tailoring', included: true },
      { text: 'Unlimited cover letters', included: true },
      { text: 'Premium templates', included: true },
      { text: 'DOCX + PDF export', included: true },
      { text: 'Resume version history', included: true },
    ],
    cta: 'Start Premium Trial',
    ctaLink: '/register',
    popular: true,
  },
];

const comparisonFeatures = [
  {
    category: 'Core Features',
    items: [
      { name: 'Resume uploads', free: '3', premium: 'Unlimited' },
      { name: 'AI resume optimization', free: false, premium: true },
      { name: 'Job description matching', free: 'Basic', premium: 'Advanced' },
      { name: 'ATS scoring', free: 'Basic', premium: 'Advanced' },
    ],
  },
  {
    category: 'Cover Letters',
    items: [
      { name: 'Cover letter generation', free: '1', premium: 'Unlimited' },
      { name: 'Job-specific tailoring', free: false, premium: true },
      { name: 'Template library access', free: false, premium: true },
    ],
  },
  {
    category: 'Templates & Export',
    items: [
      { name: 'Template selection', free: '5 basic', premium: '50+ premium' },
      { name: 'PDF export', free: true, premium: true },
      { name: 'DOCX export', free: false, premium: true },
    ],
  },
  {
    category: 'Tools & History',
    items: [
      { name: 'Version history', free: false, premium: true },
      { name: 'Resume dashboard', free: 'Basic', premium: 'Advanced' },
      { name: 'Export & sharing', free: 'Limited', premium: 'Full' },
    ],
  },
];

const PricingPage = () => {
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
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-crimson/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Simple, Fair Pricing
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-offwhite leading-tight mb-6">
              Invest in Your{' '}
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-crimson via-crimson-400 to-crimson">
                  Career Future
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
              Choose the plan that fits your needs. Start free, upgrade when you're ready to take your career to the next level.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 text-sm text-softgray/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>14-day money back</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-crimson text-white text-sm font-semibold rounded-full shadow-lg shadow-crimson/30">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Card */}
                <div 
                  className={`relative h-full rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular 
                      ? 'bg-gradient-to-b from-crimson/20 to-charcoal border-2 border-crimson/40 shadow-xl shadow-crimson/10' 
                      : 'bg-charcoal border border-charcoal/50 hover:border-charcoal/80'
                  }`}
                >
                  {/* Red glow for popular */}
                  {plan.popular && (
                    <div className="absolute inset-0 rounded-2xl bg-crimson/5" />
                  )}

                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        plan.popular 
                          ? 'bg-crimson shadow-lg shadow-crimson/20' 
                          : 'bg-charcoal border border-charcoal/50'
                      }`}>
                        <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-softgray'}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-offwhite">{plan.name}</h3>
                        <p className="text-sm text-softgray">{plan.description}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-offwhite">{plan.price}</span>
                        <span className="text-lg text-softgray">{plan.period}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to={plan.ctaLink} className="block mb-8">
                      <Button 
                        size="lg" 
                        className="w-full"
                        variant={plan.popular ? 'primary' : 'outline'}
                        rightIcon={<ArrowRight className="w-5 h-5" />}
                      >
                        {plan.cta}
                      </Button>
                    </Link>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                              plan.popular ? 'bg-crimson/20' : 'bg-green-500/20'
                            }`}>
                              <Check className={`w-3 h-3 ${plan.popular ? 'text-crimson' : 'text-green-400'}`} />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-charcoal/50 flex items-center justify-center flex-shrink-0">
                              <X className="w-3 h-3 text-softgray/40" />
                            </div>
                          )}
                          <span className={`text-sm ${feature.included ? 'text-offwhite' : 'text-softgray/50'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-charcoal/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 text-crimson border border-crimson/20 rounded-full text-sm font-medium mb-4">
              <FileCheck className="w-4 h-4" />
              Compare Plans
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-softgray max-w-2xl mx-auto">
              See exactly what you get with each plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal rounded-2xl border border-charcoal/50 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-black/50 border-b border-charcoal/50">
              <div className="p-6 text-left">
                <span className="text-sm font-semibold text-softgray uppercase tracking-wider">Feature</span>
              </div>
              <div className="p-6 text-center">
                <span className="text-sm font-semibold text-softgray uppercase tracking-wider">Free</span>
              </div>
              <div className="p-6 text-center bg-crimson/5">
                <span className="text-sm font-semibold text-crimson uppercase tracking-wider">Premium</span>
              </div>
            </div>

            {/* Table Body */}
            {comparisonFeatures.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="px-6 py-4 bg-black/30 border-b border-charcoal/30">
                  <span className="text-sm font-semibold text-crimson uppercase tracking-wider">
                    {category.category}
                  </span>
                </div>

                {/* Category Items */}
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="grid grid-cols-3 border-b border-charcoal/20 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="p-6">
                      <span className="text-offwhite">{item.name}</span>
                    </div>
                    <div className="p-6 text-center">
                      {typeof item.free === 'boolean' ? (
                        item.free ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-softgray/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-softgray">{item.free}</span>
                      )}
                    </div>
                    <div className="p-6 text-center bg-crimson/5">
                      {typeof item.premium === 'boolean' ? (
                        item.premium ? (
                          <Check className="w-5 h-5 text-crimson mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-softgray/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-offwhite font-medium">{item.premium}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-softgray">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards including Visa, Mastercard, and American Express. Payment is processed securely through Stripe.'
              },
              {
                q: 'Is there a free trial for Premium?',
                a: 'Yes! We offer a 14-day money-back guarantee on all Premium subscriptions. If you\'re not satisfied, we\'ll refund your payment in full.'
              },
              {
                q: 'Can I switch from Free to Premium?',
                a: 'Absolutely! You can upgrade to Premium at any time. Your existing work will be preserved and you\'ll immediately gain access to all Premium features.'
              },
              {
                q: 'Do you offer team or enterprise pricing?',
                a: 'Yes, we offer special pricing for teams and enterprises. Contact our sales team for custom quotes and dedicated support.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal rounded-xl p-6 border border-charcoal/50"
              >
                <h3 className="text-lg font-semibold text-offwhite mb-2">{faq.q}</h3>
                <p className="text-softgray leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
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
              Start Building Your Future Today
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with ResumeForge.
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
              <Link to="/features">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/15 shadow-md shadow-white/20 font-bold"
                >
                  Explore Features
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

export default PricingPage;
