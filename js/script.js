 let hamburgerMenu = document.querySelector('.hamburger');
 let close = document.getElementById('close');
 hamburgerMenu.onclick = function (){
    hamburgerMenu.classList.toggle('toggle');
     if(hamburgerMenu.classList.contains('toggle')){
        on(); 
     }
 }

 close.onclick = function (){
     off();
 }
 // open up  overlay menu
  function on() {
     document.getElementById("overlay").style.display = "block";
   }
  // close overlay menu
  function off() {
    document.getElementById("overlay").style.display = "none";
  }