const express = require("express"); 
//const routes = require ("./routes.html"); 
const app = express();

app.use(express.static(__dirname + '/Public'));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Login3.html");
})

port = 3000; 
app.listen(port, function(){
    console.log("Server is running at port: " + port)
}); 
