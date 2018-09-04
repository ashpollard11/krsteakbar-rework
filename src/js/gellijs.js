
const mql = window.matchMedia(`(max-width: 640px)`);



let menuItemNames = [
    `food`,
    `bureau`,
    `bar`,
    `table`,
    `location`,
    `hours`
]


const allDescriptions =  document.querySelectorAll(".descriptionDiv");

menuItemNames.forEach(function(menuItemName) {
    
    const theLI = document.querySelector(`li.${menuItemName}`);
    const h2 = theLI.querySelector(`h2`)
    let description = document.querySelector(`.${menuItemName}Description`)

    let small = {
        setup: function() {
            console.log(`small setup`)
            h2.addEventListener(`click`, small.onClick);
        },
        teardown: function() {
            console.log("small teardown")
            h2.removeEventListener(`click`, small.onClick);
        },
        onClick: function(e) { 
            h2.appendChild(description)
            // small.clearSpecialClass(e)
            small.onlyShowOnePanel(e)
            console.log(e.target)
            
            if (e.target.classList.contains(`open`)){
                small.clearSpecialClassOnBody(e)
                document.body.classList.remove(menuItemName)
                description.classList.remove(`open`)
                e.target.classList.remove(`open`)
                console.log(`closing it`)
            } else {
                console.log(description)
                small.clearSpecialClassOnBody(e)
                document.body.classList.add(menuItemName)
                // description.classList.add(`open`)
                // e.target.classList.add(`open`)
            }
                
        },
        clearSpecialClassOnBody: function() {
            menuItemNames.forEach((itemName) => {
                document.body.classList.remove(itemName)
            })
        },
        onlyShowOnePanel: function(e){
            allDescriptions.forEach(function(el) {
                el.classList.remove("open")
            });
            // e.target.classList.add(`open`)
            e.target.classList.add(`open`)
            
        },
    }
        


    let large = {
        setup: function() {
            console.log(`large setup`)
            theLI.addEventListener('mouseover', large.hover)
            theLI.addEventListener('mouseout', large.offHover)
            h2.addEventListener('click', large.onClick)
        },
        teardown: function() {
            console.log(`large teardown`)
            theLI.removeEventListener('mouseover', large.hover)
            theLI.removeEventListener('mouseout', large.offHover)
            h2.removeEventListener('click', large.onClick)
            
        },
        onClick: function(e) { 
            console.log("large.onclick")
            document.querySelector("nav").style.display = "none";
            description.classList.add("open")
        },
        clearSpecialClassOnBody: function() {
            menuItemNames.forEach((itemName) => {
                document.body.classList.remove(itemName)
            })
        },
        onlyShowOnePanel: function(e){
            allDescriptions.forEach(function(el) {
                el.classList.remove("open");
            });
            e.nextElementSibling.className = "open";
        },

        hover: function(){
            document.body.classList.add(menuItemName)
        },
        offHover: function(){
            document.body.classList.remove(menuItemName)
        }
    };


    mql.addListener(function(data) {
        if (data.matches) {
            console.log(`mql changed to small`)
            large.teardown()
            small.setup()
        } else {
            console.log(`mql changed to large`)
            small.teardown()
            large.setup()
        }
    })

    if (mql.matches) {
        small.setup()

    } else {
        large.setup()
    }   
    
})