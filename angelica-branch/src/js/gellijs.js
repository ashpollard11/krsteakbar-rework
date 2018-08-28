let dinnerNav = document.querySelector(`.dinner`)
let navLIs = document.querySelectorAll(`nav a`)
let phoneNumberDiv = document.querySelector(".phone-number")
let reservationsDiv = document.querySelector(".reservations")
let krfooterDiv = document.querySelector(".kr-footer")


dinnerNav.addEventListener(`click`, function(){
    document.body.classList.toggle(`dinnerBG`)
    phoneNumberDiv.classList.toggle(`dinnerBodyCopy`)
    reservationsDiv.classList.toggle(`dinner-highlight`)
    krfooterDiv.classList.toggle(`dinnerBodyCopy`)
    const panel = document.querySelector(".panel")

    navLIs.forEach(function(navLi){
        navLi.classList.toggle(`dinner-highlight-others`)
    })
    dinnerNav.classList.toggle(`dinner-highlight`)

    if (panel.classList.contains("close")){
        panel.classList.add("open");
        panel.classList.remove("close");
    } else {
        panel.classList.add("close");
        panel.classList.remove("add");
    }
})