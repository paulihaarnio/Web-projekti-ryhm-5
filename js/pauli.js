
function addNumbers(){
    document.getElementById("one").innerHTML=Number(Math.floor(Math.random() * 9) + 1);
    document.getElementById("two").innerHTML=Number(Math.floor(Math.random() * 9) + 1);
}

document.getElementById("numbers").addEventListener("click", addNumbers)


function check(){
    let vastaus=Number(document.getElementById("vastaus").value)
    let eka=Number(document.getElementById("one").value)
    let toka=Number(document.getElementById("two").value)
    let summa=Number(eka+toka)
    console.log(summa)
    if(vastaus==summa){
        document.getElementById("vastausKenttä").innerText="Oikea vastaus, hienoa!"
    }
    else{
        document.getElementById("vastausKenttä").innerText="Väärä vastaus, yritä uudelleen."
    }
}

document.getElementById("button").addEventListener("click", check)

