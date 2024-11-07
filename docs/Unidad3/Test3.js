const questions = [
    {
        question: "José Hilario López impulsó la política del librecambio apoyando las exportaciones e importaciones",
        answer: true
    },
    {
        question: "En el Siglo XIX tiempo de la Nueva Granada, los indígenas y campesinos no pagaban impuestos o diezmos",
        answer: false
        
    },
    {
        question: "Las telas y otros productos exclusivos para las cosas venían de Inglaterra",
        answer: true
    },
    {
        question: "Se disminuyó la importación de vinos, alimentos, perfumes, trigo y harina, productos químicos y otros",
        answer: false
        
    },
    {
        question: "A finales del Siglo XIX muchas familias migraron a nuevas tierras para cultivar y explotar oro y plata",
        answer: true
    },
    {
        question: "Los indígenas tuvieron que buscar empleo en fincas de los blancos y recibían salario como todos los empleados",
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