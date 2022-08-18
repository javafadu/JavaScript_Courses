// Id leri içeriye alalım
let num1 = document.querySelector("#num1");
let btnTahmin = document.querySelector("#btnTahmin");
let btnBasla = document.querySelector("#btnBasla");
let hak = document.querySelector("#hak");
let message = document.querySelector("#msg");

// random sayı üretelim 1 ile 100 arasında
let randomNum = (Math.floor(Math.random() * (100 - 0 + 1)) + 0);

// Toplam hak sayısını belirtelim
let kalanHak = 7;
let totalHak= kalanHak;
let girilenRakamlar = [];


// Başla butonuna basınca çıkacaklar ve gizlenecekler
document.querySelector("#btnBasla").addEventListener("click", () => {
  kalanHak=7;
  message.innerText = "Tahmin Etmeye Başlayabilirsiniz";
  num1.style.display = "inline-block";
  btnTahmin.style.display = "inline-block";
  btnBasla.style.display = "none";
  hak.style.display = "inline-block";
  document.querySelector("#hak span").innerText = kalanHak;
  message.style.display = "block";
});


// Tahmin et butonuna basınca olacak olaylar
document.querySelector("#btnTahmin").addEventListener("click", () => {

  // kullanıcıya hak sayısı kadar sayı girdirelim

  
  let num1Val = document.querySelector("#num1").value;
  num1Val = num1Val + 1 ? parseInt(num1Val) : num1Val;

 
  
  if(kalanKontrol()>0) {
    girilenSayiKontrol(num1Val);
  } 
  else {
    message.innerText = `Malesef ${totalHak-kalanHak+1} Denemede Doğru Bilemediniz`;
    num1.style.display = "none";
    btnTahmin.style.display = "none";
    btnBasla.style.display = "inline-block";
    hak.style.display = "none";
  }
  });


const kalanKontrol = () => {
  if(kalanHak>1) {
    return kalanHak; }
  else {
    return 0;
  }
};


const girilenSayiKontrol = (num1Val) => {
  // Kontroller 

    // girilen sayi daha once girilmis mi?
    if(girilenRakamlar.includes(num1Val))
    {
      message.innerText = "Bu sayı daha önce girilmiştir";
    } 


  
  // a) Sayı 1-100 arasında değilse uyarı mesajı göndersin ama hak düşmesin
  else if (num1Val < 0 || num1Val > 100 ) {
    message.innerText = "Lütfen 1 ile 100 arasında bir sayı giriniz";
  }

    
  // b) girilen sayı random sayıdan büyükse veya küçükse   
  else if (num1Val > randomNum) {
    message.innerText = "Yanlış Tahmin, Daha küçük sayı giriniz";
    --kalanHak;
    girilenRakamlar.push(num1Val);
  } else if (num1Val < randomNum) {
    message.innerText = "Yanlış Tahmin, Daha büyük sayı giriniz";
    --kalanHak;
    girilenRakamlar.push(num1Val);
  } else {
    message.innerText = `Tebrikler ${totalHak-kalanHak} Denemede Doğru Bildiniz`;
    num1.style.display = "none";
    btnTahmin.style.display = "none";
    btnBasla.style.display = "inline-block";
    hak.style.display = "none";
  }
  console.log("Kalan Hak:"+kalanHak);
  document.querySelector("#hak span").innerText = kalanHak;
};
