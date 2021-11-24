 let pisteet=0;
 function vaihto() {
    document.getElementById("kuva").innerHTML='<img src="../kuvat/flag-g11ce8c767_1920.jpg" alt="Girl in a jacket"  width="637px" height="300px">'
    document.getElementById("teksti").innerHTML="Minkä maan lippu on kuvassa"
    document.getElementById("nappi").innerHTML='<button type="button" class="btn btn-secondary" onclick="oikeaNappi()">Primary</button>'
 } 
 function oikeaNappi() {
    pisteet=pisteet+1;
    console.log(pisteet)
 }