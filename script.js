const mageEntries = document.querySelectorAll(".mage-entry[data-background]");

mageEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--mage-background", `url("${background}")`);
        document.body.classList.add("mage-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("mage-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const marksmenEntries = document.querySelectorAll(".marksmen-entry[data-background]");

marksmenEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--marksmen-background", `url("${background}")`);
        document.body.classList.add("marksmen-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("marksmen-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const fighterEntries = document.querySelectorAll(".fighter-entry[data-background]");

fighterEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--fighter-background", `url("${background}")`);
        document.body.classList.add("fighter-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("fighter-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const tankEntries = document.querySelectorAll(".tank-entry[data-background]");

tankEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--tank-background", `url("${background}")`);
        document.body.classList.add("tank-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("tank-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const supportEntries = document.querySelectorAll(".support-entry[data-background]");

supportEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--support-background", `url("${background}")`);
        document.body.classList.add("support-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("support-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const assassinEntries = document.querySelectorAll(".assassin-entry[data-background]");

assassinEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--assassin-background", `url("${background}")`);
        document.body.classList.add("assassin-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("assassin-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const questionPool = [
    { q: "Which role does Tigreal play?", options: ["Marksman", "Tank", "Mage", "Assassin"], answer: 1 },
    { q: "What is the highest rank in MLBB?", options: ["Legend", "Mythic", "Mythical Immortal", "Grandmaster"], answer: 2 },
    { q: "Which role does Miya play?", options: ["Support", "Tank", "Marksman", "Fighter"], answer: 2 },
    { q: "Which role does Eudora play?", options: ["Mage", "Assassin", "Tank", "Marksman"], answer: 0 },
    { q: "Which role does Saber play?", options: ["Fighter", "Assassin", "Support", "Mage"], answer: 1 },
    { q: "Which mode affects your rank?", options: ["Classic", "Ranked", "Brawl"], answer: 1 },
    { q: "How many players are on each team in Classic mode?", options: ["3", "4", "5", "6"], answer: 2 },
    { q: "Which mode is played in one lane?", options: ["Ranked", "Classic", "Brawl", "Custom"], answer: 2 },
    { q: "What currency is used to buy equipment during a match?", options: ["Gold", "Diamonds", "Tickets", "Battle points"], answer: 0 },
    { q: "How many pieces of equipment can a player keep?", options: ["4", "5", "6", "8"], answer: 2 },
    { q: "Which page covers emblems and talents?", options: ["Trivia", "Preparation", "Game Modes", "Home"], answer: 1 },
    { q: "Which role does Angela play?", options: ["Support", "Tank", "Marksman", "Fighter"], answer: 0 },
    { q: "Which role does Alucard play?", options: ["Mage", "Fighter", "Support", "Tank"], answer: 1 },
    { q: "Which role does Nana play?", options: ["Assassin", "Marksman", "Mage", "Tank"], answer: 2 },
    { q: "Which role does Franco play?", options: ["Tank", "Mage", "Fighter", "Support"], answer: 0 },
    { q: "Which role does Fanny play?", options: ["Assassin", "Mage", "Marksman", "Support"], answer: 0 },
    { q: "Which role does Layla play?", options: ["Fighter", "Tank", "Marksman", "Mage"], answer: 2 },
    { q: "In what rank do you unlock draft mode?", options: ["Elite", "Epic", "Mythical Glory", "Grandmaster"], answer: 2 },
    { q: "Who is the oldest marksman in the game?", options: ["Layla", "Clint", "Moskov", "Miya"], answer: 3 },
    { q: "What mage is the only mage that can transform an enemy?", options: ["Nana", "Vexana", "Selena", "Odette"], answer: 0 },
    { q: "How many ranks are there?", options: ["5", "12", "8", "10"], answer: 3 },
    { q: "You can freely pick your hero in brawl mode.", options: ["True", "False"], answer: 1 },
    { q: "There can be the same hero on both teams in classic mode.", options: ["True", "False"], answer: 0 },
    { q: "What fighter was released in 2023?", options: ["Barats", "Khalid", "Paquito", "Cici"], answer: 2 },
    { q: "Helcurt is a:", options: ["Mage", "Tank", "Assassin", "Marksman"], answer: 2 },
    { q: "Obsidia is a:", options: ["Mage", "Support", "Fighter", "Marksman"], answer: 3 },
    { q: "Diggie is a mage.", options: ["True", "False"], answer: 1 },
    { q: "Angela is a support.", options: ["True", "False"], answer: 0 },
    { q: "Ruby is a tank.", options: ["True", "False"], answer: 1 },
    { q: "Belerick is a tank.", options: ["True", "False"], answer: 0 },
    { q: "Who is the deadly sniper?", options: ["Kimmy", "Wanwan", "Brody", "Lesley"], answer: 3 },
    { q: "Who is the professor of the mystics?", options: ["Harley", "Gord", "Valir", "Bane"], answer: 1 },
    { q: "Who protects Carmilla?", options: ["Julian", "Tigreal", "Cecilion", "Hayabusa"], answer: 2 }
];

const QUESTION_COUNT = 10;

function shuffle(arr) {
    const shuffled = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function launchConfetti() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const colors = ["#7c3aed", "#d946ef", "#facc15", "#22d3ee", "#f97316"];
    const pieces = Array.from({ length: 120 }, () => ({
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 7 + 4,
        x: Math.random() * window.innerWidth,
        y: -20,
        velocityX: (Math.random() - 0.5) * 8,
        velocityY: Math.random() * 3 + 2,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.2
    }));

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "60";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach((piece) => {
            piece.x += piece.velocityX;
            piece.y += piece.velocityY;
            piece.velocityY += 0.05;
            piece.rotation += piece.rotationSpeed;

            context.save();
            context.translate(piece.x, piece.y);
            context.rotate(piece.rotation);
            context.fillStyle = piece.color;
            context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
            context.restore();
        });

        if (pieces.some((piece) => piece.y < canvas.height + 20)) {
            requestAnimationFrame(animate);
        } else {
            canvas.remove();
        }
    };

    animate();
}

const triviaPage = document.querySelector("#triviaBody");

if (triviaPage) {
    const quiz = document.querySelector("#quiz");
    const intro = document.querySelector("#trivia-intro");
    const startButton = document.querySelector("#start-trivia");
    let questions = [];
    let current = 0;
    let score = 0;
    const scoreEmotes = {
        0: ["sora", "Sora"],
        1: ["moskov", "Moskov"],
        2: ["karrie", "Karrie"],
        3: ["aurora", "Aurora"],
        4: ["selena", "Selena"],
        5: ["wanwan", "Wanwan"],
        6: ["zhuxin", "Zhuxin"],
        7: ["alice", "Alice"],
        8: ["ruby", "Ruby"],
        9: ["lunox", "Lunox"],
        10: ["nana", "Nana"]
    };

    const render = () => {
        if (current >= questions.length) {
            const [emoteName, emoteAlt] = scoreEmotes[score];
            const scoreEmote = `<img class="mx-auto mb-4 max-h-48 w-auto object-contain" src="img/emote/${emoteName}_emote.png" alt="${emoteAlt} emote">`;

            if (score === questions.length) {
                launchConfetti();
            }

            quiz.innerHTML = `
                <div class="mb-6 h-2.5 w-full rounded-full bg-white/10">
                    <div class="h-2.5 w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400"></div>
                </div>
                <h2 class="mb-4 text-2xl font-semibold">You scored ${score} / ${questions.length}</h2>
                ${scoreEmote}
                <button id="restart-trivia" type="button" class="rounded-md bg-violet-700 px-5 py-3 transition-colors hover:bg-violet-600">Play again</button>`;
            return;
        }

        const { q, options } = questions[current];
        const percent = (current / questions.length) * 100;

        quiz.innerHTML = `
            <div class="mb-2 flex justify-between text-sm text-white/70">
                <span>Question ${current + 1} of ${questions.length}</span>
                <span>${Math.round(percent)}%</span>
            </div>
            <div class="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${current}">
                <div class="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-500 ease-out" style="width: ${percent}%"></div>
            </div>
            <h2 class="mb-4 text-xl font-medium">${q}</h2>
            <div class="space-y-3">
                ${options.map((option, index) => `<button type="button" data-answer="${index}" class="w-full rounded-md bg-violet-900 px-4 py-3 text-left transition-colors hover:bg-violet-800">${option}</button>`).join("")}
            </div>`;
    };

    const startQuiz = () => {
        questions = shuffle(questionPool).slice(0, QUESTION_COUNT);
        current = 0;
        score = 0;
        intro.hidden = true;
        quiz.hidden = false;
        render();
    };

    startButton.addEventListener("click", startQuiz);

    quiz.addEventListener("click", (event) => {
        const answerButton = event.target.closest("[data-answer]");

        if (answerButton) {
            if (Number(answerButton.dataset.answer) === questions[current].answer) {
                score++;
            }
            current++;
            render();
        }

        if (event.target.closest("#restart-trivia")) {
            startQuiz();
        }
    });
}