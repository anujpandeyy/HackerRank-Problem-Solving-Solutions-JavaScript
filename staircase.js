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


function staircase(n) {
    for (let row = 1; row <= n; row++) {
        let line = "";
        for (let space = 1; space <= n - row; space++) {
            line += " ";
        }
        for (let hash = 1; hash <= row; hash++) {
            line += "#";
        }

        console.log(line);
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
