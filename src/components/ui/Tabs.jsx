import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export const Tabs = ({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.value);

  const handleTabChange = (value) => {
    setActiveTab(value);
    onChange?.(value);
  };

  const activeContent = tabs.find(t => t.value === activeTab)?.content;

  return (
    <div className={clsx('w-full', className)}>
      <div className={clsx(
        'flex gap-1 p-1 rounded-xl',
        variant === 'default' && 'bg-neutral-800/50',
        variant === 'bordered' && 'border-b border-neutral-600 rounded-none bg-transparent p-0',
        variant === 'pills' && 'bg-transparent gap-2',
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={clsx(
              'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors',
              variant === 'default' && (
                activeTab === tab.value
                  ? 'bg-neutral-700 text-offwhite shadow-lg shadow-black/40 border border-neutral-600'
                  : 'text-neutral-200 hover:text-offwhite hover:bg-neutral-700/50'
              ),
              variant === 'bordered' && (
                activeTab === tab.value
                  ? 'text-offwhite border-b-2 border-crimson rounded-none'
                  : 'text-neutral-200 hover:text-offwhite'
              ),
              variant === 'pills' && (
                activeTab === tab.value
                  ? 'bg-crimson/40 text-offwhite'
                  : 'text-neutral-200 hover:text-offwhite hover:bg-neutral-700/50'
              ),
            )}
          >
            <span className="flex items-center gap-2">
              {tab.icon && <span className="text-base">{tab.icon}</span>}
              {tab.label}
            </span>
            {activeTab === tab.value && variant === 'default' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-neutral-700 shadow-lg shadow-black/50 rounded-lg -z-10 border border-neutral-600"
                transition={{ type: 'spring', duration: 0.4 }}
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          {activeContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const TabPanel = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Tabs;
