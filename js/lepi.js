let quiz = document.getElementById("question");
let aAnswer = document.getElementById("aAns");
let bAnswer = document.getElementById("bAns");
let cAnswer = document.getElementById("cAns");
let dAnswer = document.getElementById("dAns");
let info = document.getElementById('visaInfo');
let radioButton = document.getElementsByName('radioButton');



document.getElementById('oikeaButton').onclick = function(){
 alert('Oikea vastaus hienoa.😎👍')
}
document.getElementById('vääräButton1').onclick = function(){
    alert('Väärä vastaus. 👎🥶')
   }
   document.getElementById('vääräButton2').onclick = function(){
    alert('Väärä vastaus. 👎🥶')
   }
   document.getElementById('vääräButton3').onclick = function(){
    alert('Väärä vastaus. 👎🥶')
   }

//visan aloitusnappi
document.getElementById("start").onclick = function(){ 
i = 1;
info.innerHTML ="";
document.getElementById("quizContainer").style.display = "block";
document.getElementById("start").style.display="none";
/* aAnswer.innerHTML += allAnswers[0][0];
bAnswer.innerHTML += allAnswers[0][1];
cAnswer.innerHTML += allAnswers[0][2];
dAnswer.innerHTML += allAnswers[0][3]; */
}