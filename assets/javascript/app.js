var triviaQuestions = [
    {
        question: "What year were the Lakers founded?",
        answerList: ["1950", "1947", "1935", "1970"],
        answer: 1
    },
    
    {  
        question: "What year did the Lakers win their first Championship?",
        answerList: ["1938", "1999", "1949", "1962"],
        answer: 2
    },

    {
        question: "What year did the Lakers move from Minneapolis to Los Angeles?",
        answerList: ["1940", "1950", "1960", "1970"],
        answer: 2
    },

    {
        question: "who was the last Lakers player to receive the MVP award?",
        answerList: ["Kobe Bryant", "Lamar Odom", "Shannon Brown", "Pau Gasol"],
        answer: 0
    },

    {
        question: "What was the longest win streak in Lakers history?",
        answerList: ["77", "21", "42", "33"],
        answer: 3
    }
    
    ];

var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
    correct: "Yes, Good Job!",
    incorrect: "No, Wrong Answer.",
    endTime: "Sorry, No Time Left!",
    finished: "Lets See How Well You Know Your Lakers."
}

$('#startBtn').on('click', function(){
    $(this).hide();
    newGame();
});

$('#startOverBtn').on('click', function(){
    $(this).hide();
    newGame();
});

function newGame(){
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion(){
    $('#message').empty();
    $('#correctedAnswer').empty();
    answered = true;

    $('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
    $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
    for(var i = 0; i < 4; i++){
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({'data-index': i});
        choices.addClass('thisChoice');
        $('.answerList').append(choices);
    }

    countdown();
    $('.thisChoice').on('click', function(){
        userSelect = $(this).data('index');
        clearInterval(time);
        answerPage();
    });
}

function countdown(){
    seconds: 15;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    time = setInterval(showCountdown, 1000);
}

function showCountdown(){
    seconds--;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if(seconds < 1){
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage(){
    $('#currentQuestion').empty();
    $('.thisChoice').empty();
    $('.question').empty();
    
    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
  
    if((userSelect == rightAnswerIndex) && (answered == true)){
        correctAnswer++;
        $('#message').html(messages.correct);
    }
    else if((userSelect != rightAnswerIndex) && (answered == true)){
        incorrectAnswer++;
        $('#message').html(messages.incorrect);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
    }
    else{
        unanswered++;
        $('#message').html(messages.endTime);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        answered = true;
    }

    if(currentQuestion == (triviaQuestions.length-1)){
        setTimeout(scoreboard, 5000)
    }
    else{
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

function scoreboard(){
    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();

    $('#finalMessage').html(messages.finished);
    $('#correctAnswers').html("Correct Answers: " + correctAnswer);
    $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    $('#startOverBtn').addClass('reset');
    $('#startOverBtn').show();
    $('#startOverBtn').html('Try Again?');
}