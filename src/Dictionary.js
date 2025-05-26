import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResonse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    
    function search(event) {
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResonse);
    }



    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            <Results results={results} />
        </div>
    );
}