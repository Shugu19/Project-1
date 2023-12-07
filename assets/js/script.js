var menuBtn = document.getElementById("menu-icon");
var navBar = document.getElementById('navbar');
var navLinks = document.querySelectorAll('.navlink');

menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("active");
    navBar.classList.toggle("active");
});

// Adding click event listeners to each navigation link
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        navBar.classList.remove('active');
        menuBtn.classList.remove('active');
    });
}
