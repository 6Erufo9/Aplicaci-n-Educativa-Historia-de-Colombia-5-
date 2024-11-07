const questions = [
    {
        question: "A finales del siglo XIX los comerciantes ricos y grandes exportadores de café no quisieron invertir en fábricas",
        answer: false
    },
    {
        question: "El territorio estaba dividido y no había unidad política, social ni económica, generando guerras, desempleo y miseria",
        answer: true
    },
    {
        question: "En 1920 se organizarón dos nuevas clases sociales: Obrera y Campesina",
        answer: true
    },
    {
        question: "La clase social obrera recibía un salario justo y tenían beneficios laborales con leyes que los protegían",
        answer: false
        
    },
    {
        question: "La clase social campesina no tenía permitido cultivar sus propios terrenos para evitar que prefirieran sus cosechas; esto generó protestas y huelgas como la de las Bananeras en 1928",
        answer: true
    },
    {
        question: "Una de las reformas fue fortalecer el Estado, darle más recursos y profesionalizar el ejército",
        answer: true
    },
    {
        question: "La separación de Panamá se da porque Colombia quería aceptar el tratado *Herrán-Hay*",
        answer: false
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