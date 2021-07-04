var body = document.querySelector('img');
var quote = document.querySelector('quote');
var btn = document.querySelector('.quo');
var btn2 = document.querySelector('.pic');
function getQuote(){
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        console.log(data.content);
        quote.innerHTML = data.content;
    });
}
btn.onclick = () => {
    getQuote();
}
btn2.onclick = () => {
    getPhotoInfo(getRand());
}

console.log(Math.floor(Math.random() * (1084)))
function getRand(){
    return Math.floor(Math.random() * (1084));
}

function getPhotoInfo(val){
    fetch(`https://picsum.photos/id/${val}/info`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        body.src = data.download_url;
    });
}

getPhotoInfo(getRand());
getQuote();

//body.src = `https://picsum.photos/200/300`;
