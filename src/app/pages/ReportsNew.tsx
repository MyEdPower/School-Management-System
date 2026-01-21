import { Link } from 'react-router-dom';
import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import svgPaths from "../../imports/svg-m4ku2sj0b0";
import { PieChart, Pie, Cell, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Sector } from 'recharts';
import { ReportCard } from '../components/ReportCard';
import { DynamicSearchInput } from '../components/DynamicSearchInput';
import { CustomSelect } from '../components/CustomSelect';

// Import report preview images
import previewScoreDistribution from 'figma:asset/abcdbae096682d7f9a0b5b3f9738dea4cc7aa513.png';
import previewStudentPerformance from 'figma:asset/04112b3ef285fe214c64f5ca0140d5d78ecd6851.png';
import previewItemDistribution from 'figma:asset/455ff0760803dd832608197ec6c03b0a8e849261.png';

export function ReportsNew() {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('Sort by: Most Recent');
  const [itemsPerPage, setItemsPerPage] = useState('Items Per Page: 12');

  // Custom Tooltip for Test Cycle and By Subject
  const CustomChartTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[12px] shadow-lg" style={{ minWidth: '160px' }}>
          <p className="font-['Rubik:SemiBold',sans-serif] text-[14px] text-[#333] mb-[8px]">{label}</p>
          <div className="border-t border-[#e0e0e0] pt-[8px] space-y-[6px]">{payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center justify-between gap-[12px]">
                <div className="flex items-center gap-[6px]">
                  <div className="w-[8px] h-[8px]" style={{ backgroundColor: entry.color }} />
                  <span className="text-[14px] text-[#333] capitalize">{entry.name === 'inProgress' ? 'In Progress' : entry.name}</span>
                </div>
                <span className="font-['Rubik:SemiBold',sans-serif] text-[14px] text-[#333]">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  // Completion Status Data
  const completionData = [
    { name: 'Assigned', value: 15, color: '#343A6F' },
    { name: 'In Progress', value: 22, color: '#8B92C4' },
    { name: 'Completed', value: 12, color: '#388E3C' }
  ];

  // Active shape renderer for hover effect
  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };
  
  // Test Cycle Data
  const testCycleData = [
    { month: 'Jan', assigned: 8, completed: 4, inProgress: 6 },
    { month: 'Feb', assigned: 12, completed: 8, inProgress: 10 },
    { month: 'Mar', assigned: 6, completed: 10, inProgress: 8 },
    { month: 'April', assigned: 10, completed: 6, inProgress: 9 },
    { month: 'May', assigned: 14, completed: 12, inProgress: 11 },
    { month: 'Jun', assigned: 9, completed: 8, inProgress: 7 },
    { month: 'July', assigned: 7, completed: 10, inProgress: 8 },
    { month: 'Aug', assigned: 11, completed: 7, inProgress: 9 },
    { month: 'Sept', assigned: 13, completed: 11, inProgress: 10 },
    { month: 'Oct', assigned: 10, completed: 9, inProgress: 8 },
    { month: 'Nov', assigned: 8, completed: 12, inProgress: 7 }
  ];
  
  // By Subject Data
  const subjectData = [
    { subject: 'Jan', assigned: 10, completed: 8, inProgress: 6 },
    { subject: 'Feb', assigned: 12, completed: 10, inProgress: 8 },
    { subject: 'Mar', assigned: 15, completed: 12, inProgress: 10 },
    { subject: 'April', assigned: 11, completed: 9, inProgress: 7 },
    { subject: 'May', assigned: 14, completed: 11, inProgress: 9 },
    { subject: 'Jun', assigned: 13, completed: 10, inProgress: 8 }
  ];
  
  // Search suggestions for dynamic search
  const searchSuggestions = [
    'Score Distribution Report',
    'Student Performance on Standards',
    'Item Distribution Report',
    'Student Level Report',
    'Performance Band Report',
    'Longitudinal Analysis'
  ];
  
  // Report types with preview images
  const reportTypes = [
    {
      id: 1,
      title: 'Score Distribution Report',
      description: 'Displays score distribution, performance breakdown across students, and standards assessed. Reports can be printed for individual classes or the entire district.',
      date: '14-Nov-2018',
      previewImage: previewScoreDistribution,
      link: '/reports/class-summary'
    },
    {
      id: 2,
      title: 'Student Performance on Standards',
      description: 'Shows individual student performance on specific standards with detailed breakdowns by question type and DOK levels. Includes comprehensive performance metrics.',
      date: '14-Dec-2018',
      previewImage: previewStudentPerformance,
      link: '/reports/student-report-selection'
    },
    {
      id: 3,
      title: 'Item Distribution Report',
      description: 'Provides detailed item analysis showing question-level performance across the class with difficulty ratings and discrimination indices.',
      date: '14-Nov-2018',
      previewImage: previewItemDistribution,
      link: '/reports/item-distribution'
    },
    {
      id: 4,
      title: 'Student Level Report',
      description: 'Displays individual student achievement, class performance and standards assessed on a selected assessment. Reports can be printed for individual students or the entire class.',
      date: '14-Dec-2018',
      previewImage: null,
      link: '#'
    },
    {
      id: 5,
      title: 'Performance Band Report',
      description: 'Shows distribution of students across performance bands (Advanced, Proficient, Developing, Emerging) with trend analysis over time.',
      date: '14-Nov-2018',
      previewImage: null,
      link: '#'
    },
    {
      id: 6,
      title: 'Longitudinal Analysis',
      description: 'Tracks student performance over multiple assessment cycles to identify growth trends and areas needing intervention.',
      date: '14-Dec-2018',
      previewImage: null,
      link: '#'
    }
  ];
  
  // Create 12 reports by duplicating the 6 report types
  const reports = [...reportTypes, ...reportTypes];
  
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[12px] sm:py-[14px] lg:py-[16px]">
          <div className="flex gap-[8px] items-center text-[12px] sm:text-[14px]">
            <Link to="/" className="text-[#8a8a8a] hover:underline">Home</Link>
            <span className="text-[#8a8a8a]\">|</span>
            <span className="text-[#333]">Reports</span>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[20px] lg:py-[24px]">
          <div className="flex items-center justify-between">
            <h1 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#333]">Reports</h1>
            <Link
              to="/reports/queue"
              className="flex items-center gap-[8px] px-[20px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]"
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Report Queue</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[24px] lg:py-[32px]">
        {/* Chart Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[24px] mb-[24px] sm:mb-[32px]">
          {/* Completion Status */}
          <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[16px] sm:p-[20px] lg:p-[24px] shadow-md" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}>
            <div className="flex items-center gap-[8px] mb-[16px] sm:mb-[24px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[16px] sm:text-[18px] text-[#333]">Completion Status</h2>
              <button 
                className="size-[16px] flex items-center justify-center rounded-full border border-[#8a8a8a] group relative hover:border-[#343A6F]"
                title="Hover to view chart details"
              >
                <span className="font-['Rubik:Medium',sans-serif] text-[10px] text-[#8a8a8a] group-hover:text-[#343A6F]">i</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10" style={{ backgroundColor: '#343A6F' }}>
                  Shows breakdown of assessments by status
                </div>
              </button>
            </div>
            
            <div className="flex items-center justify-center" style={{ height: '220px', minHeight: '220px' }}>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={completionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={90}
                    dataKey="value"
                    isAnimationActive={false}
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    activeIndex={activeIndex ?? undefined}
                    activeShape={renderActiveShape}
                  >
                    {completionData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex items-center justify-center gap-[16px] mt-[8px] text-[14px]">{completionData.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-[4px] cursor-pointer"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="w-[8px] h-[8px]" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Test Cycle */}
          <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[16px] sm:p-[20px] lg:p-[24px] shadow-md">
            <div className="flex items-center gap-[8px] mb-[16px] sm:mb-[24px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[16px] sm:text-[18px] text-[#333]\">Test Cycle</h2>
              <button 
                className="size-[16px] flex items-center justify-center rounded-full border border-[#8a8a8a] group relative hover:border-[#343A6F]"
                title="Hover to view chart details"
              >
                <span className="font-['Rubik:Medium',sans-serif] text-[10px] text-[#8a8a8a] group-hover:text-[#343A6F]">i</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10" style={{ backgroundColor: '#343A6F' }}>
                  Shows assessment trends over monthly cycles
                </div>
              </button>
            </div>
            
            <div style={{ height: '200px', minHeight: '200px' }}>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={testCycleData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomChartTooltip />} />
                  <Area type="monotone" dataKey="assigned" stackId="1" stroke="#343A6F" fill="#343A6F" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="completed" stackId="1" stroke="#388E3C" fill="#388E3C" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="inProgress" stackId="1" stroke="#8B92C4" fill="#8B92C4" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex gap-[16px] justify-center mt-[24px] text-[14px]">
              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] bg-[#343A6F]" />
                <span>Assigned</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] bg-[#388E3C]" />
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] bg-[#8B92C4]" />
                <span>In Progress</span>
              </div>
            </div>
          </div>
          
          {/* By Subject */}
          <div className="bg-white rounded-[8px] border border-[#e0e0e0] p-[16px] sm:p-[20px] lg:p-[24px] shadow-md">
            <div className="flex items-center gap-[8px] mb-[16px] sm:mb-[24px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[16px] sm:text-[18px] text-[#333]\">By Subject</h2>
              <button 
                className="size-[16px] flex items-center justify-center rounded-full border border-[#8a8a8a] group relative hover:border-[#343A6F]"
                title="Hover to view chart details"
              >
                <span className="font-['Rubik:Medium',sans-serif] text-[10px] text-[#8a8a8a] group-hover:text-[#343A6F]">i</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10" style={{ backgroundColor: '#343A6F' }}>
                  Displays assessment distribution by subject area
                </div>
              </button>
            </div>
            
            <div style={{ height: '200px', minHeight: '200px' }}>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={subjectData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomChartTooltip />} />
                  <Bar dataKey="assigned" stackId="a" fill="#343A6F" />
                  <Bar dataKey="completed" stackId="a" fill="#388E3C" />
                  <Bar dataKey="inProgress" stackId="a" fill="#8B92C4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex gap-[16px] justify-center mt-[24px] text-[14px]">
              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] bg-[#343A6F]" />
                <span>Assigned</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] bg-[#388E3C]" />
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <div className="w-[8px] h-[8px] bg-[#8B92C4]" />
                <span>In Progress</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[12px] mb-[16px] sm:mb-[24px]">
          <DynamicSearchInput 
            placeholder="Search"
            suggestions={searchSuggestions}
            rounded={true}
            className="w-full sm:w-[300px] lg:w-[400px]"
          />
          
          <div className="flex gap-[8px] sm:gap-[12px] flex-wrap">
            <CustomSelect
              value={sortBy}
              onChange={(value) => setSortBy(value)}
              options={[
                { value: 'most-recent', label: 'Sort by: Most Recent' },
                { value: 'oldest', label: 'Sort by: Oldest' },
                { value: 'name-az', label: 'Sort by: Name A-Z' }
              ]}
              rounded={true}
              className="flex-1 sm:flex-none sm:w-auto"
            />
            <CustomSelect
              value={itemsPerPage}
              onChange={(value) => setItemsPerPage(value)}
              options={[
                { value: '12', label: 'Items Per Page: 12' },
                { value: '24', label: 'Items Per Page: 24' },
                { value: '48', label: 'Items Per Page: 48' }
              ]}
              rounded={true}
              className="flex-1 sm:flex-none sm:w-auto"
            />
          </div>
        </div>
        
        {/* Report Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
          {reports.map((report, index) => (
            <ReportCard
              key={`${report.id}-${index}`}
              title={report.title}
              description={report.description}
              date={report.date}
              previewImage={report.previewImage}
              link={report.link}
              onPreviewClick={() => report.previewImage && setSelectedPreview(report.previewImage)}
            />
          ))}
        </div>
      </div>
      
      {/* Preview Modal */}
      {selectedPreview && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-[16px] sm:p-[32px]"
          onClick={() => setSelectedPreview(null)}
        >
          <div className="relative bg-white rounded-[8px] max-w-[900px] w-full max-h-[90vh] overflow-auto">
            <button
              onClick={() => setSelectedPreview(null)}
              className="sticky top-[16px] right-[16px] float-right size-[40px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              title="Close preview"
            >
              <X className="size-[24px] text-[#333]" />
            </button>
            <img 
              src={selectedPreview} 
              alt="Report preview" 
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}