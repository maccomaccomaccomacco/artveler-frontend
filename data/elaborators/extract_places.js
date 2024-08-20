const fs = require('fs');

// Read the JSON file
const data = fs.readFileSync('../output.json', 'utf8');

// Parse the JSON data
const artworks = JSON.parse(data);

// Extract locations and avoid duplicates using a Set
const locationsSet = new Set();
artworks.forEach(artwork => {
  if (artwork.location) {
    locationsSet.add(artwork.location);
  }
});

// Convert the Set back to an array
const locationsArray = Array.from(locationsSet);

// Save the array into a new JSON file
fs.writeFileSync('../locations.json', JSON.stringify(locationsArray, null, 2), 'utf8');