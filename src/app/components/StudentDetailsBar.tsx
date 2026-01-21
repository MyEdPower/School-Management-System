interface StudentDetailsBarProps {
  studentName: string;
  studentId: string;
  grade: string;
  teacher: string;
  school: string;
}

export function StudentDetailsBar({
  studentName,
  studentId,
  grade,
  teacher,
  school,
}: StudentDetailsBarProps) {
  return (
    <div className="bg-white px-[16px] sm:px-[32px] lg:px-[64px] py-[16px]">
      <div className="bg-[#343A6F] rounded-[8px] p-[16px]">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-[24px] gap-y-[8px]">
          <div>
            <p className="text-[14px] text-[#C4C8E1] mb-[4px]">Student Name</p>
            <p className="text-[14px] text-white font-['Rubik:Medium',sans-serif]">
              {studentName}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#C4C8E1] mb-[4px]">Student ID</p>
            <p className="text-[14px] text-white font-['Rubik:Medium',sans-serif]">
              {studentId}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#C4C8E1] mb-[4px]">Grade</p>
            <p className="text-[14px] text-white font-['Rubik:Medium',sans-serif]">
              {grade}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#C4C8E1] mb-[4px]">Teacher</p>
            <p className="text-[14px] text-white font-['Rubik:Medium',sans-serif]">
              {teacher}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#C4C8E1] mb-[4px]">School</p>
            <p className="text-[14px] text-white font-['Rubik:Medium',sans-serif]">
              {school}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
