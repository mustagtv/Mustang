// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Measuring-tape scroll progress
const tape = document.querySelector('.tape');
function updateTape(){
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (scrolled / max) * 100 : 0;
  tape.style.setProperty('--scrollX', pct + '%');
}
document.addEventListener('scroll', updateTape, { passive: true });
updateTape();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
