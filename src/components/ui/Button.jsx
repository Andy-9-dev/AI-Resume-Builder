import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const variants = {
  primary: 'bg-crimson text-offwhite border-2 border-crimson shadow-lg shadow-crimson/40 hover:shadow-crimson/50 hover:bg-red-700 active:scale-[0.98] font-bold [&_span]:text-offwhite',
  secondary: 'bg-offwhite text-black border-2 border-offwhite hover:bg-gray-100 hover:shadow-md hover:shadow-white/30 [&_span]:text-black',
  accent: 'bg-gradient-to-r from-crimson to-red-600 text-offwhite shadow-lg shadow-crimson/40 hover:shadow-crimson/50 [&_span]:text-offwhite',
  ghost: 'bg-white/10 text-offwhite hover:text-offwhite hover:bg-white/20 [&_span]:text-offwhite',
  danger: 'bg-crimson text-offwhite shadow-lg shadow-crimson/40 hover:shadow-crimson/50 hover:bg-red-700 [&_span]:text-offwhite',
  success: 'bg-green-500 text-offwhite shadow-lg shadow-green-500/40 hover:bg-green-600 hover:shadow-green-500/50 [&_span]:text-offwhite',
  outline: 'bg-transparent border-2 border-offwhite text-offwhite hover:bg-white/15 shadow-md shadow-white/20 [&_span]:text-offwhite',
};

const sizes = {
  xs: 'px-3 py-1.5 text-xs gap-1.5',
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3 text-base gap-2.5',
  xl: 'px-10 py-4 text-lg gap-3',
};

const LoadingSpinner = ({ size = 'sm' }) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  return (
    <svg
      className={clsx('animate-spin', sizeClasses[size])}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      className={clsx(
        'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:grayscale',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size={size} />
          <span className="text-inherit">{children}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span className="text-inherit font-semibold">{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
};

export default Button;
