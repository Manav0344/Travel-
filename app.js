const menu = document.querySelector("#menu");
const navbar = document.querySelector(".Navbar");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60)
})

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

function closeNavbar() {
    if (window.innerWidth <= 768) {
        navbar.classList.remove("active");
    }
}
