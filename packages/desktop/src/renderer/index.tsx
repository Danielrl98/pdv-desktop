import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

try {
  root.render(<App />);
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Error rendering React app:', error);
}
