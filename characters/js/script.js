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

  /* ---- Carousel ---- */
  const track   = document.getElementById('track');
  const cards   = Array.from(track.querySelectorAll('.char-card'));
  const dotsEl  = document.getElementById('dots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let perPage  = getPerPage();
  let current  = 0;
  const total  = cards.length;

  function getPerPage() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function pageCount() { return Math.ceil(total / perPage); }

  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < pageCount(); i++) {
      const btn = document.createElement('button');
      btn.className = 'chars-dot' + (i === current ? ' is-active' : '');
      btn.setAttribute('aria-label', `Страница ${i + 1}`);
      btn.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(btn);
    }
  }

  function updateDots() {
    dotsEl.querySelectorAll('.chars-dot').forEach((d, i) => {
      d.classList.toggle('is-active', i === current);
    });
  }

  function goTo(page) {
    current = Math.max(0, Math.min(page, pageCount() - 1));
    const offset = -(current * perPage * (100 / perPage));
    track.style.transform = `translateX(${offset}%)`;
    updateDots();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  /* Keyboard */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  /* Resize */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newPer = getPerPage();
      if (newPer !== perPage) {
        perPage = newPer;
        current = 0;
        track.style.transform = '';
        buildDots();
        updateDots();
      }
    }, 200);
  });

  buildDots();
  goTo(0);
});
