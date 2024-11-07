const questions = [
    {
        question: "Durante los gobiernos conservadores de 1886, los liberales tuvieron todas las garantías que la Constitución establecía",
        answer: false
    },
    {
        question: "La guerra de los mil días fue nombrada así por su duración de 1.000 días",
        answer: false
    },
    {
        question: "En 1880 Rafel Nuñez perdió la elección presidencial y las normas cambiaron",
        answer: false
        
    },
    {
        question: "La guerra de los mil días la inician los liberales contra el gobierno de Manuel Antonio Sanclemente",
        answer: true
        
    },
    {
        question: "La separación de Panamá se da porque Colombia quería aceptar el tratado *Herrán-Hay*",
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