// function minMax(n) {
//     let count = 0 //final added value
//     let solvedMax = 0
//     let solvedMin = 0
//     for (let i = 0; i < n.length; i++){
//         count += n[i]
//         let max = n[n.length - 1]
//         let min = n[0]
//         solvedMax += count - max
//         solvedMin += count - min
//     }

//     return count, solvedMin

// }




function miniMaxSum(arr) {
    // Write your code here
    let min_sum = 0
    let max_sum = 0

    for(let i =0; i < arr.length; i++){
        if( i < arr.length -1 ) {
            min_sum += arr[i]
        }
        if (i > 0) {
            max_sum += arr[i]
        }
    }

    console.log(min_sum , max_sum)

}


let arr = [1, 3, 5, 7, 9]


miniMaxSum(arr)