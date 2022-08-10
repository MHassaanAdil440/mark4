var random1 = Math.floor(Math.random()*6)+1;
var img1scr = "images/dice"+random1+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , img1scr);

var random2 = Math.floor(Math.random()*6)+1;
var img2scr = "images/dice"+random2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , img2scr);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 WINS";
}else if(random2 > random1){
    document.querySelector("h1").innerHTML = "Player 2 WINS";
}else{
    document.querySelector("h1").innerHTML = "DRAW";
}
