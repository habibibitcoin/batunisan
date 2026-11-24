import { WA_DISPLAY, MAPS_URL } from '../utils/wa.js';

export function footer() {
  return `
  <footer id="lokasi" class="scroll-mt-24 bg-basalt text-alabaster">
    <div class="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 items-center justify-center border border-brass/80 font-serif text-2xl font-bold text-[#C6A36A]">J</span>
            <span class="font-serif text-2xl font-bold leading-tight sm:text-[1.8rem]">Jual Batu Nisan <span class="text-[#C6A36A]">Sidoarjo</span></span>
          </div>
          <p class="mt-6 max-w-sm text-[15px] font-semibold leading-[1.9] text-[#C4BDB0]">
            Workshop pahatan nisan, prasasti, dan plakat dari granit, keramik, serta granit lantai di Kepunten, Tulangan. Satu tempat, tanpa cabang. Ukuran dan model bisa disesuaikan.
          </p>
          <div class="mt-7 inline-flex items-center gap-3 border-y border-[#4A463F] py-3.5 text-[14px] tracking-wide text-[#C4BDB0]">
            <span class="h-1.5 w-1.5 rounded-full bg-[#C6A36A]"></span>
            Rating 4.9/5 · Ulasan pelanggan lokal Google Maps
          </div>
        </div>

        <div>
          <h3 class="text-[13px] font-bold uppercase tracking-widest2 text-[#C6A36A]">Lokasi Workshop</h3>
          <address class="mt-5 not-italic text-[15px] leading-[1.9] text-[#E0D9CC]">
            Kepunten, Kec. Tulangan<br />
            Kabupaten Sidoarjo<br />
            Jawa Timur 61273
          </address>
          <a href="${MAPS_URL}" target="_blank" rel="noopener" class="mt-6 inline-flex items-center gap-3 border border-[#C6A36A] px-6 py-3.5 text-[14px] font-bold tracking-wide text-[#C6A36A] transition-colors duration-500 hover:bg-[#C6A36A] hover:text-basalt">
            Buka di Google Maps <span aria-hidden="true">→</span>
          </a>
        </div>

        <div>
          <h3 class="text-[13px] font-bold uppercase tracking-widest2 text-[#C6A36A]">Bahan &amp; Karya</h3>
          <div class="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#E0D9CC]">
            <p>
              Bahan<br />
              Granit, keramik, dan granit lantai.
            </p>
            <p>
              Selain nisan<br />
              Prasasti musholla, prasasti kantor kepala desa, plakat peresmian, prasasti pembangunan, dan kijing makam.
            </p>
            <p>
              Ukuran &amp; model<br />
              <span class="font-bold text-alabaster">Bisa disesuaikan</span> dengan kebutuhan.
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-[13px] font-bold uppercase tracking-widest2 text-[#C6A36A]">Kontak &amp; Layanan</h3>
          <div class="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#E0D9CC]">
            <p>
              WhatsApp / Telepon<br />
              <a data-wa-general href="#" target="_blank" rel="noopener" class="font-serif text-2xl font-bold text-alabaster transition-colors duration-500 hover:text-[#C6A36A]">${WA_DISPLAY}</a>
            </p>
            <p>
              Jam Konsultasi<br />
              <span class="font-bold text-alabaster">Buka 24 jam</span> — keluarga bebas berkonsultasi dan mengirim data kapan saja.
            </p>
            <p>
              Pengambilan &amp; Pengantaran<br />
              Satu workshop di Kepunten, Tulangan. Bisa diambil langsung atau diantarkan — konsultasikan kebutuhan Anda dengan kami.
            </p>
          </div>
          <a data-wa-general href="#" target="_blank" rel="noopener" class="mt-7 inline-flex items-center gap-3 border-b-2 border-[#C6A36A] pb-1 text-[14px] font-bold tracking-wide text-[#C6A36A] transition-colors duration-500 hover:text-alabaster">
            Mulai konsultasi via WA <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-5 border border-[#4A463F] bg-[#24221E] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p class="text-[13px] font-bold uppercase tracking-widest2 text-[#C6A36A]">Google Maps</p>
          <p class="mt-2 text-[17px] font-bold text-alabaster">Jual Batu Nisan Sidoarjo — Kepunten, Tulangan</p>
          <p class="mt-1 text-[14px] font-medium leading-relaxed text-[#C4BDB0]">Ketuk untuk membuka peta lokasi workshop kami.</p>
        </div>
        <a href="${MAPS_URL}" target="_blank" rel="noopener" class="inline-flex shrink-0 items-center justify-center gap-3 bg-[#C6A36A] px-7 py-4 text-[15px] font-bold tracking-wide text-basalt transition-colors duration-500 hover:bg-alabaster">
          Buka Google Maps <span aria-hidden="true">→</span>
        </a>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-[#4A463F] pt-8 text-[14px] font-semibold text-[#A9A196] sm:flex-row sm:items-center sm:justify-between">
        <p>© <span id="year"></span> Jual Batu Nisan Sidoarjo. Seluruh hak dilindungi.</p>
        <p>Kepunten, Tulangan · Sidoarjo · Jawa Timur</p>
      </div>
    </div>
  </footer>`;
}
