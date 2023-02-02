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
  <h2>CSS Template</h2>
  <p>A full-height, fixed sidenav and content.</p>
    
</div>
    </>
  );
}
