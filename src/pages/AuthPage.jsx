import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button, Input } from '../components/ui';
import { useApp } from '../context/AppContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    
    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    login({
      id: '1',
      name: 'Alexandra Chen',
      email: formData.email,
    });
    
    setIsLoading(false);
    navigate('/dashboard');
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    login({
      id: '1',
      name: 'Alexandra Chen',
      email: 'alexandra@email.com',
    });
    setIsLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-offwhite">ResumeForge</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-offwhite mb-2">Welcome back</h1>
            <p className="text-softgray">Sign in to continue optimizing your resume</p>
          </div>

          {/* Google Login */}
          <Button
            variant="secondary"
            size="lg"
            className="w-full mb-6"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-charcoal" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black text-softgray">or</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              leftIcon={<Mail className="w-5 h-5" />}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              leftIcon={<Lock className="w-5 h-5" />}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-charcoal text-crimson focus:ring-crimson bg-black"
                />
                <span className="text-sm text-softgray">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-crimson hover:text-crimson-600">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
              Sign In
            </Button>
          </form>

          {/* Register link */}
          <p className="mt-8 text-center text-softgray">
            Don't have an account?{' '}
            <Link to="/register" className="text-crimson hover:text-crimson-600 font-medium">
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-crimson to-crimson-700 items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-lg text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Career Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of professionals who have landed their dream jobs with AI-powered resume optimization.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-white/80">Resumes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setCurrentStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    login({
      id: '1',
      name: formData.name,
      email: formData.email,
    });
    
    setIsLoading(false);
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-crimson to-crimson-700 items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Start Your Success Story
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Create your free account and get instant access to AI-powered resume optimization.
          </p>
          <div className="space-y-4 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            {[
              'Unlimited resume versions',
              'AI-powered optimization',
              'ATS-friendly templates',
              'Cover letter generator',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-offwhite">ResumeForge</span>
          </Link>

          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentStep >= step 
                    ? 'bg-crimson text-white' 
                    : 'bg-charcoal text-softgray'
                }`}>
                  {step}
                </div>
                {step < 2 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    currentStep > step ? 'bg-crimson' : 'bg-charcoal'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-bold text-offwhite mb-2">Create your account</h1>
                <p className="text-softgray">Enter your details to get started</p>
              </div>

              <Input
                label="Full Name"
                placeholder="Alexandra Chen"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
              />

              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
              />

              <Button size="lg" className="w-full" onClick={handleNext}>
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-center text-softgray">
                Already have an account?{' '}
                <Link to="/login" className="text-crimson hover:text-crimson-600 font-medium">
                  Sign in
                </Link>
              </p>
            </motion.div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-bold text-offwhite mb-2">Set your password</h1>
                <p className="text-softgray">Create a secure password for your account</p>
              </div>

              <Input
                label="Password"
                type="password"
                placeholder="Min. 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={errors.password}
                hint="Must be at least 8 characters"
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                error={errors.confirmPassword}
              />

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-charcoal text-crimson focus:ring-crimson bg-black"
                />
                <span className="text-sm text-softgray">
                  I agree to the{' '}
                  <Link to="/terms" className="text-crimson">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-crimson">Privacy Policy</Link>
                </span>
              </label>
              {errors.acceptTerms && (
                <p className="text-sm text-crimson -mt-4">{errors.acceptTerms}</p>
              )}

              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                  onClick={() => setCurrentStep(1)}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={handleSubmit}
                  isLoading={isLoading}
                >
                  Create Account
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
