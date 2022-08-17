//Kullanıcıya ürün ve fiyat bilgisi girdirelim, 1500 TL ile bu üründen kaç adet 
// alabileceğini ekrana yazdıralım.(Do While kullanarak yapalım)
const hesapla = () =>{
    let urun = document.querySelector("#urun").value;
    let fiyat = Number(document.querySelector("#fiyat").value);
    let sayac=0;
    let toplam=0;
    do{
      toplam = sayac*fiyat;
      if(toplam>1500){
          toplam-=fiyat;
          sayac--;
          break;
      }
      sayac++;
    }while(toplam<=1500)
    document.querySelector("#mesaj").innerText = `${urun} adlı üründen ${sayac} tane alabilirsiniz`
  
  }