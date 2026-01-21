import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import React from 'react';
import { Download, Printer, ExternalLink, Users, BarChart3, Target, AlertTriangle } from 'lucide-react';
import { HorizontalFilterRow, HorizontalFilterRowData, HorizontalFilterRowOptions } from '../components/HorizontalFilterRow';
import { ExportModal } from '../components/ExportModal';
import { PrintModal } from '../components/PrintModal';
import { StickyReportHeader } from '../components/StickyReportHeader';

// Custom tick component for X-axis
const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const item = props.scoreData?.find((d: any) => d.range === payload.value);
  
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#707070" fontSize={14}>
        {payload.value}
      </text>
      <text x={0} y={20} dy={16} textAnchor="middle" fill="#707070" fontSize={14}>
        {item?.percentage}%
      </text>
    </g>
  );
};

export function ClassSummaryReport() {
  const [expandedStandards, setExpandedStandards] = useState<Set<string>>(new Set(['8.EE']));
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showBandExportModal, setShowBandExportModal] = useState(false);
  const [showBandPrintModal, setShowBandPrintModal] = useState(false);
  const [showScoreRangeExportModal, setShowScoreRangeExportModal] = useState(false);
  const [showScoreRangePrintModal, setShowScoreRangePrintModal] = useState(false);
  const [expandedScoreRange, setExpandedScoreRange] = useState<string | null>(null);
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [showPerformanceInfoTooltip, setShowPerformanceInfoTooltip] = useState(false);
  const [selectedPerformanceBand, setSelectedPerformanceBand] = useState<{
    standardId: string;
    band: string;
    color: string;
    label: string;
  } | null>(null);
  const [hoveredDescription, setHoveredDescription] = useState<{
    id: string;
    title: string;
    description: string;
  } | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  // Horizontal Filter Row configuration
  const filterInitialValues: HorizontalFilterRowData = {
    subject: 'Math',
    course: ['Math 8'],
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: ['All Schools'],
    classSection: ['All Classes'],
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
    students: ['All Students', 'Boatneg, Glory', 'Cage, Carey', 'Gash, Penny', 'Fischer, Gilbert', 'Griffin, Jean'],
  };

  // Score distribution data
  const scoreData = [
    { range: '0-39', percentage: 13.5, count: 12, color: '#B40B08', label: '<40%' },
    { range: '40-59', percentage: 20.2, count: 18, color: '#F64C13', label: '40-59%' },
    { range: '60-79', percentage: 28.1, count: 25, color: '#5F1980', label: '60-79%' },
    { range: '80-89', percentage: 22.5, count: 20, color: '#388E3C', label: '80-89%' },
    { range: '90-100', percentage: 15.7, count: 14, color: '#1565C0', label: '90-100%' },
  ];

  // Mock student data for expanded view
  const getStudentsForRange = (range: string) => {
    const students = [
      { name: 'Allred, Gary', studentId: 'ES11SS05A', score: 4 },
      { name: 'Axel, Aaron', studentId: 'ES11SS05A', score: 4 },
      { name: 'Baxter, Jo', studentId: 'ES11SS05A', score: 4 },
      { name: 'Barne, Ellen', studentId: 'ES11SS05A', score: 4 },
      { name: 'Casta, Elexis', studentId: 'ES11SS05A', score: 4 },
      { name: 'Conklin, Andie', studentId: 'ES11SS05A', score: 4 },
    ];
    return students;
  };

  // Mock student data for performance bands
  const getStudentsForBand = (standardId: string, band: string) => {
    const students = [
      { name: 'Allred, Gary', studentId: 'ES11SS05A', score: 18 },
      { name: 'Axel, Aaron', studentId: 'ES11SS05A', score: 19 },
      { name: 'Baxter, Jo', studentId: 'ES11SS05A', score: 17 },
      { name: 'Barne, Ellen', studentId: 'ES11SS05A', score: 18 },
      { name: 'Casta, Elexis', studentId: 'ES11SS05A', score: 20 },
      { name: 'Conklin, Andie', studentId: 'ES11SS05A', score: 19 },
    ];
    return students;
  };

  // Standards data with sub-standards
  const standards = [
    {
      id: '8.EE',
      title: 'Expressions and Equations',
      description: 'Work with radicals and integer exponents. Understand the connections between proportional relationships, lines, and linear equations. Analyze and solve linear equations and pairs of simultaneous linear equations.',
      questions: 12,
      studentCount: 89,
      performance: {
        advanced: 21,
        proficient: 34,
        developing: 20,
        emerging: 8,
        below: 6,
      },
      subStandards: [
        {
          id: '8.EE.A.2',
          title: 'Standard Header',
          description: 'Use square root and cube root symbols to represent solutions to equations of the form x² p and x³ p, where p is a positive rational number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that √2 is irrational.',
          questions: 4,
          studentCount: 89,
          performance: {
            advanced: 26,
            proficient: 31,
            developing: 18,
            emerging: 9,
            below: 5,
          }
        },
        {
          id: '8.EE.A.3',
          title: 'Standard Header',
          description: 'Use square root and cube root symbols to represent solutions to equations of the form x² p and x³ p, where p is a positive rational number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes.',
          questions: 5,
          studentCount: 89,
          performance: {
            advanced: 19,
            proficient: 38,
            developing: 22,
            emerging: 6,
            below: 4,
          }
        },
        {
          id: '8.EE.A.3a',
          title: 'Standard Header',
          description: 'Use numbers expressed in the form of a single digit times an integer power of 10 to estimate very large or very small quantities, and to express how many times as much one is than the other.',
          questions: 3,
          studentCount: 89,
          performance: {
            advanced: 18,
            proficient: 33,
            developing: 21,
            emerging: 10,
            below: 7,
          }
        },
      ]
    },
    {
      id: '8.F',
      title: 'Functions',
      description: 'Define, evaluate, and compare functions. Use functions to model relationships between quantities. Understand that a function assigns to each input exactly one output.',
      questions: 8,
      studentCount: 89,
      performance: {
        advanced: 16,
        proficient: 29,
        developing: 28,
        emerging: 11,
        below: 5,
      },
      subStandards: [
        {
          id: '8.F.A.1',
          title: 'Standard Header',
          description: 'Understand that a function is a rule that assigns to each input exactly one output. The graph of a function is the set of ordered pairs consisting of an input and the corresponding output.',
          questions: 5,
          studentCount: 89,
          performance: {
            advanced: 14,
            proficient: 32,
            developing: 26,
            emerging: 12,
            below: 5,
          }
        },
        {
          id: '8.F.A.2',
          title: 'Standard Header',
          description: 'Compare properties of two functions each represented in a different way (algebraically, graphically, numerically in tables, or by verbal descriptions).',
          questions: 3,
          studentCount: 89,
          performance: {
            advanced: 18,
            proficient: 27,
            developing: 30,
            emerging: 10,
            below: 4,
          }
        },
      ]
    },
    {
      id: '8.G',
      title: 'Geometry',
      description: 'Understand congruence and similarity using physical models, transparencies, or geometry software. Understand and apply the Pythagorean Theorem. Solve real-world and mathematical problems involving volume of cylinders, cones, and spheres.',
      questions: 6,
      studentCount: 89,
      performance: {
        advanced: 24,
        proficient: 36,
        developing: 19,
        emerging: 7,
        below: 3,
      },
      subStandards: [
        {
          id: '8.G.A.1',
          title: 'Standard Header',
          description: 'Verify experimentally the properties of rotations, reflections, and translations: lines are taken to lines, and line segments to line segments of the same length.',
          questions: 4,
          studentCount: 89,
          performance: {
            advanced: 22,
            proficient: 38,
            developing: 20,
            emerging: 6,
            below: 3,
          }
        },
        {
          id: '8.G.B.7',
          title: 'Standard Header',
          description: 'Apply the Pythagorean Theorem to determine unknown side lengths in right triangles in real-world and mathematical problems in two and three dimensions.',
          questions: 2,
          studentCount: 89,
          performance: {
            advanced: 26,
            proficient: 34,
            developing: 18,
            emerging: 8,
            below: 3,
          }
        },
      ]
    },
    {
      id: '8.NS',
      title: 'Number System',
      description: 'Know that there are numbers that are not rational, and approximate them by rational numbers. Understand and work with irrational numbers including square roots and cube roots. Compare and order rational and irrational numbers.',
      questions: 9,
      studentCount: 89,
      performance: {
        advanced: 12,
        proficient: 26,
        developing: 31,
        emerging: 13,
        below: 7,
      },
      subStandards: [
        {
          id: '8.NS.A.1',
          title: 'Standard Header',
          description: 'Know that numbers that are not rational are called irrational. Understand informally that every number has a decimal expansion; for rational numbers show that the decimal expansion repeats eventually.',
          questions: 5,
          studentCount: 89,
          performance: {
            advanced: 10,
            proficient: 28,
            developing: 33,
            emerging: 12,
            below: 6,
          }
        },
        {
          id: '8.NS.A.2',
          title: 'Standard Header',
          description: 'Use rational approximations of irrational numbers to compare the size of irrational numbers, locate them approximately on a number line diagram, and estimate the value of expressions.',
          questions: 4,
          studentCount: 89,
          performance: {
            advanced: 14,
            proficient: 24,
            developing: 29,
            emerging: 14,
            below: 8,
          }
        },
      ]
    },
  ];

  const toggleStandard = (id: string) => {
    const newExpanded = new Set(expandedStandards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedStandards(newExpanded);
  };

  const toggleQuestion = (id: string) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(id);
    }
  };

  const getPerformanceBar = (perf: typeof standards[0]['performance'], standardId: string, isClickable: boolean = false) => {
    const total = perf.advanced + perf.proficient + perf.developing + perf.emerging + perf.below;
    const bands = [
      { key: 'advanced', count: perf.advanced, color: '#1565C0', label: '90-100% Advanced', percentage: (perf.advanced / total) * 100 },
      { key: 'proficient', count: perf.proficient, color: '#388E3C', label: '80-89% Proficient', percentage: (perf.proficient / total) * 100 },
      { key: 'developing', count: perf.developing, color: '#5F1980', label: '60-79% Developing', percentage: (perf.developing / total) * 100 },
      { key: 'emerging', count: perf.emerging, color: '#F64C13', label: '40-59% Emerging', percentage: (perf.emerging / total) * 100 },
      { key: 'below', count: perf.below, color: '#B40B08', label: 'Below 40%', percentage: (perf.below / total) * 100 },
    ];
    
    const isSelected = (bandKey: string) => 
      selectedPerformanceBand?.standardId === standardId && selectedPerformanceBand?.band === bandKey;
    
    return (
      <div className="flex flex-col gap-[8px]">
        {/* Performance Bar */}
        <div className="flex-1 flex h-[32px] rounded-[4px] overflow-hidden">
          {bands.map((band) => band.count > 0 && (
            <div 
              key={band.key}
              className={`relative group flex items-center justify-center text-[14px] text-white font-['Rubik:Medium',sans-serif] ${isClickable ? 'cursor-pointer transition-all' : ''} ${isSelected(band.key) ? 'ring-2 ring-[#343A6F] ring-offset-2' : ''}`}
              style={{ 
                width: `${band.percentage}%`,
                minWidth: '60px',
                backgroundColor: band.color,
                opacity: isClickable && !isSelected(band.key) ? 0.9 : 1,
                transform: isSelected(band.key) ? 'scale(1.02)' : 'scale(1)'
              }}
              onClick={() => {
                if (isClickable) {
                  // Toggle off if already selected
                  if (isSelected(band.key)) {
                    setSelectedPerformanceBand(null);
                  } else {
                    setSelectedPerformanceBand({
                      standardId,
                      band: band.key,
                      color: band.color,
                      label: band.label
                    });
                  }
                }
              }}
              onMouseEnter={(e) => {
                if (isClickable) {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (isClickable && !isSelected(band.key)) {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {band.count > 3 && `${band.percentage.toFixed(0)}%`}
              
              {/* Hover Tooltip */}
              {isClickable && (
                <div className="absolute bottom-full mb-[8px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="bg-[#343A6F] text-white px-[12px] py-[8px] rounded-[4px] shadow-lg whitespace-nowrap">
                    <p className="text-[13px] font-['Rubik:Medium',sans-serif]">
                      {band.count} {band.count === 1 ? 'student' : 'students'} ({band.percentage.toFixed(0)}%)
                    </p>
                    <p className="text-[12px] opacity-90">
                      Click to view list
                    </p>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
                    <div className="border-4 border-transparent border-t-[#343A6F]"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Student Count Labels Below Bar */}
        <div className="flex">
          {bands.map((band) => band.count > 0 && (
            <div 
              key={`${band.key}-label`}
              className="flex items-center justify-center"
              style={{ 
                width: `${band.percentage}%`,
                minWidth: '60px'
              }}
            >
              <span className="text-[12px] text-[#707070]">
                {band.count} {band.count === 1 ? 'student' : 'students'}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Report Header */}
      <StickyReportHeader
        pageTitle="Score Distribution..."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reports', href: '/reports' },
          { label: 'Score Distribution Report' },
        ]}
        filterInitialValues={filterInitialValues}
        filterOptions={filterOptions}
        onFilterChange={(filters) => {
          console.log('Filters changed:', filters);
        }}
        onRunReport={(filters) => {
          console.log('Run report with filters:', filters);
        }}
      />

      {/* Content */}
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">

        {/* Assessment Header */}
        <div className="bg-white rounded-[8px] p-[16px] sm:p-[24px] mb-[24px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
            <div>
              <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[4px]">
                Mathematics Assessment
              </h2>
              <p className="text-[14px] text-[#707070]">Edify Math 8 Interim Assessment 1</p>
            </div>
            <div className="flex gap-[12px] flex-wrap">
              {/* Export Button */}
              {/* DEV NOTE: Exports ALL performance band student lists in bar graph format */}
              <div className="relative">
                <button
                  className="px-[24px] py-[10px] border border-[#d4d4d4] rounded-[100px] text-[16px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px]"
                  onClick={() => setShowExportModal(true)}
                >
                  <Download className="size-[20px]" strokeWidth={1.5} />
                  <span>Export</span>
                </button>
              </div>

              {/* Print Button */}
              {/* DEV NOTE: Prints the current screen view as PDF */}
              <div className="relative">
                <button
                  className="px-[24px] py-[10px] border border-[#d4d4d4] rounded-[100px] text-[16px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px]"
                  onClick={() => setShowPrintModal(true)}
                >
                  <Printer className="size-[20px]" strokeWidth={1.5} />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards - Full Width Section */}
        <div className="bg-white rounded-[8px] mb-[24px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] lg:gap-[20px]">
            {/* Total Students Card */}
            <div className="bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center">
              <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
                <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
                  <Users className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
                    89
                  </p>
                  <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
                    Total Students
                  </h3>
                </div>
              </div>
            </div>

            {/* Average % Correct Card */}
            <div className="bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center">
              <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
                <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
                  <BarChart3 className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
                    66.1%
                  </p>
                  <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
                    Average % Correct
                  </h3>
                </div>
              </div>
            </div>

            {/* Proficiency Rate Card */}
            <div className="bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center">
              <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
                <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
                  <Target className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
                    22.5%
                  </p>
                  <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
                    Proficiency Rate
                  </h3>
                </div>
              </div>
            </div>

            {/* At-Risk Students Card */}
            <div className="bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center">
              <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
                <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
                  <AlertTriangle className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
                    30
                  </p>
                  <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
                    At-Risk Students
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-[8px] overflow-hidden mb-[24px]">
          {/* Header - matching Student Performance by Standard style */}
          <div className="bg-[#343A6F] px-[16px] sm:px-[24px] py-[12px] sm:py-[16px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] sm:text-[20px] text-white">
                Score Distribution
              </h3>
              <div className="relative">
                <button 
                  className="size-[24px] flex items-center justify-center text-white hover:text-[#C4C8E1]"
                  onMouseEnter={() => setShowInfoTooltip(true)}
                  onMouseLeave={() => setShowInfoTooltip(false)}
                >
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 8.5v5.5M10 6v0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {showInfoTooltip && (
                  <div className="absolute left-0 top-full mt-[8px] w-[280px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-lg p-[12px] z-10">
                    <p className="text-[13px] text-[#121212]">
                      Click on each bar color to view student results for that score range.
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Performance Legend - right justified */}
            <div className="flex items-center gap-[16px]">
              {[
                { label: '90-100', color: '#1565C0' },
                { label: '80-89', color: '#388E3C' },
                { label: '60-79', color: '#5F1980' },
                { label: '40-59', color: '#F64C13' },
                { label: 'Below 40', color: '#B40B08' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-[8px]">
                  <div 
                    className="size-[16px] rounded-full shrink-0 border-2 border-white" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[13px] sm:text-[14px] text-white whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Container */}
          <div className="p-[24px] sm:p-[32px] flex justify-center items-center">
            <div className="w-full max-w-[1100px]" style={{ height: '420px', minHeight: '420px' }}>
              <ResponsiveContainer width="100%" height={420}>
                <BarChart data={scoreData} margin={{ top: 30, right: 50, left: 60, bottom: 35 }} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="range" 
                    tick={(props) => <CustomXAxisTick {...props} scoreData={scoreData} />}
                    axisLine={{ stroke: '#d4d4d4' }}
                    height={60}
                    interval={0}
                  />
                  <YAxis 
                    tick={{ fill: '#707070', fontSize: 14 }}
                    axisLine={{ stroke: '#d4d4d4' }}
                    label={{ value: 'Number of Students', angle: -90, position: 'insideLeft', fill: '#707070', style: { textAnchor: 'middle' } }}
                    width={80}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                    formatter={(value: number, name: string, props: any) => {
                      return [`${props.payload.count} students (${props.payload.percentage}%)`, 'Count'];
                    }}
                  />
                  <Bar 
                    dataKey="count" 
                    radius={[4, 4, 0, 0]}
                    onClick={(data) => {
                      setExpandedScoreRange(expandedScoreRange === data.range ? null : data.range);
                    }}
                    cursor="pointer"
                  >
                    {scoreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Expanded Student List */}
          {expandedScoreRange && (() => {
            const selectedData = scoreData.find(d => d.range === expandedScoreRange);
            const students = getStudentsForRange(expandedScoreRange);
            
            return (
              <div className="flex justify-center px-[24px] sm:px-[32px]">
                <div className="w-full max-w-[800px] border-t-[4px] ml-[40px]" style={{ borderColor: selectedData?.color }}>
                  {/* Colored header bar */}
                  <div 
                    className="px-[16px] sm:px-[24px] py-[12px] flex items-center justify-between"
                    style={{ backgroundColor: selectedData?.color }}
                  >
                    <div className="flex items-center gap-[12px] text-white">
                      <span className="font-['Rubik:Medium',sans-serif] text-[16px]">
                        {selectedData?.label}
                      </span>
                      <span className="text-[14px]">
                        | {selectedData?.count} Students scoring {selectedData?.range === '0-39' ? 'below 40' : selectedData?.range}
                      </span>
                    </div>
                    <button
                      onClick={() => setExpandedScoreRange(null)}
                      className="size-[24px] flex items-center justify-center text-white hover:bg-black/10 rounded transition-colors"
                    >
                      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                        <path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Student Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full table-fixed">
                      <colgroup>
                        <col style={{ width: '32%' }} />
                        <col style={{ width: '32%' }} />
                        <col style={{ width: '36%' }} />
                      </colgroup>
                      <thead className="bg-[#f7f7f7] border-b border-[#e0e0e0]">
                        <tr>
                          <th className="px-[16px] sm:px-[24px] py-[12px] text-left">
                            <div className="flex items-center gap-[8px]">
                              <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">Name</span>
                              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                                <path d="M6 3V9M3 6L6 9L9 6" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </th>
                          <th className="px-[16px] sm:px-[24px] py-[12px] text-left font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">
                            Student ID
                          </th>
                          <th className="px-[16px] sm:px-[24px] py-[12px] text-center">
                            <div className="flex items-center justify-center gap-[8px]">
                              <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">Score</span>
                              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                                <path d="M6 3V9M3 6L6 9L9 6" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student, index) => (
                          <tr key={index} className="border-b border-[#e0e0e0] hover:bg-[#f7f7f7]">
                            <td className="px-[16px] sm:px-[24px] py-[12px] text-[16px] leading-[24px] text-[#121212]">
                              {student.name}
                            </td>
                            <td className="px-[16px] sm:px-[24px] py-[12px] text-[16px] leading-[24px] text-[#707070]">
                              {student.studentId}
                            </td>
                            <td className="px-[16px] sm:px-[24px] py-[12px] text-center">
                              <span 
                                className="inline-block px-[12px] py-[4px] rounded-[100px] text-[16px] leading-[24px] text-white font-['Rubik:Medium',sans-serif]"
                                style={{ backgroundColor: selectedData?.color }}
                              >
                                {student.score}/20
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Print and Export buttons */}
                  <div className="px-[16px] sm:px-[24px] py-[16px] bg-[#f7f7f7] flex gap-[12px]">
                    <button 
                      onClick={() => setShowScoreRangeExportModal(true)}
                      className="px-[24px] py-[10px] bg-white border border-[#d4d4d4] rounded-[100px] text-[16px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px]"
                    >
                      <Download className="size-[20px]" strokeWidth={1.5} />
                      Export
                    </button>
                    <button 
                      onClick={() => setShowScoreRangePrintModal(true)}
                      className="px-[24px] py-[10px] bg-white border border-[#d4d4d4] rounded-[100px] text-[16px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px]"
                    >
                      <Printer className="size-[20px]" strokeWidth={1.5} />
                      Print
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Student Performance by Standard */}
        <div className="bg-white rounded-[8px] overflow-hidden mt-[32px]">
          {/* Table Header */}
          <div className="bg-[#343A6F] px-[16px] sm:px-[24px] py-[12px] sm:py-[16px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] sm:text-[20px] text-white">
                Student Performance by Standard
              </h3>
              <div className="relative">
                <button 
                  className="size-[24px] flex items-center justify-center text-white hover:text-[#C4C8E1]"
                  onMouseEnter={() => setShowPerformanceInfoTooltip(true)}
                  onMouseLeave={() => setShowPerformanceInfoTooltip(false)}
                  onFocus={() => setShowPerformanceInfoTooltip(true)}
                  onBlur={() => setShowPerformanceInfoTooltip(false)}
                  aria-label="Information about Student Performance by Standard"
                  aria-describedby={showPerformanceInfoTooltip ? "performance-info-tooltip" : undefined}
                >
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 8.5v5.5M10 6v0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {showPerformanceInfoTooltip && (
                  <div 
                    id="performance-info-tooltip"
                    role="tooltip"
                    className="absolute left-0 top-full mt-[8px] w-[280px] sm:w-[320px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-lg p-[12px] z-50"
                  >
                    <p className="text-[13px] text-[#343A6F] leading-[1.5] mb-[8px]">
                      <strong>Interactive Performance Bars:</strong> Click any colored segment in the Student Results column to view the list of students in that performance band.
                    </p>
                    <p className="text-[12px] text-[#707070] leading-[1.5]">
                      Hover over bars to see student counts. Click again to close the list.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] lg:text-[16px] text-white">
              Click on performance bars to view student details
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <colgroup>
                <col className="w-[60px]" />
                <col className="w-[35%]" />
                <col className="w-[150px]" />
                <col className="w-auto" />
              </colgroup>
              <thead className="bg-[#f7f7f7]">
                <tr className="border-b border-[#e0e0e0]">
                  <th className="px-[16px] sm:px-[24px] py-[12px] text-left font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]"></th>
                  <th className="px-[16px] sm:px-[24px] py-[12px] text-left font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">
                    Standard
                  </th>
                  <th className="px-[16px] sm:px-[24px] py-[12px] text-left font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">
                    # Items
                  </th>
                  <th className="px-[16px] sm:px-[24px] py-[12px] text-left font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">
                    Student Results
                  </th>
                </tr>
              </thead>
              <tbody>
                {standards.flatMap((standard) => {
                  const isExpanded = expandedStandards.has(standard.id);
                  const rows: JSX.Element[] = [
                    <tr key={standard.id} className="border-b border-[#e0e0e0] hover:bg-[#f7f7f7] shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
                      <td className="px-[16px] sm:px-[24px] py-[18px] align-middle">
                        {standard.subStandards && standard.subStandards.length > 0 && (
                          <button
                            onClick={() => toggleStandard(standard.id)}
                            className="size-[24px] flex items-center justify-center text-[#707070] hover:text-[#343A6F]"
                          >
                            <svg 
                              className={`size-[20px] transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                              fill="none" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        )}
                      </td>
                      <td className="px-[16px] sm:px-[24px] py-[18px] align-middle">
                        <p className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">
                          {standard.id} {standard.title}
                        </p>
                      </td>
                      <td className="px-[16px] sm:px-[24px] py-[18px] align-middle">
                        <p className="text-[16px] text-[#121212]">{standard.questions} Questions</p>
                      </td>
                      <td className="px-[16px] sm:px-[24px] py-[18px] align-middle">
                        {getPerformanceBar(standard.performance, standard.id, true)}
                      </td>
                    </tr>
                  ];
                  
                  // Add performance band student list directly under main standard if selected
                  if (selectedPerformanceBand && selectedPerformanceBand.standardId === standard.id) {
                    const students = getStudentsForBand(selectedPerformanceBand.standardId, selectedPerformanceBand.band);
                    rows.push(
                      <tr 
                        key={`${standard.id}-students`} 
                        className="border-b border-[#e0e0e0] bg-[#fafafa] cursor-pointer"
                        onClick={() => setSelectedPerformanceBand(null)}
                      >
                        <td className="px-[16px] sm:px-[24px] py-[24px]" colSpan={4}>
                          <div className="flex gap-[24px] items-start">
                            {/* Description Container - Left Side */}
                            {standard.description && (
                              <div className="flex-1 max-w-[500px] border border-[#d4d4d4] rounded-[4px] bg-white shadow-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                <div className="bg-[#f7f7f7] px-[16px] py-[10px] border-b border-[#e0e0e0]">
                                  <p className="text-[13px] text-[#121212] font-['Rubik:Medium',sans-serif]">
                                    Standard Description
                                  </p>
                                </div>
                                <div className="px-[16px] py-[16px]">
                                  <p className="text-[14px] text-[#121212] leading-[1.6]">
                                    {standard.description}
                                  </p>
                                </div>
                              </div>
                            )}
                            {/* Student List - Right Side */}
                            <div className="flex-1 min-w-[400px]">
                          <div className="border-t-[3px] rounded-[4px] overflow-hidden" style={{ borderColor: selectedPerformanceBand.color }} onClick={(e) => e.stopPropagation()}>
                            {/* Standard Header */}
                            <div className="bg-white px-[12px] py-[10px] border-b border-[#e0e0e0]">
                              <p className="text-[13px] text-[#121212] font-['Rubik:Medium',sans-serif]">
                                {standard.id} {standard.title}
                              </p>
                            </div>
                            {/* Performance Band Header */}
                            <div className="bg-white px-[12px] py-[10px] border-b border-[#e0e0e0] flex items-center justify-between">
                              <div className="flex items-center gap-[10px]">
                                <div 
                                  className="size-[18px] rounded-full shrink-0"
                                  style={{ backgroundColor: selectedPerformanceBand.color }}
                                ></div>
                                <div className="flex items-center gap-[8px]">
                                  <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212]">
                                    {selectedPerformanceBand.label.split('%')[0]}%
                                  </span>
                                  <span className="text-[14px] text-[#121212]">
                                    {selectedPerformanceBand.label.split('%')[1].trim()}
                                  </span>
                                  <span className="text-[13px] text-[#707070]">
                                    ({students.length})
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-[8px]">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowBandExportModal(true);
                                  }}
                                  className="size-[20px] flex items-center justify-center text-[#707070] hover:text-[#343A6F] rounded transition-colors"
                                >
                                  <Download className="size-[16px]" strokeWidth={1.5} />
                                </button>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowBandPrintModal(true);
                                  }}
                                  className="size-[20px] flex items-center justify-center text-[#707070] hover:text-[#343A6F] rounded transition-colors"
                                >
                                  <Printer className="size-[16px]" strokeWidth={1.5} />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPerformanceBand(null);
                                  }}
                                  className="size-[20px] flex items-center justify-center text-[#707070] hover:text-[#343A6F] rounded transition-colors"
                                >
                                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                                    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            {/* Student List */}
                            <div className="bg-white max-h-[200px] overflow-y-auto">
                              {students.map((student, index) => (
                                <div 
                                  key={index} 
                                  className="px-[12px] py-[8px] border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f7f7f7] flex items-center justify-between"
                                >
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[14px] text-[#121212] truncate">
                                      {student.name}
                                    </p>
                                    <p className="text-[14px] text-[#707070]">
                                      {student.studentId}
                                    </p>
                                  </div>
                                  <span 
                                    className="ml-[8px] px-[8px] py-[2px] rounded-[100px] text-[14px] text-white font-['Rubik:Medium',sans-serif] shrink-0"
                                    style={{ backgroundColor: selectedPerformanceBand.color }}
                                  >
                                    {student.score}/20
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                  
                  // Add sub-standards if expanded
                  if (isExpanded && standard.subStandards && standard.subStandards.length > 0) {
                    standard.subStandards.forEach((subStandard, index) => {
                      rows.push(
                        <tr key={subStandard.id} className="border-b border-[#e0e0e0] bg-[#f0f0f0] hover:bg-[#e8e8e8]">
                          <td className="px-[16px] sm:px-[24px] py-[16px] align-middle">
                            <div className="border-l-[2px] border-[#343A6F] h-full -ml-[12px] pl-[12px]"></div>
                          </td>
                          <td className="px-[16px] sm:px-[24px] py-[16px] align-middle">
                            <div className="pl-[24px] flex items-center gap-[8px]">
                              <p className="text-[15px] text-[#121212]">
                                {subStandard.id} {subStandard.title}
                              </p>
                              <div className="relative">
                                <button
                                  className="size-[18px] flex items-center justify-center text-[#8a8a8a] hover:text-[#343A6F] transition-colors"
                                  onMouseEnter={() => setHoveredDescription({
                                    id: subStandard.id,
                                    title: subStandard.title,
                                    description: subStandard.description
                                  })}
                                  onMouseLeave={() => setHoveredDescription(null)}
                                >
                                  <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M9 7.5v5M9 5.5v0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </button>
                                {hoveredDescription?.id === subStandard.id && (
                                  <div 
                                    className="absolute left-[24px] top-0 bg-white border border-[#e0e0e0] rounded-[8px] shadow-lg p-[16px] w-[400px] z-50"
                                    onMouseEnter={() => setHoveredDescription({
                                      id: subStandard.id,
                                      title: subStandard.title,
                                      description: subStandard.description
                                    })}
                                    onMouseLeave={() => setHoveredDescription(null)}
                                  >
                                    <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212] mb-[8px]">
                                      {subStandard.id} {subStandard.title}
                                    </p>
                                    <p className="text-[13px] text-[#707070] leading-[1.5]">
                                      {subStandard.description}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-[16px] sm:px-[24px] py-[16px] align-middle">
                            <p className="text-[15px] text-[#121212]">{subStandard.questions} Questions</p>
                          </td>
                          <td className="px-[16px] sm:px-[24px] py-[16px] align-middle">
                            {getPerformanceBar(subStandard.performance, subStandard.id, true)}
                          </td>
                        </tr>
                      );
                      
                      // Add performance band student list directly under sub-standard if selected
                      if (selectedPerformanceBand && selectedPerformanceBand.standardId === subStandard.id) {
                        const students = getStudentsForBand(selectedPerformanceBand.standardId, selectedPerformanceBand.band);
                        rows.push(
                          <tr 
                            key={`${subStandard.id}-students`} 
                            className="border-b border-[#e0e0e0] bg-[#fafafa] cursor-pointer"
                            onClick={() => setSelectedPerformanceBand(null)}
                          >
                            <td className="px-[16px] sm:px-[24px] py-[24px]" colSpan={4}>
                              <div className="flex gap-[24px] items-start">
                                {/* Description Container - Left Side */}
                                <div className="flex-1 max-w-[500px] border border-[#d4d4d4] rounded-[4px] bg-white shadow-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                  <div className="bg-[#f7f7f7] px-[16px] py-[10px] border-b border-[#e0e0e0]">
                                    <p className="text-[13px] text-[#121212] font-['Rubik:Medium',sans-serif]">
                                      Standard Description
                                    </p>
                                  </div>
                                  <div className="px-[16px] py-[16px]">
                                    <p className="text-[14px] text-[#121212] leading-[1.6]">
                                      {subStandard.description}
                                    </p>
                                  </div>
                                </div>
                                {/* Student List - Right Side */}
                                <div className="flex-1 min-w-[400px]">
                              <div className="border-t-[3px] rounded-[4px] overflow-hidden" style={{ borderColor: selectedPerformanceBand.color }} onClick={(e) => e.stopPropagation()}>
                                {/* Standard Header */}
                                <div className="bg-white px-[12px] py-[10px] border-b border-[#e0e0e0]">
                                  <p className="text-[13px] text-[#121212] font-['Rubik:Medium',sans-serif]">
                                    {subStandard.id} {subStandard.title}
                                  </p>
                                </div>
                                {/* Performance Band Dropdown */}
                                <div className="bg-white px-[12px] py-[10px] border-b border-[#e0e0e0] flex items-center justify-between">
                                  <div className="flex items-center gap-[10px]">
                                    <div 
                                      className="size-[18px] rounded-full shrink-0"
                                      style={{ backgroundColor: selectedPerformanceBand.color }}
                                    ></div>
                                    <div className="flex items-center gap-[8px]">
                                      <span className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212]">
                                        {selectedPerformanceBand.label.split('%')[0]}%
                                      </span>
                                      <span className="text-[14px] text-[#121212]">
                                        {selectedPerformanceBand.label.split('%')[1].trim()}
                                      </span>
                                      <span className="text-[13px] text-[#707070]">
                                        ({students.length})
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-[8px]">
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setShowBandExportModal(true);
                                      }}
                                      className="size-[20px] flex items-center justify-center text-[#707070] hover:text-[#343A6F] rounded transition-colors"
                                    >
                                      <Download className="size-[16px]" strokeWidth={1.5} />
                                    </button>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setShowBandPrintModal(true);
                                      }}
                                      className="size-[20px] flex items-center justify-center text-[#707070] hover:text-[#343A6F] rounded transition-colors"
                                    >
                                      <Printer className="size-[16px]" strokeWidth={1.5} />
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedPerformanceBand(null);
                                      }}
                                      className="size-[20px] flex items-center justify-center text-[#707070] hover:text-[#343A6F] rounded transition-colors"
                                    >
                                      <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                                        <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                {/* Student List */}
                                <div className="bg-white max-h-[200px] overflow-y-auto">
                                  {students.map((student, index) => (
                                    <div 
                                      key={index} 
                                      className="px-[12px] py-[8px] border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f7f7f7] flex items-center justify-between"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <p className="text-[14px] text-[#121212] truncate">
                                          {student.name}
                                        </p>
                                        <p className="text-[14px] text-[#707070]">
                                          {student.studentId}
                                        </p>
                                      </div>
                                      <span 
                                        className="ml-[8px] px-[8px] py-[2px] rounded-[100px] text-[14px] text-white font-['Rubik:Medium',sans-serif] shrink-0"
                                        style={{ backgroundColor: selectedPerformanceBand.color }}
                                      >
                                        {student.score}/20
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    });
                  }
                  
                  return rows;
                })}
              </tbody>
            </table>
          </div>
        </div>
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
      {/* DEV NOTE: When backend is implemented, this should export ALL performance band student lists 
          displayed in bar graph format (all score ranges: 0-39%, 40-59%, 60-79%, 80-89%, 90-100%) */}
      {showExportModal && (
        <ExportModal
          onClose={() => setShowExportModal(false)}
          onExport={(format) => {
            console.log(`Exporting ALL performance band student lists in bar graph format as ${format}`);
            console.log('This should include all score ranges: 0-39%, 40-59%, 60-79%, 80-89%, 90-100%');
            setShowExportModal(false);
          }}
          description="This will export all performance band student lists displayed in bar graph format."
        />
      )}

      {/* Print Modal */}
      {/* DEV NOTE: When backend is implemented, this should generate a PDF of the current screen view 
          including all visible performance bands and charts */}
      {showPrintModal && (
        <PrintModal
          onClose={() => setShowPrintModal(false)}
          onPrint={() => {
            console.log('Printing current screen view as PDF');
            console.log('This should capture the entire visible report including all performance bands');
            setShowPrintModal(false);
          }}
          description="This will print the current screen view as a PDF document."
        />
      )}

      {/* Performance Band Export Modal */}
      {showBandExportModal && (
        <ExportModal
          onClose={() => setShowBandExportModal(false)}
          onExport={(format) => {
            console.log(`Exporting performance band in ${format} format`);
            setShowBandExportModal(false);
          }}
        />
      )}

      {/* Performance Band Print Modal */}
      {showBandPrintModal && (
        <PrintModal
          onClose={() => setShowBandPrintModal(false)}
          onPrint={() => {
            console.log('Printing performance band');
            setShowBandPrintModal(false);
          }}
        />
      )}

      {/* Score Range Export Modal */}
      {/* DEV NOTE: This exports only the specific score range list that was expanded */}
      {showScoreRangeExportModal && (
        <ExportModal
          onClose={() => setShowScoreRangeExportModal(false)}
          onExport={(format) => {
            console.log(`Exporting score range ${expandedScoreRange} student list in ${format} format`);
            setShowScoreRangeExportModal(false);
          }}
          description={`This will export the ${expandedScoreRange === '0-39' ? 'below 40' : expandedScoreRange}% score range student list.`}
        />
      )}

      {/* Score Range Print Modal */}
      {showScoreRangePrintModal && (
        <PrintModal
          onClose={() => setShowScoreRangePrintModal(false)}
          onPrint={() => {
            console.log(`Printing score range ${expandedScoreRange} student list`);
            setShowScoreRangePrintModal(false);
          }}
          description={`This will print the ${expandedScoreRange === '0-39' ? 'below 40' : expandedScoreRange}% score range student list.`}
        />
      )}
    </div>
  );
}