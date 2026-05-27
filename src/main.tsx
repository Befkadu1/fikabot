import { render } from 'preact';
import { App } from './app';
import '@styles/main.scss';

const root = document.getElementById('app');
if (!root) throw new Error('#app root not found');
render(<App />, root);
