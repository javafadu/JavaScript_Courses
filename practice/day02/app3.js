// when click the button, change the color of button background and text

//Butona tıklayınca içeriğin ve butonun arkaplan ve metin renkleri yer değiştirsin.

let mode=true;
function degistir(){
    const icerik = document.querySelector("#icerik").classList;
    const buton = document.querySelector("#btn-degistir").classList;
    if(mode){
        icerik.remove("renk1");
        icerik.add("renk2");
        buton.remove("btn-renk1");
        buton.add("btn-renk2");
    }
    else{
        icerik.remove("renk2");
        icerik.add("renk1");
        buton.remove("btn-renk2");
        buton.add("btn-renk1");
    }
    mode=!mode;
}