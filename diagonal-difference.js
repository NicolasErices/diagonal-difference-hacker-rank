
//this is an example matrix since in hacker rank they test
//multiple quadratic arrays of 100x100 or less or more with
//negative deaths as positive
// const arr = [
//     [-10, 3, 0, 5, -4],
//     [2, -1, 0, 2, -8],
//     [9, -1, -5, 6, 0],
//     [9, -7, -4, 8, -2],
//     [3, 7, 8, -5, 0],
// ];

function matrixTwoDimension(arr){
    let diagonalLeft = [];
    let diagonalRight = [];
    for(let i = 0; i < arr.length; i++){
        diagonalLeft.push(arr[i][i])
        diagonalRight.push(arr[i][(arr.length - 1) -i])
    }
    // console.log(diagonalRight)
    let sumLeftDiagonal = diagonalLeft.reduce((acc, cur) => {
        return acc + cur
    })
    let sumRightDiagonal = diagonalRight.reduce((acc, cur) => {
        return acc + cur
    })
    let Outcome = Math.abs(sumRightDiagonal - sumLeftDiagonal)
    return Outcome
}

matrixTwoDimension(arr)