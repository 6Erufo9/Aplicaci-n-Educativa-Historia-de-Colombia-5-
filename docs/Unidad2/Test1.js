const questions = [
    {
        question: "La Independencia de Colombia fue el proceso que llevó al final el período de dominio del Imperio español en el actual territorio del país.",
        answer: true
    },
    {
        question: "En 1816 las tropas de Juan VII ganaron de nuevo el control del país, con lo cual instala el llamado régimen del terror liderado por Pablo Morillo5​.",
        answer: true
    },
    {
        question: "El territorio ocupado por el Virreinato de Nueva Granada se convirtió en la República de Venezuela.",
        answer: false
        
    },
    {
        question: "Tras la disolución de esta última en 1830, el antiguo virreinato asumió el mismo nombre de Colombia.",
        answer: true
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