import {
  getCountriesAndPopulation,
  getCountriesAndCapital
} from "./countries-api.js";

async function init(){
  let population = await getCountriesAndPopulation();
  let capital = await getCountriesAndCapital();
  let max = population[0].population;
  let maxCountryName = population[0].name;
  for(let country of population){
    if(country.population > max){
      max = country.population;
      maxCountryName = country.name;
    }
  }
  for(let country of capital)
    if(country.name === maxCountryName){
      console.log(country.capital);
    }
  console.log(maxCountryName);
}


init();