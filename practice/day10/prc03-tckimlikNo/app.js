let buton = document.querySelector("#btnEkle");

document.querySelector("#tck").addEventListener("input", (e) => {
  let deger = e.target.value;
  if (deger.length == 11) {
    document.querySelector("#mesaj").innerHTML = "";

    buton.removeAttribute("disabled");
  }
  if (isNaN(deger)) {
    document.querySelector("#mesaj").innerHTML = "It contains only numbers:";
  } else {
    if (deger.length > 11) {
      document.querySelector("#mesaj").innerHTML = "The siz max is 11";
      buton.setAttribute("disabled", true);
    }
  }
});

buton.addEventListener("click", () => {
  document.querySelector("#mesaj").innerHTML = "Valid TC Kimlik No";
});
