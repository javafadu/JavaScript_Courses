const data = [
  {
    ad: "Asli Yurt",
    yas: 29,
    sehir: "",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "product owner",
  },
  {
    ad: "Demir Kurt",
    yas: 31,
    img: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Automation Engineer",
  },
  {
    ad: "Can Kara",
    yas: 25,
    img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Intern",
  },
  {
    ad: "Sara Duru",
    yas: 27,
    img: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Web Developer",
  },
  {
    ad: "Suat Gök",
    yas: 32,
    img: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Web Designer",
  },
];

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector(".alt").style.display = "inline-block";
  document.querySelector("#geri").style.display = "inline-block";
  document.querySelector("#ileri").style.display = "inline-block";
});

const baslik = document.querySelector("#baslik");
const resim = document.querySelector("#resim");
const yas = document.querySelector("#yas");
const meslek = document.querySelector("#meslek");

const geriBtn = document.querySelector("#geri");
const ileriBtn = document.querySelector("#ileri");

const kisiGetir = (bilgi) => {
  let getir = data[bilgi];
  baslik.textContent = getir.ad;
  yas.textContent = getir.yas;
  resim.src = getir.img;
  meslek.textContent = getir.meslek;
};

let objeIndex = 0;
geriBtn.addEventListener("click", () => {
  objeIndex--;
  if (objeIndex < 0) {
    objeIndex = data.length - 1;
  }
  kisiGetir(objeIndex);
});

ileriBtn.addEventListener("click", () => {
  objeIndex++;
  if (objeIndex > data.length - 1) {
    objeIndex = 0;
  }
  kisiGetir(objeIndex);
});
