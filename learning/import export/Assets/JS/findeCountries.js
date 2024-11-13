export const findCountriesByName = (countries, name) => {
    return countries.find(country => country.name === name); 
}