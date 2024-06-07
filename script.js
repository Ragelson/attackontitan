const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'К тебе, спустя две тысячи лет: Падение Сигансины, часть 1',
        'name': 'episode1',
        'season': 1,
        'episode': 1,
    },
    {
        'id': 'a2',
        'title': 'Тот день: Падение Сигансины. Часть 2',
        'name': 'episode2',
        'season': 1,
        'episode': 2,
    },
    {
        'id': 'a3',
        'title': 'Тусклый проблеск среди отчаянья: Возвращение человечества. Часть 1',
        'name': 'episode3',
        'season': 1,
        'episode': 3,
    },
    {
        'id': 'a4',
        'title': 'Ночь выпуска: Возвращение человечества. Часть 2',
        'name': 'episode4',
        'season': 1,
        'episode': 4,
    },
    {
        'id': 'a5',
        'title': 'Первое сражение: Оборона Троста. Часть 1',
        'name': 'episode5',
        'season': 1,
        'episode': 5,
    },
    {
        'id': 'a6',
        'title': 'Мир глазами девочки: Оборона Троста. Часть 2',
        'name': 'episode6',
        'season': 1,
        'episode': 6,
        },
        {
        'id': 'a7',
        'title': 'Маленький клинок: Оборона Троста. Часть 3',
        'name': 'episode7',
        'season': 1,
        'episode': 7,
        },
        {
        'id': 'a8',
        'title': 'Слышно биение сердца: Оборона Троста. Часть 4',
        'name': 'episode8',
        'season': 1,
        'episode': 8,
        },
        {
        'id': 'a9',
        'title': 'Случай с левой рукой: Оборона Троста. Часть 5',
        'name': 'episode9',
        'season': 1,
        'episode': 9,
        },
        {
        'id': 'a10',
        'title': 'Ответ: Оборона Троста. Часть 6',
        'name': 'episode10',
        'season': 1,
        'episode': 10,
        },
        {
        'id': 'a11',
        'title': 'Идол: Оборона Троста. Часть 7',
        'name': 'episode11',
        'season': 1,
        'episode': 11,
        },
        {
        'id': 'a12',
        'title': 'Рана: Оборона Троста. Часть 8',
        'name': 'episode12',
        'season': 1,
        'episode': 12,
        },
        {
        'id': 'a13',
        'title': 'Сокровенное желание: Оборона Троста. Часть 9',
        'name': 'episode13',
        'season': 1,
        'episode': 13,
        },
        {
        'id': 'a14',
        'title': 'Не могу посмотреть ему в глаза: Подготовка к контратаке. Часть 1',
        'name': 'episode14',
        'season': 1,
        'episode': 14,
        },
        {
        'id': 'a15',
        'title': 'Отряд специального назначения: Подготовка к контратаке. Часть 2',
        'name': 'episode15',
        'season': 1,
        'episode': 15,
        },
        {
        'id': 'a16',
        'title': 'Что нужно сделать сейчас: Накануне контрнаступления, Часть 3',
        'name': 'episode16',
        'season': 1,
        'episode': 16,
        },
        {
        'id': 'a17',
        'title': 'Женская особь',
        'name': 'episode17',
        'season': 1,
        'episode': 17,
        },
        {
        'id': 'a18',
        'title': 'Лес гигантских деревьев',
        'name': 'episode18',
        'season': 1,
        'episode': 18,
        },
        {
        'id': 'a19',
        'title': 'Укус',
        'name': 'episode19',
        'season': 1,
        'episode': 19,
        },
        {
        'id': 'a20',
        'title': 'Эрвин Смит',
        'name': 'episode20',
        'season': 1,
        'episode': 20,
        },
        {
        'id': 'a21',
        'title': 'Железный молот',
        'name': 'episode21',
        'season': 1,
        'episode': 21,
        },
        {
        'id': 'a22',
        'title': 'Побеждённые: 57ая экспедиция за стены. Часть 6',
        'name': 'episode22',
        'season': 1,
        'episode': 22,
        },
        {
        'id': 'a23',
        'title': 'Улыбка: Рейд в район Стохэсс. Часть 1',
        'name': 'episode23',
        'season': 1,
        'episode': 23,
        },
        {
        'id': 'a24',
        'title': 'Помилование: Рейд в район Стохэсс. Часть 2',
        'name': 'episode24',
        'season': 1,
        'episode': 24,
        },
        {
        'id': 'a25',
        'title': 'Стена: Рейд в район Стохэсс. Часть 3',
        'name': 'episode25',
        'season': 1,
        'episode': 25,
        },
        {
            'id': 'a26',
            'title': 'Звероподобный титан',
            'name': 'episode1',
            'season': 2,
            'episode': 1,
            },
            {
            'id': 'a27',
            'title': 'Я дома',
            'name': 'episode2',
            'season': 2,
            'episode': 2,
            },
            {
            'id': 'a28',
            'title': 'На юго-запад',
            'name': 'episode3',
            'season': 2,
            'episode': 3,
            },
            {
            'id': 'a29',
            'title': 'Солдат',
            'name': 'episode4',
            'season': 2,
            'episode': 4,
            },
            {
            'id': 'a30',
            'title': 'Хистория',
            'name': 'episode5',
            'season': 2,
            'episode': 5,
            },
            {
            'id': 'a31',
            'title': 'Воин',
            'name': 'episode6',
            'season': 2,
            'episode': 6,
            },
            {
            'id': 'a32',
            'title': 'Ближний бой',
            'name': 'episode7',
            'season': 2,
            'episode': 7,
            },
            {
            'id': 'a33',
            'title': 'Охотники',
            'name': 'episode8',
            'season': 2,
            'episode': 8,
            },
            {
            'id': 'a34',
            'title': 'Открытие',
            'name': 'episode9',
            'season': 2,
            'episode': 9,
            },
            {
            'id': 'a35',
            'title': 'Дети',
            'name': 'episode10',
            'season': 2,
            'episode': 10,
            },
            {
            'id': 'a36',
            'title': 'Зарядка',
            'name': 'episode11',
            'season': 2,
            'episode': 11,
            },
            {
            'id': 'a37',
            'title': 'Крик',
            'name': 'episode12',
            'season': 2,
            'episode': 12,
            },
            {
                'id': 'a38',
                'title': 'Сигнальный огонь',
                'name': 'episode1',
                'season': 3,
                'episode': 1,
                },
                {
                'id': 'a39',
                'title': 'Боль',
                'name': 'episode2',
                'season': 3,
                'episode': 2,
                },
                {
                'id': 'a40',
                'title': 'Старая история',
                'name': 'episode3',
                'season': 3,
                'episode': 3,
                },
                {
                'id': 'a41',
                'title': 'Доверие',
                'name': 'episode4',
                'season': 3,
                'episode': 4,
                },
                {
                'id': 'a42',
                'title': 'Ответ',
                'name': 'episode5',
                'season': 3,
                'episode': 5,
                },
                {
                'id': 'a43',
                'title': 'Грех',
                'name': 'episode6',
                'season': 3,
                'episode': 6,
                },
                {
                'id': 'a44',
                'title': 'Желание',
                'name': 'episode7',
                'season': 3,
                'episode': 7,
                },
                {
                'id': 'a45',
                'title': 'За стенами района Орвуд',
                'name': 'episode8',
                'season': 3,
                'episode': 8,
                },
                {
                'id': 'a46',
                'title': 'Правитель стен',
                'name': 'episode9',
                'season': 3,
                'episode': 9,
                },
                {
                'id': 'a47',
                'title': 'Друзья',
                'name': 'episode10',
                'season': 3,
                'episode': 10,
                },
                {
                'id': 'a48',
                'title': 'Наблюдатель',
                'name': 'episode11',
                'season': 3,
                'episode': 11,
                },
                {
                'id': 'a49',
                'title': 'Ночь перед контрнаступлением',
                'name': 'episode12',
                'season': 3,
                'episode': 12,
                },
                {
                'id': 'a50',
                'title': 'Город, в котором всё началось',
                'name': 'episode13',
                'season': 3,
                'episode': 13,
                },
                {
                'id': 'a51',
                'title': 'Громовые копья',
                'name': 'episode14',
                'season': 3,
                'episode': 14,
                },
                {
                'id': 'a52',
                'title': 'Спуск',
                'name': 'episode15',
                'season': 3,
                'episode': 15,
                },
                {
                'id': 'a53',
                'title': 'Идеальная игра',
                'name': 'episode16',
                'season': 3,
                'episode': 16,
                },
                {
                'id': 'a54',
                'title': 'Герой',
                'name': 'episode17',
                'season': 3,
                'episode': 17,
                },
                {
                'id': 'a55',
                'title': 'Полуночное солнце',
                'name': 'episode18',
                'season': 3,
                'episode': 18,
                },
                {
                'id': 'a56',
                'title': 'Подвал',
                'name': 'episode19',
                'season': 3,
                'episode': 19,
                },
                {
                'id': 'a57',
                'title': 'В тот день',
                'name': 'episode20',
                'season': 3,
                'episode': 20,
                },
                {
                'id': 'a58',
                'title': 'Атакующий титан',
                'name': 'episode21',
                'season': 3,
                'episode': 21,
                },
                {
                'id': 'a59',
                'title': 'По Другую сторону стены',
                'name': 'episode22',
                'season': 3,
                'episode': 22,
                },
                {
                    'id': 'a60',
                    'title': 'По ту сторону океана',
                    'name': 'episode1',
                    'season': 4,
                    'episode': 1,
                    },
                    {
                    'id': 'a61',
                    'title': 'Полуночный поезд',
                    'name': 'episode2',
                    'season': 4,
                    'episode': 2,
                    },
                    {
                    'id': 'a62',
                    'title': 'Врата надежды',
                    'name': 'episode3',
                    'season': 4,
                    'episode': 3,
                    },
                    {
                    'id': 'a63',
                    'title': 'Из рук в руки',
                    'name': 'episode4',
                    'season': 4,
                    'episode': 4,
                    },
                    {
                    'id': 'a64',
                    'title': 'Объявление войны',
                    'name': 'episode5',
                    'season': 4,
                    'episode': 5,
                    },
                    {
                    'id': 'a65',
                    'title': 'Титан Молотобоец',
                    'name': 'episode6',
                    'season': 4,
                    'episode': 6,
                    },
                    {
                    'id': 'a66',
                    'title': 'Нападение',
                    'name': 'episode7',
                    'season': 4,
                    'episode': 7,
                    },
                    {
                    'id': 'a67',
                    'title': 'Пуля Убийцы',
                    'name': 'episode8',
                    'season': 4,
                    'episode': 8,
                    },
                    {
                    'id': 'a68',
                    'title': 'Добровольцы',
                    'name': 'episode9',
                    'season': 4,
                    'episode': 9,
                    },
                    {
                    'id': 'a69',
                    'title': 'Справедливый довод',
                    'name': 'episode10',
                    'season': 4,
                    'episode': 10,
                    },
                    {
                    'id': 'a70',
                    'title': 'Притворщики',
                    'name': 'episode11',
                    'season': 4,
                    'episode': 11,
                    },
                    {
                    'id': 'a71',
                    'title': 'Лидер',
                    'name': 'episode12',
                    'season': 4,
                    'episode': 12,
                    },
                    {
                    'id': 'a72',
                    'title': 'Дети леса',
                    'name': 'episode13',
                    'season': 4,
                    'episode': 13,
                    },
                    {
                    'id': 'a73',
                    'title': 'Жестокость',
                    'name': 'episode14',
                    'season': 4,
                    'episode': 14,
                    },
                    {
                    'id': 'a74',
                    'title': 'Единственное спасение',
                    'name': 'episode15',
                    'season': 4,
                    'episode': 15,
                    },
                    {
                    'id': 'a75',
                    'title': 'Небеса и Земля',
                    'name': 'episode16',
                    'season': 4,
                    'episode': 16,
                    },
                    {
                    'id': 'a76',
                    'title': 'Суждение',
                    'name': 'episode17',
                    'season': 4,
                    'episode': 17,
                    },
                    {
                    'id': 'a77',
                    'title': 'Неожиданный удар',
                    'name': 'episode18',
                    'season': 4,
                    'episode': 18,
                    },
                    {
                    'id': 'a78',
                    'title': 'Братья',
                    'name': 'episode19',
                    'season': 4,
                    'episode': 19,
                    },
                    {
                    'id': 'a79',
                    'title': 'Воспоминания о будущем',
                    'name': 'episode20',
                    'season': 4,
                    'episode': 20,
                    },
                    {
                    'id': 'a80',
                    'title': 'За две тысячи лет до тебя',
                    'name': 'episode21',
                    'season': 4,
                    'episode': 21,
                    },
                    {
                    'id': 'a81',
                    'title': 'Оттепель',
                    'name': 'episode22',
                    'season': 4,
                    'episode': 22,
                    },
                    {
                    'id': 'a82',
                    'title': 'Закат',
                    'name': 'episode23',
                    'season': 4,
                    'episode': 23,
                    },
                    {
                    'id': 'a83',
                    'title': 'Достоинство',
                    'name': 'episode24',
                    'season': 4,
                    'episode': 24,
                    },
                    {
                    'id': 'a84',
                    'title': 'Ночь конца',
                    'name': 'episode25',
                    'season': 4,
                    'episode': 25,
                    },
                    {
                    'id': 'a85',
                    'title': 'Предатель',
                    'name': 'episode26',
                    'season': 4,
                    'episode': 26,
                    },
                    {
                    'id': 'a86',
                    'title': 'Ретроспектива',
                    'name': 'episode27',
                    'season': 4,
                    'episode': 27,
                    },
                    {
                    'id': 'a87',
                    'title': 'Рассвет человечества',
                    'name': 'episode28',
                    'season': 4,
                    'episode': 28,
                    },
                    {
                    'id': 'a88',
                    'title': 'Гул Земли/Грешники',
                    'name': 'episode29',
                    'season': 4,
                    'episode': 29,
                    },
                    {
                    'id': 'a89',
                    'title': 'Финальный сезон. Заключительные Главы. Битва неба и земли / Длинный сон',
                    'name': 'episode30',
                    'season': 4,
                    'episode': 30,
                    }
    // ... остальные объекты
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})
video_playlist.addEventListener('click', (event) => {
    if (event.target.classList.contains('video')) {
        const match_video = data.find(item => item.id === event.target.dataset.id);
        main_video.src = `video/season${match_video.season}/episode${match_video.episode}.mkv`;
        main_video_title.textContent = match_video.title;
    }
});
let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = `video/season${match_video.season}/episode${match_video.episode}.mkv`;
        main_video_title.innerHTML = match_video.title;
    }
});
