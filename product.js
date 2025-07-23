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

/*search*/

var productcontainer=document.querySelector(".products")

var search=document.getElementById("search")

var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toUpperCase();

    for(count=0;count<productlist.length;count++)
    {
        var productname=productlist[count].querySelector("h1").textContent;
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none";

        }
        else{
            productlist[count].style.display="block";
        }
    }
})