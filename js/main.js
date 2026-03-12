AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
gsap.registerPlugin(ScrollTrigger);

// Active nav link
(function() {
  const fn = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === (fn === '' ? 'index.html' : fn)) l.classList.add('active');
  });
})();

// Navbar scroll + scroll-top btn
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  navbar.classList.toggle('scrolled', sy > 60);
  if (sy > 400) { scrollTopBtn.classList.remove('opacity-0','pointer-events-none'); scrollTopBtn.classList.add('opacity-100'); }
  else          { scrollTopBtn.classList.add('opacity-0','pointer-events-none'); scrollTopBtn.classList.remove('opacity-100'); }
});

// Burger menu
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  burgerBtn.querySelector('i').classList.toggle('fa-bars');
  burgerBtn.querySelector('i').classList.toggle('fa-times');
});
mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burgerBtn.querySelector('i').className = 'fas fa-bars text-xl';
}));

// Cursor glow
const cg = document.createElement('div');
cg.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(220,255,80,0.05)0%,transparent 70%);transform:translate(-50%,-50%);transition:all 0.1s ease;';
document.body.appendChild(cg);
document.addEventListener('mousemove', e => { cg.style.left = e.clientX+'px'; cg.style.top = e.clientY+'px'; });