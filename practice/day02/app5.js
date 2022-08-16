//Textbox lara girilen vize ve final notlarına göre ortalamayı ve notunun hangi harfe karşılık geldiğini yazdırın.
function hesapla() {
  let vize = document.querySelector("#vize").value;
  let final = document.querySelector("#final").value;
  let mesaj = document.querySelector("#msg");
  let sonuc = vize * 0.4 + final * 0.6;
  
  let not;
  switch (true) {
    case sonuc < 30:
      not = "FF";
      break;
    case sonuc < 40:
      not = "DD";
      break;
    case sonuc < 50:
      not = "DC";
      break;
    case sonuc < 60:
      not = "CC";
      break;
    case sonuc < 70:
      not = "CB";
      break;
    case sonuc < 80:
      not = "BB";
      break;
    case sonuc < 90:
      not = "BA";
      break;
    case sonuc < 100:
      not = "AA";
      break;
    default :
       not="Hatalı giriş"
       break;
  }
  mesaj.classList.add("mesaj");
  mesaj.innerText = `Ortalamanız : ${sonuc}, Notunuz : ${not}`;
}
function sil(){
  document.querySelector("#msg").innerText="";
  document.querySelector("#msg").classList.add("d-none");
}