import React from 'react';
import clsx from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-mono text-[#ccff00] font-semibold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#94a3b8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
