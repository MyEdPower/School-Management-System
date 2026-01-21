import React from 'react';
import { Badge } from './Badge';

interface TimelineEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  color: string;
  category?: string;
}

interface WeekDay {
  short: string;
  full: string;
  date: string;
  dayNum: number;
}

interface TimelineProps {
  title: string;
  events: TimelineEvent[];
  weekDays: WeekDay[];
  onNavigate?: {
    onPrevious: () => void;
    onNext: () => void;
  };
  className?: string;
}

export function Timeline({
  title,
  events,
  weekDays,
  onNavigate,
  className = ''
}: TimelineProps) {
  // Helper function to calculate assessment position and width
  const getEventPosition = (event: TimelineEvent) => {
    const startDay = parseInt(event.startDate.split('-')[0]);
    const endDay = parseInt(event.endDate.split('-')[0]);

    // Find which column the event starts and ends in
    const startIndex = weekDays.findIndex(d => d.dayNum === startDay);
    const endIndex = weekDays.findIndex(d => d.dayNum === endDay);

    if (startIndex === -1 && endIndex === -1) return null;

    // Handle events that extend beyond the week view
    const actualStartIndex = Math.max(0, startIndex);
    const actualEndIndex = endIndex === -1 ? weekDays.length - 1 : Math.min(weekDays.length - 1, endIndex);

    const columnWidth = 100 / weekDays.length;
    const left = actualStartIndex * columnWidth;
    const width = (actualEndIndex - actualStartIndex + 1) * columnWidth;

    return { left: `${left}%`, width: `${width}%` };
  };

  return (
    <div className={`bg-white p-[20px] sm:p-[24px] lg:p-[32px] rounded-[8px] border border-[#d4d4d4] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] ${className}`} dir="ltr">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] mb-[24px]">
        <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212]">{title}</h2>
        {onNavigate && weekDays.length > 0 && (
          <div className="flex gap-[8px] items-center">
            <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
              {weekDays[0].date} – {weekDays[weekDays.length - 1].date}
            </p>
            <button
              className="size-[20px] hover:opacity-70 transition-opacity"
              aria-label="Previous week"
              onClick={onNavigate.onPrevious}
            >
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="size-[20px] hover:opacity-70 transition-opacity"
              aria-label="Next week"
              onClick={onNavigate.onNext}
            >
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        {/* Calendar Header */}
        <div className="flex border-b border-[#d4d4d4]">
          {weekDays.map((day, i) => (
            <div
              key={i}
              className="flex-1 p-[12px] border-s first:border-s-0 border-[#ebebeb]"
            >
              <p className="font-['Rubik:Regular',sans-serif] text-[14px] sm:text-[16px]">
                <span className="text-[#707070]">{day.short}</span>
                <span className="text-[#121212] ms-1 hidden sm:inline">{day.full}</span>
              </p>
              <p className="font-['Rubik:Regular',sans-serif] text-[12px] text-[#707070] mt-[4px] hidden md:block">
                {day.date.split('-')[0]}-{day.date.split('-')[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Event Timeline */}
        <div className="relative overflow-y-auto bg-[#F7F7F7]" style={{ height: '352px' }}>
          <div className="relative" style={{ height: `${events.length * 64 + 32}px`, minHeight: '352px' }}>
            {/* Horizontal row dividers */}
            {Array.from({ length: Math.ceil((events.length * 64 + 32) / 64) }).map((_, i) => (
              <div
                key={`divider-${i}`}
                className="absolute w-full border-b border-[#ebebeb]"
                style={{ top: `${i * 64}px` }}
              />
            ))}

            {/* Vertical column dividers */}
            {weekDays.slice(1).map((_, i) => (
              <div
                key={`col-divider-${i}`}
                className="absolute h-full border-s border-[#ebebeb]"
                style={{ left: `${(i + 1) * (100 / weekDays.length)}%` }}
              />
            ))}

            {events.map((event, i) => {
              const position = getEventPosition(event);
              if (!position) return null;

              // Calculate how many days the event spans
              const startDay = parseInt(event.startDate.split('-')[0]);
              const endDay = parseInt(event.endDate.split('-')[0]);
              const daysSpan = endDay - startDay + 1;
              const showCategoryBadge = daysSpan >= 2 && event.category;

              return (
                <div
                  key={event.id}
                  className="absolute rounded-[8px] transition-all hover:shadow-md cursor-pointer z-10"
                  style={{
                    backgroundColor: `${event.color}15`,
                    border: `2px solid ${event.color}`,
                    top: `${16 + i * 64}px`,
                    left: position.left,
                    width: position.width,
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px'
                  }}
                >
                  <div className="flex gap-[8px] items-center w-full min-w-0">
                    <div
                      className="h-[24px] rounded-[4px] w-[4px] shrink-0"
                      style={{ backgroundColor: event.color }}
                    />
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <p className="font-['Rubik:Medium',sans-serif] text-[14px] sm:text-[16px] text-[#121212] truncate">
                        {event.title}
                      </p>
                      <p className="font-['Rubik:Regular',sans-serif] text-[12px] text-[#707070] mt-[2px] truncate">
                        {event.startDate} – {event.endDate}
                      </p>
                    </div>
                    {showCategoryBadge && (
                      <Badge
                        label={event.category}
                        color={event.color}
                        variant="solid"
                        size="sm"
                        className="shrink-0"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
