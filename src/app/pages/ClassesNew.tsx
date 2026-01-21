import { ClassCard } from '../components/ClassCard';
import { classes } from '../data/mockData';
import { useState } from 'react';
import { DynamicSearchInput } from '../components/DynamicSearchInput';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubjectType } from '../components/ClassCard';

export function ClassesNew() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'recent' | 'alphabetical' | 'date-created'>('recent');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  
  // Search suggestions for DynamicSearchInput
  const searchSuggestions = [
    'Math Class',
    'Science Lab',
    'Reading Class',
    'History 101',
    'Career/Tech',
    'Grade 8 Math',
    'Grade 9 Science',
    'Grade 10 Reading'
  ];
  
  const filteredClasses = activeFilter === 'All' 
    ? classes 
    : classes.filter(c => c.subject === activeFilter);
  
  const displayedClasses = filteredClasses.slice(0, itemsPerPage);
  
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] sm:py-[32px]">
          {/* Title and Filter Pills Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
            <h1 className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[36px] lg:text-[40px] text-[#121212] leading-[1.2]">
              Classes
            </h1>
            
            {/* Filter Pills */}
            <div className="flex gap-[8px] items-center overflow-x-auto">
              {['All', 'Reading', 'History', 'Science', 'Math', 'Career/Tech', 'Other'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-['Rubik:Regular',sans-serif] text-[14px] px-[16px] py-[8px] rounded-[100px] whitespace-nowrap transition-all border ${
                    activeFilter === filter 
                      ? 'bg-[#343A6F] text-white border-[#343A6F]' 
                      : 'bg-white text-[#121212] border-[#707070] hover:border-[#343A6F] hover:text-[#343A6F]'
                  }`}
                >
                  {filter}
                </button>
              ))}
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
              onSearch={(value) => setSearchQuery(value)}
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
                  <p className="font-['Rubik:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#121212] text-[14px] text-center whitespace-nowrap">Sort by: Most Recent</p>
                  <ChevronUp className={`size-[20px] text-[#707070] transition-transform ${isSortDropdownOpen ? '' : 'rotate-180'}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isSortDropdownOpen && (
                  <div className="absolute top-full mt-[8px] right-0 bg-white border border-[#707070] rounded-[8px] shadow-lg z-50 overflow-hidden min-w-[200px]">
                    <button
                      onClick={() => {
                        setSortBy('recent');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'recent' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Most Recent</p>
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('alphabetical');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'alphabetical' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Alphabetical</p>
                    </button>
                    <button
                      onClick={() => {
                        setSortBy('date-created');
                        setIsSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${sortBy === 'date-created' ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]">Date Created</p>
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
            </div>
          </div>
          
          {/* Grid View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {displayedClasses.map((classItem, index) => (
              <Link 
                key={`${classItem.id}-${index}`} 
                to={`/class/${classItem.id}`}
                className="w-full hover:shadow-lg transition-shadow"
              >
                <ClassCard
                  className={classItem.name}
                  subject={classItem.subject as SubjectType}
                  grade={classItem.grade}
                  courseCode={classItem.subject}
                  activeAssessments={classItem.assessmentCount}
                  studentCount={classItem.studentCount}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}