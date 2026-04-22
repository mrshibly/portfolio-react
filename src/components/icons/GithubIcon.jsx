import React from 'react';

export const GithubIcon = ({ className = '', size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.3 5.3 0 0 0 20 5.4a5.2 5.2 0 0 0-.5-3.4 5.3 5.3 0 0 0-3.4 1.5 10.4 10.4 0 0 0-8 2 5.3 5.3 0 0 0-3.4-1.5A5.2 5.2 0 0 0 3 5.4a5.3 5.3 0 0 0-1.5 2.4c0 5.76 3.35 6.78 6.5 7.17A4.8 4.8 0 0 0 7 18v4"></path>
  </svg>
);
