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
          var speech = "";
          speech = req.query.queryResult.queryText;
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
                          speech
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
