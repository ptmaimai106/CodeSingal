let l = {
    value: 1,
    next : {
        value: 2,
        next : {
            value : 2,
            next: {
                value: 3,
                next: null
            }
        }
    }
}

// function getValueAtIndex(l,index){
//     let temp = l;
//     for(let i=0; i<index; i++){
//         temp = temp.next;
//     }

//     return temp.value;
// }

// function isListPalindrome(l) {
//     let length = 0;
//     let temp = l;
//     if(temp === null || temp.next === null){
//         return true;
//     }

//     while(temp.next !== null){
//         length ++;
//         temp = temp.next;
//     }

//    length++;

//     for(let i=0; i<length/2; i++){
//         if(getValueAtIndex(l,i) !== getValueAtIndex(l,length-i-1)){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isListPalindrome(l));



function isListPalindrome(list) {
    var slow = null,
        fast = list,
        temp;
    // Find center point and reverse the first half of the list
    while (fast && fast.next) {
        fast = fast.next.next;
        temp = list.next;
        list.next = slow;
        slow = list;
        list = temp;
    }
    // If fast not null, list length is odd, ignore the center value
    if (fast) {
        list = list.next;
    }
    // Find the first difference
    while (list) {
        if (slow.value != list.value) return false;
        slow = slow.next;
        list = list.next;
    }
    // Return true, if no diff
    return true;
}

/* Using recursion O(n) solution and 2 extra variables and lot of stack. */
function isListPalindrome2(l) {
    var r = l,
        ret,
        f = v => 
            r ? (r = r.next, ret = !r || f(r.value) && l.value == v, l = l.next, ret)
              : 1;
    return !r || f(r.value);
}

/* The shortest solution. But using internal functions and lot of memory: */
function isListPalindrome3(l) {
    l = JSON.stringify(l).slice(1,-1).split`,`;
    return l + "" == l.reverse();
}

function isListPalindrome(l) {
    if (!l) return true
    let t1 = ""
    let t2 = ""

    console.log("l: ", l);

    while (!!l) {
        t1 = l.value + t1
        t2 = t2 + l.value
        l = l.next

        console.log("t1: ", t1);
        console.log("t2: ", t2);
        console.log("l: ", l);
    }

    
    return t1 === t2
}

isListPalindrome(l);
