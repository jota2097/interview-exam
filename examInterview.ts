
/**
 * Problem 1 - (A)
 * 
 * Create an Object with a "Hello" method that wites "Hello <name> in  the console"
 */

const person = {
    name: "Jose",
    hello: () => console.log(`Hello ${person.name}`)
}

person.hello();
/**
 * Problem 1 - (B)
 *
 * How would you make the name inmutable ?
 */

Object.freeze(person);

person.name = "Pablo";

person.hello();
/**
 * Problem 2
 *
 * Write a function that logs the 5 cities that ocurre the most in the array below in
 * order from the most number of occurences to least.
 */

const cities = [
    "nashville",
    "nashville",
    "los angeles",
    "new york",
    "new york",
    "california",
    "barcelona",
    "Madrid",
    "Madrid",
    "london",
    "nashville",
    "sevilla",
    "canary island"

];

const logMostOcurrenciesCities = (numCities) => {
    return [... new Set(cities)].map(x => {
        return {
            name: x,
            times: cities.filter(y => y === x).length
        };
    })
        .sort((a, b) => b.times - a.times)
        .slice(0, numCities)
        .map(x => x.name);

}

console.log(logMostOcurrenciesCities(5));