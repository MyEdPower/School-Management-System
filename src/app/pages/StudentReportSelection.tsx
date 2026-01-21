import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Download, Printer, ChevronDown, ChevronUp, ArrowUpDown } from 'lucide-react';
import { HorizontalFilterRow, HorizontalFilterRowData, HorizontalFilterRowOptions } from '../components/HorizontalFilterRow';
import { ExportModal } from '../components/ExportModal';
import { PrintModal } from '../components/PrintModal';
import { StickyReportHeader } from '../components/StickyReportHeader';

type SortDirection = 'asc' | 'desc' | null;
type SortColumn = 'name' | 'studentId' | 'classSection' | 'teacher' | 'dateTested' | 'score' | 'performanceLevel';

interface Student {
  id: string;
  name: string;
  studentId: string;
  classSection: string;
  teacher: string;
  assessment: string;
  dateTested: string;
  score: number;
  performanceLevel: string;
}

export function StudentReportSelection() {
  const navigate = useNavigate();
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showQueueNotification, setShowQueueNotification] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState<Set<string>>(new Set());
  const [isSelectAllMode, setIsSelectAllMode] = useState(false);
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<HorizontalFilterRowData>({
    subject: 'Math',
    course: ['Math 8'],
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: ['Middle School 1'],
    classSection: ['Kumar, Shabana Period 1'],
    student: ['All Students'],
  });

  // Horizontal Filter Row configuration
  const filterInitialValues: HorizontalFilterRowData = {
    subject: 'Math',
    course: ['Math 8'],
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: ['Middle School 1'],
    classSection: ['Kumar, Shabana Period 1'],
    student: ['All Students'],
  };

  const filterOptions: HorizontalFilterRowOptions = {
    subjects: ['Math', 'Reading', 'History', 'Social Studies', 'Technology', 'Art', 'Option'],
    courses: ['All Courses', 'Math 8', 'Math 1', 'Math 2', 'Math 3', 'Math 4', 'Math 5'],
    assessments: [
      'All Assessments',
      'Edify Math 8 Interim Assessment 1',
      'Edify Math 8 Interim Assessment 2',
      'Edify Math 8 Interim Assessment 3',
      'Edify 6 Interim 1',
      'Edify 6 Interim 2',
      'Edify 6 Interim 3'
    ],
    schools: ['All Schools', 'Elementary 1', 'Elementary 2', 'Elementary 3', 'Elementary 4', 'Middle School 1'],
    classSections: ['All Classes', 'Brush, Julius, Period 2', 'Gartner, Scott, Period 1', 'Kettner, Hunter, Period 6', 'Kumar, Shabana Period 1', 'Marsh, Michaele Period 1'],
    students: ['All Students', 'Boateng, Glory', 'Cage, Carey', 'Gash, Penny', 'Fischer, Gilbert', 'Griffin, Jean'],
  };

  // Mock student data
  const studentsData: Student[] = [
    {
      id: '1',
      name: 'Boateng, Glory',
      studentId: 'STU-2024-001',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 85,
      performanceLevel: 'Proficient'
    },
    {
      id: '2',
      name: 'Cage, Carey',
      studentId: 'STU-2024-002',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 92,
      performanceLevel: 'Advanced'
    },
    {
      id: '3',
      name: 'Gash, Penny',
      studentId: 'STU-2024-003',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 78,
      performanceLevel: 'Developing'
    },
    {
      id: '4',
      name: 'Fischer, Gilbert',
      studentId: 'STU-2024-004',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 95,
      performanceLevel: 'Advanced'
    },
    {
      id: '5',
      name: 'Griffin, Jean',
      studentId: 'STU-2024-005',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 68,
      performanceLevel: 'Developing'
    },
    {
      id: '6',
      name: 'Anderson, Blake',
      studentId: 'STU-2024-006',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 88,
      performanceLevel: 'Proficient'
    },
    {
      id: '7',
      name: 'Brown, Casey',
      studentId: 'STU-2024-007',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 45,
      performanceLevel: 'Emerging'
    },
    {
      id: '8',
      name: 'Davis, Morgan',
      studentId: 'STU-2024-008',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 72,
      performanceLevel: 'Developing'
    },
    {
      id: '9',
      name: 'Evans, Taylor',
      studentId: 'STU-2024-009',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 98,
      performanceLevel: 'Advanced'
    },
    {
      id: '10',
      name: 'Foster, Jordan',
      studentId: 'STU-2024-010',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 35,
      performanceLevel: 'Below 40%'
    },
    {
      id: '11',
      name: 'Harrison, Alex',
      studentId: 'STU-2024-011',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 82,
      performanceLevel: 'Proficient'
    },
    {
      id: '12',
      name: 'Jackson, Riley',
      studentId: 'STU-2024-012',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 91,
      performanceLevel: 'Advanced'
    },
    {
      id: '13',
      name: 'Kennedy, Sam',
      studentId: 'STU-2024-013',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 65,
      performanceLevel: 'Developing'
    },
    {
      id: '14',
      name: 'Lee, Jordan',
      studentId: 'STU-2024-014',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 87,
      performanceLevel: 'Proficient'
    },
    {
      id: '15',
      name: 'Martinez, Casey',
      studentId: 'STU-2024-015',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 93,
      performanceLevel: 'Advanced'
    },
    {
      id: '16',
      name: 'Nelson, River',
      studentId: 'STU-2024-016',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 58,
      performanceLevel: 'Developing'
    },
    {
      id: '17',
      name: 'O\'Brien, Quinn',
      studentId: 'STU-2024-017',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 76,
      performanceLevel: 'Developing'
    },
    {
      id: '18',
      name: 'Parker, Avery',
      studentId: 'STU-2024-018',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 94,
      performanceLevel: 'Advanced'
    },
    {
      id: '19',
      name: 'Quinn, Dakota',
      studentId: 'STU-2024-019',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 42,
      performanceLevel: 'Emerging'
    },
    {
      id: '20',
      name: 'Roberts, Skyler',
      studentId: 'STU-2024-020',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 89,
      performanceLevel: 'Proficient'
    },
    {
      id: '21',
      name: 'Smith, Morgan',
      studentId: 'STU-2024-021',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 81,
      performanceLevel: 'Proficient'
    },
    {
      id: '22',
      name: 'Taylor, Reese',
      studentId: 'STU-2024-022',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 96,
      performanceLevel: 'Advanced'
    },
    {
      id: '23',
      name: 'Walker, Sage',
      studentId: 'STU-2024-023',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 70,
      performanceLevel: 'Developing'
    },
    {
      id: '24',
      name: 'Young, Charlie',
      studentId: 'STU-2024-024',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 86,
      performanceLevel: 'Proficient'
    },
    {
      id: '25',
      name: 'Zhang, Bailey',
      studentId: 'STU-2024-025',
      classSection: 'Kumar, Shabana Period 1',
      teacher: 'Kumar, Shabana',
      assessment: 'Edify Math 8 Interim Assessment 1',
      dateTested: '15-Mar-2024',
      score: 97,
      performanceLevel: 'Advanced'
    },
  ];

  // Sort students based on current sort column and direction
  const getSortedStudents = () => {
    if (!sortColumn || !sortDirection) return studentsData;

    const sorted = [...studentsData].sort((a, b) => {
      let aValue: string | number = a[sortColumn];
      let bValue: string | number = b[sortColumn];

      // Handle date sorting
      if (sortColumn === 'dateTested') {
        const parseDate = (dateStr: string) => {
          const [day, month, year] = dateStr.split('-');
          const monthMap: { [key: string]: number } = {
            'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
            'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
          };
          return new Date(parseInt(year), monthMap[month], parseInt(day)).getTime();
        };
        aValue = parseDate(a.dateTested);
        bValue = parseDate(b.dateTested);
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    return sorted;
  };

  const sortedStudents = getSortedStudents();

  // Handle sort column click
  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Get sort icon
  const getSortIcon = (column: SortColumn) => {
    if (sortColumn !== column) {
      return <ArrowUpDown className="size-[16px] text-[#707070]" />;
    }
    if (sortDirection === 'asc') {
      return <ChevronUp className="size-[16px] text-[#343A6F]" />;
    }
    return <ChevronDown className="size-[16px] text-[#343A6F]" />;
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedStudents.size === sortedStudents.length) {
      setSelectedStudents(new Set());
      setIsSelectAllMode(false);
    } else {
      setSelectedStudents(new Set(sortedStudents.map(s => s.id)));
      setIsSelectAllMode(true);
    }
  };

  // Handle select all on page checkbox
  const handleSelectAllOnPage = () => {
    const currentPageStudents = sortedStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);
    const currentPageIds = currentPageStudents.map(s => s.id);
    
    // Check if all students on current page are selected
    const allPageStudentsSelected = currentPageIds.every(id => selectedStudents.has(id));
    
    if (allPageStudentsSelected) {
      // Deselect all students on current page
      const newSelected = new Set(selectedStudents);
      currentPageIds.forEach(id => newSelected.delete(id));
      setSelectedStudents(newSelected);
    } else {
      // Select all students on current page
      const newSelected = new Set(selectedStudents);
      currentPageIds.forEach(id => newSelected.add(id));
      setSelectedStudents(newSelected);
    }
    setIsSelectAllMode(false);
  };

  // Check if all students on current page are selected
  const getCurrentPageStudents = () => {
    return sortedStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage);
  };

  const areAllPageStudentsSelected = () => {
    const currentPageStudents = getCurrentPageStudents();
    return currentPageStudents.length > 0 && currentPageStudents.every(s => selectedStudents.has(s.id));
  };

  // Handle individual student checkbox
  const handleStudentSelect = (studentId: string) => {
    const newSelected = new Set(selectedStudents);
    if (newSelected.has(studentId)) {
      newSelected.delete(studentId);
    } else {
      newSelected.add(studentId);
    }
    setSelectedStudents(newSelected);
  };

  // Handle view student report
  const handleViewReport = (studentId: string) => {
    navigate('/reports/student-performance');
  };

  // Get performance color
  const getPerformanceColor = (score: number) => {
    if (score >= 90) return '#1565C0';
    if (score >= 80) return '#388E3C';
    if (score >= 60) return '#5F1980';
    if (score >= 40) return '#F64C13';
    return '#B40B08';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Report Header */}
      <StickyReportHeader
        pageTitle="Student Performance on Standards"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reports', href: '/reports' },
          { label: 'Student Performance on Standards' },
        ]}
        filterInitialValues={filterInitialValues}
        filterOptions={filterOptions}
        onFilterChange={(filters) => {
          console.log('Filters changed:', filters);
          setSelectedFilters(filters);
        }}
        onRunReport={(filters) => {
          console.log('Run report with filters:', filters);
          setSelectedFilters(filters);
        }}
      />

      {/* Sticky Student Selection Header */}
      <div className="sticky top-[180px] z-30 bg-white border-b border-[#e0e0e0] shadow-sm">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[20px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
            <div className="flex-1">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[24px] text-[#121212] mb-[4px]">
                Student Selection
              </h2>
              <p className="text-[14px] text-[#707070] mb-[8px]">
                {selectedStudents.size} of {sortedStudents.length} students selected
              </p>
              <p className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[20px] text-[#707070] max-w-[800px]">
                Below is a list of students who have completed {selectedFilters.assessment}. To print Student Level Report(s) use the checkboxes below then click print. To view a report online, click student name.
              </p>
            </div>
            <div className="flex gap-[12px] flex-wrap">
              {/* Print Button */}
              <button
                className={`px-[24px] py-[10px] border rounded-[100px] text-[16px] transition-colors flex items-center gap-[8px] ${
                  selectedStudents.size > 0
                    ? 'border-[#343A6F] text-[#343A6F] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white'
                    : 'border-[#d4d4d4] text-[#BDBDBD] cursor-not-allowed'
                }`}
                onClick={() => {
                  if (selectedStudents.size > 0) {
                    // If "Select All" was used, skip modal and show queue notification
                    if (isSelectAllMode) {
                      setShowQueueNotification(true);
                    } else {
                      setShowPrintModal(true);
                    }
                  }
                }}
                disabled={selectedStudents.size === 0}
              >
                <Printer className="size-[20px]" strokeWidth={1.5} />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">
        {/* Sticky Table Header - Outside the table container */}
        <div className="sticky top-[280px] z-20 bg-[#f7f7f7] border border-[#e0e0e0] rounded-t-[8px] mb-[-1px]">
          {/* All Selection Row */}
          <div className="border-b border-[#e0e0e0] px-[16px] sm:px-[24px] py-[12px]">
            <div className="flex items-center gap-[24px]">
              {/* Select All Checkbox */}
              <div className="flex items-center gap-[8px]">
                <input
                  type="checkbox"
                  checked={isSelectAllMode && selectedStudents.size === sortedStudents.length && sortedStudents.length > 0}
                  onChange={handleSelectAll}
                  className="size-[16px] rounded-[4px] border-2 border-[#707070] text-[#343A6F] focus:ring-[#343A6F] cursor-pointer"
                  aria-label="Select all students"
                  style={{
                    accentColor: '#343A6F',
                    transform: 'scale(0.85)'
                  }}
                />
                <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">Select All</span>
              </div>

              {/* Select All on Page Checkbox */}
              <div className="flex items-center gap-[8px]">
                <input
                  type="checkbox"
                  checked={!isSelectAllMode && areAllPageStudentsSelected()}
                  onChange={handleSelectAllOnPage}
                  className="size-[16px] rounded-[4px] border-2 border-[#707070] text-[#343A6F] focus:ring-[#343A6F] cursor-pointer"
                  aria-label="Select all students on page"
                  style={{
                    accentColor: '#343A6F',
                    transform: 'scale(0.85)'
                  }}
                />
                <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">Select All on Page</span>
              </div>
            </div>
          </div>

          {/* Column Headers Row */}
          <div className="grid grid-cols-[40px_1fr_180px_220px_160px_120px] gap-[16px] px-[16px] sm:px-[24px] py-[12px] items-center">
            {/* Empty space for checkbox column */}
            <div></div>

            {/* Student Name */}
            <button
              onClick={() => handleSort('name')}
              className="flex items-center gap-[8px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] hover:text-[#343A6F] transition-colors text-left"
            >
              <span>Student Name</span>
              {getSortIcon('name')}
            </button>

            {/* Student ID */}
            <div className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] text-left">
              Student ID
            </div>

            {/* Class/Section */}
            <button
              onClick={() => handleSort('classSection')}
              className="flex items-center gap-[8px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] hover:text-[#343A6F] transition-colors text-left"
            >
              <span>Class/Section</span>
              {getSortIcon('classSection')}
            </button>

            {/* Date Tested */}
            <button
              onClick={() => handleSort('dateTested')}
              className="flex items-center gap-[8px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] hover:text-[#343A6F] transition-colors text-left"
            >
              <span>Date Tested</span>
              {getSortIcon('dateTested')}
            </button>

            {/* Score */}
            <button
              onClick={() => handleSort('score')}
              className="flex items-center gap-[8px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] hover:text-[#343A6F] transition-colors text-center justify-center"
            >
              <span>% Correct</span>
              {getSortIcon('score')}
            </button>
          </div>
        </div>

        {/* Student Table Body */}
        <div className="bg-white rounded-b-[8px] border-x border-b border-[#e0e0e0] overflow-hidden">
          {/* Table Body */}
          <div className="divide-y divide-[#e0e0e0]">
            {sortedStudents.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage).map((student) => (
              <div
                key={student.id}
                className="grid grid-cols-[40px_1fr_180px_220px_160px_120px] gap-[16px] px-[16px] sm:px-[24px] py-[16px] hover:bg-[#f7f7f7] transition-colors items-center"
              >
                {/* Checkbox */}
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={selectedStudents.has(student.id)}
                    onChange={() => handleStudentSelect(student.id)}
                    className="size-[16px] rounded-[4px] border-2 border-[#707070] text-[#343A6F] focus:ring-[#343A6F] cursor-pointer"
                    aria-label={`Select ${student.name}`}
                    style={{
                      accentColor: '#343A6F',
                      transform: 'scale(0.85)'
                    }}
                  />
                </div>

                {/* Student Name - Clickable - Single Line */}
                <button
                  onClick={() => handleViewReport(student.id)}
                  className="text-left font-['Rubik:Medium',sans-serif] text-[16px] text-[#343A6F] hover:underline whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {student.name}
                </button>

                {/* Student ID */}
                <div className="text-[16px] text-[#707070] flex items-center">
                  {student.studentId}
                </div>

                {/* Class/Section */}
                <div className="text-[16px] text-[#707070] flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                  {student.classSection}
                </div>

                {/* Date Tested */}
                <div className="text-[16px] text-[#707070] flex items-center">
                  {student.dateTested}
                </div>

                {/* Score */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[6px]">
                    <div 
                      className="size-[12px] rounded-full shrink-0" 
                      style={{ backgroundColor: getPerformanceColor(student.score) }}
                    />
                    <span className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">
                      {student.score}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-[16px]">
          <button
            className="px-[16px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] transition-colors font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-[16px] font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">
            Page {currentPage} of {Math.ceil(sortedStudents.length / studentsPerPage)}
          </span>
          <button
            className="px-[16px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] transition-colors font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage * studentsPerPage >= sortedStudents.length}
          >
            Next
          </button>
        </div>

        {/* Empty State */}
        {sortedStudents.length === 0 && (
          <div className="text-center py-[48px]">
            <p className="text-[16px] text-[#707070]">No students found for the selected filters.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#343A6F] mt-[48px]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-[16px] text-white">
            <div className="flex gap-[24px] sm:gap-[32px] text-[14px]">
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Data Export Request</a>
              <a href="#" className="hover:underline">Requesting a Reports</a>
              <a href="#" className="hover:underline">Support</a>
            </div>
            <p className="text-[13px] text-[#C4C8E1]">Terms | Copyright © 2025</p>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <ExportModal
          onClose={() => setShowExportModal(false)}
          onExport={(format) => {
            console.log(`Exporting ${selectedStudents.size} student reports in ${format} format`);
            setShowExportModal(false);
          }}
          description={`This will export ${selectedStudents.size} student ${selectedStudents.size === 1 ? 'report' : 'reports'} with all standards in an expanded view with complete question details.`}
        />
      )}

      {/* Print Modal */}
      {showPrintModal && (
        <PrintModal
          onClose={() => setShowPrintModal(false)}
          selectedCount={selectedStudents.size}
          onPrint={(options) => {
            console.log(`Printing ${selectedStudents.size} student reports`);
            // If more than 10 students selected, show queue notification
            if (selectedStudents.size > 10) {
              setShowPrintModal(false);
              setShowQueueNotification(true);
            } else {
              setShowPrintModal(false);
            }
          }}
          description={`This will print ${selectedStudents.size} Student Level ${selectedStudents.size === 1 ? 'Report' : 'Reports'} as a PDF document.`}
        />
      )}

      {/* Report Queue Notification */}
      {showQueueNotification && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[16px]" onClick={() => setShowQueueNotification(false)}>
          <div className="bg-white rounded-[8px] p-[32px] max-w-[500px] w-full shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start gap-[16px] mb-[24px]">
              <div className="size-[48px] bg-[#C4C8E1] rounded-full flex items-center justify-center shrink-0">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="#343A6F" strokeWidth="2">
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