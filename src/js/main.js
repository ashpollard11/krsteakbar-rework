

// let navItems = document.querySelectorAll(`.navItems`)
// console.log(navItems)

let nav =  document.querySelector("nav");
let menuOpen = document.querySelector(".hamburger-menu");
let menuClose = document.querySelector(".close-menu");
let moreKevin = document.querySelector(".more");
let moreKevinUl = document.querySelector(".more ul");

menuOpen.addEventListener('click', function(e) {
	nav.classList.add('is-active');
})

menuClose.addEventListener('click', function(e) {
	nav.classList.remove('is-active');
	moreKevinUl.classList.remove('is-active');

})

moreKevin.addEventListener('click', function(e) {
	moreKevinUl.classList.toggle('is-active');
})