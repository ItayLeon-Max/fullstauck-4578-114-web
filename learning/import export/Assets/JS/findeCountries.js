export const findCountriesByName = (countries, name) => {
    countries.find(country => country.name === name); 
}