// --- লেসন ও টেস্ট ডাটাবেস ---
const lessons = [
    {
        id: "l1",
        type: "lesson",
        title: "পাঠ ১: হোম রো মৌলিক বর্ণ (ক, খ, গ, ঘ, ং)",
        text: "ক খ গ ঘ ং ক খ গ ঘ ং খ ক ঘ গ ং ক গ খ ঘ ং ক খ গ ঘ",
        instruction: "আঙ্গুলগুলোকে সঠিক স্থানে রেখে ক খ গ ঘ অক্ষরগুলো সাবলীলভাবে টাইপ করুন।"
    },
    {
        id: "l2",
        type: "lesson",
        title: "পাঠ ২: স্বরবর্ণ ও মৌলিক কার (া, ি, ী, ু, ূ)",
        text: "মা বাবা দাদা মামা নদী পাখি পানি বাড়ি গাড়ি আকাশ বাতাশ ঢাকা",
        instruction: "আ-কার এবং ই-কার দিয়ে গঠিত শব্দগুলো সঠিকভাবে অনুশীলন করুন।"
    },
    {
        id: "l3",
        type: "lesson",
        title: "পাঠ ৩: যুক্তবর্ণের সহজ ব্যবহার (ক্ত, ক্স, গ্ন, ঙ্গ)",
        text: "রক্ত শক্ত ভক্ত বাক্য মুগ্ধ অঙ্ক অঙ্গ সঙ্গ বঙ্গ বাক্স",
        instruction: "যুক্তবর্ণ টাইপ করার ক্ষেত্রে লিঙ্কার (হসন্ত) বা অভ্রো ফোনেটিক রুল অনুসরণ করুন।"
    },
    {
        id: "l4",
        type: "lesson",
        title: "পাঠ ৪: সহজ ও পরিচিত বাক্য",
        text: "আমাদের দেশ বাংলাদেশ। এই দেশের প্রকৃতি অপরূপ সুন্দর। আমরা বাংলাকে ভালোবাসি। নিয়মিত টাইপিং অনুশীলনে গতি বৃদ্ধি পায়।",
        instruction: "দাঁড়ি ও স্পেস ঠিক রেখে পূর্ণাঙ্গ বাক্য দ্রুত ও নির্ভুলভাবে টাইপ করুন।"
    },
    {
        id: "t1",
        type: "test",
        title: "টাইপিং টেস্ট: ১ থেকে ১০ মিনিট",
        text: "বাংলা ভাষা আমাদের অহংকার। ১৯৫২ সালের ২১শে ফেব্রুয়ারি মাতৃভাষার মর্যাদা রক্ষায় ঢাকার রাজপথে রক্ত দিয়েছিলেন বরকত, সালাম, রফিক, জব্বারসহ নাম না জানা অনেক শহীদ। তাদের এই আত্মত্যাগের মধ্য দিয়ে বাংলা আজ বিশ্বমঞ্চে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে স্বীকৃত। আধুনিক ডিজিটাল যুগে কম্পিউটার ও স্মার্টফোনে দ্রুত ও নির্ভুল বাংলা টাইপিং একটি অত্যন্ত মূল্যবান দক্ষতা। অফিস-আদালত থেকে শুরু করে শিক্ষা ও যোগাযোগ—সবখানেই বাংলা লেখার গুরুত্ব অপরিসীম। নিয়মিত অনুশীলনের মাধ্যমে যে কেউ খুব সহজেই নিজের টাইপিং গতি এবং নির্ভুলতা বহু গুণে বাড়িয়ে তুলতে পারেন।",
        instruction: "সময় শেষ হওয়া পর্যন্ত দ্রুত এবং কোনো ভুল না করে টাইপ করতে থাকুন।"
    }
];

// কীবোর্ড রেফারেন্স গাইড
const avroKeys = [
    { eng: "k", bng: "ক" }, { eng: "kh", bng: "খ" }, { eng: "g", bng: "গ" }, { eng: "gh", bng: "ঘ" },
    { eng: "c", bng: "চ" }, { eng: "ch", bng: "ছ" }, { eng: "j", bng: "জ" }, { eng: "jh", bng: "ঝ" },
    { eng: "t", bng: "ট" }, { eng: "th", bng: "ঠ" }, { eng: "d", bng: "ড" }, { eng: "dh", bng: "ঢ" },
    { eng: "p", bng: "প" }, { eng: "ph", bng: "ফ" }, { eng: "b", bng: "ব" }, { eng: "bh", bng: "ভ" },
    { eng: "m", bng: "ম" }, { eng: "r", bng: "র" }, { eng: "l", bng: "ল" }, { eng: "s", bng: "স" }
];

const bijoyKeys = [
    { eng: "j", bng: "ক" }, { eng: "J (Shift)", bng: "খ" }, { eng: "o", bng: "গ" }, { eng: "O", bng: "ঘ" },
    { eng: "y", bng: "চ" }, { eng: "Y", bng: "ছ" }, { eng: "u", bng: "জ" }, { eng: "U", bng: "ঝ" },
    { eng: "t", bng: "ট" }, { eng: "T", bng: "ঠ" }, { eng: "e", bng: "ড" }, { eng: "E", bng: "ঢ" },
    { eng: "r", bng: "প" }, { eng: "R", bng: "ফ" }, { eng: "h", bng: "ব" }, { eng: "H", bng: "ভ" },
    { eng: "m", bng: "ম" }, { eng: "v", bng: "র" }, { eng: "n", bng: "ল" }, { eng: "s", bng: "দ" }
];

// স্টেট ভেরিয়েবল
let currentLessonIndex = 0;
let targetText = "";
let timer = null;
let timeLeft = 60;
let totalTime = 60;
let isStarted = false;
let errors = 0;
let totalTypedChars = 0;

// DOM Elements
const textDisplay = document.getElementById("text-display");
const typingInput = document.getElementById("typing-input");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const errorsEl = document.getElementById("errors");
const lessonSelect = document.getElementById("lesson-select");
const lessonTitle = document.getElementById("current-lesson-title");
const lessonInstruction = document.getElementById("lesson-instruction");
const timerDurationGroup = document.getElementById("timer-duration-group");

// ইনিশিয়ালাইজেশন
window.onload = () => {
    populateLessonSelect();
    loadSelectedLesson();
    renderKeyboardGuide('avro');
    typingInput.addEventListener("input", handleTyping);
};

function populateLessonSelect() {
    lessonSelect.innerHTML = "";
    lessons.forEach((l, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = l.title;
        lessonSelect.appendChild(opt);
    });
}

function switchTab(tabType) {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons[0].classList.toggle("active", tabType === 'practice');
    buttons[1].classList.toggle("active", tabType === 'test');

    if (tabType === 'test') {
        currentLessonIndex = lessons.findIndex(l => l.type === 'test');
        lessonSelect.value = currentLessonIndex;
        timerDurationGroup.style.display = "flex";
        setCustomTestTime();
    } else {
        currentLessonIndex = 0;
        lessonSelect.value = 0;
        timerDurationGroup.style.display = "none";
        loadSelectedLesson();
    }
}

function loadSelectedLesson() {
    currentLessonIndex = parseInt(lessonSelect.value);
    const lesson = lessons[currentLessonIndex];
    targetText = lesson.text.normalize('NFC');
    lessonTitle.textContent = lesson.title;
    lessonInstruction.textContent = lesson.instruction;

    if (lesson.type === 'test') {
        timerDurationGroup.style.display = "flex";
    } else {
        timerDurationGroup.style.display = "none";
        totalTime = 60;
        timeLeft = 60;
    }
    restartLesson();
}

function renderText() {
    textDisplay.innerHTML = "";
    // স্ট্রিংটিকে বর্ণ/চিহ্ন অনুযায়ী বিভক্ত করা
    Array.from(targetText).forEach((char, index) => {
        const span = document.createElement("span");
        span.className = "char pending";
        span.innerText = char;
        span.id = `char-${index}`;
        textDisplay.appendChild(span);
    });
    if (textDisplay.firstChild) {
        textDisplay.firstChild.classList.add("active");
    }
}

function handleTyping(e) {
    const typedText = e.target.value.normalize('NFC');
    const typedLength = typedText.length;
    
    // টাইমার শুরু
    if (!isStarted && typedLength > 0) {
        startTimer();
    }

    const targetChars = Array.from(targetText);
    const typedChars = Array.from(typedText);

    let currentErrors = 0;

    targetChars.forEach((char, idx) => {
        const charSpan = document.getElementById(`char-${idx}`);
        if (!charSpan) return;

        charSpan.classList.remove("active", "correct", "incorrect", "pending");

        if (idx < typedLength) {
            if (typedChars[idx] === char) {
                charSpan.classList.add("correct");
            } else {
                charSpan.classList.add("incorrect");
                currentErrors++;
            }
        } else if (idx === typedLength) {
            charSpan.classList.add("active");
        } else {
            charSpan.classList.add("pending");
        }
    });

    errors = currentErrors;
    totalTypedChars = typedLength;
    errorsEl.textContent = toBengaliNumber(errors);

    calculateMetrics();

    // সম্পূর্ণ হলে
    if (typedLength >= targetChars.length && targetChars.length > 0) {
        finishLesson();
    }
}

function calculateMetrics() {
    const elapsedMinutes = (totalTime - timeLeft) / 60 || 0.01;
    // ৫ টি অক্ষরে ১টি স্ট্যান্ডার্ড শব্দ গণনা
    const netChars = Math.max(0, totalTypedChars - errors);
    const wpm = Math.round((netChars / 5) / elapsedMinutes);
    const accuracy = totalTypedChars > 0 ? Math.round(((totalTypedChars - errors) / totalTypedChars) * 100) : 100;

    wpmEl.textContent = toBengaliNumber(wpm);
    accuracyEl.textContent = toBengaliNumber(Math.max(0, accuracy)) + "%";
}

function startTimer() {
    isStarted = true;
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        calculateMetrics();

        if (timeLeft <= 0) {
            finishLesson();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const formatted = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    timerEl.textContent = toBengaliNumber(formatted);
}

function restartLesson() {
    clearInterval(timer);
    isStarted = false;
    typingInput.value = "";
    errors = 0;
    totalTypedChars = 0;
    
    const lesson = lessons[currentLessonIndex];
    if (lesson.type === 'test') {
        timeLeft = parseInt(document.getElementById("test-duration").value);
        totalTime = timeLeft;
    } else {
        timeLeft = 60;
        totalTime = 60;
    }

    updateTimerDisplay();
    wpmEl.textContent = "০";
    accuracyEl.textContent = "১০০%";
    errorsEl.textContent = "০";
    renderText();
    typingInput.focus();
}

function setCustomTestTime() {
    timeLeft = parseInt(document.getElementById("test-duration").value);
    totalTime = timeLeft;
    restartLesson();
}

function finishLesson() {
    clearInterval(timer);
    typingInput.blur();

    const elapsed = totalTime - timeLeft;
    const finalWpm = wpmEl.textContent;
    const finalAccuracy = accuracyEl.textContent;

    // লোকাল স্টোরেজে সেভ করা
    saveProgress(lessons[currentLessonIndex].title, finalWpm, finalAccuracy);

    // ফলাফল দেখানো
    document.getElementById("modal-wpm").textContent = finalWpm;
    document.getElementById("modal-accuracy").textContent = finalAccuracy;
    document.getElementById("modal-time").textContent = toBengaliNumber(elapsed);
    document.getElementById("result-modal").classList.add("active");
}

function closeModal() {
    document.getElementById("result-modal").classList.remove("active");
}

function nextLesson() {
    closeModal();
    if (currentLessonIndex < lessons.length - 1) {
        currentLessonIndex++;
        lessonSelect.value = currentLessonIndex;
        loadSelectedLesson();
    } else {
        alert("আপনি সব পাঠ সম্পন্ন করেছেন!");
    }
}

function focusInput() {
    typingInput.focus();
}

// লোকাল স্টোরেজ লজিক
function saveProgress(lessonName, wpm, accuracy) {
    const history = JSON.parse(localStorage.getItem("banglaTypingProgress") || "[]");
    history.push({
        lesson: lessonName,
        wpm: wpm,
        accuracy: accuracy,
        date: new Date().toLocaleDateString('bn-BD')
    });
    localStorage.setItem("banglaTypingProgress", JSON.stringify(history));
}

function openProgressModal() {
    const list = document.getElementById("progress-list");
    list.innerHTML = "";
    const history = JSON.parse(localStorage.getItem("banglaTypingProgress") || "[]");

    if (history.length === 0) {
        list.innerHTML = "<p>এখনো কোনো পাঠ সম্পন্ন করেননি। অনুশীলন শুরু করুন!</p>";
    } else {
        history.slice(-8).reverse().forEach(item => {
            const row = document.createElement("div");
            row.className = "progress-item";
            row.innerHTML = `<strong>${item.lesson}</strong> <span>${item.wpm} WPM | নির্ভুলতা: ${item.accuracy}</span>`;
            list.appendChild(row);
        });
    }
    document.getElementById("progress-modal").classList.add("active");
}

function closeProgressModal() {
    document.getElementById("progress-modal").classList.remove("active");
}

function clearProgress() {
    if (confirm("আপনি কি সমস্ত সংরক্ষিত অগ্রগতি মুছে ফেলতে চান?")) {
        localStorage.removeItem("banglaTypingProgress");
        openProgressModal();
    }
}

// ভার্চুয়াল কীবোর্ড রেফারেন্স
function toggleKeyboardGuide() {
    const val = document.getElementById("layout-guide").value;
    const container = document.getElementById("keyboard-guide-container");
    if (val === 'none') {
        container.style.display = "none";
    } else {
        container.style.display = "block";
        renderKeyboardGuide(val);
    }
}

function renderKeyboardGuide(type) {
    const grid = document.getElementById("keyboard-mapping");
    const title = document.getElementById("guide-name");
    grid.innerHTML = "";

    const list = type === 'avro' ? avroKeys : bijoyKeys;
    title.textContent = type === 'avro' ? "অভ্রো ফোনেটিক দ্রুত সহায়িকা (Key Mapping)" : "বিজয় লেআউট দ্রুত সহায়িকা";

    list.forEach(item => {
        const badge = document.createElement("div");
        badge.className = "key-badge";
        badge.innerHTML = `<span class="eng">${item.eng}</span><br><span class="bng">${item.bng}</span>`;
        grid.appendChild(badge);
    });
}

// সংখ্যা বাংলায় রূপান্তর
function toBengaliNumber(n) {
    const bngDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    return n.toString().replace(/\d/g, d => bngDigits[d]);
}