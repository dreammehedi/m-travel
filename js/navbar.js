// dynamic menu
const menu = ["Home", "About", "Blog", "Destination", "Search"];
const desktopMenu = document.getElementById("desktop-menu");

// dynamic mobile tablet menu
const mobileTabletMenu = document.getElementById("mobile-tablet-menu");

menu.forEach((val) => {
  // desktop menu
  const desktopLi = document.createElement("li");
  desktopLi.innerText = val;
  desktopLi.classList.add("menu-item", "hover:text-green");

  desktopMenu.appendChild(desktopLi);
  // dynamic mobile tablet menu
  const desktopMobileLi = document.createElement("li");
  desktopMobileLi.innerText = val;
  desktopMobileLi.classList.add("menu-item", "hover:text-green", "hover:pl-1");

  mobileTabletMenu.appendChild(desktopMobileLi);
});

// Mobile, Tablet Menu Responsive
const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", () => {
  // const mobileTabletMenu = document.getElementById("mobile-tablet-menu");
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
