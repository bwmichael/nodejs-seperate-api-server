// Call in express for webserver handling
var express = require('express');

// Give our server a variable name > app
var app = express();
// Set the port we want to listen on
var port = process.env.PORT || 9001;


// Routers
// This creates a 'Router' and links it to a seperate file for easier management
//var MainRouter = require('./src/routes/MainRoute');

var FirstRouter = require('./src/routes/FirstRoute');
// var SecondRouter = require('./src/routes/SecondRoute');
// var ThirdRouter = require('./src/routes/ThirdRoute');







// Static Routes
app.use('/bootstrap', express.static(__dirname + '/bower_components/bootstrap/dist/'));
app.use('/font-awesome', express.static(__dirname + '/bower_components/font-awesome/'));
app.use('/moment', express.static(__dirname + '/bower_components/moment/'));
app.use('/fastselect', express.static(__dirname + '/bower_components/fastselect/dist'));
app.use('/jquery-searchable', express.static(__dirname + '/bower_components/jquery-searchable/dist'));
app.use('/percircle', express.static(__dirname + '/bower_components/percircle/dist'));
app.use('/excelexporter', express.static(__dirname + '/bower_components/excel-exporter/'));
app.use('/jsbarcode128', express.static(__dirname + '/public/js/'));
app.use('/alertify', express.static(__dirname + '/bower_components/alertifyjs/dist/js/'));

//app.use('/fastselect', express.static(__dirname + '/bower_components/moment/'));



app.use('/css', express.static(__dirname + '/public/css'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/jquery', express.static(__dirname + '/bower_components/jquery/dist/'));
app.use('/jquery-ui', express.static(__dirname + '/bower_components/jquery-ui/'));
app.use('/public', express.static(__dirname + '/public'));









// Set view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');


// URL Mapping
// After creating the router, give that router a main URL map to user
//app.use('/', MainRouter);

app.use('/', FirstRouter);
// app.use('/second', SecondRouter);
// app.use('/third', ThirdRouter);


// This tells our server to startup and listen on our designated port
app.listen(port, function() {
  console.log('Server started! At http://localhost:' + port)
})
