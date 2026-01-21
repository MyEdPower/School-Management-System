import { useState } from 'react';

interface AutocompleteSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function AutocompleteSelect({ label, value, options, onChange, disabled = false }: AutocompleteSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="relative">
      <label className={`block text-[14px] mb-[8px] ${disabled ? 'text-[#BDBDBD]' : 'text-[#707070]'}`}>
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={isOpen ? searchValue : value}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            if (!disabled) {
              setIsOpen(true);
              setSearchValue('');
            }
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsOpen(false);
              setSearchValue('');
            }, 200);
          }}
          disabled={disabled}
          className={`w-full px-[16px] py-[12px] border rounded-[4px] text-[14px] ${
            disabled
              ? 'bg-[#F5F5F5] border-[#D4D4D4] text-[#BDBDBD] cursor-not-allowed'
              : 'bg-white border-[#8a8a8a] text-[#121212] hover:border-[#343A6F] focus:outline-none focus:border-[#343A6F]'
          }`}
        />
        <svg 
          className={`absolute right-[12px] top-1/2 -translate-y-1/2 size-[16px] pointer-events-none transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 16 16"
        >
          <path d="M4 6L8 10L12 6" stroke={disabled ? '#BDBDBD' : '#8A8A8A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {isOpen && !disabled && filteredOptions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-[4px] bg-white border border-[#8a8a8a] rounded-[4px] shadow-lg z-50 max-h-[280px] overflow-y-auto">
          {filteredOptions.map((option) => (
            <div
              key={option}
              className={`px-[16px] py-[10px] text-[14px] cursor-pointer hover:bg-[#C4C8E1] ${
                option === value ? 'bg-[#C4C8E1] text-[#121212]' : 'text-[#121212]'
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
                setSearchValue('');
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}