function rotateImage(a) {
    let temp = [];
    const n = a.length;
    for (let i = 0; i < n; i++) {
        temp.push([...a[i]])
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 2) {
                console.log(n - j - 1, i, a[n - j - 1][i])
            }
            temp[i][j] = a[n - j - 1][i];

        }
    }
    console.log(temp);

}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
rotateImage(arr)


