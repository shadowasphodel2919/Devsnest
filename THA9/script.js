var row = "<tr>";
for(let i = 0; i < 6; i++){
    row += "<td></td>";
}
row += "</tr>";

var columns="";

for(let i = 0; i < 6; i++){
    columns += row;
}


var table = document.querySelector('table');
console.log(table);

table.innerHTML = columns;


var cells = document.querySelectorAll('td');

cells.forEach(cell => {
    cell.classList.add("cell");
});
var head = document.querySelector('.head');

head.innerHTML = "Seat Booked : 0 Seats Left : 36";

var seatsLeft = 36;
var seatsBooked = 0;
function onClick(add){
    if(add){
        seatsBooked++;
        seatsLeft--;
    }
    else{
        seatsBooked--;
        seatsLeft++;
    }
}

function disp(){
    head.innerHTML = "Seat Booked : " + seatsBooked + " Seats Left : " + seatsLeft;
    console.log(seatsBooked + " " + seatsLeft);
}

cells.forEach(cell => {
    cell.addEventListener('click', e => {
        if(cell.classList.contains('checked')){//uncheck
            onClick(false);
            disp();
            cell.classList.remove('checked');
        }
        else{//check
            onClick(true);
            disp();
            cell.classList.add('checked');
        }
    });
});