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
	    var Event = "";
	    Event=req.body.inputs.arguments.textValue;
     	return res.json({           
              fulfillmentText: "This is a text response",
              fulfillmentMessages:[
              {
                   text :{
                      text : [
                          Event
                      ]
                   }
               }
              ],
              source: "webhook-echo-sample"

     	});
});


restService.listen(process.env.PORT || 8000,function(){
     console.log("Server up and listening");
});
