// window.addEventListener('resize', function(){
const mql = window.matchMedia("(max-width: 640px)");

const content = document.querySelector('.content');
const dinner = document.querySelector('.dinner');
// const dinnerDescription = document.querySelector('#dinnerDescription');
const dinnerDescription = document.querySelector('.dinnerDescription');
const dinnerPreview = document.querySelector('.panel');
const dinnerDash = document.querySelector('.nav-dash.dinner');
const dinnerH2 = document.querySelector('.dinnerH2') ;
// var item3 = document.getElementById('item3');
// var item4 = document.getElementById('item4');

let small = {
    setup: function() {
        console.log("small setup")
        dinnerH2.addEventListener('click', small.onClick);
    },
    teardown: function() {
        console.log("small teardown")
        dinnerH2.removeEventListener('click', small.onClick);
    },
    onClick: function() { 
        if (dinnerPreview.classList.contains("close")){
            dinnerPreview.classList.add("open");
            dinnerPreview.classList.remove("close");
        } else {
            dinnerPreview.classList.add("close");
            dinnerPreview.classList.remove("open");
        }

        dinnerDescription.classList.remove(`open`)
    }
}
    
let large = {
    setup: function() {
        console.log("large setup")
        dinnerH2.addEventListener('click', large.onClick)
    },
    teardown: function() {
        console.log("large teardown")
        dinnerH2.removeEventListener('click', large.onClick)
    },
    onClick: function() {
        console.log(`not appending large`)
        dinnerH2.appendChild(dinnerDescription)

        if (dinnerDescription.classList.contains("close")){
            dinnerDescription.classList.add("open");
            dinnerDescription.classList.remove("close");
        } else {
            dinnerDescription.classList.add("close");
            dinnerDescription.classList.remove("open");
        }
    }
};


mql.addListener(function(data) {
    if (data.matches) {
        console.log("mql changed to small")
        large.teardown()
        small.setup()
    } else {
        console.log("mql changed to large")
        small.teardown()
        large.setup()
    }
})

if (mql.matches) {
    small.setup()

} else {
    large.setup()
}   
// });