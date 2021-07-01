const inputBox = document.querySelector(".input input");
const but = document.querySelector(".input button");

but.onclick = ()=>{
    var val = inputBox.value;
    console.log(val);
    var localStor = localStorage.getItem("TODO item");
    if(localStor == null)
        listArray = [];
    else
        listArray = JSON.parse(localStor);
    listArray.push(val);
    console.log("button",listArray);
    localStorage.setItem("TODO item", JSON.stringify(listArray));
    console.log(localStorage.getItem("TODO item"));
    display();
    inputBox.value = "";
}
display();
function display(){
    let localStor = localStorage.getItem("TODO item");
    if(localStor == null)
        listArray = [];
    else
        listArray = JSON.parse(localStor);
    console.log("In display",listArray);
    var list = document.querySelector(".list");
    list.textContent = listArray.length;
    var items = "";
    listArray.forEach((element, index) => {
        items += `<div class="item" data="${index}">${element}
        <span class="icon" onclick="deleteItem(${index})">
        <div class="deleteIcon">-</div></span></div>`;
    });
    console.log(items);
    list.innerHTML = items;
    input = "";
}
function deleteItem(index){
    let localStor = localStorage.getItem("TODO item");
    listArray = JSON.parse(localStor);
    listArray.splice(index,1);
    localStorage.setItem("TODO item", JSON.stringify(listArray));
    display();
}



listArray = [];
listArray.push("Task 1");
listArray.push("Task 2");
//console.log(JSON.stringify(listArray));
localStorage.setItem("New TODO", JSON.stringify(listArray));
var lcstr = localStorage.getItem("New TODO");
list = JSON.parse(lcstr);
list.splice(1,1);
//console.log(list);