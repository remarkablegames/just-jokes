import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

export const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
