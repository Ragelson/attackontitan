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

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger?.classList.remove('is-open');
      drawer?.classList.remove('is-open');
    }
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        io.unobserve(target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
});
