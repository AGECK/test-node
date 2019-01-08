"use strict";

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
    var addName = req.body.selectSql;
    var testnumber = "";
    connection.query('select 1 + 1 as solution',function(error,results,fields){
       testnumber = results;  
    });

    return results.json({
    	speech:testnumber,
    	displayText:testnumber,
    	source:"webhook-echo-sample"
    });

});





var server = restService.listen(8000,'localhost',function(){
	var host = server.address().address
	var port = server.address().port
	console.log("访问地址为 http://%s:%s",host,port);
});
