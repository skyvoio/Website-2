document.querySelector('.cta-button').addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#contact');
  target.scrollIntoView({ behavior: 'smooth' });
});