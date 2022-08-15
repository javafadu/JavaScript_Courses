//Textboxlara girilen taban ve üs değerlerine göre oluşan üstlü sayının değerini yaz
function ustAl(){
    const taban = document.querySelector("#taban").value;
    const us = document.querySelector("#us").value;
    const sonuc = Number(taban)**Number(us);
    const msgSonuc = document.querySelector(".sonuc");
    msgSonuc.classList.add("ekle");
    msgSonuc.innerHTML=`<b>İşlem sonucu : ${sonuc}</b>`;
}