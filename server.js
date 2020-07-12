const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
//const mysql = require('mysql');

app.use(cors({origin: true, credentials: true}));

app.use(express.static(path.join(__dirname, 'dist/muralapp')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/muralapp', 'index.html'));
});

/* GET method para obter a lista desejada à partir de um endereço */
app.get('/getmural', function (req, res) {

  console.log('numero id: ' + req.query.id);

  var dummylist = [
    {
      "id": 20114422,
      "in_mural": false, 
      "width": 3024,
      "height": 3024,
      "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
      "photographer": "Joey Farina",
      "photographer_url": "https://www.pexels.com/@joey",
      "photographer_id": 680589,
      "src": {
        "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      }
    },
    {
      "id": 20142,
      "in_mural": false, 
      "width": 3024,
      "height": 3024,
      "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
      "photographer": "Joey Farina",
      "photographer_url": "https://www.pexels.com/@joey",
      "photographer_id": 680589,
      "src": {
        "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      }
    }];

  res.send(dummylist);
});

/* porta local */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});