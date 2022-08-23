const basliklar = document.querySelector(".basliklar");
console.log(basliklar);
const urunlerResim = document.querySelectorAll(".image");

basliklar.addEventListener("click", (e) => {
  if (e.target.classList.contains("ürün")) {
    basliklar.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    //    const aranan = e.target.dataset.sec;
    const aranan = e.target.getAttribute("data-sec");

    urunlerResim.forEach((item) => {
      if (aranan == "all" || item.classList.contains(aranan))
        item.style.display = "block";
      else item.style.display = "none";
    });
  }
});
