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
    var panel = document.querySelector(".panel");

    navLIs.forEach(function (navLi) {
        navLi.classList.toggle("dinner-highlight-others");
    });
    dinnerNav.classList.toggle("dinner-highlight");

    if (panel.classList.contains("close")) {
        panel.classList.add("open");
        panel.classList.remove("close");
    } else {
        panel.classList.add("close");
        panel.classList.remove("add");
    }
});
//# sourceMappingURL=gellijs.js.map
