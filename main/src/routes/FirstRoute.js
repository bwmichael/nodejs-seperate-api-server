var express = require('express');
var FirstRouter = express.Router();



FirstRouter.get('/', function (req, res) {

  res.render('index', {

                      });
});








module.exports = FirstRouter;
