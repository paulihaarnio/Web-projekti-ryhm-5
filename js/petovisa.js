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
    answers = []; //the correct answer is always first in this array
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

    
    printQuestion() {
        document.getElementById("question").textContent = this.question;
        document.getElementById("questionImg").src = this.img;

        let div = document.getElementById("answers");
        let answers = div.querySelectorAll("label");

        for(let i=0; i<answers.length; i++) {
            answers[i].textContent = this.answers[i];
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

questions[1] = new Question("Mikä väittämistä EI OLE totta?", "#");
let answers1 = [];
answers1[0] = "Karhut ovat laumaeläimiä";
answers1[1] = "Karhut nukkuvat talviunta";
answers1[2] = "Karhut ovat kaikkiruokaisia";
answers1[3] = "Karhu on Suomen suurin petoeläin";
questions[1].setAnswers(answers1);

questions[2] = new Question("Mikä petoeläin on kuvassa", "../kuvat/kärppä.jpg");
let answers2 = [];
answers2[0] = "Kärppä";
answers2[1] = "Lumikko";
answers2[2] = "Mäyrä";
answers2[3] = "Ilves";
questions[2].setAnswers(answers2);

questions[3] = new Question("Minkä petoeläimen jäljet ovat kuvassa?", "../kuvat/kettu.jpg");
let answers3 = [];
answers3[0] = "Kettu";
answers3[1] = "Saukko";
answers3[2] = "Susi";
answers3[3] = "Ilves";
questions[3].setAnswers(answers3);

questions[4] = new Question("Miksi ilveksellä on leveät tassut?", "#");
let answers4 = [];
answers4[0] = "Ne helpottavat lumen päällä kävelyä";
answers4[1] = "Niillä on helpompi metsästää";
answers4[2] = "Paksujen kynsien vuoksi";
answers4[3] = "Ne helpottavat puuhun kiipeämistä";
questions[4].setAnswers(answers4);

document.querySelector("#submit").addEventListener("click", submitAnswer);
document.querySelector("#next").addEventListener("click", nextQuestion);

questions[0].printQuestion();

function submitAnswer() {
    document.getElementById("result").textContent = "vastattu";
}

function nextQuestion() {
    printedQuestion++;
    questions[printedQuestion].printQuestion();
}

//tulos sivun printtaus