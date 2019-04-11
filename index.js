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

restService.post("/V2test",function(req, res){

var userspeech="";
switch (req.body.queryResult.queryText.toLowerCase()) {

	case "stop to follow":
         return res.json({
              fulfillmentText: "Stop repeat the voice",
              fulfillmentMessages:[
              {
                   text :{
                      text : [
                          "Stop repeat the voice"
                      ]
                   }
               }
              ],
              source: "webhook-echo-sample",
                  payload: {
				    google: {
				      expectUserResponse: true,
				      richResponse: {
				        items: [
				          {
				            simpleResponse: {
				              textToSpeech: "Stop repeat the voice"
				            }
				          }
				        ]
				      }
				    }
				  },
	    outputContexts: [
	      {
		name: "projects/jituopi-5f232/agent/sessions/ad236f60-2b12-2a60-ccff-b35ca09609f4/contexts/repeatthevoice-followup",
		lifespanCount: 0
	      }
	    ]

         });
	 break;
	 
         case "stop restudy":
         return res.json({
              fulfillmentText: "Stop repeat the voice",
              fulfillmentMessages:[
              {
                   text :{
                      text : [
                          "Stop repeat the voice"
                      ]
                   }
               }
              ],
              source: "webhook-echo-sample",
                  payload: {
				    google: {
				      expectUserResponse: true,
				      richResponse: {
				        items: [
				          {
				            simpleResponse: {
				              textToSpeech: "Stop repeat the voice"
				            }
				          }
				        ]
				      }
				    }
				  },
    outputContexts: [
      {
        name: "projects/jituopi-5f232/agent/sessions/ad236f60-2b12-2a60-ccff-b35ca09609f4/contexts/repeatthevoice-followup",
        lifespanCount: 0
      }
    ]

         });
         break;
         case "play music":

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
	    richResponse: {
	      items: [
	        {
	          simpleResponse: {
	            textToSpeech: "<speak><audio src='https://raw.githubusercontent.com/AGECK/test-node/master/public/Cancan.mp3'>your wave file</audio></speak>"
	          }
	        }
	      ]
	    }
	  }
	  },
	  "outputContexts": [
	      {
	        "name": "projects/jituopi-5f232/agent/sessions/ad236f60-2b12-2a60-ccff-b35ca09609f4/contexts/repeatthevoice-followup",
	        "lifespanCount": 1
	      }
	    ]		
	  });

         break;


}
	  });









restService.listen(process.env.PORT || 8000,function(){
	console.log("Server up and listening");
});
