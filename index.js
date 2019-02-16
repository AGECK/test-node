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
});


restService.listen(process.env.PORT || 8000,function(){
     console.log("Server up and listening");
});
