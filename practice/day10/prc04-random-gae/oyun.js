let baslat = document.querySelector("#baslat");
let yukari = document.querySelector("#yukari");
let asagi = document.querySelector("#asagi");
let bitir = document.querySelector("#bitir");
let mesaj = document.querySelector("#mesaj");

let hak = 1,
  alt = 1,
  ust = 100,
  tahmin = 0;

baslat.addEventListener("click", () => {
  baslat.disabled = true;
  yukari.disabled = false;
  asagi.disabled = false;
  bitir.disabled = false;
  hak = 1;
  alt = 1;
  ust = 100;
  sayiTahmin(alt, ust);
});

const sayiTahmin = (alt, ust) => {
  tahmin = Math.floor(Math.random() * (ust - alt)) + alt;
  mesaj.innerHTML = `The guess of computer : ${tahmin} <br><br>
    <span style="color:red">Remaining Try : ${10 - hak}<span>   
    `;
  if (haj == 10) {
    mesaj.innerHTML = "Game Over , your try finished";
    oyunBitir();
  }
  hak++;
};

yukari.addEventListener("click", () => {
  alt = tahmin + 1;
  sayiTahmin(alt, ust);
});

asagi.addEventListener("click", () => {
  ust = tahmin;
  sayiTahmin(alt, ust);
});

bitir.addEventListener("click", () => {
  mesaj.innerHTML = `Computer Win : remaining : ${hak}.try`;
  oyunBitir();
});

const oyunbitir = () => {
  baslat.disabled = false;
  yukari.disabled = true;
  asagi.disabled = true;
  bitir.disabled = true;
};
