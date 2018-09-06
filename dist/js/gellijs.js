'use strict';

var h2s = document.querySelectorAll('li h2');
var allLIs = document.querySelectorAll('li');

var removeBodyClasses = function removeBodyClasses() {
    document.body.classList.remove('food');
    document.body.classList.remove('bureau');
    document.body.classList.remove('bar');
    document.body.classList.remove('table');
    document.body.classList.remove('location');
    document.body.classList.remove('hours');
};

var closeOtherOpenLIs = function closeOtherOpenLIs() {
    document.querySelectorAll('li.open').forEach(function (otherOpen) {
        otherOpen.classList.remove('preview');
        otherOpen.classList.remove('open');
    });
};

var hideOtherOpenLIs = function hideOtherOpenLIs() {
    allLIs.forEach(function (allLI) {
        allLIs.style.visibility = 'none';
    });
};

h2s.forEach(function (h2) {

    var h2MouseOver = function h2MouseOver() {
        console.log("hover");
        removeBodyClasses();
        document.body.classList.add(this.getAttribute('data-body-class'));
        this.parentElement.classList.add('preview');
        // description.classList.add(`preview`)

        // previewDivs.forEach((previewDiv) => {
        //     previewDiv.classList.add(`preview`)
        //     console.log(previewDivs)
        //     console.log(`i did it`)
        // })
    };
    var h2MouseOut = function h2MouseOut() {
        removeBodyClasses();
        document.body.classList.remove(this.getAttribute('data-body-class'));
        // description.classList.remove(`preview`)
        this.parentElement.classList.remove('preview');

        // previewDivs.forEach((previewDiv) => {
        //     previewDiv.classList.remove(`preview`)
        //     console.log(`i did it`)
        // })
    };

    var h2MouseClick = function h2MouseClick() {

        if (!h2.parentElement.classList.contains('open')) {
            closeOtherOpenLIs();
            h2.parentElement.parentElement.classList.add('a-child-is-open'); // the UL
            h2.parentElement.classList.add('open'); // the LI
            h2.removeEventListener('mouseout', h2MouseOut);
        } else {
            h2.parentElement.parentElement.classList.remove('a-child-is-open'); // the UL
            h2.parentElement.classList.remove('open');
            h2.parentElement.classList.remove('preview');
            h2.addEventListener('mouseout', h2MouseOut);
            document.body.classList.remove(this.getAttribute('data-body-class'));
        }

        // description.classList.add("open");
        // h2.removeEventListener(`mouseover`)
        // h2.removeEventListener(`mouseout`)

        // if (!h2.classList.contains(`open`)){ 
        //     h2.classList.add(`open`);
        //     document.body.classList.add(food)
        //     description.classList.add(open)
        //     console.log(`open`)
        // }  else {
        //     h2.classList.remove(`open`);
        //     description.classList.remove(`open`)
        //     console.log(`close`)
        // }
    };

    h2.addEventListener('mouseover', h2MouseOver);
    h2.addEventListener('mouseout', h2MouseOut);
    h2.addEventListener('click', h2MouseClick);
});

// let hover = function(){
//     console.log("hover")
//     document.body.classList.add(`food`)
//     // preview.display.style = "none"
// }

// let offHover = function(){
//     document.body.classList.remove(`food`)
//     // preview.removeAttribute(`style`)
//     // description.classList.remove(`open`)
//     // h2.classList.remove(`open`);
// }

/*
const mql = window.matchMedia(`(max-width: 640px)`);



let menuItemNames = [
    `food`,
    `bureau`,
    `bar`,
    `table`,
    `location`,
    `hours`
]

const h2 = document.querySelector(`.foodH2`)

h2.addEventListener('mouseover', hover)
h2.addEventListener('mouseout', offHover)


let hover = function(){
    console.log("hover")
    document.body.classList.add(`food`)
    // preview.display.style = "none"
}

let offHover = function(){
    document.body.classList.remove(`food`)
    // preview.removeAttribute(`style`)
    // description.classList.remove(`open`)
    // h2.classList.remove(`open`);
}

const allDescriptions =  document.querySelectorAll(".descriptionDiv");

menuItemNames.forEach(function(menuItemName) {
    
    const theLI = document.querySelector(`li.${menuItemName}`);
    const h2 = theLI.querySelector(`h2`)
    const description = document.querySelector(`.${menuItemName}Description`)
    const preview = document.querySelector(`.${menuItemName}Preview`)

    h2.addEventListener('click', onClick)
    h2.addEventListener('mouseover', hover)
    h2.addEventListener('mouseout', offHover)


//     let hover = function(){
//         console.log("hover")
//         document.body.classList.add(menuItemName)
//         // preview.display.style = "none"
//     }

//     let offHover = function(){
//         document.body.classList.remove(menuItemName)
//         // preview.removeAttribute(`style`)
//         description.classList.remove(`open`)
//         h2.classList.remove(`open`);
//     }



    // let small = {
    //     setup: function() {
    //         console.log(`small setup`)
    //         h2.addEventListener(`click`, small.onClick);
    //     },
    //     teardown: function() {
    //         console.log("small teardown")
    //         h2.removeEventListener(`click`, small.onClick);
    //     },
    //     onClick: function() { 
    //         h2.appendChild(description)
    //         description.classList.add("open");
    //         small.clearSpecialClassOnBody()
    //         small.onlyShowOnePanel()
            
    //         if (!h2.classList.contains(`open`)){ 
    //             h2.classList.add(`open`);
    //             document.body.classList.add(menuItemName)
    //             description.classList.add(`open`)
    //             console.log(`open`)
    //         }  else {
    //             h2.classList.remove(`open`);
    //             description.classList.remove(`open`)
    //             console.log(`close`)
    //         }
    
    //     },

    //     clearSpecialClassOnBody: function() {
    //         menuItemNames.forEach((itemName) => {
    //             document.body.classList.remove(itemName)
    //         })
    //     },
    //     onlyShowOnePanel: function(e){
    //         allDescriptions.forEach(function(el) {
    //             el.classList.remove("open");
    //         });
    //         console.log(description)
    //     }
    // }
        

    //     onClick: function() { 
    //         h2.appendChild(description)
    //         description.classList.add("open");
    //         large.clearSpecialClassOnBody()
            
    //         if (!h2.classList.contains(`open`)){ 
    //             h2.classList.add(`open`);
    //             // preview.classList.add(`open`);
    //             document.body.classList.add(menuItemName)
    //             description.classList.add(`open`)
    //             console.log(`open`)

    //             theLI.removeEventListener('mouseover', large.hover)
    //             theLI.removeEventListener('mouseout', large.offHover)


    //         }  else {
    //             h2.classList.remove(`open`);
    //             // preview.classList.remove(`open`);
    //             description.classList.remove(`open`)
    //             console.log(`close`)
    //             console.log(preview)

    //             theLI.addEventListener('mouseover', large.hover)
    //             theLI.addEventListener('mouseout', large.offHover)
                
    //         }
    
    //     },

    //     clearSpecialClassOnBody: function() {
    //         menuItemNames.forEach((itemName) => {
    //             document.body.classList.remove(itemName)
    //         })
    //     },
    //     onlyShowOnePanel: function(e){
    //         allDescriptions.forEach(function(el) {
    //             el.classList.remove("open");
    //         });
    //         console.log(description)
    //     },

    //     // notDisplayingPreview: function() {
    //     //     previews.forEach((preview) => {
    //     //         document.body.classList.remove(itemName)
    //     //     })
    //     // },
    // }

    // mql.addListener(function(data) {
    //     if (data.matches) {
    //         console.log(`mql changed to small`)
    //         large.teardown()
    //         small.setup()
    //     } else {
    //         console.log(`mql changed to large`)
    //         small.teardown()
    //         large.setup()
    //     }
    // })

    // if (mql.matches) {
    //     small.setup()

    // } else {
    //     large.setup()
    // }   
    
})

*/
//# sourceMappingURL=gellijs.js.map
