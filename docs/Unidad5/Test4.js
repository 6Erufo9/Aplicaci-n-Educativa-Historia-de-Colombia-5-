const questions = [
    {
        question: "Para 1953, el liberalismo y el sector conservador de Ospina se pusieron de acuerdo para cambiar a Urdaneta por un militar: Gustavo Rojas Pinilla.",
        answer: true
    },
    {
        question: "En 1930, por primera vez en el siglo XX, un liberal ganó las elecciones presidenciales",
        answer: true
    },
    {
        question: "En 1950 es elegido el conservador Laureano Gómez, elecciones en las que el liberalismo participó",
        answer: false
    },
    {
        question: "El presidente Rojas expidió una Ley de Amnistía por medio de la cual buscaba que las fuerzas guerrilleras, en su mayoría liberales, entregaran las armas a cambio de garantizarles protección de sus vidas, el perdón de sus delitos, así como un mínimo de condiciones para su regreso a la vida ciudadana",
        answer: true
        
    },
    {
        question: "El Bogotazo se conoce como el acontecimiento donde el pueblo de la capital se lanzó contra todo lo que consideraba contrario a los conservadores",
        answer: false
    },
    {
        question: "Una reforma de la Consitución en la época de 1934 fue quitar a la iglesia católica el privilegio que tenía de ser la religión oficial de la nación y la encargada de supervisar la educación",
        answer: true
    },
    {
        question: "El gobierno empezó a perder prestigio, a causa de la violencia que se había reiniciado poco después de la ley de amnistía; la censura impuesta en varios diarios y la matanza de estudiantes por el ejército el 8 y 9 de Junio de 1954",
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