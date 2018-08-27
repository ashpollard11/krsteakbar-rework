let dinnerNav = document.querySelector(`.dinner`)


dinnerNav.addEventListener(`click`, function(){
    document.body.classList.toggle('dinnerBG')
    dinnerNav.classList.toggle('dinner-highlight')
})