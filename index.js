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
    switch(res.body.result.parameters.AudioSample.toLowerCase())
    {
        case "baidu":
           return res.json({
           	  fulfillmentText: "This is a text response",
           	  fulfillmentMessages:[
           	  {
                   text :{
                   	  text : [
                   	     "baidu"
                   	  ]
                   }
           	   }
           	  ],
           	  source: "webhook-echo-sample",
           });
        break;
    }
});


restService.listen(process.env.PORT || 8000,function(){
	console.log("Server up and listening");
}); 
