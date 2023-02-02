import React, { Component, useState } from "react";
import Draggable from "react-draggable";

export default function WordElement(props: any) {
  return (
    <Draggable>
      <p className="word">{props.word}</p>
    </Draggable>
  );
}
