var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
window.onload = () =>{
var menuBtn = document.getElementById("menuBtn")
    var sideNav = document.getElementById("sideNav")
    var menu = document.getElementById("menu")

    sideNav.style.right = "-250";

    menuBtn.onclick = function(){
      if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "../images/menuBtn.png";
      }
      else{
        sideNav.style.right = "-250px";
        menu.src = "../images/menuBtn.png";
      }
    }}