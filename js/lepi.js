let quiz = document.getElementById("question");
let info = document.getElementById('visaInfo');
let score=0;
console.log (score);
let rightWrong = document.getElementById('rightWrong');


function Correct(){
    rightWrong.innerHTML = 'Oikea vastaus, hienoa! Siirry seuraavaan kysymykseen'
    score = score + 1
    console.log(score)
    document.getElementById('score').innerHTML = "Pisteet: " + score
    return;
    
    }
function correct(){
    rightWrong.innerHTML = 'Väärin meni, siirry seuraavaan kysymykseen'
    score = score - 1
    console.log(score)
    document.getElementById('score').innerHTML = "Pisteet: " + score
    return;
}






//buttonia painettaessa tyhjään diviin innerhtml oikea vastaus, ja eventlisteneriin 'score' +1
//seuraavaan kisaan siirtyessä edelliset kysymykset ja vastaukset pilotetaan ja tuodaan uudet tilalle.
//väärien vastausten eventlistener vähentää yhden pisteen counterista ja oikeiden lisää

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
//seuraava kysymysnappi
document.getElementById('next1').onclick = function(){
    rightWrong.innerHTML = "";
    document.getElementById('kysymys1').style.display = "none";
    document.getElementById('kysymys2').style.display = "block";
    
}
document.getElementById('next2').onclick = function(){
    rightWrong.innerHTML = "";
    document.getElementById('kysymys2').style.display = "none";
    document.getElementById('kysymys3').style.display = "block";
    
}
document.getElementById('next3').onclick = function(){
    rightWrong.innerHTML = "";
    document.getElementById('kysymys3').style.display = "none";
    document.getElementById('kysymys4').style.display = "block";
    
}
document.getElementById('next4').onclick = function(){
    rightWrong.innerHTML = "";
    document.getElementById('kysymys4').style.display = "none";
    document.getElementById('kysymys5').style.display = "block";
    
}

document.getElementById('next5').onclick = function(){
    rightWrong.innerHTML = "";
    document.getElementById('kysymys5').style.display = "none";
    document.getElementById('kysymys6').style.display = "block";
    
}