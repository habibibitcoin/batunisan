export const WA_NUMBER = '6282141841662';
export const WA_DISPLAY = '0821-4184-1662';

export function waURL(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const GENERAL_MESSAGE =
  "Assalamu'alaikum. Saya ingin berkonsultasi pembuatan nisan, prasasti, plakat, atau kijing dari granit, keramik, serta granit lantai. Ukuran dan model bisa disesuaikan. Mohon informasi lebih lanjut. Terima kasih.";

export function productMessage(model) {
  return (
    "Assalamu'alaikum. Saya ingin menanyakan detail untuk model " +
    model +
    '. Mohon informasi ukuran, pilihan batu, dan estimasi pengerjaannya. Terima kasih.'
  );
}

export function designMessage(data) {
  return (
    "Assalamu'alaikum. Saya ingin berkonsultasi dengan rancangan nisan berikut:\n\n" +
    'Nama: ' +
    data.nama +
    '\n' +
    'Tanggal Lahir: ' +
    data.lahir +
    '\n' +
    'Tanggal Wafat: ' +
    data.wafat +
    '\n' +
    'Doa / Kalimat: ' +
    data.doa +
    '\n' +
    'Bahan: ' +
    data.batu +
    '\n' +
    'Format: ' +
    data.format +
    '\n\n' +
    'Mohon ditinjau kembali ejaan dan rancangannya. Terima kasih.'
  );
}

export const MAPS_URL = 'https://maps.app.goo.gl/Nnz9fdNjpo6SXyZA6';
