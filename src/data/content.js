// ─────────────────────────────────────────────────────────────
//  Двуязычный контент портфолио (RU / EN). Позиционирование:
//  product builder с сильным инженерным бэкграундом.
//  Текущий язык выбирается через src/i18n/lang.jsx.
// ─────────────────────────────────────────────────────────────

import { asset } from '../lib/asset.js';

// Цвет акцента зависит от статуса: готовые проекты — зелёные, в работе — оранжевые.
const STATUS_ACCENT = { live: '#c8693e', wip: '#c8693e', done: '#2f4029' };

// Нетекстовые поля проектов (общие для всех языков) — один источник правды
// для координат на карте, картинок домиков и статусов.
const projectsBase = [
  {
    id: 'batya',
    status: 'live',
    role: 'PM · Solo build',
    house: asset('house-tower.png'),
    pin: { x: 46, y: 36 }, // центральная полянка
    focus: { scale: 4.5 },
  },
  {
    id: 'school-rag',
    status: 'wip',
    role: 'Solo build',
    house: asset('house-manor.png'),
    pin: { x: 67, y: 20 }, // полянка справа вверху
    focus: { scale: 4.5 },
  },
  {
    id: 'debt-recommender',
    status: 'done',
    role: 'ML / Analytics',
    house: asset('house-farm.png'),
    pin: { x: 29, y: 90 }, // полянка слева внизу
    focus: { scale: 4.5 },
  },
  {
    id: 'meetings-bot',
    status: 'done',
    role: 'Python Developer (internship)',
    house: asset('house-cottage.png'),
    pin: { x: 86.5, y: 76 }, // полянка справа внизу
    focus: { scale: 4.5 },
  },
  {
    id: 'career-analyzer',
    status: 'done',
    role: 'Solo build',
    house: asset('house-observatory.png'),
    pin: { x: 10, y: 37 },
    focus: { scale: 4.5 },
  },
];

// Склеивает нетекстовые поля с текстом нужного языка по id.
function buildProjects(textMap) {
  return projectsBase.map((base) => ({
    ...base,
    ...textMap[base.id],
    accent: STATUS_ACCENT[base.status] || '#c8693e',
  }));
}

// Якоря анимированных элементов на карте (координаты в % от размера карты).
// Не зависят от языка.
export const mapAnchors = {
  lighthouse: { x: 3.5, y: 60 },
  birds: [
    { x: 30, y: 10, duration: 22, delay: 0, size: 34 },
    { x: 58, y: 38, duration: 28, delay: 4, size: 26 },
    { x: 78, y: 20, duration: 24, delay: 8, size: 30 },
    { x: 18, y: 26, duration: 26, delay: 2, size: 38 },
    { x: 44, y: 14, duration: 20, delay: 11, size: 28 },
    { x: 66, y: 52, duration: 30, delay: 6, size: 24 },
    { x: 88, y: 34, duration: 23, delay: 14, size: 32 },
    { x: 38, y: 60, duration: 27, delay: 9, size: 30 },
    { x: 72, y: 8, duration: 21, delay: 16, size: 36 },
  ],
};

// ─────────────────────────────────────────────────────────────
//  RUSSIAN
// ─────────────────────────────────────────────────────────────
const ru = {
  ui: {
    nav: {
      about: 'Обо мне',
      projects: 'Проекты',
      experience: 'Опыт',
      contact: 'Контакты',
      back: '← на главную',
      langTitle: 'Сменить язык',
    },
    hero: { namePrefix: 'меня зовут', scroll: 'листай' },
    about: { eyebrow: 'Обо мне' },
    projects: {
      eyebrow: 'Проекты',
      mapTitle: 'Карта работ',
      listTitle: 'Список проектов',
      hintMap: 'Нажми на домик — карта приблизится и покажет карточку проекта',
      hintList: 'Нажми на проект, чтобы открыть подробное описание',
      mapAlt: 'Карта проектов',
      toggleMap: 'Карта',
      toggleList: 'Список',
      viewLabel: 'Вид проектов',
    },
    card: {
      status: { live: 'live', wip: 'в разработке', done: 'готово' },
      more: 'подробнее →',
    },
    experience: {
      eyebrow: 'Опыт',
      title: 'Путь',
      skills: 'Навыки',
      education: 'Образование',
    },
    contact: {
      eyebrow: 'Контакты',
      titleLine1: 'Построим продукт',
      titleLine2: 'нужный людям',
      houseAlt: 'Строим продукт',
    },
    detail: {
      back: '← к карте проектов',
      backShort: '← к карте',
      whatDone: 'Что сделано',
      nextProject: 'Следующий проект',
      notFound: 'Проект не найден.',
      allProjects: 'Все проекты',
    },
    toast: { mailCopied: 'Почта скопирована' },
  },

  profile: {
    greeting: 'Привет',
    name: 'Михаил',
    role: 'product builder',
    tagline: 'Строю AI-продукты от исследования пользователей до работающего MVP.',
    intro:
      'Сначала разбираюсь, что человеку действительно нужно, потом собираю это руками. Продуктовое мышление держит фокус на боли, а опыт разработки — доводит идею до работающего продукта',
    socials: [
      { label: 'Telegram', href: 'https://t.me/mMohnov' },
      { label: 'GitHub', href: 'https://github.com/WasTeime?tab=repositories' },
      { label: 'Email', href: 'mailto:mischa2100@mail.ru' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mihail-m-82a34a3b8' },
    ],
  },

  about: {
    paragraphs: [
      'Мне нравится превращать идею в то, чем пользуются. Я начинаю с человека и его боли, а не с фич, при этом могу собрать продукт сам',
      'Математика и логика дают структуру, разработка — возможность воплотить идею своими руками, а продуктовое мышление не даёт уйти в абстракцию и держит фокус на реальной боли пользователя',
      'Преподавание дало умение объяснять сложное просто, продажи — чувствовать, что человеку действительно нужно, а вместе они помогают находить настоящую боль, проверять гипотезы данными и строить под них решение',
    ],
    cards: [
      { id: 'product', title: 'PRODUCT', caption: 'от боли к MVP', icon: 'compass' },
      { id: 'data', title: 'DATA', caption: 'гипотезы и метрики', icon: 'chart' },
      { id: 'craft', title: 'CRAFT', caption: 'собираю сам', icon: 'tools' },
      { id: 'people', title: 'PEOPLE', caption: 'объясняю просто', icon: 'hands' },
    ],
  },

  projects: buildProjects({
    batya: {
      name: '«Батя»',
      subtitle: 'AI-трекер привычек',
      short: 'Помогает не бросить привычку после срыва',
      period: 'Апрель 2025 — н.в.',
      context: 'Личный продукт',
      stack: ['Android Native (Kotlin)', 'LLM API', 'Промпт-инжиниринг', 'Figma'],
      summary:
        'Трекер привычек, который помогает не бросить после первого же срыва. Пропустил день — приложение помогает вернутьсяв строй. Основа это живой персонаж-наставник Батя, который поддерживает и мотивирует, а не просто сухая статистика.',
      highlights: [
        'Поговорил с 36 людьми и понял главное: почти половина бросает привычку после первого же пропуска — нет способа вернуться.',
        'Сделал наставника-персонажа «Батю»: после срыва он не ругает, а возвращает в строй.',
        'Собрал MVP за 2 недели — трекинг, статистика и живой чат с наставником.',
        'Прикинул экономику: при платной подписке продукт окупается даже без затрат на рекламу.',
      ],
    },
    'school-rag': {
      name: 'Telegram-бот для школы',
      subtitle: 'RAG-ассистент',
      short: 'Отвечает родителям вместо менеджера',
      period: '',
      context: 'Коммерческий проект',
      stack: ['Python', 'aiogram 3', 'ChromaDB', 'ONNX', 'OpenRouter API', 'Docker'],
      summary:
        'Берёт на себя поток одинаковых вопросов родителей: сам находит ответ, а если сомневается — зовёт менеджера и запоминает, что тот ответил. В следующий раз справляется сам.',
      highlights: [
        'Менеджеры тонут в одинаковых вопросах родителей — на это уходит куча времени.',
        'Поиск ответа по смыслу в базе знаний «вопрос-ответ». Если бот не уверен — эскалация: менеджер отвечает пользователю, и новая пара «вопрос-ответ» попадает в базу.',
        'Менеджеру — удобная панель, чтобы отвечать на эскалации.',
        'Админская панель: чат на основе ИИ показывает слабые места базы знаний, помогает её пополнять и удобно ею управлять, плюс статистика качества работы бота.',
      ],
    },
    'debt-recommender': {
      name: 'Debt Recommender',
      subtitle: 'ML-пайплайн',
      short: 'Подсказывает, как работать с каждым должником Энергокомпании',
      period: '',
      context: 'Хакатон',
      stack: ['Python', 'pandas', 'scikit-learn', 'openpyxl'],
      summary:
        'Подсказывает, как лучше работать с каждым должником Энергокомпании (ТНС Энерго), чтобы вернуть больше денег и не потратить лишнего. Сам сортирует счета и предлагает, что с ними делать.',
      highlights: [
        'Энергокомпании (ТНС Энерго) нужно решить, к какому должнику какую меру применить, когда ресурсов на всех не хватает.',
        'Сделал систему, которая сама группирует должников и подсказывает действие по каждому.',
        'Для каждого счёта считает ожидаемый эффект и распределяет меры в рамках бюджета.',
        'На выходе — понятный Excel-отчёт по каждому должнику; система расставляет меры выгоднее, чем привычный ручной подход.',
      ],
    },
    'meetings-bot': {
      name: 'AI-бот встреч',
      subtitle: 'Rocket.Chat ассистент',
      short: 'Назначает встречи прямо в рабочем чате',
      period: '04.2026 — 05.2026',
      context: 'Стажировка',
      stack: ['Python', 'LLM (GPT-4o mini)', 'OpenRouter', 'Rocket.Chat', 'SMTP', 'Docker'],
      summary:
        'Назначает и отменяет встречи прямо в рабочем чате. Пишешь как обычно, человеческим языком — а он понимает запрос, создаёт встречу и сам рассылает приглашения.',
      highlights: [
        'Команда назначала встречи вручную — лишняя рутина в чате.',
        'Сделал бота: пишешь обычным языком — он понимает и сам создаёт или отменяет встречу.',
        'Рассылает приглашения с файлом для календаря, всё крутится в Docker.',
        'Разобрал чужой запутанный код на модули и встроил новое; неформально координировал команду из 4 человек.',
      ],
    },
    'career-analyzer': {
      name: 'Career Analyzer',
      subtitle: 'AI-аналитик карьеры',
      short: 'Собирает карьерный разбор по IT-профессии',
      period: 'Пет-проект',
      stack: [
        'Python',
        'LLM (Claude Haiku 4.5)',
        'Groq / OpenRouter',
        'hh.ru API',
        'Pydantic',
        'Docker',
      ],
      summary:
        'Вводишь IT-профессию — и получаешь готовый разбор: какие навыки нужны, сколько платят и с чего начать учиться. Отчёт за тебя собирают несколько ИИ-агентов.',
      highlights: [
        'Когда выбираешь IT-направление, информация раскидана по десяткам вакансий и статей — собрать цельную картину тяжело.',
        'Сделал систему, которая по названию профессии сама собирает разбор: нужные навыки, зарплаты и план обучения.',
        'Внутри — несколько ИИ-агентов: один собирает навыки, другой берёт реальные зарплаты с hh.ru, третий строит план на 3 месяца, а «критик» проверяет отчёт на противоречия.',
        'Собрал всё сам — от агентов до Docker; добавить нового агента можно одной строкой.',
      ],
    },
  }),

  experience: [
    {
      period: '04.2026 — 05.2026',
      title: 'Python Developer (стажировка)',
      org: 'Raft Digital Solutions',
      note: 'С нуля довёл бота для создания встреч в телемосте до рабочего пайплайна — от понимания запроса в чате с помощью LLM до письма с ICS. Отрефакторил легаси-код и неформально вёл команду из 4 человек.',
    },
    {
      period: '11.2025 — н.в.',
      title: 'Репетитор',
      org: 'Частная практика · Самозанятый',
      note: 'Объясняю сложное простым языком, понятным любому ученику, — поэтому 9 из 10 остаются на долгосрочное сотрудничество',
    },
    {
      period: '09.2025 — 05.2026',
      title: 'Преподаватель программирования',
      org: 'IT-центр "Траектория"',
      note: 'Превращал сложные термины и структуры в понятные образы из игр и спорта — так подростки 10–17 лет не бросали учёбу и оставались 6+ месяцев. Группы в среднем состояли из 5–10 человек.',
    },
    {
      period: '03.2024 — 11.2024',
      title: 'Backend Developer',
      org: '',
      note: 'Пришёл на бэкенд, но закрыл и фронтенд: освоил необходимую часть React для решения задачи. Работал в команде, состоящей из 10 человек.',
    },
    {
      period: '10.2022 — 01.2024',
      title: 'Backend Developer (Junior)',
      org: 'МФК Фордевинд',
      note: 'Реализовал 20+ фич для внутренней CRM, которые помогли закрыть боли менеджеров. Оптимизировал SQL и внедрил кэширование — сократил время обработки заявок на ~15%.',
    },
  ],

  skills: [
    {
      group: 'Продукт',
      items: ['Customer development', 'Конкурентный анализ', 'Гипотезы и инсайты', 'Запуск MVP'],
    },
    {
      group: 'Данные',
      items: ['Анализ данных (pandas)', 'Продуктовые метрики', 'Отчёты в Excel'],
    },
    {
      group: 'Разработка',
      items: [
        'Python',
        'FastAPI',
        'PHP / Laravel',
        'PostgreSQL',
        'MySQL',
        'Docker',
        'LLM-интеграции',
        'RAG',
        'Промпт-инжиниринг',
      ],
    },
    {
      group: 'Люди',
      items: ['Объясняю сложное просто', 'Преподавание', 'Продажи'],
    },
  ],

  education: {
    place: 'Яргу им. П. Г. Демидова',
    faculty: 'Факультет информатики и вычислительной техники',
    direction: 'Прикладная информатика и математика',
    period: '2021 — н.в.',
    courses: ['Теория вероятностей', 'Статистика', 'Алгоритмы и структуры данных'],
    extra: [
      'Тимлид волонтёрской команды — Школа 21 "Сбер", февраль 2026.',
      'Тимлид студенческого проекта — сервис для разделения счетов.',
      'Английский — B1 (чтение документации, техническая переписка).',
    ],
  },
};

// ─────────────────────────────────────────────────────────────
//  ENGLISH
// ─────────────────────────────────────────────────────────────
const en = {
  ui: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      back: '← back home',
      langTitle: 'Switch language',
    },
    hero: { namePrefix: 'my name is', scroll: 'scroll' },
    about: { eyebrow: 'About me' },
    projects: {
      eyebrow: 'Projects',
      mapTitle: 'Work map',
      listTitle: 'Project list',
      hintMap: 'Tap a house — the map zooms in and shows the project card',
      hintList: 'Tap a project to open the full description',
      mapAlt: 'Project map',
      toggleMap: 'Map',
      toggleList: 'List',
      viewLabel: 'Project view',
    },
    card: {
      status: { live: 'live', wip: 'in progress', done: 'done' },
      more: 'read more →',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Path',
      skills: 'Skills',
      education: 'Education',
    },
    contact: {
      eyebrow: 'Contact',
      titleLine1: "Let's build a product",
      titleLine2: 'people need',
      houseAlt: 'Building a product',
    },
    detail: {
      back: '← back to the map',
      backShort: '← back to map',
      whatDone: 'What I did',
      nextProject: 'Next project',
      notFound: 'Project not found.',
      allProjects: 'All projects',
    },
    toast: { mailCopied: 'Email copied' },
  },

  profile: {
    greeting: 'Hello',
    name: 'Mikhail',
    role: 'product builder',
    tagline: 'I build AI products — from user research to a working MVP.',
    intro:
      "First I figure out what a person really needs, then I build it by hand. Product thinking keeps the focus on the pain, and a developer's background takes the idea all the way to a working product.",
    socials: [
      { label: 'Telegram', href: 'https://t.me/mMohnov' },
      { label: 'GitHub', href: 'https://github.com/WasTeime?tab=repositories' },
      { label: 'Email', href: 'mailto:mischa2100@mail.ru' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mihail-m-82a34a3b8' },
    ],
  },

  about: {
    paragraphs: [
      'I like turning an idea into something people actually use. I start from the person and their pain, not from features — and I can build the product myself.',
      "Math and logic give structure, development lets me build the idea with my own hands, and product thinking keeps me out of the abstract and focused on the user's real pain.",
      'Teaching taught me to explain complex things simply, sales taught me to sense what a person truly needs, and together they help me find the real pain, test hypotheses with data and build a solution around it.',
    ],
    cards: [
      { id: 'product', title: 'PRODUCT', caption: 'from pain to MVP', icon: 'compass' },
      { id: 'data', title: 'DATA', caption: 'hypotheses & metrics', icon: 'chart' },
      { id: 'craft', title: 'CRAFT', caption: 'I build it myself', icon: 'tools' },
      { id: 'people', title: 'PEOPLE', caption: 'I explain it simply', icon: 'hands' },
    ],
  },

  projects: buildProjects({
    batya: {
      name: 'Batya',
      subtitle: 'AI habit tracker',
      short: 'Helps you not quit a habit after a slip',
      period: 'April 2025 — now',
      context: 'Personal product',
      stack: ['Android Native (Kotlin)', 'LLM API', 'Prompt engineering', 'Figma'],
      summary:
        'A habit tracker that helps you keep going after the very first slip. Miss a day and the app helps you get back on track. At its core is a living mentor character, Batya, who supports and motivates you instead of just showing dry stats.',
      highlights: [
        "Talked to 36 people and found the key problem: almost half quit a habit after the first missed day — there's no way back in.",
        'Built a mentor character, "Batya": after a slip he doesn\'t scold you, he gets you back on track.',
        'Shipped an MVP in 2 weeks — tracking, stats and a live chat with the mentor.',
        'Ran the economics: with a paid subscription the product pays off even without ad spend.',
      ],
    },
    'school-rag': {
      name: 'School Telegram bot',
      subtitle: 'RAG assistant',
      short: 'Answers parents instead of a manager',
      period: '',
      context: 'Commercial project',
      stack: ['Python', 'aiogram 3', 'ChromaDB', 'ONNX', 'OpenRouter API', 'Docker'],
      summary:
        'Takes the flood of repetitive parent questions off the team: it finds the answer itself, and when it is unsure it calls a manager and remembers the reply. Next time it handles it on its own.',
      highlights: [
        'Managers drown in the same parent questions over and over — it eats a lot of time.',
        'Semantic search over a "question–answer" knowledge base. If the bot is unsure — escalation: a manager replies to the user, and the new "question–answer" pair goes into the base.',
        'A handy panel for managers to answer escalations.',
        "Admin panel: an AI-powered chat surfaces weak spots in the knowledge base, helps fill and manage it, plus stats on the bot's answer quality.",
      ],
    },
    'debt-recommender': {
      name: 'Debt Recommender',
      subtitle: 'ML pipeline',
      short: 'Suggests how to handle each debtor of an energy company',
      period: '',
      context: 'Hackathon',
      stack: ['Python', 'pandas', 'scikit-learn', 'openpyxl'],
      summary:
        'Suggests how best to handle each debtor of an energy company (TNS Energo) to recover more money without overspending. It sorts the accounts itself and proposes what to do with each.',
      highlights: [
        "An energy company (TNS Energo) needs to decide which action to apply to which debtor when there aren't enough resources for everyone.",
        'Built a system that groups debtors on its own and suggests an action for each.',
        'For every account it estimates the expected effect and allocates actions within the budget.',
        'The output is a clear Excel report per debtor; the system assigns actions more profitably than the usual manual approach.',
      ],
    },
    'meetings-bot': {
      name: 'AI meetings bot',
      subtitle: 'Rocket.Chat assistant',
      short: 'Schedules meetings right in your work chat',
      period: '04.2026 — 05.2026',
      context: 'Internship',
      stack: ['Python', 'LLM (GPT-4o mini)', 'OpenRouter', 'Rocket.Chat', 'SMTP', 'Docker'],
      summary:
        'Schedules and cancels meetings right in your work chat. You write in plain language as usual — it understands the request, creates the meeting and sends out the invites itself.',
      highlights: [
        'The team scheduled meetings by hand — extra busywork in the chat.',
        'Built a bot: write in plain language — it understands and creates or cancels the meeting itself.',
        'Sends invites with a calendar file, everything running in Docker.',
        "Refactored someone else's tangled code into modules and wired in the new feature; informally coordinated a team of 4.",
      ],
    },
    'career-analyzer': {
      name: 'Career Analyzer',
      subtitle: 'AI career analyst',
      short: 'Builds a career breakdown for an IT profession',
      period: 'Pet project',
      stack: [
        'Python',
        'LLM (Claude Haiku 4.5)',
        'Groq / OpenRouter',
        'hh.ru API',
        'Pydantic',
        'Docker',
      ],
      summary:
        'Type in an IT profession and get a ready breakdown: which skills you need, how much it pays and where to start learning. A few AI agents put the report together for you.',
      highlights: [
        'When you pick an IT path, the information is scattered across dozens of job posts and articles — building a whole picture is hard.',
        'Built a system that, given a profession name, assembles the breakdown itself: required skills, salaries and a learning plan.',
        'Inside are several AI agents: one gathers skills, another pulls real salaries from hh.ru, a third builds a 3-month plan, and a "critic" checks the report for contradictions.',
        'Built it all myself — from the agents to Docker; adding a new agent takes one line.',
      ],
    },
  }),

  experience: [
    {
      period: '04.2026 — 05.2026',
      title: 'Python Developer (internship)',
      org: 'Raft Digital Solutions',
      note: 'Took a meeting-scheduling bot for a video bridge from zero to a working pipeline — from understanding the chat request with an LLM to an email with an ICS file. Refactored legacy code and informally led a team of 4.',
    },
    {
      period: '11.2025 — now',
      title: 'Tutor',
      org: 'Private practice · Self-employed',
      note: "I explain complex things in simple language any student can follow — that's why 9 out of 10 stay for long-term work.",
    },
    {
      period: '09.2025 — 05.2026',
      title: 'Programming teacher',
      org: 'IT center "Traektoria"',
      note: "Turned complex terms and structures into clear images from games and sports — so teens aged 10–17 didn't drop out and stayed 6+ months. Groups averaged 5–10 people.",
    },
    {
      period: '03.2024 — 11.2024',
      title: 'Backend Developer',
      org: '',
      note: 'Came in on the backend but covered the frontend too: learned the part of React the task needed. Worked in a team of 10.',
    },
    {
      period: '10.2022 — 01.2024',
      title: 'Backend Developer (Junior)',
      org: 'MFK Fordewind',
      note: "Shipped 20+ features for the internal CRM that solved managers' pain points. Optimized SQL and added caching — cut request processing time by ~15%.",
    },
  ],

  skills: [
    {
      group: 'Product',
      items: ['Customer development', 'Competitive analysis', 'Hypotheses & insights', 'MVP launch'],
    },
    {
      group: 'Data',
      items: ['Data analysis (pandas)', 'Product metrics', 'Excel reports'],
    },
    {
      group: 'Development',
      items: [
        'Python',
        'FastAPI',
        'PHP / Laravel',
        'PostgreSQL',
        'MySQL',
        'Docker',
        'LLM integrations',
        'RAG',
        'Prompt engineering',
      ],
    },
    {
      group: 'People',
      items: ['Explaining complex things simply', 'Teaching', 'Sales'],
    },
  ],

  education: {
    place: 'P. G. Demidov Yaroslavl State University',
    faculty: 'Faculty of Informatics and Computer Science',
    direction: 'Applied Informatics and Mathematics',
    period: '2021 — now',
    courses: ['Probability theory', 'Statistics', 'Algorithms & data structures'],
    extra: [
      'Team lead of a volunteer team — School 21 "Sber", February 2026.',
      'Team lead of a student project — a bill-splitting service.',
      'English — B1 (reading docs, technical correspondence).',
    ],
  },
};

export const content = { ru, en };
