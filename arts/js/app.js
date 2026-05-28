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
    speed: 700,
    autoplay: { delay: 4000, disableOnInteraction: false },
    keyboard: { enabled: true },
    navigation: {
      prevEl: '.gallery-prev',
      nextEl: '.gallery-next',
    },
    pagination: {
      el: '.gallery-pagination',
      clickable: true,
    },
  });

  /* ---- Build image grid ---- */
  const TOTAL = 18;
  const grid  = document.getElementById('galleryGrid');
  const imgs  = [];

  for (let i = 1; i <= TOTAL; i++) {
    const src = `images/${i}.jpg`;
    imgs.push(src);

    const div = document.createElement('div');
    div.className = 'gallery-grid-item';
    div.dataset.idx = i - 1;

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Иллюстрация ${i}`;
    img.loading = 'lazy';

    div.appendChild(img);
    div.addEventListener('click', () => openLightbox(i - 1));
    grid.appendChild(div);
  }

  /* ---- Lightbox ---- */
  const lightbox     = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lightboxImg');
  const lbCounter    = document.getElementById('lightboxCounter');
  const lbClose      = document.getElementById('lightboxClose');
  const lbPrev       = document.getElementById('lightboxPrev');
  const lbNext       = document.getElementById('lightboxNext');
  let current        = 0;

  function openLightbox(idx) {
    current = idx;
    updateLightbox();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    lbImg.src = imgs[current];
    lbImg.alt = `Иллюстрация ${current + 1}`;
    lbCounter.textContent = `${current + 1} / ${TOTAL}`;
  }

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  lbPrev.addEventListener('click', () => {
    current = (current - 1 + TOTAL) % TOTAL;
    updateLightbox();
  });

  lbNext.addEventListener('click', () => {
    current = (current + 1) % TOTAL;
    updateLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { current = (current - 1 + TOTAL) % TOTAL; updateLightbox(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % TOTAL; updateLightbox(); }
  });
});
