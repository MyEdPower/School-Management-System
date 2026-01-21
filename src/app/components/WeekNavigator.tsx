import React from 'react';
import svgPaths from "../../imports/svg-n93btfxe2q";

interface WeekNavigatorProps {
  startDate: string;
  endDate: string;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  className?: string;
}

export function WeekNavigator({
  startDate,
  endDate,
  onPrevious,
  onNext,
  canGoPrevious = true,
  canGoNext = true,
  className = ''
}: WeekNavigatorProps) {
  return (
    <div className={`flex gap-[8px] items-center ${className}`}>
      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
        {startDate} – {endDate}
      </p>
      <button
        className="size-[20px] hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous week"
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p339a49f0} fill="#707070" />
        </svg>
      </button>
      <button
        className="size-[20px] hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next week"
        onClick={onNext}
        disabled={!canGoNext}
      >
        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p12938870} fill="#707070" />
        </svg>
      </button>
    </div>
  );
}
