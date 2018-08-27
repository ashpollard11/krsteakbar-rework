"use strict";

var dinnerNav = document.querySelector(".dinner");
var navLIs = document.querySelectorAll("nav a");
var phoneNumberDiv = document.querySelector(".phone-number");
var reservationsDiv = document.querySelector(".reservations");
var krfooterDiv = document.querySelector(".kr-footer");

dinnerNav.addEventListener("click", function () {
    document.body.classList.toggle("dinnerBG");
    phoneNumberDiv.classList.toggle("dinnerBodyCopy");
    reservationsDiv.classList.toggle("dinner-highlight");
    krfooterDiv.classList.toggle("dinnerBodyCopy");
    navLIs.forEach(function (navLi) {
        navLi.classList.toggle("dinner-highlight-others");
    });
    dinnerNav.classList.toggle("dinner-highlight");
});
//# sourceMappingURL=gellijs.js.map
