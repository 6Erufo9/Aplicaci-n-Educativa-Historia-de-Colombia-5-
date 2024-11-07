const questions = [
    {
        question: "La Segunda Guerra Mundial (1939-1945), que ocasionó dificultades económicas al país, pues Europa dejó de comprar café y suspendió las ventas de maquinaria",
        answer: true
    },
    {
        question: "Debido a los problemas que trajo la Segunda Guerra Mundial a los trabajadores colombianos, estos se inclinaron a votar en las elecciones de 1942 nuevamente por Santos",
        answer: false
    },
    {
        question: "Luego de López Pumarejo gobierna Eduardo Santos",
        answer: true
        
    },
    {
        question: "Desde la década del 20 en Colombia se sembró la modernización: Se construyen algunas fábricas, vías férreas y carreteras.",
        answer: true
        
    },
    {
        question: "El segundo gobierno contó desde su comienzo con una fuerte oposición del conservatismo. López Pumarejo no se opuso a la Ley que devolvía a los terratenientes la garantía de su propiedad sobre los predios de sus arrendatarios que explotan fincas",
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