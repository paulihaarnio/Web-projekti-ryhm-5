// Pinja Åman

let quiz = document.getElementById("question");
let result = document.getElementById("result");
let aAnswer = document.getElementById("aAns");
let bAnswer = document.getElementById("bAns");
let cAnswer = document.getElementById("cAns");
let dAnswer = document.getElementById("dAns");
let radios = document.getElementsByName("radioButton");
let submitButton = document.querySelector("#submit")
let i = 1;
let answeredQuestions = 0;
let correctAnswers = 0;
let answered = false;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };
let number1 = getRndInteger(5, 10)*10;
let number2 = getRndInteger(3, 10)*10*4;
let number3 = getRndInteger(2, 6);
let number4 = getRndInteger(1, 3);
let answer1 = (number1 / 2) - 10;
let answer2 = (number2 / 4);
let answer3 = (number3) * 400;
let answer4 = (number4*3 + number4 + 0.50 + number4/10);

let questions = [
    "1. Annalla on " + number1 + " omenaa, hän antaa niistä puolet Villelle ja vielä 10 Sannille. <br> Kuinka monta omenaa Annalla nyt on?", 
    "2. Äiti on ostanut lapsille karkkipussin. Pussissa on yhteensä " + number2 +" karkkia. <br> Kuinka monta karkkia kukin neljästä (4) lapsesta saa, jos karkit jaetaan tasan?",
    "3. Urheilukentän juoksuradan pituus on 400 metriä, kuinka pitkän matkan olet juossut, jos kierrät radan " + number3 + " kertaa?", 
    "4. Enni ostaa kaupasta lelun, joka maksaa " + number4*3 + " euroa, jäätelön, joka maksaa " + number4 +".50 euroa sekä tikkarin, joka maksaa " + Number(number4/10).toFixed(2) + " euroa. Kuinka paljon Ennin ostokset maksavat yhteensä?", 
    "5. Lotalla on lemmikkinä koira, kissa, hamsteri, käärme ja papukaija. <br> Kuinka monta jalkaa lemmikeillä on yhteensä?"
];

let allAnswers = [];
let question1Answers = [answer1, answer1 + 10, answer1 - 5, answer1 + 5];
let question2Answers = [answer2 + 10, answer2, answer2 - 10, answer2 + 5];
let question3Answers = [answer3 + 100 + " metriä", answer3 + 200 + " metriä", answer3 - 100 + " metriä", answer3 + " metriä"];
let question4Answers = [Number(answer4 + 0.5).toFixed(2) + "€", Number(answer4 + 0.2).toFixed(2) + "€", Number(answer4).toFixed(2) + "€", Number(answer4 - 0.5).toFixed(2) + "€"];
let question5Answers = [12, 13, 14, 16];
allAnswers.push(question1Answers, question2Answers, question3Answers, question4Answers, question5Answers);

let rightAnswers = ["a", "b", "d", "c", "c"];
let rightIndexes = [0, 1, 3, 2, 2]


//visan aloituspainike, ensimmäinen tehtävä tulee esiin kun nappia painaa. Vaihtuu kokeile uudestaan painikkeeksi visan päätteeksi
document.getElementById("start").onclick = function() {
    document.getElementById("allQuestions").innerHTML = 5;
    document.getElementById("answeredQuestions").innerHTML = 0;
    correctAnswers = 0;
    answeredQuestions = 0;
    document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow', 0);
    document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+ 0 +'%');
    
    i = 1;
    document.getElementById("allDone").innerHTML = "";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("start").style.display = "none";
    quiz.innerHTML = questions[0];
    aAnswer.innerHTML = allAnswers[0][0];
    bAnswer.innerHTML = allAnswers[0][1];
    cAnswer.innerHTML = allAnswers[0][2];
    dAnswer.innerHTML = allAnswers[0][3];

    document.getElementById("correct").innerHTML = 0;
}

/* tehtävän tarkistus "tarkista"-nappia painettaessa. Muuttujaan
 answered asetetaan arvo true kun nappia on painettu */

document.getElementById("submit").addEventListener("click", function () {
    const rbs = document.querySelectorAll('input[name="radioButton"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        } 
    }
    
    if(rightAnswers[i - 1] == selectedValue) {
        result.innerHTML = "Oikein meni!";
        correctAnswers++;
        answeredQuestions++;
        document.querySelector("#quizContainer").style.borderColor = "#86FA6A";
        
        
    } else {
        result.innerHTML = "Väärin meni, oikea vastaus on " + allAnswers[i - 1][rightIndexes[i - 1]] + ".";
        answeredQuestions++;
        document.querySelector("#quizContainer").style.borderColor = "#F64040";
        
    }

    answered = true;
    document.getElementById("correct").innerHTML = correctAnswers;
    document.getElementById("answeredQuestions").innerHTML = answeredQuestions;
    document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow', answeredQuestions*20);
    document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number(answeredQuestions*20)+'%');

    if(answered) {
        submitButton.disabled = true;
    }
    
    
});


/*seuraava kysymys painike. Painiketta pystyy painamaan vasta kun 
tehtävä on ensin tarkistettu */
document.getElementById("nextQuestion").addEventListener("click", function() {
    result.innerHTML = "";
    submitButton.disabled = false;
    document.querySelector("#quizContainer").style.borderColor = "#888888";
    

   for(let i = 0; i < radios.length; i++) {
       if(radios[i].checked) {
           radios[i].checked = false;
       }
   }

    if(i < 5 && answered == true) {
        aAnswer.innerHTML = "";
        bAnswer.innerHTML = "";
        cAnswer.innerHTML = "";
        dAnswer.innerHTML = "";
        quiz.innerHTML = questions[i]
        aAnswer.innerHTML += allAnswers[i][0];
        bAnswer.innerHTML += allAnswers[i][1];
        cAnswer.innerHTML += allAnswers[i][2];
        dAnswer.innerHTML += allAnswers[i][3];
        i = i + 1;
        
    } else if(i == 5 && answered == true) {
        document.getElementById("quizContainer").style.display = "none";

        if(correctAnswers == 5) {
            document.getElementById("allDone").innerHTML = "Hienoa kaikki tehtävät tehty! Sait kaikki 5 tehtävää oikein!";
        } else {
            document.getElementById("allDone").innerHTML = "Kaikki tehtävät tehty! Sait oikein " + correctAnswers + " tehtävää viidestä.";
        }
        document.getElementById("start").innerHTML = "Kokeile uudestaan"
        document.getElementById("start").style.display = "block";
        
    }
    answered = false;
})

