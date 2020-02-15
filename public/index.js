window.onscroll= function(){navScroll()};


function navScroll(){
    
    var nav = document.getElementById("nav-bar");
    if(window.pageYOffset > 800){
        nav.classList.add("nav-style");
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("nav-style");
        nav.classList.remove("sticky");
    }
}
