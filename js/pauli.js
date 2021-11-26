
function addNumbers(){
    document.getElementById("one").innerHTML=Number(Math.floor(Math.random() * 25) + 1);
    document.getElementById("two").innerHTML=Number(Math.floor(Math.random() * 17) + 1);
    document.getElementById("vastaus").value=""
    document.getElementById("vastausKenttä").innerText=""
}

document.getElementById("numbers").addEventListener("click", addNumbers)


function check(){
   
    let eka=Number(document.getElementById("one").innerHTML)
    let toka=Number(document.getElementById("two").innerHTML)
    let summa=Number(eka+toka)
    let vastaus=Number(document.getElementById("vastaus").value)
    if(vastaus==""){
        document.getElementById("vastausKenttä").innerText="Syötä vastaus."}
        else{
    if(vastaus==summa){
        document.getElementById("vastausKenttä").innerText="Oikea vastaus, hienoa!"
    }
    else{
        document.getElementById("vastausKenttä").innerText="Väärin, oikea vastaus on "+summa+"."
    }
}
}

document.getElementById("button").addEventListener("click", check)




function addNumbers_minus(){
    document.getElementById("one_minus").innerHTML=Number(Math.floor(Math.random() * 25) + 12);
    document.getElementById("two_minus").innerHTML=Number(Math.floor(Math.random() * 11) + 1);
    document.getElementById("vastaus_minus").value=""
    document.getElementById("vastausKenttä_minus").innerText=""
}

document.getElementById("numbers_minus").addEventListener("click", addNumbers_minus)


function check_minus(){
   
    let eka=Number(document.getElementById("one_minus").innerHTML)
    let toka=Number(document.getElementById("two_minus").innerHTML)
    let summa=Number(eka-toka)
    let vastaus=Number(document.getElementById("vastaus_minus").value)
    if(vastaus==""){
        document.getElementById("vastausKenttä_minus").innerText="Syötä vastaus."}
        else{
    if(vastaus==summa){
        document.getElementById("vastausKenttä_minus").innerText="Oikea vastaus, hienoa!"
    }
    else{
        document.getElementById("vastausKenttä_minus").innerText="Väärin, oikea vastaus on "+summa+"."
    }
}
}

document.getElementById("button_minus").addEventListener("click", check_minus)

