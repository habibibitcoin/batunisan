import { waURL, designMessage } from '../utils/wa.js';

function radioGroup(name, options) {
  return options
    .map(
      (o) => `
      <label class="cursor-pointer">
        <input type="radio" name="${name}" value="${o}" class="peer sr-only" ${o === options[0] ? 'checked' : ''} />
        <span class="block border border-[#B9AA91] bg-alabaster px-4 py-4 text-center text-[14px] font-semibold text-slate transition-colors duration-400 peer-checked:border-basalt peer-checked:bg-basalt peer-checked:text-alabaster">${o}</span>
      </label>`
    )
    .join('');
}

export function simulator() {
  return `
  <section id="simulasi" class="scroll-mt-24 border-y border-[#C9BBA5] bg-travertine py-20 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div class="reveal max-w-2xl">
        <p class="mb-4 text-[13px] font-bold uppercase tracking-widest2 text-brass">Simulasi Ukiran</p>
        <h2 class="font-serif text-4xl font-bold leading-tight tracking-tight text-basalt sm:text-5xl lg:text-[3.4rem]">
          Lihat Rancangan Sebelum Dipahat
        </h2>
        <p class="mt-5 text-base font-semibold leading-[1.9] text-slate">
          Isi kolom di bawah untuk membayangkan tata letak tulisan di atas batu. Rancangan ini bisa dikirim kepada kami untuk ditinjau bersama.
        </p>
      </div>

      <div class="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="reveal space-y-8">
          <div>
            <p class="mb-3 text-[14px] font-bold uppercase tracking-widest2 text-slate">Bahan</p>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">${radioGroup('batu', ['Granit', 'Keramik', 'Granit Lantai'])}</div>
          </div>

          <div>
            <p class="mb-3 text-[14px] font-bold uppercase tracking-widest2 text-slate">Format</p>
            <div class="grid grid-cols-2 gap-3">${radioGroup('format', ['Tegak', 'Buku'])}</div>
          </div>

          <div class="space-y-5 border-t border-[#C9BBA5] pt-7">
            <div>
              <label for="inNama" class="mb-2 block text-[14px] font-bold uppercase tracking-widest2 text-slate">Nama Almarhum / Almarhumah</label>
              <input id="inNama" type="text" value="Ahmad Fauzi" class="w-full border border-[#B9AA91] bg-alabaster px-4 py-3.5 text-base text-basalt outline-none transition-colors duration-400 focus:border-brass" placeholder="Nama lengkap" />
            </div>
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="inLahir" class="mb-2 block text-[14px] font-bold uppercase tracking-widest2 text-slate">Tanggal Lahir</label>
                <input id="inLahir" type="text" value="12 Maret 1954" class="w-full border border-[#B9AA91] bg-alabaster px-4 py-3.5 text-base text-basalt outline-none transition-colors duration-400 focus:border-brass" placeholder="12 Maret 1954" />
              </div>
              <div>
                <label for="inWafat" class="mb-2 block text-[14px] font-bold uppercase tracking-widest2 text-slate">Tanggal Wafat</label>
                <input id="inWafat" type="text" value="8 April 2024" class="w-full border border-[#B9AA91] bg-alabaster px-4 py-3.5 text-base text-basalt outline-none transition-colors duration-400 focus:border-brass" placeholder="8 April 2024" />
              </div>
            </div>
            <div>
              <label for="inDoa" class="mb-2 block text-[14px] font-bold uppercase tracking-widest2 text-slate">Doa / Kalimat Singkat</label>
              <input id="inDoa" type="text" value="Al-Fatihah" class="w-full border border-[#B9AA91] bg-alabaster px-4 py-3.5 text-base text-basalt outline-none transition-colors duration-400 focus:border-brass" placeholder="Al-Fatihah" />
            </div>
          </div>

          <a id="designWa" href="#" target="_blank" rel="noopener" class="inline-flex w-full items-center justify-center gap-3 bg-basalt px-8 py-4 text-[15px] font-bold tracking-wide text-alabaster transition-colors duration-500 hover:bg-moss sm:w-auto">
            Kirim Desain Ini ke WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>

        <div class="reveal" style="transition-delay:.15s">
          <div class="flex min-h-[560px] flex-col items-center justify-center border border-[#C9BBA5] bg-alabaster px-6 py-12">
            <div id="stonePreview" class="stone type-tegak">
              <div class="stone-inner">
                <div class="engraving doa text-lg tracking-wide sm:text-xl" id="pvDoa">Al-Fatihah</div>
                <div class="engrave-ornament" aria-hidden="true"></div>
                <div class="engraving nama text-[30px] font-semibold sm:text-[34px]" id="pvNama">Ahmad Fauzi</div>
                <div class="engraving tanggal text-[14px] font-semibold tracking-wide sm:text-sm" id="pvLahir">12 Maret 1954</div>
                <div class="engraving tanggal text-[14px] font-semibold tracking-wide sm:text-sm" id="pvWafat">8 April 2024</div>
              </div>
            </div>
            <p class="mt-10 max-w-sm text-center text-[14px] font-semibold leading-relaxed text-slate">
              Pratinjau ilustratif. Ukiran akhir mengikuti hasil diskusi dan rancangan yang disetujui keluarga.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

export function initSimulator() {
  const stone = document.getElementById('stonePreview');
  const fields = {
    nama: document.getElementById('inNama'),
    lahir: document.getElementById('inLahir'),
    wafat: document.getElementById('inWafat'),
    doa: document.getElementById('inDoa')
  };
  const preview = {
    nama: document.getElementById('pvNama'),
    lahir: document.getElementById('pvLahir'),
    wafat: document.getElementById('pvWafat'),
    doa: document.getElementById('pvDoa')
  };
  const designWa = document.getElementById('designWa');

  const selected = (name) => {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : '';
  };

  function update() {
    const data = {
      nama: fields.nama.value.trim() || 'Nama Almarhum',
      lahir: fields.lahir.value.trim() || '—',
      wafat: fields.wafat.value.trim() || '—',
      doa: fields.doa.value.trim() || '—',
      batu: selected('batu'),
      format: selected('format')
    };

    Object.keys(preview).forEach((key) => {
      preview[key].textContent = data[key];
    });

    stone.classList.toggle('mat-keramik', data.batu === 'Keramik');
    stone.classList.toggle('mat-granit-lantai', data.batu === 'Granit Lantai');
    stone.classList.toggle('type-tegak', data.format === 'Tegak');
    stone.classList.toggle('type-buku', data.format === 'Buku');

    designWa.href = waURL(designMessage(data));
  }

  Object.values(fields).forEach((input) => input.addEventListener('input', update));
  document.querySelectorAll('input[name="batu"], input[name="format"]').forEach((radio) => {
    radio.addEventListener('change', update);
  });

  update();
}
