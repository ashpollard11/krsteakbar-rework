
let navLIs = document.querySelectorAll(`nav a`)
let phoneNumberDiv = document.querySelector(".phone-number")
let reservationsDiv = document.querySelector(".reservations")
let krfooterDiv = document.querySelector(".kr-footer")

let dinnerNav = document.querySelector(`.dinner`)
let bureauNav = document.querySelector(`.bureau`)


dinnerNav.addEventListener(`click`, function(){
    document.body.classList.toggle(`dinnerBG`)
    phoneNumberDiv.classList.toggle(`dinnerBodyCopy`)
    reservationsDiv.classList.toggle(`dinner-highlight`)
    krfooterDiv.classList.toggle(`dinnerBodyCopy`)
    const panel = document.querySelector(".dinner-mobile")

    navLIs.forEach(function(navLI){
        navLI.removeAttribute(`class`)
        navLI.classList.toggle(`dinner-highlight-others`)
    })
    dinnerNav.classList.toggle(`dinner-highlight`)

    if (panel.classList.contains("close")){
        panel.classList.add("open");
        panel.classList.remove("close");
    } else {
        panel.classList.add("close");
        panel.classList.remove("open");
    }
})

bureauNav.addEventListener(`click`, function(){
    document.body.classList.toggle(`bureauBG`)
    phoneNumberDiv.classList.toggle(`bureauBodyCopy`)
    reservationsDiv.classList.toggle(`bureau.highlight`)
    krfooterDiv.classList.toggle(`dinnerBodyCopy`)
    const panel = document.querySelector(".bureau-mobile")


    if (panel.classList.contains("close")){
        panel.classList.add("open");
        panel.classList.remove("close");
    } else {
        panel.classList.add("close");
        panel.classList.remove("open");
    }

    navLIs.forEach(function(navLI){
        navLI.removeAttribute(`class`)
        navLI.classList.toggle(`bureau-highlight-others`)
    })
    bureauNav.classList.toggle(`bureau-highlight`)
})