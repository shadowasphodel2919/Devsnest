var row = "<tr>";
for(let i = 0; i < 20; i++){
    row += "<td></td>";
}
row += "</tr>";

var rows = row;

for(let i = 1; i < 20; i++){
    rows += row;
}

var table = document.querySelector('table');

table.innerHTML = rows;

var cells = document.querySelectorAll('td');

console.log(cells);

cells.forEach(cell => {
        cell.classList.add("cell");
});

cells.forEach(cell => {
    cell.addEventListener('click', e => {
        cell.classList.toggle("change");
    });
});

/*console.log("Hii");
var main = document.querySelector(".main");
console.log(main);
for(let i = 0; i < 100; i++){
    let element = document.createElement('div')
    element.classList.add('box')
    element.classList.add('active')
    main.appendChild(element)
}

var boxes = document.querySelectorAll('.box')
boxes.forEach(box => box.addEventListener('click', () => {
    box.classList.toggle('active')
}))*/