import React from "react";
import { arrayBuffer } from "stream/consumers";
import words from '../util/just-words.json'
export default function App() {
    console.log("word list: ", words)
   const fiftyRandomWords = (words: []) => {
    let els = generateElements()
    return words.slice(els[0], els[1])
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

   console.log("random words", fiftyRandomWords(words))
  return (
    <>
      <h1>this is where we'll build the app</h1>
    </>
  );
}
