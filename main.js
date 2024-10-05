// ** Element Selection **
// This section selects key elements from the DOM to control the mobile menu's functionality.
// These include the hamburger menu icon and the mobile navigation menu.
const navLines = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".nav-links");

// ** Hamburger Menu Toggle **
// This part adds an event listener to the hamburger menu icon, allowing it to toggle the visibility of the mobile menu.
// When the hamburger icon is clicked, both it and the mobile menu will have their "active" classes toggled to show or hide the menu.
navLines.addEventListener("click", () => {
    navLines.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// ** Page Load Animation **
// This section listens for the window's load event. Once the page finishes loading, it adds the 'loaded' class to the body element.
// The 'loaded' class can be used to trigger CSS animations or changes in style to improve the user experience.
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});
