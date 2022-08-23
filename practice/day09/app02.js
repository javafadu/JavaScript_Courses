/* Kullanıcın girdiği karakter sayısını sayan bir sayaç yapalım.
Reset butonumuz inputu ve sayacı sıfırlasın.
sayfa açıldığında 3 sn içinde bir şey yazmasa
"Haydi söyle" mesajı gelsin, yazmaya başlayınca da mesaj silinsin. */

const karakterSay = () => {
  const sayac = document.querySelector(".sayac");
  const girisBtn = document.querySelector("#giris");
  const resetBtn = document.querySelector("#sil");
  const mesaj = document.querySelector(".msj");

  girisBtn.addEventListener("keyup", () => {
    mesaj.innerHTML = "";
    sayac.innerHTML = girisBtn.value.length;
  });
  resetBtn.addEventListener("click", () => {
    sayac.innerHTML = "";
    karakterSay();
  });

  setTimeout(() => {
    if (girisBtn.value) return;
    mesaj.innerHTML = "<b>Haydi Söyle</b>";
  }, 3000);
};

karakterSay();
