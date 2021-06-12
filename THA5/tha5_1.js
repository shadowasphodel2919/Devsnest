function is_array(n){
    //method 1
    //return Array.isArray(n);

    //method 2
    //return n instanceof Array;

    //method 3
    return n.constructor == Array;
}
console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));