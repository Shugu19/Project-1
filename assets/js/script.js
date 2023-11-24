const menuBtn = document.getElementById("menu-icon");
const navBar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navlink'); // Assuming '.navlink' is the class for your navigation links


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navBar.classList.toggle("active");
})
// Adding click event listeners to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active'); // Close the navigation bar when a link is clicked
        menuBtn.classList.remove('active'); // Remove the 'active' class from menu button if needed
    });
});
