import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, icon, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-bold text-neutral-800">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-neutral-600">
              {icon}
            </div>
          )}
          <input
            className={cn(
              'w-full px-4 py-3 border-4 border-border rounded-lg bg-neutral-100 text-neutral-800 placeholder-neutral-600 focus:border-primary-500 focus:outline-none transition-colors duration-200 shadow-thick',
              icon && 'pl-12',
              error && 'border-danger-500 focus:border-danger-500',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-danger-600 font-medium">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-neutral-600">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
