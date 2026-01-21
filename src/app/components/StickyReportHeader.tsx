import { Link } from 'react-router-dom';
import { HorizontalFilterRow, HorizontalFilterRowData, HorizontalFilterRowOptions } from './HorizontalFilterRow';

interface StickyReportHeaderProps {
  pageTitle: string;
  breadcrumbs: { label: string; href?: string }[];
  filterInitialValues: HorizontalFilterRowData;
  filterOptions: HorizontalFilterRowOptions;
  onFilterChange: (filters: HorizontalFilterRowData) => void;
  onRunReport: (filters: HorizontalFilterRowData) => void;
}

export function StickyReportHeader({
  pageTitle,
  breadcrumbs,
  filterInitialValues,
  filterOptions,
  onFilterChange,
  onRunReport,
}: StickyReportHeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      {/* Breadcrumb */}
      <div className="bg-white px-[16px] sm:px-[32px] lg:px-[64px] py-[12px] border-b border-[#e0e0e0]">
        <div className="flex items-center gap-[8px] text-[14px] text-[#707070]">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-[8px]">
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-[#343A6F]">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#121212]">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Page Title with Export/Print Buttons */}
      <div className="bg-white px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[20px] border-b border-[#e0e0e0]">
        <h1 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#121212]">
          {pageTitle}
        </h1>
      </div>

      {/* Horizontal Filter Row */}
      <div className="bg-white px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] border-b border-[#e0e0e0]">
        <HorizontalFilterRow
          initialValues={filterInitialValues}
          options={filterOptions}
          onFilterChange={onFilterChange}
          onRunReport={onRunReport}
        />
      </div>
    </div>
  );
}