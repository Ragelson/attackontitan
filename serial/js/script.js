const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const product_items = document.querySelectorAll('.products-grid__item');
const menuBtn = document.querySelector('.menu-btn1');
const menuNav = document.querySelector('.menu-nav');

let data = [
    {
        'id': '1',
        'title': 'К тебе, спустя две тысячи лет: Падение Сигансины, часть 1',
        'name': 'episode1',
        'season': 1,
        'episode': 1,
    },
    {
        'id': '2',
        'title': 'Тот день: Падение Сигансины. Часть 2',
        'name': 'episode2',
        'season': 1,
        'episode': 2,
    },
    {
        'id': '3',
        'title': 'Тусклый проблеск среди отчаянья: Возвращение человечества. Часть 1',
        'name': 'episode3',
        'season': 1,
        'episode': 3,
    },
    {
        'id': '4',
        'title': 'Ночь выпуска: Возвращение человечества. Часть 2',
        'name': 'episode4',
        'season': 1,
        'episode': 4,
    },
    {
        'id': '5',
        'title': 'Первое сражение: Оборона Троста. Часть 1',
        'name': 'episode5',
        'season': 1,
        'episode': 5,
    },
    {
        'id': '6',
        'title': 'Мир глазами девочки: Оборона Троста. Часть 2',
        'name': 'episode6',
        'season': 1,
        'episode': 6,
        },
        {
        'id': '7',
        'title': 'Маленький клинок: Оборона Троста. Часть 3',
        'name': 'episode7',
        'season': 1,
        'episode': 7,
        },
        {
        'id': '8',
        'title': 'Слышно биение сердца: Оборона Троста. Часть 4',
        'name': 'episode8',
        'season': 1,
        'episode': 8,
        },
        {
        'id': '9',
        'title': 'Случай с левой рукой: Оборона Троста. Часть 5',
        'name': 'episode9',
        'season': 1,
        'episode': 9,
        },
        {
        'id': '10',
        'title': 'Ответ: Оборона Троста. Часть 6',
        'name': 'episode10',
        'season': 1,
        'episode': 10,
        },
        {
        'id': '11',
        'title': 'Идол: Оборона Троста. Часть 7',
        'name': 'episode11',
        'season': 1,
        'episode': 11,
        },
        {
        'id': '12',
        'title': 'Рана: Оборона Троста. Часть 8',
        'name': 'episode12',
        'season': 1,
        'episode': 12,
        },
        {
        'id': '13',
        'title': 'Сокровенное желание: Оборона Троста. Часть 9',
        'name': 'episode13',
        'season': 1,
        'episode': 13,
        },
        {
        'id': '14',
        'title': 'Не могу посмотреть ему в глаза: Подготовка к контратаке. Часть 1',
        'name': 'episode14',
        'season': 1,
        'episode': 14,
        },
        {
        'id': '15',
        'title': 'Отряд специального назначения: Подготовка к контратаке. Часть 2',
        'name': 'episode15',
        'season': 1,
        'episode': 15,
        },
        {
        'id': '16',
        'title': 'Что нужно сделать сейчас: Накануне контрнаступления, Часть 3',
        'name': 'episode16',
        'season': 1,
        'episode': 16,
        },
        {
        'id': '17',
        'title': 'Женская особь',
        'name': 'episode17',
        'season': 1,
        'episode': 17,
        },
        {
        'id': '18',
        'title': 'Лес гигантских деревьев',
        'name': 'episode18',
        'season': 1,
        'episode': 18,
        },
        {
        'id': '19',
        'title': 'Укус',
        'name': 'episode19',
        'season': 1,
        'episode': 19,
        },
        {
        'id': '20',
        'title': 'Эрвин Смит',
        'name': 'episode20',
        'season': 1,
        'episode': 20,
        },
        {
        'id': '21',
        'title': 'Железный молот',
        'name': 'episode21',
        'season': 1,
        'episode': 21,
        },
        {
        'id': '22',
        'title': 'Побеждённые: 57ая экспедиция за стены. Часть 6',
        'name': 'episode22',
        'season': 1,
        'episode': 22,
        },
        {
        'id': '23',
        'title': 'Улыбка: Рейд в район Стохэсс. Часть 1',
        'name': 'episode23',
        'season': 1,
        'episode': 23,
        },
        {
        'id': '24',
        'title': 'Помилование: Рейд в район Стохэсс. Часть 2',
        'name': 'episode24',
        'season': 1,
        'episode': 24,
        },
        {
        'id': '25',
        'title': 'Стена: Рейд в район Стохэсс. Часть 3',
        'name': 'episode25',
        'season': 1,
        'episode': 25,
        },
        {
            'id': '26',
            'title': 'Звероподобный титан',
            'name': 'episode1',
            'season': 2,
            'episode': 1,
            },
            {
            'id': '27',
            'title': 'Я дома',
            'name': 'episode2',
            'season': 2,
            'episode': 2,
            },
            {
            'id': '28',
            'title': 'На юго-запад',
            'name': 'episode3',
            'season': 2,
            'episode': 3,
            },
            {
            'id': '29',
            'title': 'Солдат',
            'name': 'episode4',
            'season': 2,
            'episode': 4,
            },
            {
            'id': '30',
            'title': 'Хистория',
            'name': 'episode5',
            'season': 2,
            'episode': 5,
            },
            {
            'id': '31',
            'title': 'Воин',
            'name': 'episode6',
            'season': 2,
            'episode': 6,
            },
            {
            'id': '32',
            'title': 'Ближний бой',
            'name': 'episode7',
            'season': 2,
            'episode': 7,
            },
            {
            'id': '33',
            'title': 'Охотники',
            'name': 'episode8',
            'season': 2,
            'episode': 8,
            },
            {
            'id': '34',
            'title': 'Открытие',
            'name': 'episode9',
            'season': 2,
            'episode': 9,
            },
            {
            'id': '35',
            'title': 'Дети',
            'name': 'episode10',
            'season': 2,
            'episode': 10,
            },
            {
            'id': '36',
            'title': 'Зарядка',
            'name': 'episode11',
            'season': 2,
            'episode': 11,
            },
            {
            'id': '37',
            'title': 'Крик',
            'name': 'episode12',
            'season': 2,
            'episode': 12,
            },
            {
                'id': '38',
                'title': 'Сигнальный огонь',
                'name': 'episode1',
                'season': 3,
                'episode': 1,
                },
                {
                'id': '39',
                'title': 'Боль',
                'name': 'episode2',
                'season': 3,
                'episode': 2,
                },
                {
                'id': '40',
                'title': 'Старая история',
                'name': 'episode3',
                'season': 3,
                'episode': 3,
                },
                {
                'id': '41',
                'title': 'Доверие',
                'name': 'episode4',
                'season': 3,
                'episode': 4,
                },
                {
                'id': '42',
                'title': 'Ответ',
                'name': 'episode5',
                'season': 3,
                'episode': 5,
                },
                {
                'id': '43',
                'title': 'Грех',
                'name': 'episode6',
                'season': 3,
                'episode': 6,
                },
                {
                'id': '44',
                'title': 'Желание',
                'name': 'episode7',
                'season': 3,
                'episode': 7,
                },
                {
                'id': '45',
                'title': 'За стенами района Орвуд',
                'name': 'episode8',
                'season': 3,
                'episode': 8,
                },
                {
                'id': '46',
                'title': 'Правитель стен',
                'name': 'episode9',
                'season': 3,
                'episode': 9,
                },
                {
                'id': '47',
                'title': 'Друзья',
                'name': 'episode10',
                'season': 3,
                'episode': 10,
                },
                {
                'id': '48',
                'title': 'Наблюдатель',
                'name': 'episode11',
                'season': 3,
                'episode': 11,
                },
                {
                'id': '49',
                'title': 'Ночь перед контрнаступлением',
                'name': 'episode12',
                'season': 3,
                'episode': 12,
                },
                {
                'id': '50',
                'title': 'Город, в котором всё началось',
                'name': 'episode13',
                'season': 3,
                'episode': 13,
                },
                {
                'id': '51',
                'title': 'Громовые копья',
                'name': 'episode14',
                'season': 3,
                'episode': 14,
                },
                {
                'id': '52',
                'title': 'Спуск',
                'name': 'episode15',
                'season': 3,
                'episode': 15,
                },
                {
                'id': '53',
                'title': 'Идеальная игра',
                'name': 'episode16',
                'season': 3,
                'episode': 16,
                },
                {
                'id': '54',
                'title': 'Герой',
                'name': 'episode17',
                'season': 3,
                'episode': 17,
                },
                {
                'id': '55',
                'title': 'Полуночное солнце',
                'name': 'episode18',
                'season': 3,
                'episode': 18,
                },
                {
                'id': '56',
                'title': 'Подвал',
                'name': 'episode19',
                'season': 3,
                'episode': 19,
                },
                {
                'id': '57',
                'title': 'В тот день',
                'name': 'episode20',
                'season': 3,
                'episode': 20,
                },
                {
                'id': '58',
                'title': 'Атакующий титан',
                'name': 'episode21',
                'season': 3,
                'episode': 21,
                },
                {
                'id': '59',
                'title': 'По Другую сторону стены',
                'name': 'episode22',
                'season': 3,
                'episode': 22,
                },
                {
                    'id': '60',
                    'title': 'По ту сторону океана',
                    'name': 'episode1',
                    'season': 4,
                    'episode': 1,
                    },
                    {
                    'id': '61',
                    'title': 'Полуночный поезд',
                    'name': 'episode2',
                    'season': 4,
                    'episode': 2,
                    },
                    {
                    'id': '62',
                    'title': 'Врата надежды',
                    'name': 'episode3',
                    'season': 4,
                    'episode': 3,
                    },
                    {
                    'id': '63',
                    'title': 'Из рук в руки',
                    'name': 'episode4',
                    'season': 4,
                    'episode': 4,
                    },
                    {
                    'id': '64',
                    'title': 'Объявление войны',
                    'name': 'episode5',
                    'season': 4,
                    'episode': 5,
                    },
                    {
                    'id': '65',
                    'title': 'Титан Молотобоец',
                    'name': 'episode6',
                    'season': 4,
                    'episode': 6,
                    },
                    {
                    'id': '66',
                    'title': 'Нападение',
                    'name': 'episode7',
                    'season': 4,
                    'episode': 7,
                    },
                    {
                    'id': '67',
                    'title': 'Пуля Убийцы',
                    'name': 'episode8',
                    'season': 4,
                    'episode': 8,
                    },
                    {
                    'id': '68',
                    'title': 'Добровольцы',
                    'name': 'episode9',
                    'season': 4,
                    'episode': 9,
                    },
                    {
                    'id': '69',
                    'title': 'Справедливый довод',
                    'name': 'episode10',
                    'season': 4,
                    'episode': 10,
                    },
                    {
                    'id': '70',
                    'title': 'Притворщики',
                    'name': 'episode11',
                    'season': 4,
                    'episode': 11,
                    },
                    {
                    'id': '71',
                    'title': 'Лидер',
                    'name': 'episode12',
                    'season': 4,
                    'episode': 12,
                    },
                    {
                    'id': '72',
                    'title': 'Дети леса',
                    'name': 'episode13',
                    'season': 4,
                    'episode': 13,
                    },
                    {
                    'id': '73',
                    'title': 'Жестокость',
                    'name': 'episode14',
                    'season': 4,
                    'episode': 14,
                    },
                    {
                    'id': '74',
                    'title': 'Единственное спасение',
                    'name': 'episode15',
                    'season': 4,
                    'episode': 15,
                    },
                    {
                    'id': '75',
                    'title': 'Небеса и Земля',
                    'name': 'episode16',
                    'season': 4,
                    'episode': 16,
                    },
                    {
                    'id': '76',
                    'title': 'Суждение',
                    'name': 'episode17',
                    'season': 4,
                    'episode': 17,
                    },
                    {
                    'id': '77',
                    'title': 'Неожиданный удар',
                    'name': 'episode18',
                    'season': 4,
                    'episode': 18,
                    },
                    {
                    'id': '78',
                    'title': 'Братья',
                    'name': 'episode19',
                    'season': 4,
                    'episode': 19,
                    },
                    {
                    'id': '79',
                    'title': 'Воспоминания о будущем',
                    'name': 'episode20',
                    'season': 4,
                    'episode': 20,
                    },
                    {
                    'id': '80',
                    'title': 'За две тысячи лет до тебя',
                    'name': 'episode21',
                    'season': 4,
                    'episode': 21,
                    },
                    {
                    'id': '81',
                    'title': 'Оттепель',
                    'name': 'episode22',
                    'season': 4,
                    'episode': 22,
                    },
                    {
                    'id': '82',
                    'title': 'Закат',
                    'name': 'episode23',
                    'season': 4,
                    'episode': 23,
                    },
                    {
                    'id': '83',
                    'title': 'Достоинство',
                    'name': 'episode24',
                    'season': 4,
                    'episode': 24,
                    },
                    {
                    'id': '84',
                    'title': 'Ночь конца',
                    'name': 'episode25',
                    'season': 4,
                    'episode': 25,
                    },
                    {
                    'id': '85',
                    'title': 'Предатель',
                    'name': 'episode26',
                    'season': 4,
                    'episode': 26,
                    },
                    {
                    'id': '86',
                    'title': 'Ретроспектива',
                    'name': 'episode27',
                    'season': 4,
                    'episode': 27,
                    },
                    {
                    'id': '87',
                    'title': 'Рассвет человечества',
                    'name': 'episode28',
                    'season': 4,
                    'episode': 28,
                    },
                    {
                    'id': '88',
                    'title': 'Гул Земли/Грешники',
                    'name': 'episode29',
                    'season': 4,
                    'episode': 29,
                    },
                    {
                    'id': '89',
                    'title': 'Финальный сезон. Заключительные Главы. Битва неба и земли / Длинный сон',
                    'name': 'episode30',
                    'season': 4,
                    'episode': 30,
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