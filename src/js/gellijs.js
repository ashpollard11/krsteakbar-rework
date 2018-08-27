let dinnerNav = document.querySelector(`.dinner`)
let navLI = document.querySelectorAll(`nav li`)
let phoneNumberDiv = document.querySelector(".phone-number")
let reservationsDiv = document.querySelector(".reservations")


dinnerNav.addEventListener(`click`, function(){
    document.body.classList.toggle(`dinnerBG`)
    phoneNumberDiv.classList.toggle(`dinnerBodyCopy`)
    reservationsDiv.classList.toggle(`dinnerBodyCopy`)
    // bodyCopy.classList.toggle(`dinnerBodyCopy`)
    dinnerNav.classList.toggle(`dinner-highlight`)
})