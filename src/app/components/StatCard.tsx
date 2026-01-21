import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  secondaryText: string;
  variant?: 'featured' | 'standard';
  iconColor?: string;
  bgColor?: string;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  secondaryText,
  variant = 'standard',
  iconColor = '#343A6F',
  bgColor = '#FFFFFF'
}: StatCardProps) {
  if (variant === 'featured') {
    return (
      <div 
        className="rounded-[8px] p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-white opacity-5 rounded-full -mr-[40px] -mt-[40px]"></div>
        <div className="relative z-10 flex items-center gap-[16px]">
          <div className="flex items-center justify-center size-[48px] rounded-[8px] bg-white shrink-0">
            <Icon className="size-[24px]" style={{ color: iconColor }} strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['Rubik:Medium',sans-serif] text-[40px] text-white leading-none mb-[4px]">
              {value}
            </p>
            <h3 className="font-['Rubik:Regular',sans-serif] text-[16px] text-white opacity-90 mb-[4px]">
              {label}
            </h3>
            <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white opacity-75">
              {secondaryText}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-[8px] p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px]"
      style={{ borderLeftColor: iconColor }}
    >
      <div className="flex items-center gap-[16px]">
        <div 
          className="flex items-center justify-center size-[48px] rounded-[8px] shrink-0"
          style={{ backgroundColor: iconColor }}
        >
          <Icon className="size-[24px]" style={{ color: '#FFFFFF' }} strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <p 
            className="font-['Rubik:Medium',sans-serif] text-[40px] leading-none mb-[4px]"
            style={{ color: iconColor }}
          >
            {value}
          </p>
          <h3 className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212] mb-[4px]">
            {label}
          </h3>
          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
            {secondaryText}
          </p>
        </div>
      </div>
    </div>
  );
}
