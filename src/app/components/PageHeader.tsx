import React from 'react';

interface PageHeaderProps {
  greeting?: string;
  name: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  greeting = 'Hello',
  name,
  subtitle,
  actions,
  className = ''
}: PageHeaderProps) {
  return (
    <div className={`bg-white border-b border-[#ebebeb] ${className}`}>
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[24px] lg:py-[32px] pb-[16px] sm:pb-[20px] lg:pb-[24px]">
        <div className="flex items-center justify-between gap-[16px]">
          <div>
            <h1 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#333]">
              {greeting}, {name}
            </h1>
            {subtitle && (
              <p className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#707070] mt-[4px]">
                {subtitle}
              </p>
            )}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      </div>
    </div>
  );
}
