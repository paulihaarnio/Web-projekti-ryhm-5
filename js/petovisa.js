/**
 * Question-class jossa:
 * kysymys
 * kuva
 * vastaukset
 * tulos true or false
 * 
 * tarkista vastaus
 * 
 * printtaa kysymys
 * arvo vastausten järjestys
 */
let printedQuestion = 0;

class Question {
    question = "";
    img = "";
    answers = [];
    correctAnswer = "";
    result = false;

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

    getResult() {
        return this.result;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
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

    setResult(boolean) {
        this.result = boolean;
    }

    setCorrectAnswer(string) {
        this.correctAnswer = string;
    }

    
    printQuestion() {
        document.getElementById("question").textContent = this.question;
        document.getElementById("questionImg").src = this.img;

        let div = document.getElementById("answers");
        let labels = div.querySelectorAll("label");

        let shuffeledAnswers = this.answers;

        shuffeledAnswers.sort(() => Math.random() - 0.5); //https://javascript.info/task/shuffle

        for(let i=0; i<labels.length; i++) {

            labels[i].textContent = shuffeledAnswers[i];

            if(shuffeledAnswers[i] == this.correctAnswer) {
                let input = document.getElementById("answer" + (i+1));
                input.classList.add("correct");
            }
        }
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

questions[1] = new Question("Mikä väittämistä EI OLE totta?", "#");
let answers1 = [];
answers1[0] = "Karhut ovat laumaeläimiä";
answers1[1] = "Karhut nukkuvat talviunta";
answers1[2] = "Karhut ovat kaikkiruokaisia";
answers1[3] = "Karhu on Suomen suurin petoeläin";
questions[1].setAnswers(answers1);
questions[1].setCorrectAnswer("Karhut ovat laumaeläimiä");

questions[2] = new Question("Mikä petoeläin on kuvassa", "../kuvat/kärppä.jpg");
let answers2 = [];
answers2[0] = "Kärppä";
answers2[1] = "Lumikko";
answers2[2] = "Mäyrä";
answers2[3] = "Ilves";
questions[2].setAnswers(answers2);
questions[2].setCorrectAnswer("Kärppä");

questions[3] = new Question("Minkä petoeläimen jäljet ovat kuvassa?", "../kuvat/kettu.jpg");
let answers3 = [];
answers3[0] = "Kettu";
answers3[1] = "Saukko";
answers3[2] = "Susi";
answers3[3] = "Ilves";
questions[3].setAnswers(answers3);
questions[3].setCorrectAnswer("Kettu");

questions[4] = new Question("Miksi ilveksellä on leveät tassut?", "#");
let answers4 = [];
answers4[0] = "Ne helpottavat lumen päällä kävelyä";
answers4[1] = "Niillä on helpompi metsästää";
answers4[2] = "Paksujen kynsien vuoksi";
answers4[3] = "Ne helpottavat puuhun kiipeämistä";
questions[4].setAnswers(answers4);
questions[4].setCorrectAnswer("Ne helpottavat lumen päällä kävelyä");

document.querySelector("#submit").addEventListener("click", submitAnswer);
document.querySelector("#next").addEventListener("click", nextQuestion);

questions[0].printQuestion();


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function submitAnswer() {
    let answer = document.querySelector("input[name='answer']:checked");

    if(answer.classList.contains("correct")) {
        document.getElementById("result").innerHTML = "Oikein!";
    }else {
        document.getElementById("result").innerHTML = "Väärin";
    }
}

function nextQuestion() {
    printedQuestion++;
    questions[printedQuestion].printQuestion();
}

//tulos sivun printtaus