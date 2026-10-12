const nav = window.COACH_NAV || [];
const base = window.COACH_BASE || '/coach-docs/';
const categories = ['الإعدادات العامة', 'الخيارات المشتركة', 'مكوّنات الصفحة الرئيسية'];
const side = document.querySelector('#sidebar-nav');
const search = document.querySelector('#search');
const menu = document.querySelector('#menu');
const aside = document.querySelector('aside');
const normalize = text => text.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670ـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي');
let entries = nav;
let indexPromise;
const escapeHTML = text => text.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const status = document.createElement('p');
status.className = 'search-status';
status.setAttribute('role', 'status');
search.after(status);
function paint(q = '') {
  const words = normalize(q.trim()).split(/\s+/).filter(Boolean);
  const matches = entries.filter(entry => words.every(word => normalize(entry.title + ' ' + (entry.text || '')).includes(word)));
  side.innerHTML = categories.map(category => {
    const items = matches.filter(entry => entry.category === category);
    if (!items.length) return '';
    return '<div class="navtitle">' + category + ' (' + items.length.toLocaleString('ar') + ')</div>' + items.map(entry => '<a ' + (window.COACH_SLUG === entry.slug ? 'class="active" aria-current="page" ' : '') + 'href="' + base + 'docs/' + entry.slug + '/">' + escapeHTML(entry.title) + '</a>').join('');
  }).join('');
  status.textContent = words.length ? (matches.length ? matches.length.toLocaleString('ar') + ' نتيجة' : 'لا توجد نتائج. جرّب كلمة أخرى.') : '';
}
paint();
search.addEventListener('input', async () => {
  paint(search.value);
  if (!indexPromise) indexPromise = fetch(base + 'search-index.json').then(response => {
    if (!response.ok) throw Error('search');
    return response.json();
  }).then(data => { entries = data; }).catch(() => {
    indexPromise = null;
    status.textContent = 'تعذّر تحميل البحث في الشروحات. البحث في العناوين متاح.';
  });
  await indexPromise;
  paint(search.value);
});
aside.id = 'documentation-menu';
menu.setAttribute('aria-controls', aside.id);
menu.setAttribute('aria-expanded', 'false');
const backdrop = document.createElement('button');
backdrop.className = 'menu-backdrop';
backdrop.setAttribute('aria-label', 'إغلاق القائمة');
backdrop.tabIndex = -1;
document.body.append(backdrop);
function setMenu(open) {
  aside.classList.toggle('show', open);
  document.body.classList.toggle('menu-open', open);
  menu.setAttribute('aria-expanded', String(open));
}
menu.addEventListener('click', () => setMenu(!aside.classList.contains('show')));
backdrop.addEventListener('click', () => setMenu(false));
const box = document.querySelector('.lightbox');
box.setAttribute('aria-modal', 'true');
let previousFocus;
function closeImage() {
  box.classList.remove('open');
  document.body.classList.remove('image-open');
  previousFocus?.focus();
}
function openImage(image) {
  previousFocus = image;
  box.querySelector('img').src = image.src;
  box.querySelector('img').alt = image.alt;
  box.classList.add('open');
  document.body.classList.add('image-open');
  box.querySelector('button').focus();
}
document.querySelectorAll('.article img').forEach(image => {
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', 'تكبير: ' + image.alt);
  image.addEventListener('click', () => openImage(image));
  image.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openImage(image); }
  });
});
box.addEventListener('click', event => {
  if (event.target === box || event.target.closest('button')) closeImage();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { if (box.classList.contains('open')) closeImage(); setMenu(false); }
  if (event.key === 'Tab' && box.classList.contains('open')) { event.preventDefault(); box.querySelector('button').focus(); }
});
const toc = document.querySelector('#toc-links');
if (toc) {
  const headings = [...document.querySelectorAll('.article h2,.article h3,.hero ~ h2')];
  toc.innerHTML = headings.map((heading, index) => {
    heading.id ||= 'heading-' + index;
    return '<a href="#' + heading.id + '">' + escapeHTML(heading.textContent) + '</a>';
  }).join('');
  const target = document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView();
}
