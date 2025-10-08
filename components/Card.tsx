import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  onClick?: () => void;
  hover?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'medium',
  onClick,
  hover = false
}: CardProps) {
  const baseClasses = 'rounded-lg transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg border border-gray-100',
    outlined: 'bg-transparent border-2 border-gray-300'
  };
  
  const paddingClasses = {
    none: '',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8'
  };
  
  const hoverClasses = hover || onClick ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer' : '';
  const clickClasses = onClick ? 'active:scale-[0.98]' : '';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hoverClasses,
    clickClasses,
    className
  ].filter(Boolean).join(' ');
  
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      className={classes}
      onClick={onClick}
      {...(onClick && { type: 'button' })}
    >
      {children}
    </Component>
  );
}
