const api_url="https://api.quotable.io/random";
let data="";
async function getquote(url){
    const response=await fetch(url);
    data=await response.json();
    console.log(data);
    // console.log(data.content);
    let quote=document.getElementById("quote");
    quote.innerHTML=data.content;
    let author=document.getElementById("author");
    author.innerHTML=data.author;
}
getquote(api_url); 
function refresh(){
    getquote(api_url); 
}
function copy(){
  var copyText=data.content;
  copyText=copyText+" -By ";
  var auth=data.author;
  copyText+=auth;
  console.log(copyText);
  navigator.clipboard.writeText(copyText);
  alert("Quote copied to clipBoard");
}
