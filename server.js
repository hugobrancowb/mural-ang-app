const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');

// app.use(cors({origin: 'https://64.225.11.99', credentials: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

/*
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
*/

app.use(bodyParser.json());


app.get('/teste', function (req, res) {
	res.send('Teste ok');
});

/* GET Method utilizando parametro do endereço URL
app.get('/mural:id', function (req, res) {
  console.log(req.params.id);
});
*/

/* GET Method para obter a lista desejada à partir de um id */
app.get('/get-mural', function (req, res) {

  let pool;
  var id = req.query.id;

  const createPool = async () => {
    pool = await mysql.createPool({
      user: '***',
      password: '***',
      database: '***',
    });
  };

  createPool().then(async function () {
    try {
      const newsQuery = await pool.query(`SELECT mural_str from share_mural WHERE id = ` + id, function(err, results, fields){
        var mural_obj = JSON.parse(results); /* converte para objeto */
        res.send(mural_obj); /* envia o mural em objeto para o front */
      });
    } catch (err) {
      console.log(err);
    }

  });
});

/* POST Method para salvar o mural em um banco de dados */
app.post('/share-mural', function(req, res) {

  let pool;
  var id = 55;
  var post_response = false;
  var mural_str = JSON.stringify(req.body.mural);

  const createPool = async () => {
    pool = await mysql.createPool({
      user: '***',
      password: '***',
      database: '***',
    });
  };

  createPool().then(async function () {
    try {
      const newsQuery = await pool.query(`INSERT INTO share_mural(` + id + `, ` + mural_str + `, NOW());`);
      post_response = true;
    } catch (err) {
      console.log(err);
    }

    res.send({id: id, status: post_response}); /* retorna uma unique ID para resgatar a lista posteriormente */
  });

});

/* porta local */
const port = process.env.PORT || 3000;
app.listen(port);
