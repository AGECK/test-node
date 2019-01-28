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
			 payload: {
			    google: {
			      expectUserResponse: true,
			      richResponse: {
			        items: [
			          {
			            simpleResponse: {
			              textToSpeech: "Choose a item"
			            }
			          }
			        ]
			      },
			      systemIntent: {
			        intent: "actions.intent.OPTION",
			        data: {
			          @type: "type.googleapis.com/google.actions.v2.OptionValueSpec",
			          listSelect: {
			            title: "Hello",
			            items: [
			              {
			                optionInfo: {
			                  key: "first title key"
			                },
			                description: "first description",
			                image: {
			                  url: "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
			                  accessibilityText: "first alt"
			                },
			                title: first title
			              },
			              {
			                optionInfo: {
			                  key: "second"
			                },
			                description: "second description",
			                image: {
			                  url: "https://lh3.googleusercontent.com/Nu3a6F80WfixUqf_ec_vgXy_c0-0r4VLJRXjVFF_X_CIilEu8B9fT35qyTEj_PEsKw",
			                  accessibilityText: "second alt"
			                },
			                title: "second title"
			              }
			            ]
			          }
			        }
			      }
			    }
			  }
           });
});


restService.listen(process.env.PORT || 8000,function(){
	console.log("Server up and listening");
}); 
