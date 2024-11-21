let currentQuestion = 0;

let rightAnswers = 0;

function init() {
    document.getElementById('total_questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        //show end screen
        document.getElementById('end_screen').style = '';
        document.getElementById('question_body').style = 'display: none;';
        
        document.getElementById('total_questions_end').innerHTML = questions.length;
        document.getElementById('total_right_answers').innerHTML = rightAnswers;
        document.getElementById('header_img').src = './assets/img/trophy_1280.png';
    } else  {
        let question = questions[currentQuestion];
    
        document.getElementById('question_count').innerHTML= currentQuestion + 1;
        document.getElementById('question_text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

    }
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
        rightAnswers++ ;
    } else {
        console.log('Wrong answer, try again!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswerId).parentNode.classList.add('bg-success');
    };

    document.getElementById('next_question_btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++ ;
    document.getElementById('next_question_btn').disabled = true;
    resetAnswerButtons();
    showQuestion();    
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}