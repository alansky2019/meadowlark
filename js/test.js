var express = require('express');
var app = express();

app.get('/user/:id',function(req,res){
    res.send('user is ---' + req.params.id);
});

var server = app.listen(3000,function(){
    console.log('ZHRK Server listening at http:// ' + server.address().address + ':' + server.address().port);
});