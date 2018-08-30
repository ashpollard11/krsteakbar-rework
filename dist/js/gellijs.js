'use strict';

// window.addEventListener('resize', function(){
var mql = window.matchMedia('(max-width: 640px)');

var menuItemNames = ['food'];

menuItemNames.forEach(function (menuItemName) {

    var content = document.querySelector('.content');
    var description = document.querySelector('.' + menuItemName + 'Description');
    var preview = document.querySelector('.panel');
    var h2 = document.querySelector('.' + menuItemName + 'H2');

    var small = {
        setup: function setup() {
            console.log('small setup');
            h2.addEventListener('click', small.onClick);
        },
        teardown: function teardown() {
            console.log("small teardown");
            h2.removeEventListener('click', small.onClick);
        },
        onClick: function onClick() {
            // if (preview.classList.contains(`close`)){
            //     document.body.classList.add(menuItemName)
            //     preview.classList.add(`open`)
            //     preview.classList.remove(`close`)
            // } else {
            //     preview.classList.add(`close`)
            //     preview.classList.remove(`open`)
            //     document.body.classList.remove(menuItemName)
            // }

            // description.classList.remove(`open`)
            h2.appendChild(description);

            if (description.classList.contains('close')) {
                document.body.classList.add(menuItemName);
                description.classList.add('open');
                description.classList.remove('close');
            } else {
                description.classList.add('close');
                document.body.classList.remove(menuItemName);
                description.classList.remove('open');
            }
        }
    };

    var large = {
        setup: function setup() {
            console.log('large setup');
            h2.addEventListener('click', large.onClick);
        },
        teardown: function teardown() {
            console.log('large teardown');
            h2.removeEventListener('click', large.onClick);
        },
        onClick: function onClick() {
            console.log('appending large');
            h2.appendChild(description);

            if (description.classList.contains('close')) {
                document.body.classList.add(menuItemName);
                description.classList.add('open');
                description.classList.remove('close');
            } else {
                description.classList.add('close');
                document.body.classList.remove(menuItemName);
                description.classList.remove('open');
            }
        }
    };

    mql.addListener(function (data) {
        if (data.matches) {
            console.log('mql changed to small');
            large.teardown();
            small.setup();
        } else {
            console.log('mql changed to large');
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
