import { assessments, getAssessmentStats } from '../data/mockData';
import svgPaths from "../../imports/svg-n93btfxe2q";
import svgPathsCard from "../../imports/svg-wmka0jxbro";
import { Link } from 'react-router-dom';
import { AssessmentCard } from '../components/AssessmentCard';
import { Layers, Send, Activity, Award, Grid3x3, List, ChevronUp, Star, UserPlus, Pencil, TrendingUp, TrendingDown } from 'lucide-react';
import React from 'react';

export function Home() {
  const stats = getAssessmentStats();
  
  // Week selection state
  const [currentWeekIndex, setCurrentWeekIndex] = React.useState(0);
  
  // Filter state for Recent Assessments - default to 'assigned'
  const [assessmentFilter, setAssessmentFilter] = React.useState<'assigned' | 'in-progress' | 'completed'>('assigned');
  
  // View mode state
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  
  // Items per page state
  const [itemsPerPage, setItemsPerPage] = React.useState(12);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  
  // Favorites state - tracks favorited assessments by ID
  const [favorites, setFavorites] = React.useState<Record<string, boolean>>({});
  
  // Helper function to render subject icons
  const renderSubjectIcon = (subject: string, color: string) => {
    switch(subject) {
      case 'Math':
        return (
          <svg className="size-[36px]" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <svg className="size-[36px]" fill="none" viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg">
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
          <svg className="size-[40px]" fill="none" viewBox="0 0 56 56">
            <path clipRule="evenodd" d={svgPathsCard.p3bf6cd00} fill={color} fillRule="evenodd" />
            <path d={svgPathsCard.p2534e00} fill={color} />
            <path d={svgPathsCard.p4d80800} fill={color} />
            <path d={svgPathsCard.p13c2af00} fill={color} />
          </svg>
        );
      case 'Science':
        return (
          <svg className="size-[36px]" fill="none" viewBox="0 0 50 50">
            <path d={svgPathsCard.p34676100} fill={color} />
          </svg>
        );
      case 'Career/Tech':
        return (
          <svg className="size-[40px]" fill="none" viewBox="0 0 56 56">
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
          <svg className="size-[44px]" fill="none" viewBox="0 0 56 56">
            <path d={svgPathsCard.p32dc9180} stroke={color} strokeWidth="2.5" fill="none" />
            <path d="M14 24H42" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
            <path d="M14 29H42" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
            <path d="M14 34H30" stroke={color} strokeLinecap="round" strokeWidth="2.5" />
          </svg>
        );
    }
  };
  
  // Define multiple weeks for navigation
  const weeks = [
    {
      name: 'Week of 04-May-26',
      days: [
        { short: 'M', full: 'Mon', date: '05-May-26', dayNum: 5 },
        { short: 'T', full: 'Tue', date: '06-May-26', dayNum: 6 },
        { short: 'W', full: 'Wed', date: '07-May-26', dayNum: 7 },
        { short: 'T', full: 'Thu', date: '08-May-26', dayNum: 8 },
        { short: 'F', full: 'Fri', date: '09-May-26', dayNum: 9 }
      ]
    },
    {
      name: 'Week of 11-May-26',
      days: [
        { short: 'M', full: 'Mon', date: '12-May-26', dayNum: 12 },
        { short: 'T', full: 'Tue', date: '13-May-26', dayNum: 13 },
        { short: 'W', full: 'Wed', date: '14-May-26', dayNum: 14 },
        { short: 'T', full: 'Thu', date: '15-May-26', dayNum: 15 },
        { short: 'F', full: 'Fri', date: '16-May-26', dayNum: 16 }
      ]
    },
    {
      name: 'Week of 18-May-26',
      days: [
        { short: 'M', full: 'Mon', date: '19-May-26', dayNum: 19 },
        { short: 'T', full: 'Tue', date: '20-May-26', dayNum: 20 },
        { short: 'W', full: 'Wed', date: '21-May-26', dayNum: 21 },
        { short: 'T', full: 'Thu', date: '22-May-26', dayNum: 22 },
        { short: 'F', full: 'Fri', date: '23-May-26', dayNum: 23 }
      ]
    }
  ];
  
  const currentWeek = weeks[currentWeekIndex];
  const weekDays = currentWeek.days;
  
  // Filter assessments with timeline data
  const timelineAssessments = assessments.filter(a => a.startDate && a.endDate);
  
  // Filter assessments for current week
  const currentWeekAssessments = timelineAssessments.filter(assessment => {
    const startDay = parseInt("1");
    const endDay = parseInt("30");
    const weekStart = weekDays[0].dayNum;
    const weekEnd = weekDays[4].dayNum;
    
    // Check if assessment overlaps with current week
    return (startDay >= weekStart && startDay <= weekEnd) || 
           (endDay >= weekStart && endDay <= weekEnd) ||
           (startDay <= weekStart && endDay >= weekEnd);
  });
  
  // Helper function to calculate assessment position and width
  const getAssessmentPosition = (assessment: any) => {
    const startDay = parseInt(assessment.startDate.split('-')[0]);
    const endDay = parseInt(assessment.endDate.split('-')[0]);
    
    // Find which column the assessment starts and ends in
    const startIndex = weekDays.findIndex(d => d.dayNum === startDay);
    const endIndex = weekDays.findIndex(d => d.dayNum === endDay);
    
    if (startIndex === -1 && endIndex === -1) return null;
    
    // Handle assessments that extend beyond the week view
    const actualStartIndex = Math.max(0, startIndex);
    const actualEndIndex = endIndex === -1 ? 4 : Math.min(4, endIndex);
    
    const columnWidth = 100 / 5; // 5 days
    const left = actualStartIndex * columnWidth;
    const width = (actualEndIndex - actualStartIndex + 1) * columnWidth;
    
    return { left: `${left}%`, width: `${width}%` };
  };
  
  const statCards = [
    { 
      label: 'Total Assessments', 
      value: stats.total.toString(), 
      icon: Layers, 
      bgColor: '#343A6F',
      textColor: '#FFFFFF'
    },
    { 
      label: 'Assigned', 
      value: stats.assigned.toString(), 
      icon: Send, 
      bgColor: '#FFFFFF',
      iconColor: '#343A6F',
      textColor: '#121212',
      borderColor: '#d4d4d4'
    },
    { 
      label: 'In Progress', 
      value: stats.inProgress.toString(), 
      icon: Activity, 
      bgColor: '#FFFFFF',
      iconColor: '#8B92C4',
      textColor: '#121212',
      borderColor: '#d4d4d4'
    },
    { 
      label: 'Completed', 
      value: stats.completed.toString(), 
      icon: Award, 
      bgColor: '#FFFFFF',
      iconColor: '#388E3C',
      textColor: '#121212',
      borderColor: '#d4d4d4'
    },
  ];
  
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section - White Background */}
      <div className="bg-white border-b border-[#ebebeb]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[24px] lg:py-[32px] pb-[16px] sm:pb-[20px] lg:pb-[24px]">
          <h1 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#333]">Hello, Hunter</h1>
        </div>
      </div>
      
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] sm:py-[32px] lg:py-[40px]">
        {/* Enhanced Stats Section - 4 Boxes with Creative Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] sm:gap-[20px] lg:gap-[24px] mb-[32px] sm:mb-[40px]">
          {/* Total Assessments - Featured Dark Card */}
          <div className="bg-[#343A6F] rounded-[8px] p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-white opacity-5 rounded-full -mr-[40px] -mt-[40px]"></div>
            <div className="relative z-10 flex items-center gap-[16px]">
              <div className="flex items-center justify-center size-[48px] rounded-[8px] bg-white shrink-0">
                <Layers className="size-[24px]" style={{ color: '#343A6F' }} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Rubik:Medium',sans-serif] text-[40px] text-white leading-none mb-[4px]">
                  {stats.total}
                </p>
                <h3 className="font-['Rubik:Regular',sans-serif] text-[16px] text-white opacity-90 mb-[4px]">
                  Total Assessments
                </h3>
                <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white opacity-75">
                  Across all subjects
                </p>
              </div>
            </div>
          </div>
          
          {/* Assigned - White Card with Navy Accent */}
          <div className="bg-white rounded-[8px] p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F]">
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center justify-center size-[48px] rounded-[8px] bg-[#343A6F] shrink-0">
                <Send className="size-[24px]" style={{ color: '#FFFFFF' }} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Rubik:Medium',sans-serif] text-[40px] leading-none mb-[4px]" style={{ color: '#343A6F' }}>
                  {stats.assigned}
                </p>
                <h3 className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                  Assigned
                </h3>
                <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                  {stats.assigned > 0 ? `${Math.min(3, stats.assigned)} due this week` : 'None due this week'}
                </p>
              </div>
            </div>
          </div>
          
          {/* In Progress - White Card with Light Purple Accent */}
          <div className="bg-white rounded-[8px] p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#8B92C4]">
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center justify-center size-[48px] rounded-[8px] bg-[#8B92C4] shrink-0">
                <Activity className="size-[24px]" style={{ color: '#FFFFFF' }} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Rubik:Medium',sans-serif] text-[40px] leading-none mb-[4px]" style={{ color: '#8B92C4' }}>
                  {stats.inProgress}
                </p>
                <h3 className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                  In Progress
                </h3>
                <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                  {stats.inProgress > 0 ? `${Math.min(5, stats.inProgress)} started today` : 'None started today'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Completed - White Card with Green Accent */}
          <div className="bg-white rounded-[8px] p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#388E3C]">
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center justify-center size-[48px] rounded-[8px] bg-[#388E3C] shrink-0">
                <Award className="size-[24px]" style={{ color: '#FFFFFF' }} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Rubik:Medium',sans-serif] text-[40px] leading-none mb-[4px]" style={{ color: '#388E3C' }}>
                  {stats.completed}
                </p>
                <h3 className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                  Completed
                </h3>
                <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                  {stats.completed > 0 ? `${Math.round((stats.completed / stats.total) * 100)}% completion rate` : 'None this week'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline Chart - Full Width */}
        <div className="bg-white p-[20px] sm:p-[24px] lg:p-[32px] rounded-[8px] border border-[#d4d4d4] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] mb-[32px] sm:mb-[40px]" dir="ltr">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] mb-[24px]">
            <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212]">Assessment Schedule by Subject</h2>
            <div className="flex gap-[8px] items-center">
              <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">{weekDays[0].date} – {weekDays[4].date}</p>
              <button className="size-[20px] hover:opacity-70 transition-opacity" aria-label="Previous week" onClick={() => setCurrentWeekIndex(prev => Math.max(prev - 1, 0))}>
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p339a49f0} fill="#707070" />
                </svg>
              </button>
              <button className="size-[20px] hover:opacity-70 transition-opacity" aria-label="Next week" onClick={() => setCurrentWeekIndex(prev => Math.min(prev + 1, weeks.length - 1))}>
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p12938870} fill="#707070" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Calendar Header */}
            <div className="flex border-b border-[#d4d4d4]">
              {weekDays.map((day, i) => (
                <div 
                  key={i} 
                  className="flex-1 p-[12px] border-s first:border-s-0 border-[#ebebeb]"
                >
                  <p className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px]">
                    <span className="text-[#707070]">{day.short}</span>
                    <span className="text-[#121212] ms-1 hidden sm:inline">{day.full}</span>
                  </p>
                  <p className="font-['Rubik:Regular',sans-serif] text-[12px] text-[#707070] mt-[4px] hidden md:block">
                    {day.date.split('-')[0]}-{day.date.split('-')[1]}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Assessment Timeline */}
            <div className="relative overflow-y-auto bg-[#F7F7F7]" style={{ height: '352px' }}>
              <div className="relative" style={{ height: `${currentWeekAssessments.length * 64 + 32}px`, minHeight: '352px' }}>
                {/* Horizontal row dividers */}
                {Array.from({ length: Math.ceil((currentWeekAssessments.length * 64 + 32) / 64) }).map((_, i) => (
                  <div 
                    key={`divider-${i}`}
                    className="absolute w-full border-b border-[#ebebeb]"
                    style={{ top: `${i * 64}px` }}
                  />
                ))}
                
                {/* Vertical column dividers */}
                {weekDays.slice(1).map((_, i) => (
                  <div 
                    key={`col-divider-${i}`}
                    className="absolute h-full border-s border-[#ebebeb]"
                    style={{ left: `${(i + 1) * (100 / 5)}%` }}
                  />
                ))}
                
                {currentWeekAssessments.map((assessment, i) => {
                  const position = getAssessmentPosition(assessment);
                  if (!position) return null;
                  
                  // Calculate how many days the assessment spans
                  const startDay = parseInt("15");
                  const endDay = parseInt("30");
                  const daysSpan = endDay - startDay + 1;
                  const showSubjectBadge = daysSpan >= 2; // Only show badge if 2+ days
                  
                  return (
                    <div
                      key={assessment.id}
                      className="absolute rounded-[8px] transition-all hover:shadow-md cursor-pointer z-10"
                      style={{
                        backgroundColor: `${assessment.color}15`,
                        border: `2px solid ${assessment.color}`,
                        top: `${16 + i * 64}px`,
                        left: position.left,
                        width: position.width,
                        height: '52px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 12px'
                      }}
                    >
                      <div className="flex gap-[8px] items-center w-full min-w-0">
                        <div 
                          className="h-[24px] rounded-[4px] w-[4px] shrink-0" 
                          style={{ backgroundColor: assessment.color }} 
                        />
                        <div className="flex-1 min-w-0 overflow-hidden">
                          <p className="font-['Rubik:Medium',sans-serif] text-[14px] sm:text-[16px] text-[#121212] truncate">
                            {assessment.title}
                          </p>
                          <p className="font-['Rubik:Regular',sans-serif] text-[12px] text-[#707070] mt-[2px] truncate">
                            {assessment.startDate} – {assessment.endDate}
                          </p>
                        </div>
                        {showSubjectBadge && (
                          <span 
                            className="font-['Rubik:Medium',sans-serif] text-[12px] sm:text-[14px] px-[10px] py-[6px] rounded-[4px] whitespace-nowrap shrink-0"
                            style={{ 
                              backgroundColor: assessment.color,
                              color: '#FFFFFF'
                            }}
                          >
                            {assessment.subject}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Assessment List */}
        <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[16px] sm:p-[20px] lg:p-[24px]">
          <div className="flex flex-col gap-[20px] mb-[20px] sm:mb-[24px]">
            {/* View Controls */}
            <div className="flex justify-end items-center gap-[8px] flex-wrap">
              {/* Items Per Page Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#C4C8E1] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <p className="font-['Rubik:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center">Items Per Page:</p>
                  <p className="font-['Rubik:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">{itemsPerPage}</p>
                  <ChevronUp className={`size-[20px] text-[#707070] transition-transform ${isDropdownOpen ? '' : 'rotate-180'}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-[8px] right-0 bg-white border border-[#707070] rounded-[8px] shadow-lg z-50 overflow-hidden min-w-[180px]">
                    {[12, 24, 48].map((count) => (
                      <button
                        key={count}
                        onClick={() => {
                          setItemsPerPage(count);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-[16px] py-[12px] text-left font-['Rubik:Regular',sans-serif] text-[16px] transition-colors ${
                          itemsPerPage === count 
                            ? 'bg-[#343A6F] text-white' 
                            : 'text-[#121212] hover:bg-[#C4C8E1]'
                        }`}
                      >
                        {count} items
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Grid Button */}
              <button 
                onClick={() => setViewMode('grid')}
                className={`font-['Rubik:Medium',sans-serif] flex items-center gap-[8px] px-[16px] py-[10px] rounded-[24px] text-[14px] transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#343A6F] text-white hover:bg-[#C4C8E1] hover:text-[#343A6F]'
                    : 'border border-[#707070] text-[#121212] bg-white hover:bg-[#C4C8E1] hover:border-[#343A6F]'
                }`}
              >
                <Grid3x3 className="size-[16px]" strokeWidth={2} />
                Grid
              </button>
              
              {/* List Button */}
              <button 
                onClick={() => setViewMode('list')}
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
            
            {/* Filter Tabs with Underline Style */}
            <div className="flex gap-[24px] overflow-x-auto border-b border-[#EBEBEB]">
              <button 
                onClick={() => setAssessmentFilter('assigned')}
                className={`font-['Rubik:Medium',sans-serif] text-[14px] pb-[12px] whitespace-nowrap transition-colors relative ${
                  assessmentFilter === 'assigned' 
                    ? 'text-[#121212]' 
                    : 'text-[#707070] hover:text-[#343A6F]'
                }`}
              >
                Assigned
                {assessmentFilter === 'assigned' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#343A6F]" />
                )}
              </button>
              <button 
                onClick={() => setAssessmentFilter('in-progress')}
                className={`font-['Rubik:Medium',sans-serif] text-[14px] pb-[12px] whitespace-nowrap transition-colors relative ${
                  assessmentFilter === 'in-progress' 
                    ? 'text-[#121212]' 
                    : 'text-[#707070] hover:text-[#343A6F]'
                }`}
              >
                In Progress
                {assessmentFilter === 'in-progress' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#343A6F]" />
                )}
              </button>
              <button 
                onClick={() => setAssessmentFilter('completed')}
                className={`font-['Rubik:Medium',sans-serif] text-[14px] pb-[12px] whitespace-nowrap transition-colors relative ${
                  assessmentFilter === 'completed' 
                    ? 'text-[#121212]' 
                    : 'text-[#707070] hover:text-[#343A6F]'
                }`}
              >
                Completed
                {assessmentFilter === 'completed' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#343A6F]" />
                )}
              </button>
            </div>
          </div>
          
          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {assessments
                .filter(assessment => assessment.status === assessmentFilter)
                .slice(0, itemsPerPage)
                .map(assessment => (
                <Link key={assessment.id} to={`/assessment/${assessment.id}`} className="w-full min-h-[280px] hover:shadow-lg transition-shadow">
                  <AssessmentCard
                    title={assessment.title}
                    subject={assessment.subject}
                    grade={assessment.grade}
                    batteryGroup={assessment.batteryGroup}
                    progress={assessment.progress}
                    total={assessment.total}
                    dueDate={assessment.dueDate}
                  />
                </Link>
              ))}
            </div>
          )}
          
          {/* List View */}
          {viewMode === 'list' && (
            <div className="flex flex-col gap-[16px]">
              {assessments
                .filter(assessment => assessment.status === assessmentFilter)
                .slice(0, itemsPerPage)
                .map(assessment => {
                  const progressPercent = Math.round((assessment.progress / assessment.total) * 100);
                  const isFavorited = favorites[assessment.id] || false;
                  
                  return (
                    <div 
                      key={assessment.id} 
                      className="bg-white border border-[#d4d4d4] rounded-[8px] p-[16px] hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col lg:flex-row gap-[16px] items-start lg:items-center">
                        {/* Subject Icon */}
                        <div 
                          className="size-[48px] rounded-[8px] flex items-center justify-center shrink-0 overflow-hidden"
                          style={{ backgroundColor: `${assessment.color}20` }}
                        >
                          {renderSubjectIcon(assessment.subject, assessment.color)}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <Link to={`/assessment/${assessment.id}`} className="hover:underline">
                            <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] sm:text-[18px] text-[#121212] mb-[4px]">
                              {assessment.title}
                            </h3>
                          </Link>
                          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070] mb-[4px]">
                            {assessment.batteryGroup} | {assessment.grade}
                          </p>
                          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                            By {assessment.author}
                          </p>
                        </div>
                        
                        {/* Progress */}
                        <div className="flex items-center gap-[12px] shrink-0">
                          <div className="flex items-center gap-[8px]">
                            <div className="bg-[#c4c8e1] h-[8px] w-[200px] rounded-[32px] overflow-hidden">
                              <div 
                                className="bg-[#343a6f] h-full rounded-[32px]"
                                style={{ width: `${progressPercent}%` }}
                              />
                            </div>
                            <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212] min-w-[50px] text-right">
                              {assessment.progress}/{assessment.total}
                            </p>
                          </div>
                        </div>
                        
                        {/* Due Date */}
                        <div className="flex items-center gap-[8px] shrink-0 min-w-[100px]">
                          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                            Due: {assessment.dueDate}
                          </p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-[6px] shrink-0">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              setFavorites(prev => ({ ...prev, [assessment.id]: !prev[assessment.id] }));
                            }}
                            className="bg-[#f7f7f7] border border-[#d4d4d4] flex items-center justify-center p-[7px] rounded-[100px] hover:bg-[#C4C8E1] transition-colors"
                            aria-label="Favorite"
                          >
                            <Star 
                              className={`size-[16px] transition-colors ${isFavorited ? 'text-[#343A6F]' : 'text-[#707070]'}`}
                              strokeWidth={2} 
                              fill={isFavorited ? '#343A6F' : 'none'} 
                            />
                          </button>
                          <button 
                            onClick={(e) => e.preventDefault()}
                            className="bg-[#f7f7f7] border border-[#d4d4d4] flex items-center justify-center p-[7px] rounded-[100px] hover:bg-[#C4C8E1] transition-colors"
                            aria-label="Assign"
                          >
                            <UserPlus className="size-[16px] text-[#707070]" strokeWidth={2} />
                          </button>
                          <button 
                            onClick={(e) => e.preventDefault()}
                            className="bg-[#f7f7f7] border border-[#d4d4d4] flex items-center justify-center p-[7px] rounded-[100px] hover:bg-[#C4C8E1] transition-colors"
                            aria-label="Edit"
                          >
                            <Pencil className="size-[16px] text-[#707070]" strokeWidth={2} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}