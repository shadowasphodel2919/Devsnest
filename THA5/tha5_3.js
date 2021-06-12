function first(a,n){
    if(a == null || n<0){
        return [];
    }
    if(n == null){
        return a[0];
    }
    return a.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
