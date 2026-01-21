import svgPaths from "@/imports/svg-wmka0jxbro";
import { Star } from 'lucide-react';
import React from 'react';

interface AssessmentCardProps {
  title?: string;
  subject?: string;
  grade?: string;
  batteryGroup?: string;
  progress?: number;
  total?: number;
  dueDate?: string;
  subjectColor?: string;
  subjectBg?: string;
  subjectIcon?: React.ReactNode;
}

// Subject icon components
function MathIcon({ color, bgColor }: { color: string; bgColor: string }) {
  return (
    <div className="absolute left-1/2 size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg 
        className="block size-full" 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rounded square background */}
        <rect width="56" height="56" rx="8" fill={color} />
        
        {/* Top left quadrant - Blue with white + */}
        <rect x="4" y="4" width="24" height="24" rx="4" fill={color} />
        <path d="M16 12V20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 16H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Top right quadrant - White with blue - */}
        <rect x="28" y="4" width="24" height="24" rx="4" fill="white" />
        <path d="M48 16H32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Bottom left quadrant - White with blue × */}
        <rect x="4" y="28" width="24" height="24" rx="4" fill="white" />
        <path d="M11 35L21 45" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M21 35L11 45" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Bottom right quadrant - Blue with white ÷ */}
        <rect x="28" y="28" width="24" height="24" rx="4" fill={color} />
        <circle cx="40" cy="34" r="1.5" fill="white" />
        <circle cx="40" cy="46" r="1.5" fill="white" />
        <path d="M46 40H34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function HistoryIcon({ color }: { color: string }) {
  return (
    <div className="absolute left-1/2 size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute inset-[0_-5.56%_-4.55%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 46">
          <g>
            <rect height="4" stroke={color} strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="41" />
            <rect height="4" stroke={color} strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="13" />
            <rect fill={color} height="22" width="6" x="5" y="18" />
            <rect fill={color} height="22" width="6" x="17" y="18" />
            <rect fill={color} height="22" width="6" x="29" y="18" />
            <path d={svgPaths.p14ced400} stroke={color} strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ReadingIcon({ color }: { color: string }) {
  return (
    <div className="absolute left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <path clipRule="evenodd" d={svgPaths.p3bf6cd00} fill={color} fillRule="evenodd" />
        <path d={svgPaths.p2534e00} fill={color} />
        <path d={svgPaths.p4d80800} fill={color} />
        <path d={svgPaths.p13c2af00} fill={color} />
      </svg>
    </div>
  );
}

function ScienceIcon({ color }: { color: string }) {
  return (
    <div className="absolute left-1/2 size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <path d={svgPaths.p34676100} fill={color} />
      </svg>
    </div>
  );
}

function CareerTechIcon({ color }: { color: string }) {
  return (
    <div className="absolute left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <rect height="26" stroke={color} strokeWidth="2" width="38" x="9" y="7" fill="none" rx="2" />
        <rect height="4" stroke={color} strokeWidth="2" width="14" x="21" y="35" fill="none" />
        <rect height="2" stroke={color} strokeWidth="2" width="24" x="16" y="42" fill="none" />
        <path d={svgPaths.p1a8673f0} fill={color} />
      </svg>
    </div>
  );
}

function OtherIcon({ color }: { color: string }) {
  return (
    <div className="absolute left-1/2 size-[44px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <path d={svgPaths.p32dc9180} stroke={color} strokeWidth="2.5" fill="none" />
        <path d="M14 24H42" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
        <path d="M14 29H42" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
        <path d="M14 34H30" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

export function AssessmentCard({
  title = "Math Assessment",
  subject = "Math",
  grade = "Grade 10",
  batteryGroup = "Battery Group 2",
  progress = 4,
  total = 30,
  dueDate = "01-July-2025",
  subjectColor,
  subjectBg,
  subjectIcon
}: AssessmentCardProps) {
  // Favorite state management
  const [isFavorited, setIsFavorited] = React.useState(false);
  
  // Default subject colors from documentation
  const subjectConfig: Record<string, { color: string; bg: string }> = {
    'Math': { color: '#03B0E8', bg: '#D2F2FC' },
    'History': { color: '#EC5E74', bg: '#FCE1E5' },
    'English': { color: '#EB8900', bg: '#FCECD4' },
    'Reading': { color: '#EB8900', bg: '#FCECD4' },
    'Science': { color: '#9266E5', bg: '#ECE3FC' },
    'Civics': { color: '#F2CC05', bg: '#FCF5CC' },
    'Career/Tech': { color: '#7E78B8', bg: '#DE51E5' },
    'Other': { color: '#F2CC05', bg: '#FCF5CC' }
  };

  const config = subjectConfig[subject] || subjectConfig['Other'];
  const finalColor = subjectColor || config.color;
  const finalBg = subjectBg || config.bg;
  
  // Get icon component based on subject
  const getIcon = () => {
    if (subjectIcon) return subjectIcon;
    
    switch(subject) {
      case 'Math':
        return <MathIcon color={finalColor} bgColor={finalBg} />;
      case 'History':
        return <HistoryIcon color={finalColor} />;
      case 'English':
      case 'Reading':
        return <ReadingIcon color={finalColor} />;
      case 'Science':
        return <ScienceIcon color={finalColor} />;
      case 'Career/Tech':
        return <CareerTechIcon color={finalColor} />;
      case 'Civics':
      case 'Other':
      default:
        return (
          <div className="absolute left-1/2 size-[44px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <svg className="block size-full" fill="none" viewBox="0 0 56 56">
              <path d={svgPaths.p32dc9180} stroke={finalColor} strokeWidth="2.5" fill="none" />
              <path d="M14 24H42" stroke={finalColor} strokeLinecap="round" strokeWidth="2.5" />
              <path d="M14 29H42" stroke={finalColor} strokeLinecap="round" strokeWidth="2.5" />
              <path d="M14 34H30" stroke={finalColor} strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>
        );
    }
  };

  const progressPercent = Math.round((progress / total) * 100);

  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Assessment Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] items-start overflow-clip p-[16px] sm:p-[20px] lg:p-[24px] relative size-full">
          {/* Header with icon and title */}
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
            <div className="overflow-clip relative rounded-[8px] shrink-0 size-[48px] sm:size-[52px] lg:size-[56px]" data-name="Subject Icon">
              <div className="absolute left-1/2 overflow-clip rounded-[2.5px] size-[42px] sm:size-[46px] lg:size-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon container">
                {getIcon()}
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#121212] text-[14px] sm:text-[16px] lg:text-[18px] tracking-[-0.2px] w-full break-words line-clamp-2">
                {title}
              </p>
              <div className="capitalize content-stretch flex font-['Rubik:Regular',sans-serif] font-normal gap-[6px] sm:gap-[8px] items-start leading-[16px] relative shrink-0 text-[12px] sm:text-[13px] lg:text-[14px] text-nowrap w-full" data-name="Actions">
                <p className="relative shrink-0 text-[#707070]">{batteryGroup}</p>
                <p className="relative shrink-0 text-[#d4d4d4]">|</p>
                <p className="relative shrink-0 text-[#707070]">{grade}</p>
              </div>
            </div>
          </div>

          {/* Body - Progress and Due Date */}
          <div className="bg-white content-stretch flex flex-col gap-[10px] sm:gap-[12px] items-start relative shrink-0 w-full" data-name="body">
            {/* Student Progress */}
            <div className="content-stretch flex flex-col sm:flex-row gap-[8px] items-start sm:items-center relative shrink-0 w-full" data-name="Status">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full sm:w-auto" data-name="Subject">
                <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#707070] text-[14px] sm:text-[15px] lg:text-[16px] text-nowrap">Student Progress</p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center justify-start sm:justify-end w-full sm:flex-1 relative rounded-[4px] shrink-0" data-name="Status">
                <div className="bg-[#c4c8e1] h-[8px] overflow-clip relative rounded-[32px] shrink-0 flex-1 sm:flex-none sm:w-[80px] md:w-[100px] lg:w-[120px]" data-name="Progress Bar / Linear">
                  <div 
                    className="absolute bg-[#343a6f] h-[8px] left-0 rounded-[100px] top-0" 
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#121212] text-[14px] sm:text-[15px] lg:text-[16px] text-right min-w-[42px] sm:min-w-[48px]">
                  {progress}/{total}
                </p>
              </div>
            </div>

            {/* Assessment Due Date */}
            <div className="content-stretch flex font-['Rubik:Regular',sans-serif] font-normal items-center justify-between leading-[24px] relative shrink-0 text-[14px] sm:text-[15px] lg:text-[16px] w-full" data-name="Status">
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#707070]">Assessment Due Date</p>
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#121212] text-right">{dueDate}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-auto" data-name="Actions Container">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full gap-[8px]\" data-name="Actions">
              <div className="content-stretch flex gap-[4px] sm:gap-[6px] items-center relative flex-wrap" data-name="Primary Actions">
                <button className="bg-[#f7f7f7] border border-[#d4d4d4] content-stretch flex flex-col items-center justify-center px-[12px] sm:px-[14px] py-[6px] sm:py-[7px] relative rounded-[100px] shrink-0 min-w-[50px] sm:min-w-[58px] hover:bg-[#C4C8E1] transition-colors" data-name="Action">
                  <p className="capitalize font-['Rubik:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#707070] text-[12px] sm:text-[13px] text-center">View</p>
                </button>
                <button className="bg-[#f7f7f7] border border-[#d4d4d4] content-stretch flex flex-col items-center justify-center px-[12px] sm:px-[14px] py-[6px] sm:py-[7px] relative rounded-[100px] shrink-0 min-w-[60px] sm:min-w-[68px] hover:bg-[#C4C8E1] transition-colors" data-name="Action">
                  <p className="capitalize font-['Rubik:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#707070] text-[12px] sm:text-[13px] text-center">Assign</p>
                </button>
                <button className="bg-[#f7f7f7] border border-[#d4d4d4] content-stretch flex flex-col items-center justify-center px-[12px] sm:px-[14px] py-[6px] sm:py-[7px] relative rounded-[100px] shrink-0 min-w-[46px] sm:min-w-[52px] hover:bg-[#C4C8E1] transition-colors" data-name="Action">
                  <p className="capitalize font-['Rubik:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#707070] text-[12px] sm:text-[13px] text-center">Edit</p>
                </button>
              </div>
              <button 
                className="bg-[#f7f7f7] border border-[#d4d4d4] content-stretch flex items-center justify-center p-[7px] relative rounded-[100px] shrink-0 hover:bg-[#C4C8E1] transition-colors" 
                data-name="Favorite" 
                aria-label="Favorite" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsFavorited(!isFavorited);
                }}
              >
                <Star 
                  className={`size-[15px] sm:size-[16px] transition-colors ${isFavorited ? 'text-[#343A6F]' : 'text-[#707070]'}`}
                  strokeWidth={2} 
                  fill={isFavorited ? '#343A6F' : 'none'} 
                />
              </button>
            </div>
          </div>
          
          <div 
            className="absolute bottom-0 h-[6px] sm:h-[8px] left-0 right-0 rounded-b-[8px]" 
            data-name="Divider" 
            style={{ backgroundColor: finalColor }} 
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}