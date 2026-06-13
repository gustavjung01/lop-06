import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Lop6App from './app/Lop6App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Lop6App />
  </StrictMode>,
);
