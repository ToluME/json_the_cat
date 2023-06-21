const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error('Request error:', error);
  } else if (description === null) {
    console.log(`Breed '${breedName}' not found.`);
  } else {
    console.log(`Description of '${breedName}': ${description}`);
  }
});