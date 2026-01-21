import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AssessmentCard } from '../components/AssessmentCard';
import { DynamicSearchInput } from '../components/DynamicSearchInput';
import { Star, ChevronUp, Grid3x3, List } from 'lucide-react';
import React from 'react';
import svgPathsCard from "../../imports/svg-wmka0jxbro";

// Extended assessments data matching Home page
const assessments = [
  { id: '1', title: 'Math 8 Interim Assessment 1', subject: 'Math', grade: 'Grade 8', batteryGroup: 'Battery Group 1', progress: 28, total: 30, dueDate: '15-Jan-26', status: 'assigned', color: '#03B0E8', author: 'Ryan Hobb' },
  { id: '2', title: 'Reading Comprehension Test', subject: 'Reading', grade: 'Grade 7', batteryGroup: 'Battery Group 2', progress: 18, total: 25, dueDate: '20-Jan-26', status: 'in-progress', color: '#EB8900', author: 'Jon Bruneti' },
  { id: '3', title: 'Science Final Exam', subject: 'Science', grade: 'Grade 9', batteryGroup: 'Battery Group 3', progress: 25, total: 25, dueDate: '10-Jan-26', status: 'completed', color: '#9266E5', author: 'Rebecca Oja' },
  { id: '4', title: 'History Mid-term', subject: 'History', grade: 'Grade 10', batteryGroup: 'Battery Group 1', progress: 15, total: 20, dueDate: '25-Jan-26', status: 'in-progress', color: '#EC5E74', author: 'Sumin Chou' },
  { id: '5', title: 'Algebra 1 Quiz', subject: 'Math', grade: 'Grade 9', batteryGroup: 'Battery Group 2', progress: 10, total: 15, dueDate: '18-Jan-26', status: 'assigned', color: '#03B0E8', author: 'Ryan Hobb' },
  { id: '6', title: 'Biology Lab Assessment', subject: 'Science', grade: 'Grade 11', batteryGroup: 'Battery Group 3', progress: 12, total: 12, dueDate: '12-Jan-26', status: 'completed', color: '#9266E5', author: 'Jon Bruneti' },
  { id: '7', title: 'English Literature Essay', subject: 'Reading', grade: 'Grade 12', batteryGroup: 'Battery Group 1', progress: 5, total: 10, dueDate: '22-Jan-26', status: 'in-progress', color: '#EB8900', author: 'Rebecca Oja' },
  { id: '8', title: 'World History Project', subject: 'History', grade: 'Grade 11', batteryGroup: 'Battery Group 2', progress: 8, total: 8, dueDate: '14-Jan-26', status: 'completed', color: '#EC5E74', author: 'Sumin Chou' },
  { id: '9', title: 'Geometry Assessment', subject: 'Math', grade: 'Grade 10', batteryGroup: 'Battery Group 3', progress: 0, total: 20, dueDate: '30-Jan-26', status: 'assigned', color: '#03B0E8', author: 'Ryan Hobb' },
  { id: '10', title: 'Chemistry Test', subject: 'Science', grade: 'Grade 10', batteryGroup: 'Battery Group 1', progress: 16, total: 18, dueDate: '28-Jan-26', status: 'in-progress', color: '#9266E5', author: 'Jon Bruneti' },
  { id: '11', title: 'Grammar Quiz', subject: 'Reading', grade: 'Grade 8', batteryGroup: 'Battery Group 2', progress: 20, total: 20, dueDate: '11-Jan-26', status: 'completed', color: '#EB8900', author: 'Rebecca Oja' },
  { id: '12', title: 'US History Exam', subject: 'History', grade: 'Grade 8', batteryGroup: 'Battery Group 3', progress: 22, total: 30, dueDate: '26-Jan-26', status: 'in-progress', color: '#EC5E74', author: 'Sumin Chou' },
  { id: '13', title: 'Calculus Mid-term', subject: 'Math', grade: 'Grade 12', batteryGroup: 'Battery Group 1', progress: 0, total: 25, dueDate: '02-Feb-26', status: 'assigned', color: '#03B0E8', author: 'Ryan Hobb' },
  { id: '14', title: 'Physics Lab', subject: 'Science', grade: 'Grade 12', batteryGroup: 'Battery Group 2', progress: 10, total: 12, dueDate: '19-Jan-26', status: 'in-progress', color: '#9266E5', author: 'Jon Bruneti' },
  { id: '15', title: 'Poetry Analysis', subject: 'Reading', grade: 'Grade 11', batteryGroup: 'Battery Group 3', progress: 15, total: 15, dueDate: '13-Jan-26', status: 'completed', color: '#EB8900', author: 'Rebecca Oja' },
  { id: '16', title: 'Civil War Assessment', subject: 'History', grade: 'Grade 9', batteryGroup: 'Battery Group 1', progress: 18, total: 22, dueDate: '24-Jan-26', status: 'in-progress', color: '#EC5E74', author: 'Sumin Chou' },
  { id: '17', title: 'Statistics Quiz', subject: 'Math', grade: 'Grade 11', batteryGroup: 'Battery Group 2', progress: 0, total: 18, dueDate: '05-Feb-26', status: 'assigned', color: '#03B0E8', author: 'Ryan Hobb' },
  { id: '18', title: 'Environmental Science', subject: 'Science', grade: 'Grade 9', batteryGroup: 'Battery Group 3', progress: 14, total: 14, dueDate: '16-Jan-26', status: 'completed', color: '#9266E5', author: 'Jon Bruneti' }
];

type AssessmentTab = 'your' | 'assigned' | 'all' | 'favorited';

export function Assessments() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [assessmentFilter, setAssessmentFilter] = useState<AssessmentTab>('your');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    '1': true,
    '3': true,
    '6': true
  });
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'recent' | 'due-date' | 'progress-high' | 'progress-low' | 'grade'>('recent');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  
  // Search suggestions for DynamicSearchInput
  const searchSuggestions = [
    'Math 8 Interim Assessment 1',
    'Reading Comprehension Test',
    'Science Final Exam',
    'History Mid-term',
    'Algebra 1 Quiz',
    'Biology Lab Assessment',
    'English Literature Essay',
    'World History Project',
    'Geometry Assessment',
    'Chemistry Test',
    'Grammar Quiz',
    'US History Exam',
    'Calculus Mid-term',
    'Physics Lab',
    'Poetry Analysis',
    'Civil War Assessment',
    'Statistics Quiz',
    'Environmental Science'
  ];

  // Filter assessments based on tab
  const filteredAssessments = assessments.filter(assessment => {
    if (assessmentFilter === 'your') return assessment.author === 'Ryan Hobb';
    if (assessmentFilter === 'assigned') return assessment.status === 'assigned';
    if (assessmentFilter === 'favorited') return favorites[assessment.id];
    return true; // 'all'
  }).slice(0, itemsPerPage);

  // Subject icon renderer (matching Home page)
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

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] sm:py-[32px]">
          {/* Title and Filter Pills Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
            <h1 className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[36px] lg:text-[40px] text-[#121212] leading-[1.2]">
              Assessments
            </h1>
            
            {/* Filter Pills */}
            <div className="flex gap-[8px] items-center overflow-x-auto">
              <button
                onClick={() => setAssessmentFilter('your')}
                className={`font-['Rubik:Regular',sans-serif] text-[14px] px-[16px] py-[8px] rounded-[100px] whitespace-nowrap transition-all border ${
                  assessmentFilter === 'your' 
                    ? 'bg-[#343A6F] text-white border-[#343A6F]' 
                    : 'bg-white text-[#121212] border-[#707070] hover:border-[#343A6F] hover:text-[#343A6F]'
                }`}
              >
                Your Assessments
              </button>
              <button
                onClick={() => setAssessmentFilter('assigned')}
                className={`font-['Rubik:Regular',sans-serif] text-[14px] px-[16px] py-[8px] rounded-[100px] whitespace-nowrap transition-all border ${
                  assessmentFilter === 'assigned' 
                    ? 'bg-[#343A6F] text-white border-[#343A6F]' 
                    : 'bg-white text-[#121212] border-[#707070] hover:border-[#343A6F] hover:text-[#343A6F]'
                }`}
              >
                Assigned
              </button>
              <button
                onClick={() => setAssessmentFilter('all')}
                className={`font-['Rubik:Regular',sans-serif] text-[14px] px-[16px] py-[8px] rounded-[100px] whitespace-nowrap transition-all border ${
                  assessmentFilter === 'all' 
                    ? 'bg-[#343A6F] text-white border-[#343A6F]' 
                    : 'bg-white text-[#121212] border-[#707070] hover:border-[#343A6F] hover:text-[#343A6F]'
                }`}
              >
                All Assessments
              </button>
              <button
                onClick={() => setAssessmentFilter('favorited')}
                className={`font-['Rubik:Regular',sans-serif] text-[14px] px-[16px] py-[8px] rounded-[100px] whitespace-nowrap transition-all border ${
                  assessmentFilter === 'favorited' 
                    ? 'bg-[#343A6F] text-white border-[#343A6F]' 
                    : 'bg-white text-[#121212] border-[#707070] hover:border-[#343A6F] hover:text-[#343A6F]'
                }`}
              >
                Favorited
              </button>
            </div>
          </div>
        </div>
        
        {/* Full Width Divider */}
        <div className="h-[1px] bg-[#d4d4d4] w-full" />
        
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] sm:py-[32px]">
          {/* Search and Controls Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[16px] mb-[24px]">
            {/* Search Box */}
            <DynamicSearchInput
              placeholder="Search"
              suggestions={searchSuggestions}
              rounded={true}
              className="flex-1 max-w-[400px]"
            />
            
            {/* Right Controls */}
            <div className="flex gap-[8px] items-center flex-wrap ml-auto">
              {/* Sort By Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  className="bg-white content-stretch flex gap-[4px] items-center justify-center h-[44px] px-[16px] py-[12px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#C4C8E1] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <p className="font-['Rubik:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#121212] text-[14px] text-center whitespace-nowrap">
                    Sort by: {sortBy === 'recent' && 'Most Recently Assigned'}
                    {sortBy === 'due-date' && 'Due Date (Earliest)'}
                    {sortBy === 'progress-high' && 'Progress (Highest)'}
                    {sortBy === 'progress-low' && 'Progress (Lowest)'}
                    {sortBy === 'grade' && 'Grade Level'}
                  </p>
                  <ChevronUp className={`size-[20px] text-[#707070] transition-transform ${isSortDropdownOpen ? '' : 'rotate-180'}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isSortDropdownOpen && (
                  <div className="absolute top-full mt-[8px] right-0 bg-white border border-[#707070] rounded-[8px] shadow-lg z-50 overflow-hidden min-w-[240px]">
                    <button
                      onClick={() => {
                        setSortBy('recent');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'recent' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Most Recently Assigned</p>
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('due-date');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'due-date' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Due Date (Earliest)</p>
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('progress-high');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'progress-high' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Progress (Highest)</p>
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('progress-low');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'progress-low' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Progress (Lowest)</p>
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('grade');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'grade' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Grade Level</p>
                    </button>
                  </div>
                )}
              </div>
              
              {/* Items Per Page Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-white content-stretch flex gap-[4px] items-center justify-center h-[44px] px-[16px] py-[12px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#C4C8E1] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <p className="font-['Rubik:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#121212] text-[14px] text-center whitespace-nowrap">Items Per Page: {itemsPerPage}</p>
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
                        className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${itemsPerPage === count ? 'bg-[#f0f0f0]' : ''}`}
                      >
                        <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">{count}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Grid Button - Filled when active */}
              <button 
                onClick={() => setViewMode('grid')}
                className={`font-['Rubik:Medium',sans-serif] flex items-center gap-[8px] px-[16px] py-[10px] rounded-[24px] text-[14px] transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-[#343A6F] text-white hover:bg-[#C4C8E1] hover:text-[#343A6F]' 
                    : 'bg-white text-[#121212] border border-[#707070] hover:bg-[#C4C8E1] hover:border-[#343A6F]'
                }`}
              >
                <Grid3x3 className="size-[16px]" strokeWidth={2} />
                Grid
              </button>
              
              {/* List Button - Outlined when not active */}
              <button 
                onClick={() => setViewMode('list')}
                className={`font-['Rubik:Medium',sans-serif] flex items-center gap-[8px] px-[16px] py-[10px] rounded-[24px] text-[14px] transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[#343A6F] text-white hover:bg-[#C4C8E1] hover:text-[#343A6F]' 
                    : 'bg-white text-[#121212] border border-[#707070] hover:bg-[#C4C8E1] hover:border-[#343A6F]'
                }`}
              >
                <List className="size-[16px]" strokeWidth={2} />
                List
              </button>
            </div>
          </div>
          
          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {filteredAssessments.map(assessment => (
                <Link 
                  key={assessment.id} 
                  to={`/assessment/${assessment.id}`} 
                  className="w-full min-h-[280px] hover:shadow-lg transition-shadow"
                >
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
              {filteredAssessments.map(assessment => {
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
                          <span className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212] min-w-[60px]">
                            {assessment.progress}/{assessment.total}
                          </span>
                        </div>
                      </div>
                      
                      {/* Due Date and Actions - Grouped with smaller gap */}
                      <div className="flex items-center gap-[8px]">
                        {/* Due Date */}
                        <div className="flex items-center gap-[8px] shrink-0">
                          <span className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                            Due: {assessment.dueDate}
                          </span>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-[8px]">
                          <button className="px-[16px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[100px] text-[13px] text-[#707070] hover:bg-[#C4C8E1] transition-colors">
                            View
                          </button>
                          <button className="px-[16px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[100px] text-[13px] text-[#707070] hover:bg-[#C4C8E1] transition-colors">
                            Assign
                          </button>
                          <button 
                            className="p-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              setFavorites(prev => ({
                                ...prev,
                                [assessment.id]: !prev[assessment.id]
                              }));
                            }}
                          >
                            <Star 
                              className={`size-[16px] transition-colors ${isFavorited ? 'text-[#343A6F]' : 'text-[#707070]'}`}
                              strokeWidth={2} 
                              fill={isFavorited ? '#343A6F' : 'none'} 
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          {filteredAssessments.length === 0 && (
            <div className="text-center py-[64px]">
              <p className="text-[18px] text-[#707070]">No assessments found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}