// window.onscroll= function(){navScroll()};
var home = document.querySelector("li a[href='/']");
home.style.cssText = "background-color:#FFC30D;"



window.addEventListener("scroll", navScroll);
window.addEventListener("scroll", contactScroll);

function navScroll() {

    var nav = document.getElementById("nav-bar");
    if (window.pageYOffset > 800) {
        nav.classList.add("nav-style");
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("nav-style");
        nav.classList.remove("sticky");
    }

}

function contactScroll() {
    const contact = document.querySelector("li a[href='/#contact-us']");
    if (window.pageYOffset > 2300) {
        contact.style.cssText = "background-color:#FFC30D;"
        home.style.cssText = "background-color: none;"
    } 
    else {
        contact.style.cssText = "background-color: none;"
        home.style.cssText = "background-color:#FFC30D;"
    }
}