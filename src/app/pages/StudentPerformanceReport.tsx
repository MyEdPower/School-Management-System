import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Printer, ChevronDown, ChevronUp, FileCheck, Percent, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { HorizontalFilterRow, HorizontalFilterRowData, HorizontalFilterRowOptions } from '../components/HorizontalFilterRow';
import { ExportModal } from '../components/ExportModal';
import { PrintModal } from '../components/PrintModal';
import { StickyReportHeader } from '../components/StickyReportHeader';
import { IconCalendar, IconBell, IconClock } from '../../imports/03Iconography-2242-784';
import { Check } from 'lucide-react';

export function StudentPerformanceReport() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [expandedStandards, setExpandedStandards] = useState<Set<string>>(new Set());
  const [showExportModal, setShowExportModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [showStandardsInfoTooltip, setShowStandardsInfoTooltip] = useState(false);
  
  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<HorizontalFilterRowData>({
    subject: 'Math',
    course: 'Math 8',
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: 'Middle School 1',
    classSection: 'Kumar, Shabana Period 1',
    student: 'Boateng, Glory',
  });

  // Horizontal Filter Row configuration
  const filterInitialValues: HorizontalFilterRowData = {
    subject: 'Math',
    course: 'Math 8',
    assessment: 'Edify Math 8 Interim Assessment 1',
    school: 'Middle School 1',
    classSection: 'Kumar, Shabana Period 1',
    student: 'Boateng, Glory',
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

  // DOK data - only populated if available
  const dokData = [
    {
      level: 'DOK 1',
      name: 'Recall',
      description: 'Basic recall and recognition',
      correct: 7,
      incorrect: 1,
      notAttempted: 0,
      total: 8,
      percentage: 87.5
    },
    {
      level: 'DOK 2',
      name: 'Skill/Concept',
      description: 'Application and analysis',
      correct: 8,
      incorrect: 2,
      notAttempted: 0,
      total: 10,
      percentage: 80
    },
    {
      level: 'DOK 3',
      name: 'Strategic Thinking',
      description: 'Complex reasoning and planning',
      correct: 7,
      incorrect: 2,
      notAttempted: 1,
      total: 10,
      percentage: 70
    }
  ];

  // Set to null or empty array if DOK data is not available
  const hasDokData = dokData && dokData.length > 0;

  // Standards data with correct/incorrect/not attempted
  const standards = [
    {
      id: '8.EE.A.2',
      title: '[8.EE] [8.EE.A.2] Expressions and Equations',
      fullTitle: '[8.EE] [8.EE.A.2] Expressions and Equations: Questions Assessed',
      description: 'Use square root and cube root symbols to represent solutions to equations of the form x² = p and x³ = p, where p is a positive rational number. Evaluate square roots of small perfect squares and cube roots of small perfect cubes. Know that √2 is irrational.',
      correct: 4,
      incorrect: 1,
      notAttempted: 0,
      percentage: 80,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'B',
          questionText: 'What would be the seventh term in the square root perfect below?',
          questionDetail: '√4, √7, √10, √13, ...',
          choices: ['A. √25', 'B. √22', 'C. √49', 'D. √64']
        },
        { 
          id: 2, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'C',
          questionText: 'Evaluate the square root expression.',
          questionDetail: '√144 + √81',
          choices: ['A. 21', 'B. 15', 'C. 18', 'D. 24']
        },
        { 
          id: 3, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'D',
          questionText: 'Which value is irrational?',
          questionDetail: 'Select the irrational number from the options.',
          choices: ['A. √16', 'B. √25', 'C. √36', 'D. √50']
        },
        { 
          id: 4, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'B',
          questionText: 'Solve for x in the equation.',
          questionDetail: 'x² = 64',
          choices: ['A. x = 6', 'B. x = ±8', 'C. x = 32', 'D. x = 128']
        },
        { 
          id: 5, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'Evaluate the cube root.',
          questionDetail: '∛125',
          choices: ['A. 3', 'B. 4', 'C. 5', 'D. 6']
        }
      ]
    },
    {
      id: '8.EE.B.6',
      title: '[8.EE] [8.EE.B.6] Expressions and Equations',
      fullTitle: '[8.EE] [8.EE.B.6] Expressions and Equations: Questions Assessed',
      description: 'Use similar triangles to explain why the slope m is the same between any two distinct points on a non-vertical line in the coordinate plane.',
      correct: 5,
      incorrect: 2,
      notAttempted: 0,
      percentage: 71.4,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Which of the following is an irrational number?',
          questionDetail: 'Select the correct answer.',
          choices: ['A. π', 'B. 0.5', 'C. 2/3', 'D. 0.25']
        },
        { 
          id: 2, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'B',
          questionText: 'Convert 3/8 to decimal form.',
          questionDetail: 'Express as a decimal.',
          choices: ['A. 0.25', 'B. 0.375', 'C. 0.5', 'D. 0.625']
        },
        { 
          id: 3, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'A',
          questionText: 'Which number is between √8 and √10?',
          questionDetail: 'Estimate the value.',
          choices: ['A. 2.5', 'B. 2.8', 'C. 3.0', 'D. 3.5']
        },
        { 
          id: 4, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'D',
          questionText: 'Identify the rational number.',
          questionDetail: 'Select the rational number from the options.',
          choices: ['A. √3', 'B. π', 'C. e', 'D. 0.333...']
        },
        { 
          id: 5, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Compare √50 and 7.',
          questionDetail: 'Which is larger?',
          choices: ['A. √50', 'B. 7', 'C. They are equal', 'D. Cannot determine']
        },
        { 
          id: 6, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'C',
          questionText: 'Approximate √20 to the nearest tenth.',
          questionDetail: 'Round to one decimal place.',
          choices: ['A. 4.3', 'B. 4.5', 'C. 4.7', 'D. 5.0']
        },
        { 
          id: 7, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'Which represents a repeating decimal?',
          questionDetail: 'Identify the repeating decimal.',
          choices: ['A. 0.5', 'B. 0.75', 'C. 0.666...', 'D. 0.125']
        }
      ]
    },
    {
      id: '8.F.A.1',
      title: '[8.F] [8.F.A.1] Functions',
      fullTitle: '[8.F] [8.F.A.1] Functions: Questions Assessed',
      description: 'Understand that a function is a rule that assigns to each input exactly one output. The graph of a function is the set of ordered pairs consisting of an input and the corresponding output.',
      correct: 3,
      incorrect: 1,
      notAttempted: 0,
      percentage: 75,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Which relation represents a function?',
          questionDetail: 'Select the correct mapping.',
          choices: ['A. {(1,2), (2,3), (3,4)}', 'B. {(1,2), (1,3), (2,4)}', 'C. {(1,1), (1,2), (1,3)}', 'D. {(2,1), (2,2), (3,3)}']
        },
        { 
          id: 2, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'B',
          questionText: 'What is f(3) if f(x) = 2x + 1?',
          questionDetail: 'Evaluate the function.',
          choices: ['A. 5', 'B. 7', 'C. 9', 'D. 11']
        },
        { 
          id: 3, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'Which graph represents a function?',
          questionDetail: 'Use the vertical line test.',
          choices: ['A. Circle', 'B. Parabola opening left', 'C. Line', 'D. Sideways parabola']
        },
        { 
          id: 4, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'A',
          questionText: 'Find the domain of f(x) = 1/x',
          questionDetail: 'What values can x take?',
          choices: ['A. All real numbers', 'B. x > 0', 'C. x < 0', 'D. All real numbers except 0']
        }
      ]
    },
    {
      id: '8.F.B.4',
      title: '[8.F] [8.F.B.4] Functions',
      fullTitle: '[8.F] [8.F.B.4] Functions: Questions Assessed',
      description: 'Construct a function to model a linear relationship between two quantities. Determine the rate of change and initial value of the function from a description of a relationship or from two (x, y) values.',
      correct: 3,
      incorrect: 2,
      notAttempted: 0,
      percentage: 60,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'What is the sum of interior angles in a triangle?',
          questionDetail: 'Express in degrees.',
          choices: ['A. 180°', 'B. 360°', 'C. 90°', 'D. 270°']
        },
        { 
          id: 2, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'C',
          questionText: 'Find the missing angle in a triangle with angles 50° and 60°.',
          questionDetail: 'Calculate the third angle.',
          choices: ['A. 60°', 'B. 70°', 'C. 80°', 'D. 90°']
        },
        { 
          id: 3, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'What is an exterior angle?',
          questionDetail: 'Select the correct definition.',
          choices: ['A. Angle inside triangle', 'B. Angle at vertex', 'C. Angle formed outside triangle', 'D. Right angle']
        },
        { 
          id: 4, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'D',
          questionText: 'The exterior angle equals the sum of which angles?',
          questionDetail: 'Apply exterior angle theorem.',
          choices: ['A. All three interior', 'B. Adjacent interior', 'C. Opposite exterior', 'D. Two non-adjacent interior']
        },
        { 
          id: 5, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'B',
          questionText: 'Find the exterior angle if interior angles are 40° and 70°.',
          questionDetail: 'Calculate the exterior angle.',
          choices: ['A. 110°', 'B. 120°', 'C. 130°', 'D. 140°']
        }
      ]
    },
    {
      id: '8.G.B.7',
      title: '[8.G] [8.G.B.7] Geometry',
      fullTitle: '[8.G] [8.G.B.7] Geometry: Questions Assessed',
      description: 'Apply the Pythagorean Theorem to determine unknown side lengths in right triangles in real-world and mathematical problems in two and three dimensions.',
      correct: 3,
      incorrect: 2,
      notAttempted: 0,
      percentage: 60,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'A right triangle has legs of 3 cm and 4 cm. What is the hypotenuse?',
          questionDetail: 'Use the Pythagorean Theorem.',
          choices: ['A. 5 cm', 'B. 6 cm', 'C. 7 cm', 'D. 8 cm']
        },
        { 
          id: 2, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'C',
          questionText: 'Find the missing leg if hypotenuse is 13 and one leg is 5.',
          questionDetail: 'Calculate using a² + b² = c².',
          choices: ['A. 10', 'B. 12', 'C. 14', 'D. 15']
        },
        { 
          id: 3, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'Is a triangle with sides 5, 12, 13 a right triangle?',
          questionDetail: 'Check using the Pythagorean Theorem.',
          choices: ['A. No', 'B. Cannot determine', 'C. Yes', 'D. Only if angle given']
        },
        { 
          id: 4, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'A',
          questionText: 'A ladder leans against a wall. Base is 6 ft from wall, ladder is 10 ft. How high up the wall?',
          questionDetail: 'Apply Pythagorean Theorem to real-world problem.',
          choices: ['A. 7 ft', 'B. 7.5 ft', 'C. 8.5 ft', 'D. 8 ft']
        },
        { 
          id: 5, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Find the diagonal of a rectangle with length 8 and width 6.',
          questionDetail: 'Use the Pythagorean Theorem.',
          choices: ['A. 10', 'B. 12', 'C. 14', 'D. 16']
        }
      ]
    },
    {
      id: '8.G.C.9',
      title: '[8.G] [8.G.C.9] Geometry',
      fullTitle: '[8.G] [8.G.C.9] Geometry: Questions Assessed',
      description: 'Know the formulas for the volumes of cones, cylinders, and spheres and use them to solve real-world and mathematical problems.',
      correct: 4,
      incorrect: 2,
      notAttempted: 1,
      percentage: 57.1,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'What is the volume formula for a cylinder?',
          questionDetail: 'Select the correct formula.',
          choices: ['A. V = πr²h', 'B. V = (1/3)πr²h', 'C. V = (4/3)πr³', 'D. V = πrh']
        },
        { 
          id: 2, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'A',
          questionText: 'Find the volume of a cone with radius 3 cm and height 4 cm.',
          questionDetail: 'Use π ≈ 3.14.',
          choices: ['A. 36 cm³', 'B. 37.68 cm³', 'C. 113.04 cm³', 'D. 150.72 cm³']
        },
        { 
          id: 3, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'What is the volume of a sphere with radius 3?',
          questionDetail: 'Use the sphere volume formula.',
          choices: ['A. 27π', 'B. 32π', 'C. 36π', 'D. 48π']
        },
        { 
          id: 4, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'D',
          questionText: 'A cylinder has volume 100π. If radius is 5, what is the height?',
          questionDetail: 'Solve for h.',
          choices: ['A. 2', 'B. 3', 'C. 3.5', 'D. 4']
        },
        { 
          id: 5, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'How does the volume of a cone compare to a cylinder with same base and height?',
          questionDetail: 'Select the relationship.',
          choices: ['A. Cone is 1/3 of cylinder', 'B. They are equal', 'C. Cone is 1/2 of cylinder', 'D. Cone is 2/3 of cylinder']
        },
        { 
          id: 6, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'C',
          questionText: 'Find the volume of a sphere with diameter 6 cm.',
          questionDetail: 'Calculate using the formula.',
          choices: ['A. 288π cm³', 'B. 36π cm³', 'C. 72π cm³', 'D. 108π cm³']
        },
        { 
          id: 7, 
          status: 'not-attempted',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'Not Attempted',
          questionText: 'A cylindrical water tank has radius 2m and height 5m. What is its capacity?',
          questionDetail: 'Find the volume.',
          choices: ['A. 10π m³', 'B. 15π m³', 'C. 20π m³', 'D. 25π m³']
        }
      ]
    },
    {
      id: '8.NS.A.1',
      title: '[8.NS] [8.NS.A.1] The Number System',
      fullTitle: '[8.NS] [8.NS.A.1] The Number System: Questions Assessed',
      description: 'Know that numbers that are not rational are called irrational. Understand informally that every number has a decimal expansion; for rational numbers show that the decimal expansion repeats eventually.',
      correct: 5,
      incorrect: 2,
      notAttempted: 0,
      percentage: 71.4,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Which of the following is an irrational number?',
          questionDetail: 'Select the correct answer.',
          choices: ['A. π', 'B. 0.5', 'C. 2/3', 'D. 0.25']
        },
        { 
          id: 2, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'B',
          questionText: 'Convert 3/8 to decimal form.',
          questionDetail: 'Express as a decimal.',
          choices: ['A. 0.25', 'B. 0.375', 'C. 0.5', 'D. 0.625']
        },
        { 
          id: 3, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'A',
          questionText: 'Which number is between √8 and √10?',
          questionDetail: 'Estimate the value.',
          choices: ['A. 2.5', 'B. 2.8', 'C. 3.0', 'D. 3.5']
        },
        { 
          id: 4, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'D',
          questionText: 'Identify the rational number.',
          questionDetail: 'Select the rational number from the options.',
          choices: ['A. √3', 'B. π', 'C. e', 'D. 0.333...']
        },
        { 
          id: 5, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Compare √50 and 7.',
          questionDetail: 'Which is larger?',
          choices: ['A. √50', 'B. 7', 'C. They are equal', 'D. Cannot determine']
        },
        { 
          id: 6, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'C',
          questionText: 'Approximate √20 to the nearest tenth.',
          questionDetail: 'Round to one decimal place.',
          choices: ['A. 4.3', 'B. 4.5', 'C. 4.7', 'D. 5.0']
        },
        { 
          id: 7, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'Which represents a repeating decimal?',
          questionDetail: 'Identify the repeating decimal.',
          choices: ['A. 0.5', 'B. 0.75', 'C. 0.666...', 'D. 0.125']
        }
      ]
    },
    {
      id: '8.NS.A.2',
      title: '[8.NS] [8.NS.A.2] The Number System',
      fullTitle: '[8.NS] [8.NS.A.2] The Number System: Questions Assessed',
      description: 'Use rational approximations of irrational numbers to compare the size of irrational numbers, locate them approximately on a number line diagram, and estimate the value of expressions.',
      correct: 3,
      incorrect: 2,
      notAttempted: 1,
      percentage: 50,
      questions: [
        { 
          id: 1, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Which value is closest to √50?',
          questionDetail: 'Estimate the square root.',
          choices: ['A. 7.1', 'B. 6.5', 'C. 8.0', 'D. 7.5']
        },
        { 
          id: 2, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'C',
          questionText: 'Order these from least to greatest: √2, 1.5, π/2',
          questionDetail: 'Compare the values.',
          choices: ['A. π/2, √2, 1.5', 'B. √2, 1.5, π/2', 'C. 1.5, √2, π/2', 'D. √2, π/2, 1.5']
        },
        { 
          id: 3, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'C',
          studentAnswer: 'C',
          questionText: 'Locate √18 on a number line. Which integers is it between?',
          questionDetail: 'Find the range.',
          choices: ['A. 3 and 4', 'B. 5 and 6', 'C. 4 and 5', 'D. 6 and 7']
        },
        { 
          id: 4, 
          status: 'incorrect',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'D',
          studentAnswer: 'A',
          questionText: 'Estimate √30 + √20 to the nearest whole number.',
          questionDetail: 'Calculate the approximate sum.',
          choices: ['A. 9', 'B. 10', 'C. 11', 'D. 10']
        },
        { 
          id: 5, 
          status: 'correct',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'A',
          studentAnswer: 'A',
          questionText: 'Which irrational number is between 2 and 3?',
          questionDetail: 'Select the correct value.',
          choices: ['A. √7', 'B. √10', 'C. √3', 'D. √15']
        },
        { 
          id: 6, 
          status: 'not-attempted',
          assessment: 'Math 8 Interim Assessment 1',
          datePosted: '05-Aug-23',
          correctAnswer: 'B',
          studentAnswer: 'Not Attempted',
          questionText: 'Approximate the value of 2√5.',
          questionDetail: 'Estimate using √5 ≈ 2.24.',
          choices: ['A. 4.0', 'B. 4.5', 'C. 5.0', 'D. 5.5']
        }
      ]
    }
  ];

  // Student performance data for line chart
  const students = [
    { id: 1, name: 'Student 1', score: 95, performanceLevel: 'Advanced' },
    { id: 2, name: 'Student 2', score: 88, performanceLevel: 'Proficient' },
    { id: 3, name: 'Student 3', score: 92, performanceLevel: 'Advanced' },
    { id: 4, name: 'Student 4', score: 78, performanceLevel: 'Developing' },
    { id: 5, name: 'Student 5', score: 85, performanceLevel: 'Proficient' },
    { id: 6, name: 'Student 6', score: 72, performanceLevel: 'Developing' },
    { id: 7, name: 'Student 7', score: 90, performanceLevel: 'Advanced' },
    { id: 8, name: 'Student 8', score: 68, performanceLevel: 'Developing' },
    { id: 9, name: 'Student 9', score: 82, performanceLevel: 'Proficient' },
    { id: 10, name: 'Student 10', score: 76, performanceLevel: 'Developing' },
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

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#1565C0';
    if (score >= 80) return '#388E3C';
    if (score >= 60) return '#5F1980';
    if (score >= 40) return '#F64C13';
    return '#B40B08';
  };

  // Helper function to extract teacher name from class section
  const getTeacherName = (classSection: string) => {
    // Format: "LastName, FirstName Period X" -> extract "LastName, FirstName"
    const match = classSection.match(/^(.+?)\s+Period/);
    return match ? match[1] : classSection;
  };

  // Helper function to generate student ID based on student name
  const getStudentId = (studentName: string) => {
    // Simple mapping for demo purposes
    const studentIds: Record<string, string> = {
      'Boateng, Glory': 'STU-2024-001',
      'Cage, Carey': 'STU-2024-002',
      'Gash, Penny': 'STU-2024-003',
      'Fischer, Gilbert': 'STU-2024-004',
      'Griffin, Jean': 'STU-2024-005',
    };
    return studentIds[studentName] || 'STU-2024-000';
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

      {/* Assessment Title - Outside Navy Background */}
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] bg-white border-b border-[#e0e0e0]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
          <div>
            <h2 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] text-[#121212] mb-[8px]">
              Mathematics Assessment
            </h2>
            <p className="text-[16px] text-[#707070]">Edify Math 8 Interim Assessment 1</p>
          </div>
          <div className="flex gap-[12px] flex-wrap">
            {/* Export Button */}
            <button
              className="px-[24px] py-[10px] border border-[#d4d4d4] rounded-[100px] text-[16px] text-[#121212] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors flex items-center gap-[8px]"
              onClick={() => setShowExportModal(true)}
            >
              <Download className="size-[20px]" strokeWidth={1.5} />
              <span>Export</span>
            </button>

            {/* Print Button */}
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

      {/* Four-Column Layout: Assessment Details Cards */}
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px] bg-white">
          {/* Student Name - Top Left */}
          <div className="mb-[16px]">
            <div className="flex items-center gap-[8px]">
              <span className="text-[13px] sm:text-[14px] text-[#707070]">Student:</span>
              <span className="font-['Rubik:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#343A6F]">
                {typeof selectedFilters.student === 'string' ? selectedFilters.student : selectedFilters.student?.[0] || 'N/A'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] lg:gap-[20px]">
            {/* Test Details - Featured Dark Card */}
            <div className="bg-[#343A6F] rounded-[8px] p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-white opacity-5 rounded-full -mr-[40px] -mt-[40px]"></div>
              <div className="relative z-10 space-y-[8px]">
                <div className="flex items-center gap-[12px] pb-[8px] border-b border-white/20">
                  <div className="size-[20px] text-white shrink-0"><IconCalendar /></div>
                  <div className="flex items-center gap-[8px] flex-1">
                    <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white opacity-90">Date Tested:</p>
                    <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-white">15-Mar-2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-[12px] pb-[8px] border-b border-white/20">
                  <div className="size-[20px] text-white shrink-0"><IconBell /></div>
                  <div className="flex items-center gap-[8px] flex-1">
                    <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white opacity-90">Test Duration:</p>
                    <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-white">60 Minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-[12px] pt-[4px]">
                  <div className="size-[20px] text-white shrink-0"><IconClock /></div>
                  <div className="flex items-center gap-[8px] flex-1">
                    <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white opacity-90">Student Time:</p>
                    <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-white">47 Minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Raw Score Card */}
            <div className="bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center">
                    <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
                      <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
                        <FileCheck className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
                          34/40
                        </p>
                        <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
                          Raw Score
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Percentage Score Card */}
                  <div className="bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center">
                    <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
                      <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
                        <Percent className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
                          85%
                        </p>
                        <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
                          Percentage Score
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Class Average Card */}
                  <div className="bg-white rounded-[8px] p-[16px] sm:p-[20px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0px_4px_8px_2px_rgba(0,0,0,0.2)] border-l-[6px] border-[#343A6F] flex items-center">
                    <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
                      <div className="flex items-center justify-center size-[48px] sm:size-[56px] rounded-[8px] bg-[#C4C8E1] shrink-0">
                        <BarChart3 className="size-[24px] sm:size-[28px] text-[#343A6F]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-['Rubik:Medium',sans-serif] text-[32px] sm:text-[40px] text-[#343A6F] leading-none mb-[4px]">
                          77.5%
                        </p>
                        <h3 className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#121212]">
                          Class Average
                        </h3>
                      </div>
                    </div>
                  </div>
          </div>

        </div>

      {/* Content */}
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">

        {/* Standards Bar Chart - Student Achievement Section with Sticky Header */}
        <div className="mb-[24px]">
          {/* Section Title Bar */}
          <div className="bg-[#343A6F] px-[16px] sm:px-[24px] py-[12px] sm:py-[16px] rounded-t-[8px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] sm:text-[20px] text-white">
                Student Achievement
              </h3>
              <div className="relative">
                <button 
                  className="size-[24px] flex items-center justify-center text-white hover:text-[#C4C8E1]"
                  onMouseEnter={() => setShowStandardsInfoTooltip(true)}
                  onMouseLeave={() => setShowStandardsInfoTooltip(false)}
                >
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 8.5v5.5M10 6v0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {showStandardsInfoTooltip && (
                  <div className="absolute left-0 top-full mt-[8px] w-[320px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-lg p-[12px] z-10">
                    <p className="text-[13px] text-[#121212] mb-[8px]">
                      This section shows student performance on each standard assessed. Click to expand details and view individual question responses.
                    </p>
                    <p className="text-[13px] text-[#707070] italic">
                      Click on any question number to see the student's answer, correct answer, and question details.
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

          {/* Sticky Table Header */}
          <div className="sticky top-[240px] sm:top-[260px] lg:top-[280px] z-20 bg-white">
            {/* Legend for Correct/Incorrect */}
            <div className="flex flex-wrap items-center gap-[16px] px-[16px] sm:px-[24px] pt-[16px] pb-[12px] border-x border-t border-[#e0e0e0] bg-white">
              <div className="flex items-center gap-[24px]">
                <div className="flex items-center gap-[8px]">
                  <div className="size-[14px] rounded-[4px] bg-[#388E3C]"></div>
                  <span className="text-[14px] text-[#121212]">Correct</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="size-[14px] rounded-[4px] bg-[#B40B08]"></div>
                  <span className="text-[14px] text-[#121212]">Incorrect</span>
                </div>
              </div>
            </div>

            {/* Table Header */}
            <div className="bg-[#f7f7f7] border border-[#e0e0e0]">
              <div className="hidden lg:grid grid-cols-[1fr_100px_400px_120px] gap-[16px] px-[16px] sm:px-[24px] py-[12px]">
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">Standard</div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] text-center"># of Items</div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">Performance Breakdown</div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] text-center">% Correct</div>
              </div>
              <div className="lg:hidden grid grid-cols-1 px-[16px] sm:px-[24px] py-[12px]">
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070]">Standards Performance</div>
              </div>
            </div>
          </div>

          {/* Standards Table Body */}
          <div className="bg-white border-x border-b border-[#e0e0e0] rounded-b-[8px]">
            <div className="p-[16px] sm:px-[24px]">
              {/* Standards List with horizontal bars */}
              <div className="space-y-[16px]">
                {standards.map((standard) => {
                  const isExpanded = expandedStandards.has(standard.id);
                  const total = standard.correct + standard.incorrect + standard.notAttempted;
                  const possiblePoints = total;
                  const score = standard.correct;
                  const correctPercent = (standard.correct / total) * 100;
                  const incorrectPercent = (standard.incorrect / total) * 100;
                  const notAttemptedPercent = (standard.notAttempted / total) * 100;
                  
                  // Get performance color based on percentage
                  const getPerformanceColor = (percentage: number) => {
                    if (percentage >= 90) return '#1565C0';
                    if (percentage >= 80) return '#388E3C';
                    if (percentage >= 60) return '#5F1980';
                    if (percentage >= 40) return '#F64C13';
                    return '#B40B08';
                  };

                  return (
                    <div key={standard.id} className="border-b border-[#e0e0e0] pb-[16px] last:border-0">
                      <div
                        className="cursor-pointer hover:bg-[#f7f7f7] transition-colors p-[8px] rounded-[4px]"
                        onClick={() => toggleStandard(standard.id)}
                      >
                        {/* Desktop Table row layout */}
                        <div className="hidden lg:grid grid-cols-[1fr_100px_400px_120px] gap-[16px] items-center">
                          {/* Standard Column */}
                          <div className="flex items-center gap-[8px]">
                            {isExpanded ? (
                              <ChevronDown className="size-[20px] text-[#707070] shrink-0" />
                            ) : (
                              <ChevronDown className="size-[20px] text-[#707070] shrink-0 -rotate-90" />
                            )}
                            <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">
                              {standard.id} {standard.title}
                            </h4>
                          </div>

                          {/* # of Items Column */}
                          <div className="text-center">
                            <p className="text-[16px] text-[#121212] font-['Rubik:Medium',sans-serif]">{total}</p>
                          </div>

                          {/* Points Earned Column - Performance Bar */}
                          <div className="flex items-center">
                            <div className="w-full h-[32px] bg-[#e0e0e0] rounded-[4px] overflow-hidden flex">
                              {correctPercent > 0 && (
                                <div 
                                  className="bg-[#388E3C] h-full flex items-center justify-center text-white text-[14px] font-['Rubik:Medium',sans-serif]" 
                                  style={{ width: `${correctPercent}%` }}
                                >
                                  {correctPercent > 15 && standard.correct}
                                </div>
                              )}
                              {incorrectPercent > 0 && (
                                <div 
                                  className="bg-[#B40B08] h-full flex items-center justify-center text-white text-[14px] font-['Rubik:Medium',sans-serif]" 
                                  style={{ width: `${incorrectPercent}%` }}
                                >
                                  {incorrectPercent > 15 && standard.incorrect}
                                </div>
                              )}
                              {notAttemptedPercent > 0 && (
                                <div 
                                  className="bg-[#707070] h-full flex items-center justify-center text-white text-[14px] font-['Rubik:Medium',sans-serif]" 
                                  style={{ width: `${notAttemptedPercent}%` }}
                                >
                                  {notAttemptedPercent > 15 && standard.notAttempted}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Score Column */}
                          <div className="flex flex-col items-center gap-[4px]">
                            <div className="flex items-center gap-[6px]">
                              <div 
                                className="size-[12px] rounded-full shrink-0" 
                                style={{ backgroundColor: getPerformanceColor(standard.percentage) }}
                              />
                              <p className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212]">
                                {standard.percentage}%
                              </p>
                            </div>
                            <p className="text-[12px] text-[#707070]">Correct</p>
                          </div>
                        </div>

                        {/* Mobile/Tablet Stacked Layout */}
                        <div className="lg:hidden space-y-[12px]">
                          <div className="flex items-start gap-[8px]">
                            {isExpanded ? (
                              <ChevronDown className="size-[20px] text-[#707070] shrink-0 mt-[2px]" />
                            ) : (
                              <ChevronDown className="size-[20px] text-[#707070] shrink-0 -rotate-90 mt-[2px]" />
                            )}
                            <div className="flex-1">
                              <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[8px]">
                                {standard.id} {standard.title}
                              </h4>
                              <div className="flex items-center justify-between mb-[12px]">
                                <span className="text-[14px] text-[#707070]">Items: {total}</span>
                                <div className="flex items-center gap-[6px]">
                                  <div 
                                    className="size-[12px] rounded-full shrink-0" 
                                    style={{ backgroundColor: getPerformanceColor(standard.percentage) }}
                                  />
                                  <p className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212]">
                                    {standard.percentage}%
                                  </p>
                                </div>
                              </div>
                              <div className="w-full h-[32px] bg-[#e0e0e0] rounded-[4px] overflow-hidden flex">
                                {correctPercent > 0 && (
                                  <div 
                                    className="bg-[#388E3C] h-full flex items-center justify-center text-white text-[14px] font-['Rubik:Medium',sans-serif]" 
                                    style={{ width: `${correctPercent}%` }}
                                  >
                                    {correctPercent > 15 && standard.correct}
                                  </div>
                                )}
                                {incorrectPercent > 0 && (
                                  <div 
                                    className="bg-[#B40B08] h-full flex items-center justify-center text-white text-[14px] font-['Rubik:Medium',sans-serif]" 
                                    style={{ width: `${incorrectPercent}%` }}
                                  >
                                    {incorrectPercent > 15 && standard.incorrect}
                                  </div>
                                )}
                                {notAttemptedPercent > 0 && (
                                  <div 
                                    className="bg-[#707070] h-full flex items-center justify-center text-white text-[14px] font-['Rubik:Medium',sans-serif]" 
                                    style={{ width: `${notAttemptedPercent}%` }}
                                  >
                                    {notAttemptedPercent > 15 && standard.notAttempted}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="ml-[8px] sm:ml-[32px] mt-[12px] space-y-[16px]">
                          {/* Standard Description */}
                          <div className="p-[16px] bg-[#f7f7f7] rounded-[4px]">
                            <h5 className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212] mb-[8px]">
                              {standard.fullTitle}
                            </h5>
                            <p className="text-[14px] text-[#707070] leading-[1.5] mb-[16px]">
                              {standard.description}
                            </p>

                            {/* Question Buttons */}
                            <div className="flex flex-wrap gap-[8px]">
                              {standard.questions.map((question) => {
                                const questionKey = `${standard.id}-q${question.id}`;
                                const isQuestionExpanded = expandedQuestion === questionKey;

                                return (
                                  <div key={question.id} className="relative">
                                    <button
                                      className={`w-[44px] h-[24px] rounded-[8px] flex items-center justify-center font-['Rubik:Regular',sans-serif] text-[14px] leading-[24px] text-[#121212] focus:outline-none focus:ring-0 active:outline-none select-none hover:opacity-80 transition-opacity ${
                                        question.status === 'correct' 
                                          ? 'bg-[rgba(56,142,60,0.3)]' 
                                          : 'bg-[rgba(198,40,40,0.3)]'
                                      }`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleQuestion(questionKey);
                                      }}
                                    >
                                      <span className="pointer-events-none">
                                        Q{question.id}
                                      </span>
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Question Details Dropdowns */}
                          {standard.questions.map((question) => {
                            const questionKey = `${standard.id}-q${question.id}`;
                            const isQuestionExpanded = expandedQuestion === questionKey;

                            if (!isQuestionExpanded) return null;

                            return (
                              <div key={questionKey} className="bg-white border-2 border-[#C4C8E1] rounded-[8px] p-[16px]">
                                <div className="flex items-start justify-between mb-[12px]">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-[12px] mb-[8px]">
                                      <span className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">
                                        Question {question.id}
                                      </span>
                                      <span className={`text-[14px] font-['Rubik:Medium',sans-serif] ${question.status === 'correct' ? 'text-[#388E3C]' : 'text-[#B40B08]'}`}>
                                        {question.status === 'correct' ? '✓ Correct' : '✗ Incorrect'}
                                      </span>
                                    </div>
                                    <p className="text-[13px] text-[#707070]">
                                      Assessment: <span className="text-[#121212]">{question.assessment}</span>
                                    </p>
                                    <p className="text-[13px] text-[#707070]">
                                      Date Score Posted: <span className="text-[#121212]">{question.datePosted}</span>
                                    </p>
                                  </div>
                                  <button
                                    className="text-[#707070] hover:text-[#121212]"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleQuestion(questionKey);
                                    }}
                                  >
                                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                                      <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 10 10)"/>
                                    </svg>
                                  </button>
                                </div>

                                <div className="border-t border-[#e0e0e0] pt-[12px] space-y-[12px]">
                                  <div>
                                    <p className="text-[14px] text-[#121212] mb-[4px]">
                                      <span className="font-['Rubik:Bold',sans-serif]">Correct answer:</span> {question.correctAnswer}
                                    </p>
                                    <p className={`text-[14px] mb-[4px] ${question.status === 'incorrect' ? 'text-[#B40B08]' : 'text-[#121212]'}`}>
                                      <span className="font-['Rubik:Bold',sans-serif]">Your answer {question.status === 'correct' ? 'is correct' : 'is incorrect'}:</span> {question.studentAnswer}
                                    </p>
                                  </div>

                                  <div>
                                    <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212] mb-[4px]">
                                      Question {question.id}: {question.questionText}
                                    </p>
                                    <p className="text-[14px] text-[#707070] mb-[8px]">
                                      {question.questionDetail}
                                    </p>
                                    <div className="space-y-[4px]">
                                      {question.choices.map((choice, idx) => (
                                        <p key={idx} className="text-[14px] text-[#121212]">
                                          {choice}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Depth of Knowledge (DOK) Section with Sticky Header */}
        {hasDokData && (
          <div>
            {/* Section Title Bar */}
            <div className="bg-[#343A6F] px-[16px] sm:px-[24px] py-[12px] sm:py-[16px] rounded-t-[8px]">
              <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] sm:text-[20px] text-white">
                Depth of Knowledge (DOK)
              </h3>
            </div>

            {/* DOK Chart Body */}
            <div className="bg-white border-x border-b border-[#e0e0e0] rounded-b-[8px]">
              <div className="p-[16px] sm:p-[24px]">
                {/* Legend */}
                <div className="flex items-center gap-[24px] mb-[48px] sm:mb-[24px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[14px] rounded-[4px] bg-[#388E3C]"></div>
                    <span className="text-[14px] text-[#121212]">Correct</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[14px] rounded-[4px] bg-[#B40B08]"></div>
                    <span className="text-[14px] text-[#121212]">Incorrect</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[14px] rounded-[4px] bg-[#707070]"></div>
                    <span className="text-[14px] text-[#121212]">Not Attempted</span>
                  </div>
                </div>

                {/* Vertical Stacked Bar Chart */}
                <div className="relative flex flex-row items-start justify-around gap-[12px] sm:gap-[32px] h-[480px] sm:h-[480px] border-b border-[#e0e0e0] pb-[8px] pt-[56px]">
                  {/* Background Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none" style={{ height: '220px', bottom: '92px', left: '0', right: '0' }}>
                    <div className="w-full h-[1px] bg-[#e0e0e0] opacity-40"></div>
                    <div className="w-full h-[1px] bg-[#e0e0e0] opacity-40"></div>
                    <div className="w-full h-[1px] bg-[#e0e0e0] opacity-40"></div>
                    <div className="w-full h-[1px] bg-[#e0e0e0] opacity-40"></div>
                    <div className="w-full h-[1px] bg-[#e0e0e0] opacity-40"></div>
                  </div>

                  {dokData.map((dok) => {
                    const correctPercent = (dok.correct / dok.total) * 100;
                    const incorrectPercent = (dok.incorrect / dok.total) * 100;
                    const notAttemptedPercent = (dok.notAttempted / dok.total) * 100;
                    const totalBarHeight = correctPercent + incorrectPercent + notAttemptedPercent;

                    return (
                      <div key={dok.level} className="flex flex-col items-center gap-[12px] flex-1 max-w-[200px] relative z-10">
                        {/* Percentage Label - Now positioned as sibling before bar */}
                        <div className="text-center mb-[12px]">
                          <span className="font-['Rubik:Bold',sans-serif] text-[18px] sm:text-[20px] text-[#343A6F]">
                            {dok.percentage}%
                          </span>
                        </div>
                        
                        {/* Vertical Stacked Bar */}
                        <div className="w-full flex flex-col-reverse relative" style={{ height: '220px' }}>
                          <div 
                            className="w-full bg-[#e0e0e0] rounded-t-[4px] flex flex-col-reverse overflow-hidden"
                            style={{ height: '100%' }}
                          >
                            {/* Correct section (bottom) */}
                            {correctPercent > 0 && (
                              <div
                                className="bg-[#388E3C] w-full flex items-center justify-center text-white text-[13px] sm:text-[14px] font-['Rubik:Medium',sans-serif]"
                                style={{ height: `${correctPercent}%` }}
                              >
                                {correctPercent >= 10 && dok.correct}
                              </div>
                            )}
                            {/* Incorrect section (middle) */}
                            {incorrectPercent > 0 && (
                              <div
                                className="bg-[#B40B08] w-full flex items-center justify-center text-white text-[13px] sm:text-[14px] font-['Rubik:Medium',sans-serif]"
                                style={{ height: `${incorrectPercent}%` }}
                              >
                                {incorrectPercent >= 10 && dok.incorrect}
                              </div>
                            )}
                            {/* Not Attempted section (top) */}
                            {notAttemptedPercent > 0 && (
                              <div
                                className="bg-[#707070] w-full flex items-center justify-center text-white text-[13px] sm:text-[14px] font-['Rubik:Medium',sans-serif]"
                                style={{ height: `${notAttemptedPercent}%` }}
                              >
                                {notAttemptedPercent >= 10 && dok.notAttempted}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* DOK Level Label at Bottom */}
                        <div className="text-center">
                          <p className="font-['Rubik:Medium',sans-serif] text-[13px] sm:text-[14px] text-[#121212] mb-[4px]">
                            {dok.level}
                          </p>
                          <p className="font-['Rubik:Medium',sans-serif] text-[12px] sm:text-[13px] text-[#121212]">
                            {dok.name}
                          </p>
                          <p className="text-[11px] sm:text-[12px] text-[#707070] mt-[4px]">
                            {dok.correct}/{dok.total} correct
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      {/* End of Content */}

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
            console.log(`Exporting in ${format} format`);
            setShowExportModal(false);
          }}
          description="This will export all standards in an expanded view with complete question details from the Student Achievement section."
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
          description="This will print the current screen view as a PDF document."
        />
      )}
    </div>
  );
}