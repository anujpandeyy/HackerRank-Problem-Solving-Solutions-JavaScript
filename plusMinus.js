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


function plusMinus(arr) {
    let count_p = 0;
    let count_o = 0;
    let count_n = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            count_p += 1;
        }
        else if(arr[i]<0){
            count_n += 1;
        }else{
            count_o += 1;
        }
    }
    let pRatio = (count_p/arr.length).toFixed(6);
    let oRatio = (count_o/arr.length).toFixed(6);
    let nRatio = (count_n/arr.length).toFixed(6);
    return [pRatio,oRatio,nRatio];
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

   const res = plusMinus(arr);
   console.log(res[0]);
   console.log(res[2]);
   console.log(res[1]);
}
