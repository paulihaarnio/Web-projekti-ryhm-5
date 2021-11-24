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
 * 
 */

class Question {
    question = "";
    img = "";
    answers = [];
    result = false;

    constructor(q, img) {
        question = q;
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
        question = q;
    }

    setImg(url) {
        img = url;
    }
    
    setAnswers(array) {
        answers = array;
    }

    setResult(boolean) {
        result = boolean;
    }
}

//kysymys-objektit

document.querySelector("#submit").addEventListener("click", submitAnswer);

function submitAnswer() {
    document.getElementById("result").textContent = "vastattu";
}

//tulos sivun printtaus