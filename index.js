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

restService.post("/slack-test", function(req, res) {
  return res.json({
"speech": "this text is spoken out loud if the platform supports voice interactions",
"displayText": "this text is displayed visually",
"messages": {
  "type": 1,
  "title": "card title",
  "subtitle": "card text",
  "imageUrl": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png"
},
"data": {
  "google": {
    "expectUserResponse": true,
    "richResponse": {
      "items": [
        {
          "simpleResponse": {
            "textToSpeech": "this is a simple response"
          }
        }
      ]
    }
  },
  "facebook": {
    "text": "Hello, Facebook!"
  },
  "slack": {
    "text": "This is a text response for Slack."
  }
},
"contextOut": [
  {
    "name": "context name",
    "lifespan": 5,
    "parameters": {
      "param": "param value"
    }
  }
],
"source": "example.com",
"followupEvent": {
  "name": "event name",
  "parameters": {
    "param": "param value"
  }
}

  });
});

restService.listen(process.env.PORT || 8000, function() {
 console.log("Server up and listening");
});
