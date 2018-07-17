var express = require("express")

var app = express();

var home = function(request, response){
    response.sendFile( __dirname + "/index.html")
}
app.get("/", home)


var PORT = 3000
var message = function (){
    console.log("your server is running on PORT " + PORT)
}
app.listen(PORT, message)
