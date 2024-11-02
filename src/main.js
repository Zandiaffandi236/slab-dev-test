import ScrollReveal from 'scrollreveal';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container')

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

ScrollReveal().reveal('.nav-brand', {
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


const navbar = document.querySelector('#navbar');
const hamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu');

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) { // Jika scroll lebih dari 10px
      navbar.classList.add('scrolled'); // Tambahkan kelas 'scrolled'
  } else {
      navbar.classList.remove('scrolled'); // Hapus kelas 'scrolled' jika scroll kembali ke atas
  }
});

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

offScreenMenu.addEventListener('click', () => {
  hamMenu.classList.remove('active');
  offScreenMenu.classList.remove('active');
})
