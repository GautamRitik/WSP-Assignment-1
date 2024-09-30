// main.js
const navLines = document.querySelector(".hamburger-menu");
const menuItem = document.querySelectorAll(".nav-links ul li a");
const head = document.querySelector(".header.container");
const mobileMenu = document.querySelector(".nav-links");

navLines.addEventListener("click", () => {
    navLines.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition < 250) {
        head.style.backgroundColor = "transparent";
    } else {
        head.style.backgroundColor = "#29323c";
    }
});

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        navLines.classList.toggle("active");
    });
});
