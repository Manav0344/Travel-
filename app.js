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


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
