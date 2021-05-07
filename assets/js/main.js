/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})


/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerHeight - e.pageY * speed) / 120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== SCROLL  REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '2000',
    reset: true
});


// sr.reveal(`.home__data, .home__img, .about__img,
//             .about__subtitle, .about__profession, .about__text, .about__social,
//             .team__card, .team__content,
//             .card__image, .content,
//             .card-join, .card__join,
//             .footer__content, .footer__copy`, {
//     interval: 200
// })