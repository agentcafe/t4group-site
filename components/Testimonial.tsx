import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  className?: string;
  variant?: 'default' | 'featured' | 'compact' | 'card';
  showQuotes?: boolean;
}

export default function Testimonial({
  quote,
  author,
  position,
  company,
  avatar,
  rating,
  className = '',
  variant = 'default',
  showQuotes = true
}: TestimonialProps) {
  const variantClasses = {
    default: 'bg-white p-6 rounded-lg border border-gray-200',
    featured: 'bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200',
    compact: 'bg-gray-50 p-4 rounded-lg',
    card: 'bg-white p-6 rounded-lg shadow-lg border border-gray-100'
  };

  const quoteClasses = {
    default: 'text-gray-700 text-lg leading-relaxed',
    featured: 'text-gray-800 text-xl leading-relaxed font-medium',
    compact: 'text-gray-600 text-base',
    card: 'text-gray-700 text-lg leading-relaxed'
  };

  const authorClasses = {
    default: 'font-semibold text-gray-900',
    featured: 'font-bold text-gray-900 text-lg',
    compact: 'font-medium text-gray-800',
    card: 'font-semibold text-gray-900'
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const containerClasses = [
    variantClasses[variant],
    variant === 'featured' ? 'transform hover:scale-[1.02] transition-transform duration-200' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {/* Quote */}
      <blockquote className={`mb-6 ${quoteClasses[variant]}`}>
        {showQuotes && (
          <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        )}
        <p className="italic">{quote}</p>
      </blockquote>

      {/* Rating */}
      {rating && (
        <div className="flex items-center mb-4">
          {renderStars(rating)}
          <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>
      )}

      {/* Author Info */}
      <div className="flex items-center">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        {!avatar && (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
            {author.split(' ').map(name => name[0]).join('')}
          </div>
        )}
        <div>
          <div className={authorClasses[variant]}>{author}</div>
          {(position || company) && (
            <div className="text-sm text-gray-600">
              {position && company ? `${position}, ${company}` : position || company}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
