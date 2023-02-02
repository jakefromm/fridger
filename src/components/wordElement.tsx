import React from "react";

export default function WordElement(props: any) {
  console.log("word in wordElement: ", props.word);
  return <p>{props.word}</p>;
}
