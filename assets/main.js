var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 75;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var addscore = document.getElementById("addscore");
var submitresult = document.getElementById("submitresult");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        title: "Commonly used data types Do Not include:",
        choices: ["Strings","Booleance","Alerts","Numbers"],
        answer : "Alerts"    
    },
    {
        title: "The condition in an if/else statement is enclosed within:",
        choices: ["Quotes","Curly brackets","Parentheses", "Square brackets"],
        answer : "Parentheses"    
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["Numbers and strings","Others Arrays","Booleances", "All of the above"],
        answer : "All of the above"    
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables ",
        choices: ["Commas","Curly brackets","Quotes","Parentheses"],
        answer : "Quotes"    
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","Terminal/bash","Alerts", "Console.log"],
        answer : "Console.log"    
    },
    {
        title: "When a use views a page containing a JavaScript program, which machine actually executes the script?",
        choices: ["The User's machine running a Web browser","The Web server","A remote server","None of the above"],
        answer : "The User's machine running a Web browser"
    },
    {
        title: "____ JavaScript is also called client-side JavaScript.",
        choices: ["Microsoft","Navigator","LiveWire","Native"],
        answer : "Navigator"
    },
    {
        title: "What are variables used for in JavaScript?",
        choices: ["Storing numbers, dates, or other values","Varying randomly","HS Algebra","None of the above"],
        answer  : "Storing numbers, dates, or other values"
    },
    { 
        title: "Which of the following are capabilities of functions in JavaScript.",
        choices: ["Return a value","Acceptance parameters and return a value","Accept parameters","None of the above"],
        answer  : "Accept parameters"
    },
    { 
        title: "Which types of image maps can be used with JavaScript?",
        choices: ["Server-side image maps","Client-side image maps","Server-side image maps and Client-side image maps","None of the above"],
        answer  : "Client-side image maps"
    },
]
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }
