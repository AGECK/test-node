"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
    bodyParser.urlencoded({
    	extended:true
    });
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
   	speech:speech,
   	displayText:speech,
   	source:"test-Echo"
   });
});


restService.listen(process.env.PORT || 6000,function(){
	console.log("Server up and listening");
});
