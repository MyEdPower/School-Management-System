import React from 'react';
import { Grid3x3, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewChange: (mode: 'grid' | 'list') => void;
  className?: string;
}

export function ViewToggle({ viewMode, onViewChange, className = '' }: ViewToggleProps) {
  return (
    <div className={`flex items-center gap-[8px] ${className}`}>
      <button
        onClick={() => onViewChange('grid')}
        className={`font-['Rubik:Medium',sans-serif] flex items-center gap-[8px] px-[16px] py-[10px] rounded-[24px] text-[14px] transition-colors ${
          viewMode === 'grid'
            ? 'bg-[#343A6F] text-white hover:bg-[#C4C8E1] hover:text-[#343A6F]'
            : 'border border-[#707070] text-[#121212] bg-white hover:bg-[#C4C8E1] hover:border-[#343A6F]'
        }`}
      >
        <Grid3x3 className="size-[16px]" strokeWidth={2} />
        Grid
      </button>

      <button
        onClick={() => onViewChange('list')}
        className={`font-['Rubik:Medium',sans-serif] flex items-center gap-[8px] px-[16px] py-[10px] rounded-[24px] text-[14px] transition-colors ${
          viewMode === 'list'
            ? 'bg-[#343A6F] text-white hover:bg-[#C4C8E1] hover:text-[#343A6F]'
            : 'border border-[#707070] text-[#121212] bg-white hover:bg-[#C4C8E1] hover:border-[#343A6F]'
        }`}
      >
        <List className="size-[16px]" strokeWidth={2} />
        List
      </button>
    </div>
  );
}
