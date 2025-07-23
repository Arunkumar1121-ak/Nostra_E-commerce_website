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



/*slider*/

   
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-container")
var slidermargin=0

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)
