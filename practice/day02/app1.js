//Kutuların içine javascript ile h1 elementleri ekleyelim
let kutu1 = document.querySelector(".kutu1");
let kutu2 = document.querySelector(".kutu2");
let kutu3 = document.querySelector(".kutu3");
let kutu4 = document.querySelector(".kutu4");
​
kutu1.innerHTML = `<h1 style="text-align:center;color:red;">Gri</h1>`;
kutu2.innerHTML = `<h1 style="text-align:center;color:red;">Pembe</h1>`;
kutu3.innerHTML = `<h1 style="text-align:center;color:red;">Turuncu</h1>`;
kutu4.innerHTML = `<h1 style="text-align:center;color:red;">Mavi</h1>`;