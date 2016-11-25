var express = require('express');
var FirstRouter = express.Router();

// FirstRouter.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
//  });



 // FirstRouter.use(function (req, res, next) {
 //     res.header("Access-Control-Allow-Origin", "http://10.0.0.142");
 //     res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
 //     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
 //     if ('OPTIONS' === req.method) {
 //         res.status(204).send();
 //     }
 //     else {
 //         next();
 //     }
 // });




 FirstRouter.use(function(req, res, next) {
   var allowedOrigins = ['http://127.0.0.1:9001', 'http://localhost:9001', 'http://127.0.0.1:9000', 'http://localhost:9000'];
   var origin = req.headers.origin;
   if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
   }
   //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
   //res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   res.header('Access-Control-Allow-Credentials', true);
   return next();
 });




FirstRouter.get('/', function (req, res, next) {

var jsonData = [];
          jsonData.push({
              value1: "1",
              value2: "2",
              value3: "3"
          });


res.json(jsonData);
console.log("sent ");

//res.send('Welcome to the FIRST route !!!');

});








module.exports = FirstRouter;
