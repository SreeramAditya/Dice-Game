var randomNumber1=Math.floor(Math.random()*6)+1;
var d1="images/dice"+randomNumber1+".png";

var randomNumber2=Math.floor(Math.random()*6)+1;
var d2="images/dice"+randomNumber2+".png";


const dice1=document.querySelector(".img1");
dice1.setAttribute("src",d1);
const dice2=document.querySelector(".img2");
dice2.setAttribute("src",d2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}

else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}

else{
    document.querySelector("h1").innerHTML="Player2 Wins";
}