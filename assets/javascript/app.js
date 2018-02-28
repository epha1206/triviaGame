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