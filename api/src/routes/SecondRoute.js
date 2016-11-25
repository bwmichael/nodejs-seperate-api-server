var express = require('express');
var SecondRouter = express.Router();



SecondRouter.get('/', function (req, res) {

res.send('Welcome to the SECOND route !!!');

});








module.exports = SecondRouter;
