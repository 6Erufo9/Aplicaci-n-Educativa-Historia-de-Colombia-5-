const questions = [
    {
        question: "La Independencia de Colombia fue el proceso que llevó al final el período de dominio del Imperio español en el actual territorio del país.",
        answer: true
    },
    {
        question: "Uno de los derechos ciudadanos planteados en la constitución de 1821 fue el derecho al trabajo seguro al cumplir los 18 años",
        answer: false
    },
    {
        question: "Una de las medidas económicas presentadas en la constitución de 1821 fue la prohibición del pago de tributo por los indígenas",
        answer: true
        
    },
    {
        question: "Con los cambios en el estado que se consolidaron, se aprobo que el Presidente de la República pueda ser reelegido en varias ocasiones",
        answer: true
    },
    {
        question: "En 1816 las tropas de Juan VII perdieron el control del país",
        answer: false
    },
    {
        question: "Las dificultades que se presentaron luego de la conquista en la gran colombia fue: Endeudamiento, Enfrentamientos, Gobernación y Ambición",
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