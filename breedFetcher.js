
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search`;

const fetchBreedDescription = (userInput, callback) => {
  // const query = `${url}?q=${breedName}`
  request(url + `?q=${userInput}`, (error, response, body) => {
    // this error is at top because if not, the const data = JSON... will throw the error first
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body)[0];
    if (data === undefined) {
      callback('🙀 I do not exist...🙀 ', null);
    } else if (data) {
      const description = data['description'];
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
