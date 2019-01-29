"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.post("/V2test",function(req,res){
	      var testecho = "";
          var speech = "baidu1";
          testecho = req.body.result.parameters.echoText;
       if (speech == "baidu"){
           return res.json({
              fulfillmentText: "This is a text response",
              fulfillmentMessages:[
              {
                   text :{
                      text : [
                          speech
                      ]
                   }
               }
              ],
              source: "webhook-echo-sample"
           });
      }
      else
      {
         return res.json({
              fulfillmentText: "This is a text response",
              fulfillmentMessages:[
              {
                   text :{
                      text : [
                          "not baidu"
                      ]
                   }
               }
              ],
              source: "webhook-echo-sample"
           });
      }
});


restService.use(bodyParser.json());


restService.listen(process.env.PORT || 8000,function(){
     console.log("Server up and listening");
});
