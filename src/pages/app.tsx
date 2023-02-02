import React from "react";
import "../styles/index.scss";
import WordList from "../components/wordlist";

export default function App() {
  return (
    <>
      <div className="content">
        <div className="title-text">
          <h2 className="title">Fridger: </h2>
          <p>A fridge poetry simulator</p>
        </div>
        <WordList />
      </div>
    </>
  );
}
