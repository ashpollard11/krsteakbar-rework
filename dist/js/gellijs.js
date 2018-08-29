'use strict';

var media = window.matchMedia("(max-width: 640px)");

var content = document.querySelector('.content');
var dinner = document.querySelector('.dinner');
var dinnerDescription = document.querySelector('#dinnerDescription');
var dinnerDash = document.querySelector('.nav-dash.dinner');
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
            dinnerDescription.classList.toggle("open");
        }
        // else {
        //     dinnerDescription.classList.add("close");
        //     dinnerDescription.classList.remove("open");
        // }
    }
};

var notMobileSize = {
    setup: function setup() {
        dinner.addEventListener('click', notMobileSize.onClick);
    },
    teardown: function teardown() {
        dinner.removeEventListener('click', notMobileSize.onClick);
    },
    onClick: function onClick() {
        dinnerDescription.classList.add('open');
        console.log('im on the wrong thing');
    }
};

// checkMedia(mql);
// mql.addListener(checkMedia);

media.addListener(function (data) {
    if (data.matches) {
        console.log(data);
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
