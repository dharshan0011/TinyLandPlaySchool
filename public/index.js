window.onscroll= function(){navScroll()};



function navScroll(){
    var nav = document.getElementById("nav-bar");
    if(window.pageYOffset > 800){
        nav.classList.add("sticky");
        nav.classList.add("nav-style");
    } else {
        nav.classList.remove("sticky");
        nav.classList.remove("nav-style");
    }
}
