const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.swiper-slide');
let index = 0;

function moveCarousel() {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 5000); // cada 5 segundos