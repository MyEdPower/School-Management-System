import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  rounded?: boolean;
  className?: string;
}

export function CustomSelect({ 
  value, 
  options, 
  onChange,
  placeholder = "",
  rounded = false,
  className = ""
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => prev > 0 ? prev - 1 : 0);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0) {
          handleSelectOption(options[focusedIndex].label);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const handleSelectOption = (label: string) => {
    onChange(label);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const borderRadius = rounded ? 'rounded-[20px]' : 'rounded-[8px]';

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="select-dropdown"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`font-['Rubik:Regular',sans-serif] font-normal w-full pl-[16px] pr-[36px] py-[12px] border border-[#8a8a8a] ${borderRadius} text-[14px] leading-[16px] bg-white focus:outline-none focus:border-[#343A6F] hover:border-[#343A6F] transition-colors cursor-pointer relative`}
      >
        {value || placeholder}
        <div className="absolute right-[12px] top-[50%] translate-y-[-50%] pointer-events-none">
          <ChevronDown className={`size-[16px] text-[#707070] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          id="select-dropdown"
          role="listbox"
          className="absolute z-50 w-full mt-[4px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-lg max-h-[300px] overflow-y-auto"
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              role="option"
              aria-selected={option.label === value}
              className={`font-['Rubik:Regular',sans-serif] font-normal px-[16px] py-[12px] cursor-pointer text-[14px] leading-[16px] transition-colors ${
                index === focusedIndex
                  ? 'bg-[#C4C8E1] text-[#343A6F]'
                  : option.label === value
                  ? 'bg-[#f7f7f7] text-[#343A6F]'
                  : 'text-[#121212] hover:bg-[#C4C8E1]'
              } ${index !== options.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}
              onClick={() => handleSelectOption(option.label)}
              onMouseEnter={() => setFocusedIndex(index)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}