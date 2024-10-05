// ** Element Selection **
// This section selects various elements from the DOM that will be manipulated later in the script.
// These include the hamburger menu, navigation links, the header, and the mobile menu.
const navLines = document.querySelector(".hamburger-menu");
const menuItem = document.querySelectorAll(".nav-links ul li a");
const head = document.querySelector(".header.container");
const mobileMenu = document.querySelector(".nav-links");

// ** Hamburger Menu Toggle **
// This part adds an event listener to the hamburger menu icon, allowing it to toggle the visibility of the mobile menu.
// When the hamburger icon is clicked, both it and the mobile menu will have their "active" classes toggled.
navLines.addEventListener("click", () => {
    navLines.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// ** Scroll Event for Header Background **
// This section listens for scroll events on the document to change the header's background color based on the scroll position.
// If the user scrolls down more than 250 pixels, the header becomes a solid color; otherwise, it remains transparent.
document.addEventListener("scroll", () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition < 250) {
        head.style.backgroundColor = "transparent"; // Make the header transparent when scrolled up
    } else {
        head.style.backgroundColor = "#29323c"; // Change the header's background when scrolled down
    }
});

// ** Menu Item Click Event **
// This part adds click event listeners to each menu item in the mobile menu.
// When a menu item is clicked, it closes the mobile menu by toggling the "active" class on both the menu and the hamburger icon.
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        navLines.classList.toggle("active");
    });
});

// ** Page Load Animation **
// This section listens for the window's load event to add a class to the body element when the page finishes loading.
// The added class can be used to trigger loading animations or style changes, enhancing user experience.
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});
