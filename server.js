const express=require('express');
const app=express();

app.listen(8085, function(){
    console.log("Server is at port 8085");
});

app.get("/" , function(req,res){
    res.sendFile(__dirname+"/index.html");
});