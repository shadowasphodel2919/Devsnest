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
        q:"What you know about rolling down in the deep?",
        a:[
            {val:"A Lot", check: true},
            {val:"I have somewhat idea", check: false},
            {val:"Nothing", check: false},
            {val:"A little", check: false}
        ]
    },
    {
        q:"When does your brain goes numb?",
        a:[
            {val:"When I use flexbox.", check: false},
            {val:"Nothing phases me.", check: true},
            {val:"When I use grid.", check: false},
            {val:"When I use tables.", check: false}
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
    if(i == 2){
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