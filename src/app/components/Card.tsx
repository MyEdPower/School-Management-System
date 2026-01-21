import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  actions?: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  noBorder?: boolean;
  className?: string;
}

export function Card({
  children,
  title,
  actions,
  padding = 'md',
  noBorder = false,
  className = ''
}: CardProps) {
  const paddingStyles = {
    sm: 'p-[16px]',
    md: 'p-[20px] sm:p-[24px]',
    lg: 'p-[24px] sm:p-[32px]'
  };

  return (
    <div
      className={`bg-white rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] ${
        noBorder ? '' : 'border border-[#d4d4d4]'
      } ${paddingStyles[padding]} ${className}`}
    >
      {(title || actions) && (
        <div className="flex items-center justify-between gap-[16px] mb-[20px] sm:mb-[24px]">
          {title && (
            <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212]">
              {title}
            </h2>
          )}
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
