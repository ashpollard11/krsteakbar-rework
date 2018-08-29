'use strict';

var media = window.matchMedia("(max-width: 640px)");

var content = document.querySelector('.content');
var dinner = document.querySelector('.dinner');
var dinnerDescription = document.querySelector('#dinnerDescription');
// var moveMe = document.getElementById('moveMe');
// var item3 = document.getElementById('item3');
// var item4 = document.getElementById('item4');

var mobileSize = {
    setup: function setup() {
        dinner.addEventListener('click', mobileSize.onClick);
    },
    teardown: function teardown() {
        dinner.removeEventListener('click', mobileSize.onClick);
    },
    onClick: function onClick() {
        if (dinnerDescription.classList.contains("close")) {
            dinnerDescription.classList.add("open");
            dinnerDescription.classList.remove("close");
        } else {
            dinnerDescription.classList.add("close");
            dinnerDescription.classList.remove("open");
        }
    }
};

var notMobileSize = {
    setup: function setup() {
        document.addEventListener('click', notMobileSize.onClick);
    },
    teardown: function teardown() {
        document.removeEventListener('click', notMobileSize.onClick);
    },
    onClick: function onClick() {
        dinnerDescription.classList.add('.open');
        dinner.appendChild(dinnerDescription);
    }
};

// checkMedia(mql);
// mql.addListener(checkMedia);

media.addListener(function (data) {
    if (data.matches) {
        mobileSize.teardown();
        notMobileSize.setup();
    } else {
        notMobileSize.teardown();
        mobileSize.setup();
    }
});

if (media.matches) {
    notMobileSize.setup();
} else {
    mobileSize.setup();
}
//# sourceMappingURL=gellijs.js.map
