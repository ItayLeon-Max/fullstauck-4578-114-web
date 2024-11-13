// Import the countries array from the data.js file.
// Syntax: import variableName from "path/to/file.js";
// import countries from './data.js';
import { countries } from "./data.js";
import { findCountriesByName } from "./findeCountries.js";


console.log(findCountriesByName(countries, "Israel"));

