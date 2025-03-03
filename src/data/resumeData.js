const resumeData = {
    name: "Мартынов Дмитрий",
    profession: "Legal technologies specialist",
    skills: ["Legal expertise", "SQL", "Frontend", "Python"],

    description: [
        { paragraph: "Бакалавр факультета права ВШЭ (июнь 2025 г.), планирую развиваться в направлении LegalTech – автоматизации юридических процессов" },
        { paragraph: "Интересуюсь корпоративным, санкционным правом, а также направлением IT / IP" }
    ],

    photo: [
        {
            type: "photo",
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
            title: "Веб-приложение для резюме",
            description: "Интерактивное резюме с React и API.",
            link: "https://neuvichidmartyn.github.io/2249401-kekstagram-29/",
            // image: "https://yourproject.com/preview.jpg" // Добавь превью проекта
        },
        {
            title: "AI-комментатор для видео",
            description: "Сервис, который анализирует видео и добавляет комментарии.",
            link: "https://neuvichidmartyn.github.io/Device-1/",
            // image: "https://yourproject.com/preview2.jpg"
        },
        {
            title: "AI-комментатор для видео",
            description: "Сервис, который анализирует видео и добавляет комментарии.",
            link: "https://github.com/BAEstudent/Final_Project",
            // image: "https://yourproject.com/preview2.jpg"
        },
        {
            title: "AI-комментатор для видео",
            description: "Сервис, который анализирует видео и добавляет комментарии.",
            link: "https://yourproject.com",
            // image: "https://unsplash.com/s/photos/funny-cat"
        }
    ],


    contacts: [
        { type: "Phone", value: "+78888888888", link: "https://t.me/username" },
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
