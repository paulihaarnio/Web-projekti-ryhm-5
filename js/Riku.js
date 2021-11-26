 let pisteet=0;

 let kysymys1=document.getElementById("myText").innerHTML="Minkä maan lippu on kuvassa?"
 let kysymys2=document.getElementById("myText").innerHTML="Mikä on Saksan pääkaupunki?"
 let kysymys3=document.getElementById("myText").innerHTML="Mikä on maailman korkein vuori?"
 let kysymys4=document.getElementById("myText").innerHTML="Mikä on maailman pisin joki?"
 let kysymys5=document.getElementById("myText").innerHTML="Kuinka monta kaupunkia Suomessa on?"
 
 let photo1=document.getElementById("kuva").innerHTML='<img src="../kuvat/flag-g11ce8c767_1920.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
let photo2= document.getElementById("kuva").innerHTML='<img src="../kuvat/saksa.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
let photo3= document.getElementById("kuva").innerHTML='<img src="../kuvat/vuori.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
 let photo4=document.getElementById("kuva").innerHTML='<img src="../kuvat/joki.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
 let photo5=document.getElementById("kuva").innerHTML='<img src="../kuvat/suomi.jpg" alt="Girl in a jacket"  width="637px" height="300px">'


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
 var texts = [kysymys1, kysymys2, kysymys3, kysymys4, kysymys5];
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

     var imgArray = new Array();

     var myImage = document.getElementById("kuva");

     var imageArray = ["_kuvat/vuori.jpg","_kuvat/vuori.jpg","_kuvat/vuori.jpg",
       "_kuvat/vuori.jpg","_kuvat/vuori.jpg"];
     
     var imageIndex = 0; 
     
     function changeImage() {
       myImage.setAttribute("src",imageArray[imageIndex]);
       imageIndex = (imageIndex + 1) % imageArray.length;
     }
     
     setInterval(changeImage, 5000);

 /*var photos = [photo1, photo2, photo3, photo4, photo5]
 var photo=document.getElementById("kuva");
 btn = document.getElementById("myBtn");
 btn.addEventListener("click", changeTexts);
 photo.innerHTML = photos[0];


    function changeTexts(){
       var searchTerm =  photo.innerHTML  ;
       var index=photos.indexOf(searchTerm)+1;
       if(index == photos.length )index=0;
          var results=photos[index];
          photo.innerHTML = results;
    	  return;
       }
       */
