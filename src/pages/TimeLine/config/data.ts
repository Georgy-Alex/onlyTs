import { TimeBlocksPeriod } from "shared/lib/TimeBlocks.interface";

export const periods: TimeBlocksPeriod[] = [
    {
        id: 1,
        title: "Технологии",
        events: [
            {
                id: "2007-tech-iphone",
                year: 2007,
                title: "Запуск iPhone",
                description: "Apple представила первый iPhone и задала стандарт для смартфонов.",
            },
            {
                id: "2009-tech-btc",
                year: 2009,
                title: "Bitcoin v0.1",
                description: "Сатоши Накамото опубликовал первую версию биткоина и добыл генезис-блок.",
            },
            {
                id: "2010-tech-ipad",
                year: 2010,
                title: "iPad 1-го поколения",
                description: "Apple запустила новую категорию устройств — планшеты массового сегмента.",
            },
            {
                id: "2012-tech-rpi",
                year: 2012,
                title: "Raspberry Pi",
                description: "Появилась недорогая одноплатная плата для обучения и прототипирования.",
            },
            {
                id: "2014-tech-swift",
                year: 2014,
                title: "Swift 1.0",
                description: "Apple представила новый язык программирования для экосистемы iOS/macOS.",
            },
            {
                id: "2016-tech-alphago",
                year: 2016,
                title: "AlphaGo vs Ли Седоль",
                description: "ИИ Google DeepMind победил чемпиона мира по го — прорыв в ИИ.",
            },
            {
                id: "2018-tech-gdpr",
                year: 2018,
                title: "GDPR",
                description: "В ЕС вступил в силу Общий регламент по защите данных — новый стандарт приватности.",
            },
            {
                id: "2020-tech-crew-dragon",
                year: 2020,
                title: "Crew Dragon (пилотируемо)",
                description: "SpaceX выполнила первый коммерческий пилотируемый полёт к МКС.",
            },
        ],
    },
    {
        id: 2,
        title: "Кино",
        events: [
            {
                id: "1994-cinema-pulpfiction",
                year: 1994,
                title: "«Криминальное чтиво»",
                description: "Золотая пальмовая ветвь в Каннах — триумф Квентина Тарантино.",
            },
            {
                id: "1997-cinema-titanic",
                year: 1997,
                title: "«Титаник»",
                description: "Рекордный успех фильма Джеймса Кэмерона (11 «Оскаров» на церемонии 1998).",
            },
            {
                id: "2003-cinema-lotr3",
                year: 2003,
                title: "«Властелин колец: Возвращение короля»",
                description: "Эпический финал трилогии — 11 «Оскаров» (церемония 2004).",
            },
            {
                id: "2009-cinema-avatar",
                year: 2009,
                title: "«Аватар»",
                description: "Прорыв в 3D-кинематографе и кассовых сборах.",
            },
            {
                id: "2012-cinema-avengers",
                year: 2012,
                title: "«Мстители»",
                description: "Marvel объединила героев в одном фильме — кассовой доминатор.",
            },
            {
                id: "2015-cinema-madmax",
                year: 2015,
                title: "«Безумный Макс: Дорога ярости»",
                description: "Визуально-режиссёрский эталон экшена, 6 технических «Оскаров».",
            },
            {
                id: "2019-cinema-parasite",
                year: 2019,
                title: "«Паразиты»",
                description: "Первый неанглоязычный фильм — обладатель «Оскара» за лучший фильм.",
            },
            {
                id: "2021-cinema-dune",
                year: 2021,
                title: "«Дюна»",
                description: "Технико-визуальный эталон — множество премий в категориях звука/визуала.",
            },
        ],
    },
    {
        id: 3,
        title: "Литература",
        events: [
            {
                id: "1997-lit-hp1",
                year: 1997,
                title: "Гарри Поттер и Философский камень",
                description: "Публикация первой книги Дж. К. Роулинг — мировой феномен для молодёжи.",
            },
            {
                id: "2000-lit-nobel-gao",
                year: 2000,
                title: "Нобель — Гао Синцзянь",
                description: "Премия за новаторское сочетание повествовательных форм и культур.",
            },
            {
                id: "2006-lit-nobel-pamuk",
                year: 2006,
                title: "Нобель — Орхан Памук",
                description: "Отмечен за поиск «меланхолической души» его родного города.",
            },
            {
                id: "2015-lit-nobel-alex",
                year: 2015,
                title: "Нобель — Светлана Алексиевич",
                description: "За полифонические произведения — монумент памяти и страдания.",
            },
            {
                id: "2016-lit-nobel-dylan",
                year: 2016,
                title: "Нобель — Боб Дилан",
                description: "За создание новых поэтических выражений в великой песенной традиции.",
            },
            {
                id: "2017-lit-nobel-ishiguro",
                year: 2017,
                title: "Нобель — Кадзуо Исигуро",
                description: "За эмоциональную силу и открытие бездны под иллюзиями мира.",
            },
        ],
    },
    {
        id: 4,
        title: "Театр",
        events: [
            {
                id: "1986-theatre-phantom",
                year: 1986,
                title: "«Призрак Оперы» (Вест-Энд)",
                description: "Премьера мюзикла Эндрю Ллойда Уэббера — будущая легенда.",
            },
            {
                id: "1999-theatre-mammamia",
                year: 1999,
                title: "«Mamma Mia!»",
                description: "Премьера в Лондоне — мировая поп-культура и кассовый успех.",
            }
        ],
    },
    {
        id: 5,
        title: "Криштиану Роналду",
        events: [
            {
                id: "2008-cr7-ballon-cl",
                year: 2008,
                title: "Первый «Золотой мяч» и ЛЧ",
                description: "Криштиану Роналду выиграл ЛЧ с «МЮ» и получил первый Ballon d’Or.",
            },
            {
                id: "2013-cr7-ballon2",
                year: 2013,
                title: "Возвращение на вершину",
                description: "Второй «Золотой мяч» — рекордные показатели результативности.",
            },
            {
                id: "2014-cr7-decima",
                year: 2014,
                title: "La Décima и рекорд в ЛЧ",
                description: "ЛЧ с «Реалом», рекорд голов за сезон ЛЧ и третий Ballon d’Or.",
            },
            {
                id: "2016-cr7-euro",
                year: 2016,
                title: "Чемпион Европы",
                description: "Португалия выиграла Евро-2016; у Роналду — четвёртый Ballon d’Or.",
            },
            {
                id: "2017-cr7-ballon5",
                year: 2017,
                title: "Пятый Ballon d’Or",
                description: "Очередная победа в ЛЧ и пятый «Золотой мяч» — исторический паритет.",
            },
            {
                id: "2018-cr7-ucl3inarow",
                year: 2018,
                title: "Три ЛЧ подряд",
                description: "Третья подряд победа в Лиге чемпионов — 5-й титул Роналду.",
            },
            {
                id: "2019-cr7-nations",
                year: 2019,
                title: "Лига наций УЕФА",
                description: "Португалия — первый победитель нового турнира сборных.",
            },
            {
                id: "2020-cr7-100intl",
                year: 2020,
                title: "100 голов за сборную",
                description: "Криштиану преодолел отметку 100 голов в матчах за Португалию.",
            },
            {
                id: "2021-cr7-intlrecord",
                year: 2021,
                title: "Рекорд бомбардиров сборных",
                description: "Обошёл Али Даеи и стал лучшим снайпером в истории сборных.",
            },
            {
                id: "2022-cr7-fiveworldcups",
                year: 2022,
                title: "5 ЧМ подряд со голом",
                description: "Первый в истории забил на пяти чемпионатах мира.",
            },
        ],
    },
    {
        id: 6,
        title: "Наука",
        events: [
            { id: "2012-science-higgs", year: 2012, title: "Бозон Хиггса", description: "CERN подтвердил открытие бозона Хиггса на БАК." },
            {
                id: "2015-science-ligo",
                year: 2015,
                title: "Гравитационные волны",
                description: "LIGO впервые зафиксировал GW — прямое подтверждение Эйнштейна.",
            },
            {
                id: "2016-science-proximab",
                year: 2016,
                title: "Проксима b",
                description: "Обнаружена экзопланета у ближайшей звезды к Солнцу.",
            },
            {
                id: "2018-science-parker",
                year: 2018,
                title: "Parker Solar Probe",
                description: "Зонд NASA отправлен «потрогать» корону Солнца.",
            },
            {
                id: "2019-science-eht",
                year: 2019,
                title: "Тень чёрной дыры",
                description: "Event Horizon Telescope показал первую «тень» чёрной дыры (M87*).",
            },
            {
                id: "2020-science-mrna",
                year: 2020,
                title: "mRNA-вакцины",
                description: "Прорывные вакцины против COVID-19 на основе мРНК.",
            },
        ],
    },
];
