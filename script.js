// Smooth Scroll for Navigation Links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Adding click animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button =>
