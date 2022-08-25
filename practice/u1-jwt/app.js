const isimEl = document.getElementById("validationCustom01").value;
const soyadEl = document.getElementById("validationCustom02").value;
const buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarf = "abcdefghijklmnopqrstuvwxyz";
const sayi = "0123456789-_.";
let jwt = "";
const getRandom = () => {
  const test = [];
  test.push(buyukHarf[Math.floor(Math.random() * buyukHarf.length)]);
  test.push(kucukHarf[Math.floor(Math.random() * kucukHarf.length)]);
  test.push(sayi[Math.floor(Math.random() * sayi.length)]);
  return test[Math.floor(Math.random() * test.length)];
};
const zaman = new Date(Date.now());
const tarih = zaman.getFullYear();
const milisn = zaman.getMilliseconds();
const sifreUret = () => {
  let password = "";
  password += getRandom();
  for (let i = password.length; i < 15; i++) {
    const x = tamamla();
    password += x;
  }
  return password;
};
const tamamla = () => {
  const yeni = [];
  yeni.push(getRandom());
  return yeni[Math.floor(Math.random() * yeni.length)];
};
const jwtUret = () => {
  jwt += sifreUret();
  jwt += tarih;
  jwt += sifreUret();
  jwt += milisn;
  jwt += sifreUret();
  jwt += isimEl;
  jwt += sifreUret();
  jwt += soyadEl;
  jwt += sifreUret();
  return jwt;
};
jwtUret();
console.log(jwt);