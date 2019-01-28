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
			              textToSpeech: "This is a Basic Card:"
			            }
			          },
			          {
                              listSelect : {
                        	title : "This is test listSelect",
                        	items : [{
                        		info : {
                                     key : "baidu"
                        		},
                        		title : "These are some of the options",
                        		description : "These are some of the options",
                        		image : {
                        			imageUri : "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png",
                        			accessibilityText : "Google Logo"
                        		}
                        	}]
                        }


			          }
			        ]
			      }
			    }
 			 }
           });
});


restService.listen(process.env.PORT || 8000,function(){
	console.log("Server up and listening");
}); 
