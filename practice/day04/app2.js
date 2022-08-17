//Kullanıcının girdiği iki adet sayının OKEK'ini bulup mesaj olarak yazdırın.
const okekBul = () => { 
    let sayi1 = document.querySelector("#sayi1").value;
    let sayi2 = document.querySelector("#sayi2").value;
    let sonuc= document.querySelector("#sonuc");
    for(let i=sayi2;i<=sayi1*sayi2;i++){
        if(i%sayi1==0 && i%sayi2==0){
            sonuc.innerHTML = `<b>${sayi1} ve ${sayi2} sayılarının OKEK'i ${i} sayısıdır</b>`
            break;
        }
    }
 }