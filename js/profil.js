// Hex skill hover via GSAP
document.querySelectorAll('.hex-item').forEach(hex => {
  hex.addEventListener('mouseenter', () => gsap.to(hex, { scale: 1.12, duration: 0.2, ease: 'power2.out' }));
  hex.addEventListener('mouseleave', () => gsap.to(hex, { scale: 1,    duration: 0.2, ease: 'power2.out' }));
});

// Counters
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) {
    document.querySelectorAll('.counter').forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const start = performance.now();
      (function upd(ts) {
        const p = Math.min((ts - start) / 1600, 1);
        counter.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(upd);
      })(performance.now());
    });
    counterObserver.unobserve(e.target);
  }});
}, { threshold: 0.3 });
document.querySelectorAll('.counter-box').forEach(b => counterObserver.observe(b));

// Soft skill hover glow via GSAP
document.querySelectorAll('.soft-skill-card').forEach(card => {
  card.addEventListener('mouseenter', () => gsap.to(card, { scale: 1.05, duration: 0.25, ease: 'power2.out' }));
  card.addEventListener('mouseleave', () => gsap.to(card, { scale: 1,    duration: 0.25, ease: 'power2.out' }));
});