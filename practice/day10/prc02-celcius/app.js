function sicaklikHesaplama() {
  function celVeFah(celcius) {
    let fahrenheit = Math.round(celcius * (9 / 5) + 32);
    return fahrenheit;
  }

  function fahVeCel(fahrenheit) {
    let celcius = Math.round(((fahrenheit - 32) * 5) / 9);
    return celcius;
  }

  let tempSecim = document.querySelector("#sayi_deger");
  let valueTemp = tempSecim.options[tempSecim.selectedIndex].value;

  let test = tempSecim.options[tempSecim.selectedIndex].label;
  console.log(test);

  let deger = document.querySelector("#deger").value;

  if (valueTemp == 1) {
    document.querySelector(".sonuc").innerHTML =
      celVeFah(deger) + " Fahrenheit";
  } else {
    document.querySelector(".sonuc").innerHTML = fahVeCel(deger) + " Celcius";
  }
}
