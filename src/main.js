import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './global.css';
import App from './components/App.svelte';

const app = new App({
  target: document.body
});

window.app = app;

export default app;
