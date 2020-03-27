function firstNotRepeatingCharacter(s) {

    let temp = {};
    let arr = s.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (!temp.hasOwnProperty(arr[i]))
            temp[arr[i]] = 1;
        else temp[arr[i]]++;
    }
    console.log(temp)

    for (let key in temp) {
        if (temp.hasOwnProperty(key) && temp[key] === 1) {
            return key;
        }
    }

    return '_';
}
console.log(firstNotRepeatingCharacter('abacabad'))
