"use strict";

var dinnerNav = document.querySelector(".dinner");
var navLI = document.querySelectorAll("nav li");
var phoneNumberDiv = document.querySelector(".phone-number");
var reservationsDiv = document.querySelector(".reservations");

dinnerNav.addEventListener("click", function () {
    document.body.classList.toggle("dinnerBG");
    phoneNumberDiv.classList.toggle("dinnerBodyCopy");
    reservationsDiv.classList.toggle("dinnerBodyCopy");
    // bodyCopy.classList.toggle(`dinnerBodyCopy`)
    dinnerNav.classList.toggle("dinner-highlight");
});
//# sourceMappingURL=gellijs.js.map
