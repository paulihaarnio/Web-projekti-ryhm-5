 let pisteet=0;

 let kysymys1=document.getElementById("myText").innerHTML="Minkä maan lippu on kuvassa?"
 let kysymys2=document.getElementById("myText").innerHTML="Mikä on Saksan pääkaupunki?"
 let kysymys3=document.getElementById("myText").innerHTML="Mikä on maailman korkein vuori?"
 let kysymys4=document.getElementById("myText").innerHTML="Mikä on maailman pisin joki?"
 let kysymys5=document.getElementById("myText").innerHTML="Kuinka monta kaupunkia Suomessa on?"
 
/* let photo1=document.getElementById("kuva").innerHTML='<img src="../kuvat/flag-g11ce8c767_1920.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
let photo2= document.getElementById("kuva").innerHTML='<img src="../kuvat/saksa.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
let photo3= document.getElementById("kuva").innerHTML='<img src="../kuvat/vuori.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
 let photo4=document.getElementById("kuva").innerHTML='<img src="../kuvat/joki.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
 let photo5=document.getElementById("kuva").innerHTML='<img src="../kuvat/suomi.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
*/

 
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

    /*   var imgArray = new Array();

       imgArray[0] = new Image();
       imgArray[0].src = '../kuvat/joki.jpg';
       
       imgArray[1] = new Image();
       imgArray[1].src = '../kuvat/vuori.jpg';
       
        ... more images ... 
       
       imgArray[5] = new Image();
       imgArray[5].src = 'images/img/Splash_image6.jpg';
       
       /*------------------------------------*/
      
     /*  function nextImage(element)
       
       {
           var img = document.getElementById(element);
       
           for(var i = 0; i < imgArray.length;i++)
           {
               if(imgArray[i].src == img.src) // << check this
               {
                   if(i === imgArray.length){
                       document.getElementById(element).src = imgArray[0].src;
                       break;
                   }
                   document.getElementById(element).src = imgArray[i+1].src;
                   break;
               }
           }
       }*/
 
       
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