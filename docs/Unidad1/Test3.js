const questions = [
    {
        question: "El lugar donde nacemos, crecemos y se forma un vínculo sociocultural se denomina Patria",
        answer: true
    },
    {
        question: "Las fronteras se establecen a través de las llamadas negociaciones diplomáticas que llevan a celebración de tratados en países",
        answer: true
        
    },
    {
        question: "La patria chica es el lugar donde solo se llega a trabajar y estudiar",
        answer: false
    },
    {
        question: "El lugar donde se nace en un núcleo familiar determinado y se aprendieron las primeras palabras y conocimientos se llama Patria Chica",
        answer: true
        
    },
    {
        question: "En Colombia existe diversidad étnica, cultural, biológica y social",
        answer: true
    },
    {
        question: "La patria Grande está formada por un territorio común con su propia cultura y habitantes",
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