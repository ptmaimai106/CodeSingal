function firstDuplicate(a) {
    console.log(a);
    let temp = {}
    for(let i=0; i< a.length ; i++){
       if(temp[a[i]] === 0){
            return a[i];
        }
        else {
            temp[a[i]] = 0;
        }
    }
    return -1;
 
}

console.log(firstDuplicate([2, 2]));
