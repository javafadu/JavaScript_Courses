// textbox lara girilen ad ve meslek bilgilerine gore mesaj yazdir

function gonder() {
 let isim = document.querySelector("#ad").value;
 let meslek = document.querySelector("#meslek").value;
 let mesaj = document.querySelector("#mesaj");

 mesaj.style.display = "block";
 // mesaj.classList.add("d-block");

mesaj.innerText=`Sayin ${meslek} ${isim} hosgeldiniz`;

}

function sil() {
    mesaj.innerText="";
    // mesaj.style.display = none;
    mesaj.classList.add("d-none");
}