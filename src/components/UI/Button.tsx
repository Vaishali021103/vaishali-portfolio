import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon,
  iconPosition = 'left',
  className,
  download,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg focus-visible:outline-2 focus-visible:outline-[#ccff00] focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-sans',
    md: 'text-sm px-4 py-2.5 gap-2 font-sans',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-sans',
  };

  const variantStyles = {
    primary:
      'bg-[#ccff00] text-black font-semibold hover:bg-[#b8e600] active:scale-[0.98] shadow-sm shadow-[#ccff00]/20',
    secondary:
      'bg-[#141822] text-white border border-[#262f40] hover:bg-[#1b212f] hover:border-[#38455d] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#e2e8f0] border border-[#2d3748] hover:border-[#ccff00]/60 hover:text-[#ccff00] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#94a3b8] hover:text-white hover:bg-[#141822] active:scale-[0.98]',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
};
