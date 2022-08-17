let body = document.querySelector("body");
let renkAd = document.querySelector(".icerik h2 #renk");
let buton = document.querySelector("#renkDegistir");
let buton2 = document.querySelector("#renkDegistir1");

const renkler = ["Yellow", "Blue", "Green", "Red", "Aqua", "Gray", "Pink"];

let renkIndex;

const renkDegistir1 = () => {
  renkIndex = Math.floor(Math.random() * renkler.length);
  console.log(renkIndex);
  body.style.backgroundColor = renkler[renkIndex];
  renkAd.innerText = renkler[renkIndex];
  buton.innerText = renkler[renkIndex];
};

buton2.addEventListener("click", () => {
  renkIndex = Math.floor(Math.random() * renkler.length);
  console.log(renkIndex);
  body.style.backgroundColor = renkler[renkIndex];
  renkAd.innerText = renkler[renkIndex];
  buton2.innerText = renkler[renkIndex];
});
