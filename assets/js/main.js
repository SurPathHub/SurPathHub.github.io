
 // Nav button hide     
 var links = document.querySelectorAll('.nav__list');
 var linksLength = links.length
 
 for(var i = 0; i < linksLength; i++) {
   links[i].addEventListener('click', function() {
     document.getElementById('check').checked = false;
   });
 }

 var links1 = document.querySelectorAll('.nav-brand');
 var linksLength1 = links1.length
 
 for(var j = 0; j < linksLength1; j++) {
   links1[j].addEventListener('click', function() {
     document.getElementById('check').checked = false;
   });
 }


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

