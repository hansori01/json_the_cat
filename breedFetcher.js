
const request = require('request');
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`

request(url, (error, response, body) => {
  // this error is at top because if not, the const data = JSON... will throw the error first
  if (error) {
    console.log('error:', error);
    //if we hit error then exit request
    return;
  }
  const data = JSON.parse(body)[0];
  if (data === undefined) {
    console.log('🙀 I do not exist...🙀 ')
  }
  else if (data) {
    const description = data['description']
    console.log(description);
  }
});