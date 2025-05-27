import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fas fa-volume-up"></i>{" "}
        </a>
      )}
      <p className="mt-3">{props.phonetic.text}</p>
    </div>
  );
}