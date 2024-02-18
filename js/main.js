// Mobile, Tablet Menu Responsive
const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", () => {
  const mobileTabletMenu = document.getElementById("mobile-tablet-menu");
  mobileTabletMenu.classList.toggle("show-menu");
  menuToggle.classList.toggle("text-green");
});

// Fixed nav
window.onscroll = function () {
  fixedNav();
};
const nav = document.getElementById("nav");
const navbar = document.getElementById("navbar");
function fixedNav() {
  if (window.pageYOffset > 50) {
    nav.classList.add("sticky");
    navbar.classList.add("!py-6");
  } else {
    nav.classList.remove("sticky");
    navbar.classList.remove("!py-6");
  }
}
