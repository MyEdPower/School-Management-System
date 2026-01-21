import React from 'react';
import { Link } from 'react-router-dom';
import { Star, UserPlus, Pencil } from 'lucide-react';
import { SubjectIcon } from './SubjectIcon';
import { ProgressBar } from './ProgressBar';
import { ActionButton } from './ActionButton';

interface AssessmentListItemProps {
  id: string;
  title: string;
  subject: string;
  subjectColor: string;
  grade: string;
  batteryGroup: string;
  author: string;
  progress: number;
  total: number;
  dueDate: string;
  isFavorited?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onAssign?: (id: string) => void;
  onEdit?: (id: string) => void;
  className?: string;
}

export function AssessmentListItem({
  id,
  title,
  subject,
  subjectColor,
  grade,
  batteryGroup,
  author,
  progress,
  total,
  dueDate,
  isFavorited = false,
  onFavoriteToggle,
  onAssign,
  onEdit,
  className = ''
}: AssessmentListItemProps) {
  return (
    <div
      className={`bg-white border border-[#d4d4d4] rounded-[8px] p-[16px] hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-[16px] items-start lg:items-center">
        {/* Subject Icon */}
        <div
          className="size-[48px] rounded-[8px] flex items-center justify-center shrink-0 overflow-hidden"
          style={{ backgroundColor: `${subjectColor}20` }}
        >
          <SubjectIcon 
            subject={subject as any} 
            color={subjectColor} 
            size="md"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <Link to={`/assessment/${id}`} className="hover:underline">
            <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] sm:text-[18px] text-[#121212] mb-[4px]">
              {title}
            </h3>
          </Link>
          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070] mb-[4px]">
            {batteryGroup} | {grade}
          </p>
          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
            By {author}
          </p>
        </div>

        {/* Progress */}
        <div className="shrink-0">
          <ProgressBar current={progress} total={total} />
        </div>

        {/* Due Date */}
        <div className="flex items-center gap-[8px] shrink-0 min-w-[100px]">
          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#707070]">
            Due: {dueDate}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-[6px] shrink-0">
          {onFavoriteToggle && (
            <ActionButton
              icon={Star}
              onClick={(e) => {
                e.preventDefault();
                onFavoriteToggle(id);
              }}
              active={isFavorited}
              ariaLabel="Favorite"
            />
          )}
          {onAssign && (
            <ActionButton
              icon={UserPlus}
              onClick={(e) => {
                e.preventDefault();
                onAssign(id);
              }}
              ariaLabel="Assign"
            />
          )}
          {onEdit && (
            <ActionButton
              icon={Pencil}
              onClick={(e) => {
                e.preventDefault();
                onEdit(id);
              }}
              ariaLabel="Edit"
            />
          )}
        </div>
      </div>
    </div>
  );
}
