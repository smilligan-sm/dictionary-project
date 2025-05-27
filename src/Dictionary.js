import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiKey = "24f16ff06b6aba2369ec3846f0t8bco2";
    let sheCodesAPIUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios
      .get(sheCodesAPIUrl, { headers: { Authorization: `Bearer ${apiKey}` } })

  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <p>What word would you like to look up?</p>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              autoFocus={true}
            />
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}