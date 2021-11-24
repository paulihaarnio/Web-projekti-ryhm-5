

document.getElementById("button").addEventListener("click", check)

function check(){
    let vastaus=Number(document.getElementById("vastaus").value)
    if(vastaus===15){
        document.getElementById("vastausKenttä").innerText="Oikea vastaus, hienoa!"
    }
    else{
        document.getElementById("vastausKenttä").innerText="Väärä vastaus, yritä uudelleen."
    }
}

