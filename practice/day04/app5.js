let baslik = document.querySelector(".buttons h1");
document
  .querySelector(".buttons button:nth-child(1)")
  .addEventListener("click", (e) => {
    console.log(e);
    baslik.innerText = e.target.innerText;
    console.log(baslik.innerText);
  });
document
  .querySelector(".buttons button:nth-child(2)")
  .addEventListener("click", (e) => {
    baslik.innerText = e.target.innerText;
  });
document
  .querySelector(".buttons button:nth-child(3)")
  .addEventListener("click", (e) => {
    baslik.innerText = e.target.innerText;
  });
