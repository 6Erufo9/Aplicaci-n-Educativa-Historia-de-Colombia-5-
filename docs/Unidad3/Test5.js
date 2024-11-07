const questions = [
    {
        question: "Los legisladores consideraban que al escribir normas se aceptaba la igualdad de los hombres ante la ley",
        answer: true
    },
    {
        question: "La constitución es una mezcla de elementos centralistas y federalistas",
        answer: true
    },
    {
        question: "José Hilario López impulsó la política del librecambio apoyando las exportaciones e importaciones",
        answer: true
    },
    {
        question: "La constitución aprobada por el Presidente Mariano Ospina Rodriguez fué la de 1858",
        answer: true
        
    },
    {
        question: "Los Estados Unidos de Colombia se crearon con la Constitución de 1883",
        answer: true
    },    
    {
        question: "Una guerra civil es un encuentro en grupos sociales diversos que pueden resolver sus diferencias sin violencia",
        answer: false
        
    },
    {
        question: "Nuestro país recibió el nombre de Nueva Granada treinta años después de la Independecia",
        answer: true
    },
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