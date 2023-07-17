// const preloader = document.querySelector("[data-preloader]");
var preloader=document.querySelector("[data-preloader]")

window.addEventListener("load", ()=>{
    preloader.classList.add("remove");
});

/**
 * add event on multiple element
 */

var addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}


/**
 * navbar toggler for mobile
 */

var  navbar = document.querySelector("[data-navbar]");
var navTogglers = document.querySelectorAll("[data-nav-toggler]");
var overlay = document.querySelector("[data-overlay]");


var toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}


addEventOnElements(navTogglers, "click", toggleNav);


/**
 * header
 */

var header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");

});