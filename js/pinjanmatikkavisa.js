let quiz = document.getElementById("question");
let result = document.getElementById("result");
let aAnswer = document.getElementById("aAns");
let bAnswer = document.getElementById("bAns");
let cAnswer = document.getElementById("cAns");
let dAnswer = document.getElementById("dAns");
let radioButtons = document.getElementsByName("radioButton");
let i = 1;
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
let question3Answers = [1, 2, 3, 2400];
let question4Answers = [1, 2, 11.90, 4];
let question5Answers = [1, 2, 3, 14];
allAnswers.push(question1Answers, question2Answers, question3Answers, question4Answers, question5Answers);

let rightAnswers = ["a", "b", "d", "c", "d"];


/* tehtävän tarkistus "tarkista"-nappia painettaessa. Muutujaan
 answered asetetaan arvo true kun nappia on painettu */
//KORJAA TÄMÄ KOHTA NIIN ETTEI VASTAUSTA VOI VAIHTAA ENÄÄ TARKISTUKSEN JÄLKEEN
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
        result.innerHTML = "Oikein meni";
        correctAnswers++;
        
        
    } else {
        result.innerHTML = "Väärin meni"
        
    }

    answered = true;
    document.getElementById("correct").innerHTML = correctAnswers;
    
});


/*seuraava kysymys painike. Painiketta pystyy painamaan vasta kun 
tehtävä on ensin tarkistettu */
document.getElementById("nextQuestion").addEventListener("click", function() {
   let radios = document.getElementsByName("radioButton");
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
        
        console.log(i);
    } else if(i == 5 && answered == true) {
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("allDone").innerHTML = "Hienoa kaikki tehtävät tehty!";
        document.getElementById("start").innerHTML = "Kokeile uudestaan"
        document.getElementById("start").style.display = "block";
        
    }
    answered = false;
})

//visan aloituspainike, ensimmäinen tehtävä tulee esiin kun nappia painaa
document.getElementById("start").onclick = function() {
    i = 1;
    document.getElementById("allDone").innerHTML = "";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("start").style.display = "none";
    quiz.innerHTML = questions[0];
    aAnswer.innerHTML += allAnswers[0][0];
    bAnswer.innerHTML += allAnswers[0][1];
    cAnswer.innerHTML += allAnswers[0][2];
    dAnswer.innerHTML += allAnswers[0][3];
}