const questions = [
    {
        question: "Las personas nacidas dentro del territorio que forma a Colombia se llaman Latinos",
        answer: false
    },
    {
        question: "En Colombia existe diversidad étnica, cultural, biológica y social",
        answer: true
    },
    {
        question: "El gentilicio es la forma como se denomina a un grupo de personas que viven en determinado lugar, pueblo o zona de nuestro país",
        answer: true
        
    },
    {
        question: "Se denomina territorio nacional aquella superficie conformada por los espacios continental, aéreo y marítimo",
        answer: true
    },
    {
        question: "El gentilicio de los habitantes de Colombia es: Nativos",
        answer: false
    }
];

function createQuiz() {
    const container = document.getElementById('questions-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        const optionsDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${q.question}</p>`
        optionsDiv.className = 'optionsContainer'
        optionsDiv.innerHTML = `            
            <div class="options">
                <input type="radio" id="true${index}" name="q${index}" value="true">
                <label for="true${index}">Verdadero</label><br>
                <input type="radio" id="false${index}" name="q${index}" value="false">
                <label for="false${index}">Falso</label>
            </div>
        `;
        container.appendChild(questionDiv);
        container.appendChild(optionsDiv);
    });
}

function checkAllAnswers() {
    let score = 0;
    let allAnswered = true;
    
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        
        if (!selected) {
            allAnswered = false;
            return;
        }

        if ((selected.value === 'true') === q.answer) {
            score++;
        }
    });

    if (!allAnswered) {
        alert('Por favor responde todas las preguntas');
        return;
    }

    const scoreDiv = document.getElementById('resultado');
    scoreDiv.innerHTML = `Puntuación Final: ${score} de ${questions.length} correctas`;

}


createQuiz();