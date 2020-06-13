let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let reset =document.getElementById("reset");
let p1Score=document.getElementById("playerOneScore");
let p2Score=document.getElementById("playerTwoScore");
let pScore1=0;
let pScore2=0;
let number=document.getElementById("number");
let gameOver=false;
let youwant=document.getElementById("youWant");
let  num = 5;

console.log(num);

p1.addEventListener("click", function () {
    if(!gameOver) {
        pScore1++;

        if(pScore1===num){

gameOver=true;
        }
        p1Score.innerText=pScore1;
    }
});
p2.addEventListener("click", function () {

    if(!gameOver) {


        pScore2++;

        if (pScore2 === num) {
            gameOver = true;
        }
        p2Score.innerText = pScore2;
    }
})

reset.addEventListener("click", function () {
  pScore1=0;
  pScore2=0;
    p1Score.innerText="0";
    p2Score.innerText="0";
    gameOver=false;


})

number.addEventListener("change",function () {
    num=parseInt(number.value);

    youwant.innerText=num;
})