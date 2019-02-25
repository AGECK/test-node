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

restService.post("/V2test",function(){
     	    return res.json({
    fulfillmentText: "This is a text response",
    fulfillmentMessages: [
      {
           text:{
           	  text:[
                 "This is a song called music"
           	  ]
           }
      }
    ],
    source: "webhook-echo-sample",
    payload: {
    google: {
      expectUserResponse: true,
  expectedInputs: [
    {
      possibleIntents: [
        {
          intent: "actions.intent.TEXT"
        }
      ],
      inputPrompt: {
        richInitialPrompt: {
          items: [
            {
              simpleResponse: {
                textToSpeech: '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>'
              }
            }
          ]
        }
      }
    }
  ]
    }
  }
  });
});




restService.listen(process.env.PORT || 8000,function(){
	console.log("Server up and listening");
});
