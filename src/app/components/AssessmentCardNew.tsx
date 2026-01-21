import { Assessment } from '../data/mockData';
import { MathIcon } from './MathIcon';
import React from 'react';

interface AssessmentCardNewProps {
  assessment: Assessment;
  viewMode: 'grid' | 'list';
  author?: string;
}

const subjectIcons: Record<string, { icon: string | React.JSX.Element; bgColor: string; borderColor: string }> = {
  'History': {
    bgColor: '#FCE1E5',
    borderColor: '#EC5E74',
    icon: '🏛️'
  },
  'Math': {
    bgColor: '#D2F2FC',
    borderColor: '#03B0E8',
    icon: <MathIcon />
  },
  'Reading': {
    bgColor: '#FFE8D6',
    borderColor: '#EB8900',
    icon: '📖'
  },
  'Science': {
    bgColor: '#ECE3FC',
    borderColor: '#9266E5',
    icon: '🔬'
  },
  'Career/Tech': {
    bgColor: '#E8E8F5',
    borderColor: '#5C5C9E',
    icon: '💼'
  },
  'Other': {
    bgColor: '#FFF9D6',
    borderColor: '#D4C300',
    icon: '📄'
  }
};

export function AssessmentCardNew({ assessment, viewMode, author = 'Ryan Hobb' }: AssessmentCardNewProps) {
  const progressPercent = Math.round((assessment.progress / assessment.total) * 100);
  const iconData = subjectIcons[assessment.subject] || subjectIcons['Other'];
  
  if (viewMode === 'list') {
    return (
      <div className="bg-white flex flex-col lg:flex-row lg:items-center border-b border-[#f7f7f7] hover:bg-[#fafafa]">
        {/* Mobile/Tablet: Card style */}
        <div className="lg:hidden p-[16px]">
          <div className="flex gap-[12px] mb-[12px]">
            <div className="overflow-clip relative rounded-[8px] size-[48px] shrink-0 flex items-center justify-center text-[24px]" style={{ backgroundColor: iconData.bgColor }}>
              {iconData.icon}
            </div>
            <div className="flex-1">
              <p className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                {assessment.title}
              </p>
              <p className="font-['Rubik:Regular',sans-serif] text-[12px] text-[#8a8a8a]">
                {assessment.grade} • {assessment.batteryGroup}
              </p>
            </div>
          </div>
          
          <div className="mb-[12px]">
            <div className="flex items-center justify-between mb-[4px]">
              <span className="font-['Rubik:Regular',sans-serif] text-[12px] text-[#8a8a8a]">Progress</span>
              <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212]">
                {assessment.progress}/{assessment.total}
              </span>
            </div>
            <div className="bg-[#c4c8e1] h-[6px] rounded-[32px] overflow-hidden">
              <div 
                className="bg-[#343a6f] h-[6px] rounded-[100px]" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          
          <div className="flex justify-between text-[12px] mb-[12px]">
            <span className="text-[#8a8a8a]">Due: {assessment.dueDate}</span>
            <span className="text-[#8a8a8a]">By: {author}</span>
          </div>
          
          <div className="flex gap-[8px]">
            <button className="flex-1 px-[12px] py-[6px] border border-[#e0e0e0] rounded-[4px] text-[12px] text-[#333] hover:bg-gray-50 font-['Rubik:Regular',sans-serif]">
              Assign
            </button>
            <button className="flex-1 px-[12px] py-[6px] border border-[#e0e0e0] rounded-[4px] text-[12px] text-[#333] hover:bg-gray-50 font-['Rubik:Regular',sans-serif]">
              Edit
            </button>
            <button className="px-[12px] py-[6px] text-[12px] text-[#707070] hover:text-[#FFC107] font-['Rubik:Regular',sans-serif]">
              ★
            </button>
          </div>
        </div>
        
        {/* Desktop: Table row */}
        <div className="hidden lg:flex lg:items-center w-full">
          <div className="flex gap-[8px] items-center pl-[8px] pr-0 py-[8px] border-r border-[#f7f7f7]">
            <div className="overflow-clip relative rounded-[8px] size-[56px] flex items-center justify-center text-[28px]" style={{ backgroundColor: iconData.bgColor }}>
              {iconData.icon}
            </div>
            <p className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] tracking-[-0.2px] w-[296px]">
              {assessment.title}
            </p>
          </div>
          
          <div className="flex gap-[24px] items-center px-[24px] flex-1">
            <div className="flex gap-[4px] items-center min-w-[180px]">
              <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212] min-w-[48px]">
                {assessment.progress}/{assessment.total}
              </p>
              <div className="bg-[#c4c8e1] h-[8px] rounded-[32px] w-[120px] overflow-hidden">
                <div 
                  className="bg-[#343a6f] h-[8px] rounded-[100px]" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-[112px]">
              <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212]">
                {assessment.grade}
              </p>
            </div>
            
            <div className="min-w-[160px]">
              <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212]">
                {assessment.batteryGroup}
              </p>
            </div>
            
            <div className="min-w-[140px]">
              <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212]">
                {assessment.dueDate}
              </p>
            </div>
            
            <div className="flex-1 min-w-[120px]">
              <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212]">
                {author}
              </p>
            </div>
          </div>
          
          <div className="flex gap-[8px] items-center pr-[24px]">
            <button className="px-[12px] py-[6px] border border-[#e0e0e0] rounded-[4px] text-[14px] text-[#333] hover:bg-gray-50 font-['Rubik:Regular',sans-serif]">
              Assign
            </button>
            <button className="px-[12px] py-[6px] border border-[#e0e0e0] rounded-[4px] text-[14px] text-[#333] hover:bg-gray-50 font-['Rubik:Regular',sans-serif]">
              Edit
            </button>
            <button className="px-[12px] py-[6px] text-[14px] text-[#707070] hover:text-[#FFC107] font-['Rubik:Regular',sans-serif]">
              Favorite
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Grid View
  return (
    <div className="bg-white rounded-[8px] border border-[#e0e0e0] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]">
      <div className="p-[16px] sm:p-[20px]">
        <div className="flex gap-[12px] mb-[16px] sm:mb-[20px]">
          <div 
            className="overflow-clip relative rounded-[8px] size-[48px] sm:size-[56px] shrink-0 flex items-center justify-center text-[24px] sm:text-[28px]" 
            style={{ backgroundColor: iconData.bgColor }}
          >
            {iconData.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] sm:text-[18px] text-[#121212] mb-[4px]">
              {assessment.title}
            </h3>
            <p className="font-['Rubik:Regular',sans-serif] text-[12px] sm:text-[14px] text-[#8a8a8a]">
              {assessment.batteryGroup} | {assessment.grade}
            </p>
          </div>
        </div>
        
        <div className="mb-[14px] sm:mb-[16px]">
          <p className="font-['Rubik:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#8a8a8a] mb-[6px] sm:mb-[8px]">
            Student Progress
          </p>
          <div className="flex items-center gap-[12px]">
            <div className="flex-1 bg-[#c4c8e1] h-[6px] sm:h-[8px] rounded-[32px] overflow-hidden">
              <div 
                className="bg-[#343a6f] h-[6px] sm:h-[8px] rounded-[100px]" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="font-['Rubik:Medium',sans-serif] text-[14px] sm:text-[16px] text-[#121212] min-w-[42px] sm:min-w-[48px]">
              {assessment.progress}/{assessment.total}
            </p>
          </div>
        </div>
        
        <div className="mb-[16px] sm:mb-[20px]">
          <p className="font-['Rubik:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#8a8a8a] mb-[4px]">
            Assessment Due Date
          </p>
          <p className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
            {assessment.dueDate}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-[4px] items-center">
            <button className="bg-[#f7f7f7] border border-[#d4d4d4] px-[12px] py-[8px] rounded-[24px] text-[14px] text-[#707070] hover:bg-[#ececec] font-['Rubik:Regular',sans-serif] leading-[16px]">
              View
            </button>
            <button className="bg-[#f7f7f7] border border-[#d4d4d4] px-[12px] py-[8px] rounded-[24px] text-[14px] text-[#707070] hover:bg-[#ececec] font-['Rubik:Regular',sans-serif] leading-[16px]">
              Assign
            </button>
            <button className="bg-[#f7f7f7] border border-[#d4d4d4] px-[12px] py-[8px] rounded-[24px] text-[14px] text-[#707070] hover:bg-[#ececec] font-['Rubik:Regular',sans-serif] leading-[16px]">
              Edit
            </button>
          </div>
          <button className="bg-[#f7f7f7] border border-[#d4d4d4] px-[12px] py-[8px] rounded-[24px] text-[14px] text-[#707070] hover:text-[#FFC107] font-['Rubik:Regular',sans-serif] leading-[16px]">
            Favorite
          </button>
        </div>
      </div>
      
      <div 
        className="h-[8px]" 
        style={{ backgroundColor: iconData.borderColor }}
      />
    </div>
  );
}