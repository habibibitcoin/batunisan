import { waURL, GENERAL_MESSAGE } from './wa.js';

export function initGeneralLinks() {
  document.querySelectorAll('[data-wa-general]').forEach((link) => {
    link.href = waURL(GENERAL_MESSAGE);
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}
