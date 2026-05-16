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

// --- WebMCP: expose this site's real actions to in-browser agents ---
// Progressive enhancement: only runs where navigator.modelContext exists.
// Every tool maps to data/behavior that's actually on this page.
(function registerAgentTools() {
  const mc = navigator.modelContext;
  if (!mc) return;

  const text = value => ({
    content: [{ type: 'text', text: typeof value === 'string' ? value : JSON.stringify(value, null, 2) }]
  });
  const noInput = { type: 'object', properties: {}, additionalProperties: false };

  const tools = [
    {
      name: 'list_projects',
      description: "List Bailey Johnson's portfolio projects with their descriptions, links, and tech tags.",
      inputSchema: noInput,
      execute: async () => text([...document.querySelectorAll('.project')].map(p => ({
        name: p.querySelector('.project-title')?.textContent.trim(),
        description: p.querySelector('p')?.textContent.trim(),
        links: [...p.querySelectorAll('.project-btn')].map(a => ({ label: a.textContent.trim(), url: a.href })),
        tags: [...p.querySelectorAll('.project-tag')].map(t => t.textContent.trim())
      })))
    },
    {
      name: 'get_contact',
      description: "Get Bailey Johnson's contact links: email, GitHub, and LinkedIn.",
      inputSchema: noInput,
      execute: async () => text({
        email: 'baileywjohnson@gmail.com',
        github: 'https://github.com/baileywjohnson',
        linkedin: 'https://www.linkedin.com/in/baileywjohnson/'
      })
    },
    {
      name: 'get_resume',
      description: "Get the URL of Bailey Johnson's resume (PDF).",
      inputSchema: noInput,
      execute: async () => text('https://baileyjohnson.io/assets/resume.pdf')
    },
    {
      name: 'show_section',
      description: "Switch the visible portfolio section. 'about' = bio and career history; 'projects' = project list.",
      inputSchema: {
        type: 'object',
        properties: { section: { type: 'string', enum: ['about', 'projects'] } },
        required: ['section'],
        additionalProperties: false
      },
      execute: async (params) => {
        const args = params && (params.arguments || params) || {};
        const section = args.section === 'projects' ? 'projects' : 'about';
        show(section);
        return text(`Now showing the "${section}" section.`);
      }
    }
  ];

  if (typeof mc.registerTool === 'function') tools.forEach(t => mc.registerTool(t));
  else if (typeof mc.provideContext === 'function') mc.provideContext({ tools });
})();
