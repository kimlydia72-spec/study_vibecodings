document.addEventListener('DOMContentLoaded', () => {
    const zodiacButtonsContainer = document.getElementById('zodiac-buttons-container');
    const fortuneDisplay = document.getElementById('fortune-display');

    const fortunes = {
        "쥐띠": "오늘은 새로운 시작에 좋은 날입니다. 작은 기회가 큰 성공으로 이어질 수 있으니 주변을 잘 살펴보세요.",
        "소띠": "꾸준함이 빛을 발하는 하루입니다. 묵묵히 자신의 길을 가면 좋은 결과를 얻을 것입니다.",
        "호랑이띠": "강력한 에너지가 넘치는 날입니다. 자신감을 가지고 도전하면 원하는 바를 이룰 수 있습니다.",
        "토끼띠": "평화롭고 안정적인 하루가 예상됩니다. 주변 사람들과의 관계에서 행복을 찾을 수 있습니다.",
        "용띠": "창의적인 아이디어가 샘솟는 날입니다. 당신의 독특한 생각을 현실로 만들어보세요.",
        "뱀띠": "지혜와 통찰력이 필요한 하루입니다. 중요한 결정을 내리기 전에 신중하게 생각하세요.",
        "말띠": "활동적이고 역동적인 하루입니다. 새로운 만남이나 여행에서 즐거움을 찾을 수 있습니다.",
        "양띠": "온화하고 배려심이 돋보이는 날입니다. 주변 사람들에게 긍정적인 영향을 줄 수 있습니다.",
        "원숭이띠": "재치와 순발력이 필요한 하루입니다. 예상치 못한 상황에서도 유연하게 대처할 수 있습니다.",
        "닭띠": "정확하고 명확한 판단이 중요한 날입니다. 당신의 능력을 발휘하여 좋은 성과를 내세요.",
        "개띠": "충성심과 의리가 빛나는 하루입니다. 소중한 사람들과의 관계를 더욱 돈독히 할 수 있습니다.",
        "돼지띠": "풍요롭고 여유로운 하루가 예상됩니다. 작은 행복들을 만끽하며 즐거운 시간을 보내세요."
    };

    zodiacButtonsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('zodiac-btn')) {
            const zodiac = target.dataset.zodiac;
            if (fortunes[zodiac]) {
                fortuneDisplay.textContent = fortunes[zodiac];

                // Optional: Highlight selected button
                const allButtons = zodiacButtonsContainer.querySelectorAll('.zodiac-btn');
                allButtons.forEach(btn => {
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline-primary');
                });
                target.classList.remove('btn-outline-primary');
                target.classList.add('btn-primary');
            } else {
                fortuneDisplay.textContent = "해당 띠의 운세를 찾을 수 없습니다.";
            }
        }
    });
});
