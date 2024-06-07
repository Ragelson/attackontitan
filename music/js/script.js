const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const product_items = document.querySelectorAll('.products-grid__item');
const menuBtn = document.querySelector('.menu-btn1');
const menuNav = document.querySelector('.menu-nav');

let data = [
    {
        'id': '1',
        'title': 'Guren No Yumiya',
        'name': 'episode1',
        'season': 1,
        'episode': 1,
    },
    {
        'id': '2',
        'title': 'Jiyuu No Tsubasa',
        'name': 'episode2',
        'season': 1,
        'episode': 2,
    },
    {
        'id': '3',
        'title': 'Shinzou Wo Sasageyo!',
        'name': 'episode1',
        'season': 2,
        'episode': 1,
    },
    {
        'id': '4',
        'title': 'Red Swan',
        'name': 'episode1',
        'season': 3,
        'episode': 1,
    },
    {
        'id': '5',
        'title': 'Shoukei to Shikabane no Michi',
        'name': 'episode2',
        'season': 3,
        'episode': 2,
    },
    {
        'id': '6',
        'title': 'My War',
        'name': 'episode1',
        'season': 4,
        'episode': 1,
        },
        {
        'id': '7',
        'title': 'The Rumbling',
        'name': 'episode2',
        'season': 4,
        'episode': 2,
        },
        {
        'id': '8',
        'title': 'The Last Titan',
        'name': 'episode3',
        'season': 4,
        'episode': 3,
        },
        {
            'id': '9',
            'title': 'The Beautiful and Cruel World',
            'name': 'episode21',
            'season': 1,
            'episode': 21,
        },
        {
            'id': '10',
            'title': 'The Great Escape',
            'name': 'episode22',
            'season': 1,
            'episode': 22,
        },
        {
            'id': '11',
            'title': 'Bird at Dusk',
            'name': 'episode21',
            'season': 2,
            'episode': 21,
        },
        {
            'id': '12',
            'title': 'Akatsuki no Requiem',
            'name': 'episode21',
            'season': 3,
            'episode': 21,
        },
        {
            'id': '13',
            'title': 'Name of Love',
            'name': 'episode22',
            'season': 3,
            'episode': 22,
        },
        {
            'id': '14',
            'title': 'Shock',
            'name': 'episode21',
            'season': 4,
            'episode': 21,
            },
            {
            'id': '15',
            'title': 'Akuma no Ko',
            'name': 'episode22',
            'season': 4,
            'episode': 22,
            },
            {
            'id': '16',
            'title': 'Itterasshai',
            'name': 'episode23',
            'season': 4,
            'episode': 23,
            }
    // ... остальные объекты
];
product_items.forEach((item, i) => {
    item.addEventListener('click', () => {
        const matchingVideo = data.find(video => video.id === item.dataset.id);
        if (matchingVideo) {
            main_video.src = `video/season${matchingVideo.season}/episode${matchingVideo.episode}.mkv`;
            main_video_title.textContent = matchingVideo.title;

            product_items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        } else {
            console.error(`Video with id "${item.dataset.id}" not found in data.`);
        }
    });
});

// Обработчик клика на кнопку меню
menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('menu-nav_active');
  menuBtn.classList.toggle('menu-btn1_active');
});

// Обработчик клика вне меню
document.addEventListener('click', (event) => {
  if (!menuNav.contains(event.target) && event.target !== menuBtn) {
    menuNav.classList.remove('menu-nav_active');
    menuBtn.classList.remove('menu-btn1_active');
  }
});

// Обработчик клика на ссылки меню
const menuLinks = menuNav.querySelectorAll('a');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuNav.classList.remove('menu-nav_active');
    menuBtn.classList.remove('menu-btn1_active');
  });
});