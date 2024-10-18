const questions = [
     
    {
        question: "Las ramas del poder son: Legislativo, Judicial y Ejectivo",
        answer: true
    },
    {
        question: "Los requisitos para consolidar un partido politico era: Tener un capital inical para realizar campañas, tener una declaración escrita de lo que se quería hacer y señalar como sería el funcionamiento interno del partido",
        answer: false
    },
    {
        question: "Uno de los derechos ciudadanos planteados en la constitución de 1821 fue el derecho al trabajo seguro al cumplir los 18 años",
        answer: false
    },    
    {
        question: "El territorio ocupado por el Virreinato de Nueva Granada se convirtió en la República de Venezuela.",
        answer: false
        
    },
    {
        question: "Uno de los motivos por lo que ocurrió la disolución de la Gran Colombia, fu la falta de experiencia para gobernar los esclavos",
        answer: false
    },
    {
        question: "Tras la disolución de esta última en 1830, el antiguo virreinato asumió el mismo nombre de Colombia.",
        answer: true
    },
    {
        question: "Los primeros partidos políticos que se consolidaron para tener acuerdos con distintos intereses fueron: Conservador y Liberal",
        answer: true
    },   
    {
        question: "Las dificultades que se presentaron luego de la conquista en la gran colombia fue: Endeudamiento, Enfrentamientos, Gobernación y Ambición",
        answer: true
    },
    {
        question: "La Independencia de Colombia fue el proceso que llevó al final el período de dominio del Imperio español en el actual territorio del país.",
        answer: true
    },   
    {
        question: "En el momento de la disoclución de la Gran Colombia, se presentó la centralización del gobierno, la cual les restaba poder a las clases sociales que controlaban la economía y el poder en cada región",
        answer: true
    },
    {
        question: "El partido liberal quería la separación de la iglesia Católica del estado y la igualdad y libertad de todos los hombres",
        answer: true
    },   
    {
        question: "Francisco de Paula Santander fue el presidente hasta el año 1837",
        answer: true
    },
    {
        question: "Una república oligárquica es cuando en una república los que tienen derecho a elegir o ser elegidos son una parte pequeña y privilegiada de la población",
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