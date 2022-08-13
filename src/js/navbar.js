const menuNavbar = document.querySelector("#menu-navbar");
const menuDropdown = document.querySelector("#menu-dropdown");

menuNavbar.addEventListener("click", () => {
    menuDropdown.classList.toggle("hidden");
});
