// Mobile, Tablet Menu Responsive
const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", () => {
  const mobileTabletMenu = document.getElementById("mobile-tablet-menu");
  mobileTabletMenu.classList.toggle("show-menu");
  console.log(mobileTabletMenu);
});
