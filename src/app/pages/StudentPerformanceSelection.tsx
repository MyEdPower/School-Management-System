import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Download, Printer, Check } from 'lucide-react';
import { HorizontalFilterRow, HorizontalFilterRowData, HorizontalFilterRowOptions } from '../components/HorizontalFilterRow';
import { ExportModal } from '../components/ExportModal';
import { PrintModal } from '../components/PrintModal';
import { StickyReportHeader } from '../components/StickyReportHeader';

interface Student {
  id: string;
  name: string;
  studentId: string;
  status: 'excellent' | 'good' | 'needs-improvement' | 'poor';
  statusLabel: string;
  assessmentDate: string;
  score: number;
}

export function StudentPerformanceSelection() {
  const [selectedStudents, setSelectedStudents] = useState<Set<string>>(new Set());
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showQueueNotification, setShowQueueNotification] = useState(false);
  const [isSelectAllMode, setIsSelectAllMode] = useState(false); // Track if "Select All" was used
  const [visibleCount, setVisibleCount] = useState(5);
  const [currentFilters, setCurrentFilters] = useState<HorizontalFilterRowData>({
    subject: 'Math',
    course: 'Math 8',
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: 'All Schools',
    classSection: 'All Classes',
    student: 'All Students',
  });

  // Dynamic filter options based on subject
  const [filterOptions, setFilterOptions] = useState<HorizontalFilterRowOptions>({
    subjects: ['Math', 'Reading', 'History', 'Social Studies', 'Technology', 'Art'],
    courses: ['Math 8', 'Math 7', 'Math 6', 'Algebra 1', 'Geometry'],
    assessments: [
      'Edify Math 8 Interim Assessment 1',
      'Edify Math 8 Interim Assessment 2',
      'Edify Math 8 Interim Assessment 3',
      'Math 8 Final Exam',
    ],
    schools: ['All Schools', 'Elementary 1', 'Elementary 2', 'Elementary 3', 'Elementary 4', 'Middle School 1'],
    classSections: ['All Classes', 'Brush, Julius, Period 2', 'Gartner, Scott, Period 1', 'Kettner, Hunter, Period 6', 'Kumar, Shabana, Period 1', 'Marsh, Michaele, Period 1'],
    students: ['All Students', 'Boatneg, Glory', 'Cage, Carey', 'Gash, Penny', 'Fischer, Gilbert', 'Griffin, Jean'],
  });

  // Master data for cascading dropdowns
  const masterData = {
    Math: {
      courses: ['Math 8', 'Math 7', 'Math 6', 'Algebra 1', 'Geometry'],
      assessments: [
        'Edify Math 8 Interim Assessment 1',
        'Edify Math 8 Interim Assessment 2',
        'Edify Math 8 Interim Assessment 3',
        'Math 8 Final Exam',
      ],
      classSections: ['All Classes', 'Brush, Julius, Period 2', 'Gartner, Scott, Period 1', 'Kettner, Hunter, Period 6', 'Kumar, Shabana, Period 1', 'Marsh, Michaele, Period 1'],
    },
    Reading: {
      courses: ['Reading 8', 'Reading 7', 'Reading 6', 'English Literature', 'Advanced Reading'],
      assessments: [
        'Reading Comprehension Test 1',
        'Reading Comprehension Test 2',
        'Literacy Assessment',
        'Reading Final Exam',
      ],
      classSections: ['All Classes', 'Anderson, Sarah, Period 3', 'Baker, Tom, Period 4', 'Collins, Marie, Period 5'],
    },
    History: {
      courses: ['US History', 'World History', 'American Government', 'Ancient Civilizations'],
      assessments: [
        'History Midterm',
        'History Final Exam',
        'Civil War Assessment',
        'World War II Test',
      ],
      classSections: ['All Classes', 'Davis, John, Period 1', 'Evans, Lisa, Period 2', 'Foster, Mark, Period 6'],
    },
    'Social Studies': {
      courses: ['Social Studies 8', 'Social Studies 7', 'Geography', 'Civics'],
      assessments: [
        'Social Studies Interim 1',
        'Social Studies Interim 2',
        'Geography Test',
        'Civics Final',
      ],
      classSections: ['All Classes', 'Green, Patricia, Period 3', 'Harris, Robert, Period 4'],
    },
    Technology: {
      courses: ['Computer Science 1', 'Web Development', 'Digital Literacy', 'Coding Basics'],
      assessments: [
        'Programming Test 1',
        'Web Development Project',
        'Technology Skills Assessment',
        'Final Project',
      ],
      classSections: ['All Classes', 'Johnson, Michael, Period 2', 'Lee, Jennifer, Period 5'],
    },
    Art: {
      courses: ['Art 8', 'Art 7', 'Drawing', 'Painting', 'Sculpture'],
      assessments: [
        'Art Portfolio Review 1',
        'Art Portfolio Review 2',
        'Drawing Skills Test',
        'Final Art Project',
      ],
      classSections: ['All Classes', 'Martinez, Carlos, Period 1', 'Nelson, Amy, Period 3'],
    },
  };

  // Horizontal Filter Row configuration
  const filterInitialValues: HorizontalFilterRowData = {
    subject: 'Math',
    course: 'Math 8',
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: 'All Schools',
    classSection: 'All Classes',
    student: 'All Students',
  };

  // Handle filter changes with cascading logic
  const handleFilterChange = (filters: HorizontalFilterRowData) => {
    // Check if subject changed
    const subjectChanged = filters.subject !== currentFilters.subject;
    
    if (subjectChanged && filters.subject && masterData[filters.subject as keyof typeof masterData]) {
      const subjectData = masterData[filters.subject as keyof typeof masterData];
      
      // Update options for cascading dropdowns
      setFilterOptions({
        ...filterOptions,
        courses: subjectData.courses,
        assessments: subjectData.assessments,
        classSections: subjectData.classSections,
      });
      
      // Update current filters with first available option from new subject
      setCurrentFilters({
        ...filters,
        course: subjectData.courses[0] || '',
        assessment: subjectData.assessments[0] || '',
        classSection: subjectData.classSections[0] || '',
      });
    } else {
      setCurrentFilters(filters);
    }
  };

  // Mock student data
  const allStudents: Student[] = [
    {
      id: '1',
      name: 'Boatneg, Glory',
      studentId: 'STU-2024-001',
      status: 'excellent',
      statusLabel: '90-100%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 95
    },
    {
      id: '2',
      name: 'Cook, Jeremy',
      studentId: 'STU-2024-024',
      status: 'needs-improvement',
      statusLabel: '40-59%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 41
    },
    {
      id: '3',
      name: 'Decker, Jenna',
      studentId: 'STU-2024-036',
      status: 'good',
      statusLabel: '80-89%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 81
    },
    {
      id: '4',
      name: 'Fitz, Adam',
      studentId: 'STU-2024-010',
      status: 'poor',
      statusLabel: '<40%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 39
    },
    {
      id: '5',
      name: 'Graham, Reilly',
      studentId: 'STU-2024-025',
      status: 'excellent',
      statusLabel: '90-100%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 62
    },
    {
      id: '6',
      name: 'Harrison, Emily',
      studentId: 'STU-2024-042',
      status: 'good',
      statusLabel: '80-89%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 85
    },
    {
      id: '7',
      name: 'Johnson, Michael',
      studentId: 'STU-2024-055',
      status: 'excellent',
      statusLabel: '90-100%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 92
    },
    {
      id: '8',
      name: 'Lee, Sarah',
      studentId: 'STU-2024-067',
      status: 'needs-improvement',
      statusLabel: '40-59%',
      assessmentDate: '9:08am 07-Feb-2025',
      score: 55
    }
  ];

  const visibleStudents = allStudents.slice(0, visibleCount);
  const hasMore = visibleCount < allStudents.length;

  const handleSelectAll = () => {
    if (selectedStudents.size === allStudents.length) {
      setSelectedStudents(new Set());
      setIsSelectAllMode(false);
    } else {
      setSelectedStudents(new Set(allStudents.map(s => s.id)));
      setIsSelectAllMode(true);
    }
  };

  const handleSelectAllOnPage = () => {
    if (selectedStudents.size === visibleStudents.length) {
      setSelectedStudents(new Set());
      setIsSelectAllMode(false);
    } else {
      setSelectedStudents(new Set(visibleStudents.map(s => s.id)));
      setIsSelectAllMode(false);
    }
  };

  const handleStudentToggle = (studentId: string) => {
    const newSelected = new Set(selectedStudents);
    if (newSelected.has(studentId)) {
      newSelected.delete(studentId);
    } else {
      newSelected.add(studentId);
    }
    setSelectedStudents(newSelected);
    setIsSelectAllMode(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-[#1565C0] text-white'; // Blue for 90-100%
      case 'good':
        return 'bg-[#388E3C] text-white'; // Green for 80-89%
      case 'needs-improvement':
        return 'bg-[#F64C13] text-white'; // Orange for 40-59%
      case 'poor':
        return 'bg-[#B40B08] text-white'; // Dark red for <40%
      default:
        return 'bg-[#707070] text-white';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Report Header */}
      <StickyReportHeader
        pageTitle="Select Students - Student Performance by Standard"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reports', href: '/reports' },
          { label: 'Select Students - Student Performance by Standard' },
        ]}
        filterInitialValues={filterInitialValues}
        filterOptions={filterOptions}
        onFilterChange={handleFilterChange}
        onRunReport={(filters) => {
          console.log('Run report with filters:', filters);
        }}
      />

      {/* Content */}
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">

        {/* Assessment Header */}
        <div className="bg-white rounded-[8px] p-[16px] sm:p-[24px] mb-[24px] border border-[#e0e0e0]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
            <div>
              <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] leading-[32px] text-[#121212] mb-[4px]">
                {currentFilters.subject === 'Math' ? 'Mathematics' : currentFilters.subject} Assessment
              </h2>
              <p className="text-[16px] leading-[24px] text-[#707070]">{currentFilters.assessment}</p>
            </div>
            <div className="flex gap-[12px] flex-wrap">
              {/* Export Button */}
              <button
                className="px-[20px] py-[8px] border border-[#d4d4d4] rounded-[100px] text-[14px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#121212]"
                onClick={() => setShowExportModal(true)}
                disabled={selectedStudents.size === 0}
              >
                <Download className="size-[16px]" strokeWidth={2} />
                <span>Export</span>
              </button>

              {/* Print Button */}
              <button
                className="px-[20px] py-[8px] border border-[#d4d4d4] rounded-[100px] text-[14px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#121212]"
                onClick={() => {
                  // If "Select All" was used (more than visible students), skip modal and show queue notification
                  if (isSelectAllMode) {
                    setShowQueueNotification(true);
                  } else {
                    setShowPrintModal(true);
                  }
                }}
                disabled={selectedStudents.size === 0}
              >
                <Printer className="size-[16px]" strokeWidth={2} />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Performance Legend */}
        <div className="bg-white rounded-[8px] p-[16px] sm:p-[24px] mb-[24px] border border-[#e0e0e0]">
          <div className="flex flex-wrap items-center justify-between gap-[12px]">
            {[
              { label: '90-100%', sublabel: 'Advanced', color: '#1565C0' },
              { label: '80-89%', sublabel: 'Proficient', color: '#388E3C' },
              { label: '60-79%', sublabel: 'Developing', color: '#5F1980' },
              { label: '40-59%', sublabel: 'Emerging', color: '#F64C13' },
              { label: 'Below 40%', sublabel: '', color: '#B40B08' },
            ].map((item) => (
              <div 
                key={item.label} 
                className="flex items-center gap-[10px] bg-white border border-[#e0e0e0] rounded-[8px] px-[16px] sm:px-[20px] py-[8px]"
              >
                <div 
                  className="size-[18px] rounded-full shrink-0" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex items-center gap-[8px]">
                  <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212]">{item.label}</span>
                  {item.sublabel && (
                    <span className="text-[14px] text-[#707070]">{item.sublabel}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table Container with Header */}
        <div className="bg-white rounded-[8px] border border-[#e0e0e0] overflow-hidden">
          {/* Results Header */}
          <div className="bg-[#343A6F] px-[16px] sm:px-[24px] py-[16px]">
            <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] sm:text-[20px] text-white">
              Student Selection
            </h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {/* Table Header */}
            <div className="min-w-[900px] border-b border-[#F7F7F7] pb-[16px] pt-[32px] px-[8px] mb-[8px]">
              <div className="grid grid-cols-[minmax(240px,2fr)_minmax(140px,1.2fr)_minmax(110px,1fr)_minmax(160px,1.5fr)_minmax(80px,0.8fr)_minmax(120px,1.2fr)] gap-[16px] items-center">
                <div className="flex items-center gap-[4px]">
                  <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                    Name
                  </span>
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16" aria-label="Sort">
                    <g>
                      <path
                        d="M4 10.667L6 12.667L8 10.667"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 12V4"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5.333L10 3.333L8 5.333"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4V12"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex items-center gap-[4px]">
                  <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                    Student ID
                  </span>
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16" aria-label="Sort">
                    <g>
                      <path
                        d="M4 10.667L6 12.667L8 10.667"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 12V4"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5.333L10 3.333L8 5.333"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4V12"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex items-center gap-[4px]">
                  <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                    Status
                  </span>
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16" aria-label="Sort">
                    <g>
                      <path
                        d="M4 10.667L6 12.667L8 10.667"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 12V4"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5.333L10 3.333L8 5.333"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4V12"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex items-center gap-[4px]">
                  <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                    Assessment Date
                  </span>
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16" aria-label="Sort">
                    <g>
                      <path
                        d="M4 10.667L6 12.667L8 10.667"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 12V4"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5.333L10 3.333L8 5.333"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4V12"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex items-center gap-[4px] justify-center">
                  <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                    Score
                  </span>
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16" aria-label="Sort">
                    <g>
                      <path
                        d="M4 10.667L6 12.667L8 10.667"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 12V4"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5.333L10 3.333L8 5.333"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4V12"
                        stroke="#707070"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-center">
                  <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                    Actions
                  </span>
                </div>
              </div>
            </div>

            {/* Select All Row */}
            <div className="min-w-[900px] py-[16px] px-[8px] border-b border-[#F7F7F7]">
              <div className="grid grid-cols-[minmax(240px,2fr)_minmax(140px,1.2fr)_minmax(110px,1fr)_minmax(160px,1.5fr)_minmax(80px,0.8fr)_minmax(120px,1.2fr)] gap-[16px] items-center">
                <div className="flex items-center gap-[8px]">
                  <button
                    onClick={handleSelectAll}
                    className="size-[16px] border-2 border-[#D4D4D4] rounded-[2px] flex items-center justify-center bg-white hover:border-[#343A6F] transition-colors"
                    aria-label="Select all students"
                    aria-pressed={isSelectAllMode && selectedStudents.size === allStudents.length}
                  >
                    {isSelectAllMode && selectedStudents.size === allStudents.length && (
                      <Check className="size-[12px] text-[#343A6F]" strokeWidth={3} />
                    )}
                  </button>
                  <span className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                    Select All
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <button
                    onClick={handleSelectAllOnPage}
                    className="size-[16px] border-2 border-[#D4D4D4] rounded-[2px] flex items-center justify-center bg-white hover:border-[#343A6F] transition-colors"
                    aria-label="Select all students on page"
                    aria-pressed={!isSelectAllMode && selectedStudents.size === visibleStudents.length && visibleStudents.length > 0}
                  >
                    {!isSelectAllMode && selectedStudents.size === visibleStudents.length && visibleStudents.length > 0 && (
                      <Check className="size-[12px] text-[#343A6F]" strokeWidth={3} />
                    )}
                  </button>
                  <span className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                    Select All on Page
                  </span>
                </div>
              </div>
            </div>

            {/* Student Rows */}
            {visibleStudents.map((student) => (
              <div
                key={student.id}
                className="min-w-[900px] py-[16px] px-[8px] border-b border-[#F7F7F7] hover:bg-[#F9F9F9] transition-colors"
              >
                <div className="grid grid-cols-[minmax(240px,2fr)_minmax(140px,1.2fr)_minmax(110px,1fr)_minmax(160px,1.5fr)_minmax(80px,0.8fr)_minmax(120px,1.2fr)] gap-[16px] items-center">
                  <div className="flex items-center gap-[8px]">
                    <button
                      onClick={() => handleStudentToggle(student.id)}
                      className="size-[16px] border-2 border-[#D4D4D4] rounded-[2px] flex items-center justify-center bg-white hover:border-[#343A6F] transition-colors shrink-0"
                      aria-label={`Select ${student.name}`}
                      aria-pressed={selectedStudents.has(student.id)}
                    >
                      {selectedStudents.has(student.id) && (
                        <Check className="size-[12px] text-[#343A6F]" strokeWidth={3} />
                      )}
                    </button>
                    <span className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                      {student.name}
                    </span>
                  </div>
                  <div>
                    <span className="font-['Rubik:Regular',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                      {student.studentId}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center justify-center w-[100px] h-[28px] rounded-[8px] font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] ${getStatusColor(
                        student.status
                      )}`}
                    >
                      {student.statusLabel}
                    </span>
                  </div>
                  <div>
                    <span className="font-['Rubik:Regular',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                      {student.assessmentDate}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-['Rubik:Regular',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                      {student.score}
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      to="/reports/student-performance"
                      className="inline-flex items-center justify-center px-[16px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] active:bg-[#343A6F] active:text-white transition-colors font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#121212]"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-[32px]">
              <button
                onClick={() => setVisibleCount(prev => Math.min(prev + 5, allStudents.length))}
                className="px-[24px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] active:bg-[#343A6F] active:text-white transition-colors font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#121212]"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <ExportModal
          onClose={() => setShowExportModal(false)}
          onExport={(format) => {
            console.log('Exporting as:', format);
            setShowExportModal(false);
          }}
        />
      )}

      {/* Print Modal */}
      {showPrintModal && (
        <PrintModal
          onClose={() => setShowPrintModal(false)}
          selectedCount={selectedStudents.size}
          onPrint={(options) => {
            console.log('Printing with options:', options);
            // Simulate large batch detection - if more than 10 students selected, show queue notification
            if (selectedStudents.size > 10) {
              setShowPrintModal(false);
              setShowQueueNotification(true);
            } else {
              setShowPrintModal(false);
            }
          }}
        />
      )}

      {/* Report Queue Notification */}
      {showQueueNotification && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[16px]" onClick={() => setShowQueueNotification(false)}>
          <div className="bg-white rounded-[8px] p-[32px] max-w-[500px] w-full shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start gap-[16px] mb-[24px]">
              <div className="size-[48px] bg-[#E3F2FD] rounded-full flex items-center justify-center shrink-0">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="#1565C0" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] leading-[32px] text-[#121212] mb-[8px]">
                  Report Exceeds Size Limit
                </h3>
                <p className="font-['Rubik:Regular',sans-serif] text-[16px] leading-[24px] text-[#707070] mb-[16px]">
                  Your report request has been added to the queue. You can access it from the Report Queue once processing is complete.
                </p>
                <p className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[20px] text-[#707070]">
                  Typical processing time: 5-15 minutes
                </p>
              </div>
            </div>
            <div className="flex gap-[12px] justify-end">
              <button
                onClick={() => setShowQueueNotification(false)}
                className="px-[20px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#F7F7F7] transition-colors font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]"
              >
                Close
              </button>
              <Link
                to="/reports/queue"
                className="px-[20px] py-[8px] bg-[#343A6F] rounded-[100px] hover:bg-[#4A5186] active:bg-[#2A3055] transition-colors font-['Rubik:Medium',sans-serif] text-[14px] text-white"
              >
                Go to Report Queue
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}