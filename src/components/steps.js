const stepList = [
  {
    no: '01',
    title: 'Kirim Data via WA',
    text: 'Kirim nama, tanggal, doa, serta ukuran dan model yang diinginkan kapan saja. Konsultasi terbuka 24 jam.'
  },
  {
    no: '02',
    title: 'Konfirmasi Desain Digital',
    text: 'Kami kirim rancangan teks untuk diperiksa bersama sebelum pahatan dimulai.'
  },
  {
    no: '03',
    title: 'Pahat di Workshop Tulangan',
    text: 'Pengerjaan standar 3–5 hari kerja, disesuaikan dengan model dan kerumitan ukiran.'
  },
  {
    no: '04',
    title: 'Pengambilan / Pengantaran',
    text: 'Diambil langsung di workshop Kepunten, atau diantarkan ke lokasi keluarga. Untuk pengantaran, silakan konsultasikan kebutuhan Anda dengan kami.'
  }
];

export function steps() {
  const items = stepList
    .map(
      (s) => `
      <div class="relative">
        <div class="font-serif text-4xl text-brass">${s.no}</div>
        <div class="rule mt-5"></div>
        <h3 class="mt-6 font-serif text-[1.7rem] font-bold leading-snug text-basalt">${s.title}</h3>
        <p class="mt-3 text-[15px] font-semibold leading-[1.9] text-slate">${s.text}</p>
      </div>`
    )
    .join('');

  return `
  <section id="pemesanan" class="scroll-mt-24 py-20 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div class="reveal max-w-2xl">
        <p class="mb-4 text-[13px] font-bold uppercase tracking-widest2 text-brass">Alur Pemesanan</p>
        <h2 class="font-serif text-4xl font-bold leading-tight tracking-tight text-basalt sm:text-5xl lg:text-[3.4rem]">
          Empat Langkah yang Tenang
        </h2>
        <p class="mt-5 text-base font-semibold leading-[1.9] text-slate">
          Kami mendampingi keluarga dari awal pengiriman data sampai batu sampai di tujuan.
        </p>
      </div>

      <div class="reveal mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" style="transition-delay:.1s">
        ${items}
      </div>

      <div class="reveal mt-16 flex flex-col items-start justify-between gap-6 border border-[#C9BBA5] bg-travertine p-8 sm:flex-row sm:items-center lg:p-10" style="transition-delay:.15s">
        <div>
          <p class="font-serif text-[1.8rem] font-bold leading-snug text-basalt">Siap berdiskusi tentang rancangan keluarga?</p>
          <p class="mt-3 text-[15px] font-semibold text-slate">Kirim data kapan saja. Kami balas sesuai waktu yang nyaman untuk Anda.</p>
        </div>
        <a data-wa-general href="#" target="_blank" rel="noopener" class="shrink-0 bg-brass px-8 py-4 text-[15px] font-bold tracking-wide text-alabaster transition-colors duration-500 hover:bg-basalt">
          Konsultasi via WA
        </a>
      </div>
    </div>
  </section>`;
}
