let counter=0
document.getElementById("tasksDone").innerText=counter
let counter2=0


function addNumbers(){
    document.getElementById("one").innerHTML=Number(Math.floor(Math.random() * 25) + 1);
    document.getElementById("two").innerHTML=Number(Math.floor(Math.random() * 17) + 1);
    document.getElementById("vastaus").value=""
    document.getElementById("vastausKenttä").innerText=""
    counter=0
}

document.getElementById("numbers").addEventListener("click", addNumbers)

function check(){
    let eka=Number(document.getElementById("one").innerHTML)
    let toka=Number(document.getElementById("two").innerHTML)
    let summa=Number(eka+toka)
    let vastaus=Number(document.getElementById("vastaus").value)
   

    if(eka==0){
        document.getElementById("vastausKenttä").innerText="Paina aloita nappia"
    }else{
    if(vastaus==""){
        document.getElementById("vastausKenttä").innerText="Syötä vastaus."}
        else{
    document.getElementById("one").innerHTML=Number(Math.floor(Math.random() * 25) + 1);
    document.getElementById("two").innerHTML=Number(Math.floor(Math.random() * 17) + 1);
    document.getElementById("vastaus").value=""
    if(vastaus==summa){
        document.getElementById("vastausKenttä").innerText="Oikea vastaus, hienoa!"
        
        counter=counter+1
        counter2=counter2+1
        document.getElementById("tasksDone").innerText=counter
    }
    else{
        document.getElementById("vastausKenttä").innerText="Väärin, oikea vastaus on "+summa+"."
       
        counter=counter+1
        document.getElementById("tasksDone").innerText=counter
    }
    if(counter==5){
        document.getElementById("peli").innerHTML="Peli päättyi, sait "+counter2+"/5 tehtävää oikein."+"<br>"
        if(counter2==0){
            document.getElementById("peli").innerHTML+= "Häpeä!"+'<i class="far fa-sad-cry fa-3x"></i>'+'<i class="far fa-thumbs-down fa-3x"></i>'
        }
        if(counter2==1){
            document.getElementById("peli").innerHTML+= "Harjoittele lisää!"+'🥵'
        }
        if(counter2==2){
            document.getElementById("peli").innerHTML+= "Ihan ok"+'<i class="fas fa-meh fa-5x"></i>'
        }
        if(counter2==3){
            document.getElementById("peli").innerHTML+= "Hyvä suoritus"+'<i class="far fa-smile fa-5x"></i>'
        }
        if(counter2==4){
            document.getElementById("peli").innerHTML+= "Melkein kaikki oikein!"+'<i class="far fa-grin fa-5x"></i>'
        }
        if(counter2==5){
            document.getElementById("peli").innerHTML+= "Kaikki oikein! Hienoa"+'<i class="far fa-laugh-beam fa-5x"></i>'+'<i class="far fa-thumbs-up fa-3x"></i>'
        }
        
    }
    
}
}
}



document.getElementById("button").addEventListener("click", check)
