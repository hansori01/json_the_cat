
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search`

const fetchBreedDescription = (breedName, callback) => {
  // const query = `${url}?q=${breedName}`
  request(url + `?q=${breedName}`, (error, response, body) => {
    // this error is at top because if not, the const data = JSON... will throw the error first
    if (error) {
      callback(error, null);
      // console.log('error:', error);
      //if we hit error then exit request
      // return;
    }
    const data = JSON.parse(body)[0];
    if (data === undefined) {
      callback('🙀 I do not exist...🙀 ' , null)
    }
    else if (data) {
      const description = data['description']
      callback(null, description)
      // console.log(description);
    }
  });
}

module.exports = { fetchBreedDescription };
