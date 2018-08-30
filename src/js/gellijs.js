// window.addEventListener('resize', function(){
const mql = window.matchMedia(`(max-width: 640px)`);



let menuItemNames = [
    `food`,
    // "bureau",
    // "bar"
]


menuItemNames.forEach(function(menuItemName) {
        
    const content = document.querySelector(`.content`);
    const description = document.querySelector(`.${menuItemName}Description`)
    const preview = document.querySelector(`.panel`)
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
            if (preview.classList.contains(`close`)){
                document.body.classList.add(menuItemName)
                preview.classList.add(`open`)
                preview.classList.remove(`close`)
            } else {
                preview.classList.add(`close`)
                preview.classList.remove(`open`)
                document.body.classList.remove(menuItemName)
            }

            description.classList.remove(`open`)
        }
    }
        
    let large = {
        setup: function() {
            console.log(`large setup`)
            h2.addEventListener('click', large.onClick)
        },
        teardown: function() {
            console.log(`large teardown`)
            h2.removeEventListener('click', large.onClick)
        },
        onClick: function() {
            console.log(`appending large`)
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