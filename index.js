const mobileNavMenu = document.getElementById("nav-menu-mobile");
const hamburgerBtn = document.getElementById("menu-hamburger");
const mobileNavMenuCloseBtn = document.getElementById(
  "nav-menu-mobile-close-btn"
);
const body = document.getElementById("body");

hamburgerBtn.addEventListener("click", () => {
  mobileNavMenu.style.display = "flex";
  body.classList.add("fixed-position");
});
mobileNavMenuCloseBtn.addEventListener("click", () => {
  mobileNavMenu.style.display = "none";
  body.classList.remove("fixed-position");
});
