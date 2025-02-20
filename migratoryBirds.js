'use strict';

const fs = require('fs');

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


function migratoryBirds(arr) {
     let birdCount = {};

    arr.forEach(bird => {
        if (birdCount[bird]) {
            birdCount[bird] += 1;
        } else {
            birdCount[bird] = 1;
        }
    });

  
    let maxCount = 0;
    let birdWithMaxCount = Number.MAX_VALUE;  

    for (let bird in birdCount) {
        if (birdCount[bird] > maxCount || (birdCount[bird] === maxCount && bird < birdWithMaxCount)) {
            maxCount = birdCount[bird];
            birdWithMaxCount = bird;
        }
    }
    return parseInt(birdWithMaxCount);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
