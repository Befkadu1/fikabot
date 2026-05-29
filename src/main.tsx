import { render } from 'preact';
import { App } from './app';
// Self-hosted Inter (no Google Fonts request → no visitor IP sent to Google)
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '@styles/main.scss';

const root = document.getElementById('app');
if (!root) throw new Error('#app root not found');
render(<App />, root);
