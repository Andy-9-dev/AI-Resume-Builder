import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Sparkles,
  Copy,
  Check,
  Download,
  RefreshCw,
  ChevronDown,
  User,
  Briefcase,
  FileText,
  Clock,
} from 'lucide-react';
import { Button, Card, CardTitle, Textarea, Badge, Tabs } from '../components/ui';
import { Layout, Header } from '../components/layout/Layout';
import { useApp } from '../context/AppContext';
import { generateCoverLetter, parseResume } from '../utils/resumeParser';
import { clsx } from 'clsx';

const tones = [
  { id: 'professional', label: 'Professional', description: 'Traditional and formal' },
  { id: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
  { id: 'confident', label: 'Confident', description: 'Bold and assertive' },
];

const lengths = [
  { id: 'short', label: 'Short', description: '~150 words', icon: Clock },
  { id: 'medium', label: 'Medium', description: '~250 words', icon: Clock },
  { id: 'detailed', label: 'Detailed', description: '~400 words', icon: Clock },
];

export const CoverLetterPage = () => {
  const navigate = useNavigate();
  const { currentResume, addNotification } = useApp();
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [coverLetter, setCoverLetter] = useState(null);
  const [selectedTone, setSelectedTone] = useState('professional');
  const [selectedLength, setSelectedLength] = useState('medium');
  const [jobDescription, setJobDescription] = useState('');
  const [copied, setCopied] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  const handleGenerate = async () => {
    if (!currentResume) {
      addNotification({
        type: 'error',
        title: 'No resume found',
        message: 'Please upload a resume first.',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateCoverLetter(currentResume, jobDescription, {
        tone: selectedTone,
        length: selectedLength,
      });
      setCoverLetter(result);
      setEditedContent(result.content);
      setStep(3);
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Generation failed',
        message: 'Unable to generate cover letter. Please try again.',
      });
    }
    setIsGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    setCoverLetter(null);
    setStep(2);
  };

  const sampleJobDescription = `We are looking for a Senior Software Engineer to join our growing team. 
The ideal candidate will have:
- 5+ years of experience in software development
- Strong proficiency in JavaScript, TypeScript, React, and Node.js
- Experience with cloud platforms (AWS or GCP)
- Strong communication and collaboration skills
- Experience leading technical projects

What we offer:
- Competitive salary and equity
- Remote-first culture
- Health, dental, and vision insurance
- Unlimited PTO`;

  return (
    <Layout>
      <Header
        title="Cover Letter Generator"
        subtitle="Create personalized cover letters in seconds"
        actions={
          coverLetter && (
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                leftIcon={<RefreshCw className="w-4 h-4" />}
                onClick={handleRegenerate}
              >
                Regenerate
              </Button>
              <Button leftIcon={<Download className="w-4 h-4" />}>
                Export PDF
              </Button>
            </div>
          )
        }
      />

      <div className="p-6 max-w-5xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((s, index) => (
            <div key={s} className="flex items-center">
              <div className={clsx(
                'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all',
                step >= s
                  ? 'bg-crimson text-offwhite'
                  : 'bg-neutral-700 text-neutral-300'
              )}>
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              {index < 2 && (
                <div className={clsx(
                  'w-24 h-1 mx-2 rounded transition-all',
                  step > s ? 'bg-crimson' : 'bg-neutral-700'
                )} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Options */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <Card>
                <CardTitle className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-crimson" />
                  Tone Selection
                </CardTitle>
                <div className="grid md:grid-cols-3 gap-4">
                  {tones.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => setSelectedTone(tone.id)}
                      className={clsx(
                        'p-4 rounded-xl border-2 text-left transition-all',
                        selectedTone === tone.id
                          ? 'border-crimson bg-crimson/10'
                          : 'border-neutral-600 bg-neutral-800/50 hover:border-neutral-500 hover:bg-neutral-800'
                      )}
                    >
                      <p className={`font-medium ${selectedTone === tone.id ? 'text-offwhite' : 'text-neutral-200'}`}>{tone.label}</p>
                      <p className={`text-sm ${selectedTone === tone.id ? 'text-neutral-200' : 'text-neutral-300'} mt-1`}>{tone.description}</p>
                    </button>
                  ))}
                </div>
              </Card>

              <Card>
                <CardTitle className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-crimson" />
                  Length Selection
                </CardTitle>
                <div className="grid md:grid-cols-3 gap-4">
                  {lengths.map((length) => (
                    <button
                      key={length.id}
                      onClick={() => setSelectedLength(length.id)}
                      className={clsx(
                        'p-4 rounded-xl border-2 text-left transition-all',
                        selectedLength === length.id
                          ? 'border-crimson bg-crimson/10'
                          : 'border-neutral-600 bg-neutral-800/50 hover:border-neutral-500 hover:bg-neutral-800'
                      )}
                    >
                      <p className={`font-medium ${selectedLength === length.id ? 'text-offwhite' : 'text-neutral-200'}`}>{length.label}</p>
                      <p className={`text-sm ${selectedLength === length.id ? 'text-neutral-200' : 'text-neutral-300'} mt-1`}>{length.description}</p>
                    </button>
                  ))}
                </div>
              </Card>

              <div className="flex justify-end">
                <Button
                  size="lg"
                  onClick={() => setStep(2)}
                  rightIcon={<Sparkles className="w-5 h-5" />}
                >
                  Continue to Generate
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Job Description */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-crimson" />
                    Job Description
                  </CardTitle>
                  <Badge variant="primary">{selectedTone} • {selectedLength}</Badge>
                </div>
                <p className="text-sm text-neutral-200 mb-4">
                  Paste the job description to tailor your cover letter. This helps us create a more targeted letter.
                </p>
                <Textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder={sampleJobDescription}
                  rows={10}
                  className="font-mono text-sm"
                />
              </Card>

              {/* Summary of selections */}
              <Card variant="gradient" className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary" size="md">{selectedTone}</Badge>
                    <span className="text-sm text-neutral-200">tone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="accent" size="md">{selectedLength}</Badge>
                    <span className="text-sm text-neutral-200">length</span>
                  </div>
                </div>
                <Button
                  onClick={handleGenerate}
                  isLoading={isGenerating}
                  leftIcon={<Sparkles className="w-5 h-5" />}
                  size="lg"
                >
                  Generate Cover Letter
                </Button>
              </Card>

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setJobDescription('');
                    handleGenerate();
                  }}
                  disabled={isGenerating}
                >
                  Skip & Generate Generic
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Result */}
          {step === 3 && coverLetter && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Generated Letter */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <CardTitle>Your Cover Letter</CardTitle>
                    <p className="text-sm text-neutral-200 mt-1">
                      Generated in {selectedTone} tone • {selectedLength} length
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </div>

                <div className="bg-surface-50 rounded-xl p-8 border border-surface-200">
                  <div className="max-w-2xl mx-auto">
                    <textarea
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      className="w-full min-h-[400px] bg-transparent border-none resize-none focus:outline-none text-neutral-900 leading-relaxed"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-surface-100 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-neutral-200">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      ~{coverLetter.metadata.estimatedReadTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {editedContent.split(' ').length} words
                    </span>
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <div className="flex justify-between">
                <Button variant="secondary" onClick={handleRegenerate}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={() => setStep(2)}>
                    Edit Options
                  </Button>
                  <Button leftIcon={<Download className="w-4 h-4" />}>
                    Export PDF
                  </Button>
                </div>
              </div>

              {/* Tips */}
              <Card variant="gradient">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <CardTitle className="text-neutral-900 mb-2">Pro Tips for Cover Letters</CardTitle>
                    <ul className="space-y-2 text-sm text-neutral-800">
                      <li>• Customize the first paragraph to mention the specific role and company</li>
                      <li>• Highlight 2-3 key achievements that directly match the job requirements</li>
                      <li>• End with a clear call to action and thank the reader</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default CoverLetterPage;
