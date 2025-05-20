// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})


// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#toTop')

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
        navMenu.classList.add('hidden')
        hamburger.classList.remove('hamburger-active')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// klik di luar hamburger
window.addEventListener('click', function(e){
    if (e.target != hamburger && navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Darkmode toggle
const toggle = document.querySelector('#toggle')
const html = document.querySelector('html')

toggle.addEventListener('click', function() {
    toggle.checked ? localStorage.theme = 'dark' : localStorage.theme = 'light'
    toggle.checked ? html.classList.add('dark') : html.classList.remove('dark')
})

// pindahkan posisi toggle sesuai posisi
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    toggle.checked = true
} else {
    toggle.checked = false
}