const express = require('express');

const hbs = require('hbs');

const app = express(); 

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get("/", function(req,res){
    res.render("index");
    // res.send("Hello World");
})

app.get('/hello/:name', function(req, res){
    const name = req.params.name;

})

app.listen(3000, function(){
    console.log("server started");
})