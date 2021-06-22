let moves = 0;
let points = 0;
var gameover = document.querySelector('.gameover');

let imgs = [{img:"<img src='fire-go.gif' alt='fire'>",val:"fire"} , 
{img:"<img src='water-go.gif' alt='water'>",val:"water"}, 
{img:"<img src='ball-go.gif' alt='ball'>",val:"ball"}];
let random_objs = imgs.sort(() => Math.random() - 0.5);
var enclose = "<tr>";
for(let i = 0; i < 3; i++){
    enclose += "<td><div class='flip-card-container' id="+imgs[i].val+"><div class='flip-card'><div class='flip-card-front'><img src='seal.jpg' alt='seal'></div><div class='flip-card-back'>"+imgs[i].img+"</div></div></div></td>";
}
enclose += "</tr>";
random_objs = imgs.sort(() => Math.random() - 0.5);
enclose += "<tr>";
for(let i = 0; i < 3; i++){
    enclose += "<td><div class='flip-card-container' id="+imgs[i].val+"><div class='flip-card'><div class='flip-card-front'><img src='seal.jpg' alt='seal'></div><div class='flip-card-back'>"+imgs[i].img+"</div></div></div></td>";
}
enclose += "</tr>";

var body = document.querySelector('table');
body.innerHTML = enclose;
const cards = document.querySelectorAll('.flip-card-container');
console.log(cards);

let flipped = false;
function flip(){
    this.classList.add("flip");
    if(!flipped){
        flipped = true;
        firstCard = this;
        console.log(firstCard);
        return;
    }
    else{
        flipped = false;
        secondCard = this;
        console.log(secondCard);
        moves++;
    }
    console.log(firstCard.id);
    if(firstCard.id === secondCard.id){
        firstCard.removeEventListener('click', flip);
        secondCard.removeEventListener('click', flip);
        points++;
        setTimeout(() => {
            firstCard.setAttribute("style", "visibility: hidden");
            secondCard.setAttribute("style", "visibility: hidden");
        },1500);
        
    }
    else{
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        },1500);
            
    }
    scoreboard.innerHTML = "Moves: "+moves+" Points: "+points;
    if(points === 3){
        setTimeout(() => {
            gameover.setAttribute("style", "visibility : visible");
            scoreboard.setAttribute("style", "visibility : hidden");
        },1500);
        
    }
}

var scoreboard = document.querySelector('.scoreboard');


cards.forEach(card => card.addEventListener('click', flip));


    
