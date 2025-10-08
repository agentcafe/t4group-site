import React from 'react';
import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onSecondaryButtonClick?: () => void;
  className?: string;
  variant?: 'default' | 'gradient' | 'dark' | 'minimal' | 'bordered';
  size?: 'small' | 'medium' | 'large';
  centered?: boolean;
  fullWidth?: boolean;
  backgroundImage?: string;
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
  onButtonClick,
  secondaryButtonText,
  secondaryButtonHref,
  onSecondaryButtonClick,
  className = '',
  variant = 'default',
  size = 'medium',
  centered = true,
  fullWidth = false,
  backgroundImage
}: CTABannerProps) {
  const sizeClasses = {
    small: 'py-8 px-6',
    medium: 'py-12 px-6 lg:py-16 lg:px-8',
    large: 'py-16 px-6 lg:py-24 lg:px-8'
  };

  const variantClasses = {
    default: 'bg-blue-600 text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
    dark: 'bg-gray-900 text-white',
    minimal: 'bg-gray-50 text-gray-900 border border-gray-200',
    bordered: 'bg-white text-gray-900 border-2 border-blue-600'
  };

  const titleSizeClasses = {
    small: 'text-2xl lg:text-3xl',
    medium: 'text-3xl lg:text-4xl',
    large: 'text-4xl lg:text-5xl'
  };

  const descriptionSizeClasses = {
    small: 'text-base lg:text-lg',
    medium: 'text-lg lg:text-xl',
    large: 'text-xl lg:text-2xl'
  };

  const containerClasses = [
    'relative overflow-hidden',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'w-full' : 'rounded-lg',
    className
  ].filter(Boolean).join(' ');

  const contentClasses = [
    'relative z-10',
    'max-w-4xl',
    centered ? 'mx-auto text-center' : 'text-left'
  ].filter(Boolean).join(' ');

  const primaryButtonClasses = [
    'inline-flex items-center justify-center',
    'px-8 py-3 lg:px-10 lg:py-4',
    'text-base lg:text-lg font-semibold',
    'rounded-lg',
    'transition-all duration-200',
    'focus:outline-none focus:ring-4 focus:ring-offset-2',
    variant === 'default' || variant === 'gradient' || variant === 'dark'
      ? 'bg-white text-gray-900 hover:bg-gray-50 focus:ring-white focus:ring-offset-blue-600'
      : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-white'
  ].join(' ');

  const secondaryButtonClasses = [
    'inline-flex items-center justify-center',
    'px-8 py-3 lg:px-10 lg:py-4',
    'text-base lg:text-lg font-semibold',
    'rounded-lg border-2',
    'transition-all duration-200',
    'focus:outline-none focus:ring-4 focus:ring-offset-2',
    variant === 'default' || variant === 'gradient' || variant === 'dark'
      ? 'border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white focus:ring-offset-blue-600'
      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 focus:ring-offset-white'
  ].join(' ');

  const PrimaryButton = ({ children, ...props }: any) => {
    if (buttonHref) {
      return (
        <Link href={buttonHref} className={primaryButtonClasses} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <button 
        className={primaryButtonClasses} 
        onClick={onButtonClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  const SecondaryButton = ({ children, ...props }: any) => {
    if (secondaryButtonHref) {
      return (
        <Link href={secondaryButtonHref} className={secondaryButtonClasses} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <button 
        className={secondaryButtonClasses} 
        onClick={onSecondaryButtonClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <div className={containerClasses}>
      {/* Background Image Overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </>
      )}

      {/* Background Pattern (optional decorative element) */}
      {(variant === 'gradient' || variant === 'default') && (
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
            <defs>
              <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 60L60 0" stroke="currentColor" strokeWidth="1" />
                <path d="M60 60L0 0" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="60" height="60" fill="url(#grid)" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className={contentClasses}>
        <h2 className={`font-bold mb-4 lg:mb-6 ${titleSizeClasses[size]}`}>
          {title}
        </h2>
        
        {description && (
          <p className={`mb-8 lg:mb-10 opacity-90 ${descriptionSizeClasses[size]}`}>
            {description}
          </p>
        )}

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 ${
          centered ? 'justify-center' : 'justify-start'
        }`}>
          <PrimaryButton>
            {buttonText}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </PrimaryButton>

          {secondaryButtonText && (
            <SecondaryButton>
              {secondaryButtonText}
            </SecondaryButton>
          )}
        </div>
      </div>
    </div>
  );
}
