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

  /* ---- Swiper ---- */
  new Swiper('.gallery-swiper', {
    loop: true,
    speed: 800,
    autoplay: { delay: 3500, disableOnInteraction: false },
    keyboard: { enabled: true },
    navigation: { prevEl: '.gallery-prev', nextEl: '.gallery-next' },
    pagination: { el: '.gallery-pagination', clickable: true },
    grabCursor: true,
  });

  /* ---- Build image grid ---- */
  const TOTAL  = 18;
  const grid   = document.getElementById('galleryGrid');
  const imgs   = Array.from({ length: TOTAL }, (_, i) => `images/${i + 1}.jpg`);

  imgs.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-grid-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Иллюстрация ${i + 1}`;
    img.loading = 'lazy';

    const icon = document.createElement('span');
    icon.className = 'zoom-icon';
    icon.innerHTML = '<i class="fas fa-expand"></i>';

    div.appendChild(img);
    div.appendChild(icon);
    div.addEventListener('click', () => openLightbox(i));
    grid.appendChild(div);
  });

  /* ---- Scroll reveal ---- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.add('is-visible'); io.unobserve(target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---- Lightbox ---- */
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightboxImg');
  const lbCounter = document.getElementById('lightboxCounter');
  const lbClose   = document.getElementById('lightboxClose');
  const lbPrev    = document.getElementById('lightboxPrev');
  const lbNext    = document.getElementById('lightboxNext');
  let current     = 0;

  function openLightbox(idx) {
    current = idx;
    update();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function update() {
    lbImg.src = imgs[current];
    lbImg.alt = `Иллюстрация ${current + 1}`;
    lbCounter.textContent = `${current + 1} / ${TOTAL}`;
  }

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  lbPrev.addEventListener('click', () => { current = (current - 1 + TOTAL) % TOTAL; update(); });
  lbNext.addEventListener('click', () => { current = (current + 1) % TOTAL; update(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { current = (current - 1 + TOTAL) % TOTAL; update(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % TOTAL; update(); }
  });

  /* Touch swipe in lightbox */
  let tx = 0;
  lightbox.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) {
      dx < 0 ? (current = (current + 1) % TOTAL) : (current = (current - 1 + TOTAL) % TOTAL);
      update();
    }
  });
});
