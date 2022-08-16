//Büyük sayının küçük sayıya bölümünden kalanlar toplamını, küçük sayı büyük sayıya 
//yetişene kadar birer birer artırarak bulalım.

function hesapla(){
    let sayi1 = document.querySelector("#sayi1").value;
    let sayi2 = document.querySelector("#sayi2").value;
    let mesaj = document.querySelector("#mesaj");
    
    if(sayi1>sayi2){
        let temp = sayi1 ;
        sayi1 = sayi2 ;
        sayi2 = temp;
    }

    let kalanlar = Number(sayi2) % Number(sayi1); 
    
    while(sayi2>sayi1){
        sayi1++;
        kalanlar = kalanlar + (sayi2%sayi1);
    }
    document.querySelector("#msg").innerHTML = `Kalanlar Toplamı : ${kalanlar}`;
}