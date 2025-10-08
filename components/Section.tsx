import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  background?: 'transparent' | 'white' | 'gray' | 'primary' | 'gradient';
  padding?: 'none' | 'small' | 'medium' | 'large' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full';
  centerContent?: boolean;
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  size = 'medium',
  background = 'transparent',
  padding = 'medium',
  maxWidth = '6xl',
  centerContent = false,
  id
}: SectionProps) {
  const sizeClasses = {
    small: 'py-8',
    medium: 'py-16',
    large: 'py-24',
    full: 'min-h-screen py-16'
  };
  
  const backgroundClasses = {
    transparent: '',
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-blue-600 text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
  };
  
  const paddingClasses = {
    none: '',
    small: 'px-4',
    medium: 'px-6',
    large: 'px-8',
    xl: 'px-12'
  };
  
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    full: 'max-w-full'
  };
  
  const containerClasses = [
    maxWidthClasses[maxWidth],
    'mx-auto',
    paddingClasses[padding],
    centerContent ? 'text-center' : ''
  ].filter(Boolean).join(' ');
  
  const sectionClasses = [
    'relative',
    sizeClasses[size],
    backgroundClasses[background],
    className
  ].filter(Boolean).join(' ');
  
  return (
    <section className={sectionClasses} id={id}>
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  );
}
