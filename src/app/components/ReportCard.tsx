import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import svgPaths from "../../imports/svg-m4ku2sj0b0";

interface ReportCardProps {
  title: string;
  description: string;
  date: string;
  previewImage?: string | null;
  link: string;
  onPreviewClick?: () => void;
}

export function ReportCard({ 
  title, 
  description, 
  date, 
  previewImage, 
  link, 
  onPreviewClick 
}: ReportCardProps) {
  const CardContent = () => (
    <div className="bg-white rounded-[8px] border border-[#e0e0e0] border-b-[8px] border-b-[#343A6F] p-[24px] hover:border-[#343A6F] hover:shadow-md transition-all flex flex-col h-[248px] shadow-md">
      <h3 className="font-['Rubik:Medium',sans-serif] font-medium text-[20px] leading-[28px] text-[#333] mb-[12px] flex-shrink-0">
        {title}
      </h3>
      <div className="flex-1 overflow-y-auto mb-[16px]">
        <p className="font-['Rubik:Regular',sans-serif] text-[16px] leading-[24px] text-[#666]">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between flex-shrink-0">
        <span className="font-['Rubik:Regular',sans-serif] text-[14px] leading-[16px] text-[#8a8a8a]">{date}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onPreviewClick) {
              onPreviewClick();
            }
          }}
          className="size-[32px] flex items-center justify-center hover:bg-[#C4C8E1] rounded-full transition-colors group"
          title={previewImage ? "Preview report" : "Preview not available"}
          disabled={!previewImage}
        >
          <Eye className={`size-[18px] transition-colors ${previewImage ? 'text-[#8a8a8a] group-hover:text-[#343A6F]' : 'text-[#d0d0d0]'}`} />
        </button>
      </div>
    </div>
  );

  // If link is '#', render without Link component
  if (link === '#') {
    return <CardContent />;
  }

  // Otherwise wrap with Link
  return (
    <Link to={link} className="block">
      <CardContent />
    </Link>
  );
}