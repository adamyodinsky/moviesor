const express = require('express')
const app = express()
const router = require('./routes/router')();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router);

app.listen(3000, ()=> {
  console.log("Node Server Listining On Port 3000...")
})