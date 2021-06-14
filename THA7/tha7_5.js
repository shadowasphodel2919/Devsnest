/**
 * 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
 * Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
 * Try To Attempt : Difficult Level Increased 
 */
function volume(rad, height){
    return 3.14 * rad * rad * height;
}

var cylinder = {
    rad : 3.0000,
    height : 5.0000
};
var  num = volume(cylinder['rad'], cylinder['height']);
num = (Math.round(num * 100) / 100).toFixed(2);
console.log(num);