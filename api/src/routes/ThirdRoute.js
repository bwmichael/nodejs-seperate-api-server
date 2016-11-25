var express = require('express');
var ThirdRouter = express.Router();



ThirdRouter.get('/', function (req, res) {

res.send('Welcome to the THIRD route !!!');

});








module.exports = ThirdRouter;
