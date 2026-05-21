import { createRoot } from 'react-dom/client';
import App from './app/app';
import './index.css';

const root = createRoot(document.querySelector('#root')!);
root.render(<App />);
