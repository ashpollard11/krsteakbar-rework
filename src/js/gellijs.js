const mql = window.matchMedia(`(max-width: 640px)`);

const h2s = document.querySelectorAll(`.main-content h2`)
const allLIs = document.querySelectorAll(`.main-content li`)

let removeBodyClasses = function() {
    document.body.classList.remove( `food` )
    document.body.classList.remove( `bureau` )
    document.body.classList.remove( `bar` )
    document.body.classList.remove( `table` )
    document.body.classList.remove( `location` )
    document.body.classList.remove( `hours` )
}

let closeOtherOpenLIs = function() {
    document.querySelectorAll(`.main-content li.open`).forEach(function(otherOpen) {
        otherOpen.classList.remove('preview')
        otherOpen.classList.remove('open')
    })
}

let hideOtherOpenLIs = function() {
    allLIs.forEach(function(allLI) {
        allLIs.style.visibility = `none`
    })
}


h2s.forEach(function(h2) {

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
            removeBodyClasses();
            // small.onlyShowOnePanel(e)
            document.body.classList.add( this.getAttribute('data-body-class') )
            
            if (!h2.parentElement.classList.contains(`preview`)){ 
                closeOtherOpenLIs()
                h2.parentElement.classList.add(`preview`)
                h2.parentElement.classList.add(`open`)

                // description.classList.add(`open`)
                console.log(`open`)
            }  else {
                h2.parentElement.classList.remove(`preview`)
                h2.parentElement.classList.remove(`open`)
                console.log(`close`)
            }
        },
    }
    
        


    let large = {
        setup: function() {
            console.log(`large setup`)
            h2.addEventListener('mouseover', large.h2MouseOver)
            h2.addEventListener('mouseout', large.h2MouseOut)
            h2.addEventListener('click', large.h2MouseClick)
        },
        teardown: function() {
            console.log(`large teardown`)
            h2.removeEventListener('mouseover', large.h2MouseOver)
            h2.removeEventListener('mouseout', large.h2MouseOut)
            h2.removeEventListener('click', large.h2MouseClick)
            
        },
        h2MouseClick: function() { 
            if (!h2.parentElement.classList.contains(`open`)) {
                closeOtherOpenLIs()
                h2.parentElement.parentElement.classList.add(`a-child-is-open`) // the UL
                h2.parentElement.classList.add(`open`) // the LI
                h2.removeEventListener('mouseout', large.h2MouseOut)
                
                
            } else {
                h2.parentElement.parentElement.classList.remove(`a-child-is-open`) // the UL
                h2.parentElement.classList.remove(`open`)
                h2.parentElement.classList.remove(`preview`)
                h2.addEventListener('mouseout', large.h2MouseOut)
                document.body.classList.remove( this.getAttribute('data-body-class') )
                
            }
    
        },
        
        h2MouseOver: function(){
            console.log("hover")
            removeBodyClasses();
            document.body.classList.add( this.getAttribute('data-body-class') )
            this.parentElement.classList.add(`preview`)

        },
        h2MouseOut: function(){
            removeBodyClasses();
            document.body.classList.remove( this.getAttribute('data-body-class') )
            this.parentElement.classList.remove(`preview`)
        },
    }

    mql.addListener(function(data) {
        if (data.matches) {
            console.log(`mql changed to small`)
            h2.parentElement.parentElement.classList.remove(`a-child-is-open`)
            large.teardown()
            small.setup()
        } else {
            console.log(`mql changed to large`)
            h2.parentElement.classList.remove(`preview`)
            h2.parentElement.classList.remove(`open`)
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