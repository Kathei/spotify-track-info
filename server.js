const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 
const axios = require('axios');

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/search', (req, res) => { 
  console.log('jee');
  console.log('query: ', req.query)
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
  
});



var request = require('request'); // "Request" library

var client_id = '045fac98505c497d82d49d8b21a3b553'; // Your client id
var client_secret = '484fef1c1d0649ff8e87637f8b93b642'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/search?q=Helsinski&type=track&limit=10&offset=5',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      const items = body.tracks.items
     items.forEach(item => {
        console.log(item.name, item.artists)
      })
    });
  }
});


