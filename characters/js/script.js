const characters = [
  {
    img: 'img/1.jpg',
    role: 'Командир разведотряда',
    name: 'Ханджи Зоэ',
    des: 'Известна страстью к научным исследованиям титанов и готовностью рисковать ради новых знаний.',
  },
  {
    img: 'img/2.jpg',
    role: 'Атакующий Титан',
    name: 'Эрен Йегер',
    des: 'Юноша, обладающий способностью превращаться в титана, движимый жаждой уничтожения всех врагов и открытием правды.',
  },
  {
    img: 'img/3.jpg',
    role: 'Солдат разведотряда',
    name: 'Микаса Аккерман',
    des: 'Приёмная сестра Эрена, обладающая выдающимися боевыми навыками и безграничной преданностью.',
  },
  {
    img: 'img/4.jpg',
    role: 'Командующий разведотряда',
    name: 'Армин Арлерт',
    des: 'Стратег с блестящим интеллектом, чьи решения неоднократно спасали товарищей от гибели.',
  },
  {
    img: 'img/5.jpg',
    role: 'Солдат разведотряда',
    name: 'Жан Кирштейн',
    des: 'Сокурсник Эрена, ставший одним из надёжнейших членов разведывательного корпуса.',
  },
  {
    img: 'img/6.jpg',
    role: 'Солдат разведотряда',
    name: 'Конни Спрингер',
    des: 'Решительный и напористый солдат, чья смелость не раз выручала товарищей в бою.',
  },
  {
    img: 'img/7.jpg',
    role: 'Снайпер разведотряда',
    name: 'Саша Браус',
    des: 'Спонтанная и ненасытная девушка с выдающимися навыками стрельбы и охоты.',
  },
  {
    img: 'img/8.jpg',
    role: 'Титан-воин',
    name: 'Райнер Браун',
    des: 'Солдат, скрывающий свою истинную сущность — двойная жизнь, которая неизбежно раскрывается.',
  },
  {
    img: 'img/9.jpg',
    role: 'Женская особь',
    name: 'Энни Леонхарт',
    des: 'Талантливый боец, ведущая сложную двойную игру между двумя сторонами противостояния.',
  },
  {
    img: 'img/10.jpg',
    role: 'Колоссальный Титан',
    name: 'Бертольд Хувер',
    des: 'Спокойный и рассудительный солдат, также являющийся титаном-воином наряду с Райнером.',
  },
  {
    img: 'img/11.jpg',
    role: 'Законная королева',
    name: 'Криста Ленц',
    des: 'Скромная девушка, чья истинная сущность — законная наследница трона — постепенно раскрывается.',
  },
  {
    img: 'img/12.jpg',
    role: 'Титан-переросток',
    name: 'Имир',
    des: 'Таинственная своенравная девушка, способная превращаться в титана и играющая ключевую роль в конфликте.',
  },
  {
    img: 'img/13.jpg',
    role: 'Капитан разведотряда',
    name: 'Леви',
    des: 'Сильнейший солдат человечества, известный молниеносными ударами и железной дисциплиной.',
  },
  {
    img: 'img/14.jpg',
    role: 'Командующий корпуса',
    name: 'Эрвин Смит',
    des: 'Выдающийся стратег и лидер, ведущий разведывательный корпус к раскрытию тайн мира титанов.',
  },
];

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

  /* ---- Spotlight ---- */
  const slide   = document.getElementById('slide');
  const prevBtn = document.getElementById('spotPrev');
  const nextBtn = document.getElementById('spotNext');
  const counter = document.getElementById('spotCounter');
  const total   = characters.length;

  /* Build slides */
  characters.forEach((c, i) => {
    const div = document.createElement('div');
    div.className = 'item';
    div.style.backgroundImage = `url(${c.img})`;
    div.innerHTML = `
      <div class="content">
        <div class="role">${c.role}</div>
        <div class="name">${c.name}</div>
        <div class="des">${c.des}</div>
        <div class="spot-num">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
      </div>
    `;
    slide.appendChild(div);
  });

  let items = slide.querySelectorAll('.item');
  let current = 1; // item:nth-child(2) is the active one

  function updateCounter() {
    /* Find which character is at position 2 (active) */
    const activeEl = slide.querySelector('.item:nth-child(2)');
    const idx = Array.from(slide.children).indexOf(activeEl);
    /* We started by placing characters[0] at position 1, so active = items[(idx)] */
    counter.textContent =
      String(idx + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
  }

  function goNext() {
    /* Restart animations on incoming item (future nth-child(2)) */
    const incoming = slide.querySelector('.item:nth-child(3)');

    /* Move item[0] to end */
    slide.appendChild(slide.querySelector('.item:nth-child(1)'));

    /* Force re-trigger animations on new item:nth-child(2) */
    const newActive = slide.querySelector('.item:nth-child(2)');
    const content = newActive.querySelector('.content');
    if (content) {
      content.querySelectorAll('.role, .name, .des, .spot-num').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; /* reflow */
        el.style.animation = '';
      });
    }

    updateCounter();
  }

  function goPrev() {
    /* Move last item to front */
    const lastItem = slide.querySelector('.item:last-child');
    slide.insertBefore(lastItem, slide.firstChild);

    /* Re-trigger animations on new item:nth-child(2) */
    const newActive = slide.querySelector('.item:nth-child(2)');
    const content = newActive.querySelector('.content');
    if (content) {
      content.querySelectorAll('.role, .name, .des, .spot-num').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = '';
      });
    }

    updateCounter();
  }

  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);

  /* Click on peeking item 3 = go next */
  slide.addEventListener('click', e => {
    const clickedItem = e.target.closest('.item');
    if (!clickedItem) return;
    const allItems = Array.from(slide.children);
    if (allItems.indexOf(clickedItem) === 2) goNext();
  });

  /* Keyboard navigation */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft')  goPrev();
  });

  /* Touch swipe */
  let touchStartX = 0;
  slide.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slide.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) dx < 0 ? goNext() : goPrev();
  });

  updateCounter();
});
