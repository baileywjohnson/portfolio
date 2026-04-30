const buttons = document.querySelectorAll('.nav-btn[data-target]');
const pages = document.querySelectorAll('.page');
const content = document.querySelector('.content');

function show(target) {
  pages.forEach(p => p.classList.toggle('hidden', p.id !== target));
  buttons.forEach(b => b.classList.toggle('active', b.dataset.target === target));
  if (content) content.scrollTo(0, 0);
  window.scrollTo(0, 0);
}

buttons.forEach(b => {
  b.addEventListener('click', () => show(b.dataset.target));
});
