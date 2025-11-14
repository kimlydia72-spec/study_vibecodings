document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const questionTitle = document.getElementById('question-title');
    const answersContainer = document.getElementById('answers-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const resultText = document.getElementById('result-text');
    const tetoProgress = document.getElementById('teto-progress');
    const egenProgress = document.getElementById('egen-progress');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let tetoScore = 0;
    let egenScore = 0;
    let userAnswers = []; // To store selected answers for navigation

    const questions = [
        {
            question: "주말에 당신은 주로 무엇을 하나요?",
            answers: [
                { text: "새로운 곳을 탐험하거나 활동적인 취미를 즐긴다.", teto_score: 2, egen_score: 0 },
                { text: "집에서 편안하게 휴식을 취하거나 좋아하는 것을 한다.", teto_score: 0, egen_score: 2 },
                { text: "친구들과 만나거나 사교 활동을 한다.", teto_score: 1, egen_score: 1 },
            ]
        },
        {
            question: "새로운 사람을 만났을 때 당신의 반응은?",
            answers: [
                { text: "먼저 다가가 말을 걸고 친해지려고 노력한다.", teto_score: 2, egen_score: 0 },
                { text: "상대방이 다가오기를 기다리며 조용히 관찰한다.", teto_score: 0, egen_score: 2 },
                { text: "필요에 따라 적절히 대화에 참여한다.", teto_score: 1, egen_score: 1 },
            ]
        },
        {
            question: "문제를 해결할 때 당신의 접근 방식은?",
            answers: [
                { text: "논리적이고 분석적으로 접근하여 해결책을 찾는다.", teto_score: 2, egen_score: 0 },
                { text: "직관과 감정에 따라 유연하게 대처한다.", teto_score: 0, egen_score: 2 },
                { text: "다양한 의견을 듣고 종합적으로 판단한다.", teto_score: 1, egen_score: 1 },
            ]
        },
        {
            question: "여행 계획을 세울 때 당신의 스타일은?",
            answers: [
                { text: "세부적인 계획을 미리 세우고 그대로 따른다.", teto_score: 2, egen_score: 0 },
                { text: "즉흥적으로 떠나거나 현지에서 계획을 세운다.", teto_score: 0, egen_score: 2 },
                { text: "큰 틀만 정하고 세부 사항은 유동적으로 조절한다.", teto_score: 1, egen_score: 1 },
            ]
        },
        {
            question: "스트레스를 해소하는 당신만의 방법은?",
            answers: [
                { text: "운동이나 활동적인 취미로 에너지를 발산한다.", teto_score: 2, egen_score: 0 },
                { text: "혼자만의 시간을 가지며 조용히 생각하거나 휴식한다.", teto_score: 0, egen_score: 2 },
                { text: "친구들과 수다를 떨거나 맛있는 음식을 먹는다.", teto_score: 1, egen_score: 1 },
            ]
        }
    ];

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
                button.dataset.teto = answer.teto_score;
                button.dataset.egen = answer.egen_score;
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
            calculateResults();
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
            teto: parseInt(selectedButton.dataset.teto),
            egen: parseInt(selectedButton.dataset.egen),
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

    function calculateResults() {
        tetoScore = 0;
        egenScore = 0;
        userAnswers.forEach(answer => {
            tetoScore += answer.teto;
            egenScore += answer.egen;
        });

        const totalScore = tetoScore + egenScore;
        let tetoPercentage = 0;
        let egenPercentage = 0;

        if (totalScore > 0) {
            tetoPercentage = (tetoScore / totalScore) * 100;
            egenPercentage = (egenScore / totalScore) * 100;
        }

        tetoProgress.style.width = `${tetoPercentage}%`;
        tetoProgress.setAttribute('aria-valuenow', tetoPercentage);
        tetoProgress.textContent = `${tetoPercentage.toFixed(0)}%`;

        egenProgress.style.width = `${egenPercentage}%`;
        egenProgress.setAttribute('aria-valuenow', egenPercentage);
        egenProgress.textContent = `${egenPercentage.toFixed(0)}%`;

        let resultMessage = "";
        if (tetoPercentage > egenPercentage) {
            resultMessage = `당신은 <span class="text-primary fw-bold">테토 성향</span>에 더 가깝습니다! 당신은 논리적이고 활동적인 탐험가입니다.`;
        } else if (egenPercentage > tetoPercentage) {
            resultMessage = `당신은 <span class="text-danger fw-bold">에겐 성향</span>에 더 가깝습니다! 당신은 직관적이고 편안함을 추구하는 휴식가입니다.`;
        } else {
            resultMessage = `당신은 <span class="text-success fw-bold">테토와 에겐 성향의 균형</span>을 이루고 있습니다! 상황에 따라 유연하게 대처하는 능력이 뛰어납니다.`;
        }
        resultText.innerHTML = resultMessage;
    }

    // Event Listeners
    startBtn.addEventListener('click', () => {
        showScreen(questionScreen);
        currentQuestionIndex = 0;
        tetoScore = 0;
        egenScore = 0;
        userAnswers = [];
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
