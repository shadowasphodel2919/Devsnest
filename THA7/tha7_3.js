/**
 * 3. Write a JavaScript program to get the length of a JavaScript object.
 *   Sample object : 
 *   var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
 */
var student  = {
    name = "David Rayy",
    sclass = "VI",
    rollno = 12
};
var objLen = Object.keys(student).length;
console.log(objLen);