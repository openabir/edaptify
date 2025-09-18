import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', children, ...props },
    ref
  ) => {
    const baseClasses =
      'font-bold rounded-lg transition-all duration-200 border-4 shadow-thick active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-white border-primary-700 shadow-thick-primary',
      secondary:
        'bg-secondary-500 hover:bg-secondary-600 text-neutral-800 border-secondary-600 shadow-thick-secondary',
      accent:
        'bg-accent-500 hover:bg-accent-600 text-white border-accent-700 shadow-thick-accent',
      success:
        'bg-success-500 hover:bg-success-600 text-white border-success-700 shadow-thick-success',
      danger:
        'bg-danger-500 hover:bg-danger-600 text-white border-danger-700 shadow-thick-danger',
      outline:
        'bg-neutral-100 hover:bg-white text-neutral-800 border-border shadow-thick',
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
