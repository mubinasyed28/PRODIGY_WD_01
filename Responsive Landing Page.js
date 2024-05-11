window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#444'; // Darker background color on scroll
  } else {
      navbar.style.backgroundColor = 'hwb(0 95% 3%)'; // Revert to original color when scrolled back to the top
  }
});
