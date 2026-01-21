import { useState, useEffect, useRef } from 'react';
import svgPaths from '../../imports/svg-ik5lgpuwcg';
import { Printer } from 'lucide-react';

interface PrintModalProps {
  onClose: () => void;
  onPrint: (options: { layout: 'portrait' | 'landscape' }) => void;
  // Optional prop to customize the description for Class Summary - Score Distribution Report
  description?: string;
  // Number of selected items to show warning message
  selectedCount?: number;
}

export function PrintModal({ onClose, onPrint, description, selectedCount }: PrintModalProps) {
  const [selectedLayout, setSelectedLayout] = useState<'portrait' | 'landscape'>('portrait');
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation - Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, []);

  const handlePrint = () => {
    onPrint({ layout: selectedLayout });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="print-modal-title"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[480px] mx-[16px] sm:mx-[24px]"
      >
        <div className="bg-white rounded-[8px] overflow-hidden shadow-lg">
          {/* Header */}
          <div className="bg-white relative w-full z-[2]">
            <div className="flex flex-col gap-[12px] items-start pb-0 pt-[20px] px-[20px] sm:px-[24px]">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[8px] items-center">
                  {/* Print Icon */}
                  <Printer className="size-[20px] text-[#343A6F]" strokeWidth={1.5} aria-hidden="true" />
                  <h2 id="print-modal-title" className="font-['Rubik:Medium',sans-serif] leading-[32px] text-[#121212] text-[20px]">
                    Print
                  </h2>
                </div>
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  aria-label="Close print dialog"
                  className="block cursor-pointer shrink-0 size-[44px] -mr-[10px] flex items-center justify-center hover:bg-[#f7f7f7] rounded-[4px] transition-colors"
                >
                  <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={svgPaths.p2f9c6900} fill="#121212" />
                  </svg>
                </button>
              </div>
              {/* Divider */}
              <div className="h-0 relative w-full">
                <div className="absolute inset-[-0.5px_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 584 1" aria-hidden="true">
                    <path d="M0 0.5H584" stroke="#D4D4D4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Body Container */}
          <div className="flex flex-col gap-[20px] items-start p-[20px] sm:p-[24px] relative w-full z-[1]">
            {/* Warning Message for bulk printing */}
            {selectedCount && selectedCount > 0 && (
              <div className="w-full bg-[#FFF3E0] border border-[#FFB74D] rounded-[8px] p-[12px]">
                <p className="font-['Rubik:Medium',sans-serif] text-[14px] leading-[20px] text-[#E65100]">
                  By selecting All on page, {selectedCount} {selectedCount === 1 ? 'report' : 'reports'} will print.
                </p>
              </div>
            )}
            
            {/* Description Text (if provided) */}
            {description && (
              <div className="w-full">
                <p className="text-[14px] leading-[20px] text-[#707070]">
                  {description}
                </p>
              </div>
            )}
            
            {/* Layout Section */}
            <div className="w-full">
              <p className="font-['Rubik:Medium',sans-serif] text-[16px] leading-[24px] text-[#121212] mb-[12px]">
                Layout
              </p>
              <div className="flex flex-col gap-[16px]" role="group" aria-labelledby="layout-label">
                <span id="layout-label" className="sr-only">Select print layout</span>
                {/* Portrait Option */}
                <button
                  onClick={() => setSelectedLayout('portrait')}
                  aria-pressed={selectedLayout === 'portrait'}
                  className="bg-white relative rounded-[8px] w-full border border-[#707070] hover:bg-[#f7f7f7] transition-colors min-h-[56px]"
                >
                  <div className="flex items-center p-[16px] gap-[8px]">
                    {/* Checkbox */}
                    <div className="relative shrink-0 size-[24px]" aria-hidden="true">
                      {selectedLayout === 'portrait' ? (
                        <>
                          <div className="absolute bg-[#343a6f] left-[2px] rounded-[3px] size-[20px] top-[2px]" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p232a8f80} fill="white" />
                            </svg>
                          </div>
                        </>
                      ) : (
                        <div className="absolute bg-white border-2 border-[#707070] inset-[8.33%] rounded-[3px]" />
                      )}
                    </div>
                    <p className="font-['Rubik:Medium',sans-serif] leading-[24px] text-[#333] text-[16px]">
                      Portrait
                    </p>
                  </div>
                </button>

                {/* Landscape Option */}
                <button
                  onClick={() => setSelectedLayout('landscape')}
                  aria-pressed={selectedLayout === 'landscape'}
                  className="bg-white relative rounded-[8px] w-full border border-[#707070] hover:bg-[#f7f7f7] transition-colors min-h-[56px]"
                >
                  <div className="flex items-center p-[16px] gap-[8px]">
                    {/* Checkbox */}
                    <div className="relative shrink-0 size-[24px]" aria-hidden="true">
                      {selectedLayout === 'landscape' ? (
                        <>
                          <div className="absolute bg-[#343a6f] left-[2px] rounded-[3px] size-[20px] top-[2px]" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p232a8f80} fill="white" />
                            </svg>
                          </div>
                        </>
                      ) : (
                        <div className="absolute bg-white border-2 border-[#707070] inset-[8.33%] rounded-[3px]" />
                      )}
                    </div>
                    <p className="font-['Rubik:Medium',sans-serif] leading-[24px] text-[#333] text-[16px]">
                      Landscape
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="bg-[#343a6f] min-h-[48px] rounded-[100px] w-full hover:bg-[#C4C8E1] hover:text-[#343A6F] transition-colors"
            >
              <div className="flex items-center justify-center px-[16px] py-[12px]">
                <p className="font-['Rubik:Medium',sans-serif] leading-[24px] text-[16px] text-center text-white">
                  Print PDF
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}