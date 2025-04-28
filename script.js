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

// Adding click animation effect
const body = document.querySelector('body');
body.addEventListener('click', function(e) {
  const clickEffect = document.createElement('div');
  clickEffect.classList.add('click-effect');
  clickEffect.style.width = '100px';
  clickEffect.style.height = '100px';
  clickEffect.style.left = `${e.clientX - 50}px`;
  clickEffect.style.top = `${e.clientY - 50}px`;
  body.appendChild(clickEffect);

  setTimeout(() => {
    clickEffect.remove();
  }, 500);
});
