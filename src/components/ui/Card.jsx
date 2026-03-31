import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const variants = {
  default: 'bg-neutral-900 border border-neutral-600',
  glass: 'bg-neutral-900/95 backdrop-blur-md border border-neutral-600 shadow-card',
  elevated: 'bg-neutral-900 border border-neutral-600 shadow-card',
  outlined: 'bg-transparent border-2 border-neutral-600 hover:border-crimson/50',
  gradient: 'bg-gradient-to-br from-neutral-900 to-black border border-neutral-600',
};

const hoverEffects = {
  none: '',
  lift: 'hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.01] hover:border-crimson/20',
  tilt: 'card-tilt',
  glow: 'hover:shadow-glow-accent hover:border-crimson/30',
};

export const Card = ({
  children,
  variant = 'default',
  hoverEffect = 'lift',
  className,
  onClick,
  padding = 'md',
  ...props
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect !== 'none' ? { y: -4 } : {}}
      whileTap={onClick ? { scale: 0.99 } : {}}
      className={clsx(
        'rounded-2xl transition-all duration-300',
        variants[variant],
        hoverEffects[hoverEffect],
        paddingClasses[padding],
        onClick && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className }) => (
  <div className={clsx('mb-4', className)}>{children}</div>
);

export const CardTitle = ({ children, className, as: Component = 'h3' }) => (
  <Component className={clsx('text-lg font-semibold text-offwhite', className)}>
    {children}
  </Component>
);

export const CardDescription = ({ children, className }) => (
  <p className={clsx('text-sm text-neutral-200 mt-1', className)}>{children}</p>
);

export const CardContent = ({ children, className }) => (
  <div className={clsx(className)}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
  <div className={clsx('mt-4 pt-4 border-t border-charcoal/50', className)}>{children}</div>
);

export default Card;
