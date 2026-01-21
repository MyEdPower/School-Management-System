import { useState } from 'react';
import { AutocompleteSelect } from './AutocompleteSelect';
import { MultiSelectAutocomplete } from './MultiSelectAutocomplete';
import { SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

export interface HorizontalFilterRowData {
  subject: string;
  course: string | string[];
  assessment: string;
  school: string | string[];
  classSection: string | string[];
  student: string | string[];
}

export interface HorizontalFilterRowOptions {
  subjects: string[];
  courses: string[];
  assessments: string[];
  schools: string[];
  classSections: string[];
  students: string[];
}

interface HorizontalFilterRowProps {
  initialValues: HorizontalFilterRowData;
  options: HorizontalFilterRowOptions;
  onFilterChange?: (filters: HorizontalFilterRowData) => void;
  onRunReport?: (filters: HorizontalFilterRowData) => void;
  disableStudentFilter?: boolean;
}

export function HorizontalFilterRow({
  initialValues,
  options,
  onFilterChange,
  onRunReport,
  disableStudentFilter = false,
}: HorizontalFilterRowProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<HorizontalFilterRowData>(initialValues);

  const updateFilter = (key: keyof HorizontalFilterRowData, value: string | string[]) => {
    let newFilters = { ...filters, [key]: value };
    
    // If subject changes, reset dependent fields to first available option
    if (key === 'subject') {
      // Parent component will handle updating options, so we'll set to empty/default
      // Parent will provide new options and we'll pick first one
      newFilters = {
        ...newFilters,
        course: '',
        assessment: '',
        classSection: '',
      };
    }
    
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleRunReport = () => {
    onRunReport?.(filters);
  };

  // Helper function to get display value for a filter
  const getDisplayValue = (value: string | string[]): string => {
    if (Array.isArray(value)) {
      if (value.length === 0) return 'None selected';
      if (value.length === 1) return value[0];
      return `${value.length} selected`;
    }
    return value;
  };

  // Helper function to render breadcrumb items
  const renderBreadcrumbItems = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <span 
          key={index} 
          className="px-[12px] py-[4px] bg-white rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif] border border-[#E0E0E0]"
        >
          {item}
        </span>
      ));
    }
    return (
      <span className="px-[12px] py-[4px] bg-white rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif] border border-[#E0E0E0]">
        {value}
      </span>
    );
  };

  return (
    <div className="bg-white border border-[#d4d4d4] mb-[24px] rounded-[8px] shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Collapsed View */}
      {!filtersOpen && (
        <div 
          className="p-[20px] cursor-pointer group"
          onClick={() => setFiltersOpen(true)}
        >
          <div className="flex items-center justify-between gap-[16px]">
            <div className="flex items-center gap-[12px] flex-1">
              <div className="flex items-center justify-center size-[36px] rounded-[8px] bg-[#F5F5F7] group-hover:bg-[#EAEAED] transition-colors">
                <SlidersHorizontal className="size-[18px] text-[#343A6F]" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212] mb-[6px]">
                  Report Filters
                </h2>
                <div className="flex flex-wrap items-center gap-[8px]">
                  <span className="px-[12px] py-[4px] bg-[#F5F5F7] rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif]">
                    {filters.subject}
                  </span>
                  <span className="px-[12px] py-[4px] bg-[#F5F5F7] rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif]">
                    {getDisplayValue(filters.course)}
                  </span>
                  <span className="px-[12px] py-[4px] bg-[#F5F5F7] rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif]">
                    {filters.assessment}
                  </span>
                  <span className="px-[12px] py-[4px] bg-[#F5F5F7] rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif]">
                    {getDisplayValue(filters.school)}
                  </span>
                  <span className="px-[12px] py-[4px] bg-[#F5F5F7] rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif]">
                    {getDisplayValue(filters.classSection)}
                  </span>
                  {!disableStudentFilter && (
                    <span className="px-[12px] py-[4px] bg-[#F5F5F7] rounded-[6px] text-[14px] leading-[20px] text-[#343A6F] font-['Rubik:Medium',sans-serif]">
                      {getDisplayValue(filters.student)}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center size-[32px] rounded-[6px] bg-[#F5F5F7] group-hover:bg-[#EAEAED] transition-colors">
              <ChevronDown className="size-[20px] text-[#707070]" strokeWidth={2} />
            </div>
          </div>
        </div>
      )}

      {/* Expanded View */}
      {filtersOpen && (
        <div className="p-[24px] bg-[#FAFAFA]">
          <div className="flex items-center justify-between mb-[20px]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center size-[36px] rounded-[8px] bg-white">
                <SlidersHorizontal className="size-[18px] text-[#343A6F]" strokeWidth={2} />
              </div>
              <h2 className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                Filter by:
              </h2>
            </div>
            <button 
              onClick={() => setFiltersOpen(false)}
              className="flex items-center justify-center size-[32px] rounded-[6px] bg-white hover:bg-[#F5F5F7] transition-colors"
            >
              <ChevronUp className="size-[20px] text-[#707070]" strokeWidth={2} />
            </button>
          </div>

          {/* Filter breadcrumb */}
          <div className="flex flex-wrap items-center gap-[8px] mb-[24px] pb-[20px] border-b border-[#E0E0E0]">
            {renderBreadcrumbItems(filters.subject)}
            {renderBreadcrumbItems(filters.course)}
            {renderBreadcrumbItems(filters.assessment)}
            {renderBreadcrumbItems(filters.school)}
            {renderBreadcrumbItems(filters.classSection)}
            {!disableStudentFilter ? (
              renderBreadcrumbItems(filters.student)
            ) : (
              <span className="px-[12px] py-[4px] rounded-[6px] text-[14px] leading-[20px] font-['Rubik:Medium',sans-serif] border bg-[#F5F5F5] text-[#BDBDBD] border-[#D4D4D4]">
                {getDisplayValue(filters.student)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[32px]">
            {/* Subject */}
            <AutocompleteSelect
              label="Subject"
              value={filters.subject}
              options={options.subjects}
              onChange={(value) => updateFilter('subject', value)}
            />

            {/* Course */}
            <MultiSelectAutocomplete
              label="Course"
              values={Array.isArray(filters.course) ? filters.course : [filters.course]}
              options={options.courses}
              onChange={(value) => updateFilter('course', value)}
            />

            {/* Assessment */}
            <AutocompleteSelect
              label="Assessment"
              value={filters.assessment}
              options={options.assessments}
              onChange={(value) => updateFilter('assessment', value)}
            />

            {/* School */}
            <MultiSelectAutocomplete
              label="School"
              values={Array.isArray(filters.school) ? filters.school : [filters.school]}
              options={options.schools}
              onChange={(value) => updateFilter('school', value)}
            />

            {/* Class/Section */}
            <MultiSelectAutocomplete
              label="Class/Section"
              values={Array.isArray(filters.classSection) ? filters.classSection : [filters.classSection]}
              options={options.classSections}
              onChange={(value) => updateFilter('classSection', value)}
            />

            {/* Student */}
            <MultiSelectAutocomplete
              label="Student"
              values={Array.isArray(filters.student) ? filters.student : [filters.student]}
              options={options.students}
              onChange={(value) => updateFilter('student', value)}
              disabled={disableStudentFilter}
            />
          </div>

          {/* Run Report Button */}
          <div>
            <button 
              onClick={handleRunReport}
              className="px-[24px] py-[10px] bg-[#343A6F] text-white rounded-[100px] text-[16px] leading-[24px] font-['Rubik:Medium',sans-serif] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors"
            >
              Run Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}