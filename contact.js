/*offer close*/
var offernav = document.querySelector(".offer-nav")
var offernavclose = document.getElementById("close-offer")

offernavclose.addEventListener("click",function(){
    offernav.style.display="none"
})


/*side nav bar*/

var sidenavin=document.getElementById("side-navbar-activate")
var sidenav=document.querySelector(".side-nav")

sidenavin.addEventListener("click",function(){
    sidenav.style.marginLeft="0px"
})

var closenav=document.getElementById("side-navbar-close")

closenav.addEventListener("click",function(){
    sidenav.style.marginLeft="-60%"
})