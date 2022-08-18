// reach each element and assign a value for items

const ekranEl = document.querySelector("#ekran");
const lenEl = document.querySelector("#len");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const sayiEl = document.getElementById("sayi");
const sembolEl = document.getElementById("sembol");
const uretEl = document.getElementById("uret");

// assign uppercase, lowercase, number symbols to variables
const buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarf = "abcdefghijklmnopqrstuvwxyz";
const sayi = "0123456789";
const sembol = "!@#$%^&*()_+=";

// get random lowercase method
const getLowercase = () => {
  return kucukHarf[Math.floor(Math.random() * kucukHarf.length)];
};
// get random uppercase method
const getUppercase = () => {
  return buyukHarf[Math.floor(Math.random() * buyukHarf.length)];
};
// get random number method
const getNumber = () => {
  return sayi[Math.floor(Math.random() * sayi.length)];
};
// get random symbol method
const getSembol = () => {
  return sembol[Math.floor(Math.random() * sembol.length)];
};

// According to the user selection create a password
const sifreUret = () => {
  const len = lenEl.value;
  let password = "";
  if (upperEl.checked) {
    password += getUppercase();
  }
  if (lowerEl.checked) {
    password += getLowercase();
  }
  if (sayiEl.checked) {
    password += getNumber();
  }
  if (sembolEl.checked) {
    password += getSembol();
  }

  for (let i = password.length; i < len; i++) {
    const x = tamamla();
    password += x;
  }

  ekranEl.innerText = password;
};

// between user password length and current password length
// fill the empty spaces with user selected items

const tamamla = () => {
  const ekle = [];
  if (upperEl.checked) {
    ekle.push(getUppercase());
  }
  if (lowerEl.checked) {
    ekle.push(getLowercase());
  }
  if (sayiEl.checked) {
    ekle.push(getNumber());
  }
  if (sembolEl.checked) {
    ekle.push(getSembol());
  }
  if (ekle.length === 0) return "";
  return ekle[Math.floor(Math.random() * ekle.length)];
};

// when button clicked run the system (sifreUret)
uretEl.addEventListener("click", sifreUret);
