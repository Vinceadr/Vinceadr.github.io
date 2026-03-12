// GSAP tool cards animation
gsap.utils.toArray('.tool-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
    y: 30, opacity: 0, duration: 0.6, delay: i * 0.08, ease: 'power2.out',
  });
});