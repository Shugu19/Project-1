const menuBtn = document.getElementById("menu-icon");
const navBar = document.getElementById('navbar');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navBar.classList.toggle("active");
})