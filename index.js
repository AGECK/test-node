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

restService.post("/V2test", function(req, res) {
  return res.json({
    fulfillmentText: "This is a text response",
    fulfillmentMessages: [
      {
        card: {
        title: "card title",
        subtitle: "card text",
        imageUri: "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
        buttons: [
          {
            text: "button text",
            postback: "https://assistant.google.com/"
          }
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
              title: "Baidu搜索",
              image: {
                url: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png",
                accessibilityText: "Baidu Logo",
                height: 300,
                width: 200
              },
              buttons: [
                {
                  title: "点我百度",
                  openUrlAction: {
                    url: "https://www.baidu.com"
                  }
                }
              ],
              imageDisplayOptions: "CROPPED"
            }
          }
        ]
      }
    }
  }
  });
});
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
