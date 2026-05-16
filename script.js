// Reset to the top on reload instead of letting the browser restore the
// content container's previous scroll position over our own reset.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const tabs = document.querySelectorAll('.nav-btn[data-target]');
const pages = document.querySelectorAll('.page');
const content = document.querySelector('.content');
const valid = new Set([...pages].map(p => p.id));

// The hash is prefixed (e.g. #/projects) so it never equals a section's id;
// otherwise the browser would scroll that section into view on a hard load.
function hashTarget() {
  return location.hash.replace(/^#\/?/, '');
}

function show(target, { push = true } = {}) {
  if (!valid.has(target)) target = 'about';

  pages.forEach(p => p.classList.toggle('hidden', p.id !== target));

  tabs.forEach(t => {
    const active = t.dataset.target === target;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
    t.tabIndex = active ? 0 : -1;
  });

  if (content) content.scrollTo(0, 0);
  window.scrollTo(0, 0);

  if (push && hashTarget() !== target) {
    history.pushState({ target }, '', '#/' + target);
  }
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => show(tab.dataset.target));
  tab.addEventListener('keydown', e => {
    let next;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;
    e.preventDefault();
    tabs[next].focus();
    show(tabs[next].dataset.target);
  });
});

window.addEventListener('popstate', () => {
  show(hashTarget() || 'about', { push: false });
});

// Honor a deep link (e.g. /#/projects) on first load without pushing history.
show(hashTarget() || 'about', { push: false });
