var nav= document.querySelector("nav");
document.addEventListener('scroll',animateNav)


// Function to animate on scroll 
function animateNav(){
    if(window.pageYOffset>60){
        nav.style.display="none";
    }
    else{
        nav.style.display="flex"
    }
}

