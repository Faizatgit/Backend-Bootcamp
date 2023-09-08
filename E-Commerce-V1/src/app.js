const express = require('express');

const app = express();

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended: true , limit: "10mb"}));
app.use(express.json({limit: "10mb"}));

module.exports = app