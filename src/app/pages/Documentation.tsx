import { useState } from 'react';
import svgPaths from "../../imports/svg-wmka0jxbro";
import { AssessmentCard } from "../components/AssessmentCard";
import { MathIcon } from "../components/MathIcon";
import { 
  AvatarRole as TeacherIcon, 
  AvatarRole1 as StudentIcon, 
  AvatarRole2 as AdminIcon,
  IconAlertOctagon,
  IconArrowDown,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconAssign,
  IconBell,
  IconBookmark,
  IconCalendar,
  IconCheck,
  IconCheckCircle,
  IconCheckSquare,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCircle,
  IconClock,
  IconDownload,
  IconEdit,
  IconEdit1,
  IconEdit2,
  IconExternalLink,
  IconEye,
  IconEyeOff,
  IconFile,
  IconFileMinus,
  IconFilePlus,
  IconFileText,
  IconFilm,
  IconFilter,
  IconFolder,
  IconFolderMinus,
  IconFolderPlus,
  IconGrid,
  IconHelpCircle,
  IconHome,
  IconImage,
  IconInfo,
  IconInstagram,
  IconLink,
  IconLogout,
  IconMoreHorizontal,
  IconPanelCollapse,
  IconPanelExpand,
  IconPaperclip,
  IconRefreshCcw,
  IconRefreshCw,
  IconSettings,
  IconShare,
  IconSortDefault,
  IconTrash,
  IconUpload,
  IconUser,
  IconUserCheck,
  IconUserMinus,
  IconUserPlus,
  IconUserX,
  IconUsers,
  IconXSquare,
  IconZoomIn,
  IconZoomOut
} from "../../imports/03Iconography-2242-784";

export function Documentation() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const sections = [
    { id: 'overview', label: '📋 Overview', icon: '📋' },
    { id: 'colors', label: '🎨 Colors', icon: '🎨' },
    { id: 'typography', label: '✍️ Typography', icon: '✍️' },
    { id: 'iconography', label: '🎯 Iconography', icon: '🎯' },
    { id: 'layout', label: '📐 Layout & Spacing', icon: '📐' },
    { id: 'components', label: '🧩 Components', icon: '🧩' },
    { id: 'pages', label: '📄 Pages', icon: '📄' },
    { id: 'data', label: '💾 Data Models', icon: '💾' },
    { id: 'responsive', label: '📱 Responsive', icon: '📱' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#e0e0e0] print:hidden">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[20px] lg:py-[24px]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#333]">
                Developer Documentation
              </h1>
              <p className="text-[14px] text-[#707070] mt-[4px]">
                Complete design system and technical guide for EdAssess
              </p>
            </div>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-[8px] px-[16px] py-[10px] bg-[#343A6F] text-white rounded-[4px] hover:bg-[#2d3361]"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Export PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[24px] lg:py-[32px] gap-[32px]">
        {/* Sidebar Navigation */}
        <div className="hidden lg:block w-[240px] shrink-0 print:hidden">
          <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[16px] sticky top-[32px]">
            <h3 className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#707070] uppercase tracking-[0.5px] mb-[12px]">
              Contents
            </h3>
            <nav className="flex flex-col gap-[4px]">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`text-left px-[12px] py-[8px] rounded-[4px] text-[14px] transition-colors ${
                    activeSection === section.id
                      ? 'bg-[#343A6F] text-white font-["Rubik:Medium",sans-serif]'
                      : 'text-[#333] hover:bg-[#f7f7f7] font-["Rubik:Regular",sans-serif]'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <div className="mt-[24px] pt-[16px] border-t border-[#e0e0e0]">
              <h4 className="font-['Rubik:Medium',sans-serif] text-[12px] text-[#707070] mb-[8px]">
                K-12 Pathways Portal
              </h4>
              <a 
                href="/pathways-signin" 
                className="flex items-center gap-[8px] text-[13px] text-[#5779C9] hover:underline mb-[4px]"
              >
                <span>Sign In Page</span>
              </a>
              <a 
                href="/pathways-dashboard" 
                className="flex items-center gap-[8px] text-[13px] text-[#5779C9] hover:underline mb-[4px]"
              >
                <span>Dashboard</span>
              </a>
              <a 
                href="/student-dashboard" 
                className="flex items-center gap-[8px] text-[13px] text-[#5779C9] hover:underline mb-[4px]"
              >
                <span>Student Dashboard</span>
              </a>
            </div>

            <div className="mt-[24px] pt-[16px] border-t border-[#e0e0e0]">
              <h4 className="font-['Rubik:Medium',sans-serif] text-[12px] text-[#707070] mb-[8px]">
                Quick Links
              </h4>
              <a 
                href="https://github.com/your-org/edassess" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[8px] text-[13px] text-[#5779C9] hover:underline mb-[4px]"
              >
                <span>GitHub Repository</span>
                <svg className="size-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="https://figma.com/your-file" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[8px] text-[13px] text-[#5779C9] hover:underline"
              >
                <span>Figma Design File</span>
                <svg className="size-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-[900px]">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                📋 System Overview
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-[16px] text-[#333] leading-[1.6] mb-[16px]">
                  EdAssess is a web-based assessment management system designed for school districts, 
                  administrators, and teachers to create, distribute, and track educational assessments.
                </p>

                <div className="grid grid-cols-2 gap-[16px] my-[24px]">
                  <div className="bg-[#f7f7f7] p-[20px] rounded-[8px]">
                    <div className="text-[32px] mb-[8px]">⚛️</div>
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                      React 18
                    </h3>
                    <p className="text-[14px] text-[#707070]">
                      Modern component-based architecture with TypeScript
                    </p>
                  </div>
                  
                  <div className="bg-[#f7f7f7] p-[20px] rounded-[8px]">
                    <div className="text-[32px] mb-[8px]">🎨</div>
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                      Tailwind CSS v4
                    </h3>
                    <p className="text-[14px] text-[#707070]">
                      Utility-first CSS with custom design tokens
                    </p>
                  </div>
                  
                  <div className="bg-[#f7f7f7] p-[20px] rounded-[8px]">
                    <div className="text-[32px] mb-[8px]">📱</div>
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                      Mobile First
                    </h3>
                    <p className="text-[14px] text-[#707070]">
                      Responsive design from 320px to 2560px
                    </p>
                  </div>
                  
                  <div className="bg-[#f7f7f7] p-[20px] rounded-[8px]">
                    <div className="text-[32px] mb-[8px]">📊</div>
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                      Data Visualization
                    </h3>
                    <p className="text-[14px] text-[#707070]">
                      Recharts for charts and progress tracking
                    </p>
                  </div>
                </div>

                <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                  Key Features
                </h3>
                
                <ul className="space-y-[12px] text-[15px] text-[#333] list-disc pl-[24px]">
                  <li><strong>Dashboard:</strong> Real-time overview with stats and recent activity</li>
                  <li><strong>Assessments:</strong> Create, assign, and track assessments across subjects</li>
                  <li><strong>Classes:</strong> Manage student rosters and class progress</li>
                  <li><strong>Reports:</strong> Comprehensive analytics on performance</li>
                  <li><strong>Accounts:</strong> Role-based user management</li>
                </ul>

                <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                  User Roles
                </h3>
                
                <div className="space-y-[12px]">
                  <div className="flex items-start gap-[12px] p-[16px] bg-[#C4C8E1] rounded-[8px]">
                    <div className="size-[48px] bg-[#C4C8E1] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <path d={svgPaths.p320a6380} fill="#343A6F" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212]">Admin</h4>
                      <p className="text-[14px] text-[#707070]">Full system access, district-wide management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-[12px] p-[16px] bg-[#C4C8E1] rounded-[8px]">
                    <div className="size-[48px] bg-[#C4C8E1] rounded-[8px] flex items-center justify-center overflow-hidden">
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8749 43.7502">
                        <path d={svgPaths.p29e2c600} fill="#343A6F" />
                        <path d={svgPaths.p34c6f400} fill="#343A6F" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212]">Teacher</h4>
                      <p className="text-[14px] text-[#707070]">Class and assessment management, student tracking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-[12px] p-[16px] bg-[#C4C8E1] rounded-[8px]">
                    <div className="size-[48px] bg-[#C4C8E1] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <path d={svgPaths.p18b44a00} fill="#343A6F" />
                        <path d={svgPaths.p35168f80} fill="#343A6F" />
                        <path d={svgPaths.p9755e00} fill="#343A6F" />
                        <path d={svgPaths.p2cfc5400} fill="#343A6F" />
                        <path d={svgPaths.p27815900} fill="#343A6F" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212]">Student</h4>
                      <p className="text-[14px] text-[#707070]">View assignments, submit assessments, track progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Colors Section */}
          {activeSection === 'colors' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                🎨 Color System
              </h2>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[24px] mb-[16px]">
                Brand Colors
              </h3>
              
              <div className="grid grid-cols-3 gap-[16px] mb-[32px]">
                <div>
                  <div className="h-[100px] rounded-[8px] border border-[#d4d4d4]" style={{ backgroundColor: '#343A6F' }}></div>
                  <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212] mt-[8px]">Primary Navy</p>
                  <p className="font-mono text-[13px] text-[#707070]">#343A6F</p>
                  <p className="text-[12px] text-[#8a8a8a] mt-[4px]">Header, CTA buttons</p>
                </div>
                
                <div>
                  <div className="h-[100px] rounded-[8px] border border-[#d4d4d4]" style={{ backgroundColor: '#2D3361' }}></div>
                  <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212] mt-[8px]">Navy Dark</p>
                  <p className="font-mono text-[13px] text-[#707070]">#2D3361</p>
                  <p className="text-[12px] text-[#8a8a8a] mt-[4px]">Hover states</p>
                </div>
                
                <div>
                  <div className="h-[100px] rounded-[8px] border border-[#d4d4d4]" style={{ backgroundColor: '#C4C8E1' }}></div>
                  <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212] mt-[8px]">Navy Light</p>
                  <p className="font-mono text-[13px] text-[#707070]">#C4C8E1</p>
                  <p className="text-[12px] text-[#8a8a8a] mt-[4px]">Progress bar track</p>
                </div>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Subject Colors
              </h3>
              
              <div className="grid grid-cols-2 gap-[16px] mb-[32px]">
                {[
                  { 
                    name: 'History', 
                    bg: '#FCE1E5', 
                    border: '#EC5E74',
                    svgContent: (
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 46">
                        <rect height="4" stroke="#EC5E74" strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="41" fill="none" />
                        <rect height="4" stroke="#EC5E74" strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="13" fill="none" />
                        <rect fill="#EC5E74" height="22" width="6" x="5" y="18" />
                        <rect fill="#EC5E74" height="22" width="6" x="17" y="18" />
                        <rect fill="#EC5E74" height="22" width="6" x="29" y="18" />
                        <path d={svgPaths.p14ced400} stroke="#EC5E74" strokeWidth="2" fill="none" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Math', 
                    bg: '#D2F2FC', 
                    border: '#03B0E8',
                    svgContent: (
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <rect width="56" height="56" rx="8" fill="#03B0E8" />
                        <rect x="4" y="4" width="24" height="24" rx="4" fill="white" />
                        <rect x="32" y="4" width="20" height="24" rx="4" fill="#03B0E8" />
                        <rect x="4" y="32" width="24" height="20" rx="4" fill="#03B0E8" />
                        <rect x="32" y="32" width="20" height="20" rx="4" fill="#03B0E8" />
                        <path d="M16 12V20" stroke="#03B0E8" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M20 16H12" stroke="#03B0E8" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M48 16H36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M11 39L21 49" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M21 39L11 49" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="42" cy="40" r="1.5" fill="white" />
                        <circle cx="42" cy="48" r="1.5" fill="white" />
                        <path d="M46 44H38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Reading', 
                    bg: '#FCECD4', 
                    border: '#EB8900',
                    svgContent: (
                      <svg className="size-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <path clipRule="evenodd" d={svgPaths.p3bf6cd00} fill="#EB8900" fillRule="evenodd" />
                        <path d={svgPaths.p2534e00} fill="#EB8900" />
                        <path d={svgPaths.p4d80800} fill="#EB8900" />
                        <path d={svgPaths.p13c2af00} fill="#EB8900" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Science', 
                    bg: '#ECE3FC', 
                    border: '#9266E5',
                    svgContent: (
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                        <path d={svgPaths.p34676100} fill="#9266E5" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Career/Tech', 
                    bg: '#DE51E5', 
                    border: '#7E78B8',
                    svgContent: (
                      <svg className="size-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <rect height="26" stroke="#7E78B8" strokeWidth="2" width="38" x="9" y="7" fill="none" rx="2" />
                        <rect height="4" stroke="#7E78B8" strokeWidth="2" width="14" x="21" y="35" fill="none" />
                        <rect height="2" stroke="#7E78B8" strokeWidth="2" width="24" x="16" y="42" fill="none" />
                        <path d={svgPaths.p1a8673f0} fill="#7E78B8" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Other', 
                    bg: '#FCF5CC', 
                    border: '#F2CC05',
                    svgContent: (
                      <svg className="size-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <path d={svgPaths.p32dc9180} stroke="#F2CC05" strokeWidth="2" fill="none" />
                        <path d="M14 24H42" stroke="#F2CC05" strokeLinecap="round" strokeWidth="2" />
                        <path d="M14 29H42" stroke="#F2CC05" strokeLinecap="round" strokeWidth="2" />
                        <path d="M14 34H30" stroke="#F2CC05" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    )
                  },
                ].map(subject => (
                  <div key={subject.name} className="flex items-center gap-[12px] p-[12px] border border-[#e0e0e0] rounded-[8px]">
                    <div className="size-[48px] flex items-center justify-center">
                      {subject.svgContent}
                    </div>
                    <div className="flex-1">
                      <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212]">{subject.name}</p>
                      <p className="font-mono text-[12px] text-[#707070]">BG: {subject.bg}</p>
                      <p className="font-mono text-[12px] text-[#707070]">Border: {subject.border}</p>
                    </div>
                    <div className="w-[4px] h-[48px] rounded-[2px]" style={{ backgroundColor: subject.border }}></div>
                  </div>
                ))}
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Performance Band Colors
              </h3>
              
              <div className="grid grid-cols-5 gap-[8px] mb-[32px]">
                {[
                  { name: '90-100', hex: '#1565C0' },
                  { name: '80-89', hex: '#388E3C' },
                  { name: '60-79', hex: '#5F1980' },
                  { name: '40-59', hex: '#F64C13' },
                  { name: '<40', hex: '#B40B08' },
                ].map(band => (
                  <div key={band.hex}>
                    <div className="h-[60px] rounded-[4px] border border-[#d4d4d4]" style={{ backgroundColor: band.hex }}></div>
                    <p className="text-[11px] text-[#121212] mt-[4px] font-['Rubik:Medium',sans-serif]">{band.name}</p>
                    <p className="font-mono text-[10px] text-[#707070]">{band.hex}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Status Indicators
              </h3>
              
              <div className="grid grid-cols-4 gap-[8px] mb-[32px]">
                {[
                  { name: 'Primary / Assigned', hex: '#343A6F' },
                  { name: 'In Progress', hex: '#8B92C4' },
                  { name: 'Completed', hex: '#388E3C' },
                  { name: 'Error/Warning', hex: '#B40B08' },
                ].map(status => (
                  <div key={status.hex}>
                    <div className="h-[60px] rounded-[4px] border border-[#d4d4d4]" style={{ backgroundColor: status.hex }}></div>
                    <p className="text-[11px] text-[#121212] mt-[4px] font-['Rubik:Medium',sans-serif]">{status.name}</p>
                    <p className="font-mono text-[10px] text-[#707070]">{status.hex}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Neutrals
              </h3>
              
              <div className="grid grid-cols-5 gap-[8px]">
                {[
                  { name: 'Primary', hex: '#121212' },
                  { name: 'Secondary', hex: '#8A8A8A' },
                  { name: 'Divider', hex: '#D4D4D4' },
                  { name: 'Background', hex: '#F7F7F7' },
                  { name: 'White', hex: '#FFFFFF' },
                ].map(color => (
                  <div key={color.hex}>
                    <div className="h-[60px] rounded-[4px] border border-[#d4d4d4]" style={{ backgroundColor: color.hex }}></div>
                    <p className="text-[11px] text-[#121212] mt-[4px] font-['Rubik:Medium',sans-serif]">{color.name}</p>
                    <p className="font-mono text-[10px] text-[#707070]">{color.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typography Section */}
          {activeSection === 'typography' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                ✍️ Typography
              </h2>

              <div className="bg-[#f7f7f7] p-[20px] rounded-[8px] mb-[32px]">
                <p className="text-[14px] text-[#707070] mb-[8px]">Font Family</p>
                <h3 className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#121212]">Rubik</h3>
                <p className="text-[14px] text-[#707070] mt-[8px]">Regular (400) • Medium (500)</p>
              </div>

              <div className="bg-[#FFF9D6] border border-[#D4C300] p-[16px] rounded-[8px] mb-[24px]">
                <p className="text-[14px] text-[#121212]">
                  <strong>⚠️ Important:</strong> Minimum font size is <strong>14px</strong> for WCAG AA compliance. 
                  All text sizes should be consistent across every page.
                </p>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[16px]">
                Standardized Text Styles
              </h3>

              <div className="space-y-[24px]">
                <div className="border-b border-[#e0e0e0] pb-[16px]">
                  <div className="flex items-baseline justify-between mb-[8px]">
                    <h1 className="font-['Rubik:Medium',sans-serif] text-[40px] leading-[40px] text-[#121212]">H1</h1>
                    <span className="text-[14px] text-[#707070] font-mono">40/40</span>
                  </div>
                  <p className="text-[14px] text-[#707070]">Main page titles, primary headings</p>
                  <code className="text-[14px] bg-[#f7f7f7] px-[8px] py-[4px] rounded-[4px] mt-[8px] block">
                    text-[40px] leading-[40px]
                  </code>
                </div>

                <div className="border-b border-[#e0e0e0] pb-[16px]">
                  <div className="flex items-baseline justify-between mb-[8px]">
                    <h2 className="font-['Rubik:Medium',sans-serif] text-[32px] leading-[40px] text-[#121212]">H2</h2>
                    <span className="text-[14px] text-[#707070] font-mono">32/40</span>
                  </div>
                  <p className="text-[14px] text-[#707070]">Section titles, major headings</p>
                  <code className="text-[14px] bg-[#f7f7f7] px-[8px] py-[4px] rounded-[4px] mt-[8px] block">
                    text-[32px] leading-[40px]
                  </code>
                </div>

                <div className="border-b border-[#e0e0e0] pb-[16px]">
                  <div className="flex items-baseline justify-between mb-[8px]">
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] leading-[32px] text-[#121212]">H3</h3>
                    <span className="text-[14px] text-[#707070] font-mono">20/32</span>
                  </div>
                  <p className="text-[14px] text-[#707070]">Subsection titles, card headers</p>
                  <code className="text-[14px] bg-[#f7f7f7] px-[8px] py-[4px] rounded-[4px] mt-[8px] block">
                    text-[20px] leading-[32px]
                  </code>
                </div>

                <div className="border-b border-[#e0e0e0] pb-[16px]">
                  <div className="flex items-baseline justify-between mb-[8px]">
                    <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212]">H4</h4>
                    <span className="text-[14px] text-[#707070] font-mono">16/24</span>
                  </div>
                  <p className="text-[14px] text-[#707070]">Smaller headings, labels</p>
                  <code className="text-[14px] bg-[#f7f7f7] px-[8px] py-[4px] rounded-[4px] mt-[8px] block">
                    text-[16px] leading-[24px]
                  </code>
                </div>

                <div className="border-b border-[#e0e0e0] pb-[16px]">
                  <div className="flex items-baseline justify-between mb-[8px]">
                    <p className="font-['Rubik:Regular',sans-serif] text-[16px] leading-[24px] text-[#121212]">Body</p>
                    <span className="text-[14px] text-[#707070] font-mono">16/24</span>
                  </div>
                  <p className="text-[14px] text-[#707070]">Standard body text, paragraph content</p>
                  <code className="text-[14px] bg-[#f7f7f7] px-[8px] py-[4px] rounded-[4px] mt-[8px] block">
                    text-[16px] leading-[24px]
                  </code>
                </div>

                <div className="pb-[16px]">
                  <div className="flex items-baseline justify-between mb-[8px]">
                    <p className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#121212]">H5</p>
                    <span className="text-[14px] text-[#707070] font-mono">14/16 (minimum)</span>
                  </div>
                  <p className="text-[14px] text-[#707070]">Smallest headings, metadata, captions</p>
                  <code className="text-[14px] bg-[#f7f7f7] px-[8px] py-[4px] rounded-[4px] mt-[8px] block">
                    text-[14px] leading-[16px]
                  </code>
                </div>
              </div>

              <div className="bg-[#E3F2FD] border border-[#1565C0] p-[16px] rounded-[8px] mt-[32px]">
                <p className="text-[14px] text-[#121212] mb-[8px]">
                  <strong>📖 Typography Guidelines:</strong>
                </p>
                <ul className="list-disc pl-[24px] space-y-[4px] text-[14px] text-[#121212]">
                  <li>Use consistent text sizes throughout the entire project</li>
                  <li>Minimum font size is always <strong>14px</strong></li>
                  <li>Headers, subheaders, and titles should match these specifications</li>
                  <li>Font family: Rubik (Regular 400, Medium 500, Bold 700)</li>
                  <li>Refer to <code className="bg-white px-[4px] rounded">/TEXT_STYLES.md</code> for complete documentation</li>
                </ul>
              </div>
            </div>
          )}

          {/* Iconography Section */}
          {activeSection === 'iconography' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                🎯 Iconography
              </h2>

              <p className="text-[16px] text-[#333] leading-[1.6] mb-[24px]">
                EdAssess uses a comprehensive three-tier iconography system for visual consistency and accessibility.
              </p>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Icon System Tiers
              </h3>

              <div className="space-y-[16px] mb-[32px]">
                <div className="flex items-start gap-[12px] p-[16px] bg-[#f7f7f7] rounded-[8px]">
                  <div className="size-[32px] bg-[#343A6F] rounded-[6px] flex items-center justify-center text-white text-[16px] shrink-0">1</div>
                  <div>
                    <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">Subject Icons</h4>
                    <p className="text-[14px] text-[#707070]">Custom vector graphics for academic subjects - History (Greek columns), Math (2×2 grid with operators), Reading (open book), Science (flask), Career/Tech (monitor), Other (document)</p>
                  </div>
                </div>

                <div className="flex items-start gap-[12px] p-[16px] bg-[#f7f7f7] rounded-[8px]">
                  <div className="size-[32px] bg-[#343A6F] rounded-[6px] flex items-center justify-center text-white text-[16px] shrink-0">2</div>
                  <div>
                    <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">Role Icons</h4>
                    <p className="text-[14px] text-[#707070]">User role indicators for Teacher (person with document), Student (person with graduation cap), and Admin (person with headset & gear)</p>
                  </div>
                </div>

                <div className="flex items-start gap-[12px] p-[16px] bg-[#f7f7f7] rounded-[8px]">
                  <div className="size-[32px] bg-[#343A6F] rounded-[6px] flex items-center justify-center text-white text-[16px] shrink-0">3</div>
                  <div>
                    <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">Interface Icons</h4>
                    <p className="text-[14px] text-[#707070]">Custom UI controls and navigation elements (64+ icons) - arrows, chevrons, file operations, user management, and common interface actions</p>
                  </div>
                </div>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Subject Icons
              </h3>

              <div className="grid grid-cols-2 gap-[16px] mb-[32px]">
                {[
                  { 
                    name: 'History', 
                    bg: '#FCE1E5', 
                    border: '#EC5E74',
                    svgContent: (
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 46">
                        <rect height="4" stroke="#EC5E74" strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="41" fill="none" />
                        <rect height="4" stroke="#EC5E74" strokeLinejoin="round" strokeWidth="2" width="38" x="1" y="13" fill="none" />
                        <rect fill="#EC5E74" height="22" width="6" x="5" y="18" />
                        <rect fill="#EC5E74" height="22" width="6" x="17" y="18" />
                        <rect fill="#EC5E74" height="22" width="6" x="29" y="18" />
                        <path d={svgPaths.p14ced400} stroke="#EC5E74" strokeWidth="2" fill="none" />
                      </svg>
                    ),
                    description: 'Greek column building'
                  },
                  { 
                    name: 'Math', 
                    bg: '#D2F2FC', 
                    border: '#03B0E8',
                    svgContent: (
                      <svg className="size-[32px]" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Rounded square background */}
                        <rect width="56" height="56" rx="8" fill="#5BA4CF" />
                        
                        {/* Top left quadrant - Blue with white + */}
                        <rect x="4" y="4" width="24" height="24" rx="4" fill="#5BA4CF" />
                        <path d="M16 12V20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M20 16H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        
                        {/* Top right quadrant - White with blue - */}
                        <rect x="28" y="4" width="24" height="24" rx="4" fill="white" />
                        <path d="M48 16H32" stroke="#5BA4CF" strokeWidth="2.5" strokeLinecap="round" />
                        
                        {/* Bottom left quadrant - White with blue × */}
                        <rect x="4" y="28" width="24" height="24" rx="4" fill="white" />
                        <path d="M11 35L21 45" stroke="#5BA4CF" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M21 35L11 45" stroke="#5BA4CF" strokeWidth="2.5" strokeLinecap="round" />
                        
                        {/* Bottom right quadrant - Blue with white ÷ */}
                        <rect x="28" y="28" width="24" height="24" rx="4" fill="#5BA4CF" />
                        <circle cx="40" cy="34" r="1.5" fill="white" />
                        <circle cx="40" cy="46" r="1.5" fill="white" />
                        <path d="M46 40H34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    ),
                    description: '2x2 grid with math symbols'
                  },
                  { 
                    name: 'Reading', 
                    bg: '#FCECD4', 
                    border: '#EB8900',
                    svgContent: (
                      <svg className="size-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <path clipRule="evenodd" d={svgPaths.p3bf6cd00} fill="#EB8900" fillRule="evenodd" />
                        <path d={svgPaths.p2534e00} fill="#EB8900" />
                        <path d={svgPaths.p4d80800} fill="#EB8900" />
                        <path d={svgPaths.p13c2af00} fill="#EB8900" />
                      </svg>
                    ),
                    description: 'Open book'
                  },
                  { 
                    name: 'Science', 
                    bg: '#ECE3FC', 
                    border: '#9266E5',
                    svgContent: (
                      <svg className="size-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                        <path d={svgPaths.p34676100} fill="#9266E5" />
                      </svg>
                    ),
                    description: 'Laboratory flask'
                  },
                  { 
                    name: 'Career/Tech', 
                    bg: '#DE51E5', 
                    border: '#7E78B8',
                    svgContent: (
                      <svg className="size-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <rect height="26" stroke="#7E78B8" strokeWidth="2" width="38" x="9" y="7" fill="none" rx="2" />
                        <rect height="4" stroke="#7E78B8" strokeWidth="2" width="14" x="21" y="35" fill="none" />
                        <rect height="2" stroke="#7E78B8" strokeWidth="2" width="24" x="16" y="42" fill="none" />
                        <path d={svgPaths.p1a8673f0} fill="#7E78B8" />
                      </svg>
                    ),
                    description: 'Computer monitor'
                  },
                  { 
                    name: 'Other', 
                    bg: '#FCF5CC', 
                    border: '#F2CC05',
                    svgContent: (
                      <svg className="size-[40px]" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                        <path d={svgPaths.p32dc9180} stroke="#F2CC05" strokeWidth="2" fill="none" />
                        <path d="M14 24H42" stroke="#F2CC05" strokeLinecap="round" strokeWidth="2" />
                        <path d="M14 29H42" stroke="#F2CC05" strokeLinecap="round" strokeWidth="2" />
                        <path d="M14 34H30" stroke="#F2CC05" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    ),
                    description: 'Document/note'
                  },
                ].map(subject => (
                  <div key={subject.name} className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                    <div className="flex items-center gap-[12px] mb-[12px]">
                      <div 
                        className="size-[56px] rounded-[8px] flex items-center justify-center shrink-0"
                      >
                        {subject.svgContent}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">{subject.name}</h4>
                        <p className="text-[13px] text-[#707070]">{subject.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#C4C8E1] border border-[#343A6F] p-[16px] rounded-[8px] mb-[32px]">
                <p className="text-[14px] text-[#121212]">
                  <strong>📏 Container Specs:</strong> Subject icons are <code className="bg-white px-[4px] rounded">56px × 56px</code> with <code className="bg-white px-[4px] rounded ml-[4px]">8px</code> border radius.
                </p>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Role Icons
              </h3>

              <div className="grid grid-cols-3 gap-[12px] mb-[32px]">
                {[
                  { 
                    name: 'Teacher', 
                    description: 'Person with document',
                    icon: <TeacherIcon />
                  },
                  { 
                    name: 'Student', 
                    description: 'Person with graduation cap',
                    icon: <StudentIcon />
                  },
                  { 
                    name: 'Admin', 
                    description: 'Person with headset & gear',
                    icon: <AdminIcon />
                  },
                ].map(role => (
                  <div key={role.name} className="border border-[#e0e0e0] rounded-[8px] p-[16px] text-center">
                    <div className="size-[64px] bg-[#C4C8E1] rounded-[8px] flex items-center justify-center mx-auto mb-[12px]">
                      {role.icon}
                    </div>
                    <h4 className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212] mb-[4px]">{role.name}</h4>
                    <p className="text-[12px] text-[#707070]">{role.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#C4C8E1] border border-[#343A6F] p-[16px] rounded-[8px] mb-[32px]">
                <p className="text-[14px] text-[#121212]">
                  <strong>📏 Container Specs:</strong> Role icons are <code className="bg-white px-[4px] rounded">56px × 56px</code> with <code className="bg-white px-[4px] rounded ml-[4px]">8px</code> border radius. 
                  <strong className="ml-[8px]">Note:</strong> The <code className="bg-white px-[4px] rounded ml-[4px]">#C4C8E1</code> background shown here is optional and does not have to be used.
                </p>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Report Stat & Metric Icons
              </h3>

              <p className="text-[14px] text-[#707070] mb-[16px]">
                Category-based icons from lucide-react used in report stat boxes and metric cards to enhance data scanning (24px × 24px, strokeWidth 1.5, color #343A6F).
              </p>

              <div className="grid grid-cols-2 gap-[16px] mb-[32px]">
                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">Users</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> Total Students, Students Enrolled</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Population/Enrollment metrics</p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">BarChart3</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> District Average, Class Average</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Statistical performance data</p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="6"/>
                        <circle cx="12" cy="12" r="2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">Target</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> Proficiency Rate, Achievement Goals</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Goal-oriented metrics</p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">AlertTriangle</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> At-Risk Students, Warning Metrics</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Intervention/attention needed</p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">TrendingUp</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> Class Average, Performance Trends</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Performance/growth metrics</p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">HelpCircle</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> Questions, Total Items</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Content/item counts</p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l6 6"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">FileCheck</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> Raw Score, Total Score</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Assessment scoring metrics</p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="size-[40px] bg-[#E7EBF4] rounded-[8px] flex items-center justify-center">
                      <svg className="size-[24px] text-[#343A6F]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 12h12m-12 5h12M3 7h.01M3 12h.01M3 17h.01"/>
                        <circle cx="12" cy="12" r="0.5"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 16l-4-4-2 2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">Percent</h4>
                      <p className="text-[14px] text-[#707070]">lucide-react</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#707070] mb-[8px]"><strong>Usage:</strong> Percentage Score, % Metrics</p>
                  <p className="text-[14px] text-[#707070]"><strong>Category:</strong> Percentage-based metrics</p>
                </div>
              </div>

              <div className="bg-[#C4C8E1] border border-[#343A6F] p-[16px] rounded-[8px] mb-[32px]">
                <p className="text-[14px] text-[#121212]">
                  <strong>📏 Specs:</strong> Stat icons are <code className="bg-white px-[4px] rounded">24px × 24px</code> from lucide-react with <code className="bg-white px-[4px] rounded ml-[4px]">strokeWidth: 1.5</code> and color <code className="bg-white px-[4px] rounded ml-[4px]">#343A6F</code>. Used in report header stat boxes centered above titles with 12px gap.
                </p>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Interface Icons
              </h3>

              <div className="mb-[32px]">
                <p className="text-[14px] text-[#707070] mb-[16px]">Complete set of interface icons for EdAssess system (24px × 24px)</p>
                <div className="flex flex-wrap gap-[8px]">
                  {[
                    { name: 'Info', component: <IconInfo /> },
                    { name: 'ArrowDown', component: <IconArrowDown /> },
                    { name: 'ArrowDownLeft', component: <IconArrowDownLeft /> },
                    { name: 'ArrowDownRight', component: <IconArrowDownRight /> },
                    { name: 'ArrowLeft', component: <IconArrowLeft /> },
                    { name: 'ArrowRight', component: <IconArrowRight /> },
                    { name: 'ArrowUp', component: <IconArrowUp /> },
                    { name: 'ArrowUpLeft', component: <IconArrowUpLeft /> },
                    { name: 'ArrowUpRight', component: <IconArrowUpRight /> },
                    { name: 'Assign', component: <IconAssign /> },
                    { name: 'Bell', component: <IconBell /> },
                    { name: 'Bookmark', component: <IconBookmark /> },
                    { name: 'Calendar', component: <IconCalendar /> },
                    { name: 'Check', component: <IconCheck /> },
                    { name: 'CheckCircle', component: <IconCheckCircle /> },
                    { name: 'CheckSquare', component: <IconCheckSquare /> },
                    { name: 'ChevronDown', component: <IconChevronDown /> },
                    { name: 'ChevronLeft', component: <IconChevronLeft /> },
                    { name: 'ChevronRight', component: <IconChevronRight /> },
                    { name: 'ChevronUp', component: <IconChevronUp /> },
                    { name: 'Circle', component: <IconCircle /> },
                    { name: 'Clock', component: <IconClock /> },
                    { name: 'Download', component: <IconDownload /> },
                    { name: 'Edit', component: <IconEdit /> },
                    { name: 'ExternalLink', component: <IconExternalLink /> },
                    { name: 'Eye', component: <IconEye /> },
                    { name: 'EyeOff', component: <IconEyeOff /> },
                    { name: 'File', component: <IconFile /> },
                    { name: 'FileMinus', component: <IconFileMinus /> },
                    { name: 'FilePlus', component: <IconFilePlus /> },
                    { name: 'FileText', component: <IconFileText /> },
                    { name: 'Film', component: <IconFilm /> },
                    { name: 'Filter', component: <IconFilter /> },
                    { name: 'Folder', component: <IconFolder /> },
                    { name: 'FolderMinus', component: <IconFolderMinus /> },
                    { name: 'FolderPlus', component: <IconFolderPlus /> },
                    { name: 'Grid', component: <IconGrid /> },
                    { name: 'HelpCircle', component: <IconHelpCircle /> },
                    { name: 'Home', component: <IconHome /> },
                    { name: 'Image', component: <IconImage /> },
                    { name: 'Instagram', component: <IconInstagram /> },
                    { name: 'Link', component: <IconLink /> },
                    { name: 'Logout', component: <IconLogout /> },
                    { name: 'MoreHorizontal', component: <IconMoreHorizontal /> },
                    { name: 'PanelCollapse', component: <IconPanelCollapse /> },
                    { name: 'PanelExpand', component: <IconPanelExpand /> },
                    { name: 'Paperclip', component: <IconPaperclip /> },
                    { name: 'RefreshCcw', component: <IconRefreshCcw /> },
                    { name: 'RefreshCw', component: <IconRefreshCw /> },
                    { name: 'Settings', component: <IconSettings /> },
                    { name: 'Share', component: <IconShare /> },
                    { name: 'SortDefault', component: <IconSortDefault /> },
                    { name: 'Trash', component: <IconTrash /> },
                    { name: 'Upload', component: <IconUpload /> },
                    { name: 'User', component: <IconUser /> },
                    { name: 'UserCheck', component: <IconUserCheck /> },
                    { name: 'UserMinus', component: <IconUserMinus /> },
                    { name: 'UserPlus', component: <IconUserPlus /> },
                    { name: 'UserX', component: <IconUserX /> },
                    { name: 'Users', component: <IconUsers /> },
                    { name: 'XSquare', component: <IconXSquare /> },
                    { name: 'ZoomIn', component: <IconZoomIn /> },
                    { name: 'ZoomOut', component: <IconZoomOut /> },
                  ].map(icon => (
                    <div key={icon.name} className="flex flex-col items-center gap-[4px] p-[8px] bg-[#f7f7f7] rounded-[4px] border border-[#e0e0e0] min-w-[80px]">
                      <div className="size-[24px] flex items-center justify-center">
                        {icon.component}
                      </div>
                      <code className="text-[10px] text-[#707070] text-center">{icon.name}</code>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Icon Sizes
              </h3>

              <div className="grid grid-cols-4 gap-[12px] mb-[32px]">
                {[
                  { size: '16px', usage: 'Small icons (inline, badges)' },
                  { size: '20px', usage: 'Medium icons (buttons)' },
                  { size: '24px', usage: 'Large icons (headers)' },
                  { size: '32px', usage: 'XL icons (featured)' },
                ].map(spec => (
                  <div key={spec.size} className="border border-[#e0e0e0] rounded-[8px] p-[12px] text-center">
                    <div className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">{spec.size}</div>
                    <p className="text-[12px] text-[#707070]">{spec.usage}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Accessibility Best Practices
              </h3>

              <ul className="space-y-[8px] text-[14px] text-[#333] list-disc pl-[24px]">
                <li>Always verify icon exists in lucide-react before importing</li>
                <li>Use consistent stroke widths: 1.5 for standard, 2 for emphasis</li>
                <li>Ensure minimum 4.5:1 contrast ratio for WCAG AA compliance</li>
                <li>Include aria-labels for icon-only buttons</li>
                <li>Maintain minimum 40px × 40px touch targets for interactive icons</li>
                <li>Don't rely on color alone for status indicators</li>
              </ul>

              <div className="bg-[#FFE8D6] border border-[#EB8900] p-[16px] rounded-[8px] mt-[24px]">
                <p className="text-[14px] text-[#121212]">
                  <strong>⚠️ Important:</strong> All icon colors must meet WCAG AA standards with minimum 3:1 contrast for UI elements and 4.5:1 for interactive elements.
                </p>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Developer Implementation Guide
              </h3>

              <p className="text-[16px] text-[#333] leading-[1.6] mb-[16px]">
                EdAssess uses a hybrid icon approach combining custom Figma-imported icons and lucide-react library icons. Here's what your dev team needs to know:
              </p>

              <div className="space-y-[16px] mb-[24px]">
                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[8px]">
                    ✅ Can Use As-Is with React 19 & Tailwind
                  </h4>
                  <p className="text-[14px] text-[#707070] mb-[8px]">
                    All icons from <code className="bg-[#f7f7f7] px-[4px] rounded">/src/imports/03Iconography-2242-784.tsx</code> are already React components and work with React 19 and Tailwind CSS.
                  </p>
                  <p className="text-[14px] text-[#707070]">
                    Import and use them directly: <code className="bg-[#f7f7f7] px-[4px] rounded">import {"{ IconCalendar, IconBell, IconClock }"} from '../../imports/03Iconography-2242-784'</code>
                  </p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px] bg-[#FFE8D6]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[8px]">
                    ⚠️ Color Control Considerations
                  </h4>
                  <p className="text-[14px] text-[#707070] mb-[8px]">
                    Some Figma-imported icons have been updated to use <code className="bg-white px-[4px] rounded">currentColor</code> for flexible color control via parent container's text color:
                  </p>
                  <div className="bg-white border border-[#e0e0e0] p-[12px] rounded-[4px] mb-[8px]">
                    <code className="text-[13px] text-[#121212] block mb-[4px]">
                      {`<div className="text-[#343A6F]">`}
                    </code>
                    <code className="text-[13px] text-[#121212] block ml-[16px] mb-[4px]">
                      {`  <IconCalendar /> {/* Inherits #343A6F color */}`}
                    </code>
                    <code className="text-[13px] text-[#121212] block">
                      {`</div>`}
                    </code>
                  </div>
                  <p className="text-[14px] text-[#707070]">
                    <strong>Note:</strong> Not all interface icons have been converted to currentColor yet. Check the SVG fill properties if you need dynamic color control.
                  </p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px] bg-[#E7F5E8]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[8px]">
                    💡 Recommended Approach
                  </h4>
                  <p className="text-[14px] text-[#707070] mb-[8px]">
                    For maximum consistency and flexibility, consider standardizing on <strong>lucide-react</strong> for most UI icons:
                  </p>
                  <ul className="space-y-[4px] text-[14px] text-[#707070] list-disc pl-[24px] mb-[8px]">
                    <li>Already used for stat/metric icons (Users, BarChart3, Target, etc.)</li>
                    <li>Full color control via Tailwind classes</li>
                    <li>Consistent stroke widths and sizing</li>
                    <li>Actively maintained library with 1000+ icons</li>
                  </ul>
                  <p className="text-[14px] text-[#707070]">
                    <strong>Keep custom Figma icons for:</strong> Subject icons (Math, Reading, Science, etc.) and Role icons (Teacher, Student, Admin) which are unique to EdAssess branding.
                  </p>
                </div>
              </div>

              <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[12px]">
                Icon Sources Reference
              </h4>

              <div className="bg-[#f7f7f7] border border-[#e0e0e0] rounded-[8px] overflow-hidden mb-[24px]">
                <div className="grid grid-cols-[1fr_2fr] divide-y divide-[#e0e0e0]">
                  <div className="bg-[#343A6F] px-[16px] py-[8px]">
                    <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-white">Icon Type</p>
                  </div>
                  <div className="bg-[#343A6F] px-[16px] py-[8px]">
                    <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-white">Source</p>
                  </div>
                  
                  <div className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#121212]">Subject Icons</p>
                  </div>
                  <div className="px-[16px] py-[12px]">
                    <code className="text-[13px] text-[#707070]">Figma import: 03Iconography-2242-784.tsx</code>
                  </div>
                  
                  <div className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#121212]">Role Icons</p>
                  </div>
                  <div className="px-[16px] py-[12px]">
                    <code className="text-[13px] text-[#707070]">Figma import: 03Iconography-2242-784.tsx</code>
                  </div>
                  
                  <div className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#121212]">Interface Icons (64+ icons)</p>
                  </div>
                  <div className="px-[16px] py-[12px]">
                    <code className="text-[13px] text-[#707070]">Figma import: 03Iconography-2242-784.tsx</code>
                  </div>
                  
                  <div className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#121212]">Stat/Metric Icons</p>
                  </div>
                  <div className="px-[16px] py-[12px]">
                    <code className="text-[13px] text-[#707070]">lucide-react library</code>
                  </div>
                  
                  <div className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#121212]">Action Icons (Download, Print, etc.)</p>
                  </div>
                  <div className="px-[16px] py-[12px]">
                    <code className="text-[13px] text-[#707070]">lucide-react library</code>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layout Section */}
          {activeSection === 'layout' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                📐 Layout & Spacing
              </h2>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[24px] mb-[16px]">
                Responsive Breakpoints
              </h3>

              <div className="space-y-[12px] mb-[32px]">
                {[
                  { name: 'Mobile', size: '< 640px', cols: '1 column', padding: '16px' },
                  { name: 'Tablet (sm)', size: '640px+', cols: '2 columns', padding: '32px' },
                  { name: 'Tablet Large (md)', size: '768px+', cols: '2 columns', padding: '32px' },
                  { name: 'Desktop (lg)', size: '1024px+', cols: '3-4 columns', padding: '64px' },
                  { name: 'Desktop Large (xl)', size: '1280px+', cols: '4 columns', padding: '64px' },
                ].map(bp => (
                  <div key={bp.name} className="flex items-center gap-[16px] p-[16px] bg-[#f7f7f7] rounded-[8px]">
                    <div className="w-[120px]">
                      <p className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#121212]">{bp.name}</p>
                      <p className="text-[12px] text-[#707070] font-mono">{bp.size}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] text-[#333]">Grid: <strong>{bp.cols}</strong></p>
                      <p className="text-[13px] text-[#333]">Padding: <strong>{bp.padding}</strong></p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Spacing Scale
              </h3>

              <div className="space-y-[8px] mb-[32px]">
                {[
                  { value: '4px', usage: 'Tight spacing (pill buttons, gaps)' },
                  { value: '8px', usage: 'Small gaps (icon + text)' },
                  { value: '12px', usage: 'Medium gaps (card elements)' },
                  { value: '16px', usage: 'Standard gaps (grid items on mobile)' },
                  { value: '20px', usage: 'Large gaps (sections)' },
                  { value: '24px', usage: 'XL gaps (major sections)' },
                  { value: '32px', usage: 'XXL gaps (page sections)' },
                ].map(space => (
                  <div key={space.value} className="flex items-center gap-[16px]">
                    <div 
                      className="bg-[#343A6F] rounded-[2px]" 
                      style={{ width: space.value, height: '24px' }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-[14px] text-[#121212]">
                        <span className="font-['Rubik:Medium',sans-serif] font-mono">{space.value}</span>
                        <span className="text-[#707070] ml-[12px]">— {space.usage}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Page Layout Pattern
              </h3>

              <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                <div className="bg-[#343A6F] h-[40px] flex items-center px-[12px] text-[12px] text-white">
                  Header (Nav)
                </div>
                <div className="border-b border-[#e0e0e0] bg-white p-[12px]">
                  <div className="text-[11px] text-[#707070] mb-[4px]">px-[16px] sm:px-[32px] lg:px-[64px]</div>
                  <div className="bg-[#f7f7f7] p-[8px] rounded">
                    <div className="text-[14px] font-['Rubik:Medium',sans-serif]">Page Title</div>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] p-[12px]">
                  <div className="text-[11px] text-[#707070] mb-[4px]">px-[16px] sm:px-[32px] lg:px-[64px]</div>
                  <div className="grid grid-cols-4 gap-[8px]">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-white border border-[#e0e0e0] h-[60px] rounded"></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#E8E8F5] border border-[#5C5C9E] p-[16px] rounded-[8px] mt-[24px]">
                <p className="text-[14px] text-[#121212]">
                  <strong>💡 Pattern:</strong> Use responsive padding <code className="bg-white px-[4px] py-[2px] rounded text-[13px] font-mono">px-[16px] sm:px-[32px] lg:px-[64px]</code> for all page containers to ensure consistent alignment.
                </p>
              </div>
            </div>
          )}

          {/* Components Section */}
          {activeSection === 'components' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                🧩 Component Library
              </h2>

              <p className="text-[15px] text-[#707070] mb-[32px]">
                Complete catalog of reusable UI components in the EdAssess system.
              </p>

              {/* Assessment Card */}
              <div className="border border-[#e0e0e0] rounded-[8px] p-[24px] mb-[24px]">
                <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212] mb-[12px]">
                  Assessment Card
                </h3>
                <p className="text-[14px] text-[#707070] mb-[16px]">
                  Primary card component for displaying assessments with subject icon, progress, and actions.
                </p>

                {/* Visual Example */}
                <div className="bg-[#f7f7f7] p-[24px] rounded-[8px] mb-[16px]">
                  <div className="w-[416px] h-[244px]">
                    <AssessmentCard />
                  </div>
                </div>

                <div className="bg-[#f7f7f7] p-[12px] rounded-[4px]">
                  <p className="text-[12px] text-[#707070] mb-[4px]">Location</p>
                  <code className="text-[13px] font-mono text-[#121212]">/src/app/components/AssessmentCard.tsx</code>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="border border-[#e0e0e0] rounded-[8px] p-[24px] mb-[24px]">
                <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212] mb-[12px]">
                  Progress Bar
                </h3>
                <p className="text-[14px] text-[#707070] mb-[16px]">
                  Visual indicator for completion percentage.
                </p>

                <div className="space-y-[16px] mb-[16px]">
                  <div>
                    <div className="flex items-center justify-between mb-[4px]">
                      <span className="text-[13px] text-[#707070]">25% Complete</span>
                      <span className="text-[13px] text-[#121212]">8/32</span>
                    </div>
                    <div className="bg-[#c4c8e1] h-[8px] rounded-[32px] overflow-hidden">
                      <div className="bg-[#343a6f] h-[8px] rounded-[100px]" style={{ width: '25%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-[4px]">
                      <span className="text-[13px] text-[#707070]">75% Complete</span>
                      <span className="text-[13px] text-[#121212]">24/32</span>
                    </div>
                    <div className="bg-[#c4c8e1] h-[8px] rounded-[32px] overflow-hidden">
                      <div className="bg-[#343a6f] h-[8px] rounded-[100px]" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-[4px]">
                      <span className="text-[13px] text-[#707070]">100% Complete</span>
                      <span className="text-[13px] text-[#121212]">32/32</span>
                    </div>
                    <div className="bg-[#c4c8e1] h-[8px] rounded-[32px] overflow-hidden">
                      <div className="bg-[#343a6f] h-[8px] rounded-[100px]" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f7f7f7] p-[12px] rounded-[4px]">
                  <p className="text-[12px] text-[#707070] mb-[4px]">Colors</p>
                  <p className="text-[13px] text-[#121212]">Track: <code className="font-mono">#C4C8E1</code> • Fill: <code className="font-mono">#343A6F</code></p>
                </div>
              </div>

              {/* Buttons */}
              <div className="border border-[#e0e0e0] rounded-[8px] p-[24px]">
                <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212] mb-[12px]">
                  Buttons
                </h3>
                <p className="text-[14px] text-[#707070] mb-[16px]">
                  Primary, secondary, and pill button styles.
                </p>

                <div className="space-y-[16px]">
                  <div>
                    <p className="text-[13px] text-[#707070] mb-[8px]">Primary Button</p>
                    <button className="px-[20px] py-[10px] bg-[#343A6F] text-white rounded-[4px] text-[14px]">
                      Create Assessment
                    </button>
                  </div>

                  <div>
                    <p className="text-[13px] text-[#707070] mb-[8px]">Pill Buttons (Actions)</p>
                    <div className="flex gap-[8px]">
                      <button className="px-[12px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[24px] text-[14px] text-[#707070]">
                        View
                      </button>
                      <button className="px-[12px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[24px] text-[14px] text-[#707070]">
                        Assign
                      </button>
                      <button className="px-[12px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[24px] text-[14px] text-[#707070]">
                        Edit
                      </button>
                      <button className="px-[12px] py-[8px] bg-[#f7f7f7] border border-[#d4d4d4] rounded-[24px] text-[14px] text-[#707070]">
                        Favorite
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-[13px] text-[#707070] mb-[8px]">Filter Tabs</p>
                    <div className="flex gap-[8px]">
                      <button className="px-[16px] py-[8px] bg-[#343A6F] text-white rounded-[100px] text-[14px]">
                        All
                      </button>
                      <button className="px-[16px] py-[8px] bg-white border border-[#e0e0e0] text-[#333] rounded-[100px] text-[14px]">
                        Reading
                      </button>
                      <button className="px-[16px] py-[8px] bg-white border border-[#e0e0e0] text-[#333] rounded-[100px] text-[14px]">
                        Math
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pages Section */}
          {activeSection === 'pages' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                📄 Page Structure
              </h2>

              <p className="text-[15px] text-[#707070] mb-[24px]">
                EdAssess consists of 7 main pages with consistent layout patterns.
              </p>

              <div className="space-y-[16px]">
                {[
                  { 
                    route: '/', 
                    name: 'Home (Dashboard)', 
                    file: 'Home.tsx', 
                    desc: 'Overview with stats, recent activity, and charts' 
                  },
                  { 
                    route: '/assessments', 
                    name: 'Assessments', 
                    file: 'AssessmentsNew.tsx', 
                    desc: 'List and manage all assessments with filtering' 
                  },
                  { 
                    route: '/reports', 
                    name: 'Reports', 
                    file: 'ReportsNew.tsx', 
                    desc: 'Performance reports and analytics with charts' 
                  },
                  { 
                    route: '/classes', 
                    name: 'Classes', 
                    file: 'ClassesNew.tsx', 
                    desc: 'List and manage all classes' 
                  },
                  { 
                    route: '/class/:id', 
                    name: 'Class Details', 
                    file: 'ClassDetails.tsx', 
                    desc: 'Individual class with student roster and progress' 
                  },
                  { 
                    route: '/accounts', 
                    name: 'Accounts', 
                    file: 'Accounts.tsx', 
                    desc: 'User account management with role filtering' 
                  },
                  { 
                    route: '/account/:id', 
                    name: 'Account Details', 
                    file: 'AccountDetails.tsx', 
                    desc: 'Individual user profile and information' 
                  },
                ].map(page => (
                  <div key={page.route} className="border border-[#e0e0e0] rounded-[8px] p-[20px]">
                    <div className="flex items-start justify-between mb-[8px]">
                      <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">
                        {page.name}
                      </h3>
                      <code className="text-[12px] font-mono bg-[#f7f7f7] px-[8px] py-[2px] rounded">
                        {page.route}
                      </code>
                    </div>
                    <p className="text-[14px] text-[#707070] mb-[8px]">{page.desc}</p>
                    <p className="text-[13px] text-[#8a8a8a]">
                      📁 /src/app/pages/<code className="font-mono">{page.file}</code>
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#D2F2FC] border border-[#03B0E8] p-[16px] rounded-[8px] mt-[24px]">
                <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212] mb-[8px]">
                  🔄 Routing
                </h4>
                <p className="text-[14px] text-[#121212]">
                  EdAssess uses React Router v6 for client-side routing. All routes are defined in <code className="bg-white px-[4px] py-[2px] rounded text-[13px] font-mono">/src/app/App.tsx</code>.
                </p>
              </div>
            </div>
          )}

          {/* Data Models Section */}
          {activeSection === 'data' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                💾 Data Models
              </h2>

              <p className="text-[15px] text-[#707070] mb-[24px]">
                TypeScript interfaces for all data structures in the system.
              </p>

              <div className="space-y-[24px]">
                {/* Assessment Interface */}
                <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                  <div className="bg-[#f7f7f7] px-[20px] py-[12px] border-b border-[#e0e0e0]">
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">Assessment</h3>
                  </div>
                  <div className="p-[20px]">
                    <pre className="text-[13px] font-mono text-[#121212] overflow-x-auto">
{`interface Assessment {
  id: string;
  title: string;
  subject: 'Reading' | 'History' | 'Science' | 
          'Math' | 'Career/Tech' | 'Other';
  grade: string;
  batteryGroup: string;
  progress: number;      // Students completed
  total: number;         // Total students
  dueDate: string;
  status: 'assigned' | 'in-progress' | 'completed';
  color: string;
  startDate?: string;
  endDate?: string;
}`}</pre>
                  </div>
                </div>

                {/* Class Interface */}
                <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                  <div className="bg-[#f7f7f7] px-[20px] py-[12px] border-b border-[#e0e0e0]">
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">Class</h3>
                  </div>
                  <div className="p-[20px]">
                    <pre className="text-[13px] font-mono text-[#121212] overflow-x-auto">
{`interface Class {
  id: string;
  name: string;
  grade: string;
  teacher: string;
  teacherId: string;
  subject: 'Reading' | 'History' | 'Science' | 
          'Math' | 'Career/Tech' | 'Other';
  studentCount: number;
  assessmentCount: number;
}`}</pre>
                  </div>
                </div>

                {/* Student Interface */}
                <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                  <div className="bg-[#f7f7f7] px-[20px] py-[12px] border-b border-[#e0e0e0]">
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">Student</h3>
                  </div>
                  <div className="p-[20px]">
                    <pre className="text-[13px] font-mono text-[#121212] overflow-x-auto">
{`interface Student {
  id: string;
  firstName: string;
  lastName: string;
  grade: string;
  classId: string;
  assessments: {
    assessmentId: string;
    status: 'not-started' | 'in-progress' | 
            'completed';
    score?: number;
    completedDate?: string;
  }[];
}`}</pre>
                  </div>
                </div>

                {/* User Interface */}
                <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                  <div className="bg-[#f7f7f7] px-[20px] py-[12px] border-b border-[#e0e0e0]">
                    <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">User</h3>
                  </div>
                  <div className="p-[20px]">
                    <pre className="text-[13px] font-mono text-[#121212] overflow-x-auto">
{`interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
  district: string;
  classes?: string[];
  status: 'active' | 'inactive';
  lastLogin?: string;
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="bg-[#f7f7f7] p-[16px] rounded-[8px] mt-[24px]">
                <p className="text-[13px] text-[#707070] mb-[4px]">Location</p>
                <code className="text-[14px] font-mono text-[#121212]">/src/app/data/mockData.ts</code>
              </div>
            </div>
          )}

          {/* Responsive Section */}
          {activeSection === 'responsive' && (
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[32px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#121212] mb-[16px]">
                📱 Responsive Design
              </h2>

              <p className="text-[15px] text-[#707070] mb-[24px]">
                Mobile-first responsive design with progressive enhancement across all breakpoints.
              </p>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[24px] mb-[16px]">
                Grid System
              </h3>

              <div className="space-y-[16px] mb-[32px]">
                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <p className="text-[14px] text-[#121212] mb-[12px]">
                    <strong>Mobile (&lt; 640px):</strong> 1 Column
                  </p>
                  <div className="grid grid-cols-1 gap-[8px]">
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                  </div>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <p className="text-[14px] text-[#121212] mb-[12px]">
                    <strong>Tablet (640px+):</strong> 2 Columns
                  </p>
                  <div className="grid grid-cols-2 gap-[8px]">
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                  </div>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <p className="text-[14px] text-[#121212] mb-[12px]">
                    <strong>Desktop (1024px+):</strong> 3 Columns
                  </p>
                  <div className="grid grid-cols-3 gap-[8px]">
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                  </div>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <p className="text-[14px] text-[#121212] mb-[12px]">
                    <strong>Large Desktop (1280px+):</strong> 4 Columns
                  </p>
                  <div className="grid grid-cols-4 gap-[8px]">
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                    <div className="bg-[#343A6F] h-[40px] rounded-[4px]"></div>
                  </div>
                </div>
              </div>

              <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mt-[32px] mb-[16px]">
                Responsive Patterns
              </h3>

              <div className="space-y-[16px]">
                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212] mb-[8px]">
                    Padding Pattern
                  </h4>
                  <pre className="bg-[#f7f7f7] p-[12px] rounded-[4px] text-[12px] font-mono overflow-x-auto">
{`className="px-[16px] sm:px-[32px] lg:px-[64px]"`}
                  </pre>
                  <p className="text-[13px] text-[#707070] mt-[8px]">
                    16px → 32px → 64px horizontal padding
                  </p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212] mb-[8px]">
                    Typography Scale
                  </h4>
                  <pre className="bg-[#f7f7f7] p-[12px] rounded-[4px] text-[12px] font-mono overflow-x-auto">
{`className="text-[24px] sm:text-[28px] lg:text-[32px]"`}
                  </pre>
                  <p className="text-[13px] text-[#707070] mt-[8px]">
                    H1: 24px → 28px → 32px
                  </p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212] mb-[8px]">
                    Grid Columns
                  </h4>
                  <pre className="bg-[#f7f7f7] p-[12px] rounded-[4px] text-[12px] font-mono overflow-x-auto">
{`className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"`}
                  </pre>
                  <p className="text-[13px] text-[#707070] mt-[8px]">
                    1 col → 2 cols → 3 cols → 4 cols
                  </p>
                </div>

                <div className="border border-[#e0e0e0] rounded-[8px] p-[16px]">
                  <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212] mb-[8px]">
                    Hide/Show Elements
                  </h4>
                  <pre className="bg-[#f7f7f7] p-[12px] rounded-[4px] text-[12px] font-mono overflow-x-auto">
{`className="lg:hidden"              // Hide on desktop
className="hidden lg:flex"         // Show on desktop only
className="hidden sm:flex lg:hidden" // Tablet only`}
                  </pre>
                </div>
              </div>

              <div className="bg-[#FCE1E5] border border-[#EC5E74] p-[16px] rounded-[8px] mt-[24px]">
                <h4 className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#121212] mb-[8px]">
                  ⚠️ Testing Checklist
                </h4>
                <ul className="space-y-[4px] text-[14px] text-[#121212] list-disc pl-[20px]">
                  <li>Test on mobile devices (320px - 640px)</li>
                  <li>Test on tablets (640px - 1024px)</li>
                  <li>Test on desktop (1024px+)</li>
                  <li>Verify hamburger menu works on mobile/tablet</li>
                  <li>Check grid layouts at all breakpoints</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}