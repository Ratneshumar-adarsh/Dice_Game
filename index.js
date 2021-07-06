var random_number1=Math.floor(Math.random()*6)+1;

var random_image1="dice"+random_number1+".png";

document.getElementsByClassName("img1")[0].setAttribute("src",random_image1);

var random_number2=Math.floor(Math.random()*6)+1;
var random_image_source2="dice"+random_number2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",random_image_source2);


if (random_number1>random_number2){
      
      document.querySelector("h1").innerHTML="💯1️⃣Player1 wins";
}
else if(random_number1<random_number2){
      
      document.querySelector("h1").innerHTML="💯2️⃣Player2 wins";
}
else{
      document.querySelector("h1").innerHTML="😏Draw!";
}