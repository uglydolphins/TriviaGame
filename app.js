var q1 = "1 + 1 = 2";
var q2 = "2 + 2 = 4";
var q3 = "3 + 3 = 9";

var correctAnswers = 0;
var wrongAnswers = 0;



// Set our counter to 10 seconds
var number = 10;

// var that will hold our interval id when we execute the run function
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
    
}

// The decrement function 
function decrement() {
    
    // decrease number by one
    number--;

    // Show the number in the timer box
    $(".timer-box").text(number);

    // Show the question in the question boxes
    $(".question-box1").text(q1);
    $(".question-box2").text(q2);
    $(".question-box3").text(q3);
    
    // if function for when number hits 0
    if (number === 0) {

        stop();
        alert("Correct Answers = " + correctAnswers);
        alert("Wrong Answers = " + wrongAnswers);
        alert("Start Over!");
        
    }
}

function stop() {
    clearInterval(intervalId);
    number = 10;
    location.reload();
}

$(".start-box").on("click", run);

$(".true-box.1").on("click", function() {
    correctAnswers++
    console.log(correctAnswers);
})

$(".false-box.1").on("click", function() {
    wrongAnswers++
    console.log(wrongAnswers);
})

$(".true-box.2").on("click", function() {
    correctAnswers++
    console.log(correctAnswers);
})

$(".false-box.2").on("click", function() {
    wrongAnswers++
    console.log(wrongAnswers);
})

$(".true-box.3").on("click", function() {
    wrongAnswers++
    console.log(wrongAnswers);
})

$(".false-box.3").on("click", function() {
    correctAnswers++
    console.log(correctAnswers);
})



