document.addEventListener('DOMContentLoaded', function () {
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  if (ham && mob) {
    ham.addEventListener('click', () => mob.classList.toggle('open'));
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));
  }
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });
  window.openModal = id => { document.getElementById(id).classList.add('active'); document.body.style.overflow = 'hidden'; };
  window.closeModal = id => { document.getElementById(id).classList.remove('active'); document.body.style.overflow = 'auto'; };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active')); document.body.style.overflow = 'auto'; }
  });
  const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
