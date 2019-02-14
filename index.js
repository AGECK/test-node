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
        
       switch(req.body.queryResult.parameters.echoText.toLowerCase()){
       	  case "baidu":
           return res.json({
              fulfillmentText: "This is a text response",
              fulfillmentMessages:[
              {
                   text :{
                      text : [
                          "This is Baidu"
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
				      textToSpeech: "This is a Basic Card:"
				     }
				       },
				     {
				       basicCard: {
				         title: "百度",
				         image: {
				         url: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png",
				         accessibilityText: "Baidu Logo",
				         height: "200",
				         width: "100"
				              },
				         buttons: [
				                {
				            title: "点我百度",
				            openUrlAction: {
				            url: "https://www.baidu.com"
				                 }
				                }
				              ],
				            imageDisplayOptions: "DEFAULT"
				            }
				          }
				        ]
				      }
				    }
				  }
           });
           break;
            case "related products":
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
			 "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": []
      },
      "userStorage": "{\"data\":{}}",
      "systemIntent": {
        "intent": "actions.intent.OPTION",
        "data": {
          "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
          "listSelect": {
            "title": "List Title",
            "items": [
              {
                "optionInfo": {
                  "key": "SELECTION_KEY_ONE",
                  "synonyms": [
                    "synonym 1",
                    "synonym 2",
                    "synonym 3"
                  ]
                },
                "description": "This is a description of a list item.",
                "image": {
                  "url": "IMG_URL_AOG.com",
                  "accessibilityText": "Image alternate text"
                },
                "title": "Title of First List Item"
              },
              {
                "optionInfo": {
                  "key": "SELECTION_KEY_GOOGLE_HOME",
                  "synonyms": [
                    "Google Home Assistant",
                    "Assistant on the Google Home"
                  ]
                },
                "description": "Google Home is a voice-activated speaker powered by the Google Assistant.",
                "image": {
                  "url": "IMG_URL_GOOGLE_HOME.com",
                  "accessibilityText": "Google Home"
                },
                "title": "Google Home"
              },
              {
                "optionInfo": {
                  "key": "SELECTION_KEY_GOOGLE_PIXEL",
                  "synonyms": [
                    "Google Pixel XL",
                    "Pixel",
                    "Pixel XL"
                  ]
                },
                "description": "Pixel. Phone by Google.",
                "image": {
                  "url": "IMG_URL_GOOGLE_PIXEL.com",
                  "accessibilityText": "Google Pixel"
                },
                "title": "Google Pixel"
              }
            ]
          }
        }
      }
    }
  },
  "outputContexts": [
    {
      "name": "/contexts/_actions_on_google",
      "lifespanCount": 99,
      "parameters": {
        "data": "{}"
      }
    }
  ]
			 
           });
          break;
      }
});





restService.listen(process.env.PORT || 8000,function(){
     console.log("Server up and listening");
});
