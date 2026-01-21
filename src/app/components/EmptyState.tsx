import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className = ''
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-[64px] px-[24px] ${className}`}>
      {Icon && (
        <Icon className="size-[64px] text-[#707070] mb-[16px]" strokeWidth={1.5} />
      )}
      <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[8px] text-center">
        {title}
      </h3>
      {description && (
        <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#707070] mb-[24px] text-center max-w-[400px]">
          {description}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="font-['Rubik:Medium',sans-serif] bg-[#343A6F] text-white px-[24px] py-[12px] rounded-[8px] text-[16px] hover:bg-[#C4C8E1] hover:text-[#343A6F] transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
