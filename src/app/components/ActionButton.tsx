import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  onClick: (e: React.MouseEvent) => void;
  active?: boolean;
  variant?: 'default' | 'primary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
  className?: string;
}

export function ActionButton({
  icon: Icon,
  onClick,
  active = false,
  variant = 'default',
  size = 'md',
  ariaLabel,
  className = ''
}: ActionButtonProps) {
  const sizeMap = {
    sm: 'p-[5px]',  // 26px total
    md: 'p-[7px]',  // 30px total
    lg: 'p-[10px]'  // 36px total
  };

  const variantStyles = {
    default: 'bg-[#f7f7f7] border-[#d4d4d4] hover:bg-[#C4C8E1]',
    primary: 'bg-[#343A6F] border-[#343A6F] hover:bg-[#C4C8E1] hover:border-[#343A6F]',
    danger: 'bg-[#EC5E74] border-[#EC5E74] hover:bg-[#C4C8E1] hover:border-[#EC5E74]'
  };

  const iconColor = () => {
    if (active) return '#343A6F';
    if (variant === 'primary') return '#FFFFFF';
    if (variant === 'danger') return '#FFFFFF';
    return '#707070';
  };

  return (
    <button
      onClick={onClick}
      className={`border flex items-center justify-center rounded-[100px] transition-colors ${sizeMap[size]} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      <Icon
        className="size-[16px] transition-colors"
        strokeWidth={2}
        fill={active ? iconColor() : 'none'}
        style={{ color: iconColor() }}
      />
    </button>
  );
}
