"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
    bodyParser.urlencoded({
    	extended: true
    })
	);

restService.use(bodyParser.json());

restService.post("/V2test",function(req,res){
	var speech = "";
  switch (req.body.result.parameters.AudioSample.toLowerCase()) {
  	  case "baidu":
  	     speech = "baidu";
  	  break;
  }
           return res.json({
           	  fulfillmentText: "This is a text response",
           	  fulfillmentMessages:[
           	  {
                 speech
           	   }
           	  ],
           	  source: "webhook-echo-sample"
           });
});


restService.listen(process.env.PORT || 8000,function(){
	console.log("Server up and listening");
}); 
