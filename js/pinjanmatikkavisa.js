let quiz = document.getElementById("quiz");
let result = document.getElementById("result");
let submit = document.getElementById("submit");
let radioA = document.getElementById("aLabel");
let radioB = document.getElementById("bLabel");
let radioC = document.getElementById("cLabel");
let radioD = document.getElementById("dLabel");
let radioButtons = document.getElementsByName("radioButton");
console.log(radioButtons)

let questions = [
    "Annalla on 50 omenaa, hän antaa niistä puolet Villelle ja vielä 10 Sannille. Kuinka monta omenaa Annalla nyt on?", 
    "Äiti on ostanut lapsille karkkipussin. Pussissa on yhteensä 120 karkkia. Kuinka monta karkkia kukin neljästä (4) lapsesta saa, jos karkit jaetaan tasan?",
    "Urheilukentän juoksuradan pituus on 400 metriä, kuinka pitkän matkan olet juossut jos kierrät radan 6 kertaa?", 
    "Enni ostaa kaupasta lelun, joka maksaa 9 euroa, jäätelön, joka maksaa 2,50 euroa sekä tikkarin, joka maksaa 0,40 euroa. Kuinka paljon Ennin ostokset maksavat yhteensä?", 
    "Lotalla on lemmikkinä koira, kissa, hamsteri, käärme ja papukaija. Kuinka monta jalkaa lemmikeillä on yhteensä?"
];

let question1Answers = [15, 20, 25, 30];
let question2Answers = [20, 30, 35, 40];
let question3Answers = [1, 2, 3, 2400];
let question4Answers = [1, 2, 11.90, 4];
let question5Answers = [1, 2, 3, 14];
let allAnswers = [];
allAnswers.push(question1Answers, question2Answers, question3Answers, question4Answers, question5Answers);

let rightAnswers = [allAnswers[0][0], allAnswers[1][1], allAnswers[2][3], allAnswers[3][2], allAnswers[4][3]];

radioA.innerHTML += allAnswers[0][0];
radioB.innerHTML += allAnswers[0][1];
radioC.innerHTML += allAnswers[0][2];
radioD.innerHTML += allAnswers[0][3]
quiz.innerHTML = questions[0];


submit.addEventListener("click", function() {
    result.innerHTML = rightAnswers[0]
})

