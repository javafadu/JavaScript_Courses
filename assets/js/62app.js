import { countries } from "../data/countries.js";

const loadCountries = () => {
  let options = "";

  for (let country of countries) {
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }

  document.querySelector("#ddlCountries").innerHTML = options;
};

const getCountry = (id) => {
  const arr = countries.filter((country) => country.ccn3 === id);
  return arr.length >0 ? arr[0] : null;

};


document.querySelector("#ddlCountries").addEventListener("change", (e)=>{
  console.log(e.target.value);
  const country = getCountry(e.target.value);
  const currency = Object.getOwnPropertyNames(country.currencies);
  const language = Object.values(country.languages);

  document.querySelector("#details tr:nth-child(1) td").innerHTML = country.capital;
  document.querySelector("#details tr:nth-child(2) td").innerHTML = currency;
  document.querySelector("#details tr:nth-child(3) td").innerHTML = language;

});

loadCountries();


console.log(getCountry("784"));