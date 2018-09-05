
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
    const description = document.querySelector(`.${menuItemName}Description`)
    const preview = document.querySelector(`.preview`)

    let small = {
        setup: function() {
            console.log(`small setup`)
            h2.addEventListener(`click`, small.onClick);
        },
        teardown: function() {
            console.log("small teardown")
            h2.removeEventListener(`click`, small.onClick);
        },
        onClick: function() { 
            h2.appendChild(description)
            description.classList.add("open");
            small.clearSpecialClassOnBody()
            
            if (!h2.classList.contains(`open`)){ 
                h2.classList.add(`open`);
                document.body.classList.add(menuItemName)
                description.classList.add(`open`)
                console.log(`open`)
            }  else {
                h2.classList.remove(`open`);
                description.classList.remove(`open`)
                console.log(`close`)
            }
    
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
            console.log(description)
        }
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
        onClick: function() { 
            h2.appendChild(description)
            description.classList.add("open");
            large.clearSpecialClassOnBody()
            
            if (!h2.classList.contains(`open`)){ 
                h2.classList.add(`open`);
                document.body.classList.add(menuItemName)
                description.classList.add(`open`)
                console.log(`open`)
                preview.style.display = "none"
            }  else {
                h2.classList.remove(`open`);
                description.classList.remove(`open`)
                console.log(`close`)
                preview.removeAttribute(`style`)
            }
    
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
            console.log(description)
        },

        hover: function(){
            document.body.classList.add(menuItemName)
        },
        offHover: function(){
            document.body.classList.remove(menuItemName)
            preview.removeAttribute(`style`)
            description.classList.remove(`open`)
            h2.classList.remove(`open`);
        }
    }

    let onClick = function(){
        h2.appendChild(description)
        description.classList.add("open");
        small.clearSpecialClassOnBody()
        
        if (!h2.classList.contains(`open`)){ 
            h2.classList.add(`open`);
            document.body.classList.add(menuItemName)
            description.classList.add(`open`)
            console.log(`open`)
        }  else {
            h2.classList.remove(`open`);
            description.classList.remove(`open`)
            console.log(`close`)
        }
    }


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