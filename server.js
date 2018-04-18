var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto=require('crypto');
var app = express();
app.use(morgan('combined'));
var articles
{
   'article-one':(""),
    'article-two':(""),
    'article-three':("")
};

var article-one=
{
    title:'article-one';
    date:'17 april 2018';
    content:'   <p>is the first articelle.    jiocas</p>';
                          
};
function createtemplate(data)
{ 
    var title=data.title;
    var date=data.date;
    var content=data.content;
var htmltemplate={

    <html>
    <head>
        <title>
         $(title)
            
        </title>
        <style>
            .container
            {
                max-width:800px;
                margin:0 auto;
            }
    </style>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
       <body>
 <div class="container">
         <div>
            <a href="/">home</a>
         </div>
             <div>
             $(date)
              </div>
                           <div>
                                $(content)
                          </div>
</div>    
         </body>
      
</html>
;
return htmltemplate;
};
    
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString())
});



app.get('/articleName',function(req,res){
     res.sendFile(createtemplate(articles[articleName]));

});
var articleName=req.params.articleName;
    
//app.get('/article-one',function(req,res){
  //   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));

//});
//app.get('/article-one',function(req,res){
  //   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

//});

function hash(input,salt)
{
var hashed=crypto.pbkdf2Sync(input,salt,10000,512,sha512);
return hashed.toString('hex');
}
app.get('/hash/:input',function(req,res)
{
var hashedString=hash(req,params,input,'this-is-some-random-string');
res.send(hashedString);

});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
