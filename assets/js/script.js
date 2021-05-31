var scoresLink = document.querySelector("#scores");
var timerText = document.querySelector(".timer-text");
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var intro = document.querySelector("#intro");
var questions = document.querySelector("#questions");
var done = document.querySelector("#done");
var highScores = document.querySelector("#highScores");
var highScoreList = document.querySelector("#highScoreList");
var submit = document.querySelector("#submit");
var clearButton = document.querySelector("#clear");
var backButton = document.querySelector("#back");
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
var message = document.querySelector("#message");
var message2 = document.querySelector("#message2");
var finalScore = document.querySelector("#finalScore");
var message3 = document.querySelector("#message3");
var initials = document.querySelector("#initials");
var timerInterval;
var highScoresArray = JSON.parse(localStorage.getItem("highScores"))||[];

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

//Timer for the game
function setTime() {
  // Sets interval in variable
    timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      finalScore.textContent = 0;
      // Calls function to create and append the score and user input
      questions1.style.display = "none";
      done.style.display = "block";
      finalScore.style.display = "block";
    }
  }, 1000);
}

//This will cycle through the question array
function updateQues() {
  if(questionIndex < questionArray.length) {
    questions.innerHTML = questionArray[questionIndex].question
    choiceA.innerHTML = questionArray[questionIndex].a
    choiceB.innerHTML = questionArray[questionIndex].b
    choiceC.innerHTML = questionArray[questionIndex].c
    choiceD.innerHTML = questionArray[questionIndex].d
  } else {
    clearInterval(timerInterval);
    finalScore.textContect = secondsLeft;
    questions1.style.display = "none";
    done.style.display = "block";
    console.log(highScoresArray); //(highScoresArray)
    console.log(highScoresArray[0].score);
  }

}

//Capturing the intro container and setting it to display none while intro to first question and answers.
startButton.addEventListener("click", function() {
  intro.style.display = "none";
  questions1.style.display = "block";  
  updateQues();
  setTime();
  // updateQues2();
});

//Capturing the buton clicks for the answers  
choiceA.addEventListener("click", function() {
  console.log(choiceA.innerHTML);
  if (choiceA.innerHTML === questionArray[questionIndex].correct) {
    alert("Correct!");
    questionIndex++;
    updateQues();
  } else {
    alert("Wrong!");
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionIndex++;  
    updateQues();   
  }
});

choiceB.addEventListener("click", function() {
  console.log(choiceB.innerHTML);
  if (choiceB.innerHTML === questionArray[questionIndex].correct) {
    alert("Correct!");
    questionIndex++;
    updateQues();
  } else {
    alert("Wrong!");
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionIndex++;    
    updateQues(); 
  }
});

choiceC.addEventListener("click", function() {
  console.log(choiceC.innerHTML);
  if (choiceC.innerHTML === questionArray[questionIndex].correct) {
    alert("Correct!");
    questionIndex++;
    updateQues();
  } else {
    alert("Wrong!");
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionIndex++;    
     updateQues();
  }
});

choiceD.addEventListener("click", function() {
  console.log(choiceD.innerHTML);
  if (choiceD.innerHTML === questionArray[questionIndex].correct) {
    alert("Correct!");
    questionIndex++;
    updateQues();
  } else {
    alert("Wrong!");
    secondsLeft -= 10; //subtract 10 seconds from time
    //go to next question    
    questionIndex++;   
    updateQues();  
  }
});

// Event Listner to display the score
submit.addEventListener("click", function() {
  var initialsValue = initials.value;
  var score = secondsLeft;
  highScoresArray.push({"initials":initialsValue, "score":score});
  localStorage.setItem("highScores", JSON.stringify(highScoresArray));
  done.style.display = "none";
  highScoreList.innerHTML = " ";
  for (var i = 0; i < highScoresArray.length; i++ ) {
    var li = document.createElement("li");
    li.innerText = highScoresArray[i].initials + ": " + highScoresArray[i].score;
    highScoreList.appendChild(li);
  }
  highScores.style.display = "block";
});

// High scores button
var allHighScore = document.querySelectorAll("#highScoreList");
for (var index = 0; index <allHighScore.length; index++) {
  allHighScore[index].addEventListener("click", function() {
  this.idList.toggle("active");
  });
};

//View high scores link
scoresLink.addEventListener("click", function() {
  intro.style.display = "none";
  highScores.style.display = "block";
  questions1.style.display = "none";
  done.style.display = "none";
  secondsLeft = 0;
  timerEl = 0;
  timerCount = 0;
  clearInterval(timerInterval);
  var retrieveScoresArray = localStorage.getItem("highScores");
  var scoresData = JSON.parse(retrieveScoresArray);
  console.log(highScoresArray);
  console.log(scoresData.length);
  highScores.append(scoresData);
});


// Clear high scores
clearButton.addEventListener("click", function() {
  localStorage.clear();
});

// Back button to go to the home page
backButton.addEventListener("click", function() {
  window.location.reload();
});