import { getCountries } from "./countries-api.js";

async function init() {
  const countries = await getCountries();
  console.log(countries.map((country) => country.name));
}

init();