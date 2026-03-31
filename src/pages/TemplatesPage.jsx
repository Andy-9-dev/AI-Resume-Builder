import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Check,
  Sparkles,
  Palette,
  Type,
  Layout,
  Download,
  Eye,
} from 'lucide-react';
import { Button, Card, CardTitle, Badge } from '../components/ui';
import { Layout as AppLayout, Header } from '../components/layout/Layout';
import { clsx } from 'clsx';

const templates = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean, minimal design perfect for tech roles',
    preview: 'modern',
    color: '#0ea5e9',
  },
  {
    id: 'classic',
    name: 'Classic Corporate',
    description: 'Traditional format for conservative industries',
    preview: 'classic',
    color: '#1e293b',
  },
  {
    id: 'creative',
    name: 'Creative Designer',
    description: 'Bold design for creative professionals',
    preview: 'creative',
    color: '#a855f7',
  },
  {
    id: 'minimal',
    name: 'Minimalist',
    description: 'Ultra-clean layout with focus on content',
    preview: 'minimal',
    color: '#64748b',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated design for senior positions',
    preview: 'executive',
    color: '#059669',
  },
  {
    id: ' ATS',
    name: 'ATS Optimized',
    description: 'Maximum ATS compatibility',
    preview: 'ats',
    color: '#dc2626',
  },
];

const fontOptions = [
  { id: 'inter', name: 'Inter', family: 'Inter, sans-serif' },
  { id: 'georgia', name: 'Georgia', family: 'Georgia, serif' },
  { id: 'roboto', name: 'Roboto Slab', family: 'Roboto Slab, serif' },
  { id: 'opensans', name: 'Open Sans', family: 'Open Sans, sans-serif' },
];

const colorOptions = [
  '#0ea5e9', '#a855f7', '#22c55e', '#f59e0b', '#ef4444', '#1e293b', '#64748b', '#ec4899',
];

export const TemplatesPage = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [selectedColor, setSelectedColor] = useState('#0ea5e9');
  const [selectedFont, setSelectedFont] = useState('inter');

  return (
    <AppLayout>
      <Header
        title="Resume Templates"
        subtitle="Choose and customize a professional template"
        actions={
          <Button onClick={() => navigate('/resumes/1/edit')}>
            Use Template
          </Button>
        }
      />

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Templates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card padding="lg">
              <CardTitle className="mb-6">Choose a Template</CardTitle>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <motion.div
                    key={template.id}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={clsx(
                      'relative cursor-pointer rounded-xl border-2 transition-all overflow-hidden',
                      selectedTemplate === template.id
                        ? 'border-primary-500 shadow-lg ring-2 ring-primary-500/20'
                        : 'border-surface-200 hover:border-primary-300'
                    )}
                  >
                    {/* Template Preview */}
                    <div 
                      className="h-48 p-4 flex flex-col"
                      style={{ backgroundColor: '#f8fafc' }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div 
                          className="w-8 h-8 rounded-lg"
                          style={{ backgroundColor: template.color }}
                        />
                        <div className="flex-1">
                          <div className="h-3 w-20 rounded bg-surface-300 mb-1" />
                          <div className="h-2 w-14 rounded bg-surface-200" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-full rounded bg-surface-200" />
                        <div className="h-2 w-4/5 rounded bg-surface-200" />
                        <div className="h-2 w-full rounded bg-surface-200" />
                        <div className="h-2 w-3/4 rounded bg-surface-200" />
                      </div>
                    </div>
                    {/* Template Info */}
                    <div className="p-3 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-surface-900 text-sm">{template.name}</p>
                          <p className="text-xs text-surface-500 mt-0.5">{template.description}</p>
                        </div>
                        {selectedTemplate === template.id && (
                          <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Customization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Color Selection */}
            <Card>
              <CardTitle className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-primary-600" />
                Accent Color
              </CardTitle>
              <div className="grid grid-cols-4 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={clsx(
                      'w-10 h-10 rounded-xl transition-all flex items-center justify-center',
                      selectedColor === color
                        ? 'ring-2 ring-offset-2 ring-primary-500 scale-110'
                        : 'hover:scale-105'
                    )}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && (
                      <Check className="w-5 h-5 text-white" />
                    )}
                  </button>
                ))}
              </div>
            </Card>

            {/* Font Selection */}
            <Card>
              <CardTitle className="flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-primary-600" />
                Font Style
              </CardTitle>
              <div className="space-y-2">
                {fontOptions.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => setSelectedFont(font.id)}
                    className={clsx(
                      'w-full text-left px-4 py-3 rounded-xl transition-all',
                      selectedFont === font.id
                        ? 'bg-primary-50 border-2 border-primary-500'
                        : 'bg-surface-50 border-2 border-transparent hover:border-surface-300'
                    )}
                  >
                    <span 
                      className="text-lg block"
                      style={{ fontFamily: font.family }}
                    >
                      {font.name}
                    </span>
                    <span className="text-xs text-surface-500">Aa Bb Cc 123</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Preview Actions */}
            <Card className="bg-gradient-to-br from-primary-50 to-accent-50">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Layout className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle className="mb-2">Ready to Customize</CardTitle>
                <p className="text-sm text-surface-600 mb-4">
                  Apply your chosen template and customize it further in the editor.
                </p>
                <div className="space-y-2">
                  <Button className="w-full">
                    Apply Template
                  </Button>
                  <Button variant="secondary" className="w-full" leftIcon={<Eye className="w-4 h-4" />}>
                    Preview Full Size
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TemplatesPage;
