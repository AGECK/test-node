"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
    bodyParser.urlencoded({
    	extended:true
    })
	);

restService.use(bodyParser.json());

restService.post("/test",function(req,res){
   var speech = ""
   switch(req.body.result.parameters.Testshur.toLowerCase()){
      case "music one":
      speech = "Ho! You can do it!"
      break;
   }
   return res.json({
   	fulfillmentMessages:[speech],
   	fulfillmentText: speech,
   	source:"test-node"
   });
});


restService.listen(process.env.PORT || 8000,function(){
	console.log("Server up and listening");
});
