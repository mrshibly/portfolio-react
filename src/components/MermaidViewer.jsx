import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const MermaidViewer = ({ chart }) => {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      if (!chart) return;

      try {
        // Dynamically import mermaid for code-splitting efficiency
        const mermaid = (await import('mermaid')).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: theme === 'dark' ? 'dark' : 'neutral',
          themeVariables: {
            fontFamily: 'Geist, Plus Jakarta Sans, sans-serif',
            fontSize: '13px',
            primaryColor: theme === 'dark' ? '#18181B' : '#FFF7ED',
            primaryTextColor: theme === 'dark' ? '#F8FAFC' : '#18181B',
            primaryBorderColor: '#F97316',
            lineColor: '#F97316',
            secondaryColor: theme === 'dark' ? '#121216' : '#FFEDD5',
            tertiaryColor: theme === 'dark' ? '#1F1F23' : '#FFFFFF'
          },
          securityLevel: 'loose'
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        
        if (isMounted) {
          setSvgContent(svg);
          setError(null);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (isMounted) {
          setError('Failed to render interactive diagram');
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, theme]);

  if (error) {
    return (
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900 text-xs font-mono text-slate-500 text-center">
        Diagram preview unavailable.
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="mermaid-container w-full overflow-x-auto p-4 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-center [&>svg]:max-w-full [&>svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default MermaidViewer;
