const media = window.matchMedia("(max-width: 640px)");

const content = document.querySelector('.content');
const dinner = document.querySelector('.dinner');
const dinnerDescription = document.querySelector('#dinnerDescription');
const dinnerDash = document.querySelector('.nav-dash.dinner');
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
        if (dinnerDescription.classList.contains("close")){
            dinnerDescription.classList.toggle("open");
        } 
        // else {
        //     dinnerDescription.classList.add("close");
        //     dinnerDescription.classList.remove("open");
        // }
    }
}

let notMobileSize = {
    setup: function() {
        dinner.addEventListener('click', notMobileSize.onClick)
    },
    teardown: function() {
        dinner.removeEventListener('click', notMobileSize.onClick)
    },
    onClick: function() { 
        dinnerDescription.classList.add(`open`)
        console.log(`im on the wrong thing`)
    }
};

// checkMedia(mql);
// mql.addListener(checkMedia);

media.addListener(function(data) {
    if (data.matches) {
        console.log(data)
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