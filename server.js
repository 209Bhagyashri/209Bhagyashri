const express=require('express');
const app=express();

app.listen(8080, function(){
    console.log("Server is at port 8080");
});

app.get("/" , function(req,res){
    res.sendFile(__dirname+"/public/index.html");
});