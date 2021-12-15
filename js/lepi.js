//luo eventlistener joka merkkaa mitä nappia on painettu ja palaute sivulla kerrotaan mikä olisi ollut oikea
//appendchildin avulla saa lisättyä palaute sivulle mitkä meni väärin ja mitkä oikein. niihin style red green yms.
//eri kuva/gifi lopputuloksen mukaan.

let quiz = document.getElementById("question");
let info = document.getElementById('visaInfo');
let score = 0;
console.log(score);
let rightWrong = document.getElementById('rightWrong');
let wa1 = document.getElementById('wAns1')
let wa2 = document.getElementById('wAns2')
let wa3 = document.getElementById('wAns3')
let wa4 = document.getElementById('wAns4')
let wa5 = document.getElementById('wAns5')

//vastausbuttonit
let b1 = document.getElementById('vastausbutton1')
let b2 = document.getElementById('vastausbutton2')
let b3 = document.getElementById('vastausbutton3')
let b4 = document.getElementById('vastausbutton4')
let b5 = document.getElementById('vastausbutton5')
let b6 = document.getElementById('vastausbutton6')
let b7 = document.getElementById('vastausbutton7')
let b8 = document.getElementById('vastausbutton8')
let b9 = document.getElementById('vastausbutton9')
let b10 = document.getElementById('vastausbutton10')
let b11 = document.getElementById('vastausbutton11')
let b12 = document.getElementById('vastausbutton12')
let b13 = document.getElementById('vastausbutton13')
let b14 = document.getElementById('vastausbutton14')
let b15 = document.getElementById('vastausbutton15')
let b16 = document.getElementById('vastausbutton16')
let b17 = document.getElementById('vastausbutton17')
let b18 = document.getElementById('vastausbutton18')
let b19 = document.getElementById('vastausbutton19')
let b20 = document.getElementById('vastausbutton20')


function Correct() {
    rightWrong.innerHTML = "<span style='background-color: green;'>Oikea vastaus! Siirry seuraavaan kysymykseen.</span>";
    console.log(score)
    score = score + 1
    document.getElementById('palauteScore').innerHTML = "Vastasit oikein yhteensä " + score + " kysymykseen";
    btnLock();
    return;

}
function correct() {
    rightWrong.innerHTML = "<span style='background-color: red;'>Väärin meni, siirry seuraavaan kysymykseen.</span>";
    console.log(score)
    document.getElementById('palauteScore').innerHTML = "Vastasit oikein yhteensä " + score + " kysymykseen";
    btnLock();
    return;
}

//visan aloitusnappi
document.getElementById("start").onclick = function () {
    i = 1;
    info.innerHTML = "";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("vinfo").style.display = "none";
}


//seuraava kysymysnappi, nappia painettaessa edellinen kysymys menee piiloon ja uusi tulee esiin.

document.getElementById('next1').onclick = function () {
    rightWrong.innerHTML = "";
    document.getElementById('kysymys1').style.display = "none";
    document.getElementById('kysymys2').style.display = "block";
btnUnLock()
}
document.getElementById('next2').onclick = function () {
    rightWrong.innerHTML = "";
    document.getElementById('kysymys2').style.display = "none";
    document.getElementById('kysymys3').style.display = "block";
    btnUnLock()
}
document.getElementById('next3').onclick = function () {
    rightWrong.innerHTML = "";
    document.getElementById('kysymys3').style.display = "none";
    document.getElementById('kysymys4').style.display = "block";
    btnUnLock()
}
document.getElementById('next4').onclick = function () {
    rightWrong.innerHTML = "";
    document.getElementById('kysymys4').style.display = "none";
    document.getElementById('kysymys5').style.display = "block";
    btnUnLock()
}

document.getElementById('next5').onclick = function () {
    rightWrong.innerHTML = "";
    document.getElementById('kysymys5').style.display = "none";
    document.getElementById('palaute').style.display = "block";
    btnUnLock()
}



//väärät vastaukset

//Beatles
document.getElementById("vastausbutton1").addEventListener("click", function () { wa1.style.display = "block"; });
document.getElementById("vastausbutton2").addEventListener("click", function () { wa1.style.display = "block"; });
document.getElementById("vastausbutton3").addEventListener("click", function () { wa1.style.display = "block"; });


//sibelius
document.getElementById("vastausbutton5").addEventListener("click", function () { wa2.style.display = "block"; })
document.getElementById("vastausbutton6").addEventListener("click", function () { wa2.style.display = "block"; })
document.getElementById("vastausbutton7").addEventListener("click", function () { wa2.style.display = "block"; })

//viulu
document.getElementById("vastausbutton10").addEventListener("click", function () { wa3.style.display = "block"; })
document.getElementById("vastausbutton11").addEventListener("click", function () { wa3.style.display = "block"; })
document.getElementById("vastausbutton12").addEventListener("click", function () { wa3.style.display = "block"; })

//tsaikoski
document.getElementById("vastausbutton13").addEventListener("click", function () { wa4.style.display = "block"; })
document.getElementById("vastausbutton14").addEventListener("click", function () { wa4.style.display = "block"; })
document.getElementById("vastausbutton16").addEventListener("click", function () { wa4.style.display = "block"; })

//MJ
document.getElementById("vastausbutton17").addEventListener("click", function () { wa5.style.display = "block"; })
document.getElementById("vastausbutton18").addEventListener("click", function () { wa5.style.display = "block"; })
document.getElementById("vastausbutton20").addEventListener("click", function () { wa5.style.display = "block"; })

function btnLock() {
    b1.setAttribute("disabled", "")
    b2.setAttribute("disabled", "")
    b3.setAttribute("disabled", "")
    b4.setAttribute("disabled", "")
    b5.setAttribute("disabled", "")
    b6.setAttribute("disabled", "")
    b7.setAttribute("disabled", "")
    b8.setAttribute("disabled", "")
    b9.setAttribute("disabled", "")
    b10.setAttribute("disabled", "")
    b11.setAttribute("disabled", "")
    b12.setAttribute("disabled", "")
    b13.setAttribute("disabled", "")
    b14.setAttribute("disabled", "")
    b15.setAttribute("disabled", "")
    b16.setAttribute("disabled", "")
    b17.setAttribute("disabled", "")
    b18.setAttribute("disabled", "")
    b19.setAttribute("disabled", "")
    b20.setAttribute("disabled", "")
}
function btnUnLock() {
    b1.removeAttribute("disabled", "")
    b2.removeAttribute("disabled", "")
    b3.removeAttribute("disabled", "")
    b4.removeAttribute("disabled", "")
    b5.removeAttribute("disabled", "")
    b6.removeAttribute("disabled", "")
    b7.removeAttribute("disabled", "")
    b8.removeAttribute("disabled", "")
    b9.removeAttribute("disabled", "")
    b10.removeAttribute("disabled", "")
    b11.removeAttribute("disabled", "")
    b12.removeAttribute("disabled", "")
    b13.removeAttribute("disabled", "")
    b14.removeAttribute("disabled", "")
    b15.removeAttribute("disabled", "")
    b16.removeAttribute("disabled", "")
    b17.removeAttribute("disabled", "")
    b18.removeAttribute("disabled", "")
    b19.removeAttribute("disabled", "")
    b20.removeAttribute("disabled", "")
}