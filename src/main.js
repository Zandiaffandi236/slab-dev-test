import ScrollReveal from 'scrollreveal';

var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  speed: 4000,
  freeMode: true,
  allowTouchMode: false,
  autoplay: {
    delay: 0,
  },
});

// Contoh penggunaan ScrollReveal
ScrollReveal().reveal('.nav-item', {
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  origin: 'top',
  interval: 100  //
})

ScrollReveal().reveal('.hero-reveal', {
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 100  //
})

ScrollReveal().reveal('#partners', {
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 100  //
})



const hamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})
