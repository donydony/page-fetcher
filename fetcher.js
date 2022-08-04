let args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('response:', response.statusCode); // Print the response status code if a response was received

  if (response.statusCode === 200) {
    fs.writeFile(args[1], body, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  }
});