 pisteet=0;
 vastattu=0;
 let kysymys1=document.getElementById("myText").innerHTML="Minkä maan lippu on kuvassa?";
 let kysymys2=document.getElementById("myText").innerHTML="Mikä on Saksan pääkaupunki?";
 let kysymys3=document.getElementById("myText").innerHTML="Mikä on maailman korkein vuori?";
 let kysymys4=document.getElementById("myText").innerHTML="Mikä on maailman pisin joki?";
 let kysymys5=document.getElementById("myText").innerHTML="Kuinka monta kaupunkia Suomessa on?";
 //let loppuRuutu=document.getElementById("myText").innerHTML="Peli päättyi. Sait "+ pisteet + " oikein";
 //tähän tulee vikaruutu
//kysymys 1
 let normiNappi1='<button type="button" class="btn btn-secondary" name="vari" onclick="ei()">Ruotsi</button>';
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
 let tyhjaNappi="<span></span>";
 toiminto=true;
 
    

 function jooo() {
   
   
  
  
   if (toiminto===true ){
    pisteet=pisteet + 1;
    document.getElementById("tekstia").innerHTML="Oikein meni!" + "<br>" + "Siirry seuraavaan kysymykseen.";
    
    console.log(pisteet)
    
   }
   if (toiminto===false) {
     pisteet=pisteet;
  
   
   } 
   toiminto=false
   
   return pisteet
 }
 function ei() {
  pisteet=pisteet
  console.log(pisteet)
  if (toiminto===true ) {
  document.getElementById("tekstia").innerHTML="Väärin meni!" + "<br>" + "Siirry seuraavaan kysymykseen.";
  
} if (toiminto == false) {
  
}
  toiminto=false;
  return
}
 

 var texts = [
  kysymys1+normiNappi1+normiNappi2+normiNappi3+oikeeNappi1,
  kysymys2+normiNappi5+normiNappi6+oikeeNappi2+normiNappi7,
  kysymys3+oikeeNappi3+normiNappi9+normiNappi10+normiNappi11,
  kysymys4+normiNappi13+oikeeNappi4+normiNappi14+normiNappi15,
  kysymys5+oikeeNappi5+normiNappi17+normiNappi18+normiNappi19,
  ]; 
  
 var text=document.getElementById("myText");
var btn = document.getElementById("myBtn");
btn.addEventListener("click", changeText);
 text.innerHTML = texts[0];


    function changeText(){
    
      if (vastattu <= 5) {
       var searchTerm =  text.innerHTML  ;
       var index=texts.indexOf(searchTerm)+1;
       if(index == texts.length )index=0;
          var result=texts[index];
          text.innerHTML = result;
        } else {
          let lopputeksti=""
          if(pisteet==0){
            lopputeksti= "Huonosti meni"+"😭"
        }
        if(pisteet==1){
          lopputeksti= "Harjoittele enemmän"+'🥶'
        }
        if(pisteet==2){
          lopputeksti= "Ei kovin kummoinen"+'🥱'
        }
        if(pisteet==3){
          lopputeksti= "Hieno työtä"+'🥵'
        }
        if(pisteet==4){
          lopputeksti= "Melkein kaikki oikein!"+'😍'
        }
        if(pisteet==5){
          lopputeksti= "Kaikki oikein! Hienoa"+"🤯"
        }
          document.getElementById("myBtn").disabled=true
          document.getElementsByClassName("mySlides").innerHTML=""
          text.innerHTML= document.getElementById("myText").innerHTML=
          "<ul style='list-style-type:none; padding-right:40px;'><li>Peli päättyi.</li><li> Sait " + pisteet + "/5 oikein,</li><li> "+lopputeksti+"</li></ul>" + "<ol>Oikea vastaukset:<li>Tanska</li><li>Berliini</li><li>Mount Everest</li><li>Amazon</li><li>107</li></ol>";
        }
       
    	  return;

        
      }
       




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
        vastattu=vastattu+1
        console.log(vastattu)
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
        
       
      