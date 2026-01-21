import { useParams, Link } from 'react-router-dom';
import { getClassById, getStudentsByClassId, assessments } from '../data/mockData';
import { useState } from 'react';

export function ClassDetails() {
  const { id } = useParams<{ id: string }>();
  const classData = id ? getClassById(id) : null;
  const students = id ? getStudentsByClassId(id) : [];
  const [activeTab, setActiveTab] = useState<'students' | 'assessments' | 'performance'>('students');
  
  if (!classData) {
    return <div className="p-[64px]">Class not found</div>;
  }
  
  const classAssessments = assessments.slice(0, 3);
  
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white border-b border-[#ebebeb]">
        <div className="max-w-[1440px] mx-auto px-[64px] py-[32px] pb-[24px]">
          <Link to="/classes" className="text-[#5779C9] hover:underline mb-[8px] inline-block">
            ← Back to Classes
          </Link>
          <h1 className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#333]">{classData.name}</h1>
          <p className="text-[16px] text-[#666]">{classData.grade} • {classData.subject}</p>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-[64px] py-[32px]">
        {/* Class Overview */}
        <div className="grid grid-cols-4 gap-[16px] mb-[24px]">
          <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
            <p className="text-[14px] text-[#666] mb-[8px]">Teacher</p>
            <p className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212]">{classData.teacher}</p>
          </div>
          <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
            <p className="text-[14px] text-[#666] mb-[8px]">Students</p>
            <p className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212]">{classData.studentCount}</p>
          </div>
          <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
            <p className="text-[14px] text-[#666] mb-[8px]">Active Assessments</p>
            <p className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212]">{classData.assessmentCount}</p>
          </div>
          <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
            <p className="text-[14px] text-[#666] mb-[8px]">Avg Completion</p>
            <p className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212]">75%</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-[8px] border border-[#d4d4d4]">
          <div className="flex border-b border-[#e0e0e0]">
            <button 
              onClick={() => setActiveTab('students')}
              className={`px-[24px] py-[16px] font-['Rubik:Medium',sans-serif] ${
                activeTab === 'students' 
                  ? 'border-b-2 border-[#343a6f] text-[#343a6f]' 
                  : 'text-[#666]'
              }`}
            >
              Students
            </button>
            <button 
              onClick={() => setActiveTab('assessments')}
              className={`px-[24px] py-[16px] font-['Rubik:Medium',sans-serif] ${
                activeTab === 'assessments' 
                  ? 'border-b-2 border-[#343a6f] text-[#343a6f]' 
                  : 'text-[#666]'
              }`}
            >
              Assessments
            </button>
            <button 
              onClick={() => setActiveTab('performance')}
              className={`px-[24px] py-[16px] font-['Rubik:Medium',sans-serif] ${
                activeTab === 'performance' 
                  ? 'border-b-2 border-[#343a6f] text-[#343a6f]' 
                  : 'text-[#666]'
              }`}
            >
              Performance
            </button>
          </div>
          
          <div className="p-[24px]">
            {activeTab === 'students' && (
              <div>
                <div className="flex justify-between items-center mb-[16px]">
                  <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212]">Student List</h3>
                  <button className="px-[16px] py-[8px] border border-[#707070] rounded hover:bg-gray-50">
                    Add Student
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e0e0e0]">
                      <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Name</th>
                      <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Grade</th>
                      <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Assessments Completed</th>
                      <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Avg Score</th>
                      <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => {
                      const completed = student.assessments.filter(a => a.status === 'completed').length;
                      const avgScore = student.assessments.filter(a => a.score).reduce((sum, a) => sum + (a.score || 0), 0) / 
                                       student.assessments.filter(a => a.score).length;
                      
                      return (
                        <tr key={student.id} className="border-b border-[#f0f0f0]">
                          <td className="py-[12px]">{student.firstName} {student.lastName}</td>
                          <td className="py-[12px]">{student.grade}</td>
                          <td className="py-[12px]">{completed} / {student.assessments.length}</td>
                          <td className="py-[12px]">{avgScore ? Math.round(avgScore) : 'N/A'}%</td>
                          <td className="py-[12px]">
                            <button className="px-[12px] py-[4px] border border-[#707070] rounded text-[14px] hover:bg-gray-50">
                              View Details
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'assessments' && (
              <div>
                <div className="flex justify-between items-center mb-[16px]">
                  <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212]">Assigned Assessments</h3>
                  <button className="px-[16px] py-[8px] bg-[#343a6f] text-white rounded hover:bg-[#2a2f5a]">
                    Assign New Assessment
                  </button>
                </div>
                <div className="space-y-[12px]">
                  {classAssessments.map(assessment => {
                    const progressPercent = Math.round((assessment.progress / assessment.total) * 100);
                    return (
                      <div key={assessment.id} className="border border-[#d4d4d4] rounded-[8px] p-[16px]">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212] mb-[4px]">
                              {assessment.title}
                            </h4>
                            <p className="text-[14px] text-[#666] mb-[12px]">
                              {assessment.subject} • Due: {assessment.dueDate}
                            </p>
                            <div className="flex items-center gap-[12px]">
                              <div className="flex-1">
                                <div className="w-full h-[8px] bg-[#f0f0f0] rounded-full overflow-hidden">
                                  <div 
                                    className="h-full rounded-full" 
                                    style={{ width: `${progressPercent}%`, backgroundColor: assessment.color }}
                                  />
                                </div>
                              </div>
                              <span className="text-[14px] text-[#666]">{assessment.progress}/{assessment.total}</span>
                            </div>
                          </div>
                          <div className="flex gap-[8px] ml-[16px]">
                            <button className="px-[12px] py-[6px] border border-[#707070] rounded text-[14px]">
                              View
                            </button>
                            <button className="px-[12px] py-[6px] border border-[#707070] rounded text-[14px]">
                              Monitor
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {activeTab === 'performance' && (
              <div>
                <h3 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212] mb-[16px]">Class Performance Overview</h3>
                <div className="grid grid-cols-3 gap-[16px]">
                  <div className="border border-[#d4d4d4] rounded-[8px] p-[20px] text-center">
                    <p className="text-[14px] text-[#666] mb-[12px]">Class Average</p>
                    <p className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#121212]">82%</p>
                  </div>
                  <div className="border border-[#d4d4d4] rounded-[8px] p-[20px] text-center">
                    <p className="text-[14px] text-[#666] mb-[12px]">Highest Score</p>
                    <p className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#388E3C]">95%</p>
                  </div>
                  <div className="border border-[#d4d4d4] rounded-[8px] p-[20px] text-center">
                    <p className="text-[14px] text-[#666] mb-[12px]">Lowest Score</p>
                    <p className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#E54742]">65%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}