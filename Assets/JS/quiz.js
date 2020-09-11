 
//  select elements
 var Start = document.getElementById("start");
 var quiz= document.getElementById("quiz");
 var question = document.getElementById("question");
 var choices =document.getElementById("choices");
 var choiceA = document.getElementById("A"); 
 var choiceB = document.getElementById("B"); 
 var choiceC = document.getElementById("C"); 
 var counter = document.getElementById("counter"); 
 var timeGauge = document.getElementById("timeGauge"); 
 var progress = document.getElementById("progress"); 
 var scoreDiv = document.getElementById("score"); 
 

 
// create questions



let questions = [

    {

        question : "1.Inside which HTML element do we put the JavaScript?",

        choiceA : "<script>",

        choiceB : "<js>",

        choiceC : "<javascript>",

        correct : "A"

    },
    {

        question : "2.What is the correct JavaScript syntax to change the content of the HTML element below? '<p id='demo'> This is a demonstration.</p>'",


        choiceA : "document.getElement(p).innerHTML = 'Hello world!'",

        choiceB : "#demo.innerHTML = 'HELO WORLD!'",

        choiceC : "documet.getElementById('demo').innerHTML = 'Hello World!'",

        correct : "C"

    },
    {

        question : "3.Where is the correct place to insert a JavaScript?",


        choiceA : "the <body> section",

        choiceB : "the <head> section",

        choiceC : "both",

        correct : "C"

    },
    {

        question : "4.what is the correct syntax for referring to an external script called 'xxx.js'?",
        

        choiceA : "<script name ='xxx.js'>",

        choiceB : "<script href ='xxx.js'>",

        choiceC : "<script src ='xxx.js'>",

        correct : "C"

    },
    {

        question : "5.The external JavaScript file must contain the <script> tag.",


        choiceA : "True",

        choiceB : "False",

        choiceC : "None",

        correct : "B"

    },
    {

        question : "6.How do you write 'Hello World' in an alert box?",


        choiceA : "msgBox('Hello World');",

        choiceB : "alert('Hello World');",

        choiceC : "msg('Hello World');",

        correct : "B"

    },
    {

        question : "7.How do you create a function in JavaScript?",


        choiceA : "function = myFunction()",

        choiceB : "function : myFunction()",

        choiceC : "function  myFunction()",

        correct : "C"

    },
    {

        question : "8.How do you call a function named 'myFunction'?",


        choiceA : "myFunction()",

        choiceB : "call myFunction()",

        choiceC : "call function myFunction()",

        correct : "A"

    },
    {

        question : "9.How to write an IF statement in JavaScript?",


        choiceA : "if i = 5 then",

        choiceB : "if i = 5",

        choiceC : "if (i == 5)",

        correct : "C"

    },
    {

        question : "10.How to write an IF statement for executing some code if 'i' is NOT equal to 5?",


        choiceA : "if (i != 5)",

        choiceB : "if (i<> 5)",

        choiceC : "if i =! 5 then",

        correct : "A"

    },

];
// create some variables

var lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count =0;
var questionTime = 15; // 15s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


Start.addEventListener("click",startQuiz);

//  start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter , 1000); // 1000ms = 1s
}
// render a question

function renderQuestion(){

    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerText = q.choiceA;
    choiceB.innerText = q.choiceB;
    choiceC.innerText = q.choiceC;

}



//  Function for render progress

function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){

        progress.innerHTML = progress.innerHTML + "<div class='prog' id="+ qIndex +"></div>";

    }

}
//  counter render
function renderCounter() {
    if (count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change the progress and show wrong
        answerIsWrong()
    if (runningQuestion< lastQuestion){
          runningQuestion++;
          renderQuestion();
    }else{
        // end the quiz ans show the score
        clearInterval(TIMER);
        scoreRender();
    }  
  } 
}
//  check the answer
function checkanswer(answer) {
    if ( answer == questions[runningQuestion].correct){
        //  answer is correct
        score++;
        // change the progress color to green
        answerIsCorrect()
    }else {
        // answer is wrong
        // change the progress color to red
        answerIsWrong()
    }
    count = 0;
    if (runningQuestion< lastQuestion){
          runningQuestion++;
          renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();

    }  
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.color ="green";
    
}

// answer is wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.color ="red";
    
}

var scoreCo = 0;
// score render
function scoreRender(){
    if (scoreCo >= 1 ) {
        return;
    }
     scoreDiv.style.display = "block";

    //  calculate the amount of question percent answered by the user
       var totalScore = Math.round (score );
    // show the perecentage of correct answers  
    scoreDiv.innerHTML = scoreDiv.innerHTML + "<p>"+ totalScore + "</p>"; 
    scoreCo = scoreCo + 1
   
    
}







