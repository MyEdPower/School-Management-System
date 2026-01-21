import { Link } from 'react-router-dom';
import { Download, FileText, Clock } from 'lucide-react';

interface QueuedReport {
  id: string;
  organization: string;
  examName: string;
  requestedDate: string;
  completedDate: string;
  status: 'completed' | 'processing' | 'failed';
  downloadUrl?: string;
}

export function ReportQueue() {
  // Mock report queue data - showing 30 days of history
  const queuedReports: QueuedReport[] = [
    {
      id: '1',
      organization: 'Lincoln Elementary School District',
      examName: 'Math 8 Interim Assessment 1 - Student Performance by Standard',
      requestedDate: '08-Jan-26',
      completedDate: '08-Jan-26',
      status: 'completed',
      downloadUrl: '#'
    },
    {
      id: '2',
      organization: 'Lincoln Elementary School District',
      examName: 'Reading 7 Comprehensive Test - Class Summary Report',
      requestedDate: '07-Jan-26',
      completedDate: '07-Jan-26',
      status: 'completed',
      downloadUrl: '#'
    },
    {
      id: '3',
      organization: 'Lincoln Elementary School District',
      examName: 'Science 8 Final Exam - Item Distribution Report',
      requestedDate: '06-Jan-26',
      completedDate: '',
      status: 'processing',
    },
    {
      id: '4',
      organization: 'Jefferson Middle School',
      examName: 'History Midterm - Student Performance by Standard',
      requestedDate: '05-Jan-26',
      completedDate: '05-Jan-26',
      status: 'completed',
      downloadUrl: '#'
    },
    {
      id: '5',
      organization: 'Washington High School',
      examName: 'Algebra 1 Benchmark - Class Summary Report',
      requestedDate: '04-Jan-26',
      completedDate: '04-Jan-26',
      status: 'completed',
      downloadUrl: '#'
    },
    {
      id: '6',
      organization: 'Lincoln Elementary School District',
      examName: 'Math 6 Interim Assessment 2 - Student Performance by Standard',
      requestedDate: '03-Jan-26',
      completedDate: '',
      status: 'failed',
    },
    {
      id: '7',
      organization: 'Roosevelt Elementary',
      examName: 'Reading Comprehension Test - Class Summary Report',
      requestedDate: '02-Jan-26',
      completedDate: '02-Jan-26',
      status: 'completed',
      downloadUrl: '#'
    },
    {
      id: '8',
      organization: 'Lincoln Elementary School District',
      examName: 'Math 8 Final Exam - Item Distribution Report',
      requestedDate: '01-Jan-26',
      completedDate: '01-Jan-26',
      status: 'completed',
      downloadUrl: '#'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-[6px] px-[12px] py-[4px] bg-[#E8F5E9] text-[#388E3C] rounded-[100px] font-['Rubik:Medium',sans-serif] text-[14px]">
            <div className="size-[6px] bg-[#388E3C] rounded-full" />
            Completed
          </span>
        );
      case 'processing':
        return (
          <span className="inline-flex items-center gap-[6px] px-[12px] py-[4px] bg-[#FFF3E0] text-[#F57C00] rounded-[100px] font-['Rubik:Medium',sans-serif] text-[14px]">
            <Clock className="size-[14px]" strokeWidth={2} />
            Processing
          </span>
        );
      case 'failed':
        return (
          <span className="inline-flex items-center gap-[6px] px-[12px] py-[4px] bg-[#FFEBEE] text-[#B40B08] rounded-[100px] font-['Rubik:Medium',sans-serif] text-[14px]">
            <div className="size-[6px] bg-[#B40B08] rounded-full" />
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
            <div>
              <h1 className="font-['Rubik:Medium',sans-serif] text-[32px] leading-[40px] text-[#121212] mb-[4px]">
                Report Queue
              </h1>
              <p className="text-[16px] leading-[24px] text-[#707070]">
                View and download bulk report requests from the last 30 days
              </p>
            </div>
            <Link
              to="/reports"
              className="px-[20px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]"
            >
              Back to Reports
            </Link>
          </div>
        </div>
      </div>

      {/* Queue Table */}
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[24px]">
        <div className="bg-white rounded-[8px] border border-[#e0e0e0] overflow-hidden">
          {/* Table Header */}
          <div className="overflow-x-auto">
            <div className="min-w-[1100px] bg-[#F7F7F7] border-b border-[#e0e0e0] py-[16px] px-[24px]">
              <div className="grid grid-cols-[minmax(200px,2fr)_minmax(280px,3fr)_minmax(120px,1fr)_minmax(120px,1fr)_minmax(140px,1fr)_minmax(120px,1fr)] gap-[16px]">
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                  Organization
                </div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                  Exam Name
                </div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                  Requested
                </div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                  Completed
                </div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[16px] text-[#707070]">
                  Status
                </div>
                <div className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[16px] text-[#707070] text-center">
                  Actions
                </div>
              </div>
            </div>

            {/* Table Rows */}
            <div className="min-w-[1100px]">
              {queuedReports.map((report, index) => (
                <div
                  key={report.id}
                  className={`py-[20px] px-[24px] border-b border-[#F7F7F7] hover:bg-[#F9F9F9] transition-colors ${
                    index === queuedReports.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <div className="grid grid-cols-[minmax(200px,2fr)_minmax(280px,3fr)_minmax(120px,1fr)_minmax(120px,1fr)_minmax(140px,1fr)_minmax(120px,1fr)] gap-[16px] items-center">
                    {/* Organization */}
                    <div>
                      <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[20px] text-[#121212]">
                        {report.organization}
                      </span>
                    </div>

                    {/* Exam Name */}
                    <div className="flex items-start gap-[8px]">
                      <FileText className="size-[18px] text-[#707070] shrink-0 mt-[3px]" strokeWidth={2} />
                      <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[20px] text-[#121212]">
                        {report.examName}
                      </span>
                    </div>

                    {/* Requested Date */}
                    <div>
                      <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[20px] text-[#121212]">
                        {report.requestedDate}
                      </span>
                    </div>

                    {/* Completed Date */}
                    <div>
                      <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[20px] text-[#121212]">
                        {report.completedDate || '—'}
                      </span>
                    </div>

                    {/* Status */}
                    <div>
                      {getStatusBadge(report.status)}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center">
                      {report.status === 'completed' && report.downloadUrl ? (
                        <a
                          href={report.downloadUrl}
                          className="inline-flex items-center justify-center gap-[6px] px-[16px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]"
                          download
                        >
                          <Download className="size-[14px]" strokeWidth={2} />
                          <span>Download</span>
                        </a>
                      ) : report.status === 'failed' ? (
                        <button
                          className="inline-flex items-center justify-center px-[16px] py-[8px] border border-[#d4d4d4] rounded-[100px] hover:bg-[#C4C8E1] hover:text-[#343A6F] active:bg-[#343A6F] active:text-white transition-colors font-['Rubik:Regular',sans-serif] text-[14px] text-[#121212]"
                        >
                          Retry
                        </button>
                      ) : (
                        <span className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
                          —
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-[16px] bg-[#C4C8E1] border border-[#343A6F] rounded-[8px] p-[16px]">
          <p className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[20px] text-[#343A6F]">
            <strong className="font-['Rubik:Medium',sans-serif]">Note:</strong> Reports are retained for 30 days. Processing times may vary based on report size and system load.
          </p>
        </div>
      </div>
    </div>
  );
}