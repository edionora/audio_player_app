const express = require('express')
const app = express();
// Javascript cannot natively access the body of a POST request, so we
// include the library 'body-parser' to provide that option
// npm install body-parser
const bodyParser = require('body-parser');
const axios = require('axios');
const songs = require('./songDatabase');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(8050, () => {
	console.log('Server Started on http://localhost:8050');
	console.log('Press CTRL + C to stop server');
});

app.use(bodyParser.json())


let songDb = []


app.post('/', (req, res) => {
    let newSong = req.body               
    let tempList = songDb;          
    tempList.push(newSong);                
    songDb = tempList;                
    res.send (songDb)            //this works perfectly!
    console.log('POST request made to server')
})

app.get('/', (req, res) => {
    res.send (songs)
    console.log('GET request made to server')
})