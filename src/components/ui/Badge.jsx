import { clsx } from 'clsx';
import { motion } from 'framer-motion';

const variants = {
  default: 'bg-neutral-700 text-offwhite border border-neutral-500',
  primary: 'bg-crimson/30 text-offwhite border border-crimson',
  accent: 'bg-crimson/30 text-offwhite border border-crimson',
  success: 'bg-green-500/30 text-green-300 border border-green-500',
  warning: 'bg-yellow-500/30 text-yellow-200 border border-yellow-500',
  error: 'bg-crimson/30 text-offwhite border border-crimson',
  outline: 'bg-transparent border border-offwhite text-offwhite hover:border-crimson hover:text-crimson',
};

const sizes = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-sm',
};

export const Badge = ({
  children,
  variant = 'default',
  size = 'sm',
  icon,
  onClick,
  className,
}) => {
  const Component = onClick ? 'button' : 'span';

  return (
    <motion.span
      component={Component}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1 font-medium rounded-full transition-colors',
        variants[variant],
        sizes[size],
        onClick && 'cursor-pointer hover:opacity-80',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.span>
  );
};

export const StatusBadge = ({ status }) => {
  const statusConfig = {
    draft: { variant: 'default', label: 'Draft' },
    active: { variant: 'success', label: 'Active' },
    pending: { variant: 'warning', label: 'Pending' },
    archived: { variant: 'default', label: 'Archived' },
    published: { variant: 'primary', label: 'Published' },
    reviewing: { variant: 'accent', label: 'Reviewing' },
  };

  const config = statusConfig[status] || statusConfig.draft;

  return (
    <Badge variant={config.variant}>
      <span className={clsx(
        'w-1.5 h-1.5 rounded-full',
        config.variant === 'success' && 'bg-green-400 shadow-sm shadow-green-400/50',
        config.variant === 'warning' && 'bg-yellow-400 shadow-sm shadow-yellow-400/50',
        config.variant === 'primary' && 'bg-crimson shadow-sm shadow-crimson/50',
        config.variant === 'accent' && 'bg-crimson shadow-sm shadow-crimson/50',
        config.variant === 'default' && 'bg-neutral-400',
      )} />
      {config.label}
    </Badge>
  );
};

export const ScoreBadge = ({ score }) => {
  const getVariant = () => {
    if (score >= 90) return 'success';
    if (score >= 75) return 'primary';
    if (score >= 60) return 'warning';
    return 'error';
  };

  return (
    <Badge variant={getVariant()} size="md" className="font-semibold">
      {score}
    </Badge>
  );
};

export default Badge;
