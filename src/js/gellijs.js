const media = window.matchMedia("(max-width: 640px)");

const content = document.querySelector('.content');
const dinner = document.querySelector('.dinner');
const panel = document.querySelector('.panel');
// var moveMe = document.getElementById('moveMe');
// var item3 = document.getElementById('item3');
// var item4 = document.getElementById('item4');

let mobileSize = {
    setup: function() {
        dinner.addEventListener('click', mobileSize.onClick);
    },
    teardown: function() {
        dinner.removeEventListener('click', mobileSize.onClick);
    },
    onClick: function() { 
        panel.classList.add(`open`)
    }
}

let notMobileSize = {
    setup: function() {
        document.addEventListener('click', notMobileSize.onClick);
    },
    teardown: function() {
        document.removeEventListener('click', notMobileSize.onClick);
    },
    onClick: function() { 
        alert('Hi I\'m large');
    }
};

// checkMedia(mql);
// mql.addListener(checkMedia);

media.addListener(function(data) {
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