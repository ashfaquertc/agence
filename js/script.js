// Nav Menu Functionality
const nav = document.querySelector("nav");
const navIcon = document.querySelector(".mobile-nav-icon");
const navItems = document.querySelector(".mobile-menu-items");

window.onscroll = function() {
  navItems.style.top = "75px";

  if(document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky-nav");
    navIcon.style.background = "#6a4df4";
    navIcon.style.color = "#fff";
    navItems.style.top = "80px";
  } else {
    nav.classList.remove("sticky-nav");
    navIcon.style.background = "hsla(0, 0%, 20%, 0.85)";
  }
}

// Menu Icon Functionality
function iconFunc(icon) {
  icon.classList.toggle("change");
}

// Mobile Nav Menu Functionality
const menuIcon = document.querySelector(".mobile-nav-icon");
const barIcon = document.querySelector("i");
const menuItems = document.querySelector(".mobile-menu-items");

menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    barIcon.classList.toggle("fa-x");
});

// Banner Slider
$('.banner-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    // fade: true,
});