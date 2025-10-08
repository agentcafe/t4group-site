import React from 'react';

interface Logo {
  name: string;
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  url?: string;
}

interface LogoStripProps {
  logos: Logo[];
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: 'default' | 'grayscale' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  columns?: number;
  showOnHover?: boolean;
  animated?: boolean;
}

export default function LogoStrip({
  logos,
  title,
  subtitle,
  className = '',
  variant = 'default',
  size = 'medium',
  columns,
  showOnHover = false,
  animated = false
}: LogoStripProps) {
  const sizeClasses = {
    small: 'h-8 max-w-20',
    medium: 'h-12 max-w-32',
    large: 'h-16 max-w-40'
  };

  const variantClasses = {
    default: '',
    grayscale: 'grayscale hover:grayscale-0 transition-all duration-300',
    minimal: 'opacity-60 hover:opacity-100 transition-opacity duration-300'
  };

  const containerClasses = [
    'flex flex-wrap items-center justify-center gap-8 lg:gap-12',
    animated ? 'animate-fade-in' : '',
    className
  ].filter(Boolean).join(' ');

  const logoContainerClasses = [
    'flex items-center justify-center',
    showOnHover ? 'group-hover:scale-110 transition-transform duration-300' : '',
    variantClasses[variant]
  ].filter(Boolean).join(' ');

  const gridCols = columns ? {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  }[columns] : null;

  const LogoElement = ({ logo, index }: { logo: Logo; index: number }) => {
    const logoContent = (
      <div 
        className={`${logoContainerClasses} ${sizeClasses[size]} group`}
        style={{
          animationDelay: animated ? `${index * 100}ms` : '0ms'
        }}
      >
        {logo.src ? (
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-full h-full object-contain"
            width={logo.width}
            height={logo.height}
            loading="lazy"
          />
        ) : (
          // Fallback to text-based logo if no image provided
          <div className="text-xl font-bold text-gray-600 px-4 py-2 border border-gray-300 rounded">
            {logo.name}
          </div>
        )}
      </div>
    );

    return logo.url ? (
      <a
        key={index}
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group transition-transform hover:scale-105 duration-300"
        aria-label={`Visit ${logo.name}`}
      >
        {logoContent}
      </a>
    ) : (
      <div key={index} className="group">
        {logoContent}
      </div>
    );
  };

  return (
    <div className={`text-center ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-8 lg:mb-12">
          {title && (
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Logo Grid or Flex */}
      {gridCols ? (
        <div className={`grid ${gridCols} gap-8 lg:gap-12 items-center justify-items-center`}>
          {logos.map((logo, index) => (
            <LogoElement key={index} logo={logo} index={index} />
          ))}
        </div>
      ) : (
        <div className={containerClasses}>
          {logos.map((logo, index) => (
            <LogoElement key={index} logo={logo} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

// Default logos for demonstration
export const defaultLogos: Logo[] = [
  {
    name: 'Microsoft',
    alt: 'Microsoft Logo',
    src: '/logos/microsoft.svg',
    url: 'https://microsoft.com'
  },
  {
    name: 'Google',
    alt: 'Google Logo', 
    src: '/logos/google.svg',
    url: 'https://google.com'
  },
  {
    name: 'Amazon',
    alt: 'Amazon Logo',
    src: '/logos/amazon.svg', 
    url: 'https://amazon.com'
  },
  {
    name: 'Apple',
    alt: 'Apple Logo',
    src: '/logos/apple.svg',
    url: 'https://apple.com'
  },
  {
    name: 'Meta',
    alt: 'Meta Logo',
    src: '/logos/meta.svg',
    url: 'https://meta.com'
  },
  {
    name: 'Netflix',
    alt: 'Netflix Logo',
    src: '/logos/netflix.svg',
    url: 'https://netflix.com'
  }
];
