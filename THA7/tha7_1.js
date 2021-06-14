/**
 * 1. Write a JavaScript program to list the properties of a JavaScript object.
 * Sample object: 
 * var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
 * Sample Output: 
 * name,sclass,rollno
 */
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

for (item in student){
    console.log(item);
}