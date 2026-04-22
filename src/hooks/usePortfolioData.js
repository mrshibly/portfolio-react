import { useState, useEffect } from 'react';
import { portfolioData as initialData } from '../data/portfolioData';

export const usePortfolioData = () => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPortfolio = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/portfolio');
      if (!response.ok) throw new Error('Failed to fetch data');
      const apiData = await response.json();
      // Only keep known fields from apiData
      setData({ ...initialData, ...apiData });
    } catch (err) {
      console.error('Error fetching portfolio data:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const updateData = async (newData) => {
    try {
      // Optimistic update locally
      setData(newData);
      
      const response = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('admin_token') || '',
        },
        body: JSON.stringify(newData),
      });
      
      if (!response.ok) throw new Error('Failed to update data');
      
      // Notify other tabs/components
      window.dispatchEvent(new Event('portfolio-data-updated'));
    } catch (err) {
      console.error('Error updating portfolio data:', err);
    }
  };

  const resetData = () => {
    // Reset back to default data in DB
    updateData(initialData);
  };

  // Listen for updates from other components
  useEffect(() => {
    const handleUpdate = () => {
      fetchPortfolio();
    };

    window.addEventListener('portfolio-data-updated', handleUpdate);
    return () => window.removeEventListener('portfolio-data-updated', handleUpdate);
  }, []);

  return { data, updateData, resetData, isLoading, error };
};
