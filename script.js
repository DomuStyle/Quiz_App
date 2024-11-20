let currentQuestion = 0;

function init() {
    document.getElementById('total_questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('question_text').innerHTML = question['question'];
}