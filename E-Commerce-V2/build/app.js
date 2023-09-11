"use strict";

var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended: true,
  limit: "10mb"
}));
app.use(express.json({
  limit: "10mb"
}));
module.exports = app;