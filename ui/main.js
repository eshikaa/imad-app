//conter code
var button=document.getElementById('counter');

button.onclick=function()
{
//make req to conter endpoint

var request=new XMLHttpRequest();
//capture resp and store into varable
request.onreadystatechange=function(){
if(request.readystate===XMLHttpRequest.DONE)
{
    if (request.status===200)
{
    
}