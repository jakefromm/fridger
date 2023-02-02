import React from "react";
import wordsList from "../util/3000words.json";
import WordElement from "./wordElement";
console.log("word list: ", wordsList);

export const fiftyRandomWords = (words: any[]) => {
  let els = generateElements();
  let shuffled = shuffleArray(words);
  let selectedWords = shuffled.slice(els[0], els[1]);
  return selectedWords;
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const generateElements = () => {
  let firstNum = Math.floor(Math.random() * wordsList.length);
  let secondNum;
  if (wordsList.length - firstNum < 50) {
    secondNum = firstNum - 50;
    console.log("first higher than second", [secondNum, firstNum]);
    return [secondNum, firstNum];
  } else {
    secondNum = firstNum + 50;
    console.log("second higher than first", [firstNum, secondNum]);
    return [firstNum, secondNum];
  }
};

export default function WordList() {
  let words = fiftyRandomWords(wordsList);
  console.log("words in function", words);
  return (
    <>
      <ol>
        {words.map((word: string) => {
          return (
            <li key={word}>
              <WordElement word={word} />
            </li>
          );
        })}
      </ol>
    </>
  );
}
