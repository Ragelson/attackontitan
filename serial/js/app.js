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

  /* ---- References ---- */
  const mainVideo   = document.getElementById('mainVideo');
  const playerTitle = document.getElementById('playerTitle');
  const playerBadge = document.querySelector('.player-badge');
  const grid        = document.getElementById('episodeGrid');
  const showMoreBtn = document.getElementById('showMoreBtn');
  const seasonTabs  = document.querySelectorAll('.season-tab');

  const PAGE_SIZE = 8;
  let activeSeason = 'all';
  let visibleCount = PAGE_SIZE;
  let currentIdx   = 0;

  /* ---- Build grid ---- */
  function imgPath(ep) {
    return `img/${ep.season}-${ep.ep}.jpg`;
  }

  function videoPath(ep) {
    return `video/season${ep.season}/episode${ep.ep}.mkv`;
  }

  function buildGrid() {
    const filtered = activeSeason === 'all'
      ? EPISODES
      : EPISODES.filter(e => e.season === Number(activeSeason));

    grid.innerHTML = '';

    filtered.forEach((ep, i) => {
      const hidden = i >= visibleCount;

      const li = document.createElement('li');
      li.className = 'episode-item' + (hidden ? ' is-hidden' : '');
      li.dataset.idx = EPISODES.indexOf(ep);

      li.innerHTML = `
        <div class="episode-thumb">
          <img src="${imgPath(ep)}"
               alt="Сезон ${ep.season} Серия ${ep.ep}"
               onerror="this.style.display='none'">
          <div class="episode-play-icon"><i class="fas fa-play"></i></div>
        </div>
        <div class="episode-body">
          <div class="episode-num">С${ep.season} · Е${ep.ep}</div>
          <div class="episode-name">${ep.title}</div>
        </div>
      `;

      li.addEventListener('click', () => playEpisode(EPISODES.indexOf(ep), li));
      grid.appendChild(li);
    });

    /* Show-more logic */
    const visible = filtered.length;
    if (visible > visibleCount) {
      showMoreBtn.classList.add('is-visible');
    } else {
      showMoreBtn.classList.remove('is-visible');
    }

    /* Highlight currently playing */
    markPlaying(currentIdx);
  }

  function playEpisode(idx, liEl) {
    const ep = EPISODES[idx];
    currentIdx = idx;

    mainVideo.src = videoPath(ep);
    mainVideo.play();

    playerTitle.textContent = ep.title;
    playerBadge.textContent = `Сезон ${ep.season} · Серия ${ep.ep}`;

    mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    markPlaying(idx);
  }

  function markPlaying(idx) {
    grid.querySelectorAll('.episode-item').forEach(li => {
      li.classList.toggle('is-playing', Number(li.dataset.idx) === idx);
    });
  }

  /* ---- Season tabs ---- */
  seasonTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      seasonTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      activeSeason  = tab.dataset.season;
      visibleCount  = PAGE_SIZE;
      buildGrid();
    });
  });

  /* ---- Show more ---- */
  showMoreBtn.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    buildGrid();
  });

  /* ---- Init ---- */
  buildGrid();
  playEpisode(0, null);
});
