/* Top nav hamburger */
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function () {
    console.log(navLinks.style.display);
    navLinks.style.display = (navLinks.style.display == 'none' || navLinks.style.display == '') ? 'flex' : 'none';
  });
}