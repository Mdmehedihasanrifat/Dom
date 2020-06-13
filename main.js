let body= document.querySelector("body");
let isBlue=false;

setInterval(function () {
if(isBlue){
    body.style.background="white";
}
else{
    body.style.background="blue";

}

isBlue=!isBlue;
},1000);

let li4=document.getElementById("li4");
li4.style.background="white";
let ulll =document.querySelector('.li3');
ulll.style.background="red";

let sd=document.getElementById('ul1').style.background="red";

document.getElementsByClassName("li3")[0].style.background="red";
document.querySelector("h1").innerText="Hello Nsu";
document.querySelector("h1").innerHTML="<h2>hello</h2>";

var link=document.querySelector("a");
// link.getAttribute("href");
// link.setAttribute("href","facebook.com");
link.setAttribute("href","www.facebook.com");
console.log(link);

var button=document.querySelector('button');



button.addEventListener("click", function (){
body.style.background="pink";

}

);