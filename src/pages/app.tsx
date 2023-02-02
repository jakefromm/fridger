import React from "react";
import '../styles/index.scss'
import WordList from "../components/wordlist";

export default function App() {
    return (
    <>
    <div className="sidebar">
    <WordList />
</div>

<div className="content">
  <h2>Fridger</h2>
  <p>A fridge poetry simulator</p>
</div>
    </>
  );
}
