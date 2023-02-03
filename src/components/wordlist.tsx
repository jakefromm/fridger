import React, { useState } from "react";
import wordsList from "../util/techWords.json";
import WordElement from "./wordElement";
console.log("word list: ", wordsList);

const randomWords = (wordCount: number, words: any[]) => {
  let els = generateElements(wordCount, words);
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

const generateElements = (wordCount: number, list: any[]) => {
  let firstNum = Math.floor(Math.random() * list.length);
  let secondNum;
  if (list.length - firstNum < wordCount) {
    secondNum = firstNum - wordCount;
    console.log("first higher than second", [secondNum, firstNum]);
    return [secondNum, firstNum];
  } else {
    secondNum = firstNum + wordCount;
    console.log("second higher than first", [firstNum, secondNum]);
    return [firstNum, secondNum];
  }
};

export default function WordList() {
  let words = [];
  words.push(randomWords(50, wordsList.buzzwords));
  words.push(randomWords(25, wordsList.genericWords));
  words = words.reduce((elem1, elem2) => elem1.concat(elem2));
  words = shuffleArray(words);
  console.log("words in function", words);
  return (
    <div className="container">
      <ul className="word-list" style={{ listStyleType: "none" }}>
        {words.map((word: string) => {
          return (
            <li key={word}>
              <WordElement word={word} />
            </li>
          );
        })}
      </ul>
      <div className="fridge"></div>
    </div>
  );
}
