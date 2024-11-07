const questions = [
    {
        question: "El Bogotazo se conoce como el acontecimiento donde el pueblo de la capital se lanzó contra todo lo que consideraba contrario a los conservadores",
        answer: false
    },
    {
        question: "Una reforma de la Consitución en la época de 1934 fue quitar a la iglesia católica el privilegio que tenía de ser la religión oficial de la nación y la encargada de supervisar la educación",
        answer: true
    },
    {
        question: "Inmediatamente se conoció la noticia de la muerte de Gaitán, el país entero se desbordó en violencia; miles de manifestantes se lanzaron a la calle exigiendo justicia y la renuncia del presidente Ospina",
        answer: true
    },
    {
        question: "El segundo gobierno contó desde su comienzo con una fuerte oposición del conservatismo. López Pumarejo no se opuso a la Ley que devolvía a los terratenientes la garantía de su propiedad sobre los predios de sus arrendatarios que explotan fincas",
        answer: true
    },
    {
        question: "Ospina Pérez gobernó mientras ocurren huelgas por parte de los liberales tratando de derribar al gobierno, al cual acusan de incapaz de frenar estos brotes de violencia",
        answer: true
        
    },
    {
        question: "Algunos conservadores respondieron armándose y yéndose a las montañas donde formaron las guerrillas para luchar contra los liberales",
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