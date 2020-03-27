

/*

Sudoku is a number-placement puzzle. 
The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, 
and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers
 represents a valid Sudoku puzzle according to the layout rules described above.
 Note that the puzzle represented by grid does not have to be solvable.


*/
let grid = [

    [".", ".", ".", ".", ".", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", "3", ".", ".", "2", ".", "4", ".", "."],
    [".", ".", "7", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", "4", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "."],
    [".", ".", ".", ".", ".", "5", "2", ".", "."]

];

function check(arr) {
    // console.log(arr)

    let regEx = /[.,]/gi;
    let number = /[0-9]/gi;
    arr = arr.replace(regEx, '');
    arr = Array.from(arr);

    const result = arr.reduce((sum, item) => {
        if (!sum[item])
            sum[item] = 0;
        sum[item]++;
        return sum;
    }, {})


    for (let key in result) {
        if (result[key] > 1)
            return false;
    }
    return arr.every(item => item.match(number))
}

function checkSquare(grid, row, col) {
    let arr = [];
    for (let i = row; i < 3 + row; i++) {
        for (let j = col; j < col + 3; j++)
            arr.push(grid[i][j]);
    }

    if (row === 6 && col === 3) {
        console.log(arr)
    }

    return check(arr.join());
}




function sudoku2(grid) {
    let result = true;

    for (let i = 0; i < 9; i++) {
        if (!check(grid[i].join('')))//check hang ngang
            return false;

        let temp = [];
        for (let j = 0; j < 9; j++) {
            temp.push(grid[j][i]);

        }
        if (!check(temp.join('')))//check hang doc 
            return false;

    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 3; j++) {
            if (!checkSquare(grid, i, j * 3)) {
                return false;
            }
        }
    }


    return result;
}

console.log(sudoku2(grid))








