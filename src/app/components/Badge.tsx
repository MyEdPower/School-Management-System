import React from 'react';

interface BadgeProps {
  label?: string;
  color: string;
  variant?: 'solid' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({
  label,
  color,
  variant = 'solid',
  size = 'md',
  className = ''
}: BadgeProps) {
  const sizeStyles = {
    sm: 'text-[12px] px-[10px] py-[6px]',
    md: 'text-[14px] px-[10px] py-[6px]',
    lg: 'text-[16px] px-[12px] py-[8px]'
  };

  const variantStyles = {
    solid: {
      backgroundColor: color,
      color: '#FFFFFF',
      border: 'none'
    },
    outline: {
      backgroundColor: '#FFFFFF',
      color: color,
      border: `1px solid ${color}`
    },
    subtle: {
      backgroundColor: `${color}15`,
      color: color,
      border: 'none'
    }
  };

  return (
    <span
      className={`font-['Rubik:Medium',sans-serif] rounded-[4px] whitespace-nowrap inline-block ${sizeStyles[size]} ${className}`}
      style={variantStyles[variant]}
    >
      {label || ''}
    </span>
  );
}
