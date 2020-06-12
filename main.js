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
