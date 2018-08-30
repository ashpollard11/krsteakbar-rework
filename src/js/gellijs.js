
const mql = window.matchMedia(`(max-width: 640px)`);



let menuItemNames = [
    `food`,
    `bureau`,
    `bar`,
    `table`,
    `location`,
    `hours`
]


menuItemNames.forEach(function(menuItemName) {
        
    const content = document.querySelector(`.content`);
    const description = document.querySelector(`.${menuItemName}Description`)
    const preview = document.querySelector(`.preview`)
    const h2 = document.querySelector(`.${menuItemName}H2`)

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

            
            if (description.classList.contains(`close`)){
                document.body.classList.add(menuItemName)
                description.classList.add(`open`)
                description.classList.remove(`close`)
            } else {
                description.classList.add(`close`)
                document.body.classList.remove(menuItemName)
                description.classList.remove(`open`)
            }
        }
    }
        
    let large = {
        setup: function() {
            console.log(`large setup`)
            h2.addEventListener('mouseover', large.hover)
            h2.addEventListener('mouseout', large.offHover)
            h2.addEventListener('click', large.onClick)
        },
        teardown: function() {
            console.log(`large teardown`)
            h2.removeEventListener('mouseover', large.hover)
            h2.removeEventListener('mouseout', large.offHover)
            h2.removeEventListener('click', large.onClick)
            
        },
        onClick: function() {
            console.log(`appending large`)
            h2.appendChild(description)


            if (description.classList.contains(`close`)){
                document.body.classList.add(menuItemName)
                h2.removeEventListener('mouseout', large.offHover)
                h2.removeEventListener('mouseover', large.hover)
                description.classList.add(`open`)
                description.classList.remove(`close`)
            } else {
                description.classList.add(`close`)
                document.body.classList.remove(menuItemName)
                description.classList.remove(`open`)
                // h2.addEventListener('mouseout', large.offHover)
                // h2.addEventListener('mouseover', large.hover)
            }
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