// Initialize Leaflet map
var map = L.map('map').setView([43.2627, 6.6293], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors',
  className: 'mapbox'
}).addTo(map);

// Mentions legales modal
function openMentions() {
  document.getElementById('mentions-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMentions() {
  document.getElementById('mentions-modal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('mentions-modal').addEventListener('click', function(e) {
  if (e.target === this) closeMentions();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMentions(); });

// Check if URL has #mentions hash to auto-open modal
if (window.location.hash === '#mentions') openMentions();

// Contact form handler
function handleContactForm(e) {
  e.preventDefault();
  const btn = document.getElementById('form-btn-text');
  const successEl = document.getElementById('form-success');
  btn.textContent = 'Envoi en cours...';
  setTimeout(() => {
    btn.textContent = 'Envoyer le message';
    successEl.classList.remove('hidden');
    e.target.reset();
    setTimeout(() => successEl.classList.add('hidden'), 5000);
  }, 1200);
}