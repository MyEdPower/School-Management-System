import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  width?: string;
  height?: string;
  backgroundColor?: string;
  fillColor?: string;
  className?: string;
}

export function ProgressBar({
  current,
  total,
  showLabel = true,
  width = '200px',
  height = '8px',
  backgroundColor = '#C4C8E1',
  fillColor = '#343A6F',
  className = ''
}: ProgressBarProps) {
  const percent = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className={`flex items-center gap-[8px] ${className}`}>
      <div
        className="rounded-[32px] overflow-hidden"
        style={{
          backgroundColor,
          height,
          width
        }}
      >
        <div
          className="h-full rounded-[32px] transition-all duration-300"
          style={{
            backgroundColor: fillColor,
            width: `${percent}%`
          }}
        />
      </div>
      {showLabel && (
        <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212] min-w-[50px] text-right">
          {current}/{total}
        </p>
      )}
    </div>
  );
}
