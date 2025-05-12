const heroSection = document.querySelector('.hero');
const images = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg'
];

let current = 0;

function changeBackground() {
  heroSection.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

setInterval(changeBackground, 4000); // every 4 seconds
window.onload = changeBackground;
