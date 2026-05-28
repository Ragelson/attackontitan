document.addEventListener('DOMContentLoaded', () => {
  /* ---- Mobile nav ---- */
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('drawer');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    drawer.classList.toggle('is-open');
  });
  drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      drawer.classList.remove('is-open');
    });
  });

  /* ---- Player ---- */
  const mainVideo   = document.getElementById('mainVideo');
  const playerTitle = document.getElementById('playerTitle');
  const playerBadge = document.getElementById('playerBadge');
  const trackItems  = document.querySelectorAll('.track-item');

  function playTrack(item) {
    const src   = item.dataset.src;
    const name  = item.querySelector('.track-name').textContent;
    const label = item.dataset.type + ' · ' + item.dataset.label;

    mainVideo.src = src;
    mainVideo.play();
    playerTitle.textContent = name;
    playerBadge.textContent = label;

    mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });

    trackItems.forEach(t => t.classList.remove('is-playing'));
    item.classList.add('is-playing');
  }

  trackItems.forEach(item => {
    item.addEventListener('click', () => playTrack(item));
  });
});
