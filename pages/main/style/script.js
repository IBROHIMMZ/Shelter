const btn = document.querySelector('.katrine');
const exit = document.querySelector('.mc__card-exit')

btn.addEventListener('click', function(){
    modalContainer.classList.add('active')
})

window.addEventListener('click', (event) => {
    if (event.target == modalContainer) {
        modalContainer.classList.remove('active')
    }
})
document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
        modalContainer.classList.remove('active')
    }
})
exit.addEventListener ('click', () => {
    modalContainer.classList.remove('active')
})

const btn2 = document.querySelector('.jennifer');
const modalContainer2 = document.querySelector('.modal__container2');
const exit2 = document.querySelector('.mc__card-exit2')

btn2.addEventListener('click', function(){
    modalContainer2.classList.add('active')
})

window.addEventListener('click', (event) => {
    if (event.target == modalContainer2) {
        modalContainer2.classList.remove('active')
    }
})
document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
        modalContainer2.classList.remove('active')
    }
})
exit2.addEventListener ('click', () => {
    modalContainer2.classList.remove('active')
})

const btn3 = document.querySelector('.woody');
const modalContainer3 = document.querySelector('.modal__container3');
const exit3 = document.querySelector('.mc__card-exit3')

btn3.addEventListener('click', function(){
    modalContainer3.classList.add('active')
})

window.addEventListener('click', (event) => {
    if (event.target == modalContainer3) {
        modalContainer3.classList.remove('active')
    }
})
document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
        modalContainer3.classList.remove('active')
    }
})
exit3.addEventListener ('click', () => {
    modalContainer3.classList.remove('active')
})
