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
buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.98)';
  });

  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });
});

// Parallax Effect for Hero Section
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  // Parallax effect: Move content vertically at different speed
  heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;

  // Fade-in effect when hero section is in view
  if (scrollPosition > heroSection.offsetTop - 300) {
    heroContent.style.opacity = 1;
  } else {
    heroContent.style.opacity = 0.5;
  }
});

// Custom Cursor Effect
const customCursor = document.createElement('div');
customCursor.style.position = 'absolute';
customCursor.style.width = '30px';
customCursor.style.height = '30px';
customCursor.style.borderRadius = '50%';
customCursor.style.backgroundColor = '#ff7b00';
customCursor.style.pointerEvents = 'none';
customCursor.style.zIndex = '9999';
document.body.appendChild(customCursor);

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX - customCursor.offsetWidth / 

