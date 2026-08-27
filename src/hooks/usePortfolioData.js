import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const usePortfolioData = () => {
  const [data] = useState(portfolioData);

  return { 
    data, 
    isLoading: false, 
    error: null 
  };
};

