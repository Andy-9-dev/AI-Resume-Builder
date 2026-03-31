import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const Progress = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = false,
  label,
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizeClasses = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-6',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-crimson to-red-500',
    accent: 'bg-gradient-to-r from-crimson to-red-500',
    success: 'bg-gradient-to-r from-green-500 to-green-400',
    warning: 'bg-gradient-to-r from-yellow-500 to-yellow-400',
    error: 'bg-gradient-to-r from-crimson to-red-500',
    primarySolid: 'bg-crimson',
  };

  return (
    <div className={clsx('w-full', className)}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-medium text-white">{label}</span>
          {showLabel && (
            <span className="text-sm font-semibold text-white">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className={clsx(
        'w-full bg-neutral-700 rounded-full overflow-hidden',
        sizeClasses[size]
      )}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={clsx(
            'h-full rounded-full',
            variantClasses[variant]
          )}
        />
      </div>
    </div>
  );
};

export const CircularProgress = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = 'primary',
  showValue = true,
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const variantColors = {
    primary: { stroke: '#E10600', track: '#404040' },
    accent: { stroke: '#E10600', track: '#404040' },
    success: { stroke: '#22c55e', track: '#404040' },
    warning: { stroke: '#f59e0b', track: '#404040' },
    error: { stroke: '#E10600', track: '#404040' },
  };

  const colors = variantColors[variant];

  return (
    <div className={clsx('relative inline-flex items-center justify-center', className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors.track}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors.stroke}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{Math.round(percentage)}</span>
          <span className="text-xs text-neutral-300">out of 100</span>
        </div>
      )}
    </div>
  );
};

export default Progress;
