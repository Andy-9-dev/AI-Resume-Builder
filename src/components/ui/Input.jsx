import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { Eye, EyeOff, AlertCircle, Check } from 'lucide-react';

export const Input = forwardRef(({
  label,
  error,
  success,
  hint,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  type = 'text',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={clsx('w-full', containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-offwhite mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          type={inputType}
          className={clsx(
            'w-full px-4 py-2.5 bg-neutral-900 border-2 border-neutral-600 rounded-xl',
            'text-offwhite placeholder:text-neutral-300',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-crimson focus:border-crimson',
            'disabled:bg-neutral-900/50 disabled:text-neutral-500 disabled:cursor-not-allowed',
            leftIcon && 'pl-10',
            (rightIcon || isPassword) && 'pr-10',
            error && 'border-crimson focus:ring-crimson focus:border-crimson',
            success && 'border-green-500 focus:ring-green-500 focus:border-green-500',
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-offwhite transition-colors focus:outline-none focus:text-offwhite"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
        {rightIcon && !isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-300">
            {rightIcon}
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1 mt-1.5 text-sm text-crimson"
          >
            <AlertCircle size={14} />
            <span>{error}</span>
          </motion.div>
        )}
        {success && !error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1 mt-1.5 text-sm text-green-400"
          >
            <Check size={14} />
            <span>{success}</span>
          </motion.div>
        )}
        {hint && !error && !success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1.5 text-sm text-softgray/70"
          >
            {hint}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef(({
  label,
  error,
  hint,
  className,
  containerClassName,
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className={clsx('w-full', containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-offwhite mb-1.5">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          'w-full px-4 py-3 bg-neutral-900 border-2 border-neutral-600 rounded-xl',
          'text-offwhite placeholder:text-neutral-300',
          'transition-all duration-200 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-crimson focus:border-crimson',
          'disabled:bg-neutral-900/50 disabled:text-neutral-500 disabled:cursor-not-allowed',
          error && 'border-crimson focus:ring-crimson focus:border-crimson',
          className
        )}
        {...props}
      />
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1 mt-1.5 text-sm text-crimson"
          >
            <AlertCircle size={14} />
            <span>{error}</span>
          </motion.div>
        )}
        {hint && !error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1.5 text-sm text-softgray/70"
          >
            {hint}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Input;
