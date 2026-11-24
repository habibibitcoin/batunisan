import './styles.css';

import { header, initHeader } from './components/header.js';
import { hero } from './components/hero.js';
import { catalog, initCatalog } from './components/catalog.js';
import { advantages } from './components/advantages.js';
import { simulator, initSimulator } from './components/simulator.js';
import { steps } from './components/steps.js';
import { footer } from './components/footer.js';

import { initReveal } from './utils/reveal.js';
import { initGeneralLinks } from './utils/links.js';

const app = document.getElementById('app');

app.innerHTML = [
  header(),
  hero(),
  catalog(),
  advantages(),
  simulator(),
  steps(),
  footer()
].join('');

initHeader();
initCatalog();
initSimulator();
initReveal();
initGeneralLinks();
