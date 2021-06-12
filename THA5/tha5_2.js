function array_Clone(n){
    //method 1
    /*var list = [];
    for (i = 0; i < n.length; i++){
        //list.push(n[i]); or
        list[i] = n[i];
    }
    return list;*/

    //method 2 ->shallow clone 
    //return [...n];
    //return Array.from(n);
    //return n.concat();
    
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
