"use strict";

var mql = window.matchMedia("(max-width: 640px)");

var menuItemNames = ["food", "bureau", "bar", "table", "location", "hours"];

var allDescriptions = document.querySelectorAll(".descriptionDiv");

menuItemNames.forEach(function (menuItemName) {

    var theLI = document.querySelector("li." + menuItemName);
    var h2 = theLI.querySelector("h2");
    var description = document.querySelector("." + menuItemName + "Description");

    var small = {
        setup: function setup() {
            console.log("small setup");
            h2.addEventListener("click", small.onClick);
        },
        teardown: function teardown() {
            console.log("small teardown");
            h2.removeEventListener("click", small.onClick);
        },
        onClick: function onClick() {
            h2.appendChild(description);
            description.classList.add("open");
            small.clearSpecialClassOnBody();

            if (!h2.classList.contains("open")) {
                h2.classList.add("open");
                document.body.classList.add(menuItemName);
                description.classList.add("open");
                console.log("open");
            } else {
                h2.classList.remove("open");
                description.classList.remove("open");
                console.log("close");
            }
        },

        clearSpecialClassOnBody: function clearSpecialClassOnBody() {
            menuItemNames.forEach(function (itemName) {
                document.body.classList.remove(itemName);
            });
        },
        onlyShowOnePanel: function onlyShowOnePanel(e) {
            allDescriptions.forEach(function (el) {
                el.classList.remove("open");
            });
            console.log(description);
        }
    };

    var large = {
        setup: function setup() {
            console.log("large setup");
            theLI.addEventListener('mouseover', large.hover);
            theLI.addEventListener('mouseout', large.offHover);
            h2.addEventListener('click', large.onClick);
        },
        teardown: function teardown() {
            console.log("large teardown");
            theLI.removeEventListener('mouseover', large.hover);
            theLI.removeEventListener('mouseout', large.offHover);
            h2.removeEventListener('click', large.onClick);
        },
        onClick: function onClick(e) {
            console.log("large.onclick");
            document.querySelector("nav").style.display = "none";
            description.classList.add("open");
        },
        clearSpecialClassOnBody: function clearSpecialClassOnBody() {
            menuItemNames.forEach(function (itemName) {
                document.body.classList.remove(itemName);
            });
        },
        onlyShowOnePanel: function onlyShowOnePanel(e) {
            allDescriptions.forEach(function (el) {
                el.classList.remove("open");
            });
            e.target.className = "open";
        },

        hover: function hover() {
            document.body.classList.add(menuItemName);
        },
        offHover: function offHover() {
            document.body.classList.remove(menuItemName);
        }
    };

    mql.addListener(function (data) {
        if (data.matches) {
            console.log("mql changed to small");
            large.teardown();
            small.setup();
        } else {
            console.log("mql changed to large");
            small.teardown();
            large.setup();
        }
    });

    if (mql.matches) {
        small.setup();
    } else {
        large.setup();
    }
});
//# sourceMappingURL=gellijs.js.map
