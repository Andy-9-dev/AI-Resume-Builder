import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Save,
  Download,
  Share2,
  Sparkles,
  Plus,
  Trash2,
  GripVertical,
  ChevronDown,
  ChevronUp,
  Eye,
  Edit3,
  Check,
  X,
  FileText,
  Mail,
  Settings,
  RotateCcw,
} from 'lucide-react';
import { Button, Card, CardTitle, Input, Textarea, Badge, Tabs, Modal } from '../components/ui';
import { Layout, Header } from '../components/layout/Layout';
import { useApp } from '../context/AppContext';
import { parseResume } from '../utils/resumeParser';
import { clsx } from 'clsx';

const sections = [
  { id: 'summary', label: 'Summary', icon: FileText },
  { id: 'experience', label: 'Experience', icon: FileText },
  { id: 'education', label: 'Education', icon: FileText },
  { id: 'skills', label: 'Skills', icon: FileText },
  { id: 'certifications', label: 'Certifications', icon: FileText },
];

export const ResumeEditorPage = () => {
  const navigate = useNavigate();
  const { currentResume, setCurrentResume } = useApp();
  const [activeSection, setActiveSection] = useState('summary');
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [resumeData, setResumeData] = useState(currentResume || {
    personalInfo: {
      name: 'Anderson',
      email: 'anderson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedIn: 'linkedin.com/in/alexandrachen',
      website: 'alexandra-chen.dev',
    },
    summary: 'Results-driven software engineer with 6+ years of experience building scalable web applications. Passionate about clean code, user experience, and mentoring junior developers.',
    experience: [
      {
        id: '1',
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        startDate: '2021-03',
        endDate: 'Present',
        description: 'Led development of microservices architecture serving 2M+ daily active users. Reduced API response times by 40% through strategic caching and optimization. Mentored team of 5 engineers.',
      },
    ],
    education: [
      {
        id: '1',
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        startDate: '2012-09',
        endDate: '2016-05',
      },
    ],
    skills: {
      languages: ['JavaScript', 'TypeScript', 'Python'],
      frameworks: ['React', 'Node.js', 'Next.js'],
      tools: ['Git', 'Docker', 'AWS'],
    },
  });

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsEditing(false);
  };

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'summary':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1.5">Professional Summary</label>
              <Textarea
                value={resumeData.summary}
                onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
                rows={6}
                placeholder="Write a compelling summary of your professional background..."
              />
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-50 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <GripVertical className="w-5 h-5 text-surface-400 cursor-grab" />
                    <Badge variant="primary" size="sm">Position {index + 1}</Badge>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => {
                    setResumeData(prev => ({
                      ...prev,
                      experience: prev.experience.filter((_, i) => i !== index),
                    }));
                  }}>
                    <Trash2 className="w-4 h-4 text-error-500" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Job Title"
                    value={exp.title}
                    onChange={(e) => {
                      const newExp = [...resumeData.experience];
                      newExp[index].title = e.target.value;
                      setResumeData(prev => ({ ...prev, experience: newExp }));
                    }}
                  />
                  <Input
                    label="Company"
                    value={exp.company}
                    onChange={(e) => {
                      const newExp = [...resumeData.experience];
                      newExp[index].company = e.target.value;
                      setResumeData(prev => ({ ...prev, experience: newExp }));
                    }}
                  />
                  <Input
                    label="Location"
                    value={exp.location}
                    onChange={(e) => {
                      const newExp = [...resumeData.experience];
                      newExp[index].location = e.target.value;
                      setResumeData(prev => ({ ...prev, experience: newExp }));
                    }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Start Date"
                      value={exp.startDate}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].startDate = e.target.value;
                        setResumeData(prev => ({ ...prev, experience: newExp }));
                      }}
                    />
                    <Input
                      label="End Date"
                      value={exp.endDate}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].endDate = e.target.value;
                        setResumeData(prev => ({ ...prev, experience: newExp }));
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Textarea
                    label="Description"
                    value={exp.description}
                    onChange={(e) => {
                      const newExp = [...resumeData.experience];
                      newExp[index].description = e.target.value;
                      setResumeData(prev => ({ ...prev, experience: newExp }));
                    }}
                    rows={4}
                  />
                </div>
              </motion.div>
            ))}
            <Button
              variant="secondary"
              className="w-full"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => {
                setResumeData(prev => ({
                  ...prev,
                  experience: [
                    ...prev.experience,
                    {
                      id: Date.now().toString(),
                      title: '',
                      company: '',
                      location: '',
                      startDate: '',
                      endDate: '',
                      description: '',
                    },
                  ],
                }));
              }}
            >
              Add Experience
            </Button>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-50 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="accent" size="sm">Education {index + 1}</Badge>
                  <Button variant="ghost" size="sm" onClick={() => {
                    setResumeData(prev => ({
                      ...prev,
                      education: prev.education.filter((_, i) => i !== index),
                    }));
                  }}>
                    <Trash2 className="w-4 h-4 text-error-500" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Degree"
                    value={edu.degree}
                    onChange={(e) => {
                      const newEdu = [...resumeData.education];
                      newEdu[index].degree = e.target.value;
                      setResumeData(prev => ({ ...prev, education: newEdu }));
                    }}
                  />
                  <Input
                    label="Institution"
                    value={edu.school}
                    onChange={(e) => {
                      const newEdu = [...resumeData.education];
                      newEdu[index].school = e.target.value;
                      setResumeData(prev => ({ ...prev, education: newEdu }));
                    }}
                  />
                  <Input
                    label="Location"
                    value={edu.location}
                    onChange={(e) => {
                      const newEdu = [...resumeData.education];
                      newEdu[index].location = e.target.value;
                      setResumeData(prev => ({ ...prev, education: newEdu }));
                    }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Start Year"
                      value={edu.startDate}
                      onChange={(e) => {
                        const newEdu = [...resumeData.education];
                        newEdu[index].startDate = e.target.value;
                        setResumeData(prev => ({ ...prev, education: newEdu }));
                      }}
                    />
                    <Input
                      label="End Year"
                      value={edu.endDate}
                      onChange={(e) => {
                        const newEdu = [...resumeData.education];
                        newEdu[index].endDate = e.target.value;
                        setResumeData(prev => ({ ...prev, education: newEdu }));
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            <Button
              variant="secondary"
              className="w-full"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => {
                setResumeData(prev => ({
                  ...prev,
                  education: [
                    ...prev.education,
                    { id: Date.now().toString(), degree: '', school: '', location: '', startDate: '', endDate: '' },
                  ],
                }));
              }}
            >
              Add Education
            </Button>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-3">Programming Languages</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {resumeData.skills.languages.map((skill, index) => (
                  <Badge key={index} variant="primary" className="pr-2">
                    {skill}
                    <button
                      onClick={() => {
                        const newSkills = [...resumeData.skills.languages];
                        newSkills.splice(index, 1);
                        setResumeData(prev => ({
                          ...prev,
                          skills: { ...prev.skills, languages: newSkills },
                        }));
                      }}
                      className="ml-1 text-crimson hover:text-error-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Input
                placeholder="Add a language..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    setResumeData(prev => ({
                      ...prev,
                      skills: {
                        ...prev.skills,
                        languages: [...prev.skills.languages, e.target.value],
                      },
                    }));
                    e.target.value = '';
                  }
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-3">Frameworks & Libraries</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {resumeData.skills.frameworks.map((skill, index) => (
                  <Badge key={index} variant="accent" className="pr-2">
                    {skill}
                    <button
                      onClick={() => {
                        const newSkills = [...resumeData.skills.frameworks];
                        newSkills.splice(index, 1);
                        setResumeData(prev => ({
                          ...prev,
                          skills: { ...prev.skills, frameworks: newSkills },
                        }));
                      }}
                      className="ml-1 text-crimson hover:text-error-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Input
                placeholder="Add a framework..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    setResumeData(prev => ({
                      ...prev,
                      skills: {
                        ...prev.skills,
                        frameworks: [...prev.skills.frameworks, e.target.value],
                      },
                    }));
                    e.target.value = '';
                  }
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-3">Tools & Technologies</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {resumeData.skills.tools.map((skill, index) => (
                  <Badge key={index} variant="default" className="pr-2">
                    {skill}
                    <button
                      onClick={() => {
                        const newSkills = [...resumeData.skills.tools];
                        newSkills.splice(index, 1);
                        setResumeData(prev => ({
                          ...prev,
                          skills: { ...prev.skills, tools: newSkills },
                        }));
                      }}
                      className="ml-1 text-softgray hover:text-error-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <Input
                placeholder="Add a tool..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    setResumeData(prev => ({
                      ...prev,
                      skills: {
                        ...prev.skills,
                        tools: [...prev.skills.tools, e.target.value],
                      },
                    }));
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <Header
        title="Resume Editor"
        subtitle="Edit and customize your resume"
        actions={
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Reset
            </Button>
            <Button
              variant="secondary"
              leftIcon={<Eye className="w-4 h-4" />}
              onClick={() => setShowPreview(true)}
            >
              Preview
            </Button>
            <Button
              variant="secondary"
              leftIcon={<Share2 className="w-4 h-4" />}
            >
              Share
            </Button>
            <Button
              leftIcon={<Download className="w-4 h-4" />}
            >
              Export
            </Button>
          </div>
        }
      />

      <div className="flex h-[calc(100vh-8rem)]">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-64 border-r border-surface-200 bg-white p-4 overflow-y-auto"
        >
          {/* Personal Info Quick Edit */}
          <Card padding="sm" className="mb-4 bg-gradient-to-br from-primary-50 to-accent-50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-semibold">
                {resumeData.personalInfo.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-surface-900 text-sm truncate">{resumeData.personalInfo.name}</p>
                <p className="text-xs text-surface-500 truncate">{resumeData.personalInfo.email}</p>
              </div>
            </div>
          </Card>

          {/* Sections */}
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={clsx(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all',
                  activeSection === section.id
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-surface-600 hover:bg-surface-50'
                )}
              >
                <section.icon className={clsx(
                  'w-5 h-5',
                  activeSection === section.id ? 'text-primary-600' : 'text-surface-400'
                )} />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            ))}
          </nav>

          {/* AI Actions */}
          <div className="mt-6 pt-6 border-t border-surface-200">
            <p className="text-xs font-medium text-surface-500 uppercase tracking-wider mb-3">AI Actions</p>
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
              leftIcon={<Sparkles className="w-4 h-4" />}
              onClick={() => navigate('/resumes/1/optimize')}
            >
              Optimize with AI
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start mt-2"
              leftIcon={<Mail className="w-4 h-4" />}
              onClick={() => navigate('/cover-letters/new')}
            >
              Generate Cover Letter
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-black">
          <div className="max-w-3xl mx-auto p-6">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white capitalize">
                  {activeSection === 'summary' ? 'Professional Summary' : activeSection}
                </h2>
                <p className="text-sm text-neutral-300">
                  {activeSection === 'summary' 
                    ? 'Write a compelling summary that highlights your key qualifications'
                    : `Manage your resume ${activeSection}`}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? (
                    <>
                      <Check className="w-4 h-4 mr-1" /> Done
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-4 h-4 mr-1" /> Edit
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Section Content */}
            <Card>
              {isEditing || activeSection !== 'summary' ? (
                renderSectionContent()
              ) : (
                <div className="space-y-6">
                  {/* Personal Info Edit */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      value={resumeData.personalInfo.name}
                      onChange={(e) => updatePersonalInfo('name', e.target.value)}
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    />
                    <Input
                      label="Phone"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    />
                    <Input
                      label="Location"
                      value={resumeData.personalInfo.location}
                      onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    />
                    <Input
                      label="LinkedIn"
                      value={resumeData.personalInfo.linkedIn}
                      onChange={(e) => updatePersonalInfo('linkedIn', e.target.value)}
                    />
                    <Input
                      label="Website"
                      value={resumeData.personalInfo.website}
                      onChange={(e) => updatePersonalInfo('website', e.target.value)}
                    />
                  </div>

                  <div className="pt-4 border-t border-surface-200">
                    {renderSectionContent()}
                  </div>
                </div>
              )}
            </Card>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleSave}
                isLoading={isSaving}
                leftIcon={<Save className="w-4 h-4" />}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <Modal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        title="Resume Preview"
        size="xl"
      >
        <div className="bg-white rounded-xl border border-surface-200 p-8 max-h-[70vh] overflow-y-auto">
          {/* Resume Template Preview */}
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center border-b-2 border-primary-500 pb-6">
              <h1 className="text-3xl font-bold text-surface-900 mb-2">{resumeData.personalInfo.name}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-surface-600">
                <span>{resumeData.personalInfo.email}</span>
                <span>•</span>
                <span>{resumeData.personalInfo.phone}</span>
                <span>•</span>
                <span>{resumeData.personalInfo.location}</span>
              </div>
              {resumeData.personalInfo.linkedIn && (
                <p className="text-sm text-primary-600 mt-1">{resumeData.personalInfo.linkedIn}</p>
              )}
            </div>

            {/* Summary */}
            {resumeData.summary && (
              <div>
                <h2 className="text-lg font-bold text-crimson uppercase tracking-wider mb-3">Professional Summary</h2>
                <p className="text-white">{resumeData.summary}</p>
              </div>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-crimson uppercase tracking-wider mb-3">Experience</h2>
                <div className="space-y-4">
                  {resumeData.experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-white">{exp.title}</h3>
                          <p className="text-neutral-300">{exp.company} • {exp.location}</p>
                        </div>
                        <span className="text-sm text-neutral-400">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="mt-2 text-neutral-300 text-sm whitespace-pre-line">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {resumeData.education.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-crimson uppercase tracking-wider mb-3">Education</h2>
                <div className="space-y-3">
                  {resumeData.education.map((edu) => (
                    <div key={edu.id} className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-white">{edu.degree}</h3>
                        <p className="text-neutral-300">{edu.school} • {edu.location}</p>
                      </div>
                      <span className="text-sm text-neutral-400">{edu.startDate} - {edu.endDate}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            <div>
              <h2 className="text-lg font-bold text-crimson uppercase tracking-wider mb-3">Skills</h2>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="text-neutral-300"><strong>Languages:</strong> {resumeData.skills.languages.join(', ')}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-neutral-300"><strong>Frameworks:</strong> {resumeData.skills.frameworks.join(', ')}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-neutral-300"><strong>Tools:</strong> {resumeData.skills.tools.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default ResumeEditorPage;
