import { countries } from "../data/countries.js";

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }

  document.querySelector("#ddlCountries").innerHTML = options;
  document.querySelector("#totalArea").innerHTML = countries.reduce(
    (totalArea, country) => totalArea + country.area,
    0
  ).toFixed(2);
};

const getCountry = (id) => {
  const arr = countries.filter((country) => country.ccn3 === id);
  return arr.length >0 ? arr[0] : null;

};


document.querySelector("#ddlCountries").addEventListener("change", (e)=>{
  console.log(e.target.value);
  const country = getCountry(e.target.value);
  

  document.querySelector("#details tr:nth-child(1) td").innerHTML = country.capital;
  document.querySelector("#details tr:nth-child(2) td").innerHTML = Object.values(country.currencies).map(item=>item.name).join("-");
  document.querySelector("#details tr:nth-child(3) td").innerHTML = Object.values(country.languages).join("-");

});

// CALCULATE TOTAL AREA
let areas = [];
for (let country of countries) {
  areas.push(country.area);
}
console.log(areas);
let totalArea=areas.reduce((toplam,x) => toplam+x,0);
console.log("Total Area: "+totalArea);
document.querySelector("#totalArea").innerText = `Total Area : ${totalArea} `;



loadCountries();


console.log(getCountry("784"));