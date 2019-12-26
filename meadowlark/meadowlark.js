var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var fortunes = [
    "Conquer your fear or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    "I want you to be the best version of yourself that you can be.",
    "熟并不能生巧：熟练的能变成永久不变的，也就是说，如果你一次又一次地做同一件事，最终它将变成下意识的、机械式的。确实如此，但它没有考虑你不断练习做某件事的品质。如何你按照坏习惯练习，坏习惯就变成机械式了。所以你应该遵循完美的规则去练习，这样才能成就完美！"
];

app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
    res.render('home');
});

app.get('/home',function(req,res){
    res.render('home');
});

app.get('/about',function(req,res){
    var randomForturne = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about',{fortune:randomForturne});
});

app.use(function(req,res){
    res.status(404);
    res.render('404'); 
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press CTRL-C to terminate.');
});