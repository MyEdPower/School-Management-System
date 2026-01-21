import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

interface DynamicSearchInputProps {
  placeholder?: string;
  suggestions: string[];
  onSearch?: (value: string) => void;
  rounded?: boolean;
  className?: string;
}

export function DynamicSearchInput({ 
  placeholder = "Search", 
  suggestions, 
  onSearch,
  rounded = false,
  className = ""
}: DynamicSearchInputProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setIsOpen(true);
    setFocusedIndex(-1);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && filteredSuggestions.length > 0 && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true);
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < filteredSuggestions.length) {
          handleSelectSuggestion(filteredSuggestions[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchValue(suggestion);
    setIsOpen(false);
    setFocusedIndex(-1);
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="font-['Rubik:Medium',sans-serif] text-[#343A6F]">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  const borderRadius = rounded ? 'rounded-[20px]' : 'rounded-[4px]';

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute left-[12px] sm:left-[16px] top-[50%] translate-y-[-50%] size-[16px] text-[#707070]">
          <Search className="size-[16px]" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (filteredSuggestions.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder={placeholder}
          className={`w-full pl-[36px] sm:pl-[40px] pr-[12px] sm:pr-[16px] py-[8px] sm:py-[12px] border border-[#8a8a8a] ${borderRadius} text-[14px] bg-white focus:outline-none focus:border-[#343A6F] hover:border-[#343A6F] transition-colors`}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="search-suggestions"
        />
      </div>

      {isOpen && filteredSuggestions.length > 0 && (
        <div
          ref={dropdownRef}
          id="search-suggestions"
          role="listbox"
          className="absolute z-50 w-full mt-[4px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-lg max-h-[300px] overflow-y-auto"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              role="option"
              aria-selected={index === focusedIndex}
              className={`px-[16px] py-[12px] cursor-pointer text-[14px] transition-colors ${
                index === focusedIndex
                  ? 'bg-[#C4C8E1] text-[#343A6F]'
                  : 'text-[#121212] hover:bg-[#C4C8E1]'
              } ${index !== filteredSuggestions.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}
              onClick={() => handleSelectSuggestion(suggestion)}
              onMouseEnter={() => setFocusedIndex(index)}
            >
              {highlightMatch(suggestion, searchValue)}
            </div>
          ))}
        </div>
      )}

      {isOpen && searchValue && filteredSuggestions.length === 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-[4px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-lg"
        >
          <div className="px-[16px] py-[12px] text-[14px] text-[#707070] text-center">
            No results found
          </div>
        </div>
      )}
    </div>
  );
}