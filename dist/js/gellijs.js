'use strict';

// window.addEventListener('resize', function(){
var mql = window.matchMedia("(max-width: 640px)");

var content = document.querySelector('.content');
var dinner = document.querySelector('.dinner');
// const dinnerDescription = document.querySelector('#dinnerDescription');
var dinnerDescription = document.querySelector('.dinnerDescription');
var dinnerPreview = document.querySelector('.panel');
var dinnerDash = document.querySelector('.nav-dash.dinner');
var dinnerH2 = document.querySelector('.dinnerH2');
// var item3 = document.getElementById('item3');
// var item4 = document.getElementById('item4');

var small = {
    setup: function setup() {
        console.log("small setup");
        dinnerH2.addEventListener('click', small.onClick);
    },
    teardown: function teardown() {
        console.log("small teardown");
        dinnerH2.removeEventListener('click', small.onClick);
    },
    onClick: function onClick() {
        if (dinnerPreview.classList.contains("close")) {
            dinnerPreview.classList.add("open");
            dinnerPreview.classList.remove("close");
        } else {
            dinnerPreview.classList.add("close");
            dinnerPreview.classList.remove("open");
        }

        dinnerDescription.classList.remove('open');
    }
};

var large = {
    setup: function setup() {
        console.log("large setup");
        dinnerH2.addEventListener('click', large.onClick);
    },
    teardown: function teardown() {
        console.log("large teardown");
        dinnerH2.removeEventListener('click', large.onClick);
    },
    onClick: function onClick() {
        console.log('not appending large');
        dinnerDescription.classList.add('open');
        dinnerH2.appendChild(dinnerDescription);
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
// });
//# sourceMappingURL=gellijs.js.map
