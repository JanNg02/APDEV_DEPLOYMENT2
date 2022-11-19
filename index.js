const express = require("express"); 
const router = require('./routes.js'); 

const app = express();

//for css, js and images and such
app.use(express.static(__dirname + '/Public'));
app.use(express.static(__dirname));

app.use(express.urlencoded({extended: true}));

//Ejs enabled   
app.set('view engine', 'ejs');
app.set('views', 'view'); 

port = 3000; 
app.listen(port, function(){
    console.log("Server is running at port: " + port)
}); 


app.use("/",router); 

/*app.get("/",function(req,res){
    res.render("shop");
})*/