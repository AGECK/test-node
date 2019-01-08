
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const restService = express();
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'wokao13226036560',
	database:'zhuce'
});
restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

connection.connect();

restService.post("/test-sql",function(req,res){
    var testnumber = "";
    connection.query('select 1 + 1 as solution',function(error,result){
	  if(error){
          console.log('[SELECT ERROR] - ',error.message);
          return;
        }
       testnumber = results;  
    });

    return res.json({
    	speech: testnumber,
    	displayText: testnumber,
    	source:"webhook-echo-sample"
    });

});

restService.listen(process.env.PORT || 8000, function() {
 console.log("Server up and listening");
});

