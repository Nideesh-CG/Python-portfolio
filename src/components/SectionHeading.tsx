import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-card border border-border text-primary ${align === 'center' ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-primary">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

