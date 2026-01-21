// Mock data for EdAssess system

export interface Assessment {
  id: string;
  title: string;
  subject: string;
  grade: string;
  batteryGroup: string;
  progress: number;
  total: number;
  dueDate: string;
  status: 'assigned' | 'in-progress' | 'completed';
  color: string;
  startDate?: string;
  endDate?: string;
  author: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: 'Smith';
  grade: string;
  classId: string;
  assessments: {
    assessmentId: string;
    status: 'not-started' | 'in-progress' | 'completed';
    score?: number;
    completedDate?: string;
  }[];
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  teacher: string;
  teacherId: string;
  subject: string;
  studentCount: number;
  assessmentCount: number;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
  district: string;
  classes?: string[];
  status: 'active' | 'inactive';
  lastLogin?: string;
}

export const assessments: Assessment[] = [
  // Week 1 (May 4-10) - Math Assessments
  {
    id: '1',
    title: 'Algebra 1 EOC - Part A',
    subject: 'Math',
    grade: 'Grade 8-9',
    batteryGroup: 'Battery Group 1',
    progress: 30,
    total: 30,
    dueDate: '07-May-26',
    status: 'completed',
    color: '#03B0E8',
    startDate: '05-May-26',
    endDate: '07-May-26',
    author: 'Hunter Anderson'
  },
  {
    id: '2',
    title: 'Geometry Practice Test',
    subject: 'Math',
    grade: 'Grade 9-10',
    batteryGroup: 'Battery Group 2',
    progress: 25,
    total: 25,
    dueDate: '09-May-26',
    status: 'completed',
    color: '#03B0E8',
    startDate: '08-May-26',
    endDate: '09-May-26',
    author: 'Sarah Miller'
  },
  {
    id: '3',
    title: 'Pre-Calculus Midterm',
    subject: 'Math',
    grade: 'Grade 11',
    batteryGroup: 'Battery Group 3',
    progress: 20,
    total: 30,
    dueDate: '10-May-26',
    status: 'assigned',
    color: '#03B0E8',
    startDate: '09-May-26',
    endDate: '10-May-26',
    author: 'Michael Chen'
  },
  // Week 1 (May 4-10) - Science Assessments
  {
    id: '4',
    title: 'Biology 1 EOC - Lab Component',
    subject: 'Science',
    grade: 'Grade 9-10',
    batteryGroup: 'Battery Group 1',
    progress: 12,
    total: 28,
    dueDate: '06-May-26',
    status: 'in-progress',
    color: '#9266E5',
    startDate: '05-May-26',
    endDate: '06-May-26',
    author: 'Hunter Anderson'
  },
  {
    id: '5',
    title: 'Chemistry Unit 3 Assessment',
    subject: 'Science',
    grade: 'Grade 10-11',
    batteryGroup: 'Battery Group 2',
    progress: 5,
    total: 22,
    dueDate: '09-May-26',
    status: 'assigned',
    color: '#9266E5',
    startDate: '08-May-26',
    endDate: '09-May-26',
    author: 'Sarah Miller'
  },
  {
    id: '6',
    title: 'Physics Spring Exam',
    subject: 'Science',
    grade: 'Grade 11-12',
    batteryGroup: 'Battery Group 3',
    progress: 18,
    total: 30,
    dueDate: '08-May-26',
    status: 'in-progress',
    color: '#9266E5',
    startDate: '06-May-26',
    endDate: '08-May-26',
    author: 'Michael Chen'
  },
  // Week 1 (May 4-10) - English Assessments
  {
    id: '7',
    title: 'B.E.S.T. Writing Assessment',
    subject: 'English',
    grade: 'Grade 9',
    batteryGroup: 'Battery Group 1',
    progress: 22,
    total: 28,
    dueDate: '08-May-26',
    status: 'in-progress',
    color: '#EB8900',
    startDate: '05-May-26',
    endDate: '08-May-26',
    author: 'Hunter Anderson'
  },
  {
    id: '8',
    title: 'American Literature Final',
    subject: 'English',
    grade: 'Grade 11',
    batteryGroup: 'Battery Group 2',
    progress: 14,
    total: 25,
    dueDate: '10-May-26',
    status: 'in-progress',
    color: '#EB8900',
    startDate: '07-May-26',
    endDate: '10-May-26',
    author: 'Sarah Miller'
  },
  {
    id: '9',
    title: 'Grammar & Composition Quiz',
    subject: 'English',
    grade: 'Grade 8',
    batteryGroup: 'Battery Group 3',
    progress: 0,
    total: 20,
    dueDate: '06-May-26',
    status: 'assigned',
    color: '#EB8900',
    startDate: '06-May-26',
    endDate: '06-May-26',
    author: 'Michael Chen'
  },
  // Week 2 (May 11-17) - History Assessments
  {
    id: '10',
    title: 'U.S. History EOC',
    subject: 'History',
    grade: 'Grade 10-11',
    batteryGroup: 'Battery Group 1',
    progress: 8,
    total: 30,
    dueDate: '14-May-26',
    status: 'in-progress',
    color: '#EC5E74',
    startDate: '12-May-26',
    endDate: '14-May-26',
    author: 'Hunter Anderson'
  },
  {
    id: '11',
    title: 'World History Unit 4',
    subject: 'History',
    grade: 'Grade 9',
    batteryGroup: 'Battery Group 2',
    progress: 0,
    total: 25,
    dueDate: '16-May-26',
    status: 'assigned',
    color: '#EC5E74',
    startDate: '15-May-26',
    endDate: '16-May-26',
    author: 'Sarah Miller'
  },
  // Week 2 (May 11-17) - Math Assessments
  {
    id: '12',
    title: 'Algebra 2 Comprehensive',
    subject: 'Math',
    grade: 'Grade 10-11',
    batteryGroup: 'Battery Group 3',
    progress: 12,
    total: 32,
    dueDate: '17-May-26',
    status: 'in-progress',
    color: '#03B0E8',
    startDate: '12-May-26',
    endDate: '17-May-26',
    author: 'Michael Chen'
  },
  {
    id: '13',
    title: 'Statistics Final',
    subject: 'Math',
    grade: 'Grade 11-12',
    batteryGroup: 'Battery Group 1',
    progress: 0,
    total: 28,
    dueDate: '15-May-26',
    status: 'assigned',
    color: '#03B0E8',
    startDate: '13-May-26',
    endDate: '15-May-26',
    author: 'Hunter Anderson'
  },
  // Week 2 (May 11-17) - Science Assessments
  {
    id: '14',
    title: 'Environmental Science Project',
    subject: 'Science',
    grade: 'Grade 10',
    batteryGroup: 'Battery Group 2',
    progress: 15,
    total: 20,
    dueDate: '16-May-26',
    status: 'in-progress',
    color: '#9266E5',
    startDate: '11-May-26',
    endDate: '16-May-26',
    author: 'Sarah Miller'
  },
  // Week 3 (May 18-24) - Civics Assessments
  {
    id: '15',
    title: 'FCLE - Civics Literacy Exam',
    subject: 'Civics',
    grade: 'Grade 7',
    batteryGroup: 'Battery Group 1',
    progress: 0,
    total: 30,
    dueDate: '21-May-26',
    status: 'assigned',
    color: '#F2CC05',
    startDate: '19-May-26',
    endDate: '21-May-26',
    author: 'Michael Chen'
  },
  {
    id: '16',
    title: 'Government & Politics Test',
    subject: 'Civics',
    grade: 'Grade 12',
    batteryGroup: 'Battery Group 2',
    progress: 5,
    total: 25,
    dueDate: '23-May-26',
    status: 'in-progress',
    color: '#F2CC05',
    startDate: '20-May-26',
    endDate: '23-May-26',
    author: 'Hunter Anderson'
  },
  // Week 3 (May 18-24) - English Assessments
  {
    id: '17',
    title: 'English Literature Comprehensive',
    subject: 'English',
    grade: 'Grade 12',
    batteryGroup: 'Battery Group 3',
    progress: 18,
    total: 35,
    dueDate: '24-May-26',
    status: 'in-progress',
    color: '#EB8900',
    startDate: '18-May-26',
    endDate: '24-May-26',
    author: 'Sarah Miller'
  },
  {
    id: '18',
    title: 'Creative Writing Portfolio',
    subject: 'English',
    grade: 'Grade 10',
    batteryGroup: 'Battery Group 1',
    progress: 0,
    total: 15,
    dueDate: '22-May-26',
    status: 'assigned',
    color: '#EB8900',
    startDate: '20-May-26',
    endDate: '22-May-26',
    author: 'Michael Chen'
  }
];

export const students: Student[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    grade: 'Grade 8',
    classId: '1',
    assessments: [
      { assessmentId: '1', status: 'in-progress', score: 75 },
      { assessmentId: '7', status: 'completed', score: 92, completedDate: '2025-06-15' }
    ]
  },
  {
    id: '2',
    firstName: 'Emily',
    lastName: 'Johnson',
    grade: 'Grade 9',
    classId: '2',
    assessments: [
      { assessmentId: '2', status: 'completed', score: 88, completedDate: '2025-06-10' },
      { assessmentId: '8', status: 'in-progress', score: 65 }
    ]
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Williams',
    grade: 'Grade 8',
    classId: '1',
    assessments: [
      { assessmentId: '1', status: 'not-started' },
      { assessmentId: '9', status: 'in-progress', score: 70 }
    ]
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Brown',
    grade: 'Grade 10',
    classId: '3',
    assessments: [
      { assessmentId: '8', status: 'completed', score: 95, completedDate: '2025-06-12' }
    ]
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Jones',
    grade: 'Grade 9',
    classId: '2',
    assessments: [
      { assessmentId: '2', status: 'in-progress', score: 80 },
      { assessmentId: '6', status: 'not-started' }
    ]
  }
];

export const classes: Class[] = [
  {
    id: '1',
    name: 'Math 8A',
    grade: 'Grade 8',
    teacher: 'Hunter Anderson',
    teacherId: '1',
    subject: 'Math',
    studentCount: 25,
    assessmentCount: 3
  },
  {
    id: '2',
    name: 'Reading 9B',
    grade: 'Grade 9',
    teacher: 'Sarah Miller',
    teacherId: '2',
    subject: 'Reading',
    studentCount: 28,
    assessmentCount: 4
  },
  {
    id: '3',
    name: 'Biology 10A',
    grade: 'Grade 10',
    teacher: 'Michael Chen',
    teacherId: '3',
    subject: 'Science',
    studentCount: 22,
    assessmentCount: 2
  },
  {
    id: '4',
    name: 'English 8C',
    grade: 'Grade 8',
    teacher: 'Hunter Anderson',
    teacherId: '1',
    subject: 'English',
    studentCount: 24,
    assessmentCount: 3
  },
  {
    id: '5',
    name: 'US History 11A',
    grade: 'Grade 11',
    teacher: 'Rebecca Oja',
    teacherId: '4',
    subject: 'History',
    studentCount: 26,
    assessmentCount: 5
  },
  {
    id: '6',
    name: 'Chemistry 12B',
    grade: 'Grade 12',
    teacher: 'Jon Bruneti',
    teacherId: '5',
    subject: 'Science',
    studentCount: 20,
    assessmentCount: 3
  },
  {
    id: '7',
    name: 'Algebra 2',
    grade: 'Grade 10',
    teacher: 'Ryan Hobb',
    teacherId: '6',
    subject: 'Math',
    studentCount: 27,
    assessmentCount: 4
  },
  {
    id: '8',
    name: 'World Literature',
    grade: 'Grade 11',
    teacher: 'Sarah Miller',
    teacherId: '2',
    subject: 'Reading',
    studentCount: 23,
    assessmentCount: 2
  },
  {
    id: '9',
    name: 'Career Tech 9A',
    grade: 'Grade 9',
    teacher: 'Michael Chen',
    teacherId: '3',
    subject: 'Career/Tech',
    studentCount: 30,
    assessmentCount: 3
  }
];

export const users: User[] = [
  {
    id: '1',
    firstName: 'Hunter',
    lastName: 'Anderson',
    email: 'hunter.anderson@edify.edu',
    role: 'admin',
    district: 'Edify District',
    classes: ['1', '4'],
    status: 'active',
    lastLogin: '2025-06-18'
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Miller',
    email: 'sarah.miller@edify.edu',
    role: 'teacher',
    district: 'Edify District',
    classes: ['2'],
    status: 'active',
    lastLogin: '2025-06-17'
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@edify.edu',
    role: 'teacher',
    district: 'Edify District',
    classes: ['3'],
    status: 'active',
    lastLogin: '2025-06-16'
  },
  {
    id: '4',
    firstName: 'Jennifer',
    lastName: 'Davis',
    email: 'jennifer.davis@edify.edu',
    role: 'teacher',
    district: 'Edify District',
    classes: [],
    status: 'active',
    lastLogin: '2025-06-15'
  },
  {
    id: '5',
    firstName: 'Robert',
    lastName: 'Wilson',
    email: 'robert.wilson@edify.edu',
    role: 'admin',
    district: 'Edify District',
    classes: [],
    status: 'active',
    lastLogin: '2025-06-14'
  }
];

export const getAssessmentStats = () => {
  const assigned = assessments.filter(a => a.status === 'assigned').length;
  const inProgress = assessments.filter(a => a.status === 'in-progress').length;
  const completed = assessments.filter(a => a.status === 'completed').length;
  
  return { assigned, inProgress, completed, total: assessments.length };
};

export const getClassById = (id: string) => classes.find(c => c.id === id);
export const getAssessmentById = (id: string) => assessments.find(a => a.id === id);
export const getUserById = (id: string) => users.find(u => u.id === id);
export const getStudentsByClassId = (classId: string) => students.filter(s => s.classId === classId);