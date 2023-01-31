import React from "react";
import { arrayBuffer } from "stream/consumers";
import wordsList from '../util/just-words.json'
console.log("word list: ", wordsList)

export const fiftyRandomWords = (words: []) => {
 let els = generateElements()
 let wordList = words.slice(els[0], els[1])
 return wordList
}

const generateElements = () => {
 let firstNum = Math.floor(Math.random() * 10000)
 let secondNum
 if (10000 - firstNum < 50) {
     secondNum = firstNum - 50
     console.log("first higher than second", [secondNum, firstNum])
     return [secondNum, firstNum]
 } else {
     secondNum = firstNum + 50
     console.log( "second higher than first", [firstNum, secondNum])
     return [firstNum, secondNum]
 }
}

interface WordList {
    words: []
}

interface WordListProps {
    words: WordList
}

console.log("random words", fiftyRandomWords(wordsList))

export default function App() {
let words = fiftyRandomWords(wordsList)
console.log("words in function", words)
    return (
    <>
      <h1>this is where we'll build the app</h1>
      <ol>
        {words.map(word => {return(
            <li key={word}>{word}</li>
        )
        })}
      </ol>
    </>
  );
}
