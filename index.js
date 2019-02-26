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
                   "music"
              ]
           }
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
              title: "Card Title",
              image: {
                url: "https://raw.githubusercontent.com/AGECK/test-node/master/public/test-img.png",
                accessibilityText: "Google Logo",
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
