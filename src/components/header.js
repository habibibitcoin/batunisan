export function header() {
  return `
  <header class="sticky top-0 z-50 border-b border-[#C9BBA5] bg-alabaster/95 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
      <a href="#atas" class="group flex items-center gap-3" aria-label="Jual Batu Nisan Sidoarjo — beranda">
        <span class="flex h-10 w-10 items-center justify-center border border-brass/70 font-serif text-xl text-brass">J</span>
        <span class="font-serif text-xl font-bold leading-tight tracking-tight text-basalt sm:text-2xl">
          Jual Batu Nisan <span class="text-brass">Sidoarjo</span>
        </span>
      </a>

      <nav class="hidden items-center gap-9 lg:flex" aria-label="Navigasi utama">
        <a href="#katalog" class="nav-link text-[15px] font-semibold tracking-wide text-slate hover:text-basalt">Katalog Material</a>
        <a href="#simulasi" class="nav-link text-[15px] font-semibold tracking-wide text-slate hover:text-basalt">Simulasi Ukiran</a>
        <a href="#pemesanan" class="nav-link text-[15px] font-semibold tracking-wide text-slate hover:text-basalt">Cara Pemesanan</a>
      </nav>

      <a data-wa-general href="#" target="_blank" rel="noopener"
         class="hidden border border-basalt bg-basalt px-6 py-3 text-[14px] font-bold tracking-wide text-alabaster transition-colors duration-500 hover:border-brass hover:bg-brass sm:inline-block">
        Konsultasi via WA
      </a>

      <button id="menuBtn" class="inline-flex h-11 w-11 items-center justify-center border border-[#B9AA91] text-basalt lg:hidden" aria-label="Buka menu" aria-expanded="false" aria-controls="mobileMenu">
        <span class="flex flex-col gap-[5px]">
          <span class="block h-px w-5 bg-current"></span>
          <span class="block h-px w-5 bg-current"></span>
          <span class="block h-px w-5 bg-current"></span>
        </span>
      </button>
    </div>

    <div id="mobileMenu" class="hidden border-t border-[#C9BBA5] bg-alabaster px-5 pb-6 pt-2 lg:hidden">
      <a href="#katalog" class="block border-b border-[#C9BBA5] py-4 text-base font-semibold text-slate">Katalog Material</a>
      <a href="#simulasi" class="block border-b border-[#C9BBA5] py-4 text-base font-semibold text-slate">Simulasi Ukiran</a>
      <a href="#pemesanan" class="block border-b border-[#C9BBA5] py-4 text-base font-semibold text-slate">Cara Pemesanan</a>
      <a data-wa-general href="#" target="_blank" rel="noopener" class="mt-5 block bg-basalt px-5 py-3.5 text-center text-base font-bold text-alabaster">Konsultasi via WA</a>
    </div>
  </header>`;
}

export function initHeader() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn.addEventListener('click', () => {
    const open = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', open);
    menuBtn.setAttribute('aria-expanded', String(!open));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
