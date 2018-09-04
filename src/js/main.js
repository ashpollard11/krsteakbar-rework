

// let navItems = document.querySelectorAll(`.navItems`)
// console.log(navItems)

let nav =  document.querySelector("nav");
let menuOpen = document.querySelector(".hamburger-menu");
let menuClose = document.querySelector(".close-svg");
let moreKevin = document.querySelector(".more");

let moreKevinUl = document.querySelector(".more ul");

let kevNameDesktop = document.querySelector(".kev-name");
let krFooterUl = document.querySelector(".kr-footer ul");
let krBorder = document.querySelector(".kr-border");
let krText = document.querySelector(".kr-text");

menuOpen.addEventListener('click', function(e) {
	nav.classList.add('is-active');
	menuOpen.classList.add('is-active');
	var tlClose = new TimelineMax();
	tlClose.from(".close-menu", 0.5, {drawSVG: "50% 50%", delay:0.8});
})

menuClose.addEventListener('click', function(e) {
	nav.classList.remove('is-active');
	menuOpen.classList.remove('is-active');
	moreKevinUl.classList.remove('is-active');
})

moreKevin.addEventListener('click', function(e) {
	moreKevinUl.classList.toggle('is-active');
})

kevNameDesktop.addEventListener('click', function(e) {
	krBorder.classList.toggle('is-active');
	krFooterUl.classList.toggle('is-active');
	krText.classList.toggle('is-active');
})



//svgs

// var tl = new TimelineLite()

let circle1Large = document.querySelector(".circle-l1");
let circle1Sm = document.querySelector(".circle-sm1");
let circle1Med = document.querySelector(".circle-m1");

// TweenLite.to(circle1, 1, {morphSVG:".circle-l2"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l3"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l4"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:".circle-l5"}, "+=1")
// TweenLite.to(circle1, 1, {morphSVG:circle1}, "+=1");


var tlLarge = new TimelineMax({ repeat:-1, yoyo: true});
tlLarge.to(circle1Large, 2, {morphSVG: ".circle-l2", ease: Power3.easeOut})
.to(".circle-l3", 2, {morphSVG: ".circle-l4", xPercent:-20},  0)
.to(".circle-l5", 2, {morphSVG: ".circle-l1", xPercent:-40, yPercent:20}, 0);
// .to(".circle-l4", 4.5, {morphSVG: ".circle-l5", xPercent:100, yPercent:100}, 0);


var tlSm = new TimelineMax({ repeat:-1, yoyo: true});
tlSm.to(circle1Sm, 2, {morphSVG: ".circle-sm2", ease: Power3.easeOut}, "+=1")
.to(".circle-sm3", 2, {morphSVG: ".circle-sm4", xPercent:-20, yPercent:70}, 0)
.to(".circle-sm5", 2, {morphSVG: ".circle-sm1"}, 0);
// .to(".circle-sm5", 2, {morphSVG: ".circle-sm4"}, 0);


var tlMd = new TimelineMax({ repeat:-1, yoyo: true});
tlMd.to(circle1Med, 7, {morphSVG: ".circle-m2", ease: Power3.easeOut})
.to(".circle-m2", 7, {morphSVG: ".circle-m3", xPercent:-20},  0)
.to(".circle-m3", 7, {morphSVG: ".circle-m4", xPercent:-40, yPercent:20}, 0)
.to(".circle-m4", 7, {morphSVG: ".circle-m5", xPercent:100, yPercent:100}, 0);






