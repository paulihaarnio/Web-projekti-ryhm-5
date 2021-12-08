let counter=0
document.getElementById("tasksDone").innerText=counter
let counter2=0


function addNumbers(){
    document.getElementById("one").innerHTML=Number(Math.floor(Math.random() * 40) + 1);
    document.getElementById("two").innerHTML=Number(Math.floor(Math.random() * 14) + 1);
    document.getElementById("vastaus").value=""
    document.getElementById("vastausKenttä").innerText=""
    
}

document.getElementById("numbers").addEventListener("click", addNumbers)

function check(){
    let eka=Number(document.getElementById("one").innerHTML)
    let toka=Number(document.getElementById("two").innerHTML)
    let summa=Number(eka+toka)
    let minusSumma=Number(eka-toka)
    let vastaus=Number(document.getElementById("vastaus").value)
   

    if(eka==0){
        document.getElementById("vastausKenttä").innerText="Paina aloita nappia"
    }else{
    if(vastaus==""){
        document.getElementById("vastausKenttä").innerText="Syötä vastaus."}
        else{
            if(counter==2||counter==3){
                document.getElementById("merkki").innerText="-"
            }
            if(counter==3||counter==4){
                document.getElementById("one").innerHTML=Number(Math.floor(Math.random() * 40) + 1);
     document.getElementById("two").innerHTML=Number(Math.floor(Math.random() * 14) + 1);
     document.getElementById("vastaus").value=""
    if(vastaus==minusSumma){
        document.getElementById("vastausKenttä").innerText="Oikea vastaus, hienoa!"+"✅"
        
        counter=counter+1
        counter2=counter2+1
        document.getElementById("tasksDone").innerText=counter
    }
    else{
        document.getElementById("vastausKenttä").innerText="Väärin"+"❌"+", oikea vastaus on "+minusSumma+"."
       
        counter=counter+1
        document.getElementById("tasksDone").innerText=counter
    }
            }else{
     document.getElementById("one").innerHTML=Number(Math.floor(Math.random() * 40) + 1);
     document.getElementById("two").innerHTML=Number(Math.floor(Math.random() * 14) + 1);
     document.getElementById("vastaus").value=""
    if(vastaus==summa){
        document.getElementById("vastausKenttä").innerText="Oikea vastaus, hienoa!"+"✅"
        
        counter=counter+1
        counter2=counter2+1
        document.getElementById("tasksDone").innerText=counter
    }
    else{
        document.getElementById("vastausKenttä").innerText="Väärin"+"❌"+", oikea vastaus on "+summa+"."
       
        counter=counter+1
        document.getElementById("tasksDone").innerText=counter
    }}
    if(counter==5){
        document.getElementById("peli").style.fontSize = "3em";
        let peli=document.getElementById("peli")
        let uudelleen='<input type="button" value="Yritä uudelleen" onClick="refresh()" id=""refresh></input>'

        peli.innerHTML="Peli päättyi, sait "+counter2+"/5 tehtävää oikein."+"<br>"
        
        if(counter2==0){
            peli.innerHTML+= "Häpeä!"+"😭"+uudelleen
        }
        else if(counter2==1){
            peli.innerHTML+= "Harjoittele lisää!"+'🥵'+uudelleen
        }
        else if(counter2==2){
            peli.innerHTML+= "Ihan ok"+'😐'+uudelleen
        }
        else if(counter2==3){
            peli.innerHTML+= "Hyvä suoritus"+'🙂'+uudelleen
        }
        else if(counter2==4){
            peli.innerHTML+= "Melkein kaikki oikein!"+'😀'+uudelleen
        }
        else if(counter2==5){
            peli.innerHTML+= "Kaikki oikein! Hienoa"+"🤩👍"+uudelleen
        }
    }
}
}
}
document.getElementById("button").addEventListener("click", check)

function refresh(){
   location.reload()
}

