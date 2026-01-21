import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'solid';
  color?: string;
  disabled?: boolean;
  ariaLabel: string;
  className?: string;
}

export function IconButton({
  icon: Icon,
  onClick,
  size = 'md',
  variant = 'ghost',
  color = '#707070',
  disabled = false,
  ariaLabel,
  className = ''
}: IconButtonProps) {
  const sizeMap = {
    sm: 'size-[20px]',
    md: 'size-[24px]',
    lg: 'size-[32px]'
  };

  const variantStyles = {
    ghost: 'hover:opacity-70 bg-transparent border-none',
    outline: 'border border-[#707070] bg-transparent hover:bg-[#C4C8E1]',
    solid: 'bg-[#343A6F] hover:bg-[#C4C8E1] border-none'
  };

  const iconColor = variant === 'solid' ? '#FFFFFF' : color;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`p-[4px] rounded-[4px] transition-all disabled:opacity-30 disabled:cursor-not-allowed ${variantStyles[variant]} ${className}`}
    >
      <Icon className={sizeMap[size]} style={{ color: iconColor }} strokeWidth={2} />
    </button>
  );
}
