import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface DropdownOption<T> {
  value: T;
  label: string;
}

interface DropdownProps<T> {
  label: string;
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
  className?: string;
}

export function Dropdown<T>({
  label,
  value,
  options,
  onChange,
  className = ''
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white content-stretch flex gap-[4px] items-center justify-center min-h-[40px] px-[16px] py-[12px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#C4C8E1] transition-colors"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[100px]"
        />
        <p className="font-['Rubik:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center">
          {label}
        </p>
        <p className="font-['Rubik:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">
          {selectedOption?.label}
        </p>
        <ChevronUp
          className={`size-[20px] text-[#707070] transition-transform ${
            isOpen ? '' : 'rotate-180'
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-[8px] right-0 bg-white border border-[#707070] rounded-[8px] shadow-lg z-50 overflow-hidden min-w-[180px]">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-[16px] py-[12px] text-left font-['Rubik:Regular',sans-serif] text-[16px] transition-colors ${
                option.value === value
                  ? 'bg-[#343A6F] text-white'
                  : 'text-[#121212] hover:bg-[#C4C8E1]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
