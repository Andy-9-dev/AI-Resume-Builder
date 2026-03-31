import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  Sparkles,
  TrendingUp,
  Eye,
  Download,
  Clock,
  Plus,
  ArrowRight,
  Target,
  CheckCircle,
  AlertCircle,
  FileUp,
  Briefcase,
  Mail,
  ChevronRight,
  MoreVertical,
  Star,
} from 'lucide-react';
import { Button, Card, CardTitle, CardDescription, Progress, Badge, StatusBadge, CircularProgress } from '../components/ui';
import { Layout, Header } from '../components/layout/Layout';
import { useApp } from '../context/AppContext';
import { scoreResume } from '../utils/resumeParser';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [isLoading, setIsLoading] = useState(true);
  const [resumeScore, setResumeScore] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
    };
    loadData();
  }, []);

  const stats = [
    { label: 'Resume Score', value: 87, change: '+12', trend: 'up', icon: TrendingUp },
    { label: 'Views', value: 156, change: '+23', trend: 'up', icon: Eye },
    { label: 'Downloads', value: 23, change: '+5', trend: 'up', icon: Download },
    { label: 'Avg. Match', value: '94%', change: '+8%', trend: 'up', icon: Target },
  ];

  const recentActivity = [
    { type: 'score', message: 'Resume scored 87/100', time: '2 hours ago', icon: Star },
    { type: 'download', message: 'Resume downloaded by recruiter at Google', time: '5 hours ago', icon: Download },
    { type: 'match', message: 'New job match found: 94% with Stripe PM role', time: '1 day ago', icon: Target },
    { type: 'ai', message: 'AI suggested 3 improvements to your summary', time: '2 days ago', icon: Sparkles },
  ];

  const quickActions = [
    { label: 'Upload Resume', icon: FileUp, href: '/resumes/upload', color: 'primary' },
    { label: 'Analyze Job Fit', icon: Target, href: '/job-match', color: 'accent' },
    { label: 'Generate Cover Letter', icon: Mail, href: '/cover-letters/new', color: 'success' },
  ];

  return (
    <Layout>
      <Header
        title={`Welcome back, ${user?.name?.split(' ')[0] || 'Anderson'}`}
        subtitle="Here's how your resume is performing"
        actions={
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                Profile
              </Button>
            </Link>
            <Link to="/resumes/upload">
              <Button leftIcon={<Plus className="w-3 sm:w-4 h-3 sm:h-4" />} size="sm" className="text-xs sm:text-sm">
                New Resume
              </Button>
            </Link>
          </div>
        }
      />

      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card hoverEffect="lift" className="relative overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-neutral-300 mb-1">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2 flex-wrap">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-red-400 rotate-180 flex-shrink-0" />
                      )}
                      <span className={`text-xs sm:text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-400">this week</span>
                    </div>
                  </div>
                  <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
                    stat.label === 'Resume Score' ? 'bg-crimson/20' :
                    stat.label === 'Views' ? 'bg-blue-500/20' :
                    stat.label === 'Downloads' ? 'bg-green-500/20' :
                    'bg-orange-500/20'
                  }`}>
                    <stat.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${
                      stat.label === 'Resume Score' ? 'text-crimson' :
                      stat.label === 'Views' ? 'text-blue-400' :
                      stat.label === 'Downloads' ? 'text-green-400' :
                      'text-orange-400'
                    }`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-6 sm:mb-8"
        >
          <Card>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-gradient-to-br from-crimson/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-14 sm:w-18 h-14 sm:h-18 rounded-lg bg-crimson flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-offwhite truncate">{user?.name || 'User'}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 truncate">{user?.email || 'user@example.com'}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" size="sm" className="text-xs">Premium Member</Badge>
                    <Badge variant="primary" size="sm" className="text-xs">Verified</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Link to="/profile" className="flex-1 sm:flex-none">
                  <Button variant="secondary" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                    View Profile
                  </Button>
                </Link>
                <Link to="/settings" className="flex-1 sm:flex-none">
                  <Button variant="ghost" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                    Settings
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Card>
                <CardTitle className="mb-3 sm:mb-4 text-base sm:text-lg">Quick Actions</CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={index} to={action.href}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                          action.color === 'primary' ? 'border-crimson/40 bg-crimson/10 hover:border-crimson/60 hover:bg-crimson/15' :
                          action.color === 'accent' ? 'border-blue-500/40 bg-blue-500/10 hover:border-blue-500/60 hover:bg-blue-500/15' :
                          'border-green-500/40 bg-green-500/10 hover:border-green-500/60 hover:bg-green-500/15'
                        }`}
                      >
                        <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 ${
                          action.color === 'primary' ? 'bg-crimson/20 text-crimson' :
                          action.color === 'accent' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          <action.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                        </div>
                        <span className={`text-xs sm:text-sm font-medium text-center ${
                          action.color === 'primary' ? 'text-white' :
                          action.color === 'accent' ? 'text-blue-100' :
                          'text-green-100'
                        }`}>
                          {action.label}
                        </span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Resume Overview */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Card>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                  <div>
                    <CardTitle className="text-base sm:text-lg">Your Resume</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Last updated 2 days ago</CardDescription>
                  </div>
                  <Link to="/resumes/1/edit" className="w-full sm:w-auto">
                    <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />} className="w-full sm:w-auto text-xs sm:text-sm">
                      Edit
                    </Button>
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-neutral-700 overflow-x-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 min-w-min sm:min-w-0">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg sm:rounded-xl bg-gradient-to-br from-crimson/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-8 sm:w-10 h-8 sm:h-10 text-crimson" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-white">Alexandra Chen</h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mb-2 sm:mb-3">Senior Software Engineer</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <Badge variant="primary" size="sm" className="text-xs">React</Badge>
                        <Badge variant="accent" size="sm" className="text-xs">Node.js</Badge>
                        <Badge variant="success" size="sm" className="text-xs">AWS</Badge>
                        <Badge variant="warning" size="sm" className="text-xs">+5</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                      <CircularProgress
                        value={87}
                        size={60}
                        strokeWidth={5}
                        variant="primary"
                      />
                      <span className="text-xs text-neutral-300 mt-1">Score</span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-neutral-700 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                    <div className="text-center">
                      <p className="text-lg sm:text-2xl font-bold text-white">94%</p>
                      <p className="text-xs text-neutral-400">Job Match</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg sm:text-2xl font-bold text-white">89%</p>
                      <p className="text-xs text-neutral-400">ATS Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg sm:text-2xl font-bold text-white">92%</p>
                      <p className="text-xs text-neutral-400">Readability</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg sm:text-2xl font-bold text-white">85%</p>
                      <p className="text-xs text-neutral-400">Impact</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Job Matches */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Card>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                  <div>
                    <CardTitle className="text-base sm:text-lg">Recent Job Matches</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Based on your resume content</CardDescription>
                  </div>
                  <Link to="/job-match" className="w-full sm:w-auto">
                    <Button variant="ghost" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">View All</Button>
                  </Link>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  {[
                    { title: 'Senior Software Engineer', company: 'Stripe', match: 94, location: 'San Francisco, CA' },
                    { title: 'Staff Engineer', company: 'Airbnb', match: 89, location: 'Remote' },
                    { title: 'Tech Lead', company: 'Shopify', match: 85, location: 'Ottawa, ON' },
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 sm:p-4 bg-charcoal/30 rounded-lg sm:rounded-xl hover:bg-crimson/5 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-charcoal flex items-center justify-center border border-charcoal/50 flex-shrink-0">
                          <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-softgray" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-medium text-offwhite text-sm sm:text-base">{job.title}</h4>
                          <p className="text-xs sm:text-sm text-softgray truncate">{job.company} • {job.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                        <div className="text-right">
                          <div className="text-base sm:text-lg font-bold text-success-600">{job.match}%</div>
                          <div className="text-xs text-surface-500">match</div>
                        </div>
                        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-surface-400 group-hover:text-primary-500 transition-colors flex-shrink-0" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Recent Activity */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Card>
                <CardTitle className="mb-3 sm:mb-4 text-base sm:text-lg">Recent Activity</CardTitle>
                <div className="space-y-3 sm:space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex gap-2 sm:gap-3">
                      <div className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === 'score' ? 'bg-crimson/20 text-crimson' :
                        activity.type === 'download' ? 'bg-green-500/20 text-green-400' :
                        activity.type === 'match' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        <activity.icon className="w-3 sm:w-4 h-3 sm:h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-white">{activity.message}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Improvement Tips */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Card className="bg-gradient-to-br from-crimson/15 to-crimson/5 border-crimson/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg sm:rounded-xl bg-crimson/20 flex items-center justify-center shadow-sm border border-crimson/30 flex-shrink-0">
                    <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-crimson" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-white text-base sm:text-lg">AI Improvement</CardTitle>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                      Add more quantifiable achievements to your experience section to boost your impact score by up to 15%.
                    </p>
                    <Link to="/resumes/1/optimize" className="block mt-3">
                      <Button variant="primary" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                        Optimize Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* ATS Status */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Card>
                <CardTitle className="mb-3 sm:mb-4 text-white text-base sm:text-lg">ATS Compatibility</CardTitle>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 flex-shrink-0">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">Passed ✓</p>
                    <p className="text-xs sm:text-sm text-neutral-300">Your resume is ATS-friendly</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <Progress value={95} label="Keyword Density" size="sm" />
                  <Progress value={90} label="Format Score" size="sm" />
                  <Progress value={85} label="Structure Quality" size="sm" />
                </div>
              </Card>
            </motion.div>

            {/* Cover Letter Prompt */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Card className="bg-gradient-to-br from-crimson/10 to-crimson/5 border-crimson/20">
                <div className="text-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-charcoal flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm border border-charcoal/50">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-crimson" />
                  </div>
                  <CardTitle className="text-offwhite text-base sm:text-lg">Need a Cover Letter?</CardTitle>
                  <p className="text-xs sm:text-sm text-softgray mt-1 sm:mt-2 mb-3 sm:mb-4">
                    Generate a tailored cover letter for any job application in seconds.
                  </p>
                  <Link to="/cover-letters/new" className="block">
                    <Button variant="accent" size="sm" className="w-full text-xs sm:text-sm">
                      Create Cover Letter
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
