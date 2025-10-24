import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface SummaryDisplayProps {
  teaser: string;
  bookTitle: string;
  isLoading: boolean;
}

// Fix: Implement the SummaryDisplay component to show the generated teaser
export const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ teaser, bookTitle, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-8 p-6 bg-white border border-stone-200 rounded-lg shadow-sm animate-pulse">
        <div className="h-4 bg-stone-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-stone-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-stone-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-stone-200 rounded w-5/6"></div>
      </div>
    );
  }

  if (!teaser) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-white border border-stone-200 rounded-lg shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-3 mb-4">
        <SparklesIcon className="h-6 w-6 text-amber-500" />
        <h2 className="text-2xl font-bold text-stone-800">
          Teaser for <span className="italic">"{bookTitle}"</span>
        </h2>
      </div>
      <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">
        {teaser}
      </p>
    </div>
  );
};
