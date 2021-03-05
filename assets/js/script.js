var highScores = document.querySelector("#scores");
var timerText = document.querySelector(".timer-text");
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var intro = document.querySelector("#intro");
var questions = document.querySelector("#questions");
var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var choiceD = document.querySelector("#d");

var correctAnswer = 0;
var wrongAnswer = 0;
var timer;
var timerCount;
var questionIndex = 0;
var secondsLeft = 75;
var minusTime = -10;


//Setting up an array of objects
var questionArray = [
  {
     question: "What lets you group a series of statements together to perform a specific task?",
     a: "array",
     b: "function",
     c: "variable",
     d: "value",
     correct: "function",     
  },
  {
    question: "____ is considered the presentation layer and enhances the HTML with rules.",
    a: "CSS",
    b: "HTML",
    c: "Object",
    d: "JavaScript",
    correct: "CSS",
 },
 {
     question: "If a variable is part of an object, it is called ______.",
     a: "boolean",
     b: "string",
     c: "method",
     d: "property",
     correct: "property"
  },
 {
     question: "Hyper Text Markup Language stands for what acronym?",
     a: "PSP",
     b: "HBO",
     c: "HTML",
     d: "HOT",
     correct: "HTML"
  },
  {
    question: "Which of the following can you use to search for answers on the internet?",
    a: "GoDaddy",
    b: "Google",
    c: "Your Mom",
    d: "Your Dad",
    correct: "Google"
 }
];

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append the score and user input
      highScores();
    }

  }, 1000);
}

function updateQues() {
  var questionEl = document.getElementById("question1");
  console.log(questionArray[questionIndex].question);
  questionEl.textContent = questionArray[questionIndex].question;
    choiceA = document.getElementById("a");
  choiceA.textContent = questionArray[questionIndex].a;
    choiceB = document.getElementById("b");
  choiceB.textContent = questionArray[questionIndex].b;
    choiceC = document.getElementById("c");
  choiceC.textContent = questionArray[questionIndex].c;
    choiceD = document.getElementById("d");
  choiceD.textContent = questionArray[questionIndex].d;
}

//Capturing the intro container and setting it to display none while intro to first question and answers.
startButton.addEventListener("click", function() {
  intro.style.display = "none";
  questions1.style.display = "block";  

  updateQues();
  setTime();
  // updateQues2();

});

choiceA.addEventListener("click", function() {
  console.log(choiceA.innerHTML);
  if (choiceA.innerHTML === questionArray[questionIndex].correct) {
    questionArray++;
    updateQues();
  } else {
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionArray++;  
    updateQues();   
  }
});

choiceB.addEventListener("click", function() {
  console.log(choiceB.innerHTML);
  if (choiceB.innerHTML === questionArray[questionIndex].correct) {
    questionArray++;
    updateQues();
  } else {
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionArray++;    
    updateQues(); 
  }
})

choiceC.addEventListener("click", function() {
  console.log(choiceC.innerHTML);
  if (choiceC.innerHTML === questionArray[questionIndex].correct) {
    questionArray++;
    updateQues();
  } else {
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionArray++;    
     updateQues();
  }
})

choiceD.addEventListener("click", function() {
  console.log(choiceD.innerHTML);
  if (choiceD.innerHTML === questionArray[questionIndex].correct) {
    questionArray++;
    updateQues();
  } else {
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionArray++;   
    updateQues();  
  }
})



// function highScores() {

// }