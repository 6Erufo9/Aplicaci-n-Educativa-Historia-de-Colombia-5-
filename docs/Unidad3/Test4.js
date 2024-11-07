const questions = [
    {
        question: "El sistema de gobierno basado en la existencia de un conjunto de estados o departamentos que gozan de autonomía se llama federalismo",
        answer: true
    },
    {
        question: "El sistema de gobierno basado en el poder centralizado en una capital se llama centralismo",
        answer: true
    },
    {
        question: "José Hilario López impulsó la política del librecambio apoyando las exportaciones e importaciones",
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
    {
        question: "En la primera mitad del Siglo XIX la Iglesia Católica no tenía poder económico ni espiritual",
        answer: false
    },
    {
        question: "En 1854 el militar José Maria Melo asumió la presidencia luego de un golpe de estado apoyado por artesanos y ejército de la época",
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