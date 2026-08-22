<<<<<<< HEAD
/* =====================================================
   VAMPIRE TECH CHALLENGE
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   COMMON PROTECTION
===================================================== */

document.addEventListener("contextmenu", function(event) {

    event.preventDefault();

});


document.addEventListener("copy", function(event) {

    event.preventDefault();

});


document.addEventListener("cut", function(event) {

    event.preventDefault();

});


document.addEventListener("paste", function(event) {

    event.preventDefault();

});


document.addEventListener("dragstart", function(event) {

    event.preventDefault();

});


/* =====================================================
   BLOCK SOME SHORTCUTS
===================================================== */

document.addEventListener("keydown", function(event) {

    if (
        event.key === "F12" ||
        (
            event.ctrlKey &&
            event.shiftKey &&
            (
                event.key === "I" ||
                event.key === "J"
            )
        ) ||
        (
            event.ctrlKey &&
            event.key === "U"
        )
    ) {

        event.preventDefault();

    }

});
=======
// --- DATA ---
const stage1Questions = [
  { code: "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))", options: ["3", "4", "Error", "None"], correct: 1 },
  { code: "print(bool('False'))", options: ["False", "True", "Error", "None"], correct: 1 },
  { code: "a = (1, 2, 3)\na[0] = 4", options: ["(4, 2, 3)", "TypeError", "SyntaxError", "None"], correct: 1 },
  { code: "print(2 ** 3 ** 2)", options: ["64", "512", "81", "256"], correct: 1 },
  { code: "print(type(1/2))", options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"], correct: 1 }
];
>>>>>>> 824af4a0942ddee7b7a396ab0f7241428c5586de

const stage2Puzzles = [
  { text: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo", hint: "Think of sound bouncing off cavern walls." },
  { text: "A vampire leaves his tomb at 12:00 AM, walks 3 miles south, 3 miles west, shoots a bat, and walks 3 miles north back to his exact tomb. What color was the bat?", answer: "white", hint: "The tomb location makes this place very cold and unique." }
];

<<<<<<< HEAD
/* =====================================================
   PAGE NAME
===================================================== */

const page =
    location.pathname
        .split("/")
        .pop();


/* =====================================================
   WELCOME PAGE
===================================================== */

if (
    page === "index.html" ||
    page === ""
) {

    const startBtn =
        document.getElementById("startBtn");

    const teamInput =
        document.getElementById("teamName");


    startBtn.addEventListener(
        "click",
        startChallenge
    );


    function startChallenge() {

        const team =
            teamInput.value.trim();


        if (team === "") {

            alert(
                "Please enter your team name."
            );

            teamInput.focus();

            return;

        }


        localStorage.setItem(
            "teamName",
            team
        );


        localStorage.setItem(
            "level1Score",
            "0"
        );


        localStorage.setItem(
            "level2Score",
            "0"
        );


        localStorage.setItem(
            "finalScore",
            "0"
        );


        requestFullscreen();


        window.location.href =
            "level1.html";

    }


    /* ENTER ON WELCOME PAGE */

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                startChallenge();

            }

        }
    );

}


/* =====================================================
   FULLSCREEN
===================================================== */

function requestFullscreen() {

    if (
        document.documentElement.requestFullscreen
    ) {

        document.documentElement
            .requestFullscreen()
            .catch(function() {

                console.log(
                    "Fullscreen permission was not granted."
                );

            });

    }

}


/* =====================================================
   LEVEL 1
===================================================== */

if (
    page === "level1.html"
) {

    const questions = [

        {
            question:
                "What is the output of print(2 ** 3)?",

            options: [
                "6",
                "8",
                "9",
                "5"
            ],

            answer: 1,

            marks: 10
        },

        {
            question:
                "What is the output of print(10 // 3)?",

            options: [
                "3",
                "3.33",
                "1",
                "4"
            ],

            answer: 0,

            marks: 10
        },

        {
            question:
                "Which keyword is used to define a function in Python?",

            options: [
                "function",
                "define",
                "def",
                "fun"
            ],

            answer: 2,

            marks: 10
        },

        {
            question:
                "What is the output of print(bool(0))?",

            options: [
                "True",
                "False",
                "0",
                "None"
            ],

            answer: 1,

            marks: 10
        },

        {
            question:
                "What is the output of print(len('Vampire'))?",

            options: [
                "6",
                "7",
                "8",
                "5"
            ],

            answer: 1,

            marks: 10
        }

    ];


    let currentQuestion = 0;

    let level1Score = 0;

    let selected = false;

    let timeLeft = 300;

    let timerInterval;


    const questionBox =
        document.getElementById(
            "questionBox"
        );

    const optionsBox =
        document.getElementById(
            "optionsBox"
        );

    const questionNumber =
        document.getElementById(
            "questionNumber"
        );

    const progressBar =
        document.getElementById(
            "progressBar"
        );

    const timer =
        document.getElementById(
            "timer"
        );


    /* LOAD QUESTION */

    function loadQuestion() {

        selected = false;


        const q =
            questions[currentQuestion];


        questionNumber.textContent =
            currentQuestion + 1;


        questionBox.textContent =
            q.question;


        progressBar.style.width =
            (
                ((currentQuestion + 1) / 5)
                * 100
            ) + "%";


        optionsBox.innerHTML = "";


        q.options.forEach(
            function(option, index) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "option";


                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    function() {

                        selectAnswer(
                            index
                        );

                    }
                );


                optionsBox.appendChild(
                    button
                );

            }
        );

    }


    /* SELECT ANSWER */

    function selectAnswer(index) {

        if (selected) {
            return;
        }


        selected = true;


        const q =
            questions[currentQuestion];


        if (
            index === q.answer
        ) {

            level1Score +=
                q.marks;

        }


        /*

        IMPORTANT:

        No correct/wrong message
        is displayed.

        The participant immediately
        goes to the next question.

        */


        setTimeout(
            nextQuestion,
            150
        );

    }


    /* NEXT QUESTION */

    function nextQuestion() {

        currentQuestion++;


        if (
            currentQuestion >=
            questions.length
        ) {

            finishLevel1();

            return;

        }


        loadQuestion();

    }


    /* FINISH LEVEL 1 */

    function finishLevel1() {

        clearInterval(
            timerInterval
        );


        localStorage.setItem(
            "level1Score",
            level1Score
        );


        localStorage.setItem(
            "currentLevelScore",
            level1Score
        );


        window.location.href =
            "level2.html";

    }


    /* TIMER */

    function updateTimer() {

        const minutes =
            Math.floor(
                timeLeft / 60
            );


        const seconds =
            timeLeft % 60;


        timer.textContent =
            String(minutes)
                .padStart(2, "0")
            + ":" +
            String(seconds)
                .padStart(2, "0");


        if (
            timeLeft <= 30
        ) {

            timer.parentElement
                .classList.add(
                    "timer-warning"
                );

        }


        if (
            timeLeft <= 0
        ) {

            clearInterval(
                timerInterval
            );


            finishLevel1();

        }

    }


    timerInterval =
        setInterval(
            function() {

                timeLeft--;

                updateTimer();

            },
            1000
        );


    /* ENTER KEY */

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();


                if (!selected) {

                    /*
                    Enter selects the
                    first option if no
                    option was selected.
                    */

                    const firstButton =
                        document.querySelector(
                            ".option"
                        );


                    if (firstButton) {

                        firstButton.click();

                    }

                }
                else {

                    nextQuestion();

                }

            }

        }
    );


    /* START */

    loadQuestion();

    updateTimer();

}


/* =====================================================
   LEVEL 2
===================================================== */

if (
    page === "level2.html"
) {

    const puzzles = [

        {
            question:
                "I am a number. If you multiply me by 2 and add 6, the answer is 20. What am I?",

            hint:
                "Think backwards. Subtract 6 first, then divide by 2.",

            answer:
                "7",

            marks:
                25
        },

        {
            question:
                "I have keys but no locks. I have space but no room. You can enter, but you cannot go inside. What am I?",

            hint:
                "You use me when working with a computer.",

            answer:
                "keyboard",

            marks:
                25
        }

    ];


    let currentPuzzle = 0;

    let level2Score = 0;

    let timeLeft = 300;

    let timerInterval;

    let answerSelected = false;


    const puzzleArea =
        document.getElementById(
            "puzzleArea"
        );


    const timer =
        document.getElementById(
            "timer"
        );


    const instructionsPopup =
        document.getElementById(
            "instructionsPopup"
        );


    const hintPopup =
        document.getElementById(
            "hintPopup"
        );


    const instructionsContinue =
        document.getElementById(
            "instructionsContinue"
        );


    const hintContinue =
        document.getElementById(
            "hintContinue"
        );


    /* =========================================
       LEVEL 2 INSTRUCTIONS
    ========================================= */

    instructionsContinue.addEventListener(
        "click",
        function() {

            instructionsPopup
                .classList.remove(
                    "show"
                );


            hintPopup
                .classList.add(
                    "show"
                );

        }
    );


    /* =========================================
       HINT POPUP
    ========================================= */

    hintContinue.addEventListener(
        "click",
        function() {

            hintPopup
                .classList.remove(
                    "show"
                );


            loadPuzzle();

            startTimer();

        }
    );


    /* =========================================
       LOAD PUZZLE
    ========================================= */

    function loadPuzzle() {

        answerSelected = false;


        const puzzle =
            puzzles[currentPuzzle];


        puzzleArea.innerHTML = `

            <div class="question-number">
                Puzzle ${currentPuzzle + 1} / 2
            </div>

            <div class="puzzle">

                <h3>
                    🧩 PUZZLE ${currentPuzzle + 1}
                </h3>

                <div class="puzzle-question">
                    ${puzzle.question}
                </div>

                <div class="hint">

                    💡 <b>Hint:</b>

                    ${puzzle.hint}

                </div>

                <div style="text-align:center;">

                    <input
                        id="puzzleAnswer"
                        type="text"
                        placeholder="Enter your answer"
                        autocomplete="off"
                    >

                    <br>

                    <button id="submitPuzzle">
                        SUBMIT
                    </button>

                </div>

            </div>

            <p class="enter-info">
                Enter your answer and press
                <b>ENTER</b> to continue.
            </p>

        `;


        document
            .getElementById(
                "submitPuzzle"
            )
            .addEventListener(
                "click",
                submitPuzzle
            );


        document
            .getElementById(
                "puzzleAnswer"
            )
            .focus();

    }


    /* =========================================
       SUBMIT PUZZLE
    ========================================= */

    function submitPuzzle() {

        if (answerSelected) {
            return;
        }


        answerSelected = true;


        const input =
            document.getElementById(
                "puzzleAnswer"
            );


        const answer =
            input.value
                .trim()
                .toLowerCase();


        const correctAnswer =
            puzzles[currentPuzzle]
                .answer
                .toLowerCase();


        if (
            answer === correctAnswer
        ) {

            level2Score +=
                puzzles[currentPuzzle]
                    .marks;

        }


        /*
        No correct/wrong message.
        */


        setTimeout(
            nextPuzzle,
            150
        );

    }


    /* =========================================
       NEXT PUZZLE
    ========================================= */

    function nextPuzzle() {

        currentPuzzle++;


        if (
            currentPuzzle >=
            puzzles.length
        ) {

            finishLevel2();

            return;

        }


        loadPuzzle();

    }


    /* =========================================
       FINISH LEVEL 2
    ========================================= */

    function finishLevel2() {

        clearInterval(
            timerInterval
        );


        localStorage.setItem(
            "level2Score",
            level2Score
        );


        window.location.href =
            "result.html";

    }


    /* =========================================
       TIMER
    ========================================= */

    function startTimer() {

        clearInterval(
            timerInterval
        );


        updateTimer();


        timerInterval =
            setInterval(
                function() {

                    timeLeft--;

                    updateTimer();


                    if (
                        timeLeft <= 0
                    ) {

                        clearInterval(
                            timerInterval
                        );


                        finishLevel2();

                    }

                },
                1000
            );

    }


    function updateTimer() {

        const minutes =
            Math.floor(
                timeLeft / 60
            );


        const seconds =
            timeLeft % 60;


        timer.textContent =
            String(minutes)
                .padStart(2, "0")
            + ":" +
            String(seconds)
                .padStart(2, "0");


        if (
            timeLeft <= 30
        ) {

            timer.parentElement
                .classList.add(
                    "timer-warning"
                );

        }

    }


    /* =========================================
       ENTER KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();


                const popupOpen =
                    instructionsPopup
                        .classList.contains(
                            "show"
                        );


                const hintOpen =
                    hintPopup
                        .classList.contains(
                            "show"
                        );


                if (popupOpen) {

                    instructionsContinue
                        .click();

                    return;

                }


                if (hintOpen) {

                    hintContinue.click();

                    return;

                }


                submitPuzzle();

            }

        }
    );

}


/* =====================================================
   RESULT PAGE
===================================================== */

if (
    page === "result.html"
) {

    const team =
        localStorage.getItem(
            "teamName"
        ) || "Team";


    const level1 =
        Number(
            localStorage.getItem(
                "level1Score"
            ) || 0
        );


    const level2 =
        Number(
            localStorage.getItem(
                "level2Score"
            ) || 0
        );


    const total =
        level1 + level2;


    document.getElementById(
        "resultTeam"
    ).textContent =
        "🩸 " + team;


    document.getElementById(
        "finalScore"
    ).textContent =
        total;


    let message;


    if (total >= 80) {

        message =
            "🧛 Outstanding! You escaped the Vampire's Castle!";

    }

    else if (total >= 50) {

        message =
            "🩸 Great job! You survived the challenge!";

    }

    else {

        message =
            "☠️ The Vampire has won this time!";

    }


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;


    /* RESTART */

    document.getElementById(
        "restartBtn"
    ).addEventListener(
        "click",
        function() {

            localStorage.clear();

            window.location.href =
                "index.html";

        }
    );


    /* ENTER = RESTART */

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                document
                    .getElementById(
                        "restartBtn"
                    )
                    .click();

            }

        }
    );

}


/* =====================================================
   TAB SWITCH WARNING
===================================================== */

document.addEventListener(
    "visibilitychange",
    function() {

        if (
            document.hidden &&
            (
                page === "level1.html" ||
                page === "level2.html"
            )
        ) {

            alert(
                "⚠️ Please remain on the challenge screen."
            );

        }

    }
);


/* ========================
=======
// --- GLOBAL SECURITY & CONTROLS ---
function initSecurity() {
  // Point 27: Right-click blocking
  document.addEventListener('contextmenu', e => e.preventDefault());
  // Point 26: Copy/Cut/Paste blocking
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());

  // Point 31: Keyboard Protection
  document.addEventListener('keydown', e => {
    if (e.key === 'F12' || (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V' || e.shiftKey))) {
      e.preventDefault();
    }
  });

  // Point 28: Tab-switch warning
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !location.pathname.includes('result.html') && !location.pathname.includes('index.html')) {
      showSecModal("Tab switching detected! Answers must be submitted without leaving the frame.");
    }
  });

  // Point 29: Fullscreen-exit warning
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && !location.pathname.includes('result.html') && !location.pathname.includes('index.html')) {
      showSecModal("Exiting fullscreen mode is flagged. Please keep the window expanded.");
    }
  });
}

function showSecModal(msg) {
  let modal = document.getElementById('secModal');
  if (modal) {
    document.getElementById('secModalMsg').innerText = msg;
    modal.classList.remove('hidden');
  }
}

function closeSecModal() {
  let modal = document.getElementById('secModal');
  if (modal) modal.classList.add('hidden');
}

// --- TIMER LOGIC ---
let timerInterval = null;
let timeRemaining = 300; // Points 6 & 13: 5 minutes per level

function startTimer(onTimeout) {
  clearInterval(timerInterval);
  timeRemaining = 300;
  updateTimerBadge();
  const badge = document.getElementById('timerDisplay');
  if (badge) badge.classList.remove('hidden');

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerBadge();
    if (timeRemaining <= 0) { // Point 30: Automatic Timeout
      clearInterval(timerInterval);
      onTimeout();
    }
  }, 1000);
}

function updateTimerBadge() {
  const badge = document.getElementById('timerDisplay');
  if (!badge) return;
  const mins = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
  const secs = String(timeRemaining % 60).padStart(2, '0');
  badge.innerText = `⏱ ${mins}:${secs}`;
}

// --- INDEX PAGE LOGIC ---
function startQuiz() {
  const teamInput = document.getElementById('teamNameInput').value.trim();
  if (!teamInput) {
    alert("Please enter a valid team name.");
    return;
  }
  localStorage.setItem('vampire_team', teamInput);
  localStorage.setItem('vampire_s1_score', 0);
  localStorage.setItem('vampire_s2_score', 0);

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
  window.location.href = 'level1.html';
}

// --- LEVEL 1 LOGIC ---
let s1Index = 0;
let s1Score = 0;

function initLevel1() {
  startTimer(finishLevel1);
  renderStage1Question();
}

function renderStage1Question() {
  if (s1Index >= stage1Questions.length) {
    finishLevel1();
    return;
  }
  const q = stage1Questions[s1Index];
  document.getElementById('s1Progress').innerText = `Question ${s1Index + 1} of 5`; // Point 7: 5 MCQs
  document.getElementById('s1CodeBlock').innerText = q.code;
  
  const optDiv = document.getElementById('s1Options');
  optDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectStage1Option(idx);
    optDiv.appendChild(btn);
  });
}

function selectStage1Option(idx) {
  if (idx === stage1Questions[s1Index].correct) {
    s1Score++;
  }
  s1Index++;
  // Point 8: Automatic Navigation
  // Points 9 & 10: No feedback / answers hidden
  renderStage1Question();
}

function finishLevel1() {
  clearInterval(timerInterval);
  localStorage.setItem('vampire_s1_score', s1Score);
  document.getElementById('s1ActiveArea').classList.add('hidden');
  document.getElementById('s1ScoreVal').innerText = s1Score; // Point 11: Score After Level
  document.getElementById('s1ScoreArea').classList.remove('hidden');
}

function goToLevel2() { // Point 12: Continue to Level 2
  window.location.href = 'level2.html';
}

// --- LEVEL 2 LOGIC ---
let s2Index = 0;
let s2Score = 0;

function initLevel2() {
  // Point 14: Level 2 Instructions Popup appears initially
  document.getElementById('stage2InstModal').classList.remove('hidden');
}

function showHintNoticeModal() {
  document.getElementById('stage2InstModal').classList.add('hidden');
  // Point 15: Centered Hint Popup
  document.getElementById('stage2HintModal').classList.remove('hidden');
}

function startLevel2Actual() {
  document.getElementById('stage2HintModal').classList.add('hidden');
  document.getElementById('s2ActiveArea').classList.remove('hidden');
  startTimer(finishLevel2);
  renderStage2Puzzle();
}

function renderStage2Puzzle() {
  if (s2Index >= stage2Puzzles.length) {
    finishLevel2();
    return;
  }
  const p = stage2Puzzles[s2Index];
  document.getElementById('s2Progress').innerText = `Puzzle ${s2Index + 1} of 2`; // Point 16: 2 Logical Puzzles
  document.getElementById('s2QuestionText').innerText = p.text;
  document.getElementById('s2AnswerInput').value = "";
  document.getElementById('hintBox').innerText = p.hint; // Point 17: Hints Below
  document.getElementById('hintBox').classList.add('hidden');
}

function toggleHint() {
  document.getElementById('hintBox').classList.toggle('hidden');
}

function submitStage2Answer() {
  const userAns = document.getElementById('s2AnswerInput').value.trim().toLowerCase();
  if (userAns === stage2Puzzles[s2Index].answer.toLowerCase()) {
    s2Score++;
  }
  s2Index++;
  // Point 18: Automatic Navigation
  // Points 19 & 20: No feedback / hidden answers
  renderStage2Puzzle();
}

function finishLevel2() {
  clearInterval(timerInterval);
  localStorage.setItem('vampire_s2_score', s2Score);
  document.getElementById('s2ActiveArea').classList.add('hidden');
  document.getElementById('s2ScoreVal').innerText = s2Score; // Point 21: Score After Level
  document.getElementById('s2ScoreArea').classList.remove('hidden');
}

function goToResults() {
  window.location.href = 'result.html';
}

// --- RESULT PAGE LOGIC ---
function initResults() {
  const team = localStorage.getItem('vampire_team') || "Unknown Team";
  const score1 = parseInt(localStorage.getItem('vampire_s1_score') || 0);
  const score2 = parseInt(localStorage.getItem('vampire_s2_score') || 0);
  const total = score1 + score2; // Point 22: Total Score Calculation

  document.getElementById('finalTeamName').innerText = team;
  document.getElementById('finalTotalScore').innerText = `${total} / 7`; // Point 23: Final Score Page

  let title = "";
  if (total === 7) title = "🦇 Sovereign Vampire Lord (Perfect Score)";
  else if (total >= 4) title = "🩸 Nightstalker Code Master";
  else title = "🕯️ Fledgling Initiate";

  document.getElementById('vampireTitle').innerText = title; // Point 24: Vampire Result Message
}

function restartApp() { // Point 25: Restart Option
  localStorage.clear();
  if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
  window.location.href = 'index.html';
}

// Global initialization call
document.addEventListener('DOMContentLoaded', () => {
  initSecurity();
});
>>>>>>> 824af4a0942ddee7b7a396ab0f7241428c5586de
