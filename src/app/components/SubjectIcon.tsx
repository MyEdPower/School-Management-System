import React from 'react';
import svgPathsCard from "../../imports/svg-wmka0jxbro";

type SubjectType = 'Math' | 'Science' | 'English' | 'History' | 'Civics' | 'Reading' | 'Career/Tech' | 'Other';

interface SubjectIconProps {
  subject: SubjectType;
  color: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SubjectIcon({ subject, color, size = 'md', className = '' }: SubjectIconProps) {
  const sizeMap = {
    sm: 'size-[24px]',
    md: 'size-[36px]',
    lg: 'size-[48px]'
  };

  const sizeClass = sizeMap[size];

  switch (subject) {
    case 'Math':
      return (
        <svg className={`${sizeClass} ${className}`} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="8" fill={color} />
          <rect x="4" y="4" width="24" height="24" rx="4" fill={color} />
          <path d="M16 12V20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 16H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="28" y="4" width="24" height="24" rx="4" fill="white" />
          <path d="M48 16H32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="4" y="28" width="24" height="24" rx="4" fill="white" />
          <path d="M11 35L21 45" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M21 35L11 45" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="28" y="28" width="24" height="24" rx="4" fill={color} />
          <circle cx="40" cy="34" r="1.5" fill="white" />
          <circle cx="40" cy="46" r="1.5" fill="white" />
          <path d="M46 40H34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'History':
      return (
        <svg className={`${sizeClass} ${className}`} fill="none" viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg">
          <rect height="4" stroke={color} strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="41" />
          <rect height="4" stroke={color} strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="13" />
          <rect fill={color} height="22" width="6" x="5" y="18" />
          <rect fill={color} height="22" width="6" x="17" y="18" />
          <rect fill={color} height="22" width="6" x="29" y="18" />
          <path d={svgPathsCard.p14ced400} stroke={color} strokeWidth="2" />
        </svg>
      );

    case 'English':
    case 'Reading':
      return (
        <svg className={`${sizeClass} ${className}`} fill="none" viewBox="0 0 56 56">
          <path clipRule="evenodd" d={svgPathsCard.p3bf6cd00} fill={color} fillRule="evenodd" />
          <path d={svgPathsCard.p2534e00} fill={color} />
          <path d={svgPathsCard.p4d80800} fill={color} />
          <path d={svgPathsCard.p13c2af00} fill={color} />
        </svg>
      );

    case 'Science':
      return (
        <svg className={`${sizeClass} ${className}`} fill="none" viewBox="0 0 50 50">
          <path d={svgPathsCard.p34676100} fill={color} />
        </svg>
      );

    case 'Career/Tech':
      return (
        <svg className={`${sizeClass} ${className}`} fill="none" viewBox="0 0 56 56">
          <rect height="26" stroke={color} strokeWidth="2" width="38" x="9" y="7" fill="none" rx="2" />
          <rect height="4" stroke={color} strokeWidth="2" width="14" x="21" y="35" fill="none" />
          <rect height="2" stroke={color} strokeWidth="2" width="24" x="16" y="42" fill="none" />
          <path d={svgPathsCard.p1a8673f0} fill={color} />
        </svg>
      );

    case 'Civics':
    case 'Other':
    default:
      return (
        <svg className={`${sizeClass} ${className}`} fill="none" viewBox="0 0 56 56">
          <path d={svgPathsCard.p32dc9180} stroke={color} strokeWidth="2.5" fill="none" />
          <path d="M14 24H42" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
          <path d="M14 29H42" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
          <path d="M14 34H30" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
        </svg>
      );
  }
}
