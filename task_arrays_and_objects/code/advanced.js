/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

england = unitedKingdom.find(country => country.name === 'England');
england.touristAttractions =["Stone Henge", "Buckingham Palace", "Tomwer of London"];
// console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom.find(country => country.name === 'Wales');
wales.capital = "Cardiff";

// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIreland = unitedKingdom.find(country => country.name === 'Northern Ireland');

northernIrelandKeys = Object.keys(northernIreland);

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

const scotland = unitedKingdom.find(country => country.name === 'Scotland');

if (scotland) {
  const scotlandPopulation = scotland.population;

  unitedKingdom.forEach(country => {
    if (country.population > scotlandPopulation) {
      console.log(`${country.name} has a bigger population than Scotland.`);
    } else if (country.population < scotlandPopulation) {
      console.log(`${country.name} has a smaller population than Scotland.`);
    } else {
      console.log(`${country.name} has the same population as Scotland.`);
    }
  });
}
