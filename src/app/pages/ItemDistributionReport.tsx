import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, Printer, ChevronDown, ChevronUp, Check, ArrowUpDown, X, Users, TrendingUp, HelpCircle } from 'lucide-react';
import { HorizontalFilterRow, HorizontalFilterRowData, HorizontalFilterRowOptions } from '../components/HorizontalFilterRow';
import { ExportModal } from '../components/ExportModal';
import { PrintModal } from '../components/PrintModal';
import { StickyReportHeader } from '../components/StickyReportHeader';
import { questions, students } from '../data/questionsData';

export function ItemDistributionReport() {
  const [activeTab, setActiveTab] = useState<'overall' | 'by-student'>('by-student');
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [selectedQuestionModal, setSelectedQuestionModal] = useState<{ studentId: string; questionId: number } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const topScrollerRef = useRef<HTMLDivElement>(null);
  const tableScrollerRef = useRef<HTMLDivElement>(null);
  const headerScrollerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation - Escape to close modal
  useEffect(() => {
    if (!selectedQuestionModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedQuestionModal(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedQuestionModal]);

  // Focus trap for modal
  useEffect(() => {
    if (!selectedQuestionModal) return;
    
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [selectedQuestionModal]);

  // Sync horizontal scrollbars for Overview tab
  useEffect(() => {
    if (activeTab !== 'by-student') return;
    
    const topScroller = topScrollerRef.current;
    const tableScroller = tableScrollerRef.current;
    const headerScroller = headerScrollerRef.current;
    
    if (!topScroller || !tableScroller || !headerScroller) return;

    const handleTopScroll = () => {
      if (tableScroller.scrollLeft !== topScroller.scrollLeft) {
        tableScroller.scrollLeft = topScroller.scrollLeft;
      }
      if (headerScroller.scrollLeft !== topScroller.scrollLeft) {
        headerScroller.scrollLeft = topScroller.scrollLeft;
      }
    };

    const handleTableScroll = () => {
      if (topScroller.scrollLeft !== tableScroller.scrollLeft) {
        topScroller.scrollLeft = tableScroller.scrollLeft;
      }
      if (headerScroller.scrollLeft !== tableScroller.scrollLeft) {
        headerScroller.scrollLeft = tableScroller.scrollLeft;
      }
    };

    const handleHeaderScroll = () => {
      if (topScroller.scrollLeft !== headerScroller.scrollLeft) {
        topScroller.scrollLeft = headerScroller.scrollLeft;
      }
      if (tableScroller.scrollLeft !== headerScroller.scrollLeft) {
        tableScroller.scrollLeft = headerScroller.scrollLeft;
      }
    };

    topScroller.addEventListener('scroll', handleTopScroll);
    tableScroller.addEventListener('scroll', handleTableScroll);
    headerScroller.addEventListener('scroll', handleHeaderScroll);

    return () => {
      topScroller.removeEventListener('scroll', handleTopScroll);
      tableScroller.removeEventListener('scroll', handleTableScroll);
      headerScroller.removeEventListener('scroll', handleHeaderScroll);
    };
  }, [activeTab]);

  // Horizontal Filter Row configuration
  const filterInitialValues: HorizontalFilterRowData = {
    subject: 'Math',
    course: 'Math 8',
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: 'All Schools',
    classSection: 'All Classes',
    student: 'All Students',
  };

  const filterOptions: HorizontalFilterRowOptions = {
    subjects: ['Math', 'Reading', 'History', 'Social Studies', 'Technology', 'Art', 'Option'],
    courses: ['All', 'Math 8', 'Math 1', 'Math 2', 'Math 3', 'Math 4', 'Math 5'],
    assessments: [
      'All',
      'Edify Math 8 Interim Assessment 1',
      'Edify Math 8 Interim Assessment 2',
      'Edify Math 8 Interim Assessment 3',
      'Edify 6 Interim 1',
      'Edify 6 Interim 2',
      'Edify 6 Interim 3'
    ],
    schools: ['All', 'Elementary 1', 'Elementary 2', 'Elementary 3', 'Elementary 4', 'Middle School 1'],
    classSections: ['All', 'Brush, Julius, Period 2', 'Gartner, Scott, Period 1', 'Kettner, Hunter, Period 6', 'Kumar, Shabana Period 1', 'Marsh, Michaele Period 1'],
    students: ['All', 'Boatneg, Glory', 'Cage, Carey', 'Gash, Penny', 'Fischer, Gilbert', 'Griffin, Jean'],
  };

  // Get correct answers from questions
  const correctAnswers = questions.map(q => q.options.find(opt => opt.isCorrect)?.letter || '');

  // Calculate most common distractor for each question
  const getMostCommonDistractor = (questionIndex: number) => {
    const answers = students.map(s => s.answers[questionIndex]);
    const correctAnswer = correctAnswers[questionIndex];
    const distractors = answers.filter(a => a !== correctAnswer);
    
    if (distractors.length === 0) return { letter: '', percentage: 0 };
    
    const counts = distractors.reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const mostCommon = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    return {
      letter: mostCommon[0],
      percentage: Math.round((mostCommon[1] / students.length) * 100)
    };
  };

  const getPerformanceColor = (percent: number) => {
    if (percent >= 90) return '#1565C0'; // Advanced
    if (percent >= 80) return '#388E3C'; // Proficient
    if (percent >= 60) return '#5F1980'; // Developing
    if (percent >= 40) return '#F64C13'; // Emerging
    return '#B40B08'; // Below 40%
  };

  const toggleQuestion = (questionId: number) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Report Header */}
      <StickyReportHeader
        pageTitle="Item Distribution Report"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reports', href: '/reports' },
          { label: 'Item Distribution Report' },
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
        <div className="bg-white rounded-[8px] p-[16px] sm:p-[24px] mb-[12px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
            <div>
              <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] leading-[32px] text-[#121212] mb-[4px]">
                Mathematics Assessment
              </h2>
              <p className="text-[14px] leading-[16px] text-[#707070]">Edify Math 8 Interim Assessment 1</p>
            </div>
            <div className="flex gap-[12px] flex-wrap">
              {/* Export Button */}
              <div className="relative">
                <button
                  className="px-[24px] py-[10px] border border-[#d4d4d4] rounded-[100px] text-[16px] leading-[24px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px]"
                  onClick={() => setShowExportModal(true)}
                >
                  <Download className="size-[20px]" strokeWidth={1.5} />
                  <span>Export</span>
                </button>
              </div>

              {/* Print Button */}
              <div className="relative">
                <button
                  className="px-[24px] py-[10px] border border-[#d4d4d4] rounded-[100px] text-[16px] leading-[24px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px]"
                  onClick={() => setShowPrintModal(true)}
                >
                  <Printer className="size-[20px]" strokeWidth={1.5} />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Question Performance Section */}
        <div className="bg-white rounded-[8px] overflow-hidden">
          {/* Section Header */}
          <div className="bg-[#343A6F] px-[16px] sm:px-[24px] py-[12px] sm:py-[16px]">
            <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] sm:text-[20px] text-white">
              Performance Results
            </h3>
          </div>

          {/* Tabs with Performance Band Legend */}
          <div className="border-b border-[#e0e0e0]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[16px] px-[16px] sm:px-[24px] py-[16px]">
              {/* Tabs - Left side */}
              <div className="flex">
                <button
                  className="px-[24px] py-[12px] transition-colors"
                  onClick={() => setActiveTab('by-student')}
                >
                  <span className={`text-[16px] leading-[24px] font-['Rubik:Medium',sans-serif] border-b-[3px] pb-[12px] transition-colors inline-block ${
                    activeTab === 'by-student'
                      ? 'border-[#343A6F] text-[#343A6F]'
                      : 'border-transparent text-[#707070] hover:text-[#343A6F]'
                  }`}>
                    Overview
                  </span>
                </button>
                <button
                  className="px-[24px] py-[12px] transition-colors"
                  onClick={() => setActiveTab('overall')}
                >
                  <span className={`text-[16px] leading-[24px] font-['Rubik:Medium',sans-serif] border-b-[3px] pb-[12px] transition-colors inline-block ${
                    activeTab === 'overall'
                      ? 'border-[#343A6F] text-[#343A6F]'
                      : 'border-transparent text-[#707070] hover:text-[#343A6F]'
                  }`}>
                    Item Analysis
                  </span>
                </button>
              </div>

              {/* Performance Band Legend - Right side */}
              <div className="flex flex-wrap items-center gap-[12px] lg:gap-[16px]">
                {[
                  { label: '90-100%', sublabel: 'Advanced', color: '#1565C0' },
                  { label: '80-89%', sublabel: 'Proficient', color: '#388E3C' },
                  { label: '60-79%', sublabel: 'Developing', color: '#5F1980' },
                  { label: '40-59%', sublabel: 'Emerging', color: '#F64C13' },
                  { label: 'Below 40%', sublabel: '', color: '#B40B08' },
                ].map((item) => (
                  <div 
                    key={item.label} 
                    className="flex items-center gap-[8px]"
                  >
                    <div 
                      className="size-[14px] rounded-full shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex items-center gap-[6px]">
                      <span className="font-['Rubik:Medium',sans-serif] text-[12px] leading-[14px] text-[#121212] whitespace-nowrap">
                        {item.label}
                      </span>
                      {item.sublabel && (
                        <span className="text-[12px] leading-[14px] text-[#121212]">
                          {item.sublabel}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-[16px] sm:p-[24px]">
            {activeTab === 'overall' && (
              <div>
                {/* Subheader */}
                <div className="mb-[24px]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[20px] leading-[32px] text-[#121212] mb-[4px]">
                    Item Analysis
                  </h4>
                  <p className="text-[16px] leading-[24px] text-[#121212]">
                    View detailed question analysis including standards, performance metrics, and answer choices.
                  </p>
                </div>

                {/* Table Header */}
                <div className="flex items-center gap-[16px] px-[8px] py-[16px] border-b border-[#d4d4d4] bg-white rounded-t-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] mb-[0px]">
                  <div className="w-[140px] shrink-0">
                    <p className="text-[14px] leading-[16px] text-[#707070] capitalize">Question / Standard</p>
                  </div>
                  <div className="w-[280px] shrink-0">
                    {/* Empty space to align with standard */}
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] leading-[16px] text-[#707070] capitalize">Performance</p>
                  </div>
                  <div className="w-[140px] shrink-0 text-right">
                    <p className="text-[14px] leading-[16px] text-[#707070] capitalize">% Correct</p>
                  </div>
                </div>

                <div className="space-y-[0px]">
                  {questions.map((question, index) => {
                    const isExpanded = expandedQuestions.has(question.id);
                    return (
                      <div key={question.id} className="border-b border-[#e0e0e0] last:border-b-0">
                        {/* Question Header - Always Visible */}
                        <div className="py-[20px]">
                          {/* Row 1: Question Number, Standard, Progress Bar, % Correct */}
                          <div className="flex items-center gap-[16px] mb-[8px]">
                            {/* Question Number with Expand Button */}
                            <div className="flex items-center gap-[12px] w-[140px] shrink-0">
                              <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                                Question {question.id}
                              </h4>
                              <button
                                onClick={() => toggleQuestion(question.id)}
                                className="text-[#343A6F] hover:text-[#5F1980] transition-colors"
                                aria-label={isExpanded ? 'Collapse question details' : 'Expand question details'}
                              >
                                {isExpanded ? (
                                  <ChevronUp className="size-[20px]" />
                                ) : (
                                  <ChevronDown className="size-[20px]" />
                                )}
                              </button>
                            </div>

                            {/* Standard */}
                            <div className="w-[280px] shrink-0">
                              <p className="text-[14px] leading-[16px] text-[#707070]">
                                {question.standard} - {question.standardName}
                              </p>
                            </div>
                            
                            {/* Progress Bar - Flexible Width */}
                            <div className="flex-1 h-[24px] bg-[#C4C8E1] rounded-[4px] overflow-hidden">
                              <div 
                                className="h-full rounded-[4px]"
                                style={{ 
                                  width: `${question.percentCorrect}%`,
                                  backgroundColor: question.color
                                }}
                              />
                            </div>

                            {/* % Correct with Color Dot */}
                            <div className="flex items-center gap-[8px] w-[140px] justify-end shrink-0">
                              <span className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212] whitespace-nowrap">
                                {question.percentCorrect}% Correct
                              </span>
                              <div 
                                className="size-[18px] rounded-full shrink-0"
                                style={{ backgroundColor: question.color }}
                              />
                            </div>
                          </div>

                          {/* Row 2: Student Stats - Integrated with layout columns */}
                          <div className="flex items-center gap-[16px]">
                            {/* Empty space to align with question number */}
                            <div className="w-[140px] shrink-0" />
                            
                            {/* Student Stats under Standard column */}
                            <div className="flex items-center gap-[16px] flex-1">
                              <div className="flex items-center gap-[4px] text-[14px] leading-[16px] text-[#707070]">
                                <Users className="size-[16px]" />
                                <span className="font-['Rubik:Medium',sans-serif] text-[#121212]">{question.studentsCorrect}</span>
                                <span>correct</span>
                                <span className="text-[#d4d4d4] mx-[4px]">•</span>
                                <span className="font-['Rubik:Medium',sans-serif] text-[#121212]">{question.studentsIncorrect}</span>
                                <span>incorrect</span>
                              </div>
                              
                              {(() => {
                                const distractor = getMostCommonDistractor(index);
                                return distractor.letter ? (
                                  <div className="flex items-center gap-[4px] text-[14px] leading-[16px] text-[#707070]">
                                    <TrendingUp className="size-[16px]" />
                                    <span>Most common distractor:</span>
                                    <span className="font-['Rubik:Medium',sans-serif] text-[#121212]">{distractor.letter}</span>
                                    <span className="text-[#d4d4d4] mx-[4px]">•</span>
                                    <span className="font-['Rubik:Medium',sans-serif] text-[#121212]">{distractor.percentage}%</span>
                                  </div>
                                ) : null;
                              })()}
                            </div>
                            
                            {/* Empty space to align with % Correct column */}
                            <div className="w-[140px] shrink-0" />
                          </div>
                        </div>

                        {/* Expandable Details */}
                        {isExpanded && (
                          <div className="pb-[20px]">
                            {/* Two Column Layout for Options and Details - Equal Height */}
                            <div className="grid grid-cols-2 gap-[24px] mb-[20px]">
                              {/* Left Column: Question and Answer Options */}
                              <div className="bg-white rounded-[8px] p-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col">
                                {/* Question Text */}
                                <div className="mb-[16px] pb-[16px] border-b border-[#e0e0e0]">
                                  <h5 className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212] mb-[8px]">
                                    Question
                                  </h5>
                                  <p className="text-[16px] leading-[24px] text-[#121212]">
                                    {question.questionText}
                                  </p>
                                </div>

                                {/* Answer Choices */}
                                <h5 className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212] mb-[12px]">
                                  Answer Choices
                                </h5>
                                <div className="space-y-[12px] flex-1">
                                  {question.options.map((option) => (
                                    <div 
                                      key={option.letter}
                                      className="flex items-start gap-[12px]"
                                    >
                                      <div 
                                        className={`size-[36px] rounded-full flex items-center justify-center shrink-0 ${
                                          option.isCorrect
                                            ? 'bg-[#388E3C] text-white'
                                            : 'bg-[#707070] text-white'
                                        }`}
                                      >
                                        <span className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px]">
                                          {option.letter}
                                        </span>
                                      </div>
                                      <div className="flex-1 pt-[6px]">
                                        <span className="text-[16px] leading-[24px] text-[#121212]">
                                          {option.text}
                                        </span>
                                        {option.isCorrect && (
                                          <span className="text-[14px] leading-[16px] text-[#388E3C] font-['Rubik:Medium',sans-serif] ml-[8px]">
                                            Correct
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right Column: Details Section */}
                              <div className="bg-[#E7EBF4] rounded-[8px] p-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col">
                                {/* Header with Strand */}
                                <div className="flex items-start justify-between gap-[16px] mb-[16px] pb-[12px] border-b border-[#C4C8E1]">
                                  <h5 className="font-['Rubik:Medium',sans-serif] text-[18px] leading-[24px] text-[#343A6F]">
                                    Details
                                  </h5>
                                  <div className="text-right">
                                    <p className="text-[14px] leading-[16px] text-[#707070] mb-[4px] font-['Rubik:Medium',sans-serif]">
                                      Strand
                                    </p>
                                    <p className="text-[14px] leading-[20px] text-[#121212]">
                                      {question.standardName}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex-1">
                                  {/* Measurable Standard */}
                                  <div className="mb-[16px]">
                                    <div className="flex items-start gap-[8px] mb-[6px]">
                                      <p className="text-[14px] leading-[16px] text-[#707070] font-['Rubik:Medium',sans-serif]">
                                        Measurable Standard
                                      </p>
                                      <svg className="size-[16px] text-[#343A6F] mt-[2px] shrink-0" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 12H7V7h2v5zm0-6H7V4h2v2z"/>
                                      </svg>
                                    </div>
                                    <p className="text-[14px] leading-[20px] text-[#121212]">
                                      {question.measurableStandard}
                                    </p>
                                  </div>

                                  {/* Teacher Rationale */}
                                  <div>
                                    <p className="text-[14px] leading-[16px] text-[#707070] mb-[8px] font-['Rubik:Medium',sans-serif]">
                                      Teacher Rationale
                                    </p>
                                    <ul className="space-y-[8px]">
                                      {question.teacherRationale.map((rationale, idx) => (
                                        <li 
                                          key={idx}
                                          className="text-[14px] leading-[20px] text-[#121212] pl-[16px] relative before:content-[''] before:absolute before:left-[0] before:top-[8px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#343A6F]"
                                        >
                                          {rationale}
                                        </li>
                                      ))}
                                      <li className="text-[14px] leading-[20px] text-[#121212] pl-[16px] relative before:content-[''] before:absolute before:left-[0] before:top-[8px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#343A6F]">
                                        <span className="font-['Rubik:Medium',sans-serif]">Correct</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Item Metadata Box - Full Width Below */}
                            <div className="bg-[#E7EBF4] rounded-[8px] p-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                              <div className="flex items-start justify-between gap-[24px]">
                                <h5 className="font-['Rubik:Medium',sans-serif] text-[18px] leading-[24px] text-[#343A6F]">
                                  Item Metadata
                                </h5>
                                <div className="flex items-start gap-[24px]">
                                  <div>
                                    <p className="text-[14px] leading-[16px] text-[#707070] mb-[6px] font-['Rubik:Medium',sans-serif]">
                                      Bloom's Taxonomy
                                    </p>
                                    <p className="text-[16px] leading-[24px] text-[#121212]">
                                      {question.bloomsTaxonomy}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-[14px] leading-[16px] text-[#707070] mb-[6px] font-['Rubik:Medium',sans-serif]">
                                      Item Concept Level
                                    </p>
                                    <p className="text-[16px] leading-[24px] text-[#121212]">
                                      {question.itemConceptLevel}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'by-student' && (() => {
              const totalQuestions = questions.length;
              const questionColumnWidth = 36; // Width per question column
              const fixedColumnsWidth = 200 + 64 + 64 + 24; // Student name + % correct + scale + padding
              const scrollableWidth = (questionColumnWidth * totalQuestions) + 128; // Questions + padding
              const minTableWidth = fixedColumnsWidth + scrollableWidth;

              return (
                <div>
                  {/* Subheader */}
                  <div className="mb-[24px]">
                    <h4 className="font-['Rubik:Medium',sans-serif] text-[20px] leading-[32px] text-[#121212] mb-[4px]">
                      Students Responses by Question
                    </h4>
                    <p className="text-[16px] leading-[24px] text-[#121212]">
                      View question results by clicking on question number. Click on each student to view individual student reports.
                    </p>
                  </div>

                  {/* Top Horizontal Scrollbar - Now visible on mobile too */}
                  <div 
                    ref={topScrollerRef}
                    className="overflow-x-auto overflow-y-hidden mb-[8px] rounded-[4px]"
                    style={{ height: '24px', background: '#f7f7f7', padding: '4px' }}
                  >
                    <div style={{ width: `${minTableWidth}px`, height: '16px' }} />
                  </div>

                  {/* Scrollable Table Container with sticky left column and max-height */}
                  <div className="border border-[#d4d4d4] rounded-[8px] overflow-hidden">
                    <div 
                      ref={tableScrollerRef}
                      className="overflow-x-auto overflow-y-auto max-h-[600px]"
                    >
                      <div className="relative" style={{ minWidth: `${minTableWidth}px` }}>
                        {/* Table Header */}
                        <div className="sticky top-0 z-20 flex items-center bg-white border-b border-[#d4d4d4] shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
                          {/* Sticky Left Column Header - Narrower on mobile */}
                          <div 
                            className="sticky z-30 bg-white px-[8px] sm:px-[12px] py-[16px] shrink-0 w-[140px] sm:w-[200px]"
                            style={{ 
                              insetInlineStart: '0',
                              borderInlineEnd: '1px solid #d4d4d4'
                            }}
                          >
                            <div className="flex items-center gap-[4px]">
                              <p className="text-[14px] leading-[16px] text-[#707070] capitalize truncate">Student Name</p>
                              <ArrowUpDown className="size-[16px] text-[#707070] shrink-0"/>
                            </div>
                          </div>
                          
                          {/* Scrollable Headers */}
                          <div className="flex items-center gap-[8px] sm:gap-[12px] px-[8px] sm:px-[12px] py-[16px]">
                            <div className="w-[56px] sm:w-[64px] flex items-center justify-center gap-[4px] shrink-0">
                              <p className="text-[12px] sm:text-[14px] leading-[16px] text-[#707070] capitalize">% correct</p>
                            </div>
                            <div className="w-[56px] sm:w-[64px] flex items-center justify-center gap-[4px] shrink-0">
                              <p className="text-[12px] sm:text-[14px] leading-[16px] text-[#707070] capitalize">scale</p>
                              <ArrowUpDown className="size-[16px] text-[#707070]"/>
                            </div>
                            {questions.map((_, idx) => (
                              <div key={idx} className="w-[36px] shrink-0 flex justify-center">
                                <button
                                  onClick={() => setSelectedQuestionModal({ studentId: '', questionId: idx + 1 })}
                                  className="bg-[#f7f7f7] border border-[#d4d4d4] rounded-[8px] px-[6px] sm:px-[8px] py-[6px] hover:bg-[#343A6F] transition-colors group"
                                >
                                  <p className="text-[12px] leading-[14px] text-[#343A6F] group-hover:text-white text-center capitalize font-['Rubik:Medium',sans-serif]">Q{idx + 1}</p>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Table Rows */}
                        <div>
                          {students.map((student) => (
                            <div 
                              key={student.id}
                              className="flex items-center border-b border-[#d4d4d4] bg-white hover:bg-[#f7f7f7] transition-colors"
                            >
                              {/* Sticky Left Column with Student Info - RTL aware */}
                              <div 
                                className="sticky z-10 bg-white px-[8px] sm:px-[12px] py-[16px] shrink-0 w-[140px] sm:w-[200px] group-hover:bg-[#f7f7f7] transition-colors"
                                style={{
                                  insetInlineStart: '0',
                                  borderInlineEnd: '1px solid #d4d4d4'
                                }}
                              >
                                <Link 
                                  to={`/student-report/${student.id}`}
                                  className="font-['Rubik:Medium',sans-serif] text-[14px] sm:text-[16px] leading-[20px] text-[#121212] hover:text-[#343A6F] hover:underline block mb-[2px] truncate"
                                >
                                  {student.name}
                                </Link>
                                <p className="text-[12px] leading-[14px] text-[#8A8A8A] truncate">{student.id}</p>
                              </div>
                              
                              {/* Scrollable Content */}
                              <div className="flex items-center gap-[8px] sm:gap-[12px] px-[8px] sm:px-[12px] py-[16px]">
                                {/* % Correct */}
                                <div className="w-[56px] sm:w-[64px] shrink-0 flex justify-center">
                                  <p className="text-[14px] sm:text-[16px] leading-[24px] text-[#121212]">{student.percentCorrect}%</p>
                                </div>
                                
                                {/* Scale Circle */}
                                <div className="w-[56px] sm:w-[64px] shrink-0 flex justify-center">
                                  <div 
                                    className="size-[20px] rounded-full shrink-0"
                                    style={{ backgroundColor: getPerformanceColor(student.percentCorrect) }}
                                  />
                                </div>
                                
                                {/* Question Answers */}
                                {student.answers.map((answer, qIdx) => {
                                  const isCorrect = answer === correctAnswers[qIdx];
                                  return (
                                    <div key={qIdx} className="w-[36px] shrink-0 flex justify-center relative">
                                      <button
                                        onClick={(e) => {
                                          const rect = e.currentTarget.getBoundingClientRect();
                                          setTooltipPosition({ top: rect.top, left: rect.left + rect.width / 2 });
                                          setSelectedQuestionModal({ studentId: student.id, questionId: qIdx + 1 });
                                        }}
                                        className="w-[32px] h-[20px] rounded-[4px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#343A6F] focus:ring-offset-1 transition-all hover:scale-105"
                                        style={{ 
                                          backgroundColor: isCorrect 
                                            ? 'rgba(56, 142, 60, 0.3)' 
                                            : 'rgba(198, 40, 40, 0.3)'
                                        }}
                                        aria-label={`${student.name}, Question ${qIdx + 1}: ${isCorrect ? 'Correct' : `Incorrect, answered ${answer}`}`}
                                      >
                                        {isCorrect ? (
                                          <Check className="size-[16px] text-[#121212] pointer-events-none" />
                                        ) : (
                                          <span className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[16px] text-[#121212] pointer-events-none">
                                            {answer}
                                          </span>
                                        )}
                                      </button>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#343A6F] mt-[48px]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-[16px] text-white">
            <div className="flex gap-[24px] sm:gap-[32px] text-[14px] leading-[16px]">
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Safe Exam Browser</a>
              <a href="#" className="hover:underline">Respondus Browser</a>
              <a href="#" className="hover:underline">Support</a>
            </div>
            <p className="text-[14px] leading-[16px] text-[#C4C8E1]">Terms | Copyright © 2025</p>
          </div>
        </div>
      </div>

      {/* Tooltip for Student Cells */}
      {selectedQuestionModal && tooltipPosition && (() => {
        const question = questions[selectedQuestionModal.questionId - 1];
        const correctAnswer = question.options.find(opt => opt.isCorrect);
        const student = students.find(s => s.id === selectedQuestionModal.studentId);
        const studentAnswer = student?.answers[selectedQuestionModal.questionId - 1];
        
        // Tooltip for student cell clicks
        if (student) {
          const isCorrect = studentAnswer === correctAnswer?.letter;
          return (
            <>
              {/* Invisible overlay to close tooltip */}
              <div 
                className="fixed inset-0 z-[100]"
                onClick={() => {
                  setSelectedQuestionModal(null);
                  setTooltipPosition(null);
                }}
              />
              {/* Tooltip */}
              <div 
                className="fixed z-[101] bg-white rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-[#d4d4d4] p-[12px] w-[220px]"
                style={{
                  left: `${tooltipPosition.left}px`,
                  top: `${tooltipPosition.top - 120}px`,
                  transform: 'translateX(-50%)'
                }}
              >
                {/* Arrow pointing down */}
                <div 
                  className="absolute w-[12px] h-[12px] bg-white border-r border-b border-[#d4d4d4] rotate-45"
                  style={{
                    left: '50%',
                    bottom: '-6px',
                    transform: 'translateX(-50%)'
                  }}
                />
                
                <div className="relative z-10 bg-white">
                  <p className="text-[14px] leading-[16px] text-[#121212] font-['Rubik:Medium',sans-serif] mb-[8px]">
                    {student.name}
                  </p>
                  <div className="space-y-[4px]">
                    <p className="text-[12px] leading-[14px] text-[#707070]">
                      <span className="font-['Rubik:Medium',sans-serif]">Question:</span> {selectedQuestionModal.questionId}
                    </p>
                    <p className="text-[12px] leading-[14px] text-[#707070]">
                      <span className="font-['Rubik:Medium',sans-serif]">Student Answer:</span>{' '}
                      <span className={isCorrect ? 'text-[#388E3C]' : 'text-[#C62828]'}>
                        {studentAnswer}
                      </span>
                    </p>
                    <p className="text-[12px] leading-[14px] text-[#707070]">
                      <span className="font-['Rubik:Medium',sans-serif]">Correct Answer:</span>{' '}
                      <span className="text-[#388E3C]">
                        {correctAnswer?.letter}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        }
        return null;
      })()}

      {/* Question Details Modal - For Q Header Buttons */}
      {selectedQuestionModal && !tooltipPosition && (() => {
        const question = questions[selectedQuestionModal.questionId - 1];
        const distractor = getMostCommonDistractor(selectedQuestionModal.questionId - 1);
        const correctAnswer = question.options.find(opt => opt.isCorrect);
        const student = students.find(s => s.id === selectedQuestionModal.studentId);
        
        // Only show modal for Q header clicks (when there's no tooltip position)
        if (!student) {
          return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[16px]">
              <div className="bg-white rounded-[8px] max-w-[800px] w-full max-h-[90vh] overflow-y-auto" ref={modalRef}>
                {/* Modal Header */}
                <div className="flex items-center justify-between p-[16px] border-b border-[#e0e0e0] sticky top-0 bg-white z-10">
                  <h3 className="text-[18px] leading-[24px] text-[#707070] font-['Rubik:Medium',sans-serif]">Measurable Standard</h3>
                  <button 
                    onClick={() => setSelectedQuestionModal(null)}
                    className="text-[#707070] hover:text-[#121212] transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="size-[24px]"/>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-[16px]">
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-2 gap-[16px] mb-[16px]">
                    {/* Left Column */}
                    <div>
                      {/* Standard Title */}
                      <h4 className="text-[16px] leading-[24px] text-[#121212] font-['Rubik:Medium',sans-serif] mb-[8px]">
                        {question.standard}. {question.standardName}
                      </h4>

                      {/* Measurable Standard Description */}
                      <p className="text-[14px] leading-[20px] text-[#121212] mb-[12px]">
                        {question.measurableStandard}
                      </p>

                      {/* Question Info */}
                      <div className="bg-[#F5F5F5] rounded-[8px] p-[12px] mb-[12px]">
                        <h5 className="text-[14px] leading-[20px] text-[#121212] font-['Rubik:Medium',sans-serif] mb-[8px]">
                          Question {question.id}
                        </h5>
                        
                        <p className="text-[12px] leading-[16px] text-[#121212] mb-[4px]">
                          <span className="font-['Rubik:Medium',sans-serif]">% of Correct Responses:</span> {question.percentCorrect}%
                        </p>

                        <p className="text-[12px] leading-[16px] text-[#121212] mb-[4px]">
                          <span className="font-['Rubik:Medium',sans-serif]">Assessment:</span> Edify Math 8 Interim Assessment 1
                        </p>

                        <p className="text-[12px] leading-[16px] text-[#121212]">
                          <span className="font-['Rubik:Medium',sans-serif]">Date Score Posted:</span> 06-Aug-2025
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Correct Answer */}
                      <div className="mb-[12px]">
                        <p className="text-[14px] leading-[20px] text-[#388E3C] font-['Rubik:Medium',sans-serif] mb-[8px]">
                          Correct answer: {correctAnswer?.letter}
                        </p>

                        {/* Question Text */}
                        <p className="text-[14px] leading-[20px] text-[#121212] mb-[8px]">
                          {question.questionText}
                        </p>

                        {/* Answer Options */}
                        <div className="space-y-[4px] mb-[12px]">
                          {question.options.map((option) => (
                            <p 
                              key={option.letter}
                              className={`text-[14px] leading-[20px] ${
                                option.isCorrect 
                                  ? 'text-[#388E3C] font-[\'Rubik:Medium\',sans-serif]' 
                                  : 'text-[#121212]'
                              }`}
                            >
                              {option.letter}. {option.text}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Most Common Distractor Box - Always visible */}
                      {distractor.letter && (
                        <div className="bg-[#343A6F] rounded-[8px] p-[16px]">
                          <div className="flex items-start justify-between gap-[12px] mb-[4px]">
                            <p className="text-[16px] leading-[24px] text-white font-['Rubik:Medium',sans-serif]">
                              Most Common Distractor
                            </p>
                            <p className="text-[32px] leading-[40px] text-white font-['Rubik:Medium',sans-serif]">
                              {distractor.letter}
                            </p>
                          </div>
                          <p className="text-[14px] leading-[20px] text-white">
                            <span className="font-['Rubik:Medium',sans-serif]">% of Students Selecting:</span> {distractor.percentage}%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })()}

      {/* Export Modal */}
      {showExportModal && (
        <ExportModal
          onClose={() => setShowExportModal(false)}
          onExport={(format) => {
            console.log(`Exporting in ${format} format`);
            setShowExportModal(false);
          }}
        />
      )}

      {/* Print Modal */}
      {showPrintModal && (
        <PrintModal
          onClose={() => setShowPrintModal(false)}
          onPrint={() => {
            console.log('Printing report');
            setShowPrintModal(false);
          }}
        />
      )}
    </div>
  );
}