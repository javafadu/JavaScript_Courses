const gunId = document.getElementById("gun");
const saatId = document.getElementById("saat");
const dakikaId = document.getElementById("dakika");
const saniyeId = document.getElementById("saniye");

const yeniYil = "1 Jan 2023";

function geriSayac() {
  const yeniYilDate = new Date(yeniYil);
  console.log(yeniYilDate);
  const simdikiDate = new Date();
  console.log(simdikiDate);

  const totalSeconds = (yeniYilDate - simdikiDate) / 1000;
  console.log(totalSeconds);

  const gun = Math.floor(totalSeconds / (24 * 60 * 60));

  const saat = Math.floor((totalSeconds / (60 * 60)) % 24);

  const dakika = Math.floor((totalSeconds / 60) % 64);

  const saniye = Math.floor(totalSeconds % 60);

  gunId.innerHTML = gun;
  saatId.innerHTML = formatTime(saat);
  dakikaId.innerHTML = formatTime(dakika);
  saniyeId.innerHTML = formatTime(saniye);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

geriSayac();

setInterval(geriSayac, 1000);
