const cumleler = [
  "Sitemize Hoşgeldiniz",
  "Sağlıklı Günler..",
  "Yine Bekleriz..",
];
const yazim = document.querySelector(".cumleler");
let cumleIndex = 0;
let harfIndex = 0;
const yaziYerlestir = () => {
  if (harfIndex < cumleler[cumleIndex].length) {
    yazim.textContent += cumleler[cumleIndex].charAt(harfIndex);
    harfIndex++;
    setTimeout(yaziYerlestir, 1000);
  } else {
    setTimeout(sil, 1000);
  }
};

function sil() {
  if (harfIndex > 0) {
    yazim.textContent = cumleler[cumleIndex].substring(0, harfIndex - 1);
    harfIndex--;
    setTimeout(sil, 1000);
  } else {
    cumleIndex++;
    if (cumleIndex >= cumleler.length) cumleIndex = 0;
    setTimeout(yaziYerlestir, 1000);
  }
}

yaziYerlestir();
