
import React from 'react';

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6-10.375A1 1 0 0 1 3.5 2H2" />
    <path d="M14.063 8.5A2 2 0 0 0 15.5 9.937l10.375 6a1 1 0 0 1-1.036 1.938L14.5 17.5" />
    <path d="M5.5 6.5 4 4" />
    <path d="m14 4-1.5 1.5" />
    <path d="M20 10.5 18.5 9" />
    <path d="m3.5 22 1.5-1.5" />
  </svg>
);
