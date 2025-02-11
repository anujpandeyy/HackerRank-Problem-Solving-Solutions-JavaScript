'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function miniMaxSum(arr) {
    arr.sort();
    let max = 0;
    let min = 0;
    for(let i=1;i<arr.length;i++){
        max+= arr[i];
    }
    for(let i=0;i<arr.length-1;i++){
        min+= arr[i];
    }
    console.log(min+" "+max);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

