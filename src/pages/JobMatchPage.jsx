import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Target,
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  FileText,
  Plus,
  TrendingUp,
  Lightbulb,
  Copy,
  Check,
} from 'lucide-react';
import { Button, Card, CardTitle, Textarea, Badge, Progress, CircularProgress } from '../components/ui';
import { Layout, Header } from '../components/layout/Layout';
import { useApp } from '../context/AppContext';
import { analyzeJobMatch, parseResume } from '../utils/resumeParser';
import { clsx } from 'clsx';

export const JobMatchPage = () => {
  const navigate = useNavigate();
  const { currentResume, addNotification } = useApp();
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    try {
      // Use sample resume data if no current resume
      const resumeData = currentResume || await parseResume({}, 'text');
      const result = await analyzeJobMatch(resumeData, jobDescription);
      setMatchResult(result);
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Analysis failed',
        message: 'Unable to analyze job match. Please try again.',
      });
    }
    setIsAnalyzing(false);
  };

  const handleCopyRecommendations = () => {
    if (!matchResult) return;
    const text = matchResult.recommendations.map(r => r.message).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <Header
        title="Job Match Analysis"
        subtitle="See how well your resume matches any job description"
        actions={
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              leftIcon={<FileText className="w-4 h-4" />}
              onClick={() => navigate('/resumes/1/edit')}
            >
              Edit Resume
            </Button>
          </div>
        }
      />

      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Job Description Input */}
            <Card>
              <CardTitle className="mb-4">Paste Job Description</CardTitle>
              <p className="text-sm text-neutral-300 mb-4">
                Copy and paste the job description you want to match against. We'll analyze your resume against the requirements.
              </p>
              <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder={`Paste job description here...

Example:
We are looking for a Senior Software Engineer to join our team. 
Requirements:
- 5+ years of experience in software development
- Strong proficiency in JavaScript, TypeScript, React
- Experience with cloud platforms (AWS, GCP)
- Familiarity with CI/CD pipelines
- Excellent problem-solving skills`}
                rows={12}
                className="font-mono text-sm"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-neutral-400">
                  {jobDescription.length} characters
                </span>
                <Button
                  onClick={handleAnalyze}
                  isLoading={isAnalyzing}
                  disabled={!jobDescription.trim()}
                  leftIcon={<Search className="w-4 h-4" />}
                >
                  Analyze Match
                </Button>
              </div>
            </Card>

            {/* Sample Job Templates */}
            <Card variant="gradient">
              <CardTitle className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary-600" />
                Quick Start Templates
              </CardTitle>
              <div className="space-y-2">
                {[
                  'Software Engineer (Tech Company)',
                  'Product Manager (Startup)',
                  'Data Scientist (Enterprise)',
                  'DevOps Engineer (Remote)',
                ].map((template, index) => (
                  <button
                    key={index}
                    onClick={() => setJobDescription(prev => prev + `\n\n${template} position available...`)}
                    className="w-full text-left px-4 py-3 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors text-sm text-white font-medium border border-neutral-600 hover:border-neutral-500"
                  >
                    {template}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {!matchResult ? (
              <Card className="h-full flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ready to Analyze</h3>
                  <p className="text-sm text-neutral-300 max-w-xs mx-auto">
                    Paste a job description and click "Analyze Match" to see how well your resume fits.
                  </p>
                </div>
              </Card>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Overall Match Score */}
                  <Card className="bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <CardTitle className="text-neutral-900">Overall Match</CardTitle>
                        <p className="text-sm text-neutral-700 mt-1">Based on skills, experience, and keywords</p>
                      </div>
                      <CircularProgress
                        value={matchResult.overallMatch}
                        size={100}
                        strokeWidth={8}
                        variant={matchResult.overallMatch >= 80 ? 'success' : matchResult.overallMatch >= 60 ? 'warning' : 'error'}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-neutral-900 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-offwhite">{matchResult.matchedSkills.length}</p>
                        <p className="text-xs text-neutral-300">Skills Matched</p>
                      </div>
                      <div className="bg-neutral-900 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-offwhite">{matchResult.missingSkills.length}</p>
                        <p className="text-xs text-neutral-300">Skills Missing</p>
                      </div>
                      <div className="bg-neutral-900 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-offwhite">{matchResult.roleAlignment}%</p>
                        <p className="text-xs text-neutral-300">Role Alignment</p>
                      </div>
                    </div>
                  </Card>

                  {/* Matched Skills */}
                  <Card>
                    <CardTitle className="flex items-center gap-2 mb-4 text-green-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Matched Skills
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {matchResult.matchedSkills.map((skill, index) => (
                        <Badge key={index} variant="success" size="md">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  {/* Missing Skills */}
                  <Card>
                    <CardTitle className="flex items-center gap-2 mb-4 text-red-600">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Missing Skills
                    </CardTitle>
                    <p className="text-sm text-neutral-200 mb-4">
                      Consider adding these skills to improve your match:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {matchResult.missingSkills.map((skill, index) => (
                        <Badge key={index} variant="error" size="md">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  {/* Recommendations */}
                  <Card>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="flex items-center gap-2 text-yellow-600">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                        AI Recommendations
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopyRecommendations}
                        leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      >
                        {copied ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {matchResult.recommendations.map((rec, index) => (
                        <div
                          key={index}
                          className={clsx(
                            'flex gap-3 p-4 rounded-xl',
                            rec.type === 'critical' && 'bg-red-50 border border-red-200',
                            rec.type === 'improvement' && 'bg-yellow-50 border border-yellow-200',
                            rec.type === 'tip' && 'bg-blue-50 border border-blue-200'
                          )}
                        >
                          <div className={clsx(
                            'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0',
                            rec.type === 'critical' && 'bg-red-200 text-red-700',
                            rec.type === 'improvement' && 'bg-yellow-200 text-yellow-700',
                            rec.type === 'tip' && 'bg-blue-200 text-blue-700'
                          )}>
                            {rec.type === 'critical' ? (
                              <AlertTriangle className="w-4 h-4" />
                            ) : (
                              <Lightbulb className="w-4 h-4" />
                            )}
                          </div>
                          <p className={clsx(
                            'text-sm font-medium',
                            rec.type === 'critical' && 'text-red-800',
                            rec.type === 'improvement' && 'text-yellow-800',
                            rec.type === 'tip' && 'text-blue-800'
                          )}>
                            {rec.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="secondary"
                      className="flex-1"
                      onClick={() => navigate('/resumes/1/optimize')}
                      leftIcon={<Sparkles className="w-4 h-4" />}
                    >
                      Optimize Resume
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => navigate('/cover-letters/new')}
                      leftIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Generate Cover Letter
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default JobMatchPage;
