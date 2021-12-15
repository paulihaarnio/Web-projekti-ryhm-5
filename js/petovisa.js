let printedQuestion = 0;

class Question {
    question = "";
    img = "";
    answers = [];
    correntResult = false;
    correctAnswer = "";
    explanation = "";

    constructor(q, img) {
        this.question = q;
        this.img = img;
    }

    getQuestion() {
        return this.question;
    }

    getImg() {
        return this.img;
    }

    getAnswers() {
        return this.answers;
    }

    getCorrectResult() {
        return this.result;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }

    getExplanation() {
        return this.explanation;
    }

    setQuestion(q) {
        this.question = q;
    }

    setImg(url) {
        this.img = url;
    }
    
    setAnswers(array) {
        this.answers = array;
    }

    setCorrectResult(boolean) {
        this.result = boolean;
    }

    setCorrectAnswer(string) {
        this.correctAnswer = string;
    }

    setExplanation(string) {
        this.explanation = string;
    }
    
    printQuestion() {
        let submitButton = document.getElementById("submit");
        let nextButton = document.getElementById("next");

        submitButton.removeAttribute("disabled", "");
        nextButton.setAttribute("disabled", "");

        document.getElementById("result").textContent = "";

        document.getElementById("question").textContent = this.question;
        document.getElementById("questionImg").src = this.img;

        let div = document.getElementById("answers");
        let labels = div.querySelectorAll("label");

        let shuffeledAnswers = this.answers;

        shuffeledAnswers.sort(() => Math.random() - 0.5); //https://javascript.info/task/shuffle

        for(let i=0; i<labels.length; i++) {

            labels[i].textContent = shuffeledAnswers[i];

            let input = document.getElementById("answer" + (i+1));

            if(shuffeledAnswers[i] == this.correctAnswer) {
                input.classList.add("correct");
            }else {
                input.classList.remove("correct");
                input.classList.add("incorrect");
            }
        }
    }

    printCorrectAnswer() {
        let p = document.createElement("p");

        p.textContent = this.question + "<br>Oikea vastaus on: " + this.correctAnswer;

        return p;
    }
}

let questions = [];

questions[0] = new Question("Mikä petoeläin on kuvassa?", "../kuvat/ahma.jpg");
let answers0 = [];
answers0[0] = "Ahma";
answers0[1] = "Supikoira";
answers0[2] = "Karhu";
answers0[3] = "Susi";
questions[0].setAnswers(answers0);
questions[0].setCorrectAnswer("Ahma");
questions[0].setExplanation("Ahma on Suomen suurin näätäeläin, ja sillä on leveät ja lyhyet raajat. Ahman raajat ja kuono ovat mustat");

questions[1] = new Question("Mikä väittämistä EI OLE totta?", "#");
let answers1 = [];
answers1[0] = "Karhut ovat laumaeläimiä";
answers1[1] = "Karhut nukkuvat talviunta";
answers1[2] = "Karhut ovat kaikkiruokaisia";
answers1[3] = "Karhu on Suomen suurin petoeläin";
questions[1].setAnswers(answers1);
questions[1].setCorrectAnswer("Karhut ovat laumaeläimiä");
questions[1].setExplanation("Karhut ovat yksineläjiä, ne eivät siis kulje laumassa");

questions[2] = new Question("Mikä petoeläin on kuvassa?", "../kuvat/kärppä.jpg");
let answers2 = [];
answers2[0] = "Kärppä";
answers2[1] = "Lumikko";
answers2[2] = "Mäyrä";
answers2[3] = "Ilves";
questions[2].setAnswers(answers2);
questions[2].setCorrectAnswer("Kärppä");
questions[2].setExplanation("Kärpän voi tunnistaa sen mustasta hännänpäästä");

questions[3] = new Question("Minkä petoeläimen jäljet ovat kuvassa?", "../kuvat/kettu.jpg");
let answers3 = [];
answers3[0] = "Kettu";
answers3[1] = "Saukko";
answers3[2] = "Susi";
answers3[3] = "Ilves";
questions[3].setAnswers(answers3);
questions[3].setCorrectAnswer("Kettu");
questions[3].setExplanation("Ketun jäljet muistuttavat helminauhaa sen kulkiessa nopeasti");

questions[4] = new Question("Miksi ilveksellä on leveät tassut?", "#");
let answers4 = [];
answers4[0] = "Ne helpottavat lumen päällä kävelyä";
answers4[1] = "Niillä on helpompi metsästää";
answers4[2] = "Paksujen kynsien vuoksi";
answers4[3] = "Ne helpottavat puuhun kiipeämistä";
questions[4].setAnswers(answers4);
questions[4].setCorrectAnswer("Ne helpottavat lumen päällä kävelyä");
questions[4].setExplanation("Ilveksen paino jakautuu leveällä tassulla laajemmalle alueelle, jolloin lumi ei upota sen tassun alla yhtä herkästi");

document.querySelector("#submit").addEventListener("click", submitAnswer);
document.querySelector("#next").addEventListener("click", nextQuestion);

questions[0].printQuestion();


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function submitAnswer() {
    let answer = document.querySelector("input[name='answer']:checked");

    if(answer.classList.contains("correct")) {
        let span = document.getElementById("result");
        span.innerHTML = "Oikein!";
        span.setAttribute("style", "color: green;");
        questions[printedQuestion].setCorrectResult(true);
    }else {
        let span = document.getElementById("result");
        span.innerHTML = "Väärin";
        span.setAttribute("style", "color: red;");
        questions[printedQuestion].setCorrectResult(false);
    }

    let submitButton = document.getElementById("submit");
    let nextButton = document.getElementById("next");

    submitButton.setAttribute("disabled", "");
    nextButton.removeAttribute("disabled", "");

    let progressbar = document.getElementById("progressbar");
    let progressValue = printedQuestion + 1;

    progressbar.setAttribute("aria-valuenow", progressValue);
    progressbar.innerHTML = progressValue;
    
    switch(progressValue) {
        case 1:
            progressbar.setAttribute("style", "width: 20%; text-align: right;");
            break;
        case 2:
            progressbar.setAttribute("style", "width: 40%; text-align: right;")
            break;
        case 3:
            progressbar.setAttribute("style", "width: 60%; text-align: right;");
            break;
        case 4:
            progressbar.setAttribute("style", "width: 80%; text-align: right;");
            break;
        case 5:
            progressbar.setAttribute("style", "width: 100%; text-align: right;");
            break;
        default:
            progressbar.setAttribute("style", "width: 0; text-align: right;");
    }
}

function nextQuestion() {
    if(printedQuestion == 4) {
        printResults();
    }else {
        printedQuestion++;
        questions[printedQuestion].printQuestion();
    }
    
}

function printResults() {

    let div = document.getElementById("quiz");

    div.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.textContent = "Visa on ohi"

    let h1 = document.createElement("h1");
    h1.classList.add("result");

    let correct = 0;
    let all = 0;
    questions.forEach(question => {
        all++;

        let result = question.getCorrectResult();
        if(result == true) {
            correct++;
        }
    });

    h1.textContent = correct + "/" + all;

    let h22 = document.createElement("h2");
    h22.textContent = "vastausta oikein";

    let button = document.createElement("button");
    button.textContent = "Yritä uudelleen";
    button.addEventListener("click", () => location.reload());
    button.classList.add("btn", "btn-dark");

    div.append(h2, h1, h22, button);

    let container = document.querySelector(".container");

    let row = document.createElement("div");
    row.classList.add("row");

    let col = document.createElement("div");
    col.classList.add("col");

    let header = document.createElement("h1");
    header.textContent = "Vastausten erittely";
    header.setAttribute("style", "margin-top: 50px;")

    col.appendChild(header);

    for(let i=0; i<questions.length; i++) {

        let p = document.createElement("p");
        p.innerHTML = questions[i].getQuestion() + "<br>";
        
        let span = document.createElement("span");
        let correctResult = questions[i].getCorrectResult();
        
        if(correctResult) {
            span.textContent = "Vastasit oikein";
            span.style.color = "green";
        }else {
            span.textContent = "Vastasit väärin";
            span.style.color = "red";
        }

        p.appendChild(span);
        p.innerHTML += "<br>Oikea vastaus: " + questions[i].getCorrectAnswer() + "<br>" + questions[i].getExplanation();

        col.appendChild(p);
    }
    row.appendChild(col);
    container.appendChild(row);
}