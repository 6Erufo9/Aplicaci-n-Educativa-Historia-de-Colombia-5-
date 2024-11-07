const questions = [
    {
        question: "En 1930, por primera vez en el siglo XX, un liberal ganó las elecciones presidenciales",
        answer: true
    },
    {
        question: "En los inicios de presidencia de Olaya Herrera, el país estaba en una grandiosa situación económica creada por los sucesos de 1929, la cual genero empleo y con ello el gobierno tenía para pagar una deuda externa,",
        answer: false
    },
    {
        question: "Desde la década del 20 en Colombia se sembró la modernización: Se construyen algunas fábricas, vías férreas y carreteras.",
        answer: true
        
    },
    {
        question: "Una reforma de la Consitución en la época de 1934 fue quitar a la iglesia católica el privilegio que tenía de ser la religión oficial de la nación y la encargada de supervisar la educación",
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