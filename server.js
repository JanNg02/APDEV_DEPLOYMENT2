const http = require ('http'); 
const fs =  require('fs'); 

fs.readFile('./Login3.html', function(err, html){
    http.createServer(function(req, res) {
        res.StatusCode = 200; 
        res.setHeader('Content-Type', 'text/html'); 
        res.write(html); 
        res.end(); 
    }).listen(3000); 
    console.log("Server Started on Port 3000"); 
}); 

/*
const server =  http.createServer((req, res) => {
    console.log("Request url: " + req.url); 
}); 

server.listen(3000, 'localhost', () =>{
    console.log("Server listening...."); 
})*/