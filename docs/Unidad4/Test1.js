const questions = [
    {
        question: "El territorio estaba dividido y no había unidad política, social ni económica, generando guerras, desempleo y miseria",
        answer: true
    },
    {
        question: "Rafel Nuñez encabezó el movimiento llamado La Regeneración y propuso crear un estado único con leyes aceptadas por todos",
        answer: true
    },
    {
        question: "En 1880 Rafel Nuñez perdió la elección presidencial y las normas cambiaron",
        answer: false
        
    },
    {
        question: "La Constitución de 1886 concedió mucho poder al presidente y su periodo se extendía a 6 años",
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