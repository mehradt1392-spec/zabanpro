/* =====================================================
   ZabanPro - Application Engine
   بدون API
===================================================== */


/* =====================================================
   1. زبان‌ها
===================================================== */

const languages = {

    english: {
        name: "انگلیسی",
        flag: "🇬🇧",
        speech: "en-US",

        words: [
            ["Hello", "سلام"],
            ["Book", "کتاب"],
            ["Water", "آب"],
            ["Friend", "دوست"],
            ["School", "مدرسه"]
        ]
    },

    spanish: {
        name: "اسپانیایی",
        flag: "🇪🇸",
        speech: "es-ES",

        words: [
            ["Hola", "سلام"],
            ["Casa", "خانه"],
            ["Agua", "آب"],
            ["Amigo", "دوست"],
            ["Escuela", "مدرسه"]
        ]
    },

    french: {
        name: "فرانسوی",
        flag: "🇫🇷",
        speech: "fr-FR",

        words: [
            ["Bonjour", "سلام"],
            ["Maison", "خانه"],
            ["Eau", "آب"],
            ["Ami", "دوست"],
            ["École", "مدرسه"]
        ]
    },

    german: {
        name: "آلمانی",
        flag: "🇩🇪",
        speech: "de-DE",

        words: [
            ["Hallo", "سلام"],
            ["Haus", "خانه"],
            ["Wasser", "آب"],
            ["Freund", "دوست"],
            ["Schule", "مدرسه"]
        ]
    },

    italian: {
        name: "ایتالیایی",
        flag: "🇮🇹",
        speech: "it-IT",

        words: [
            ["Ciao", "سلام"],
            ["Casa", "خانه"],
            ["Acqua", "آب"],
            ["Amico", "دوست"],
            ["Scuola", "مدرسه"]
        ]
    },

    portuguese: {
        name: "پرتغالی",
        flag: "🇵🇹",
        speech: "pt-PT",

        words: [
            ["Olá", "سلام"],
            ["Casa", "خانه"],
            ["Água", "آب"],
            ["Amigo", "دوست"],
            ["Escola", "مدرسه"]
        ]
    },

    russian: {
        name: "روسی",
        flag: "🇷🇺",
        speech: "ru-RU",

        words: [
            ["Привет", "سلام"],
            ["Дом", "خانه"],
            ["Вода", "آب"],
            ["Друг", "دوست"],
            ["Школа", "مدرسه"]
        ]
    },

    arabic: {
        name: "عربی",
        flag: "🇸🇦",
        speech: "ar-SA",

        words: [
            ["مرحبا", "سلام"],
            ["بيت", "خانه"],
            ["ماء", "آب"],
            ["صديق", "دوست"],
            ["مدرسة", "مدرسه"]
        ]
    },

    turkish: {
        name: "ترکی",
        flag: "🇹🇷",
        speech: "tr-TR",

        words: [
            ["Merhaba", "سلام"],
            ["Ev", "خانه"],
            ["Su", "آب"],
            ["Arkadaş", "دوست"],
            ["Okul", "مدرسه"]
        ]
    },

    japanese: {
        name: "ژاپنی",
        flag: "🇯🇵",
        speech: "ja-JP",

        words: [
            ["こんにちは", "سلام"],
            ["家", "خانه"],
            ["水", "آب"],
            ["友達", "دوست"],
            ["学校", "مدرسه"]
        ]
    },

    korean: {
        name: "کره‌ای",
        flag: "🇰🇷",
        speech: "ko-KR",

        words: [
            ["안녕하세요", "سلام"],
            ["집", "خانه"],
            ["물", "آب"],
            ["친구", "دوست"],
            ["학교", "مدرسه"]
        ]
    },

    chinese: {
        name: "چینی",
        flag: "🇨🇳",
        speech: "zh-CN",

        words: [
            ["你好", "سلام"],
            ["家", "خانه"],
            ["水", "آب"],
            ["朋友", "دوست"],
            ["学校", "مدرسه"]
        ]
    },

    dutch: {
        name: "هلندی",
        flag: "🇳🇱",
        speech: "nl-NL",

        words: [
            ["Hallo", "سلام"],
            ["Huis", "خانه"],
            ["Water", "آب"],
            ["Vriend", "دوست"],
            ["School", "مدرسه"]
        ]
    },

    swedish: {
        name: "سوئدی",
        flag: "🇸🇪",
        speech: "sv-SE",

        words: [
            ["Hej", "سلام"],
            ["Hus", "خانه"],
            ["Vatten", "آب"],
            ["Vän", "دوست"],
            ["Skola", "مدرسه"]
        ]
    },

    greek: {
        name: "یونانی",
        flag: "🇬🇷",
        speech: "el-GR",

        words: [
            ["Γεια", "سلام"],
            ["Σπίτι", "خانه"],
            ["Νερό", "آب"],
            ["Φίλος", "دوست"],
            ["Σχολείο", "مدرسه"]
        ]
    },

    hindi: {
        name: "هندی",
        flag: "🇮🇳",
        speech: "hi-IN",

        words: [
            ["नमस्ते", "سلام"],
            ["घर", "خانه"],
            ["पानी", "آب"],
            ["दोस्त", "دوست"],
            ["स्कूल", "مدرسه"]
        ]
    },

    polish: {
        name: "لهستانی",
        flag: "🇵🇱",
        speech: "pl-PL",

        words: [
            ["Cześć", "سلام"],
            ["Dom", "خانه"],
            ["Woda", "آب"],
            ["Przyjaciel", "دوست"],
            ["Szkoła", "مدرسه"]
        ]
    },

    ukrainian: {
        name: "اوکراینی",
        flag: "🇺🇦",
        speech: "uk-UA",

        words: [
            ["Привіт", "سلام"],
            ["Дім", "خانه"],
            ["Вода", "آب"],
            ["Друг", "دوست"],
            ["Школа", "مدرسه"]
        ]
    },

    hebrew: {
        name: "عبری",
        flag: "🇮🇱",
        speech: "he-IL",

        words: [
            ["שלום", "سلام"],
            ["בית", "خانه"],
            ["מים", "آب"],
            ["חבר", "دوست"],
            ["בית ספר", "مدرسه"]
        ]
    },

    persian: {
        name: "فارسی",
        flag: "🇮🇷",
        speech: "fa-IR",

        words: [
            ["سلام", "Hello"],
            ["خانه", "House"],
            ["آب", "Water"],
            ["دوست", "Friend"],
            ["مدرسه", "School"]
        ]
    }

};


/* =====================================================
   2. وضعیت کاربر
===================================================== */

let currentLanguage = "english";

let currentQuestion = 0;

let quizScore = 0;

let answered = false;


/* =====================================================
   3. ذخیره پیشرفت
===================================================== */

function saveProgress(){

    const data = {

        language: currentLanguage,

        score: quizScore

    };

    localStorage.setItem(
        "zabanpro_progress",
        JSON.stringify(data)
    );

}


function loadProgress(){

    const saved =
        localStorage.getItem(
            "zabanpro_progress"
        );

    if(!saved){
        return;
    }

    try{

        const data =
            JSON.parse(saved);

        if(data.language){
            currentLanguage =
                data.language;
        }

    }catch(error){

        console.log(
            "Progress could not be loaded."
        );

    }

}


/* =====================================================
   4. انتخاب زبان
===================================================== */

function selectLanguage(languageKey){

    if(!languages[languageKey]){
        return;
    }

    currentLanguage =
        languageKey;

    currentQuestion = 0;

    quizScore = 0;

    answered = false;

    saveProgress();

    const language =
        languages[languageKey];


    const selected =
        document.getElementById(
            "selectedLanguage"
        );

    if(selected){

        selected.innerHTML =
            language.flag +
            " زبان انتخاب‌شده: " +
            language.name +
            " — آزمون تعیین سطح آماده است.";

    }


    document
        .querySelectorAll(
            ".language-card"
        )
        .forEach(card => {

            card.classList.remove(
                "active"
            );

        });


    const selectedCard =
        document.querySelector(
            `[data-language="${languageKey}"]`
        );


    if(selectedCard){

        selectedCard.classList.add(
            "active"
        );

    }


    updatePronunciation();

    loadQuestion();


    const quiz =
        document.getElementById(
            "quiz"
        );

    if(quiz){

        quiz.scrollIntoView({
            behavior:"smooth"
        });

    }

}


/* =====================================================
   5. تلفظ
===================================================== */

function speakWord(text){

    if(
        !("speechSynthesis" in window)
    ){

        alert(
            "مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند."
        );

        return;
    }


    const language =
        languages[currentLanguage];


    const utterance =
        new SpeechSynthesisUtterance(
            text
        );


    utterance.lang =
        language.speech;


    utterance.rate =
        0.85;


    utterance.pitch =
        1;


    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(
        utterance
    );

}


function updatePronunciation(){

    const container =
        document.getElementById(
            "pronunciation"
        );


    if(!container){
        return;
    }


    const language =
        languages[currentLanguage];


    container.innerHTML = "";


    language.words.forEach(
        word => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "word-card";


            card.innerHTML = `

                <div class="word">
                    ${word[0]}
                </div>

                <div class="translation">
                    ${word[1]}
                </div>

                <button
                    class="speak-button"
                    onclick="speakWord('${escapeSpeech(word[0])}')">

                    🔊 شنیدن تلفظ

                </button>

            `;


            container.appendChild(
                card
            );

        }
    );

}


function escapeSpeech(text){

    return text
        .replaceAll(
            "\\",
            "\\\\"
        )
        .replaceAll(
            "'",
            "\\'"
        );

}


/* =====================================================
   6. سؤال‌های تعیین سطح
===================================================== */

const quizQuestions = [

    {
        question:
        "Choose the correct sentence:",

        options:[
            "She go to school.",
            "She goes to school.",
            "She going school.",
            "She gone school."
        ],

        correct:1
    },


    {
        question:
        "What is the opposite of “big”?",

        options:[
            "Small",
            "Long",
            "Fast",
            "Tall"
        ],

        correct:0
    },


    {
        question:
        "Complete: I ___ happy.",

        options:[
            "am",
            "is",
            "are",
            "be"
        ],

        correct:0
    },


    {
        question:
        "Which sentence is past tense?",

        options:[
            "I play football.",
            "I am playing football.",
            "I played football.",
            "I will play football."
        ],

        correct:2
    },


    {
        question:
        "Choose the correct word: There are ___ books.",

        options:[
            "much",
            "many",
            "a",
            "little"
        ],

        correct:1
    },


    {
        question:
        "What does “because” express?",

        options:[
            "Reason",
            "Place",
            "Time",
            "Quantity"
        ],

        correct:0
    },


    {
        question:
        "Choose the correct sentence:",

        options:[
            "If I had time, I would travel.",
            "If I had time, I will travel.",
            "If I have time yesterday, I travel.",
            "If I having time, I travel."
        ],

        correct:0
    },


    {
        question:
        "She has lived here ___ 2020.",

        options:[
            "for",
            "since",
            "during",
            "from"
        ],

        correct:1
    },


    {
        question:
        "Choose the correct form:",

        options:[
            "He suggested to go.",
            "He suggested going.",
            "He suggest going.",
            "He suggesting go."
        ],

        correct:1
    },


    {
        question:
        "Choose the most natural sentence:",

        options:[
            "Despite the rain, we continued.",
            "Despite it rained, we continued.",
            "Despite of the rain, we continued.",
            "Despite rain was falling, we continued."
        ],

        correct:0
    }

];


/* =====================================================
   7. نمایش سؤال
===================================================== */

function loadQuestion(){

    const questionElement =
        document.getElementById(
            "question"
        );


    const optionsElement =
        document.getElementById(
            "options"
        );


    if(
        !questionElement ||
        !optionsElement
    ){

        return;

    }


    if(
        currentQuestion >=
        quizQuestions.length
    ){

        showResult();

        return;

    }


    answered = false;


    const question =
        quizQuestions[
            currentQuestion
        ];


    questionElement.textContent =
        question.question;


    optionsElement.innerHTML = "";


    question.options.forEach(
        (option,index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";


            button.textContent =
                option;


            button.onclick =
                () => {

                    checkAnswer(
                        index,
                        button
                    );

                };


            optionsElement.appendChild(
                button
            );

        }
    );


    const number =
        document.getElementById(
            "questionNumber"
        );


    if(number){

        number.textContent =
            "سؤال " +
            (currentQuestion + 1) +
            " از " +
            quizQuestions.length;

    }


    const scoreText =
        document.getElementById(
            "scoreText"
        );


    if(scoreText){

        scoreText.textContent =
            "امتیاز: " +
            quizScore;

    }


    const progress =
        document.getElementById(
            "progress"
        );


    if(progress){

        progress.style.width =
            (
                (
                    currentQuestion + 1
                )
                /
                quizQuestions.length
                *
                100
            ) +
            "%";

    }


    const feedback =
        document.getElementById(
            "feedback"
        );


    if(feedback){

        feedback.textContent = "";

        feedback.className =
            "feedback";

    }


    const next =
        document.getElementById(
            "nextButton"
        );


    if(next){

        next.style.display =
            "none";

    }

}


/* =====================================================
   8. بررسی پاسخ
===================================================== */

function checkAnswer(
    selected,
    button
){

    if(answered){
        return;
    }


    answered = true;


    const question =
        quizQuestions[
            currentQuestion
        ];


    const buttons =
        document.querySelectorAll(
            ".option"
        );


    buttons.forEach(
        item => {

            item.disabled = true;

        }
    );


    const feedback =
        document.getElementById(
            "feedback"
        );


    if(
        selected ===
        question.correct
    ){

        quizScore++;


        button.classList.add(
            "correct"
        );


        if(feedback){

            feedback.textContent =
                "✅ پاسخ درست است!";

            feedback.className =
                "feedback correct";

        }

    }

    else{

        button.classList.add(
            "wrong"
        );


        if(
            buttons[
                question.correct
            ]
        ){

            buttons[
                question.correct
            ]
            .classList.add(
                "correct"
            );

        }


        if(feedback){

            feedback.textContent =
                "❌ پاسخ اشتباه است. پاسخ صحیح مشخص شد.";

            feedback.className =
                "feedback wrong";

        }

    }


    const scoreText =
        document.getElementById(
            "scoreText"
        );


    if(scoreText){

        scoreText.textContent =
            "امتیاز: " +
            quizScore;

    }


    const next =
        document.getElementById(
            "nextButton"
        );


    if(next){

        next.style.display =
            "inline-block";

    }


    saveProgress();

}


/* =====================================================
   9. سؤال بعدی
===================================================== */

function nextQuestion(){

    if(!answered){
        return;
    }


    currentQuestion++;


    if(
        currentQuestion >=
        quizQuestions.length
    ){

        showResult();

    }

    else{

        loadQuestion();

    }

}


/* =====================================================
   10. نتیجه
===================================================== */

function showResult(){

    const content =
        document.getElementById(
            "quizContent"
        );


    const result =
        document.getElementById(
            "result"
        );


    if(content){
        content.style.display =
            "none";
    }


    if(result){
        result.style.display =
            "block";
    }


    const finalScore =
        document.getElementById(
            "finalScore"
        );


    if(finalScore){

        finalScore.textContent =
            "امتیاز شما: " +
            quizScore +
            " از " +
            quizQuestions.length;

    }


    let levelText = "";


    if(quizScore <= 2){

        levelText =
            "A1 — مبتدی";

    }

    else if(quizScore <= 4){

        levelText =
            "A2 — پایه";

    }

    else if(quizScore <= 6){

        levelText =
            "B1 — متوسط";

    }

    else if(quizScore <= 8){

        levelText =
            "B2 — متوسط رو به بالا";

    }

    else if(quizScore === 9){

        levelText =
            "C1 — پیشرفته";

    }

    else{

        levelText =
            "C2 — تسلط بسیار بالا";

    }


    const levelResult =
        document.getElementById(
            "levelResult"
        );


    if(levelResult){

        levelResult.innerHTML =
            `
            سطح پیشنهادی شما:
            <strong>${levelText}</strong>
            `;

    }


    saveProgress();

}


/* =====================================================
   11. شروع دوباره آزمون
===================================================== */

function restartQuiz(){

    currentQuestion = 0;

    quizScore = 0;

    answered = false;


    const content =
        document.getElementById(
            "quizContent"
        );


    const result =
        document.getElementById(
            "result"
        );


    if(content){

        content.style.display =
            "block";

    }


    if(result){

        result.style.display =
            "none";

    }


    loadQuestion();

}


/* =====================================================
   12. تمرین‌ها
===================================================== */

function exerciseMessage(type){

    let message = "";


    if(type === "vocabulary"){

        message =
            "🧠 تمرین واژگان به‌زودی فعال می‌شود.";

    }

    else if(type === "grammar"){

        message =
            "📖 تمرین گرامر به‌زودی فعال می‌شود.";

    }

    else if(type === "listening"){

        message =
            "🎧 تمرین شنیداری به‌زودی فعال می‌شود.";

    }

    else if(type === "speaking"){

        message =
            "🗣️ تمرین مکالمه به‌زودی فعال می‌شود.";

    }


    alert(message);

}


/* =====================================================
   13. منوی موبایل
===================================================== */

function toggleMenu(){

    const nav =
        document.querySelector(
            ".nav"
        );


    if(nav){

        nav.classList.toggle(
            "open"
        );

    }

}


/* =====================================================
   14. راه‌اندازی
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        loadProgress();

        updatePronunciation();

        loadQuestion();

    }
);
