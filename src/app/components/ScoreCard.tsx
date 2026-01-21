import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ScoreCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  className?: string;
}

/**
 * ScoreCard - Reusable component for displaying key metrics with icon
 * 
 * Features:
 * - Horizontal layout with icon on left
 * - Light navy icon background (#C4C8E1)
 * - Large 40px score display
 * - Navy left border for visual hierarchy
 * - Responsive sizing
 * - Hover shadow effect
 * - Vertically centered content
 * 
 * Used in:
 * - Student Performance Report (assessment scores)
 * - Score Distribution Report (class summary statistics)
 */
export function ScoreCard({ icon: Icon, value, label, className = '' }: ScoreCardProps) {
  return (
    <div className={`bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center ${className}`}>
      <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
        <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
          <Icon className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
            {value}
          </p>
          <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
            {label}
          </h3>
        </div>
      </div>
    </div>
  );
}
