import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const variantStyles = {
    default: 'bg-[#151a24] text-[#cbd5e1] border border-[#232b3b]',
    accent: 'bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-medium',
    outline: 'border border-[#2d3748] text-[#94a3b8]',
    subtle: 'bg-[#1e2533] text-[#e2e8f0]',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full',
    md: 'text-xs sm:text-sm px-3 py-1 rounded-md',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-mono tracking-tight transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
