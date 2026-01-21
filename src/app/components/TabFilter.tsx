import React from 'react';

interface Tab<T extends string> {
  id: T;
  label: string;
  count?: number;
}

interface TabFilterProps<T extends string> {
  tabs: Tab<T>[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  className?: string;
}

export function TabFilter<T extends string>({
  tabs,
  activeTab,
  onTabChange,
  className = ''
}: TabFilterProps<T>) {
  return (
    <div className={`flex gap-[24px] overflow-x-auto border-b border-[#EBEBEB] ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`font-['Rubik:Medium',sans-serif] text-[14px] pb-[12px] whitespace-nowrap transition-colors relative ${
            activeTab === tab.id
              ? 'text-[#121212]'
              : 'text-[#707070] hover:text-[#343A6F]'
          }`}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ms-1">({tab.count})</span>
          )}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#343A6F]" />
          )}
        </button>
      ))}
    </div>
  );
}
