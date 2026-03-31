import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Wand2,
  Check,
  X,
  ArrowLeft,
  RotateCcw,
  Lightbulb,
  Zap,
  FileText,
  RefreshCw,
} from 'lucide-react';
import { Button, Card, CardTitle, Textarea, Badge, Tabs } from '../components/ui';
import { Layout, Header } from '../components/layout/Layout';
import { useApp } from '../context/AppContext';
import { rewriteResumeSection, scoreResume, parseResume } from '../utils/resumeParser';
import { clsx } from 'clsx';

const rewriteModes = [
  {
    id: 'improve',
    label: 'Improve Wording',
    description: 'Enhance clarity and impact',
    icon: Zap,
  },
  {
    id: 'ats_optimize',
    label: 'ATS Optimization',
    description: 'Boost keyword density',
    icon: FileText,
  },
  {
    id: 'job_tailor',
    label: 'Job Tailoring',
    description: 'Match specific job requirements',
    icon: Sparkles,
  },
  {
    id: 'shorten',
    label: 'Shorten',
    description: 'Condense for brevity',
    icon: FileText,
  },
  {
    id: 'expand',
    label: 'Expand',
    description: 'Add more detail',
    icon: Lightbulb,
  },
];

export const ResumeOptimizePage = () => {
  const navigate = useNavigate();
  const { currentResume, addNotification } = useApp();
  const [selectedSection, setSelectedSection] = useState('summary');
  const [selectedMode, setSelectedMode] = useState('improve');
  const [isRewriting, setIsRewriting] = useState(false);
  const [rewriteResult, setRewriteResult] = useState(null);
  const [originalContent, setOriginalContent] = useState('');
  const [scores, setScores] = useState(null);

  const resumeData = currentResume || {
    summary: 'Results-driven software engineer with 6+ years of experience building scalable web applications.',
    experience: [
      {
        id: '1',
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        description: 'Led development of microservices architecture serving 2M+ daily active users. Reduced API response times by 40% through strategic caching and optimization.',
      },
    ],
  };

  const sections = [
    { id: 'summary', label: 'Summary', content: resumeData.summary },
    { id: 'experience', label: 'Experience', content: resumeData.experience[0]?.description || '' },
  ];

  const handleRewrite = async () => {
    const section = sections.find(s => s.id === selectedSection);
    if (!section) return;

    setOriginalContent(section.content);
    setIsRewriting(true);

    try {
      const result = await rewriteResumeSection(selectedSection, section.content, selectedMode);
      setRewriteResult(result);

      // Get updated scores
      const newScores = await scoreResume(resumeData);
      setScores(newScores);
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Rewrite failed',
        message: 'Unable to rewrite section. Please try again.',
      });
    }

    setIsRewriting(false);
  };

  const handleApply = () => {
    addNotification({
      type: 'success',
      title: 'Changes applied',
      message: 'Your resume has been updated with the AI suggestions.',
    });
    setRewriteResult(null);
    navigate('/resumes/1/edit');
  };

  const handleReject = () => {
    setRewriteResult(null);
  };

  const handleRegenerate = () => {
    setRewriteResult(null);
    handleRewrite();
  };

  return (
    <Layout>
      <Header
        title="AI Resume Optimization"
        subtitle="Let AI enhance your resume content"
        actions={
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate('/resumes/1/edit')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Editor
            </Button>
          </div>
        }
      />

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Section Selection */}
            <Card>
              <CardTitle className="mb-4">Select Section</CardTitle>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setSelectedSection(section.id);
                      setRewriteResult(null);
                    }}
                    className={clsx(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all',
                      selectedSection === section.id
                        ? 'bg-primary-50 text-primary-700 border-2 border-primary-500'
                        : 'bg-surface-50 hover:bg-surface-100 border-2 border-transparent'
                    )}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="font-medium capitalize">{section.label}</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Rewrite Mode Selection */}
            <Card>
              <CardTitle className="mb-4">Rewrite Mode</CardTitle>
              <div className="space-y-2">
                {rewriteModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => {
                      setSelectedMode(mode.id);
                      setRewriteResult(null);
                    }}
                    className={clsx(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all',
                      selectedMode === mode.id
                        ? 'bg-primary-50 text-primary-700 border-2 border-primary-500'
                        : 'bg-surface-50 hover:bg-surface-100 border-2 border-transparent'
                    )}
                  >
                    <mode.icon className="w-5 h-5" />
                    <div>
                      <span className="font-medium block">{mode.label}</span>
                      <span className="text-xs text-surface-500">{mode.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Rewrite Button */}
            <Button
              size="lg"
              className="w-full"
              onClick={handleRewrite}
              isLoading={isRewriting}
              leftIcon={<Wand2 className="w-5 h-5" />}
            >
              Rewrite with AI
            </Button>
          </motion.div>

          {/* Right Column - Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {!rewriteResult ? (
              <Card className="min-h-[500px] flex items-center justify-center">
                <div className="text-center max-w-md">
                  <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 mb-2">
                    Ready to Optimize
                  </h3>
                  <p className="text-surface-500 mb-6">
                    Select a section and rewrite mode, then click "Rewrite with AI" to get AI-powered suggestions.
                  </p>
                  <div className="bg-surface-50 rounded-xl p-4 text-left">
                    <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-2">
                      Current Content ({selectedSection})
                    </p>
                    <p className="text-sm text-surface-700 line-clamp-4">
                      {sections.find(s => s.id === selectedSection)?.content}
                    </p>
                  </div>
                </div>
              </Card>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original */}
                    <Card className="bg-error-50/50 border-error-100">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="error" size="sm">Original</Badge>
                      </div>
                      <p className="text-surface-700 whitespace-pre-line">
                        {originalContent}
                      </p>
                    </Card>

                    {/* Rewritten */}
                    <Card className="bg-success-50/50 border-success-100">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="success" size="sm">Rewritten</Badge>
                        <Badge variant="primary" size="sm">{selectedMode}</Badge>
                      </div>
                      <p className="text-surface-700 whitespace-pre-line">
                        {rewriteResult.rewritten}
                      </p>
                    </Card>
                  </div>

                  {/* AI Explanation */}
                  <Card variant="gradient">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <CardTitle className="text-primary-900 mb-2">Why This Change?</CardTitle>
                        <p className="text-sm text-primary-700/80">
                          {rewriteResult.explanation}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <Badge variant="primary" size="sm">
                            <Zap className="w-3 h-3 mr-1" />
                            {Math.round(rewriteResult.confidence * 100)}% confidence
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Score Impact */}
                  {scores && (
                    <Card>
                      <CardTitle className="mb-4">Score Impact</CardTitle>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-surface-50 rounded-xl">
                          <p className="text-2xl font-bold text-surface-900">{scores.overall}</p>
                          <p className="text-xs text-surface-500">Overall Score</p>
                        </div>
                        <div className="text-center p-4 bg-surface-50 rounded-xl">
                          <p className="text-2xl font-bold text-success-600">{scores.atsCompatibility.score}%</p>
                          <p className="text-xs text-surface-500">ATS Score</p>
                        </div>
                        <div className="text-center p-4 bg-surface-50 rounded-xl">
                          <p className="text-2xl font-bold text-primary-600">{scores.readability.score}%</p>
                          <p className="text-xs text-surface-500">Readability</p>
                        </div>
                        <div className="text-center p-4 bg-surface-50 rounded-xl">
                          <p className="text-2xl font-bold text-accent-600">{scores.impact.score}%</p>
                          <p className="text-xs text-surface-500">Impact</p>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="secondary"
                      onClick={handleRegenerate}
                      leftIcon={<RotateCcw className="w-4 h-4" />}
                    >
                      Regenerate
                    </Button>
                    <div className="flex gap-3">
                      <Button
                        variant="ghost"
                        onClick={handleReject}
                        leftIcon={<X className="w-4 h-4" />}
                      >
                        Keep Original
                      </Button>
                      <Button
                        onClick={handleApply}
                        leftIcon={<Check className="w-4 h-4" />}
                      >
                        Apply Changes
                      </Button>
                    </div>
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

export default ResumeOptimizePage;
