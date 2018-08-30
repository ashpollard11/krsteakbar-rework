"use strict";

// let navItems = document.querySelectorAll(`.navItems`)
// console.log(navItems)

var nav = document.querySelector("nav");
var menuOpen = document.querySelector(".hamburger-menu");
var menuClose = document.querySelector(".close-menu");
var moreKevin = document.querySelector(".more");
var moreKevinUl = document.querySelector(".more ul");

menuOpen.addEventListener('click', function (e) {
	nav.classList.add('is-active');
});

menuClose.addEventListener('click', function (e) {
	nav.classList.remove('is-active');
	moreKevinUl.classList.remove('is-active');
});

moreKevin.addEventListener('click', function (e) {
	moreKevinUl.classList.toggle('is-active');
});
//# sourceMappingURL=main.js.map
