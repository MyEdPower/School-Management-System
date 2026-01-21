interface MathIconProps {
  className?: string;
}

export function MathIcon({ className = "size-[32px]" }: MathIconProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 56 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded square background with border */}
      <rect width="56" height="56" rx="8" fill="#5BA4CF" />
      
      {/* Top left quadrant - Blue with white + */}
      <rect x="4" y="4" width="24" height="24" rx="4" fill="#5BA4CF" />
      <path d="M16 12V20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 16H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Top right quadrant - White with blue - */}
      <rect x="28" y="4" width="24" height="24" rx="4" fill="white" />
      <path d="M48 16H32" stroke="#5BA4CF" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Bottom left quadrant - White with blue × */}
      <rect x="4" y="28" width="24" height="24" rx="4" fill="white" />
      <path d="M11 35L21 45" stroke="#5BA4CF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21 35L11 45" stroke="#5BA4CF" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Bottom right quadrant - Blue with white ÷ */}
      <rect x="28" y="28" width="24" height="24" rx="4" fill="#5BA4CF" />
      <circle cx="40" cy="34" r="1.5" fill="white" />
      <circle cx="40" cy="46" r="1.5" fill="white" />
      <path d="M46 40H34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}