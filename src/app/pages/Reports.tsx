import { useState } from 'react';
import { assessments, students, classes } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';

export function Reports() {
  const [reportType, setReportType] = useState<string>('completion');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Prepare data for charts
  const completionData = [
    { name: 'Not Started', value: 15, color: '#E0E0E0' },
    { name: 'In Progress', value: assessments.filter(a => a.status === 'in-progress').length, color: '#8B92C4' },
    { name: 'Completed', value: assessments.filter(a => a.status === 'completed').length, color: '#388E3C' }
  ];
  
  const subjectData = [
    { subject: 'Math', total: assessments.filter(a => a.subject === 'Math').length, completed: 2 },
    { subject: 'Reading', total: assessments.filter(a => a.subject === 'Reading').length, completed: 3 },
    { subject: 'Science', total: assessments.filter(a => a.subject === 'Science').length, completed: 1 },
    { subject: 'English', total: assessments.filter(a => a.subject === 'English').length, completed: 1 }
  ];
  
  const performanceData = [
    { band: 'A (90-100)', count: 5, color: '#4CAF50' },
    { band: 'B (80-89)', count: 8, color: '#8BC34A' },
    { band: 'C (70-79)', count: 6, color: '#FFC107' },
    { band: 'D (60-69)', count: 3, color: '#FF9800' },
    { band: 'F (0-59)', count: 1, color: '#F44336' }
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

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };
  
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white border-b border-[#ebebeb]">
        <div className="max-w-[1440px] mx-auto px-[64px] py-[32px] pb-[24px]">
          <h1 className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#333]">Reports & Analytics</h1>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-[64px] py-[32px]">
        {/* Filter Controls */}
        <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px] mb-[24px]">
          <div className="flex gap-[12px] items-center">
            <select 
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-[12px] py-[8px] border border-[#707070] rounded"
            >
              <option value="completion">Completion Status</option>
              <option value="subject">By Subject</option>
              <option value="performance">Performance Band</option>
              <option value="timeline">Test Cycle Timeline</option>
            </select>
            
            <select 
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-[12px] py-[8px] border border-[#707070] rounded"
            >
              <option value="all">All Classes</option>
              {classes.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            
            <input 
              type="date" 
              className="px-[12px] py-[8px] border border-[#707070] rounded"
              placeholder="Start Date"
            />
            
            <input 
              type="date" 
              className="px-[12px] py-[8px] border border-[#707070] rounded"
              placeholder="End Date"
            />
            
            <button className="ml-auto px-[16px] py-[8px] bg-[#343a6f] text-white rounded hover:bg-[#2a2f5a]">
              Export PDF
            </button>
            <button className="px-[16px] py-[8px] border border-[#707070] rounded hover:bg-gray-50">
              Export CSV
            </button>
          </div>
        </div>
        
        {/* Reports Grid */}
        <div className="grid grid-cols-2 gap-[24px]">
          {/* Completion Status Chart */}
          {reportType === 'completion' && (
            <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px] col-span-2">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[24px]">Completion Status</h2>
              <div className="flex items-center justify-center gap-[64px]">
                {/* Pie Chart */}
                <div style={{ width: '400px', height: '400px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={completionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
                        activeShape={renderActiveShape}
                        onMouseEnter={onPieEnter}
                        onMouseLeave={onPieLeave}
                      >
                        {completionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Custom Legend with Numbers */}
                <div className="flex flex-col gap-[16px]">
                  {completionData.map((entry, index) => (
                    <div 
                      key={entry.name}
                      className="flex items-center gap-[12px] cursor-pointer"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div 
                        className="size-[20px] rounded-[4px]" 
                        style={{ backgroundColor: entry.color }}
                      />
                      <div className="flex items-baseline gap-[8px]">
                        <span className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212]">
                          {entry.name}
                        </span>
                        <span className="font-['Rubik:Regular',sans-serif] text-[24px] leading-[32px] text-[#121212]">
                          {entry.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Subject Performance */}
          {reportType === 'subject' && (
            <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px] col-span-2">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[24px]">Assessment by Subject</h2>
              <div style={{ height: '300px', minHeight: '300px' }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8B92C4" name="Total Assessments" />
                    <Bar dataKey="completed" fill="#388E3C" name="Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          
          {/* Performance Band */}
          {reportType === 'performance' && (
            <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px] col-span-2">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[24px]">Performance Band Distribution</h2>
              <div style={{ height: '300px', minHeight: '300px' }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="band" type="category" />
                    <Tooltip />
                    <Bar dataKey="count" name="Number of Students">
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}