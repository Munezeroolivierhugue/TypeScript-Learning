"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinWords = spinWords;
function spinWords(words) {
    let finalWord = words.split(" ").map(word => {
        if (word.length < 5) {
            return word;
        }
        else {
            return word.split('').reverse().join('');
        }
    }).join(' ');
    return finalWord;
}
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
