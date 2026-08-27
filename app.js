// ===============================
// ZabanPro - Complete App
// ===============================

const languages = [
    { id: "en", name: "انگلیسی", flag: "🇬🇧", native: "English" },
    { id: "de", name: "آلمانی", flag: "🇩🇪", native: "Deutsch" },
    { id: "es", name: "اسپانیایی", flag: "🇪🇸", native: "Español" },
    { id: "fr", name: "فرانسوی", flag: "🇫🇷", native: "Français" },
    { id: "it", name: "ایتالیایی", flag: "🇮🇹", native: "Italiano" },
    { id: "pt", name: "پرتغالی", flag: "🇵🇹", native: "Português" },
    { id: "ru", name: "روسی", flag: "🇷🇺", native: "Русский" },
    { id: "tr", name: "ترکی", flag: "🇹🇷", native: "Türkçe" },
    { id: "ar", name: "عربی", flag: "🇸🇦", native: "العربية" },
    { id: "ja", name: "ژاپنی", flag: "🇯🇵", native: "日本語" },
    { id: "ko", name: "کره‌ای", flag: "🇰🇷", native: "한국어" },
    { id: "zh", name: "چینی", flag: "🇨🇳", native: "中文" },
    { id: "nl", name: "هلندی", flag: "🇳🇱", native: "Nederlands" },
    { id: "sv", name: "سوئدی", flag: "🇸🇪", native: "Svenska" },
    { id: "pl", name: "لهستانی", flag: "🇵🇱", native: "Polski" },
    { id: "el", name: "یونانی", flag: "🇬🇷", native: "Ελληνικά" },
    { id: "hi", name: "هندی", flag: "🇮🇳", native: "हिन्दी" },
    { id: "no", name: "نروژی", flag: "🇳🇴", native: "Norsk" },
    { id: "da", name: "دانمارکی", flag: "🇩🇰", native: "Dansk" },
    { id: "fi", name: "فنلاندی", flag: "🇫🇮", native: "Suomi" }
];

// =====================================
// داده‌های آموزشی
// =====================================

const courses = {

en: {
    words: [
        ["hello", "سلام"],
        ["book", "کتاب"],
        ["house", "خانه"],
        ["water", "آب"],
        ["friend", "دوست"],
        ["school", "مدرسه"],
        ["food", "غذا"],
        ["family", "خانواده"],
        ["morning", "صبح"],
        ["night", "شب"],
        ["happy", "خوشحال"],
        ["beautiful", "زیبا"],
        ["learn", "یاد گرفتن"],
        ["speak", "صحبت کردن"],
        ["write", "نوشتن"]
    ],
    grammar: [
        {
            title: "فعل to be",
            explanation: "برای معرفی و توصیف از am / is / are استفاده می‌کنیم.",
            example: "I am a student."
        },
        {
            title: "حال ساده",
            explanation: "برای عادت‌ها و کارهای تکراری از Present Simple استفاده می‌کنیم.",
            example: "I play football."
        }
    ]
},

de: {
    words: [
        ["Hallo", "سلام"],
        ["Buch", "کتاب"],
        ["Haus", "خانه"],
        ["Wasser", "آب"],
        ["Freund", "دوست"],
        ["Schule", "مدرسه"],
        ["Essen", "غذا"],
        ["Familie", "خانواده"],
        ["Morgen", "صبح"],
        ["Nacht", "شب"],
        ["glücklich", "خوشحال"],
        ["schön", "زیبا"],
        ["lernen", "یاد گرفتن"],
        ["sprechen", "صحبت کردن"],
        ["schreiben", "نوشتن"]
    ],
    grammar: [
        {
            title: "Sein",
            explanation: "Das Verb sein bedeutet «بودن».",
            example: "Ich bin Schüler."
        },
        {
            title: "Präsens",
            explanation: "Das Präsens wird für die Gegenwart verwendet.",
            example: "Ich lerne Deutsch."
        }
    ]
},

es: {
    words: [
        ["hola", "سلام"],
        ["libro", "کتاب"],
        ["casa", "خانه"],
        ["agua", "آب"],
        ["amigo", "دوست"],
        ["escuela", "مدرسه"],
        ["comida", "غذا"],
        ["familia", "خانواده"],
        ["mañana", "صبح"],
        ["noche", "شب"],
        ["feliz", "خوشحال"],
        ["bonito", "زیبا"],
        ["aprender", "یاد گرفتن"],
        ["hablar", "صحبت کردن"],
        ["escribir", "نوشتن"]
    ],
    grammar: [
        {
            title: "Ser",
            explanation: "از ser برای معرفی و بیان هویت استفاده می‌شود.",
            example: "Soy estudiante."
        },
        {
            title: "Presente",
            explanation: "برای اتفاقات و عادت‌های فعلی استفاده می‌شود.",
            example: "Yo estudio español."
        }
    ]
},

fr: {
    words: [
        ["bonjour", "سلام"],
        ["livre", "کتاب"],
        ["maison", "خانه"],
        ["eau", "آب"],
        ["ami", "دوست"],
        ["école", "مدرسه"],
        ["nourriture", "غذا"],
        ["famille", "خانواده"],
        ["matin", "صبح"],
        ["nuit", "شب"],
        ["heureux", "خوشحال"],
        ["beau", "زیبا"],
        ["apprendre", "یاد گرفتن"],
        ["parler", "صحبت کردن"],
        ["écrire", "نوشتن"]
    ],
    grammar: [
        {
            title: "Être",
            explanation: "فعل être برای «بودن» استفاده می‌شود.",
            example: "Je suis étudiant."
        },
        {
            title: "Présent",
            explanation: "زمان حال برای اتفاقات فعلی استفاده می‌شود.",
            example: "Je parle français."
        }
    ]
},

it: {
    words: [
        ["ciao", "سلام"],
        ["libro", "کتاب"],
        ["casa", "خانه"],
        ["acqua", "آب"],
        ["amico", "دوست"],
        ["scuola", "مدرسه"],
        ["cibo", "غذا"],
        ["famiglia", "خانواده"],
        ["mattina", "صبح"],
        ["notte", "شب"],
        ["felice", "خوشحال"],
        ["bello", "زیبا"],
        ["imparare", "یاد گرفتن"],
        ["parlare", "صحبت کردن"],
        ["scrivere", "نوشتن"]
    ],
    grammar: [
        {
            title: "Essere",
            explanation: "فعل essere به معنی «بودن» است.",
            example: "Io sono studente."
        },
        {
            title: "Presente",
            explanation: "زمان حال برای کارهای فعلی استفاده می‌شود.",
            example: "Io parlo italiano."
        }
    ]
}

};

// =====================================
// برای زبان‌هایی که محتوای پایه ندارند
// =====================================

const baseCourse = {
    words: [
        ["Hello", "سلام"],
        ["Book", "کتاب"],
        ["House", "خانه"],
        ["Water", "آب"],
        ["Friend", "دوست"],
        ["School", "مدرسه"],
        ["Food", "غذا"],
        ["Family", "خانواده"],
        ["Morning", "صبح"],
        ["Night", "شب"],
        ["Happy", "خوشحال"],
        ["Beautiful", "زیبا"],
        ["Learn", "یاد گرفتن"],
        ["Speak", "صحبت کردن"],
        ["Write", "نوشتن"]
    ],
    grammar: [
        {
            title: "جمله ساده",
            explanation: "با جمله‌های ساده شروع می‌کنیم.",
            example: "I am a student."
        },
        {
            title: "زمان حال",
            explanation: "برای بیان اتفاقات و عادت‌های فعلی استفاده می‌شود.",
            example: "I learn every day."
        }
    ]
};

languages.forEach(lang => {
    if (!courses[lang.id]) {
        courses[lang.id] = JSON.parse(JSON.stringify(baseCourse));
    }
});

// =====================================
// وضعیت برنامه
// =====================================

let selectedLanguage = null;

let state = {
    level: "A1",
    placementScore: 0,
    currentWordIndex: 0,
    learnedWords: 0,
    grammarIndex: 0,
    completedGrammar: 0,
    examsPassed: 0,
    progress: 0
};

// =====================================
// ذخیره و بازیابی
// =====================================

function saveState() {

    if (!selectedLanguage) return;

    localStorage.setItem(
        "zabanpro_" + selectedLanguage,
        JSON.stringify(state)
    );
}

function loadState() {

    if (!selectedLanguage) return;

    const saved = localStorage.getItem(
        "zabanpro_" + selectedLanguage
    );

    if (saved) {

        try {
            state = JSON.parse(saved);

        } catch (error) {

            console.log("خطا در بازیابی اطلاعات");
        }

    } else {

        state = {
            level: "A1",
            placementScore: 0,
            currentWordIndex: 0,
            learnedWords: 0,
            grammarIndex: 0,
            completedGrammar: 0,
            examsPassed: 0,
            progress: 0
        };
    }
}

// =====================================
// عناصر HTML
// =====================================

const languageGrid =
    document.getElementById("languageGrid");

const selectedLanguageElement =
    document.getElementById("selectedLanguage");

const learningPanel =
    document.getElementById("learningPanel");

const progressGrid =
    document.getElementById("progressGrid");

// =====================================
// نمایش زبان‌ها
// =====================================

function renderLanguages() {

    languageGrid.innerHTML = "";

    languages.forEach(language => {

        const card = document.createElement("div");

        card.className = "language-card";

        card.innerHTML = `
            <div class="language-flag">
                ${language.flag}
            </div>

            <h3>${language.name}</h3>

            <p>${language.native}</p>

            <button onclick="selectLanguage('${language.id}')">
                شروع یادگیری
            </button>
        `;

        languageGrid.appendChild(card);
    });
}

// =====================================
// انتخاب زبان
// =====================================

window.selectLanguage = function(id) {

    selectedLanguage = id;

    loadState();

    const language =
        languages.find(item => item.id === id);

    selectedLanguageElement.innerHTML = `
        <div class="selected-box">
            ${language.flag}
            <strong>${language.name}</strong>
            <span>${language.native}</span>
        </div>
    `;

    showDashboard();

    document
        .getElementById("learning")
        .scrollIntoView({
            behavior: "smooth"
        });
};

// =====================================
// داشبورد یادگیری
// =====================================

function showDashboard() {

    const course =
        courses[selectedLanguage];

    learningPanel.innerHTML = `

        <div class="learning-dashboard">

            <div class="level-box">

                <span>سطح فعلی</span>

                <strong>${state.level}</strong>

            </div>

            <div class="score-box">

                <span>امتیاز تعیین سطح</span>

                <strong>${state.placementScore}/10</strong>

            </div>

            <div class="progress-box">

                <span>پیشرفت</span>

                <strong>${state.progress}%</strong>

            </div>

        </div>

        <div class="learning-actions">

            <button class="learn-btn"
                onclick="startPlacementTest()">
                🎯 آزمون تعیین سطح
            </button>

            <button class="learn-btn"
                onclick="startLesson()">
                📚 مسیر یادگیری
            </button>

            <button class="learn-btn"
                onclick="startPronunciation()">
                🗣️ تلفظ
            </button>

            <button class="learn-btn"
                onclick="startWordExam()">
                📝 آزمون کلمات
            </button>

            <button class="learn-btn"
                onclick="startGrammarExam()">
                📖 آزمون گرامر
            </button>

            <button class="learn-btn"
                onclick="startLevelExam()">
                🚀 آزمون ارتقای سطح
            </button>

        </div>

        <div id="lessonArea"></div>
    `;

    renderProgress();
}

// =====================================
// آزمون تعیین سطح
// =====================================

const placementQuestions = {

en: [
    ["What does 'hello' mean?", ["سلام", "خداحافظ", "شب", "کتاب"], 0],
    ["Choose: I ___ a student.", ["am", "is", "are", "be"], 0],
    ["What is 'water'?", ["آب", "غذا", "خانه", "مدرسه"], 0],
    ["Choose: She ___ happy.", ["am", "is", "are", "be"], 1],
    ["What does 'book' mean?", ["دوست", "کتاب", "صبح", "شب"], 1],
    ["Choose: They ___ friends.", ["am", "is", "are", "be"], 2],
    ["What does 'beautiful' mean?", ["زیبا", "سریع", "بزرگ", "خوشحال"], 0],
    ["Choose: I ___ football.", ["play", "plays", "playing", "played"], 0],
    ["What does 'learn' mean?", ["نوشتن", "دیدن", "یاد گرفتن", "رفتن"], 2],
    ["Choose: He ___ every day.", ["study", "studies", "studying", "studied"], 1]
],

de: [
    ["Was bedeutet „Hallo“?", ["سلام", "خداحافظ", "کتاب", "آب"], 0],
    ["Ich ___ Schüler.", ["bin", "ist", "sind", "sein"], 0],
    ["Was bedeutet „Wasser“?", ["آب", "خانه", "دوست", "غذا"], 0],
    ["Sie ___ glücklich.", ["bin", "ist", "sind", "sein"], 1],
    ["Was bedeutet „Buch“?", ["کتاب", "صبح", "مدرسه", "شب"], 0],
    ["Wir ___ Freunde.", ["bin", "ist", "sind", "sein"], 2],
    ["Was bedeutet „schön“?", ["زیبا", "سریع", "خوشحال", "بزرگ"], 0],
    ["Ich ___ Deutsch.", ["lerne", "lernt", "lernen", "gelernt"], 0],
    ["Was bedeutet „lernen“?", ["نوشتن", "یاد گرفتن", "رفتن", "دیدن"], 1],
    ["Er ___ jeden Tag.", ["lernen", "lernt", "lerne", "gelernt"], 1]
],

es: [
    ["¿Qué significa «hola»?", ["سلام", "خداحافظ", "کتاب", "آب"], 0],
    ["Yo ___ estudiante.", ["soy", "es", "son", "ser"], 0],
    ["¿Qué significa «agua»?", ["آب", "خانه", "دوست", "غذا"], 0],
    ["Ella ___ feliz.", ["soy", "es", "son", "ser"], 1],
    ["¿Qué significa «libro»?", ["کتاب", "صبح", "مدرسه", "شب"], 0],
    ["Nosotros ___ amigos.", ["soy", "es", "somos", "ser"], 2],
    ["¿Qué significa «bonito»?", ["زیبا", "سریع", "بزرگ", "خوشحال"], 0],
    ["Yo ___ español.", ["aprendo", "aprende", "aprender", "aprendido"], 0],
    ["¿Qué significa «aprender»?", ["نوشتن", "یاد گرفتن", "رفتن", "دیدن"], 1],
    ["Él ___ todos los días.", ["estudio", "estudia", "estudiar", "estudiando"], 1]
],

fr: [
    ["Que signifie «bonjour» ?", ["سلام", "خداحافظ", "کتاب", "آب"], 0],
    ["Je ___ étudiant.", ["suis", "est", "sommes", "être"], 0],
    ["Que signifie «eau» ?", ["آب", "خانه", "دوست", "غذا"], 0],
    ["Elle ___ heureuse.", ["suis", "est", "sont", "être"], 1],
    ["Que signifie «livre» ?", ["کتاب", "صبح", "مدرسه", "شب"], 0],
    ["Nous ___ amis.", ["suis", "est", "sommes", "être"], 2],
    ["Que signifie «beau» ?", ["زیبا", "سریع", "بزرگ", "خوشحال"], 0],
    ["Je ___ français.", ["apprends", "apprend", "apprendre", "appris"], 0],
    ["Que signifie «apprendre» ?", ["نوشتن", "یاد گرفتن", "رفتن", "دیدن"], 1],
    ["Il ___ tous les jours.", ["étudie", "étudies", "étudier", "étudié"], 0]
],

it: [
    ["Cosa significa «ciao»?", ["سلام", "خداحافظ", "کتاب", "آب"], 0],
    ["Io ___ studente.", ["sono", "è", "siamo", "essere"], 0],
    ["Cosa significa «acqua»?", ["آب", "خانه", "دوست", "غذا"], 0],
    ["Lei ___ felice.", ["sono", "è", "siamo", "essere"], 1],
    ["Cosa significa «libro»?", ["کتاب", "صبح", "مدرسه", "شب"], 0],
    ["Noi ___ amici.", ["sono", "è", "siamo", "essere"], 2],
    ["Cosa significa «bello»?", ["زیبا", "سریع", "بزرگ", "خوشحال"], 0],
    ["Io ___ italiano.", ["imparo", "impara", "imparare", "imparato"], 0],
    ["Cosa significa «imparare»?", ["نوشتن", "یاد گرفتن", "رفتن", "دیدن"], 1],
    ["Lui ___ ogni giorno.", ["studia", "studio", "studiare", "studiato"], 0]
]

};

function getPlacementQuestions() {

    return placementQuestions[selectedLanguage] ||
        placementQuestions.en;
}

let placementIndex = 0;
let placementScore = 0;

window.startPlacementTest = function() {

    placementIndex = 0;
    placementScore = 0;

    showPlacementQuestion();
};

function showPlacementQuestion() {

    const questions =
        getPlacementQuestions();

    if (placementIndex >= questions.length) {

        finishPlacementTest();

        return;
    }

    const question =
        questions[placementIndex];

    const lessonArea =
        document.getElementById("lessonArea");

    lessonArea.innerHTML = `

        <div class="test-card">

            <div class="test-header">
                🎯 آزمون تعیین سطح
                <span>
                    سؤال ${placementIndex + 1}
                    از ${questions.length}
                </span>
            </div>

            <h3>
                ${question[0]}
            </h3>

            <div class="answers">

                ${question[1].map((answer, index) => `

                    <button
                        class="answer-btn"
                        onclick="answerPlacement(${index})">

                        ${answer}

                    </button>

                `).join("")}

            </div>

        </div>
    `;
}

window.answerPlacement = function(answer) {

    const questions =
        getPlacementQuestions();

    const correct =
        questions[placementIndex][2];

    if (answer === correct) {
        placementScore++;
    }

    placementIndex++;

    showPlacementQuestion();
};

function finishPlacementTest() {

    let level = "A1";

    if (placementScore >= 9) {
        level = "B2";
    } else if (placementScore >= 7) {
        level = "B1";
    } else if (placementScore >= 5) {
        level = "A2";
    }

    state.placementScore = placementScore;
    state.level = level;
    state.progress = Math.min(
        100,
        placementScore * 10
    );

    saveState();

    document.getElementById("lessonArea").innerHTML = `

        <div class="result-card">

            <h2>🎉 آزمون تمام شد!</h2>

            <p>
                امتیاز شما:
                <strong>${placementScore}/10</strong>
            </p>

            <p>
                سطح پیشنهادی:
                <strong>${level}</strong>
            </p>

            <button onclick="showDashboard()">
                ادامه یادگیری 🚀
            </button>

        </div>
    `;

    renderProgress();
}

// =====================================
// مسیر یادگیری
// =====================================

window.startLesson = function() {

    const course =
        courses[selectedLanguage];

    const index =
        state.currentWordIndex;

    if (index >= course.words.length) {

        document.getElementById("lessonArea").innerHTML = `

            <div class="result-card">

                <h2>🎉 این بخش تمام شد!</h2>

                <p>
                    تمام کلمات این مرحله را یاد گرفتی.
                </p>

                <button onclick="startWordExam()">
                    📝 امتحان کلمات
                </button>

            </div>
        `;

        return;
    }

    const word =
        course.words[index];

    const pronunciation =
        getPronunciation(word[0], selectedLanguage);

    document.getElementById("lessonArea").innerHTML = `

        <div class="lesson-card">

            <span class="lesson-number">
                کلمه ${index + 1}
            </span>

            <h2>${word[0]}</h2>

            <p class="meaning">
                ${word[1]}
            </p>

            <p class="pronunciation">
                🔊 ${pronunciation}
            </p>

            <button onclick="speakWord('${escapeSpeech(word[0])}')">
                🗣️ شنیدن تلفظ
            </button>

            <button onclick="nextWord()">
                کلمه بعدی ➜
            </button>

        </div>
    `;
};

window.nextWord = function() {

    state.currentWordIndex++;
    state.learnedWords++;

    updateProgress();

    saveState();

    startLesson();
};

// =====================================
// آزمون هر ۵ کلمه
// =====================================

let wordExamQuestions = [];
let wordExamIndex = 0;
let wordExamScore = 0;

window.startWordExam = function() {

    const course =
        courses[selectedLanguage];

    const start =
        Math.max(
            0,
            Math.floor(
                state.currentWordIndex / 5
            ) * 5 - 5
        );

    const end =
        Math.min(
            start + 5,
            course.words.length
        );

    const selectedWords =
        course.words.slice(start, end);

    if (selectedWords.length === 0) {

        alert("ابتدا چند کلمه یاد بگیر.");

        return;
    }

    wordExamQuestions =
        createWordQuestions(selectedWords);

    wordExamIndex = 0;
    wordExamScore = 0;

    showWordExamQuestion();
};

function createWordQuestions(words) {

    return words.map(word => {

        const wrong =
            courses[selectedLanguage]
                .words
                .filter(item => item[0] !== word[0])
                .slice(0, 3)
                .map(item => item[1]);

        const options =
            shuffle([
                word[1],
                ...wrong
            ]);

        return {
            question: `"${word[0]}" یعنی چه؟`,
            options,
            correct: options.indexOf(word[1])
        };
    });
}

function showWordExamQuestion() {

    if (wordExamIndex >= wordExamQuestions.length) {

        finishWordExam();

        return;
    }

    const q =
        wordExamQuestions[wordExamIndex];

    document.getElementById("lessonArea").innerHTML = `

        <div class="test-card">

            <div class="test-header">
                📝 آزمون کلمات
                <span>
                    ${wordExamIndex + 1}
                    /
                    ${wordExamQuestions.length}
                </span>
            </div>

            <h3>${q.question}</h3>

            <div class="answers">

                ${q.options.map((option, index) => `

                    <button
                        class="answer-btn"
                        onclick="answerWordExam(${index})">

                        ${option}

                    </button>

                `).join("")}

            </div>

        </div>
    `;
}

window.answerWordExam = function(answer) {

    if (
        answer ===
        wordExamQuestions[wordExamIndex].correct
    ) {
        wordExamScore++;
    }

    wordExamIndex++;

    showWordExamQuestion();
};

function finishWordExam() {

    const total =
        wordExamQuestions.length;

    const passed =
        wordExamScore >= Math.ceil(total * 0.6);

    if (passed) {

        state.examsPassed++;

        state.progress =
            Math.min(
                100,
                state.progress + 5
            );

        saveState();
    }

    document.getElementById("lessonArea").innerHTML = `

        <div class="result-card">

            <h2>
                ${passed ? "🎉 قبول شدی!" : "❌ دوباره تلاش کن"}
            </h2>

            <p>
                نتیجه:
                ${wordExamScore}/${total}
            </p>

            <button onclick="showDashboard()">
                بازگشت
            </button>

        </div>
    `;

    renderProgress();
}

// =====================================
// گرامر
// =====================================

window.startGrammarExam = function() {

    const grammar =
        courses[selectedLanguage].grammar;

    const index =
        Math.min(
            state.grammarIndex,
            grammar.length - 1
        );

    const item =
        grammar[index];

    document.getElementById("lessonArea").innerHTML = `

        <div class="grammar-card">

            <h2>📖 ${item.title}</h2>

            <p>
                ${item.explanation}
            </p>

            <div class="grammar-example">
                ${item.example}
            </div>

            <button onclick="startGrammarQuestion()">
                شروع امتحان
            </button>

        </div>
    `;
};

let grammarCorrect = false;

window.startGrammarQuestion = function() {

    const grammar =
        courses[selectedLanguage].grammar;

    const item =
        grammar[
            Math.min(
                state.grammarIndex,
                grammar.length - 1
            )
        ];

    const question =
        createGrammarQuestion(item);

    document.getElementById("lessonArea").innerHTML = `

        <div class="test-card">

            <div class="test-header">
                📖 آزمون گرامر
            </div>

            <h3>
                ${question.question}
            </h3>

            <div class="answers">

                ${question.options.map((option, index) => `

                    <button
                        class="answer-btn"
                        onclick="answerGrammar(${index})">

                        ${option}

                    </button>

                `).join("")}

            </div>

        </div>
    `;

    window.currentGrammarQuestion =
        question;
};

function createGrammarQuestion(item) {

    if (selectedLanguage === "de") {

        return {
            question: "Welche Form ist richtig?",
            options: [
                "Ich bin Schüler.",
                "Ich bist Schüler.",
                "Ich sind Schüler.",
                "Ich sein Schüler."
            ],
            correct: 0
        };

    }

    if (selectedLanguage === "es") {

        return {
            question: "¿Cuál es correcto?",
            options: [
                "Yo soy estudiante.",
                "Yo es estudiante.",
                "Yo son estudiante.",
                "Yo ser estudiante."
            ],
            correct: 0
        };

    }

    if (selectedLanguage === "fr") {

        return {
            question: "Quelle phrase est correcte ?",
            options: [
                "Je suis étudiant.",
                "Je est étudiant.",
                "Je sont étudiant.",
                "Je être étudiant."
            ],
            correct: 0
        };

    }

    if (selectedLanguage === "it") {

        return {
            question: "Quale frase è corretta?",
            options: [
                "Io sono studente.",
                "Io è studente.",
                "Io siamo studente.",
                "Io essere studente."
            ],
            correct: 0
        };

    }

    return {
        question: "Choose the correct sentence:",
        options: [
            "I am a student.",
            "I is a student.",
            "I are a student.",
            "I be a student."
        ],
        correct: 0
    };
}

window.answerGrammar = function(answer) {

    const question =
        window.currentGrammarQuestion;

    if (answer === question.correct) {

        state.completedGrammar++;

        const grammar =
            courses[selectedLanguage].grammar;

        if (
            state.grammarIndex <
            grammar.length - 1
        ) {
            state.grammarIndex++;
        }

        state.progress =
            Math.min(
                100,
                state.progress + 5
            );

        saveState();

        grammarCorrect = true;

    } else {

        grammarCorrect = false;
    }

    document.getElementById("lessonArea").innerHTML = `

        <div class="result-card">

            <h2>
                ${grammarCorrect
                    ? "✅ پاسخ درست!"
                    : "❌ پاسخ اشتباه است"}
            </h2>

            <button onclick="showDashboard()">
                ادامه
            </button>

        </div>
    `;

    renderProgress();
};

// =====================================
// آزمون ارتقای سطح
// =====================================

window.startLevelExam = function() {

    const questions = [

        {
            q: "I ___ English every day.",
            a: ["study", "studies", "studying", "studied"],
            c: 0
        },

        {
            q: "She ___ at school.",
            a: ["am", "is", "are", "be"],
            c: 1
        },

        {
            q: "They ___ football yesterday.",
            a: ["play", "plays", "played", "playing"],
            c: 2
        },

        {
            q: "Choose the correct sentence.",
            a: [
                "He don't like tea.",
                "He doesn't like tea.",
                "He doesn't likes tea.",
                "He not like tea."
            ],
            c: 1
        },

        {
            q: "If I have time, I ___ you.",
            a: ["call", "called", "will call", "calling"],
            c: 2
        }
    ];

    window.levelQuestions = questions;
    window.levelIndex = 0;
    window.levelScore = 0;

    showLevelQuestion();
};

function showLevelQuestion() {

    const questions =
        window.levelQuestions;

    if (window.levelIndex >= questions.length) {

        finishLevelExam();

        return;
    }

    const q =
        questions[window.levelIndex];

    document.getElementById("lessonArea").innerHTML = `

        <div class="test-card">

            <div class="test-header">

                🚀 آزمون ارتقای سطح

                <span>
                    ${window.levelIndex + 1}
                    /
                    ${questions.length}
                </span>

            </div>

            <h3>${q.q}</h3>

            <div class="answers">

                ${q.a.map((answer, index) => `

                    <button
                        class="answer-btn"
                        onclick="answerLevel(${index})">

                        ${answer}

                    </button>

                `).join("")}

            </div>

        </div>
    `;
}

window.answerLevel = function(answer) {

    const q =
        window.levelQuestions[
            window.levelIndex
        ];

    if (answer === q.c) {
        window.levelScore++;
    }

    window.levelIndex++;

    showLevelQuestion();
};

function finishLevelExam() {

    const score =
        window.levelScore;

    let newLevel =
        state.level;

    if (score >= 4) {

        const levels =
            ["A1", "A2", "B1", "B2", "C1"];

        const index =
            levels.indexOf(state.level);

        if (index < levels.length - 1) {
            newLevel =
                levels[index + 1];
        }
    }

    const promoted =
        newLevel !== state.level;

    state.level =
        newLevel;

    if (promoted) {

        state.progress =
            Math.min(
                100,
                state.progress + 15
            );
    }

    saveState();

    document.getElementById("lessonArea").innerHTML = `

        <div class="result-card">

            <h2>
                ${promoted
                    ? "🏆 تبریک! سطح جدید باز شد"
                    : "📚 هنوز برای سطح بعد آماده نیستی"}
            </h2>

            <p>
                نتیجه:
                ${score}/5
            </p>

            <p>
                سطح فعلی:
                <strong>${state.level}</strong>
            </p>

            <button onclick="showDashboard()">
                ادامه
            </button>

        </div>
    `;

    renderProgress();
}

// =====================================
// تلفظ
// =====================================

function getPronunciation(word, language) {

    const pronunciations = {

        en: {
            hello: "هِلُو",
            book: "بوک",
            house: "هاوس",
            water: "واتِر",
            friend: "فِرِند"
        },

        de: {
            Hallo: "هالو",
            Buch: "بوخ",
            Haus: "هاوس",
            Wasser: "واسِر",
            Freund: "فروینت"
        },

        es: {
            hola: "اولا",
            libro: "لیبرو",
            casa: "کاسا",
            agua: "آگوا",
            amigo: "آمیگو"
        },

        fr: {
            bonjour: "بونژور",
            livre: "لیور",
            maison: "مِزون",
            eau: "او",
            ami: "آمی"
        },

        it: {
            ciao: "چائو",
            libro: "لیبرو",
            casa: "کازا",
            acqua: "آکوا",
            amico: "آمیکو"
        }
    };

    return (
        pronunciations[language] &&
        pronunciations[language][word]
    ) || word;
}

window.startPronunciation = function() {

    const course =
        courses[selectedLanguage];

    document.getElementById("lessonArea").innerHTML = `

        <div class="pronunciation-card">

            <h2>🗣️ تمرین تلفظ</h2>

            <p>
                روی هر کلمه بزن تا تلفظ آن را بشنوی.
            </p>

            <div class="pronunciation-list">

                ${course.words.map(word => `

                    <div class="pronunciation-item">

                        <strong>
                            ${word[0]}
                        </strong>

                        <span>
                            ${getPronunciation(
                                word[0],
                                selectedLanguage
                            )}
                        </span>

                        <button
                            onclick="speakWord('${escapeSpeech(word[0])}')">

                            🔊

                        </button>

                    </div>

                `).join("")}

            </div>

        </div>
    `;
};

window.speakWord = function(word) {

    if (!("speechSynthesis" in window)) {

        alert(
            "مرورگر شما از تلفظ صوتی پشتیبانی نمی‌کند."
        );

        return;
    }

    const utterance =
        new SpeechSynthesisUtterance(word);

    utterance.lang =
        getSpeechLanguage(selectedLanguage);

    utterance.rate = 0.8;

    speechSynthesis.cancel();

    speechSynthesis.speak(utterance);
};

function getSpeechLanguage(language) {

    const map = {

        en: "en-US",
        de: "de-DE",
        es: "es-ES",
        fr: "fr-FR",
        it: "it-IT",
        pt: "pt-PT",
        ru: "ru-RU",
        tr: "tr-TR",
        ar: "ar-SA",
        ja: "ja-JP",
        ko: "ko-KR",
        zh: "zh-CN",
        nl: "nl-NL",
        sv: "sv-SE",
        pl: "pl-PL",
        el: "el-GR",
        hi: "hi-IN",
        no: "nb-NO",
        da: "da-DK",
        fi: "fi-FI"
    };

    return map[language] || "en-US";
}

// =====================================
// پیشرفت
// =====================================

function updateProgress() {

    const course =
        courses[selectedLanguage];

    const wordProgress =
        (
            state.learnedWords /
            course.words.length
        ) * 100;

    state.progress =
        Math.max(
            state.progress,
            Math.min(100, Math.round(wordProgress))
        );

    saveState();

    renderProgress();
}

function renderProgress() {

    if (!selectedLanguage) {

        progressGrid.innerHTML = `

            <div class="progress-empty">

                🌱 یک زبان انتخاب کن
                تا پیشرفتت اینجا نمایش داده شود.

            </div>
        `;

        return;
    }

    const language =
        languages.find(
            item => item.id === selectedLanguage
        );

    progressGrid.innerHTML = `

        <div class="progress-card">

            <div class="progress-language">

                ${language.flag}

                <strong>
                    ${language.name}
                </strong>

            </div>

            <p>
                سطح:
                <strong>${state.level}</strong>
            </p>

            <p>
                کلمات یادگرفته‌شده:
                <strong>
                    ${state.learnedWords}
                </strong>
            </p>

            <p>
                آزمون‌های قبول‌شده:
                <strong>
                    ${state.examsPassed}
                </strong>
            </p>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${state.progress}%">
                </div>

            </div>

            <strong>
                ${state.progress}%
            </strong>

        </div>
    `;
}

// =====================================
// ابزارها
// =====================================

function shuffle(array) {

    const copy =
        [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];
    }

    return copy;
}

function escapeSpeech(text) {

    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}

// =====================================
// شروع برنامه
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderLanguages();

        renderProgress();

        console.log(
            "ZabanPro successfully loaded 🚀"
        );
    }
);
