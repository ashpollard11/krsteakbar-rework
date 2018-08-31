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

//svgs

// var tl = new TimelineLite()

var circle1Large = document.querySelector(".circle-l1");
var circle1Sm = document.querySelector(".circle-sm1");

// TweenLite.to(circle1, 1, {morphSVG:".circle-l2"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l3"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l4"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l5"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:circle1}, "+=1");


var tlLarge = new TimelineMax({ repeat: -1, yoyo: true });
tlLarge.to(circle1Large, 4.5, { morphSVG: ".circle-l2", yPercent: -30, ease: Power3.easeOut }).to("circle-l2", 4.5, { morphSVG: "#circle-l3", xPercent: -20 }, 0).to("circle-l3", 4.5, { morphSVG: "#circle-l4", xPercent: -40, yPercent: 20 }, 0).to("circle-l4", 4.5, { morphSVG: "#circle-l5", xPercent: 100, yPercent: 100 }, 0);

var tlSm = new TimelineMax({ repeat: -1, yoyo: true });
tlSm.to(circle1Sm, 2, { morphSVG: ".circle-sm2", ease: Power3.easeOut }).to("circle-sm2", 2, { morphSVG: "#circle-sm3" }, 0).to("circle-sm3", 2, { morphSVG: "#circle-sm5" }, 0).to("circle-sm5", 2, { morphSVG: "#circle-sm4" }, 0);
//# sourceMappingURL=main.js.map
