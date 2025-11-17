document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const questionTitle = document.getElementById('question-title');
    const answersContainer = document.getElementById('answers-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const mbtiTypeDisplay = document.getElementById('mbti-type');
    const mbtiDescriptionDisplay = document.getElementById('mbti-description');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    let userAnswers = []; // To store selected answers for navigation

    const questions = [
        {
            question: "파티에 갔을 때 당신은?",
            answers: [
                { text: "새로운 사람들과 쉽게 어울리고 대화를 주도한다.", type: "E" },
                { text: "아는 사람들과 주로 이야기하고 조용히 관찰하는 편이다.", type: "I" }
            ]
        },
        {
            question: "새로운 정보를 접했을 때 당신은?",
            answers: [
                { text: "구체적인 사실과 경험에 집중한다.", type: "S" },
                { text: "전체적인 그림과 미래의 가능성을 상상한다.", type: "N" }
            ]
        },
        {
            question: "중요한 결정을 내릴 때 당신은?",
            answers: [
                { text: "논리적이고 객관적인 분석을 중요하게 생각한다.", type: "T" },
                { text: "사람들의 감정과 상황의 조화를 고려한다.", type: "F" }
            ]
        },
        {
            question: "여행 계획을 세울 때 당신은?",
            answers: [
                { text: "미리 계획을 세우고 일정에 따라 움직이는 것을 선호한다.", type: "J" },
                { text: "즉흥적으로 떠나고 상황에 따라 유연하게 대처하는 것을 즐긴다.", type: "P" }
            ]
        },
        {
            question: "친구들과의 모임에서 당신은?",
            answers: [
                { text: "에너지를 얻고 활기찬 분위기를 즐긴다.", type: "E" },
                { text: "혼자만의 시간이 더 편안하고 에너지를 소모한다고 느낀다.", type: "I" }
            ]
        },
        {
            question: "일을 처리할 때 당신은?",
            answers: [
                { text: "현실적이고 실용적인 방법을 찾는다.", type: "S" },
                { text: "새로운 아이디어나 이론적인 접근을 시도한다.", type: "N" }
            ]
        },
        {
            question: "갈등 상황에서 당신은?",
            answers: [
                { text: "문제의 원인을 분석하고 해결책을 제시한다.", type: "T" },
                { text: "모두의 감정을 고려하고 관계 회복을 우선시한다.", type: "F" }
            ]
        },
        {
            question: "마감 기한이 있는 프로젝트에서 당신은?",
            answers: [
                { text: "계획을 세우고 기한 내에 완료하기 위해 노력한다.", type: "J" },
                { text: "마지막 순간까지 유연하게 대처하며 새로운 아이디어를 추가한다.", type: "P" }
            ]
        }
    ];

    const mbtiDescriptions = {
        "ISTJ": "청렴결백한 논리주의자",
        "ISFJ": "용감한 수호자",
        "INFJ": "선의의 옹호자",
        "INTJ": "용의주도한 전략가",
        "ISTP": "만능 재주꾼",
        "ISFP": "호기심 많은 예술가",
        "INFP": "열정적인 중재자",
        "INTP": "논리적인 사색가",
        "ESTP": "모험을 즐기는 사업가",
        "ESFP": "자유로운 영혼의 연예인",
        "ENFP": "재기발랄한 활동가",
        "ENTP": "뜨거운 논쟁을 즐기는 변론가",
        "ESTJ": "엄격한 관리자",
        "ESFJ": "사교적인 외교관",
        "ENFJ": "정의로운 사회운동가",
        "ENTJ": "대담한 통솔자"
    };

    function showScreen(screenToShow) {
        startScreen.classList.add('d-none');
        questionScreen.classList.add('d-none');
        resultScreen.classList.add('d-none');
        screenToShow.classList.remove('d-none');
    }

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            questionTitle.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
            answersContainer.innerHTML = '';

            question.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-outline-primary', 'answer-btn');
                button.textContent = answer.text;
                button.dataset.type = answer.type;
                button.dataset.answerIndex = index; // Store answer index for re-selection
                button.addEventListener('click', selectAnswer);
                answersContainer.appendChild(button);
            });

            // Highlight previously selected answer if exists
            if (userAnswers[currentQuestionIndex] !== undefined) {
                const selectedAnswerIndex = userAnswers[currentQuestionIndex].answerIndex;
                const buttons = answersContainer.querySelectorAll('.answer-btn');
                buttons[selectedAnswerIndex].classList.remove('btn-outline-primary');
                buttons[selectedAnswerIndex].classList.add('btn-primary');
            }

            updateNavigationButtons();
        } else {
            calculateMBTI();
            showScreen(resultScreen);
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const buttons = answersContainer.querySelectorAll('.answer-btn');

        // Reset previous selection visual
        buttons.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-primary');
        });

        // Apply new selection visual
        selectedButton.classList.remove('btn-outline-primary');
        selectedButton.classList.add('btn-primary');

        // Store the answer for scoring and navigation
        userAnswers[currentQuestionIndex] = {
            type: selectedButton.dataset.type,
            answerIndex: parseInt(selectedButton.dataset.answerIndex)
        };

        // Enable next button if an answer is selected
        nextBtn.disabled = false;
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = userAnswers[currentQuestionIndex] === undefined && currentQuestionIndex < questions.length; // Disable next if no answer selected for current question
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.textContent = '결과 보기';
        } else {
            nextBtn.textContent = '다음';
        }
    }

    function calculateMBTI() {
        // Reset scores for recalculation
        scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

        userAnswers.forEach(answer => {
            scores[answer.type]++;
        });

        let mbti = "";
        mbti += (scores.E >= scores.I) ? "E" : "I";
        mbti += (scores.S >= scores.N) ? "S" : "N";
        mbti += (scores.T >= scores.F) ? "T" : "F";
        mbti += (scores.J >= scores.P) ? "J" : "P";

        mbtiTypeDisplay.textContent = mbti;
        mbtiDescriptionDisplay.textContent = mbtiDescriptions[mbti] || "MBTI 유형 설명을 찾을 수 없습니다.";
    }

    // Event Listeners
    startBtn.addEventListener('click', () => {
        showScreen(questionScreen);
        currentQuestionIndex = 0;
        scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }; // Reset scores
        userAnswers = []; // Reset answers
        loadQuestion();
    });

    nextBtn.addEventListener('click', () => {
        if (userAnswers[currentQuestionIndex] === undefined && currentQuestionIndex < questions.length) {
            alert('답변을 선택해주세요!');
            return;
        }
        currentQuestionIndex++;
        loadQuestion();
    });

    prevBtn.addEventListener('click', () => {
        currentQuestionIndex--;
        loadQuestion();
    });

    restartBtn.addEventListener('click', () => {
        showScreen(startScreen);
    });

    // Initial load
    showScreen(startScreen);
});
