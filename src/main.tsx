import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Lop6App from './app/Lop6App';

function openMathFromDashboardIfNeeded() {
  if (typeof window === 'undefined') return;

  const route = window.location.hash.replace(/^#\/?/, '');
  if (!route.startsWith('math')) return;

  const buttons = Array.from(document.querySelectorAll('button'));
  const openMathButton = buttons.find((button) => {
    const text = button.textContent || '';
    return text.includes('Vào môn Toán') || text.includes('Tiếp tục học') || text.includes('Học tiếp Toán');
  });

  openMathButton?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
}

function Lop6AppWithRouteBoot() {
  useEffect(() => {
    const bootTimers = [50, 250, 650].map((delay) => window.setTimeout(openMathFromDashboardIfNeeded, delay));

    const handleHashChange = () => {
      window.setTimeout(openMathFromDashboardIfNeeded, 50);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      bootTimers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <Lop6App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Lop6AppWithRouteBoot />
  </StrictMode>,
);
