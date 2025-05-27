import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);

  if (!props.meaning) {
    return null;
  }

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <div className="definition">
          {" "}
          {props.meaning.definitions[0].definition}{" "}
        </div>
        <div className="example"> {props.meaning.definitions[0].example} </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}