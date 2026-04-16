const galeria = document.querySelector('.galeria');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');

btnDir.addEventListener('click', () => {
  galeria.scrollBy({ left: 300, behavior: 'smooth' });
});

btnEsq.addEventListener('click', () => {
  galeria.scrollBy({ left: -300, behavior: 'smooth' });
});
