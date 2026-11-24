export const products = [
  {
    name: 'Nisan Granit Hitam Tegak',
    cats: 'granit',
    badge: 'Granit',
    stone: 'Granit hitam',
    size: '60 × 40 cm',
    duration: '3–5 hari kerja',
    img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80',
    alt: 'Tekstur batu granit hitam'
  },
  {
    name: 'Nisan Keramik',
    cats: 'keramik',
    badge: 'Keramik',
    stone: 'Keramik',
    size: '50 × 35 cm',
    duration: '3–5 hari kerja',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    alt: 'Permukaan keramik yang halus'
  },
  {
    name: 'Nisan Granit Lantai',
    cats: 'granit-lantai',
    badge: 'Granit lantai',
    stone: 'Granit lantai',
    size: '60 × 40 cm',
    duration: '4–6 hari kerja',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    alt: 'Permukaan granit lantai dengan tekstur alami'
  },
  {
    name: 'Prasasti Musholla',
    cats: 'prasasti granit',
    badge: 'Prasasti',
    stone: 'Granit',
    size: '80 × 40 cm',
    duration: '4–6 hari kerja',
    img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
    alt: 'Bidang batu dengan garis arsitektural'
  },
  {
    name: 'Prasasti Desa, Pembangunan & Plakat Peresmian',
    cats: 'prasasti granit',
    badge: 'Prasasti & plakat',
    stone: 'Granit',
    size: '100 × 50 cm',
    duration: '5–7 hari kerja',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    alt: 'Detail permukaan batu alam'
  },
  {
    name: 'Kijing Makam Granit',
    cats: 'kijing granit',
    badge: 'Kijing',
    stone: 'Granit',
    size: '120 × 60 cm',
    duration: '5–7 hari kerja',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
    alt: 'Susunan batu alam dengan tekstur lembut'
  }
];

export const filters = [
  { id: 'all', label: 'Semua' },
  { id: 'granit', label: 'Granit' },
  { id: 'keramik', label: 'Keramik' },
  { id: 'granit-lantai', label: 'Granit Lantai' },
  { id: 'prasasti', label: 'Prasasti & Plakat' },
  { id: 'kijing', label: 'Kijing Makam' }
];

export function productCard(p, index) {
  const delay =
    index % 3 === 1
      ? ' style="transition-delay:.08s"'
      : index % 3 === 2
        ? ' style="transition-delay:.16s"'
        : '';

  return `
    <article class="product-card reveal border border-[#C9BBA5] bg-alabaster" data-cat="${p.cats}"${delay}>
      <div class="stone-photo relative aspect-[5/4] overflow-hidden">
        <img src="${p.img}" alt="${p.alt}" class="editorial-img h-full w-full object-cover" onerror="this.classList.add('img-failed')" loading="lazy" />
        <span class="absolute left-4 top-4 bg-alabaster/95 px-3.5 py-2 text-[12px] font-bold uppercase tracking-widest2 text-brass">${p.badge}</span>
      </div>
      <div class="flex flex-1 flex-col p-7">
        <h3 class="font-serif text-[1.8rem] font-bold leading-snug text-basalt">${p.name}</h3>
        <dl class="mt-4 space-y-2.5 text-[14px] leading-relaxed text-slate">
          <div class="flex justify-between gap-4 border-b border-[#D2C5B1] pb-2.5"><dt>Bahan</dt><dd class="text-right font-semibold text-basalt">${p.stone}</dd></div>
          <div class="flex justify-between gap-4 border-b border-[#D2C5B1] pb-2.5"><dt>Estimasi ukuran</dt><dd class="text-right font-semibold text-basalt">${p.size}</dd></div>
          <div class="flex justify-between gap-4"><dt>Pengerjaan</dt><dd class="text-right font-semibold text-basalt">${p.duration}</dd></div>
        </dl>
        <a href="#" data-wa-model="${p.name}" class="wa-model mt-7 inline-flex items-center justify-between border-t-2 border-[#C9BBA5] pt-5 text-[14px] font-bold tracking-wide text-brass transition-colors duration-500 hover:text-basalt">
          Tanya Detail via WA <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>`;
}
