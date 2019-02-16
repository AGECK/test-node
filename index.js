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
 
      app.intent('action.intent.OPTIONS',(conv,params,option) => {
      	  if(!option)
      	  {
                conv.ask('You did not select any item from the list or carousel');
      	  }
      	  else if(option === 'baidu')
      	  {
              conv.ask('You onClick the Baidu');
      	  }
      	  else
      	  {
      	  	conv.ask('You selected an unknown item from the list,or carousel');
      	  }
      });

});


restService.listen(process.env.PORT || 8000,function(){
     console.log("Server up and listening");
});
