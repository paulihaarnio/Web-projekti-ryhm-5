 let pisteet=0;

 let kysymys1=document.getElementById("myText").innerHTML="Minkä maan lippu on kuvassa?";
 let kysymys2=document.getElementById("myText").innerHTML="Mikä on Saksan pääkaupunki?";
 let kysymys3=document.getElementById("myText").innerHTML="Mikä on maailman korkein vuori?";
 let kysymys4=document.getElementById("myText").innerHTML="Mikä on maailman pisin joki?";
 let kysymys5=document.getElementById("myText").innerHTML="Kuinka monta kaupunkia Suomessa on?";
 let loppuRuutu=document.getElementById("myText").innerHTML="Peli päättyi. Sait oikein";
 //tähän tulee vikaruutu
//kysymys 1
 let normiNappi1='<button type="button" class="btn btn-secondary" onclick="ei()">Ruotsi</button>';
 let normiNappi2='<button type="button" class="btn btn-secondary" onclick="ei()">Norja</button>';
 let normiNappi3='<button type="button" class="btn btn-secondary" onclick="ei()">Suomi</button>';
 let oikeeNappi1='<button type="button" class="btn btn-secondary" onclick="jooo()">Tanska</button>';

 
 //kysymys 2 
 let normiNappi5='<button type="button" class="btn btn-secondary" onclick="ei()">Lyypekki</button>'
 let normiNappi6='<button type="button" class="btn btn-secondary" onclick="ei()">Frankfurt</button>'
 let normiNappi7='<button type="button" class="btn btn-secondary" onclick="ei()">Bremen</button>'
 let oikeeNappi2='<button type="button" class="btn btn-secondary" onclick="jooo()">Berliini</button>'

 //kysymys 3
 let normiNappi9='<button type="button" class="btn btn-secondary" onclick="ei()">Kilimanjaro</button>'
 let normiNappi10='<button type="button" class="btn btn-secondary" onclick="ei()">Mount McKinley</button>'
 let normiNappi11='<button type="button" class="btn btn-secondary" onclick="ei()">Vinson Massif</button>'
 let oikeeNappi3='<button type="button" class="btn btn-secondary" onclick="jooo()">Mount Everest</button>'

 //kysymys 4
 let normiNappi13='<button type="button" class="btn btn-secondary" onclick="ei()">Seine</button>'
 let normiNappi14='<button type="button" class="btn btn-secondary" onclick="ei()">Thames</button>'
 let normiNappi15='<button type="button" class="btn btn-secondary" onclick="ei()">Niili</button>'
 let oikeeNappi4='<button type="button" class="btn btn-secondary" onclick="jooo()">Amazon</button>'

 //kysymys 5
 let normiNappi17='<button type="button" class="btn btn-secondary" onclick="ei()">15</button>'
 let normiNappi18='<button type="button" class="btn btn-secondary" onclick="ei()">125</button>'
 let normiNappi19='<button type="button" class="btn btn-secondary" onclick="ei()">56</button>'
 let oikeeNappi5='<button type="button" class="btn btn-secondary" onclick="jooo()" >107</button>'

toiminto=true;
 function jooo() {
   
   
   document.getElementById("tekstia").innerHTML="Oikein meni!" + "<br>" + "Siirry seuraavaan kysymykseen.";
   if (toiminto===true ){
    pisteet=pisteet + 1;
    console.log(pisteet)
   }
   if (toiminto===false) {
     pisteet=pisteet;
   } 
   toiminto=false
   
   return
 }
 function ei() {
  pisteet=pisteet
  console.log(pisteet)
  document.getElementById("tekstia").innerHTML="Väärin meni!" + "<br>" + "Siirry seuraavaan kysymykseen.";
  toiminto=false;
  return
}
 /*let vaihto1= document.getElementById("nappi1").innerHTML='<button type="button" class="btn btn-secondary">moi</button>'
 let vaihto2= document.getElementById("nappi2").innerHTML='<button type="button" class="btn btn-secondary">moi</button>'
 let vaihto3= document.getElementById("nappi3").innerHTML='<button type="button" class="btn btn-secondary">moi</button>'
 let vaihto4= document.getElementById("nappi4").innerHTML='<button type="button" class="btn btn-secondary">moi</button>'
 let vaihto5= document.getElementById("nappi1").innerHTML='<button type="button" class="btn btn-secondary">moi</button>'
/* let photo1=document.getElementById("kuva").innerHTML='<img src="../kuvat/flag-g11ce8c767_1920.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
let photo2= document.getElementById("kuva").innerHTML='<img src="../kuvat/saksa.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
let photo3= document.getElementById("kuva").innerHTML='<img src="../kuvat/vuori.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
 let photo4=document.getElementById("kuva").innerHTML='<img src="../kuvat/joki.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
 let photo5=document.getElementById("kuva").innerHTML='<img src="../kuvat/suomi.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
*/
 var texts = [
  kysymys1+normiNappi1+normiNappi2+normiNappi3+oikeeNappi1,
  kysymys2+normiNappi5+normiNappi6+oikeeNappi2+normiNappi7,
  kysymys3+oikeeNappi3+normiNappi9+normiNappi10+normiNappi11,
  kysymys4+normiNappi13+oikeeNappi4+normiNappi14+normiNappi15,
  kysymys5+oikeeNappi5+normiNappi17+normiNappi18+normiNappi19
  ];
 var text=document.getElementById("myText");
var btn = document.getElementById("myBtn");
btn.addEventListener("click", changeText);
 text.innerHTML = texts[0];


    function changeText(){
       var searchTerm =  text.innerHTML  ;
       var index=texts.indexOf(searchTerm)+1;
       if(index == texts.length )index=0;
          var result=texts[index];
          text.innerHTML = result;
    	  return;
       }


     /*  var napit = [vaihto1, vaihto2, vaihto3, vaihto4, vaihto5];
       var napit2=document.getElementById("napit");
      var btnn = document.getElementById("myBtn");
      btnn.addEventListener("click", changeButt);
      napit2.innerHTML = napit2[0];
      
      
          function changeButt(){
             var searchTerm =  napit2.innerHTML  ;
             var index=napit.indexOf(searchTerm)+1;
             if(index == napit.length )index=0;
                var result=napit[index];
                napit2.innerHTML = result;
              return;
             }
   */
       


       var slideIndex = 1;
       showSlides(slideIndex);
       
       // Next/previous controls
       function plusSlides(n) {
         showSlides(slideIndex += n);
         
       }
       
       // Thumbnail image controls
       function currentSlide(n) {
         showSlides(slideIndex = n);
       }
       
       function showSlides(n) {
        document.getElementById("tekstia").innerHTML="";
        toiminto=true
         var i;
         var slides = document.getElementsByClassName("mySlides");
         var dots = document.getElementsByClassName("dot");
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
       }