const resumeData = {
    name: "Мартынов Дмитрий",
    profession: "Legal technologies specialist",
    skills: ["Legal expertise", "SQL", "Frontend", "Python"],
    
    description: [
        {paragraph: "Бакалавр факультета права ВШЭ (июнь 2025 г.), планирую развиваться в направлении LegalTech – автоматизации юридических процессов"},
        {paragraph: "Интересуюсь корпоративным, санкционным правом, а также направлением IT / IP"}
    ],

    photo: [
        {type: "photo",
         path: "/mda-photo.jpg"
        }
    ],

    experience: [
        {
            position: "Юридический аналитик",
            company: "Центр международной поддержки проектов",
            years: "2023 - настоящее время",
            description: "Подготовка аналитических записок, анализ иностранного законодательства."
        },
        {
            position: "Стажер по Legal Tech",
            company: "Юридическая фирма X",
            years: "2022",
            description: "Разметка данных, работа с Python и SQL для автоматизации юридических процессов."
        }
    ],

    education: [
        {
            degree: "Магистр права",
            institution: "Университет X",
            year: "2024"
        },
        {
            degree: "Бакалавр права",
            institution: "Университет Y",
            year: "2022"
        }
    ],

    projects: [
        {
            title: "Разработка веб-приложения для резюме",
            description: "Создание интерактивного резюме с использованием React и API для загрузки данных.",
            link: "https://github.com/yourproject"
        },
        {
            title: "AI-комментатор для видео",
            description: "Сервис, который анализирует видео и добавляет автоматические комментарии.",
            link: "https://yourproject.com"
        }
    ],

    contacts: [
        { type: "Email", value: "your.email@example.com", link: "mailto:your.email@example.com" },
        { type: "LinkedIn", value: "linkedin.com/in/yourprofile", link: "https://linkedin.com/in/yourprofile" },
        { type: "GitHub", value: "github.com/yourusername", link: "https://github.com/yourusername" }
    ],

    languages: [
        { name: "Русский", level: "Родной" },
        { name: "Английский", level: "B2" },
        { name: "Немецкий", level: "A2" }
    ],

    hobbies: ["Путешествия", "Сериалы", "Военная техника", "Чтение"],

    additionalSkills: ["Анализ данных", "Проектный менеджмент", "Работа с API", "Финансовая аналитика"]
};

export default resumeData;
