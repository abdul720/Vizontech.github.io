// JS code to show and hide the Responsive Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// JS finction to show the humburger
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// JS finction to Hide the humburger
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}