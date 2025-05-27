import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span>
              Synonyms: <em key={index}>{synonym}</em>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}