const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const questions = [
    {
        question: "Annalla on 50 omenaa, hän antaa niistä puolet Villelle ja vielä 10 Sannille. Kuinka monta omenaa Annalla nyt on?" ,
        answers: {
            a: "15",
            b: "20", 
            c: "25", 
            d: "30"
        },
        correct: "a"
    },

    {
        question: "Äiti on ostanut lapsille karkkipussin. Pussissa on yhteensä 120 karkkia. Kuinka monta karkkia kukin neljästä (4) lapsesta saa, jos karkit jaetaan tasan?" ,
        answers: {
            a: "20",
            b: "30", 
            c: "35", 
            d: "40"
        },
        correct: "a"
    }
    
]


function showQuiz() {
    const html = [];

    questions.forEach( (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers) {
            answers.push(
            `<label> 
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} : ${currentQuestion.answers[letter]}
            </label>`
            );
        }

        html.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        )
    });

    quiz.innerHTML = html.join("");
} 

function showResult() {

}

showQuiz();
submit.addEventListener("click", showResult);




