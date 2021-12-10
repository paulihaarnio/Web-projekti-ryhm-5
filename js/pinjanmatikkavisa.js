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


let questions = [
    "1. Annalla on 50 omenaa, hän antaa niistä puolet Villelle ja vielä 10 Sannille. <br> Kuinka monta omenaa Annalla nyt on?", 
    "2. Äiti on ostanut lapsille karkkipussin. Pussissa on yhteensä 120 karkkia. <br> Kuinka monta karkkia kukin neljästä (4) lapsesta saa, jos karkit jaetaan tasan?",
    "3. Urheilukentän juoksuradan pituus on 400 metriä, kuinka pitkän matkan olet juossut, jos kierrät radan 6 kertaa?", 
    "4. Enni ostaa kaupasta lelun, joka maksaa 9 euroa, jäätelön, joka maksaa 2,50 euroa sekä tikkarin, joka maksaa 0,40 euroa. Kuinka paljon Ennin ostokset maksavat yhteensä?", 
    "5. Lotalla on lemmikkinä koira, kissa, hamsteri, käärme ja papukaija. <br> Kuinka monta jalkaa lemmikeillä on yhteensä?"
];

let allAnswers = [];
let question1Answers = [15, 20, 25, 30];
let question2Answers = [20, 30, 35, 40];
let question3Answers = ["2400 metriä", "2600 metriä", "2800 metriä", "3200 metriä"];
let question4Answers = ["11,50€", "11,70€", "11,90€", "12,00€"];
let question5Answers = [12, 13, 14, 16];
allAnswers.push(question1Answers, question2Answers, question3Answers, question4Answers, question5Answers);

let rightAnswers = ["a", "b", "a", "c", "c"];
let rightIndexes = [0, 1, 0, 2, 2]


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