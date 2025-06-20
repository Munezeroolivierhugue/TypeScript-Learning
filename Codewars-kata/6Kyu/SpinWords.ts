// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test"        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

export function spinWords(words: string): string {
    //TODO Have fun :)
  let finalWord: string = words.split(" ").map(word => {
    if(word.length < 5){
      return word
    }
    else{
      return word.split('').reverse().join('')
    }
  }).join(' ')
  return finalWord
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))