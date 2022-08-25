const bilgiler = [
  {
    id: 1,
    isim: "Abdurrahman Cahit Zarifoğlu",
    tarih: "1940-1987",
    resim: (document.getElementById("resim").src = "./img/1.img"),
    metin: "Bir incelik gösterin, incinmesin yüreğim..",
  },
  {
    id: 2,
    isim: "Adil Erdem Bayazıt",
    tarih: "1939-2008",
    resim: (document.getElementById("resim").src = "./img/2.img"),
    metin: "Benim de payıma düştü; biraz mavi biraz ümit..",
  },
  {
    id: 3,
    isim: "Rasim Özdenören",
    tarih: "1940",
    resim: (document.getElementById("resim").src = "./img/3.img"),
    metin: "Oysa zaman belki bir ömür boyu süren bir tek andır..",
  },
  {
    id: 4,
    isim: "Nuri Pakdil",
    tarih: "1934",
    resim: (document.getElementById("resim").src = "./img/4.img"),
    metin: "Sükut;dünyanın en uzun cümlesi..",
  },
  {
    id: 5,
    isim: "Mehmet Akif İnan",
    tarih: "1939-2000",
    resim: (document.getElementById("resim").src = "./img/5.img"),
    metin:
      "Göklerden bir haber gibidir umut; görünmez bir yerde saklanmış, mahcup..",
  },
  {
    id: 6,
    isim: "Alaaddin Özdenören",
    tarih: "1940-2003",
    resim: (document.getElementById("resim").src = "./img/6.img"),
    metin: "Yakın komşumuz ay gibi; göğsüm geceye gerilmiş bir yay..",
  },
  {
    id: 7,
    isim: "Ali Kutlay",
    tarih: "1940-2008",
    resim: (document.getElementById("resim").src = "./img/7.img"),
    metin: "Halk aşksızsa sokaklar banka dükkanlarıyla doludur..",
  },
];

let indexNo = 0;

const geriBtn = document.querySelector(".geri-btn");
const ileriBtn = document.querySelector(".ileri-btn");
const randomBtn = document.querySelector(".random-btn");

window.document.addEventListener("DOMContentLoaded", () => {
  getirSair(indexNo);
});

const getirSair = (indexNo) => {
  const item = bilgiler[indexNo];
  resim.src = item.resim;
  sair.innerText = item.isim;
  genel.innerText = item.tarih;
  siir.innerText = item.metin;
};

geriBtn.addEventListener("click", () => {
  indexNo--;
  if (indexNo < 0) {
    indexNo = bilgiler.length - 1;
  }
  getirSair(indexNo);
});

ileriBtn.addEventListener("click", () => {
  indexNo++;
  if (indexNo > bilgiler.length - 1) {
    indexNo = 0;
  }
  getirSair(indexNo);
});

randomBtn.addEventListener("click", () => {
  getirSair(Math.floor(Math.random() * bilgiler.length));
});
