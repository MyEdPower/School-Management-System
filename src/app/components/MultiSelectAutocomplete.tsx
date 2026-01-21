import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

interface MultiSelectAutocompleteProps {
  label: string;
  values: string[];
  options: string[];
  onChange: (values: string[]) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function MultiSelectAutocomplete({ 
  label, 
  values, 
  options, 
  onChange, 
  disabled = false,
  placeholder = 'Select...'
}: MultiSelectAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchValue('');
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const toggleOption = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter(v => v !== option));
    } else {
      onChange([...values, option]);
    }
  };

  const getDisplayValue = () => {
    if (values.length === 0) return placeholder;
    if (values.length === 1) return values[0];
    return `${values.length} selected`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className={`block text-[14px] mb-[8px] ${disabled ? 'text-[#BDBDBD]' : 'text-[#707070]'}`}>
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={isOpen ? searchValue : getDisplayValue()}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            if (!disabled) {
              setIsOpen(true);
              setSearchValue('');
            }
          }}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-[16px] py-[12px] border rounded-[4px] text-[14px] ${
            disabled
              ? 'bg-[#F5F5F5] border-[#D4D4D4] text-[#BDBDBD] cursor-not-allowed'
              : 'bg-white border-[#8a8a8a] text-[#121212] hover:border-[#343A6F] focus:outline-none focus:border-[#343A6F] cursor-pointer'
          }`}
        />
        <svg 
          className={`absolute right-[12px] top-1/2 -translate-y-1/2 size-[16px] pointer-events-none transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 16 16"
        >
          <path 
            d="M4 6L8 10L12 6" 
            stroke={disabled ? '#BDBDBD' : '#707070'}
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        {isOpen && !disabled && (
          <div className="absolute z-50 mt-[4px] w-full bg-white border border-[#d4d4d4] rounded-[4px] shadow-lg max-h-[240px] overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-[16px] py-[12px] text-[14px] text-[#707070]">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = values.includes(option);
                return (
                  <div
                    key={option}
                    onClick={() => toggleOption(option)}
                    className="px-[16px] py-[10px] text-[14px] cursor-pointer hover:bg-[#F5F5F7] flex items-center justify-between gap-[8px]"
                  >
                    <span className={isSelected ? 'text-[#343A6F] font-["Rubik:Medium",sans-serif]' : 'text-[#121212]'}>
                      {option}
                    </span>
                    {isSelected && (
                      <Check className="size-[16px] text-[#343A6F]" strokeWidth={2} />
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
