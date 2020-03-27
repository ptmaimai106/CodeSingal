function isCryptSolution(crypt, solution) {

    let result = [];
    let arr = solution.join("");

    for (let i = 0; i < crypt.length; i++) {
        let temp = Array.from(crypt[i]);
        const num1 = temp.reduce((sum, item) => {

            let index = arr.indexOf(item);
            sum += Number(arr[index + 2]);

            return sum;
        }, '');
        result.push(num1);
    }

    console.log(result);
    if (Number(result[2]) === 0) {
        if (result[0].length === 1 && result[1].length === 1)
            return true;
        return false;
    }
    else if (Number(result[2]) !== 0 && result[2][0] === '0')
        return false;
    else
        return (Number(result[0]) + Number(result[1]) === Number(result[2])) && (result[0][0] !== '0' && result[1][0] !== '0');
}

const crypt =
    ["WASD",
        "IJKL",
        "AOPAS"]

const solution = [
    ["W", "2"],
    ["A", "0"],
    ["S", "4"],
    ["D", "1"],
    ["I", "5"],
    ["J", "8"],
    ["K", "6"],
    ["L", "3"],
    ["O", "7"],
    ["P", "9"]
]
console.log(isCryptSolution(crypt, solution))