let currentQuestion = 0;

function init() {
    document.getElementById('total_questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function validateAnswer(selection) {
    let rightAnswer = questions[currentQuestion];
    console.log('selected Answer is:', selection);
    let selectionNumber = selection.slice(-1);
    console.log('selected question number is question is:', selectionNumber);
    console.log('current question is:', rightAnswer['right_answer']);
    
    let rightAnswerId = `answer_${rightAnswer['right_answer']}`;

    if (selectionNumber == rightAnswer['right_answer']) {
        console.log('Right Answer!!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Wrong answer, try again!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswerId).parentNode.classList.add('bg-success');
    };
}