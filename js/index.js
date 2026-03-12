// Typewriter effect
const phrases = [
  'Bienvenue sur mon portfolio !',
  'Technicien Support Informatique',
  'BTS SIO SISR',
  'Passionné par le pentesting',
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const typeEl = document.getElementById('typewriter-text');
function typeWriter() {
  const cur = phrases[phraseIndex];
  typeEl.textContent = isDeleting ? cur.substring(0, charIndex - 1) : cur.substring(0, charIndex + 1);
  isDeleting ? charIndex-- : charIndex++;
  let delay = isDeleting ? 50 : 80;
  if (!isDeleting && charIndex === cur.length) { delay = 2200; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 400; }
  setTimeout(typeWriter, delay);
}
setTimeout(typeWriter, 800);

// Glitch + magnetic chars canvas
(function initGlitch() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, chars = [];
  const mouse = { x: -999, y: -999 };
  const pool = '01ABCDEF<>/\\[]{}#@!?%^&*~ΩΨΔ∑'.split('');

  function spawnChars() {
    chars = [];
    const count = Math.floor((W * H) / 12000);
    for (let i = 0; i < count; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      chars.push({
        ox: x, oy: y, x, y, vx: 0, vy: 0,
        ch: pool[Math.floor(Math.random() * pool.length)],
        sz: Math.floor(Math.random() * 5 + 8),
        a: Math.random() * 0.25 + 0.07,
        warm: Math.random() < 0.3
      });
    }
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    spawnChars();
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function draw() {
    t++;
    ctx.fillStyle = '#020206';
    ctx.fillRect(0, 0, W, H);

    for (let y = 0; y < H; y += 3) {
      if (Math.random() < 0.03) {
        ctx.fillStyle = `rgba(180,0,255,${Math.random() * 0.15})`;
        ctx.fillRect(Math.random() * W * 0.4, y, Math.random() * W * 0.6 + W * 0.2, 2);
      }
    }
    if (t % 20 < 4) {
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = `rgba(180,0,255,${Math.random() * 0.3})`;
        ctx.fillRect((Math.random() - 0.5) * 30, Math.random() * H, Math.random() * W * 0.8 + W * 0.1, Math.random() * 20 + 3);
      }
    }
    ctx.strokeStyle = 'rgba(100,0,180,0.06)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    chars.forEach(c => {
      const dx = c.x - mouse.x, dy = c.y - mouse.y;
      const d = Math.sqrt(dx * dx + dy * dy) + 1;
      if (d < 120) {
        const f = (120 - d) / 120;
        c.vx += dx / d * f * 4;
        c.vy += dy / d * f * 4;
      }
      c.vx += (c.ox - c.x) * 0.08;
      c.vy += (c.oy - c.y) * 0.08;
      c.vx *= 0.85; c.vy *= 0.85;
      c.x += c.vx; c.y += c.vy;

      if (Math.random() < 0.003) c.ch = pool[Math.floor(Math.random() * pool.length)];

      const prox = Math.max(0, 1 - d / 150);
      const alpha = Math.min(c.a + prox * 0.7, 0.95);
      const r = c.warm ? '220,180,255' : '180,0,255';
      ctx.font = `${c.sz}px JetBrains Mono, monospace`;
      ctx.fillStyle = `rgba(${r},${alpha})`;
      ctx.fillText(c.ch, c.x, c.y);

      if (prox > 0.1) {
        ctx.shadowColor = `rgba(180,0,255,${prox * 0.8})`;
        ctx.shadowBlur = 10;
        ctx.fillText(c.ch, c.x, c.y);
        ctx.shadowBlur = 0;
      }
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

// GSAP hero title
gsap.from('h1', { duration: 1, y: 40, opacity: 0, ease: 'power3.out', delay: 0.3 });