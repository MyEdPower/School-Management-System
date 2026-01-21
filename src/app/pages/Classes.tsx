import { Link } from 'react-router-dom';
import { classes } from '../data/mockData';
import { ClassCard } from '@/app/components/ClassCard';
import { useState } from 'react';
import { Grid3x3, List, ChevronUp } from 'lucide-react';

export function Classes() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    '1': true,
    '3': true
  });
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFavorite = (classId: string) => {
    setFavorites(prev => ({
      ...prev,
      [classId]: !prev[classId]
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] sm:py-[32px]">
          <h1 className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[36px] lg:text-[40px] text-[#121212]">
            Classes
          </h1>
        </div>
      </div>
      
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] sm:py-[32px]">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[16px] mb-[24px]">
          {/* Results Count */}
          <div className="flex items-center gap-[16px]">
            <p className="text-[14px] text-[#707070]">
              Showing {Math.min(itemsPerPage, classes.length)} of {classes.length} classes
            </p>
            <button className="px-[20px] py-[10px] bg-[#343A6F] text-white rounded-[8px] text-[14px] font-['Rubik:Medium',sans-serif] hover:bg-[#2a2f5a] transition-colors">
              + Create New Class
            </button>
          </div>
          
          {/* View Controls */}
          <div className="flex gap-[8px] items-center flex-wrap">
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
                      className={`w-full text-left px-[16px] py-[12px] hover:bg-[#C4C8E1] transition-colors ${itemsPerPage === count ? 'bg-[#f0f0f0]' : ''}`}
                    >
                      <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#121212]">{count}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Grid Button */}
            <button 
              onClick={() => setViewMode('grid')}
              className={`font-['Rubik:Medium',sans-serif] flex items-center gap-[8px] px-[24px] py-[12px] rounded-[100px] text-[16px] transition-all ${
                viewMode === 'grid' 
                  ? 'bg-[#343A6F] text-white border-[2px] border-[#343A6F]' 
                  : 'bg-white text-[#121212] border-[2px] border-[#707070] hover:border-[#343A6F]'
              }`}
            >
              <Grid3x3 className="size-[20px]" />
              Grid
            </button>
            
            {/* List Button */}
            <button 
              onClick={() => setViewMode('list')}
              className={`font-['Rubik:Medium',sans-serif] flex items-center gap-[8px] px-[24px] py-[12px] rounded-[100px] text-[16px] transition-all ${
                viewMode === 'list' 
                  ? 'bg-[#343A6F] text-white border-[2px] border-[#343A6F]' 
                  : 'bg-white text-[#121212] border-[2px] border-[#707070] hover:border-[#343A6F]'
              }`}
            >
              <List className="size-[20px]" />
              List
            </button>
          </div>
        </div>
        
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {classes.slice(0, itemsPerPage).map(classItem => (
              <div key={classItem.id} className="min-h-[280px]">
                <ClassCard
                  className={classItem.name}
                  subject={classItem.subject as any}
                  grade={classItem.grade}
                  courseCode={classItem.subject}
                  activeAssessments={classItem.assessmentCount}
                  studentCount={classItem.studentCount}
                  onView={() => window.location.href = `/class/${classItem.id}`}
                  onEdit={() => console.log('Edit class:', classItem.id)}
                  onFavorite={() => handleFavorite(classItem.id)}
                  isFavorited={favorites[classItem.id] || false}
                />
              </div>
            ))}
          </div>
        )}
        
        {/* List View */}
        {viewMode === 'list' && (
          <div className="flex flex-col gap-[16px]">
            {classes.slice(0, itemsPerPage).map(classItem => {
              const isFavorited = favorites[classItem.id] || false;
              
              return (
                <div 
                  key={classItem.id} 
                  className="bg-white border border-[#d4d4d4] rounded-[8px] p-[16px] hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row gap-[16px] items-start lg:items-center">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/class/${classItem.id}`} className="hover:underline">
                        <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] sm:text-[18px] text-[#121212] mb-[4px]">
                          {classItem.name}
                        </h3>
                      </Link>
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070] mb-[4px]">
                        {classItem.grade} | {classItem.subject}
                      </p>
                      <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                        Teacher: {classItem.teacher}
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-[24px] shrink-0">
                      <div className="flex flex-col">
                        <span className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                          Active Assessments
                        </span>
                        <span className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212]">
                          {classItem.assessmentCount}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                          Students
                        </span>
                        <span className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212]">
                          {classItem.studentCount}
                        </span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-[8px]">
                      <Link 
                        to={`/class/${classItem.id}`}
                        className="px-[16px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[100px] text-[13px] text-[#707070] hover:bg-[#C4C8E1] transition-colors"
                      >
                        View
                      </Link>
                      <button className="px-[16px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[100px] text-[13px] text-[#707070] hover:bg-[#C4C8E1] transition-colors">
                        Edit
                      </button>
                      <button 
                        className="px-[16px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[100px] text-[13px] hover:bg-[#C4C8E1] transition-colors flex items-center gap-[6px]"
                        onClick={(e) => {
                          e.preventDefault();
                          handleFavorite(classItem.id);
                        }}
                      >
                        <span className={`transition-colors ${isFavorited ? 'text-[#343A6F]' : 'text-[#707070]'}`}>
                          {isFavorited ? '★' : '☆'}
                        </span>
                        <span className="text-[#707070]">Favorite</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {classes.length === 0 && (
          <div className="text-center py-[64px]">
            <p className="text-[18px] text-[#707070]">No classes found</p>
          </div>
        )}
      </div>
    </div>
  );
}