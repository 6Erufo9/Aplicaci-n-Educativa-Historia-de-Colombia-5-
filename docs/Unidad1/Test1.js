const questions = [
    {
        question: "Los componentes para ser un Estado son: Territorio, Poder político organizado juridícamente y econcomía estable",
        answer: false
    },
    {
        question: "Se denomina territorio nacional aquella superficie conforamda por los espacios contiental, aéreo y marítimo",
        answer: true
    },
    {
        question: "Las fronteras se establecen a través de las llamadas negociaciones diplomáticas que llevan a celebración de tratados en países",
        answer: true
        
    },
    {
        question: "Colombia limita con Perú, Venezuela, Ecuador, Brasil, Panamá, el Mar Caribe y el Océano Pacífico",
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