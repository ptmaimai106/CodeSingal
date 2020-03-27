// // Singly-linked lists are already defined with this interface:

// let l = {
//     value: 1000,
//     next: {
//         value: 1000,
//         next: null,
//     },
//     toJSON: [Function]
// }

// // 3.2.3.4.10
// function removeKFromList(l, k) {
//     let temp = l, prev;

//     if (temp === null) {
//         return null;
//     }
    

//     if (temp !== null && temp.value === k) { // HEAD
//         l = temp.next;
//         delete temp;
//         temp = l;
//     }

//     if (temp.next === null && temp.value === k)
//         return null



//     while (temp !== null) {
//         if (temp.next !== null && temp.next.value === k && temp.next.next === null) {
//             temp.next = null;
//         }

//         while (temp.next !== null && temp.value === k) {
//             prev = temp;
//             temp = temp.next;
//             prev.value = temp.value;
//             prev.next = temp.next
//             delete temp;
//             temp = prev;
//         }

//         temp = temp.next;
//     }

//     return l;
// }


// console.log(removeKFromList(l, 1000))

// /**
//  * ListNode {
//   value: 3,
//   next:
//    ListNode {
//      value: 1,
//      next: ListNode { value: 2, next: [Object], toJSON: [Function] },
//      toJSON: [Function] },
//   toJSON: [Function] }
//  */




// function removeKFromList(a,k) {
//     if(a === null){
//         return a;
//     }

//     while (a.value === k) {
//         a = a.next;
//         if (a === null) {
//             break;
//         }
//     }

//     if (a === null) {
//         console.log('list is null');
//         return a;
//     }


//     let b = a;
//     while (b.next !== null) {
//         let c = b;
//         while (true) {
//             if (c.next.value !== k) {
//                 if (c.next.next === null) {
//                     break;
//                 }
//                 c = c.next;
//             } else {
//                 break;
//             }
//         }
//         if (c.next.next === null) {
//             if (c.next.value === k)
//                 c.next = null;
//             break;
//         } else {
//             c.next = c.next.next;
//         }
//         b = b.next;
//     }

//     return a;
// }





// function removeKFromList(l, k) {
//     if(l===null) return null;
//     else {
//         l.next = removeKFromList(l.next,k);
//         return (l.value===k)? l.next: l
//     }
// }




