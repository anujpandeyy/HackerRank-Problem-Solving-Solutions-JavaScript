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


function breakingRecords(scores) {
    let high = scores[0];
    let low = scores[0];
    let highCount = 0;
    let lowCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > high) {
            high = scores[i];
            highCount++;
        } else if (scores[i] < low) {
            low = scores[i];
            lowCount++;
        }
    }

    return [highCount, lowCount];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
