import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AssessmentCard } from '../components/AssessmentCard';
import { AutocompleteSelect } from '../components/AutocompleteSelect';
import { DynamicSearchInput } from '../components/DynamicSearchInput';
import { Plus, ChevronDown } from 'lucide-react';
import svgPaths from "../../imports/svg-m4ku2sj0b0";
import { assessments } from '../data/mockData';
import { AssessmentCardNew } from '../components/AssessmentCardNew';

export function AssessmentsNew() {
  const [activeTab, setActiveTab] = useState<'all' | 'your' | 'assigned' | 'favorited'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Search suggestions
  const searchSuggestions = [
    'Math Assessment',
    'Science Quiz',
    'Reading Comprehension',
    'History Exam',
    'Career/Tech Assessment',
    'Grade 8 Math',
    'Grade 9 Science',
    'Grade 10 Reading'
  ];
  
  const getSubjectIcon = (subject: string) => {
    const icons: Record<string, { icon: string; color: string }> = {
      'Math': { icon: '📐', color: '#03B0E8' },
      'Science': { icon: '🔬', color: '#9266E5' },
      'Reading': { icon: '📖', color: '#EB8900' },
      'History': { icon: '🏛️', color: '#E54742' },
      'Career/Tech': { icon: '💼', color: '#FFC107' },
      'Other': { icon: '📄', color: '#9E9E9E' }
    };
    return icons[subject] || icons['Other'];
  };
  
  const extendedAssessments = [
    ...assessments,
    { id: '19', title: 'Career/Tech Assessment', subject: 'Career/Tech', grade: 'Grade 9', batteryGroup: 'Battery Group 4', progress: 20, total: 32, dueDate: '01-July-2025', status: 'in-progress' as const, color: '#7E78B8' },
    { id: '20', title: 'History Assessment', subject: 'History', grade: 'Grade 10', batteryGroup: 'Battery Group 1', progress: 26, total: 32, dueDate: '01-July-2025', status: 'in-progress' as const, color: '#EC5E74' },
    { id: '21', title: 'Other Assessment', subject: 'Other', grade: 'Grade 8', batteryGroup: 'Battery Group 3', progress: 20, total: 30, dueDate: '01-July-2025', status: 'assigned' as const, color: '#F2CC05' }
  ];
  
  const authors = ['Ryan Hobb', 'Jon Bruneti', 'Rebecca Oja', 'Sumin Chou'];
  
  return (
    <div className="bg-white min-h-screen">
      {/* Title and Tabs */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px]">
          <h1 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#333] pt-[16px] sm:pt-[20px] lg:pt-[24px] pb-[12px] sm:pb-[14px] lg:pb-[16px]">Assessments</h1>
          
          <div className="flex gap-[4px] sm:gap-[8px] overflow-x-auto pb-[2px]">
            <button 
              onClick={() => setActiveTab('your')}
              className={`px-[12px] sm:px-[16px] py-[8px] rounded-t-[4px] text-[12px] sm:text-[14px] whitespace-nowrap ${
                activeTab === 'your' 
                  ? 'bg-white text-[#333] border-t border-l border-r border-[#e0e0e0]' 
                  : 'bg-transparent text-[#666]'
              }`}
            >
              Your Assessments
            </button>
            <button 
              onClick={() => setActiveTab('assigned')}
              className={`px-[12px] sm:px-[16px] py-[8px] rounded-t-[4px] text-[12px] sm:text-[14px] whitespace-nowrap ${
                activeTab === 'assigned' 
                  ? 'bg-white text-[#333] border-t border-l border-r border-[#e0e0e0]' 
                  : 'bg-transparent text-[#666]'
              }`}
            >
              Assigned
            </button>
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-[12px] sm:px-[16px] py-[8px] rounded-t-[4px] text-[12px] sm:text-[14px] whitespace-nowrap ${
                activeTab === 'all' 
                  ? 'bg-[#343A6F] text-white' 
                  : 'bg-transparent text-[#666]'
              }`}
            >
              All Assessments
            </button>
            <button 
              onClick={() => setActiveTab('favorited')}
              className={`px-[12px] sm:px-[16px] py-[8px] rounded-t-[4px] text-[12px] sm:text-[14px] whitespace-nowrap ${
                activeTab === 'favorited' 
                  ? 'bg-white text-[#333] border-t border-l border-r border-[#e0e0e0]' 
                  : 'bg-transparent text-[#666]'
              }`}
            >
              Favorited
            </button>
          </div>
        </div>
      </div>
      
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[24px] lg:py-[32px]">
        {/* Search and Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[12px] sm:gap-[16px] mb-[16px] sm:mb-[20px] lg:mb-[24px]">
          <DynamicSearchInput 
            placeholder="Search"
            suggestions={searchSuggestions}
            className="w-full sm:w-[300px] lg:w-[400px]"
          />
          
          <div className="flex gap-[8px] sm:gap-[12px] flex-wrap sm:flex-nowrap">
            <select className="flex-1 sm:flex-none px-[12px] py-[8px] border border-[#e0e0e0] rounded-[4px] text-[13px] sm:text-[14px] bg-[#ebebeb]">
              <option>Sort by: Most Recent</option>
              <option>Sort by: Alphabetical</option>
              <option>Sort by: Date Created</option>
            </select>
            <select className="flex-1 sm:flex-none px-[12px] py-[8px] border border-[#e0e0e0] rounded-[4px] text-[13px] sm:text-[14px] bg-[#ebebeb]">
              <option>Items: 12</option>
              <option>Items: 24</option>
              <option>Items: 48</option>
            </select>
            <div className="flex border border-[#e0e0e0] rounded-[4px] overflow-hidden">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-[10px] sm:px-[12px] py-[8px] ${viewMode === 'grid' ? 'bg-[#e0e0e0]' : 'bg-white'}`}
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <rect x="2" y="2" width="5" height="5" fill="#333" />
                  <rect x="9" y="2" width="5" height="5" fill="#333" />
                  <rect x="2" y="9" width="5" height="5" fill="#333" />
                  <rect x="9" y="9" width="5" height="5" fill="#333" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`px-[10px] sm:px-[12px] py-[8px] border-l border-[#e0e0e0] ${viewMode === 'list' ? 'bg-[#e0e0e0]' : 'bg-white'}`}
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <rect x="2" y="3" width="12" height="2" fill="#333" />
                  <rect x="2" y="7" width="12" height="2" fill="#333" />
                  <rect x="2" y="11" width="12" height="2" fill="#333" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {extendedAssessments.map((assessment, index) => (
              <div key={assessment.id} className="w-full h-[244px]">
                <AssessmentCard
                  title={assessment.title}
                  subject={assessment.subject}
                  grade={assessment.grade}
                  batteryGroup={assessment.batteryGroup}
                  progress={assessment.progress}
                  total={assessment.total}
                  dueDate={assessment.dueDate}
                  subjectColor={assessment.color}
                />
              </div>
            ))}
          </div>
        )}
        
        {/* List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-[8px] border border-[#e0e0e0] overflow-hidden">
            {/* Desktop Table Header - Hidden on mobile */}
            <div className="hidden lg:block bg-[#F5F5F5] border-b border-[#e0e0e0]">
              <div className="flex items-center px-[24px] py-[12px]">
                <div className="w-[360px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#333]">
                  <div className="flex items-center gap-[4px]">
                    Class Name
                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                      <path d={svgPaths.p11e1bfc0} fill="#8A8A8A" />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-[24px] items-center flex-1">
                  <div className="min-w-[180px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#333]">
                    <div className="flex items-center gap-[4px]">
                      Student Progress
                      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p11e1bfc0} fill="#8A8A8A" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[112px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#333]">
                    <div className="flex items-center gap-[4px]">
                      Course(s)
                      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p11e1bfc0} fill="#8A8A8A" />
                      </svg>
                    </div>
                  </div>
                  <div className="min-w-[160px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#333]">
                    <div className="flex items-center gap-[4px]">
                      Battery
                      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p11e1bfc0} fill="#8A8A8A" />
                      </svg>
                    </div>
                  </div>
                  <div className="min-w-[140px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#333]">
                    <div className="flex items-center gap-[4px]">
                      Due Date
                      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p11e1bfc0} fill="#8A8A8A" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[120px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#333]">
                    <div className="flex items-center gap-[4px]">
                      Author
                      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p11e1bfc0} fill="#8A8A8A" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pr-[24px] w-[240px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#333]">
                  Controls
                </div>
              </div>
            </div>
            <div>
              {extendedAssessments.map((assessment, index) => (
                <AssessmentCardNew 
                  key={assessment.id} 
                  assessment={assessment} 
                  viewMode="list"
                  author={authors[index % authors.length]}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}