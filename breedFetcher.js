
const request = require('request');
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
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
  // console.log('body:', body); // body used to be string. data is now the object
  //find out the type of body. It is a string! //confirm that data is now object.
  // console.log(typeof body + ' ' + typeof data);
});