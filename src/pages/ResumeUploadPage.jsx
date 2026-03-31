import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import {
  Upload,
  FileText,
  File,
  CheckCircle,
  AlertCircle,
  X,
  Loader,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button, Card, CardTitle, Progress } from '../components/ui';
import { Layout, Header } from '../components/layout/Layout';
import { useApp } from '../context/AppContext';
import { parseResume } from '../utils/resumeParser';
import { clsx } from 'clsx';

export const ResumeUploadPage = () => {
  const navigate = useNavigate();
  const { setCurrentResume, addNotification } = useApp();
  const [uploadState, setUploadState] = useState('idle'); // idle, uploading, parsing, complete, error
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [parseResult, setParseResult] = useState(null);

  const simulateUpload = async () => {
    setUploadState('uploading');
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setUploadProgress(i);
    }
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);
      
      // Simulate upload
      await simulateUpload();
      
      // Parse the resume
      setUploadState('parsing');
      try {
        const result = await parseResume(uploadedFile, uploadedFile.type);
        setParseResult(result);
        setCurrentResume(result);
        setUploadState('complete');
        
        addNotification({
          type: 'success',
          title: 'Resume uploaded',
          message: 'Your resume has been successfully parsed.',
        });
      } catch (error) {
        setUploadState('error');
        addNotification({
          type: 'error',
          title: 'Upload failed',
          message: 'There was an error parsing your resume. Please try again.',
        });
      }
    }
  }, [setCurrentResume, addNotification]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
    },
    maxFiles: 1,
    disabled: uploadState === 'uploading' || uploadState === 'parsing',
  });

  const handleContinue = () => {
    navigate('/resumes/1/edit');
  };

  return (
    <Layout>
      <Header
        title="Upload Your Resume"
        subtitle="We'll analyze and optimize it for you"
      />

      <div className="p-6 max-w-4xl mx-auto">
        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          {...getRootProps()}
          className={clsx(
            'relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer',
            isDragActive
              ? 'border-primary-500 bg-primary-50'
              : uploadState !== 'idle'
              ? 'border-surface-200 bg-surface-50 cursor-not-allowed'
              : 'border-surface-300 hover:border-primary-400 hover:bg-primary-50/50'
          )}
        >
          <input {...getInputProps()} />
          
          <AnimatePresence mode="wait">
            {uploadState === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto">
                  <Upload className="w-10 h-10 text-primary-600" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-surface-900 mb-2">
                    {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume'}
                  </p>
                  <p className="text-surface-500 mb-4">
                    or click to browse files
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-surface-400">
                    <span className="flex items-center gap-1">
                      <File className="w-4 h-4" /> PDF
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" /> DOCX
                    </span>
                    <span className="flex items-center gap-1">
                      <File className="w-4 h-4" /> TXT
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {(uploadState === 'uploading' || uploadState === 'parsing') && (
              <motion.div
                key="uploading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto">
                  {uploadState === 'uploading' ? (
                    <Loader className="w-10 h-10 text-primary-600 animate-spin" />
                  ) : (
                    <Sparkles className="w-10 h-10 text-primary-600 animate-pulse" />
                  )}
                </div>
                <div>
                  <p className="text-xl font-semibold text-surface-900 mb-2">
                    {uploadState === 'uploading' ? 'Uploading your resume...' : 'Analyzing your resume...'}
                  </p>
                  <p className="text-surface-500 mb-6">
                    {uploadState === 'uploading' 
                      ? `Processing ${file?.name}`
                      : 'Extracting information with AI...'}
                  </p>
                  <Progress
                    value={uploadProgress}
                    size="lg"
                    className="max-w-xs mx-auto"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Parse Result */}
        <AnimatePresence>
          {uploadState === 'complete' && parseResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 space-y-6"
            >
              {/* Success Card */}
              <Card className="bg-gradient-to-br from-success-50 to-primary-50 border-success-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-success-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-surface-900">Resume Successfully Parsed!</h3>
                    <p className="text-sm text-surface-600">We've extracted all the information from your resume.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Info */}
                  <div className="bg-white/60 rounded-xl p-4">
                    <h4 className="font-medium text-surface-900 mb-3">Personal Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-surface-500">Name:</span> <span className="font-medium">{parseResult.personalInfo.name}</span></p>
                      <p><span className="text-surface-500">Email:</span> <span className="font-medium">{parseResult.personalInfo.email}</span></p>
                      <p><span className="text-surface-500">Location:</span> <span className="font-medium">{parseResult.personalInfo.location}</span></p>
                    </div>
                  </div>

                  {/* Extracted Sections */}
                  <div className="bg-white/60 rounded-xl p-4">
                    <h4 className="font-medium text-surface-900 mb-3">Extracted Sections</h4>
                    <div className="flex flex-wrap gap-2">
                      {parseResult.experience && (
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                          {parseResult.experience.length} Experience
                        </span>
                      )}
                      {parseResult.education && (
                        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                          {parseResult.education.length} Education
                        </span>
                      )}
                      {parseResult.skills && (
                        <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm">
                          {parseResult.skills.languages.length + parseResult.skills.frameworks.length} Skills
                        </span>
                      )}
                      {parseResult.certifications && (
                        <span className="px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-sm">
                          {parseResult.certifications.length} Certifications
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Extracted Content Preview */}
              <Card>
                <CardTitle className="mb-4">Content Preview</CardTitle>
                
                {/* Summary */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-surface-700 mb-2">Professional Summary</h4>
                  <p className="text-surface-600 bg-surface-50 rounded-lg p-3">
                    {parseResult.summary}
                  </p>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-surface-700 mb-2">Experience</h4>
                  <div className="space-y-3">
                    {parseResult.experience.slice(0, 2).map((exp) => (
                      <div key={exp.id} className="bg-surface-50 rounded-lg p-3">
                        <p className="font-medium text-surface-900">{exp.title}</p>
                        <p className="text-sm text-surface-500">{exp.company} • {exp.startDate} - {exp.endDate}</p>
                      </div>
                    ))}
                    {parseResult.experience.length > 2 && (
                      <p className="text-sm text-surface-500">+{parseResult.experience.length - 2} more positions</p>
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium text-surface-700 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {parseResult.skills.languages.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-primary-50 text-primary-600 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                    {parseResult.skills.frameworks.slice(0, 4).map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-accent-50 text-accent-600 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setUploadState('idle');
                    setFile(null);
                    setParseResult(null);
                  }}
                >
                  Upload Different File
                </Button>
                <Button
                  onClick={handleContinue}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Continue to Editor
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Card variant="gradient">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <CardTitle className="text-primary-900 mb-2">Pro Tips for Best Results</CardTitle>
                <ul className="space-y-2 text-sm text-primary-700/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Use PDF format for best parsing results
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Ensure your resume has clear section headings
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Include quantifiable achievements for better analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Keep formatting consistent throughout the document
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ResumeUploadPage;
