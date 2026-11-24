import { products, filters, productCard } from '../data/products.js';
import { waURL, productMessage } from '../utils/wa.js';

export function catalog() {
  const tabs = filters
    .map(
      (f, i) => `
      <button class="filter-tab ${i === 0 ? 'active' : ''} shrink-0 whitespace-nowrap rounded-full border border-[#B9AA91] px-5 py-3 text-[14px] font-semibold text-slate" data-filter="${f.id}" role="tab" aria-selected="${i === 0}">
        ${f.label}
      </button>`
    )
    .join('');

  const cards = products.map(productCard).join('');

  return `
  <section id="katalog" class="scroll-mt-24 border-t border-[#C9BBA5] bg-travertine py-20 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div class="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="mb-4 text-[13px] font-bold uppercase tracking-widest2 text-brass">Katalog</p>
          <h2 class="font-serif text-4xl font-bold leading-tight tracking-tight text-basalt sm:text-5xl lg:text-[3.4rem]">
            Kurasi Material &amp; Model
          </h2>
        </div>
        <p class="max-w-md text-base font-semibold leading-[1.9] text-slate">
          Bahan dan bentuk yang kami kerjakan sehari-hari di workshop. Ukuran dan model bisa disesuaikan dengan kebutuhan — waktu di bawah adalah estimasi standar pengrajin.
        </p>
      </div>

      <div class="reveal mt-12 flex gap-2 overflow-x-auto pb-3" style="transition-delay:.1s" role="tablist" aria-label="Filter katalog">
        ${tabs}
      </div>

      <div id="katalogGrid" class="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        ${cards}
      </div>
    </div>
  </section>`;
}

export function initCatalog() {
  const tabs = [...document.querySelectorAll('.filter-tab')];
  const cards = [...document.querySelectorAll('.product-card')];

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.dataset.filter;
      cards.forEach((card) => {
        const cats = card.dataset.cat.split(' ');
        const show = filter === 'all' || cats.includes(filter);
        card.style.display = show ? '' : 'none';
        if (show && card.animate) {
          card.animate(
            [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }],
            { duration: 420, easing: 'ease-out' }
          );
        }
      });
    });
  });

  document.querySelectorAll('.wa-model').forEach((link) => {
    link.href = waURL(productMessage(link.dataset.waModel));
  });
}
