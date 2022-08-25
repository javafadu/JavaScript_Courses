/* 1)Başlat fonksiyonu:
-her şeyi başlangıç değerine döndürmeli
-süreyi başlatmalı
(süreyi başlatan fonksiyon ile)
2)Süreyi başlatıp geri sayarak bitiren fonksiyon
3)köstebekleri rastgele aralıklarla yukarı çıkarıp indiren fonksiyon
4)rastgele süre oluşturan fonksiyon
5)köstebekleri rastgele yerleştiren fonksiyon
6)köstebeklere vurma fonksiyonu
 */
const kostebekAll = document.querySelectorAll(".köstebek");
const baslatButon = document.getElementById("baslat");
const skorEl = document.querySelector("#skor");
const vakitEl = document.querySelector("#vakit");
let kostebek;
let bitis = false;
let skor = 0;
let vakit = 10;
const rastgeleKostebek = () => {
  const sira = Math.floor(Math.random() * kostebekAll.length);
  const secilen = kostebekAll[sira];
  if (kostebek === secilen) {
    return rastgeleKostebek();
  } else {
    kostebek = secilen;
  }
  return secilen;
};
const randomTime = (min, max) => {
  const time = Math.round(Math.random() * (max - min)) + min;
  return time;
};
const yukari = () => {
  const getirKostebek = rastgeleKostebek();
  const bekleme = randomTime(750, 1500);
  getirKostebek.classList.add("secilen");
  setTimeout(() => {
    getirKostebek.classList.remove("secilen");
    if (!bitis) yukari();
  }, bekleme);
};
const vakitKontrol = () => {
  if (!bitis) {
    vakit--;
    vakitEl.textContent = vakit;
  } else {
    vakitEl.textContent = "vakit doldu";
  }
};
const oyunBaslat = () => {
  vakit = 10;
  skor = 0;
  bitis = false;
  const interval = setInterval(() => {
    vakitKontrol();
    if (bitis) clearInterval(interval);
  }, 1000);
  yukari();
  setTimeout(() => {
    bitis = true;
  }, vakit * 1000);
  skorEl.textContent = 0;
};
const vur = (e) => {
  if (e.target.classList.contains("secilen")) {
    skor++;
    e.target.classList.remove("secilen");
  }
  skorEl.textContent = skor;
};
baslatButon.addEventListener("click", oyunBaslat);
kostebekAll.forEach((kostebek) => kostebek.addEventListener("click", vur));
