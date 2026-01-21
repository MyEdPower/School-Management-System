import React, { useState } from 'react';
import { 
  Bell, 
  Moon, 
  ChevronDown, 
  FileText, 
  BarChart2, 
  TrendingUp, 
  BookOpen, 
  Lightbulb, 
  Archive, 
  Play,
  LayoutGrid,
  List,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Settings,
  LogOut,
  User,
  X,
  Gamepad2,
  Music,
  Globe,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Assets ---
const imgProfileBoy = "https://images.unsplash.com/photo-1644966825640-bf597f873b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxNCUyMHllYXIlMjBvbGQlMjBib3klMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5MDA1OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgProfileFox = "https://images.unsplash.com/photo-1644222540305-b6df73364861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZm94JTIwaWxsdXN0cmF0aW9uJTIwY2lyY2xlfGVufDF8fHx8MTc2OTAwODA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgBrandLogo = "figma:asset/9ab59f47957b436f3532fe8fda05e18d75720f61.png";
const imgDecorativeIcons = "figma:asset/9d2c3aece513adda1b27b67e3183e8a0446fc7a9.png";
const imgStar = "figma:asset/ca25bf4e220d1df640ee02504adff2d9600df9a1.png";
const imgRocket = "figma:asset/92d7a9eb8649b6298cf1443352214889ddd78ee4.png";

// --- Types ---
type Theme = '6-16' | '3-5' | 'K-3';
type AssignmentStatus = 'Not Started' | 'In Progress' | 'Completed';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate?: string;
  completedDate?: string;
  status: AssignmentStatus;
  type: 'Test' | 'Quiz' | 'Assessment' | 'Unit Test';
  parts?: { current: number; total: number };
  isLockdown?: boolean;
  score?: string;
}

// --- Mock Data ---
const ASSIGNMENTS: Assignment[] = [
  {
    id: '1',
    title: 'Math Chapter 5 Quiz',
    subject: 'Math 101',
    dueDate: '21-Jan-2026',
    status: 'Not Started',
    type: 'Quiz'
  },
  {
    id: '2',
    title: 'Reading Comprehension',
    subject: 'English Language Arts',
    dueDate: '22-Jan-2026',
    status: 'In Progress',
    type: 'Assessment',
    isLockdown: true
  },
  {
    id: '3',
    title: 'History Unit 3 Exam',
    subject: 'Social Studies',
    completedDate: '20-Jan-2026',
    status: 'Completed',
    type: 'Unit Test',
    score: '92%'
  },
  {
    id: '4',
    title: 'Biology Midterm Review',
    subject: 'Biology',
    dueDate: '25-Jan-2026',
    status: 'Not Started',
    type: 'Quiz'
  },
  {
    id: '5',
    title: 'Chemistry Lab Safety',
    subject: 'Chemistry',
    dueDate: '26-Jan-2026',
    status: 'Not Started',
    type: 'Quiz'
  },
  {
    id: '6',
    title: 'Geography World Map',
    subject: 'Social Studies',
    dueDate: '28-Jan-2026',
    status: 'Not Started',
    type: 'Assessment'
  },
  {
    id: '7',
    title: 'Physics Motion Quiz',
    subject: 'Physics',
    dueDate: '29-Jan-2026',
    status: 'Not Started',
    type: 'Quiz'
  },
  {
    id: 'mp-1',
    title: 'Science Unit Test - Part A',
    subject: 'Science Lab',
    dueDate: '24-Jan-2026',
    status: 'Not Started',
    type: 'Unit Test',
    isLockdown: true,
    parts: { current: 1, total: 3 }
  },
  {
    id: 'mp-2',
    title: 'Science Unit Test - Part B',
    subject: 'Science Lab',
    dueDate: '24-Jan-2026',
    status: 'Not Started',
    type: 'Unit Test',
    isLockdown: true,
    parts: { current: 2, total: 3 }
  },
  {
    id: 'mp-3',
    title: 'Science Unit Test - Part C',
    subject: 'Science Lab',
    dueDate: '24-Jan-2026',
    status: 'Not Started',
    type: 'Unit Test',
    isLockdown: true,
    parts: { current: 3, total: 3 }
  }
];

// --- Components ---

const StatusBadge = ({ status, theme }: { status: AssignmentStatus, theme: Theme }) => {
  const isKids = theme === '3-5';
  const isK3 = theme === 'K-3';
  
  const styles = {
    'Not Started': 'bg-[#8A8A8A] text-white',
    'In Progress': 'bg-[#EA580C] text-white',
    'Completed': 'bg-[#16A34A] text-white'
  };

  const icons = {
    'Not Started': <Clock className={`${isK3 ? 'w-5 h-5' : isKids ? 'w-4 h-4' : 'w-3 h-3'} mr-1.5 text-white`} />,
    'In Progress': <AlertCircle className={`${isK3 ? 'w-5 h-5' : isKids ? 'w-4 h-4' : 'w-3 h-3'} mr-1.5 text-white`} />,
    'Completed': <CheckCircle2 className={`${isK3 ? 'w-5 h-5' : isKids ? 'w-4 h-4' : 'w-3 h-3'} mr-1.5 text-white`} />
  };

  if (isK3) {
    return (
      <div className={`flex items-center px-4 py-2 rounded-full font-bold ${styles[status]} text-[16px]`}>
        {icons[status]}
        {status}
      </div>
    );
  }

  return (
    <div className={`flex items-center px-3 py-1 rounded-full font-medium ${styles[status]} ${isKids ? 'text-[14px] px-4 py-1.5' : 'text-[12px]'}`}>
      {icons[status]}
      {status}
    </div>
  );
};

const ToolCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color,
  theme 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  color: string,
  theme: Theme
}) => {
  const isKids = theme === '3-5';
  const isK3 = theme === 'K-3';

  // K-3 Custom Copy Overrides
  const k3Content: Record<string, { title: string, desc: string }> = {
    'My Tests': { title: 'My Tests', desc: 'Take your tests!' },
    'My Results': { title: 'How I Did', desc: 'See your scores!' },
    'My Progress': { title: 'My Journey', desc: 'Watch yourself grow!' },
    'My Reviews': { title: 'Learn More', desc: 'Look at your work!' },
    'Lessons': { title: 'Fun Lessons', desc: 'Learn new things!' },
    'Archive': { title: 'Old Work', desc: 'Your old tests' },
  };

  const displayTitle = isK3 && k3Content[title] ? k3Content[title].title : title;
  const displayDesc = isK3 && k3Content[title] ? k3Content[title].desc : description;

  return (
    <motion.div 
      whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className={`bg-white border flex flex-col h-full relative overflow-hidden group cursor-pointer
        ${isK3 
          ? 'rounded-[16px] p-6 border-2 border-[#E5E5E5] min-h-[220px]' 
          : isKids 
            ? 'rounded-[12px] p-5 border border-[#E5E5E5]' 
            : 'rounded-lg p-4 border border-[#E5E5E5]'
        }
      `}
    >
      <div className={`absolute bottom-0 left-0 w-full ${isK3 ? 'h-[8px]' : 'h-[6px]'}`} style={{ backgroundColor: color }}></div>
      
      <div className="flex justify-between items-start mb-3">
        <div className={`rounded-lg bg-opacity-10 ${isK3 ? 'p-4 rounded-xl' : isKids ? 'p-3' : 'p-2'}`} style={{ backgroundColor: `${color}20` }}>
          <Icon className={`${isK3 ? 'w-8 h-8' : isKids ? 'w-7 h-7' : 'w-6 h-6'}`} style={{ color: color }} />
        </div>
        {title === 'My Tests' && (
          <span className={`flex items-center justify-center rounded-full bg-[#EA580C] text-white font-bold
            ${isK3 ? 'w-8 h-8 text-base' : 'w-6 h-6 text-xs'}
          `}>
            6
          </span>
        )}
      </div>
      
      <h3 className={`font-semibold text-[#1C1917] font-['Rubik'] mb-1 
        ${isK3 ? 'text-[24px] mb-2' : isKids ? 'text-[18px]' : 'text-[16px]'}
      `}>
        {displayTitle}
      </h3>
      <p className={`text-gray-500 font-['Rubik'] mb-4 flex-grow 
        ${isK3 ? 'text-[18px]' : isKids ? 'text-[14px]' : 'text-[12px]'}
      `}>
        {displayDesc}
      </p>
      
      <div className={`flex items-center text-[#343A6F] font-medium mt-auto group-hover:underline 
        ${isK3 ? 'text-[18px] font-bold' : isKids ? 'text-[15px]' : 'text-[14px]'}
      `}>
        {isK3 ? 'Go!' : 'Launch'} <ChevronDown className={`ml-1 -rotate-90 ${isK3 ? 'w-5 h-5 stroke-[3px]' : 'w-4 h-4'}`} />
      </div>
    </motion.div>
  );
};

const AssignmentCard = ({ assignment, theme }: { assignment: Assignment, theme: Theme }) => {
  const isCompleted = assignment.status === 'Completed';
  const isKids = theme === '3-5';
  const isK3 = theme === 'K-3';

  // Simplified logic for K-3
  const displayDueDate = isK3 ? 'Friday' : assignment.dueDate;
  const lockdownText = isK3 ? 'Special Browser Needed' : 'Lockdown Browser Needed';

  return (
    <div className={`bg-white flex flex-col h-full relative
      ${isK3 
        ? 'rounded-[16px] p-6 border-2 border-[#E5E5E5] min-h-[280px]' 
        : isKids 
          ? 'rounded-[12px] p-5 border border-[#E5E5E5] min-h-[180px]' 
          : 'rounded-lg p-4 border border-[#E5E5E5] min-h-[180px]'
      }
    `}>
      {/* Header Row */}
      <div className="flex justify-between items-start mb-3">
        <StatusBadge status={assignment.status} theme={theme} />
        
        {isCompleted ? (
          <div className={`text-gray-500 font-medium ${isK3 ? 'text-[16px]' : isKids ? 'text-[13px]' : 'text-[12px]'}`}>
            Completed <span className="text-[#1C1917] ml-1">{assignment.completedDate}</span>
          </div>
        ) : (
          <div className={`text-[#EA580C] font-medium uppercase tracking-wide 
            ${isK3 ? 'text-[16px] font-bold' : isKids ? 'text-[13px]' : 'text-[12px]'}
          `}>
            DUE <span className={`text-[#8A8A8A] ${isK3 ? 'normal-case font-semibold text-gray-600' : 'normal-case'} ml-1`}>{displayDueDate}</span>
          </div>
        )}
      </div>
      
      {/* Title & Subject */}
      <div className="mb-4">
        <h3 className={`font-semibold text-[#1C1917] font-['Rubik'] mb-1 line-clamp-1 
          ${isK3 ? 'text-[24px] leading-tight mb-2' : isKids ? 'text-[18px]' : 'text-[16px]'}
        `} title={assignment.title}>
          {assignment.title}
        </h3>
        <p className={`text-gray-500 font-['Rubik'] 
          ${isK3 ? 'text-[18px]' : isKids ? 'text-[15px]' : 'text-[14px]'}
        `}>
          {assignment.subject}
        </p>
      </div>
      
      {/* Middle Section (Notifications / Parts / Score) */}
      <div className="mt-auto mb-4 space-y-2">
        {assignment.isLockdown && !isCompleted && (
          <div className={`flex items-center text-[#EA580C] font-medium 
            ${isK3 ? 'text-[16px] bg-[#EA580C]/10 p-2 rounded-lg' : isKids ? 'text-[13px]' : 'text-[12px]'}
          `}>
            <span>{lockdownText}</span>
            <Download className={`${isK3 ? 'w-5 h-5' : 'w-3 h-3'} ml-1.5`} />
          </div>
        )}
        
        {assignment.parts && (
          <div className={`flex items-center text-gray-500 ${isK3 ? 'text-[16px]' : isKids ? 'text-[13px]' : 'text-[12px]'}`}>
            <span>Part {assignment.parts.current}/{assignment.parts.total}</span>
          </div>
        )}

        {isCompleted && assignment.score && (
          <div className={`flex justify-between items-center ${isK3 ? 'text-[18px] font-bold' : isKids ? 'text-[15px]' : 'text-[14px]'}`}>
            <span className="text-gray-600">Score</span>
            <span className="font-semibold text-[#1C1917]">{assignment.score}</span>
          </div>
        )}
      </div>

      {/* Button Action */}
      <div className="mt-auto">
        {isCompleted ? (
          <button className={`w-full bg-white hover:bg-gray-50 text-[#343A6F] border border-[#343A6F] flex items-center justify-center font-medium transition-colors 
            ${isK3 
              ? 'rounded-[16px] py-3 text-[18px] h-[52px] border-2' 
              : isKids 
                ? 'rounded-[12px] py-2.5 text-[15px] h-[40px]' 
                : 'rounded-md py-2 text-[14px]'
            }
          `}>
            Review
          </button>
        ) : assignment.status === 'In Progress' ? (
          <button className={`w-full bg-[#343A6F] hover:bg-[#2d3361] text-white flex items-center justify-center font-medium transition-colors
            ${isK3 
              ? 'rounded-[16px] py-3 text-[18px] h-[52px]' 
              : isKids 
                ? 'rounded-[12px] py-2.5 text-[15px] h-[40px]' 
                : 'rounded-md py-2 text-[14px]'
            }
          `}>
            <Play className={`${isK3 ? 'w-5 h-5' : 'w-4 h-4'} mr-2 fill-current`} /> Continue
          </button>
        ) : (
          <button className={`w-full bg-[#2D2A5F] hover:bg-[#1e1c40] text-white flex items-center justify-center font-medium transition-colors
             ${isK3 
              ? 'rounded-[16px] py-3 text-[18px] h-[52px]' 
              : isKids 
                ? 'rounded-[12px] py-2.5 text-[15px] h-[40px]' 
                : 'rounded-md py-2 text-[14px]'
            }
          `}>
            <Play className={`${isK3 ? 'w-5 h-5' : 'w-4 h-4'} mr-2 fill-current`} /> Start
          </button>
        )}
      </div>
    </div>
  );
};

export function StudentDashboard() {
  const [theme, setTheme] = useState<Theme>('3-5');
  const [avatar, setAvatar] = useState(imgProfileFox);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // When switching to Kids theme, default to Fox. When switching to older, default to Boy.
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setShowProfileMenu(false);
    if (newTheme === '3-5' || newTheme === 'K-3') {
        setAvatar(imgProfileFox);
    } else {
        setAvatar(imgProfileBoy);
    }
  };

  const isKids = theme === '3-5';
  const isK3 = theme === 'K-3';

  // --- Avatar Modal ---
  const AvatarModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[#1C1917]">Choose Your Avatar</h3>
          <button onClick={() => setShowAvatarModal(false)} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-4">Select an avatar or upload a profile photo</p>
          
          <div className="flex gap-2 mb-6">
            <button className="px-4 py-1.5 bg-[#343A6F] text-white text-sm font-medium rounded-full">Avatars</button>
            <button className="px-4 py-1.5 text-gray-600 hover:bg-gray-100 text-sm font-medium rounded-full border border-gray-200">Initials</button>
            <button className="px-4 py-1.5 text-gray-600 hover:bg-gray-100 text-sm font-medium rounded-full border border-gray-200">Upload Photo</button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
             {/* Use text emojis/icons for simplicity in this demo */}
             {['🦊', '🦉', '🐶', '🐱', '🐼', '🐯', '🦁', '🐸'].map((emoji, idx) => (
               <button 
                key={idx}
                onClick={() => {
                   // Just a mock action, in real app would store this
                   setShowAvatarModal(false);
                }}
                className="aspect-square flex items-center justify-center text-4xl bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors"
               >
                 {emoji}
               </button>
             ))}
             <button className="aspect-square flex items-center justify-center text-[#343A6F] bg-gray-50 hover:bg-blue-50 rounded-xl">
               <Gamepad2 className="w-8 h-8" />
             </button>
             <button className="aspect-square flex items-center justify-center text-[#343A6F] bg-gray-50 hover:bg-blue-50 rounded-xl">
               <Music className="w-8 h-8" />
             </button>
             <button className="aspect-square flex items-center justify-center text-[#343A6F] bg-gray-50 hover:bg-blue-50 rounded-xl">
               <Globe className="w-8 h-8" />
             </button>
             <button className="aspect-square flex items-center justify-center text-[#343A6F] bg-gray-50 hover:bg-blue-50 rounded-xl">
               <Bot className="w-8 h-8" />
             </button>
          </div>
          
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
             <button 
               onClick={() => setShowAvatarModal(false)}
               className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg text-sm"
             >
               Cancel
             </button>
             <button 
               onClick={() => setShowAvatarModal(false)}
               className="px-4 py-2 bg-[#343A6F] text-white font-medium rounded-lg hover:bg-[#2D3361] text-sm"
             >
               Save
             </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const mainBgColor = isK3 ? 'bg-[#FAF9F6]' : 'bg-[#FAFAFA]';

  return (
    <div className={`min-h-screen ${mainBgColor} font-['Rubik']`}>
      {showAvatarModal && <AvatarModal />}

      {/* Header */}
      <header className="bg-[#343A6F] text-white h-[64px] px-6 flex items-center justify-between shadow-md relative z-40">
        <div className="flex items-center gap-4">
          <div className="h-[40px] w-[120px] relative overflow-hidden">
             <img src={imgBrandLogo} alt="EdAssess" className="object-contain h-full w-full object-left" />
          </div>
          <div className="h-6 w-[1px] bg-white/20 hidden sm:block"></div>
          <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full hidden sm:block">
            K-12 Pathways
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 bg-[#2D3361] px-3 py-1.5 rounded-full border border-white/10">
            <Globe className="w-3.5 h-3.5 text-white/70" />
            <span className="text-xs font-medium text-white/90">
                {isK3 ? 'K-3 (Ages 5-8)' : isKids ? '3-5 (Ages 8-10)' : '6-16 (Ages 11+)'}
            </span>
          </div>

          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#EA580C] rounded-full text-[10px] font-bold flex items-center justify-center text-white border border-[#343A6F]">
              3
            </span>
          </div>
          
          <button className="text-white/80 hover:text-white transition-colors">
            <Moon className="w-5 h-5" />
          </button>

          <div className="relative pl-4 border-l border-white/10">
            <div 
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
                <div className={`relative w-9 h-9 rounded-full overflow-hidden border-2 bg-[#4B5385] 
                  ${(isKids || isK3) ? 'border-[#343A6F] ring-2 ring-white/20' : 'border-white/20'}
                `}>
                <img src={avatar} alt="Alex" className="w-full h-full object-cover" />
                </div>
                <div className="hidden sm:flex items-center gap-1 group">
                <span className="text-sm font-medium group-hover:text-white/90">Alex</span>
                <ChevronDown className="w-4 h-4 text-white/60" />
                </div>
            </div>

            {/* Profile Dropdown */}
            <AnimatePresence>
                {showProfileMenu && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 text-gray-800 origin-top-right overflow-hidden"
                    >
                        <div className="px-4 py-3 border-b border-gray-50">
                            <div className="font-semibold text-[#1C1917]">Alex Thompson</div>
                            <div className="text-xs text-gray-500">Student • Grade 4</div>
                        </div>

                        <div className="py-2 border-b border-gray-50">
                            <div className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Age Theme</div>
                            
                            <button 
                                onClick={() => handleThemeChange('K-3')}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 ${theme === 'K-3' ? 'bg-[#343A6F]/5 text-[#343A6F] font-medium' : ''}`}
                            >
                                <span>K-3 (Ages 5-8)</span>
                                {theme === 'K-3' && <CheckCircle2 className="w-4 h-4" />}
                            </button>
                            <button 
                                onClick={() => handleThemeChange('3-5')}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 ${theme === '3-5' ? 'bg-[#343A6F]/5 text-[#343A6F] font-medium' : ''}`}
                            >
                                <span>3-5 (Ages 8-10)</span>
                                {theme === '3-5' && <CheckCircle2 className="w-4 h-4" />}
                            </button>
                            <button 
                                onClick={() => handleThemeChange('6-16')}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 ${theme === '6-16' ? 'bg-[#343A6F]/5 text-[#343A6F] font-medium' : ''}`}
                            >
                                <span>6-16 (Ages 11+)</span>
                                {theme === '6-16' && <CheckCircle2 className="w-4 h-4" />}
                            </button>
                        </div>

                        <div className="py-2">
                            <div className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account</div>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2">
                                <User className="w-4 h-4 text-gray-400" /> View Profile
                            </button>
                            <button 
                                onClick={() => {
                                    setShowAvatarModal(true);
                                    setShowProfileMenu(false);
                                }}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2"
                            >
                                <Settings className="w-4 h-4 text-gray-400" /> Change Avatar
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-red-600">
                                <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-start mb-8 relative">
          <div>
            {isK3 ? (
                <div className="flex flex-col">
                    <h1 className="text-[32px] font-bold text-[#1C1917] mb-2">Hi, Alex!</h1>
                    <p className="text-[#717182] text-[20px]">Here are your tests for today!</p>
                </div>
            ) : isKids ? (
                 <div className="flex items-center gap-4">
                     <div>
                        <h1 className="text-[28px] font-bold text-[#1C1917] mb-2">Hi, Alex!</h1>
                        <p className="text-[#717182] text-[16px]">Ready to learn? Here's your dashboard.</p>
                     </div>
                 </div>
            ) : (
                <>
                    <h1 className="text-[24px] font-semibold text-[#1C1917] mb-1">Welcome, Alex</h1>
                    <p className="text-[#717182]">Access your assessments, view results, and track your progress below.</p>
                </>
            )}
          </div>
          
          {/* Decorative Icons */}
          {isK3 ? (
               <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="hidden lg:block absolute right-0 top-0"
             >
                 <img src={imgRocket} alt="Rocket" className="w-[120px] h-auto object-contain" />
             </motion.div>
          ) : isKids ? (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="hidden lg:block absolute right-0 top-0"
              >
                  <img src={imgStar} alt="Star" className="w-[80px] h-auto object-contain" />
              </motion.div>
          ) : (
            <div className="hidden lg:block absolute right-0 top-0 -mt-2">
                <img 
                src={imgDecorativeIcons} 
                alt="" 
                className="w-[150px] h-auto object-contain opacity-90" 
                />
            </div>
          )}
        </div>

        {/* Tools Grid */}
        <div className={`grid gap-4 mb-10 
          ${isK3 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : isKids 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
          }
        `}>
          <ToolCard icon={FileText} title="My Tests" description="View and take your assignments" color="#ef4444" theme={theme} />
          <ToolCard icon={BarChart2} title="My Results" description="View your test scores" color="#22c55e" theme={theme} />
          <ToolCard icon={TrendingUp} title="My Progress" description="Track your learning over time" color="#9333EA" theme={theme} />
          <ToolCard icon={BookOpen} title="My Reviews" description="Review your completed tests" color="#3b82f6" theme={theme} />
          <ToolCard icon={Lightbulb} title="Lessons" description="Access learning activities" color="#EAB308" theme={theme} />
          <ToolCard icon={Archive} title="Archive" description="View past results" color="#6b7280" theme={theme} />
        </div>

        {/* Assignments Section */}
        <div className="mb-6">
          <h2 className={`font-semibold text-[#1C1917] mb-4 
            ${isK3 ? 'text-[24px]' : isKids ? 'text-[20px]' : 'text-[18px]'}
          `}>
             {isK3 ? 'My Assignments' : 'Upcoming Assignments'}
          </h2>
          
          <div className={`bg-white border border-[#E5E5E5] 
            ${isK3 
              ? 'rounded-[16px] p-8 min-h-[500px]' 
              : isKids 
                ? 'rounded-[12px] p-6 min-h-[500px]' 
                : 'rounded-lg p-6 min-h-[500px]'
            }
          `}>
            {/* Header/Filters inside card */}
            {!isKids && !isK3 && (
                <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-8">
                    <h3 className="text-[16px] font-semibold text-[#1C1917]">Assignments</h3>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded bg-[#343A6F]/10 text-[#343A6F]">
                    <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded hover:bg-gray-100 text-gray-400">
                    <List className="w-5 h-5" />
                    </button>
                </div>
                </div>
            )}

            {/* Content Container */}
            <div className={`space-y-10 ${isK3 ? 'space-y-12' : ''}`}>
              {/* Individual Tests Section */}
              <div>
                <h4 className={`font-medium text-[#1C1917] mb-4 
                  ${isK3 ? 'text-[22px] font-bold text-[#343A6F]' : isKids ? 'text-[16px]' : 'text-[14px]'}
                `}>
                    {isK3 ? 'My Tests' : isKids ? 'Tests to Take' : 'Individual Tests'}
                </h4>
                <div className={`grid gap-4 
                  ${isK3 
                    ? 'grid-cols-1 md:grid-cols-2 gap-6' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }
                `}>
                  {ASSIGNMENTS.filter(a => !a.parts && a.status !== 'Completed').map(assignment => (
                    <AssignmentCard key={assignment.id} assignment={assignment} theme={theme} />
                  ))}
                </div>
              </div>

              {/* Multi-Part Section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {!isK3 && <LayoutGrid className="w-4 h-4 text-gray-500" />}
                  <h4 className={`font-medium text-[#1C1917] 
                    ${isK3 ? 'text-[22px] font-bold text-[#343A6F]' : isKids ? 'text-[16px]' : 'text-[14px]'}
                  `}>
                    {isK3 ? 'Tests with Parts' : 'Multi-Part Assessments'}
                  </h4>
                </div>
                  {!isK3 && <div className="text-xs text-gray-400 mb-4">Science Unit Test (3 parts)</div>}
                  {isK3 && <div className="text-[16px] text-gray-500 mb-6">Science Unit Test (3 parts)</div>}
                <div className={`grid gap-4 
                  ${isK3 
                    ? 'grid-cols-1 md:grid-cols-2 gap-6' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }
                `}>
                  {ASSIGNMENTS.filter(a => a.parts && a.status !== 'Completed').map(assignment => (
                    <AssignmentCard key={assignment.id} assignment={assignment} theme={theme} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
