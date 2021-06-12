function find(n){
    var maxF = 0;
    var c = 0;
    var element = n[0];
    for(i = 0; i < n.length; i++){
        for(j = i; j < n.length; j++){
            if(n[i] == n[j]){
                c++;
            }
        }
        if(maxF < c){
            maxF = c;
            element = n[i];
        }
        c = 0;
    }
    console.log(element + " ( " +maxF +" times )");
}

find([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
