const nav = document.querySelector(".nav")

new WOW().init()

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", this.window.scrollY > 0)
})

let
    menu = document.querySelector(".menu"),
    menuOpen = document.querySelector(".menu-open"),
    menuClose = document.querySelector(".menu-close")

menuOpen.addEventListener("click", () => {
    menu.classList.add("open")
})
menuClose.addEventListener("click", () => {
    menu.classList.remove("open")
})
