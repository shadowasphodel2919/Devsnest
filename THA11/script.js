var main = document.querySelector('.main');
var quiz = document.querySelector('.quiz');
var scoreBoard = document.querySelector('.scoreboard');
var question = document.querySelector('.question');
var options = document.querySelector('.options');
var playagain = document.querySelector('.playagain');

var wrongCount = 0;
var correctCount = 0;

var questions = [
    {
        q:"The series Friends is set in which city?",
        a:[
            {val:"New York City", check: true},
            {val:"Los Angeles", check: false},
            {val:"Ghaziabad", check: false},
            {val:"Seattle", check: false}
        ]
    },
    {
        q:"What pet did Ross own?",
        a:[
            {val:"A dog named Keith", check: false},
            {val:"A rabbit called Lancelot", check: false},
            {val:"A monkey named Marcel", check: true},
            {val:" A lizard named Alistair", check: false}
        ]
    },
    {
        q:"What is Monica skilled at?",
        a:[
            {val:"Bricklaying", check: false},
            {val:"Cooking", check: true},
            {val:"American football", check: false},
            {val:"Singing", check: false}
        ]
    },
    {
        q:" What’s the name of Joey’s penguin?",
        a:[
            {val:"Snowflake", check: false},
            {val:"Waddle", check: false},
            {val:"Huggsy", check: true},
            {val:"Bobber", check: false}
        ]
    },
    {
        q:"What song is Phoebe best known for?",
        a:[
            {val:"Smelly Cat", check: true},
            {val:"Smelly Dog", check: false},
            {val:"Smelly Rabbit", check: false},
            {val:"Smelly Worm", check: false}
        ]
    }
]
var questionTag = "";
var quesIndex = 0;
var op = "";
console.log(main);
var i = 0;
function scoreChange(){
    scoreBoard.innerHTML = `Correct : ${correctCount} Incorrect : ${wrongCount}`;
    playagain.setAttribute("style","visibility:visible");
        playagain.addEventListener('click', e => {
            location.reload();
        });
}
//question creation
function createQuestion(){
    if(i == questions.length){
        console.log("Completed");
        quiz.setAttribute("style","display:none");
        scoreBoard.setAttribute("style","visibility:visible");
        scoreChange();
        
        return;
    }
    var ques = questions[i];
    questionTag = "<div class='questionNo'>Question "+(i+1)+": "+ques.q+"</div>";
    op = "";
    for(let j = 0; j < 4; j++){
        op += "<div class='option option"+(j+1)+"'>"+ques.a[j].val+"</div>";
    }

    question.innerHTML = questionTag;
    options.innerHTML = op;
    quesIndex = i;
    i++;
    selectChoice();
}
function findOP(text){
    var q = questions[quesIndex].a;
    for(let i = 0; i < q.length; i++){
        if(q[i].check){
            if(q[i].val == text){
                return true;
            }
        }
    }
    return false;
}
createQuestion();
function selectChoice(){
    var ops = document.querySelectorAll('.option');
    console.log(ops);
    ops.forEach(op => {
        op.addEventListener('click', e => {
            console.log(op.innerHTML);
            console.log(findOP(op.innerHTML));
            if(findOP(op.innerHTML)){
                console.log("ohho");
                correctCount++;
                op.classList.add("correct");
                setTimeout(() => {
                    op.classList.remove("correct");
                    createQuestion(); 
                    console.log("Done Question");               
                },1500);
            }
            else{
                op.classList.add("wrong");
                wrongCount++;
                setTimeout(() => {
                    op.classList.remove("correct");
                    createQuestion(); 
                    console.log("Done Question");               
                },1500);
            }
        });
    });
}