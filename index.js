"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(express.static('public'));

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
      case "music two":
      speech = "Under development, please look forward to it!"
      break;
      case "music three":
      speech = "You're still trying. Come on!"
      break;
      case "test music":
      speech = '<speak><audio src="https://github.com/AGECK/test-node/blob/master/public/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
   }
   return res.json({
    speech: speech,
        displayText: speech,
    source:"test-node"
   });
});


restService.listen(process.env.PORT || 8000,function(){
  console.log("Server up and listening");
});
