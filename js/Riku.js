 let pisteet=0;


 function vaihto1() {
    document.getElementById("kuva").innerHTML='<img src="../kuvat/flag-g11ce8c767_1920.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
    document.getElementById("myText").innerHTML="Minkä maan lippu on kuvassa?"
    document.getElementById("nappi").innerHTML='<button type="button" class="btn btn-secondary" onclick="oikeaNappi()">Primary</button>'
    //document.getElementById("nappi2").innerHTML='<button type="button" class="btn btn-secondary" onclick="oikeaNappi()">Primary</button>'
 } 

 function vaihto2() {
    document.getElementById("kuva").innerHTML='<img src="../kuvat/saksa.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
    document.getElementById("teksti").innerHTML="Mikä on Saksan pääkaupunki?"
    document.getElementById("nappi").innerHTML='<button type="button" class="btn btn-secondary" onclick="oikeaNappi()">Primary</button>'
 } 
 function vaihto3() {
    document.getElementById("kuva").innerHTML='<img src="../kuvat/vuori.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
    document.getElementById("teksti").innerHTML="Mikä on maailman korkein vuori?"
    document.getElementById("nappi").innerHTML='<button type="button" class="btn btn-secondary" onclick="oikeaNappi()">Primary</button>'
 } 
 function vaihto4() {
    document.getElementById("kuva").innerHTML='<img src="../kuvat/joki.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
    document.getElementById("teksti").innerHTML="Mikä on maailman pisin joki?"
    document.getElementById("nappi").innerHTML='<button type="button" class="btn btn-secondary" onclick="oikeaNappi()">Primary</button>'
 } 
 function vaihto5() {
    document.getElementById("kuva").innerHTML='<img src="../kuvat/suomi.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
    document.getElementById("teksti").innerHTML="Kuinka monta kaupunkia Suomessa on?"
    document.getElementById("nappi").innerHTML='<button type="button" class="btn btn-secondary" onclick="oikeaNappi()">Primary</button>'
 } 
 function oikeaNappi() {
    pisteet=pisteet+1;
    console.log(pisteet)
 }
 let text=[vaihto1, vaihto2, vaihto3, vaihto4, vaihto5]
 let text=document.getElementById("myText");
let btn = document.getElementById("myBtn");
btn.addEventListener("click", changeText);
 text.innerHTML = texts[0];


    function changeText(){
       let searchTerm =  text.innerHTML  ;
       let index=texts.indexOf(searchTerm)+1;
       if(index == texts.length )index=0;
          let result=texts[index];
          text.innerHTML = result;
    	  return;
       }
