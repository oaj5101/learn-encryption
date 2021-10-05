burger = document.querySelector('.burger')
navbar = document.querySelector('.navigation')
navLogo = document.querySelector('.navlogo')
navList= document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class');
    navLogo.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})


function openmenu(){
    document.getElementById("navv").style.height="20vh";
  }
  function closemenu(){
    document.getElementById("navv").style.height="10vh";
  }
  function menuu(){
    if(document.getElementById("navv").style.height==="10vh")
    openmenu();
    else if(document.getElementById("navv").style.height="20vh")
    closemenu();
  }